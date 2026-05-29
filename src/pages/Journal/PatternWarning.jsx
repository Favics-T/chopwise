import { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { callGemini } from '../../utils/gemini';

const KEYWORDS = ['fried', 'jollof', 'coke', 'soda', 'rice', 'suya', 'puff puff', 'chin chin'];

const mockWarning =
  "Having Jollof Rice frequently is fine, but watch your portion sizes — the tomato base can be acidic which may not suit your Ulcer-safe restriction. Try alternating with ofada rice or yam dishes for variety.";

export default function PatternWarning() {
  const { state } = useAppContext();
  const [warning, setWarning] = useState(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const recent = state.journalEntries.slice(0, 7);
    const combined = recent
      .map(e => `${e.title ?? ''} ${e.note ?? ''} ${e.description ?? ''}`)
      .join(' ')
      .toLowerCase();

    const flagged = KEYWORDS.find(kw => {
      const hits = (combined.match(new RegExp(kw, 'g')) ?? []).length;
      return hits >= 3;
    });

    if (!flagged) return;

    const restrictions = state.restrictions.length ? state.restrictions.join(', ') : 'none';
    const prompt = `The user's health goal is ${state.healthGoal} and restrictions are ${restrictions}. They've had ${flagged} at least 3 times this week. In 1–2 friendly sentences, tell them if this is a concern and what to watch for. Plain text only.`;
    callGemini(prompt, mockWarning).then(text =>
      setWarning({ keyword: flagged, text })
    );
  }, []); // intentionally run once on mount

  if (!warning || dismissed) return null;

  return (
    <div className="mb-6 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4">
      <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
      <div className="flex-1">
        <p className="text-[11px] font-black text-amber-700 uppercase tracking-widest mb-1">
          Pattern noticed · {warning.keyword}
        </p>
        <p className="text-sm text-amber-800 leading-relaxed">{warning.text}</p>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="text-amber-500 hover:text-amber-700 transition-colors shrink-0 mt-0.5"
        title="Dismiss"
      >
        <X size={16} />
      </button>
    </div>
  );
}
