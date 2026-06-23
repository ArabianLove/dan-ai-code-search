/* ───────────────────────────────────────────────
   Motore AI — Claude (Anthropic)
   Onora il contratto di BACKEND_API.md: usa il `systemPrompt`
   ricevuto dal client e alza i limiti quando `godMode` è attivo.

   Per cambiare provider (es. Gemini) basta riscrivere questo
   modulo mantenendo le stesse due funzioni esportate.
   ─────────────────────────────────────────────── */

import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic(); // legge ANTHROPIC_API_KEY dall'ambiente

// Modelli configurabili via env. Default: massima potenza in God Mode,
// modello veloce ed economico in modalità normale.
const MODEL_NORMAL = process.env.AI_MODEL || 'claude-sonnet-4-6';
const MODEL_GODMODE = process.env.AI_MODEL_GODMODE || 'claude-opus-4-8';
const MAX_TOKENS_NORMAL = Number(process.env.AI_MAX_TOKENS || 4096);
// 16000 resta sotto i timeout HTTP dell'SDK senza dover usare lo streaming.
const MAX_TOKENS_GODMODE = Number(process.env.AI_MAX_TOKENS_GODMODE || 16000);
const EFFORT_NORMAL = process.env.AI_EFFORT || 'medium';
const EFFORT_GODMODE = process.env.AI_EFFORT_GODMODE || 'high';

function toClaudeMessages(messages) {
  return (messages || [])
    .filter((m) => m && m.content != null && String(m.content).trim() !== '')
    .map((m) => ({
      role: m.role === 'assistant' ? 'assistant' : 'user',
      content: String(m.content),
    }));
}

function extractText(response) {
  return (response.content || [])
    .filter((b) => b.type === 'text')
    .map((b) => b.text)
    .join('\n')
    .trim();
}

export async function chat({ messages, systemPrompt, godMode }) {
  const params = {
    model: godMode ? MODEL_GODMODE : MODEL_NORMAL,
    max_tokens: godMode ? MAX_TOKENS_GODMODE : MAX_TOKENS_NORMAL,
    messages: toClaudeMessages(messages),
    output_config: { effort: godMode ? EFFORT_GODMODE : EFFORT_NORMAL },
  };
  if (systemPrompt) params.system = systemPrompt;
  // In God Mode attiviamo il ragionamento adattivo per la massima profondità.
  if (godMode) params.thinking = { type: 'adaptive' };

  const response = await client.messages.create(params);
  return extractText(response) || '(nessuna risposta dal modello)';
}

export async function generateTitle({ firstMessage }) {
  const response = await client.messages.create({
    model: MODEL_NORMAL,
    max_tokens: 32,
    output_config: { effort: 'low' },
    system:
      'Genera un titolo brevissimo (massimo 6 parole) per la conversazione. ' +
      'Rispondi SOLO con il titolo, senza virgolette e senza punteggiatura finale.',
    messages: [{ role: 'user', content: String(firstMessage || '').slice(0, 2000) }],
  });
  const title = extractText(response).replace(/^["'\s]+|["'\s]+$/g, '');
  return title.slice(0, 60) || 'Conversazione';
}
