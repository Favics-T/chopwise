import { 
    TrendingUp, 
  TriangleAlert, 
    PlusCircle,
  Info,
  ArrowRight,
  CookingPot,
  Refrigerator,
      Heart,
  ChevronRight,
  X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GoalCard from './Onboarding/GoalCard'
import RestrictionCard from './Onboarding/RestrictionCard';
import DynamicPanel from './Onboarding/DynamicPanel';
import  { goals,restrictions } from '../data/mockdata';
import { useOnboarding } from '../hook/useOnboarding';

export default function Onboarding() {
  const { state, dispatch, showCustomInput, setShowCustomInput, customRestriction, setCustomRestriction } = useOnboarding();
      const navigate = useNavigate();

   // save custom restriction and toggle it on
  const handleAddCustomRestriction = () => {
    const trimmed = customRestriction.trim();
    if (!trimmed) return;
    dispatch({ type: 'TOGGLE_RESTRICTION', payload: trimmed });
    setCustomRestriction('');
    setShowCustomInput(false);
  };

  return (
    <div className="min-h-screen bg-[#F0FAF0] lg:flex lg:items-stretch overflow-x-hidden">

      {/* Left: scrollable form */}
      <main className="w-full lg:w-1/2 lg:h-screen lg:overflow-y-auto px-6 py-12 md:px-12 lg:px-14 xl:px-20 lg:py-20 flex flex-col no-scrollbar">

        {/* Header */}
        <header className="mb-14">
          <div className="mb-5">
            <span className="inline-block px-5 py-2 rounded-xl bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] border border-primary/20">
              Welcome to ChopWise
            </span>
          </div>
          <h1 className="font-display text-[44px] md:text-[60px] lg:text-[68px] leading-[0.95] font-bold text-primary mb-6 tracking-tighter">
            Let's nourish<br/>your journey.
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed font-medium">
            Cook delicious West African meals tailored to your body. Tell us what you're aiming for and any foods to skip.
          </p>
        </header>

        {/* Goals */}
        <section className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-11 h-11 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary">
              <TrendingUp size={22} />
            </div>
            <h2 className="font-display text-2xl font-bold text-on-surface">Primary Health Goal</h2>
          </div>
          <div className="flex flex-col gap-5">
            {goals.map(goal => (
              <GoalCard 
                key={goal.id}
                {...goal}
                isSelected={state.healthGoal === goal.id}
                onClick={(id) => dispatch({ type: 'SET_HEALTH_GOAL', payload: id })}
              />
            ))}
          </div>
        </section>

        {/* Restrictions */}
        <section className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-11 h-11 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary">
              <TriangleAlert size={22} />
            </div>
            <h2 className="font-display text-2xl font-bold text-on-surface">Dietary Preferences</h2>
          </div>
          <div className="flex flex-col gap-5">
            {restrictions.map(restriction => (
              <RestrictionCard 
                key={restriction.id}
                {...restriction}
                isChecked={state.restrictions.includes(restriction.id)}
                onToggle={(id) => dispatch({ type: 'TOGGLE_RESTRICTION', payload: id })}
              />
            ))}

            {/* Show any custom restrictions the user has added */}
            {state.restrictions
              .filter(r => !restrictions.find(p => p.id === r))
              .map(customR => (
                <div
                  key={customR}
                  className="bg-white border-2 border-primary rounded-4xl p-5 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center">
                      <Heart size={18} />
                    </div>
                    <span className="font-display text-lg font-bold text-on-surface">{customR}</span>
                  </div>
                  <button
                    onClick={() => dispatch({ type: 'TOGGLE_RESTRICTION', payload: customR })}
                    className="w-8 h-8 rounded-xl flex items-center justify-center hover:bg-error/10 text-error transition-all"
                  >
                    <X size={18} />
                  </button>
                </div>
              ))
            }

            {/* "Add Custom Restriction" now reveals an inline input */}
            {showCustomInput ? (
              <div className="p-5 bg-white rounded-4xl border-2 border-primary/20 flex flex-col gap-4">
                <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant">
                  Enter your restriction
                </label>
                <input
                  type="text"
                  autoFocus
                  value={customRestriction}
                  onChange={e => setCustomRestriction(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleAddCustomRestriction()}
                  placeholder="e.g. Dairy-free, Nut-free…"
                  className="w-full border border-outline-variant/30 rounded-xl px-4 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <div className="flex gap-3">
                  <button
                    onClick={() => { setShowCustomInput(false); setCustomRestriction(''); }}
                    className="flex-1 py-3 rounded-xl border border-outline-variant/20 font-bold text-on-surface-variant hover:bg-surface-container transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddCustomRestriction}
                    disabled={!customRestriction.trim()}
                    className="flex-1 py-3 rounded-xl bg-primary text-white font-bold disabled:opacity-50 hover:scale-[1.02] transition-all"
                  >
                    Add
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowCustomInput(true)}
                className="p-6 bg-white/50 rounded-4xl border-4 border-dashed border-outline-variant/20 flex flex-row items-center gap-5 hover:bg-white hover:border-primary/20 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary transition-transform group-hover:scale-110 shrink-0">
                  <PlusCircle size={26} />
                </div>
                <h4 className="text-xl font-display font-bold text-primary">Add Custom Restriction</h4>
                <ChevronRight size={18} className="text-primary ml-auto opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>
            )}
          </div>
        </section>

        {/* CTA Footer */}
        <footer className="mt-auto">
          <div className="bg-white p-7 lg:p-10 rounded-[2.5rem] border border-outline-variant/10 shadow-2xl shadow-primary/10 flex flex-col xl:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3 text-primary">
                <Info size={22} fill="currentColor" fillOpacity={0.1} />
                <span className="font-black text-[10px] uppercase tracking-widest">Pro Tip</span>
              </div>
              <p className="text-base text-on-surface-variant font-medium leading-relaxed">
                Our AI cross-references your goals with your pantry to reduce food waste and boost nutrition.
              </p>
            </div>
            
            <div className="flex flex-col gap-3 w-full xl:w-70 shrink-0">
              <button 
                onClick={() => navigate('/pantry-setup')}
                className="w-full bg-primary text-white font-display text-xl font-bold py-5 rounded-[1.5rem] shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                Start Setup
                <ArrowRight size={22} />
              </button>
              <button 
                onClick={() => navigate('/recipes')}
                className="text-on-surface-variant font-bold text-sm hover:text-primary transition-colors py-2 uppercase tracking-widest"
              >
                Skip for now
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-12 mt-12 opacity-10 text-on-surface lg:hidden">
            <CookingPot size={44} strokeWidth={1} />
            <Refrigerator size={44} strokeWidth={1} />
          </div>
        </footer>
      </main>

      {/* Right: dynamic panel */}
      <DynamicPanel
        selectedGoal={state.healthGoal}
        restrictions={state.restrictions}
      />
    </div>
  );
}
