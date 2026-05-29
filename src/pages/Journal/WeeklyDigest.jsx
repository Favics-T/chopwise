import { useState } from 'react';
import { ChevronDown, Sparkles, Loader2, RefreshCw } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { callGemini } from '../../utils/gemini';

const mockDigest =
  "You had a solid week overall! Your protein intake was strong on most days, especially with the egusi and chicken dishes. Midweek leaned a bit heavy on carbs — try swapping one rice meal for a vegetable-forward option like Efo Riro. Keep up the consistency, you're building great habits!";

export default function WeeklyDigest() {
  const { state } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const [digest, setDigest] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDigest = async () => {
    setLoading(true);
    const recent = state.journalEntries.slice(0, 7);
    const restrictions = state.restrictions.length ? state.restrictions.join(', ') : 'none';
    const prompt = `Here are a user's meal journal entries from the past 7 days: ${JSON.stringify(recent)}. Their health goal is ${state.healthGoal} and restrictions are ${restrictions}. Write a 3–4 sentence friendly coaching summary: patterns you noticed, what was balanced, and one specific thing to improve. Be encouraging, plain text only.`;
    const result = await callGemini(prompt, mockDigest);
    setDigest(result);
    setLoading(false);
  };

  return (
    <div className="mb-8 bg-primary/10 border border-primary/20 rounded-3xl overflow-hidden">
      <button
        onClick={() => setIsOpen(o => !o)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <div className="flex items-center gap-3">
          <Sparkles size={18} className="text-primary" />
          <span className="font-display font-bold text-lg text-on-surface">This Week</span>
        </div>
        <ChevronDown
          size={20}
          className={`text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-6 flex flex-col gap-4">
          {loading && (
            <div className="flex items-center gap-3">
              <Loader2 size={18} className="text-primary animate-spin" />
              <p className="text-sm text-primary font-medium">Analysing your week…</p>
            </div>
          )}

          {!loading && digest && (
            <div className="flex flex-col gap-3">
              <p className="text-sm text-on-surface leading-relaxed">{digest}</p>
              <button
                onClick={fetchDigest}
                className="self-start flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest hover:underline"
              >
                <RefreshCw size={13} /> Refresh digest
              </button>
            </div>
          )}

          {!loading && !digest && (
            <div className="flex flex-col gap-3">
              <p className="text-sm text-on-surface-variant">
                Get an AI-powered summary of your eating patterns, what's working, and one thing to improve.
              </p>
              <button
                onClick={fetchDigest}
                className="self-start bg-primary text-white px-6 py-3 rounded-2xl text-sm font-bold hover:opacity-90 transition-opacity"
              >
                Get AI Digest
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
