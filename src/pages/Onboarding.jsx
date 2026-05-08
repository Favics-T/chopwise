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

const GoalCard = ({ id, icon: Icon, title, description, isSelected, onClick }) => (
  <button 
    onClick={() => onClick(id)}
    className={`w-full relative flex flex-col text-left p-6 rounded-xl transition-all duration-200 border-2 ${
      isSelected 
        ? 'bg-surface-container-low border-primary shadow-lg scale-[1.02]' 
        : 'bg-surface-container-lowest border-transparent hover:border-outline-variant shadow-sm'
    }`}
  >
    {isSelected && (
      <div className="absolute top-4 right-4 text-primary">
        <CheckCircle2 size={24} fill="currentColor" className="text-primary fill-primary bg-white rounded-full" />
      </div>
    )}
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
      isSelected ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface-variant'
    }`}>
      <Icon size={24} />
    </div>
    <h4 className="font-display text-xl font-semibold mb-1 text-on-surface">{title}</h4>
    <p className="text-sm text-on-surface-variant leading-relaxed">{description}</p>
  </button>
);

const RestrictionCard = ({ id, icon: Icon, title, description, isChecked, onToggle }) => (
  <div 
    onClick={() => onToggle(id)}
    className={`p-6 bg-surface-container-lowest rounded-xl border-2 transition-all cursor-pointer ${
      isChecked ? 'border-primary bg-surface-container-low' : 'border-transparent hover:border-outline-variant shadow-sm'
    }`}
  >
    <div className="flex items-center justify-between mb-4">
      <div className={`p-2 rounded-lg ${isChecked ? 'text-primary' : 'text-on-surface-variant'}`}>
        <Icon size={24} />
      </div>
      <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
        isChecked ? 'bg-primary border-primary' : 'border-outline-variant bg-white'
      }`}>
        {isChecked && <CheckCircle2 size={16} className="text-white" />}
      </div>
    </div>
    <h4 className="font-display text-xl font-semibold text-on-surface">{title}</h4>
    <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">{description}</p>
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
      description: 'Protein-rich recipes to fuel your strength training.'
    },
    {
      id: 'Healthier Eating',
      icon: Sprout,
      title: 'Healthier Eating',
      description: 'Balanced meals focusing on whole foods and vitamins.'
    },
    {
      id: 'Weight Loss',
      icon: Weight,
      title: 'Weight Loss',
      description: 'Calorie-conscious options that don\'t sacrifice flavor.'
    },
    {
      id: 'Maintenance',
      icon: Utensils,
      title: 'Maintenance',
      description: 'Sustainable habits for long-term health and vitality.'
    }
  ];

  const restrictions = [
    {
      id: 'Ulcer-safe',
      icon: Activity,
      title: 'Ulcer-safe',
      description: 'Low acid and non-spicy recipes gentle on the stomach.'
    },
    {
      id: 'Low Sugar',
      icon: Droplets,
      title: 'Low Sugar',
      description: 'Focus on complex carbs and low glycemic indices.'
    },
    {
      id: 'Gluten-free',
      icon: Wheat,
      title: 'Gluten-free',
      description: 'Traditional grains like fonio, millet, and sorghum to replace wheat products.'
    }
  ];

  return (
    <div className="pb-32 px-6 pt-12">
      {/* Welcome Header */}
      <header className="text-center mb-12">
        <div className="mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-sm font-semibold tracking-wide">
            Welcome to ChopWise
          </span>
        </div>
        <h1 className="font-display text-[42px] leading-[1.1] font-bold text-primary mb-4 tracking-tight">
          Let's nourish your journey.
        </h1>
        <p className="text-lg text-on-surface-variant max-w-sm mx-auto leading-relaxed">
          ChopWise helps you cook delicious West African meals tailored to your body. Tell us what you're aiming for and any foods to skip.
        </p>
      </header>

      {/* Health Goals Section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="text-primary" size={24} />
          <h2 className="font-display text-2xl font-bold text-on-surface">What is your primary health goal?</h2>
        </div>
        <div className="space-y-4">
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
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <TriangleAlert className="text-primary" size={24} />
          <h2 className="font-display text-2xl font-bold text-on-surface">Any dietary restrictions or preferences?</h2>
        </div>
        <div className="space-y-4">
          {restrictions.map(restriction => (
            <RestrictionCard 
              key={restriction.id}
              {...restriction}
              isChecked={state.restrictions.includes(restriction.id)}
              onToggle={(id) => dispatch({ type: 'TOGGLE_RESTRICTION', payload: id })}
            />
          ))}
          
          {/* Add custom restriction */}
          <div className="p-8 bg-surface-container-high rounded-xl border-2 border-dashed border-outline-variant flex flex-col items-center justify-center text-center hover:bg-surface-container-highest transition-colors cursor-pointer group">
            <PlusCircle className="text-primary mb-2 transition-transform group-hover:scale-110" size={28} />
            <span className="text-sm font-bold text-primary">Add custom restriction</span>
            <p className="text-[11px] text-on-surface-variant mt-1">
              (e.g., Shellfish allergy, Lactose intolerant)
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="mt-8">
        <div className="bg-surface-container-low p-6 rounded-2xl flex flex-col gap-6">
          <div className="flex items-start gap-3">
            <Info className="text-primary mt-1 shrink-0" size={20} fill="currentColor" fillOpacity={0.1} />
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Our AI will now cross-reference these goals with your pantry to suggest the perfect Nigerian recipes.
            </p>
          </div>
          
          <button 
            onClick={() => navigate('/pantry-setup')}
            className="w-full bg-primary text-white font-display text-xl font-bold py-5 rounded-full shadow-lg hover:bg-primary-container transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            Start Pantry Setup
            <ArrowRight size={20} />
          </button>
          
          <button className="w-full text-primary font-bold text-sm py-2 hover:opacity-80 transition-opacity">
            Skip for now
          </button>
        </div>

        {/* Bottom Graphic Icons */}
        <div className="flex justify-center gap-12 mt-16 opacity-20 text-on-surface pointer-events-none">
          <CookingPot size={48} strokeWidth={1} />
          <Square size={48} strokeWidth={1} />
          <Refrigerator size={48} strokeWidth={1} />
        </div>
      </footer>
    </div>
  );
}
