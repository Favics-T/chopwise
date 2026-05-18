import { RESTRICTION_LABELS,GOAL_META } from '../../data/mockdata';
import { Sparkles, Star, Leaf, Zap, Info } from 'lucide-react';
import { useState, useEffect } from 'react';


function DynamicPanel({ selectedGoal, restrictions }) {
  const [visible, setVisible] = useState(true);
  const [currentGoal, setCurrentGoal] = useState(selectedGoal);
  const meta = GOAL_META[currentGoal] || GOAL_META['Healthier Eating'];

  useEffect(() => {
    if (selectedGoal === currentGoal) return;
    setVisible(false);
    const t = setTimeout(() => {
      setCurrentGoal(selectedGoal);
      setVisible(true);
    }, 350);
    return () => clearTimeout(t);
  }, [selectedGoal]);

  const activeRestrictions = restrictions.filter(r => RESTRICTION_LABELS[r]);

  return (
    <aside className="hidden lg:flex lg:w-1/2 h-screen sticky top-0 flex-col p-8 gap-5 overflow-hidden">
      {/* Hero Image */}
      <div className="relative flex-2 rounded-[3rem] overflow-hidden shadow-2xl">
        <img
          key={currentGoal + '-hero'}
          src={meta.heroImage}
          alt={currentGoal}
          className="w-full h-full object-cover"
          style={{
            transition: 'opacity 0.5s ease, transform 0.8s ease',
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1)' : 'scale(1.04)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div
          className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-2xl backdrop-blur-md"
          style={{
            backgroundColor: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.25)',
            transition: 'opacity 0.4s ease',
            opacity: visible ? 1 : 0,
          }}
        >
          <Sparkles size={14} className="text-white" />
          <span className="text-white text-xs font-black uppercase tracking-widest">{meta.badge}</span>
        </div>

        <div
          className="absolute bottom-8 left-8 right-8"
          style={{ transition: 'opacity 0.5s ease, transform 0.5s ease', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(12px)' }}
        >
          <p className="text-white font-display text-3xl font-bold leading-tight tracking-tight drop-shadow-lg">
            {meta.tagline}
          </p>
        </div>
      </div>

      {/* Stats Row */}
      <div
        className="grid grid-cols-3 gap-4"
        style={{ transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(10px)' }}
      >
        {meta.stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="bg-white rounded-2xl p-4 shadow-md flex flex-col gap-1 border border-outline-variant/10">
            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-1">
              <Icon size={16} />
            </div>
            <span className="text-2xl font-display font-black text-on-surface">{value}</span>
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider leading-tight">{label}</span>
          </div>
        ))}
      </div>

      {/* Profile Preview Card */}
      <div
        className="bg-white rounded-[2rem] p-6 shadow-lg border border-outline-variant/10 flex-1 flex flex-col gap-4"
        style={{ transition: 'opacity 0.5s ease 0.15s, transform 0.5s ease 0.15s', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(10px)' }}
      >
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Star size={18} />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Your Profile</p>
              <h3 className="font-display text-lg font-bold text-on-surface leading-tight">{currentGoal}</h3>
            </div>
          </div>
          <div className="flex items-center gap-1 px-3 py-1 bg-primary/10 rounded-xl">
            <Leaf size={12} className="text-primary" />
            <span className="text-xs font-bold text-primary">Active</span>
          </div>
        </div>

        {/* Restriction pills */}
        {activeRestrictions.length > 0 ? (
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Dietary Filters</p>
            <div className="flex flex-wrap gap-2">
              {activeRestrictions.map(r => {
                const { icon: RIcon, color } = RESTRICTION_LABELS[r];
                return (
                  <div key={r} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-on-surface" style={{ backgroundColor: color }}>
                    <RIcon size={12} />
                    {r}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 px-4 py-3 bg-[#F7FBF7] rounded-2xl">
            <Info size={14} className="text-on-surface-variant shrink-0" />
            <p className="text-xs text-on-surface-variant font-medium">No dietary filters selected yet.</p>
          </div>
        )}

        {/* AI Tip */}
        <div
          className="mt-auto p-4 rounded-2xl flex gap-3 items-start"
          style={{ backgroundColor: meta.color, transition: 'background-color 0.5s ease' }}
        >
          <div className="w-8 h-8 rounded-xl bg-primary/15 flex items-center justify-center text-primary shrink-0 mt-0.5">
            <Zap size={15} />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">AI Tip</p>
            <p className="text-xs text-on-surface-variant font-medium leading-relaxed">{meta.tip}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default DynamicPanel;