import React from 'react';
import { 
  Dumbbell, 
  Sprout, 
  Weight, 
  Utensils, 
  TrendingUp, 
  TriangleAlert, 
  CheckCircle2, 
  Activity,
  PlusCircle,
  Info,
  ArrowRight,
  CookingPot,
  Square,
  Refrigerator,
  Wheat,
  Droplets
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const GoalCard = ({ id, icon: Icon, title, description, image, isSelected, onClick }) => (
  <button 
    onClick={() => onClick(id)}
    className={`w-full group relative flex flex-col md:flex-row lg:flex-col xl:flex-row bg-white rounded-[2rem] overflow-hidden transition-all duration-500 border-2 ${
      isSelected 
        ? 'border-primary shadow-2xl lg:scale-[1.02] z-10' 
        : 'border-outline-variant/10 hover:border-primary/20 shadow-sm'
    }`}
  >
    <div className="h-48 md:h-auto md:w-40 lg:h-44 lg:w-full xl:h-auto xl:w-40 shrink-0 overflow-hidden relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0" 
      />
      <div className={`absolute inset-0 bg-primary/10 transition-opacity duration-500 ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'}`} />
      
      <div className="absolute top-4 left-4 lg:hidden">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isSelected ? 'bg-primary text-white shadow-lg' : 'bg-white/80 backdrop-blur-md text-primary shadow-sm'}`}>
              <Icon size={20} />
          </div>
      </div>
    </div>
    
    <div className="p-6 lg:p-8 flex-1 flex flex-col justify-center text-left relative">
        {isSelected && (
          <div className="absolute top-6 right-6 text-primary">
            <CheckCircle2 size={24} fill="currentColor" className="text-primary fill-primary bg-white rounded-full" />
          </div>
        )}
        
        <div className="hidden lg:flex items-center gap-3 mb-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                isSelected ? 'bg-primary text-white' : 'bg-[#F7FBF7] text-on-surface-variant group-hover:scale-110'
            }`}>
                <Icon size={16} />
            </div>
            <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Goal</span>
        </div>

        <h4 className="font-display text-2xl font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">{title}</h4>
        <p className="text-sm text-on-surface-variant font-medium leading-relaxed">{description}</p>
    </div>
  </button>
);

