import { useState } from 'react';
import { ArrowRight, ArrowLeft, Plus, X, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { goals, restrictions } from '../../data/mockdata';
import { useOnboarding } from '../../hook/useOnboarding';
import ProgressBar from './ProgressBar';
import GoalTile from './GoalTile';
import RestrictionTile from './RestrictionTile';

export default function Onboarding() {
  const { state, dispatch, customRestriction, setCustomRestriction } = useOnboarding();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [showCustomInput, setShowCustomInput] = useState(false);

  const selectedGoalMeta = goals.find(g => g.id === state.healthGoal);

  const customRestrictionsList = state.restrictions.filter(
    r => !restrictions.find(p => p.id === r)
  );

  const handleAddCustomRestriction = () => {
    const trimmed = customRestriction.trim();
    if (!trimmed) return;
    dispatch({ type: 'TOGGLE_RESTRICTION', payload: trimmed });
    setCustomRestriction('');
    setShowCustomInput(false);
  };

  const allRestrictionNames = [
    ...state.restrictions
      .filter(id => restrictions.find(r => r.id === id))
      .map(id => restrictions.find(r => r.id === id).title),
    ...customRestrictionsList,
  ];

  // ── Step 0: Goal ─────────────────────────────────────────────────────────
  const StepGoal = () => (
    <motion.div
      key="goal"
      className="flex flex-col h-full"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Header */}
      <div className="flex-shrink-0 px-7 pt-7 pb-5">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-[7px] h-[7px] rounded-full bg-[#4ade80]" />
          <span
            className="text-[11px] font-bold tracking-[0.2em] uppercase"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            ChopWise
          </span>
        </div>
        <p
          className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-1.5"
          style={{ color: '#4ade80' }}
        >
          Step 1 of 2
        </p>
        <h1
          className="leading-[1.1] mb-1.5"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(28px, 5vw, 34px)',
            color: '#f0faf2',
          }}
        >
          What's your{' '}
          <em className="not-italic" style={{ color: '#4ade80', fontStyle: 'italic' }}>
            goal?
          </em>
        </h1>
        <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
          We'll personalise every recipe and pantry suggestion around this.
        </p>
      </div>

      <ProgressBar step={0} />

      {/* Goal list */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-7 pt-4 pb-2">
        <div className="flex flex-col gap-2">
          {goals.map(goal => (
            <GoalTile
              key={goal.id}
              {...goal}
              isSelected={state.healthGoal === goal.id}
              onClick={id => dispatch({ type: 'SET_HEALTH_GOAL', payload: id })}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="flex-shrink-0 px-7 pt-4 pb-7 flex items-center gap-3"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <button
          onClick={() => navigate('/recipes')}
          className="px-4 py-3.5 rounded-[14px] text-[13px] font-semibold transition-all"
          style={{
            background: 'transparent',
            border: '1.5px solid rgba(255,255,255,0.07)',
            color: 'rgba(255,255,255,0.3)',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Skip
        </button>
        <button
          onClick={() => setStep(1)}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-[14px] font-bold text-[14px] transition-all duration-200 active:scale-[0.98]"
          style={{
            background: '#4ade80',
            color: '#071209',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Continue <ArrowRight size={17} />
        </button>
      </div>
    </motion.div>
  );

  // ── Step 1: Restrictions ─────────────────────────────────────────────────
  const StepRestrictions = () => (
    <motion.div
      key="restrictions"
      className="flex flex-col h-full"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Header */}
      <div className="flex-shrink-0 px-7 pt-7 pb-5">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-[7px] h-[7px] rounded-full bg-[#4ade80]" />
          <span
            className="text-[11px] font-bold tracking-[0.2em] uppercase"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            ChopWise
          </span>
        </div>
        <p
          className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-1.5"
          style={{ color: '#4ade80' }}
        >
          Step 2 of 2
        </p>
        <h1
          className="leading-[1.1] mb-1.5"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(28px, 5vw, 34px)',
            color: '#f0faf2',
          }}
        >
          Any foods to{' '}
          <em className="not-italic" style={{ color: '#4ade80', fontStyle: 'italic' }}>
            skip?
          </em>
        </h1>
        <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Select all that apply — we'll filter every recipe automatically.
        </p>
      </div>

      <ProgressBar step={1} />

      {/* Restrictions list */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-7 pt-4 pb-2">
        <div className="flex flex-col gap-[7px] mb-5">
          {restrictions.map(r => (
            <RestrictionTile
              key={r.id}
              {...r}
              isChecked={state.restrictions.includes(r.id)}
              onToggle={id => dispatch({ type: 'TOGGLE_RESTRICTION', payload: id })}
            />
          ))}
        </div>

        {/* Custom restrictions */}
        <div className="mb-4">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.18em] mb-2.5"
            style={{ color: '#3d6645' }}
          >
            Add your own
          </p>

          {/* Custom pills */}
          {customRestrictionsList.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {customRestrictionsList.map(r => (
                <div
                  key={r}
                  className="flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-full text-[11px] font-semibold"
                  style={{
                    background: 'rgba(74,222,128,0.1)',
                    border: '1px solid rgba(74,222,128,0.2)',
                    color: '#4ade80',
                  }}
                >
                  {r}
                  <button
                    onClick={() => dispatch({ type: 'TOGGLE_RESTRICTION', payload: r })}
                    className="w-[14px] h-[14px] rounded-full flex items-center justify-center transition-colors"
                    style={{ color: '#4a7a52' }}
                  >
                    <X size={9} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {showCustomInput ? (
            <div className="flex gap-2">
              <input
                autoFocus
                type="text"
                value={customRestriction}
                onChange={e => setCustomRestriction(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleAddCustomRestriction()}
                placeholder="e.g. Soy-free, Low sodium…"
                className="flex-1 px-3 py-2.5 rounded-xl text-[12px] font-medium outline-none transition-all"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1.5px solid rgba(74,222,128,0.3)',
                  color: '#e8f5ea',
                  fontFamily: "'DM Sans', sans-serif",
                }}
              />
              <button
                onClick={() => { setShowCustomInput(false); setCustomRestriction(''); }}
                className="px-3 py-2.5 rounded-xl text-[11px] font-semibold transition-all"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1.5px solid rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.35)',
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleAddCustomRestriction}
                disabled={!customRestriction.trim()}
                className="px-4 py-2.5 rounded-xl text-[11px] font-bold transition-all disabled:opacity-40"
                style={{
                  background: 'rgba(74,222,128,0.12)',
                  border: '1.5px solid rgba(74,222,128,0.25)',
                  color: '#4ade80',
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Add
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowCustomInput(true)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-[12px] font-semibold transition-all"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1.5px dashed rgba(74,222,128,0.2)',
                color: '#4ade80',
              }}
            >
              <Plus size={14} /> Add custom restriction
            </button>
          )}
        </div>
      </div>

      {/* Footer */}
      <div
        className="flex-shrink-0 px-7 pt-4 pb-7 flex items-center gap-3"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <button
          onClick={() => setStep(0)}
          className="flex items-center gap-1.5 px-4 py-3.5 rounded-[14px] text-[13px] font-semibold transition-all"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1.5px solid rgba(255,255,255,0.07)',
            color: 'rgba(255,255,255,0.4)',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <ArrowLeft size={15} /> Back
        </button>
        <button
          onClick={() => setStep(2)}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-[14px] font-bold text-[14px] transition-all duration-200 active:scale-[0.98]"
          style={{
            background: '#4ade80',
            color: '#071209',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Set up Pantry <ArrowRight size={17} />
        </button>
      </div>
    </motion.div>
  );

  // ── Step 2: Done ─────────────────────────────────────────────────────────
  const StepDone = () => (
    <motion.div
      key="done"
      className="flex flex-col items-center justify-center flex-1 px-7 pb-8 text-center gap-5"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <motion.div
        className="w-20 h-20 rounded-full flex items-center justify-center text-[36px]"
        style={{
          background: 'rgba(74,222,128,0.08)',
          border: '1.5px solid rgba(74,222,128,0.25)',
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 14, delay: 0.1 }}
      >
        🎉
      </motion.div>

      <div>
        <h2
          className="font-black leading-tight mb-2"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(26px, 5vw, 32px)',
            color: '#f0faf2',
          }}
        >
          You're all set!
        </h2>
        <p className="text-[13px] leading-relaxed max-w-[260px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Your personalised ChopWise profile is ready. Time to stock your pantry.
        </p>
      </div>

      {/* Summary card */}
      <div
        className="w-full rounded-2xl p-4 flex flex-col gap-3"
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(74,222,128,0.15)',
        }}
      >
        <div className="flex justify-between items-center text-[13px]">
          <span style={{ color: '#4a7a52' }} className="font-medium">Goal</span>
          <span style={{ color: '#e8f5ea' }} className="font-semibold">{state.healthGoal}</span>
        </div>
        <div
          className="flex justify-between items-start text-[13px]"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 12 }}
        >
          <span style={{ color: '#4a7a52' }} className="font-medium">Dietary filters</span>
          <span
            style={{ color: '#e8f5ea', maxWidth: 180, textAlign: 'right' }}
            className="font-semibold text-[12px] leading-relaxed"
          >
            {allRestrictionNames.length > 0 ? allRestrictionNames.join(', ') : 'None selected'}
          </span>
        </div>
      </div>

      <button
        onClick={() => navigate('/pantry-setup')}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-[14px] font-bold text-[14px] transition-all duration-200 active:scale-[0.98] mt-1"
        style={{
          background: '#4ade80',
          color: '#071209',
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        Start Pantry Setup <ArrowRight size={17} />
      </button>

      <button
        onClick={() => navigate('/recipes')}
        className="text-[12px] font-semibold transition-colors"
        style={{ color: 'rgba(255,255,255,0.25)' }}
      >
        Skip for now
      </button>
    </motion.div>
  );

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: '#060f07' }}
      >
        <div
          className="w-full flex flex-col overflow-hidden"
          style={{
            maxWidth: 440,
            minHeight: '100svh',
            background: '#0d1a0f',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <AnimatePresence mode="wait">
            {step === 0 && <StepGoal key="goal" />}
            {step === 1 && <StepRestrictions key="restrictions" />}
            {step === 2 && <StepDone key="done" />}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}