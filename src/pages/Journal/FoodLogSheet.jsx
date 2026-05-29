import { useState } from 'react';
import { X, Loader2, Sparkles, Check } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { callGemini } from '../../utils/gemini';

const mockFoodLog =
  "That sounds like a tasty treat! Suya is high in protein which works well for your goal. It can be a bit high in sodium, so drinking extra water today and pairing your next meal with vegetables would balance things out nicely.";

function getCurrentTime() {
  const now = new Date();
  return now.toTimeString().slice(0, 5);
}

function formatTimeLabel(timeStr) {
  const [h, m] = timeStr.split(':').map(Number);
  const period = h >= 12 ? 'PM' : 'AM';
  const hour = h % 12 || 12;
  return `${hour}:${m.toString().padStart(2, '0')} ${period}`;
}

export default function FoodLogSheet({ onClose }) {
  const { state, dispatch } = useAppContext();
  const [foodInput, setFoodInput] = useState('');
  const [timeInput, setTimeInput] = useState(getCurrentTime());
  const [step, setStep] = useState('input'); // 'input' | 'loading' | 'preview'
  const [aiResponse, setAiResponse] = useState('');

  const handleLogIt = async () => {
    if (!foodInput.trim()) return;
    setStep('loading');
    const restrictions = state.restrictions.length ? state.restrictions.join(', ') : 'none';
    const prompt = `The user's health goal is ${state.healthGoal} and dietary restrictions are ${restrictions}. They just ate: ${foodInput}. Give a short, friendly, non-judgmental impact analysis: estimated calories, whether it fits their goal, and if not, one gentle corrective suggestion for their next meal. Under 60 words, plain text only.`;
    const result = await callGemini(prompt, mockFoodLog);
    setAiResponse(result);
    setStep('preview');
  };

  const handleConfirm = () => {
    const today = new Date();
    const dateLabel = `Today, ${today.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;
    dispatch({
      type: 'ADD_JOURNAL_ENTRY',
      payload: {
        date: dateLabel,
        title: foodInput,
        time: formatTimeLabel(timeInput),
        description: aiResponse,
        note: aiResponse,
        tag: 'Quick Log',
        saved: '0g',
      },
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Sheet */}
      <div className="relative w-full max-w-2xl bg-white rounded-t-[2.5rem] shadow-2xl px-6 pt-6 pb-10 flex flex-col gap-5 animate-slide-up">
        {/* Handle bar */}
        <div className="w-10 h-1.5 bg-outline-variant/40 rounded-full mx-auto mb-1" />

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display text-2xl font-bold text-on-surface">What did you eat?</h3>
            <p className="text-xs text-on-surface-variant mt-0.5 font-medium">Log any meal or snack outside your pantry</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-2xl bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container/80 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Input */}
        <div className="flex flex-col gap-3">
          <textarea
            value={foodInput}
            onChange={e => setFoodInput(e.target.value)}
            placeholder="e.g. Suya with onions and tomatoes, Pounded yam and egusi…"
            rows={3}
            disabled={step !== 'input'}
            className="w-full bg-[#F7FBF7] border border-primary/10 rounded-2xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
          />
          <div className="flex items-center gap-3">
            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest whitespace-nowrap">Time eaten</label>
            <input
              type="time"
              value={timeInput}
              onChange={e => setTimeInput(e.target.value)}
              disabled={step !== 'input'}
              className="bg-[#F7FBF7] border border-primary/10 rounded-xl px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
            />
          </div>
        </div>

        {/* AI Preview card */}
        {step === 'loading' && (
          <div className="flex items-center gap-3 bg-secondary/10 rounded-2xl px-4 py-4">
            <Loader2 size={18} className="text-secondary animate-spin shrink-0" />
            <p className="text-sm text-secondary font-medium">Analysing your meal…</p>
          </div>
        )}

        {step === 'preview' && (
          <div className="bg-secondary/10 rounded-2xl px-5 py-4 flex flex-col gap-3 border border-secondary/20">
            <div className="flex items-center gap-2">
              <Sparkles size={15} className="text-secondary shrink-0" />
              <span className="text-[11px] font-black text-secondary uppercase tracking-widest">Nutritionist take</span>
            </div>
            <p className="text-sm text-on-surface leading-relaxed">{aiResponse}</p>
          </div>
        )}

        {/* Actions */}
        {step === 'input' && (
          <button
            onClick={handleLogIt}
            disabled={!foodInput.trim()}
            className="w-full bg-primary text-white font-bold py-4 rounded-2xl text-sm tracking-wide disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
          >
            Log it
          </button>
        )}

        {step === 'preview' && (
          <div className="flex gap-3">
            <button
              onClick={() => setStep('input')}
              className="flex-1 border border-outline-variant/30 text-on-surface-variant font-bold py-4 rounded-2xl text-sm hover:bg-surface-container transition-colors"
            >
              Edit
            </button>
            <button
              onClick={handleConfirm}
              className="flex-1 bg-primary text-white font-bold py-4 rounded-2xl text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Check size={16} /> Confirm &amp; Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
