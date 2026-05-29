import { useState } from 'react';
import { ArrowRight, ArrowLeft, X, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { goals, restrictions } from '../../data/mockdata';
import { useOnboarding } from '../../hook/useOnboarding';

// ── Step indicators ──────────────────────────────────────────────────────────
function ProgressDots({ step }) {
  return (
    <div className="flex items-center gap-1.5">
      {[0, 1, 2].map(i => (
        <div
          key={i}
          className="h-1.5 rounded-full transition-all duration-300"
          style={{
            width: i === step ? 20 : 6,
            background: i === step ? '#4ade80' : 'rgba(255,255,255,0.15)',
          }}
        />
      ))}
    </div>
  );
}

// ── Goal card for the 2×2 grid ───────────────────────────────────────────────
function GoalTile({ id, title, description, image, isSelected, onClick }) {
  return (
    <button
      onClick={() => onClick(id)}
      className="relative rounded-[1.25rem] overflow-hidden text-left transition-all duration-300 focus:outline-none"
      style={{
        border: isSelected
          ? '1.5px solid #4ade80'
          : '1.5px solid rgba(255,255,255,0.07)',
        background: isSelected
          ? 'rgba(74,222,128,0.10)'
          : 'rgba(255,255,255,0.04)',
        transform: isSelected ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      {/* food image strip */}
      <div className="h-16 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ opacity: isSelected ? 0.9 : 0.55 }}
        />
      </div>

      {/* check bubble */}
      <div
        className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200"
        style={{
          background: isSelected ? '#4ade80' : 'rgba(0,0,0,0.35)',
          border: isSelected
            ? '1.5px solid #4ade80'
            : '1.5px solid rgba(255,255,255,0.18)',
        }}
      >
        {isSelected && (
          <div className="w-2 h-2 rounded-full bg-[#0a1a0c]" />
        )}
      </div>

      <div className="px-3 pt-2.5 pb-3">
        <p
          className="text-sm font-semibold leading-snug"
          style={{ color: isSelected ? '#e8f5ea' : '#c4dfc8' }}
        >
          {title}
        </p>
        <p className="text-[11px] mt-0.5 leading-snug" style={{ color: '#4a7a52' }}>
          {description}
        </p>
      </div>
    </button>
  );
}

// ── Restriction card for the 3-col grid ──────────────────────────────────────
function RestrictionTile({ id, title, description, image, isChecked, onToggle }) {
  return (
    <button
      onClick={() => onToggle(id)}
      className="relative rounded-[0.875rem] overflow-hidden text-left transition-all duration-200 focus:outline-none"
      style={{
        border: isChecked
          ? '1.5px solid #4ade80'
          : '1.5px solid rgba(255,255,255,0.07)',
        background: isChecked
          ? 'rgba(74,222,128,0.09)'
          : 'rgba(255,255,255,0.03)',
        transform: isChecked ? 'translateY(-1px)' : 'translateY(0)',
      }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-14 object-cover block"
        style={{ opacity: isChecked ? 0.85 : 0.55 }}
      />

      {/* check bubble */}
      <div
        className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full flex items-center justify-center transition-all duration-200"
        style={{
          background: isChecked ? '#4ade80' : 'rgba(0,0,0,0.4)',
          border: isChecked
            ? '1.5px solid #4ade80'
            : '1.5px solid rgba(255,255,255,0.2)',
        }}
      >
        {isChecked && (
          <div className="w-1.5 h-1.5 rounded-full bg-[#0a1a0c]" />
        )}
      </div>

      <div className="px-2.5 pt-2 pb-2.5">
        <p
          className="text-xs font-semibold leading-snug"
          style={{ color: isChecked ? '#e8f5ea' : '#c4dfc8' }}
        >
          {title}
        </p>
        <p className="text-[10px] mt-0.5 leading-snug" style={{ color: '#4a7a52' }}>
          {description}
        </p>
      </div>
    </button>
  );
}

// ── Main Onboarding component ─────────────────────────────────────────────────
export default function Onboarding() {
  const { state, dispatch, customRestriction, setCustomRestriction } = useOnboarding();
  const navigate = useNavigate();
  const [step, setStep] = useState(0); // 0 = goal, 1 = restrictions, 2 = done
  const [showCustomInput, setShowCustomInput] = useState(false);

  const selectedGoalMeta = goals.find(g => g.id === state.healthGoal);

  const handleAddCustomRestriction = () => {
    const trimmed = customRestriction.trim();
    if (!trimmed) return;
    dispatch({ type: 'TOGGLE_RESTRICTION', payload: trimmed });
    setCustomRestriction('');
    setShowCustomInput(false);
  };

  const customRestrictionsList = state.restrictions.filter(
    r => !restrictions.find(p => p.id === r)
  );

  // ── Step 0: Goal ───────────────────────────────────────────────────────────
  const StepGoal = () => (
    <motion.div
      key="goal"
      className="flex flex-col h-full"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Hero banner */}
      <div className="relative flex-shrink-0 h-[200px] lg:h-[240px] overflow-hidden">
        <motion.img
          key={state.healthGoal}
          src={selectedGoalMeta?.image}
          alt={state.healthGoal}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 0.55, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        {/* dark-to-bg gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,26,12,0.25) 0%, rgba(10,26,12,0.96) 100%)',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 lg:px-8 lg:pb-8 text-center">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-2"
            style={{ color: '#4ade80' }}
          >
            ChopWise
          </p>
          <h1
            className="font-display leading-[1.05] font-black tracking-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(26px, 5vw, 38px)',
              color: '#f0faf2',
            }}
          >
            Let's{' '}
            <em className="not-italic" style={{ color: '#4ade80' }}>
              nourish
            </em>{' '}
            your journey.
          </h1>
          <motion.p
            key={state.healthGoal + '-tagline'}
            className="text-sm mt-1.5 font-medium"
            style={{ color: 'rgba(255,255,255,0.5)' }}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            {selectedGoalMeta?.description}
          </motion.p>
        </div>
      </div>

      {/* Goal grid */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-5 lg:px-8 pt-5">
        <p
          className="text-[10px] font-bold uppercase tracking-[0.18em] text-center mb-4"
          style={{ color: '#4ade80' }}
        >
          Choose your primary goal
        </p>
        <div className="grid grid-cols-2 gap-3">
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
      <div className="flex-shrink-0 px-5 lg:px-8 pt-4 pb-6 lg:pb-8">
        <ProgressDots step={0} />
        <button
          onClick={() => setStep(1)}
          className="mt-3 w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm transition-all duration-200 active:scale-95"
          style={{
            background: '#4ade80',
            color: '#0a1a0c',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Continue <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );

  // ── Step 1: Restrictions ───────────────────────────────────────────────────
  const StepRestrictions = () => (
    <motion.div
      key="restrictions"
      className="flex flex-col h-full"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Top header */}
      <div
        className="flex-shrink-0 px-5 lg:px-8 pt-6 pb-5 text-center relative"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <button
          onClick={() => setStep(0)}
          className="absolute left-5 top-6 flex items-center gap-1.5 text-xs font-semibold transition-colors"
          style={{ color: '#4ade80' }}
        >
          <ArrowLeft size={14} /> Back
        </button>
        <p
          className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1.5"
          style={{ color: '#4ade80' }}
        >
          Step 2 of 2
        </p>
        <h2
          className="font-black leading-tight mb-1"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(22px, 4vw, 28px)',
            color: '#f0faf2',
          }}
        >
          Any foods to{' '}
          <em className="not-italic" style={{ color: '#4ade80' }}>
            skip?
          </em>
        </h2>
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Select all that apply — we'll filter every recipe.
        </p>
        {/* selected goal pill */}
        <div
          className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full text-xs font-semibold"
          style={{
            background: 'rgba(74,222,128,0.12)',
            border: '1px solid rgba(74,222,128,0.25)',
            color: '#4ade80',
          }}
        >
          ✓ &nbsp;{state.healthGoal}
        </div>
      </div>

      {/* Restriction grid */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-5 lg:px-8 pt-4">
        <div className="grid grid-cols-3 gap-2.5 mb-5">
          {restrictions.map(r => (
            <RestrictionTile
              key={r.id}
              {...r}
              isChecked={state.restrictions.includes(r.id)}
              onToggle={id => dispatch({ type: 'TOGGLE_RESTRICTION', payload: id })}
            />
          ))}
        </div>

        {/* Custom restrictions already added */}
        {customRestrictionsList.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {customRestrictionsList.map(r => (
              <div
                key={r}
                className="flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-full text-xs font-semibold"
                style={{
                  background: 'rgba(74,222,128,0.1)',
                  border: '1px solid rgba(74,222,128,0.2)',
                  color: '#4ade80',
                }}
              >
                {r}
                <button
                  onClick={() => dispatch({ type: 'TOGGLE_RESTRICTION', payload: r })}
                  className="w-4 h-4 rounded-full flex items-center justify-center transition-colors hover:bg-red-500/20"
                  style={{ color: '#4a7a52' }}
                >
                  <X size={10} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Add custom restriction */}
        <div className="mb-4">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.15em] mb-2"
            style={{ color: '#4a7a52' }}
          >
            Add your own
          </p>
          {showCustomInput ? (
            <div className="flex gap-2">
              <input
                autoFocus
                type="text"
                value={customRestriction}
                onChange={e => setCustomRestriction(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleAddCustomRestriction()}
                placeholder="e.g. Soy-free, Low sodium…"
                className="flex-1 px-3 py-2.5 rounded-xl text-sm font-medium outline-none transition-all"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(74,222,128,0.3)',
                  color: '#e8f5ea',
                  fontFamily: "'DM Sans', sans-serif",
                }}
              />
              <button
                onClick={() => { setShowCustomInput(false); setCustomRestriction(''); }}
                className="px-3 py-2.5 rounded-xl text-xs font-semibold transition-all"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.4)',
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleAddCustomRestriction}
                disabled={!customRestriction.trim()}
                className="px-4 py-2.5 rounded-xl text-xs font-bold transition-all disabled:opacity-40"
                style={{
                  background: 'rgba(74,222,128,0.15)',
                  border: '1px solid rgba(74,222,128,0.25)',
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
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px dashed rgba(74,222,128,0.2)',
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
        className="flex-shrink-0 px-5 lg:px-8 pt-3 pb-6 lg:pb-8 flex items-center gap-3"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <ProgressDots step={1} />
        <button
          onClick={() => navigate('/recipes')}
          className="px-4 py-3.5 rounded-xl text-xs font-semibold transition-all"
          style={{
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.08)',
            color: 'rgba(255,255,255,0.35)',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Skip
        </button>
        <button
          onClick={() => setStep(2)}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 active:scale-95"
          style={{
            background: '#4ade80',
            color: '#0a1a0c',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Set up Pantry <ArrowRight size={17} />
        </button>
      </div>
    </motion.div>
  );

  // ── Step 2: Done ───────────────────────────────────────────────────────────
  const StepDone = () => (
    <motion.div
      key="done"
      className="flex flex-col items-center justify-center flex-1 px-8 text-center gap-4"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <ProgressDots step={2} />

      <motion.div
        className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
        style={{
          background: 'rgba(74,222,128,0.1)',
          border: '2px solid rgba(74,222,128,0.25)',
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
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(24px, 5vw, 32px)',
            color: '#f0faf2',
          }}
        >
          You're all set!
        </h2>
        <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
          Your personalised ChopWise profile is ready. Time to stock your pantry.
        </p>
      </div>

      {/* Profile summary card */}
      <div
        className="w-full max-w-xs rounded-2xl p-4 flex flex-col gap-3"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(74,222,128,0.15)',
        }}
      >
        <div className="flex justify-between items-center text-sm">
          <span style={{ color: '#4a7a52' }} className="font-medium">Goal</span>
          <span style={{ color: '#e8f5ea' }} className="font-semibold">{state.healthGoal}</span>
        </div>
        <div
          className="flex justify-between items-start text-sm"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 10 }}
        >
          <span style={{ color: '#4a7a52' }} className="font-medium">Restrictions</span>
          <span
            style={{ color: '#e8f5ea', maxWidth: 170, textAlign: 'right' }}
            className="font-semibold text-xs leading-relaxed"
          >
            {state.restrictions.length > 0
              ? state.restrictions.join(', ')
              : 'None selected'}
          </span>
        </div>
      </div>

      <button
        onClick={() => navigate('/pantry-setup')}
        className="w-full max-w-xs flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm transition-all duration-200 active:scale-95 mt-2"
        style={{
          background: '#4ade80',
          color: '#0a1a0c',
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        Start Pantry Setup <ArrowRight size={17} />
      </button>

      <button
        onClick={() => navigate('/recipes')}
        className="text-xs font-semibold transition-colors"
        style={{ color: 'rgba(255,255,255,0.3)' }}
      >
        Skip for now
      </button>
    </motion.div>
  );

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: '#0a1a0c' }}
      >
        {/* Card container — feels like a phone card on desktop, full-screen on mobile */}
        <div
          className="w-full flex flex-col overflow-hidden"
          style={{
            maxWidth: 460,
            minHeight: '100svh',
            background: '#0d1f0f',
          }}
        >
          <AnimatePresence mode="wait">
            {step === 0 && <StepGoal />}
            {step === 1 && <StepRestrictions />}
            {step === 2 && <StepDone />}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}