const RestrictionCard = ({ id, icon: Icon, title, description, image, isChecked, onToggle }) => (
  <div 
    onClick={() => onToggle(id)}
    className={`w-full group relative flex flex-col md:flex-row lg:flex-col xl:flex-row bg-white rounded-[2rem] overflow-hidden transition-all duration-500 border-2 cursor-pointer ${
      isChecked 
        ? 'border-primary shadow-2xl lg:scale-[1.02] z-10' 
        : 'border-outline-variant/10 hover:border-primary/20 shadow-sm'
    }`}
  >
    <div className="h-48 md:h-auto md:w-40 lg:h-44 lg:w-full xl:h-auto xl:w-40 shrink-0 overflow-hidden relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0" 
      />
      <div className={`absolute inset-0 bg-secondary/10 transition-opacity duration-500 ${isChecked ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'}`} />
      
      <div className="absolute top-4 left-4 lg:hidden">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isChecked ? 'bg-primary text-white shadow-lg' : 'bg-white/80 backdrop-blur-md text-primary shadow-sm'}`}>
              <Icon size={20} />
          </div>
      </div>
    </div>
    
    <div className="p-6 lg:p-8 flex-1 flex flex-col justify-center text-left relative">
        <div className="absolute top-6 right-6">
            <div className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all ${
                isChecked ? 'bg-primary border-primary scale-110' : 'border-outline-variant bg-[#F7FBF7]'
            }`}>
                {isChecked && <CheckCircle2 size={18} className="text-white" />}
            </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-3 mb-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                isChecked ? 'bg-primary text-white' : 'bg-[#F7FBF7] text-on-surface-variant group-hover:scale-110'
            }`}>
                <Icon size={16} />
            </div>
            <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">Dietary</span>
        </div>

        <h4 className="font-display text-2xl font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">{title}</h4>
        <p className="text-sm text-on-surface-variant font-medium leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function Onboarding() {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();

  const goals = [
    {
      id: 'Muscle Gain',
      icon: Dumbbell,
      title: 'Muscle Gain',
      description: 'Protein-rich recipes to fuel your strength training.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'Healthier Eating',
      icon: Sprout,
      title: 'Healthier Eating',
      description: 'Balanced meals focusing on whole foods.',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'Weight Loss',
      icon: Weight,
      title: 'Weight Loss',
      description: 'Calorie-conscious Nigerian options.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'Maintenance',
      icon: Utensils,
      title: 'Maintenance',
      description: 'Sustainable habits for long-term vitality.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const restrictions = [
    {
      id: 'Ulcer-safe',
      icon: Activity,
      title: 'Ulcer-safe',
      description: 'Low acid and soothing West African recipes.',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'Low Sugar',
      icon: Droplets,
      title: 'Low Sugar',
      description: 'Focus on low-GI complex carbohydrates.',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'Gluten-free',
      icon: Wheat,
      title: 'Gluten-free',
      description: 'Traditional grains like fonio and millet.',
      image: 'https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F0FAF0] lg:flex lg:items-stretch overflow-x-hidden">
      {/* Left Content Column */}
      <main className="w-full lg:w-1/2 lg:h-screen lg:overflow-y-auto px-6 py-12 md:px-12 lg:px-16 xl:px-24 lg:py-24 xl:py-32 flex flex-col no-scrollbar">
        {/* Welcome Header */}
        <header className="mb-16 lg:mb-20">
          <div className="mb-6">
            <span className="inline-block px-5 py-2 rounded-xl bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] border border-primary/20">
              Welcome to ChopWise
            </span>
          </div>
          <h1 className="font-display text-[48px] md:text-[64px] lg:text-[72px] xl:text-[90px] leading-[0.95] font-bold text-primary mb-8 tracking-tighter">
            Let's nourish your journey.
          </h1>
          <p className="text-lg md:text-xl lg:text-xl xl:text-2xl text-on-surface-variant max-w-xl leading-relaxed font-medium">
            Cook delicious West African meals tailored to your body. Tell us what you're aiming for and any foods to skip.
          </p>
        </header>

        {/* Health Goals Section */}
        <section className="mb-16 lg:mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary">
                <TrendingUp size={24} />
            </div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-on-surface">Primary Health Goal</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 lg:gap-8">
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

        {/* Dietary Restrictions Section */}
        <section className="mb-16 lg:mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary">
                <TriangleAlert size={24} />
            </div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-on-surface">Dietary Preferences</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 lg:gap-8">
            {restrictions.map(restriction => (
              <RestrictionCard 
                key={restriction.id}
                {...restriction}
                isChecked={state.restrictions.includes(restriction.id)}
                onToggle={(id) => dispatch({ type: 'TOGGLE_RESTRICTION', payload: id })}
              />
            ))}
            
            {/* Add custom restriction */}
            <button className="p-8 lg:p-6 xl:p-10 bg-white/50 rounded-[2rem] border-4 border-dashed border-outline-variant/20 flex flex-col md:flex-row lg:flex-col xl:flex-row items-center justify-center text-center lg:text-left gap-6 hover:bg-white hover:border-primary/20 transition-all cursor-pointer group">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary transition-transform group-hover:scale-110 shrink-0">
                <PlusCircle size={32} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-display font-bold text-primary">Add Custom</h4>
              </div>
            </button>
          </div>
        </section>

        {/* Footer CTA */}
        <footer className="mt-8 lg:mt-auto">
          <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] border border-outline-variant/10 shadow-2xl shadow-primary/10 flex flex-col xl:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4 text-primary">
                <Info size={24} fill="currentColor" fillOpacity={0.1} />
                <span className="font-black text-[10px] uppercase tracking-widest">PRO TIP</span>
              </div>
              <p className="text-lg text-on-surface-variant font-medium leading-relaxed">
                Our AI will cross-reference your goals with your pantry.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 w-full lg:w-auto xl:w-[300px] shrink-0">
                <button 
                  onClick={() => navigate('/pantry-setup')}
                  className="w-full bg-primary text-white font-display text-2xl font-bold py-6 rounded-[1.5rem] shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-3"
                >
                  Start Setup
                  <ArrowRight size={24} />
                </button>
                <button 
                  onClick={() => navigate('/recipes')}
                  className="text-on-surface-variant font-bold text-sm hover:text-primary transition-colors py-2 uppercase tracking-widest"
                >
                  Skip for now
                </button>
            </div>
          </div>

          {/* Bottom Graphic Icons (mobile only maybe, or keep as decoration) */}
          <div className="flex justify-center gap-12 mt-16 opacity-10 text-on-surface lg:hidden">
            <CookingPot size={48} strokeWidth={1} />
            <Square size={48} strokeWidth={1} />
            <Refrigerator size={48} strokeWidth={1} />
          </div>
        </footer>
      </main>

      {/* Right Visual Image Column */}
      <aside className="hidden lg:grid lg:grid-cols-2 lg:w-1/2 h-screen sticky top-0 gap-6 p-10">
          <div className="h-full rounded-[4rem] overflow-hidden shadow-2xl relative group">
              <img 
                  src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1200" 
                  alt="African Food" 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              <div className="absolute bottom-12 left-12">
                  <p className="text-white font-display text-4xl font-bold tracking-tight">Authentic Taste.</p>
              </div>
          </div>
          <div className="flex flex-col gap-6 h-full">
              <div className="flex-1 rounded-[4rem] overflow-hidden shadow-2xl relative group">
                  <img 
                      src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200" 
                      alt="Healthy Salad" 
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex-1 rounded-[4rem] overflow-hidden shadow-2xl relative group">
                  <img 
                      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200" 
                      alt="Grains" 
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
              </div>
          </div>
      </aside>
    </div>
  );
}
