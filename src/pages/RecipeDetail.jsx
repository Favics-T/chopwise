// src/pages/RecipeDetail.jsx
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  Minus, 
  Plus, 
  Lightbulb, 
  CheckCircle,
  Clock,
  Flame,
  ChefHat
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NutritionCard = ({ label, value, colorClass }) => (
  <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 flex flex-col items-center text-center">
    <span className={`font-display text-2xl font-bold ${colorClass}`}>{value}</span>
    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">{label}</span>
  </div>
);

const Step = ({ number, title, description }) => (
  <div className="flex gap-5 group">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-sm">
      {number}
    </div>
    <div className="space-y-2">
      <h4 className="font-display text-lg font-bold text-on-surface">{title}</h4>
      <p className="text-sm text-on-surface-variant leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export default function RecipeDetail() {
  const navigate = useNavigate();
  const [servings, setServings] = useState(4);

  const ingredients = [
    { name: 'Long-grain Parboiled Rice', amount: '3 Cups' },
    { name: 'Red Bell Peppers (Tatashe)', amount: '3 Large' },
    { name: 'Plum Tomatoes', amount: '5 Medium' },
    { name: 'Scotch Bonnet (Atarodo)', amount: '2-3 Small' },
    { name: 'Chicken or Beef Stock', amount: '4 Cups' },
    { name: 'Vegetable Oil', amount: '1/2 Cup' },
    { name: 'Tomato Paste', amount: '150g' }
  ];

  const steps = [
    {
      title: 'The Base Blend',
      description: 'Blend the bell peppers, tomatoes, onions, and scotch bonnets until smooth. Pour into a pot and boil down until the water evaporates and you\'re left with a thick paste.'
    },
    {
      title: 'Fry the Paste',
      description: 'Heat oil in a large pot. Add sliced onions and fry until translucent. Stir in the tomato paste and fry for 5 minutes. Add your boiled pepper mix and fry until the oil starts to separate from the sauce.'
    },
    {
      title: 'Seasoning',
      description: 'Add curry powder, thyme, bay leaves, and bouillon cubes. Pour in the stock. Season with salt and pepper to taste. The liquid should be slightly saltier than you want the rice to be.'
    },
    {
      title: 'The Rice Steam',
      description: 'Add the washed rice. The liquid level should be just above the rice. Cover tightly with foil then the pot lid. Cook on very low heat for 30 minutes until the rice is tender and has absorbed all the liquid.'
    },
    {
      title: 'The Finish',
      description: 'Turn up the heat for the last 2-3 minutes to get that smoky \'bottom burn\' aroma. Stir in butter and fresh onion rings. Fluff with a fork and serve hot.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7FBF7] pb-32 lg:pb-20">
      {/* Navigation Top Bar */}
      <header className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md flex justify-between items-center px-6 py-4 lg:px-12 lg:py-6 lg:bg-transparent">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors lg:bg-white lg:shadow-sm"
          >
            <ArrowLeft className="text-primary" size={24} />
          </button>
          <h1 className="font-display text-xl font-bold text-primary lg:hidden">ChopWise</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors text-on-surface-variant lg:bg-white lg:shadow-sm">
            <Heart size={24} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors text-on-surface-variant lg:bg-white lg:shadow-sm">
            <Share2 size={24} />
          </button>
        </div>
      </header>

      <main className="px-6 lg:px-12 pt-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Left Column Component */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-fit">
            {/* Hero Image Section */}
            <section className="relative rounded-[2rem] overflow-hidden aspect-[4/3] lg:aspect-[4/5] shadow-xl mb-8 group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPj96iH8ZJCKGScyfJTqnVAcF-TpW9tffJGRBD13mJGsHEs__EKPYetV2Ef-j3LTpOlkBNOTLyC0kH8kTfxjTyJ1qXmO0wSTcmhzs9PbR3zzFiLGm-f7gEFuvlcWc8surnvdpeUfCe_n3U_PNkBPgehonDK63ZRjCiC191L4qa7PpwXitMQRJakyrsbNhs96e0rAAYW5_DGy4a6mMkQrdmF1bbsX0rMtcB0XA-JXy4stDhbebnG4Zqy5BJvsKiKk8Bxzwssu2gRYU" 
                alt="Smoky Jollof Rice" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
              
              {/* Desktop Desktop Timer Badge */}
              <div className="absolute bottom-6 left-6 hidden lg:flex bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl items-center gap-2 border border-white/20">
                <Clock className="text-secondary" size={18} />
                <span className="font-display font-bold text-on-surface">65 MIN</span>
              </div>
            </section>

            {/* Desktop Quick Stats / Nutrition Bento */}
            <section className="hidden lg:block mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-[1.5rem] shadow-sm border border-outline-variant/10">
                  <span className="bg-[#E6F3E6] text-primary text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wider mb-2 inline-block">Protein</span>
                  <p className="font-display text-2xl font-bold text-on-surface">18g</p>
                </div>
                <div className="bg-white p-5 rounded-[1.5rem] shadow-sm border border-outline-variant/10">
                  <span className="bg-[#FFF4E6] text-[#FF8C00] text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wider mb-2 inline-block">Energy</span>
                  <p className="font-display text-2xl font-bold text-on-surface">540 kcl</p>
                </div>
                <div className="bg-white p-5 rounded-[1.5rem] shadow-sm border border-outline-variant/10">
                  <span className="bg-[#F3E6F3] text-secondary text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wider mb-2 inline-block">Carbs</span>
                  <p className="font-display text-2xl font-bold text-on-surface">78g</p>
                </div>
                <div className="bg-white p-5 rounded-[1.5rem] shadow-sm border border-outline-variant/10">
                  <span className="bg-[#E6E6F3] text-blue-600 text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wider mb-2 inline-block">Fat</span>
                  <p className="font-display text-2xl font-bold text-on-surface">12g</p>
                </div>
              </div>
            </section>

            {/* AI Pro Tip - Desktop Placement */}
            <div className="hidden lg:block p-8 bg-[#F0F7F0] border border-primary/10 rounded-[2rem] relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <Lightbulb size={20} />
                </div>
                <span className="text-[11px] font-black text-primary uppercase tracking-[0.2em]">Pro ChopWise Tip</span>
              </div>
              <p className="text-sm font-medium text-on-secondary-container leading-relaxed italic">
                "Don't let the bottom burn too much! A little 'bun-bun' is traditional and adds flavor, but keep it controlled by using foil under the lid to trap steam."
              </p>
            </div>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-7 pb-12">
            <header className="mb-8">
              <div className="flex gap-2 mb-4">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  TRADITIONAL
                </span>
                <div className="flex items-center gap-1 ml-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-3.5 h-3.5 ${i < 4 ? 'text-amber-400 fill-amber-400' : 'text-outline-variant'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                  <span className="text-[10px] font-bold text-on-surface-variant ml-1">(120 Reviews)</span>
                </div>
              </div>
              
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-on-surface mb-4 leading-tight">
                Smoky Party Jollof Rice
              </h2>
              
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl mb-8">
                The legendary Nigerian one-pot classic, perfected with that signature wood-fire smoke flavor. A centerpiece of every celebration.
              </p>

              {/* Servings Card Desktop */}
              <div className="bg-white p-6 rounded-3xl border border-outline-variant/10 shadow-sm flex items-center justify-between mb-10 max-w-sm">
                <div>
                  <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Select Servings</p>
                  <p className="font-display text-lg font-bold text-on-surface">{servings} Persons</p>
                </div>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setServings(Math.max(1, servings - 1))}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f4f4f4] hover:bg-surface-container-highest transition-all"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="font-display text-2xl font-black min-w-[2ch] text-center">{servings}</span>
                  <button 
                    onClick={() => setServings(servings + 1)}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary-container transition-all"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </header>

            {/* Mobile-only Stats */}
            <section className="lg:hidden mb-10 border-b border-outline-variant/30 pb-8 flex justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Time</span>
                <span className="font-display text-xl font-bold text-primary flex items-center gap-1.5"><Clock size={16} /> 65m</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Energy</span>
                <span className="font-display text-xl font-bold text-primary flex items-center gap-1.5"><Flame size={16} /> 540k</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Level</span>
                <span className="font-display text-xl font-bold text-primary flex items-center gap-1.5"><ChefHat size={16} /> Med</span>
              </div>
            </section>

            {/* Ingredients Section */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-display text-3xl font-bold">Ingredients</h3>
                <span className="text-secondary font-black text-xs uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-lg">12 items</span>
              </div>
              <ul className="grid grid-cols-1 gap-1">
                {ingredients.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 py-4 px-2 hover:bg-white/40 rounded-xl transition-colors border-b border-outline-variant/5">
                    <div className="w-6 h-6 border-2 border-primary/20 rounded-md flex items-center justify-center bg-white">
                      {i < 3 && <div className="w-3 h-3 bg-primary rounded-[2px]" />}
                    </div>
                    <span className={`text-on-surface text-lg ${i < 3 ? 'line-through opacity-40 font-medium' : 'font-semibold'}`}>
                      {item.name}
                    </span>
                    <span className="ml-auto text-sm font-black text-on-surface-variant/60">{item.amount}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Preparation Section */}
            <section className="mb-16">
              <h3 className="font-display text-3xl font-bold mb-10">Preparation</h3>
              <div className="space-y-12">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white shadow-sm border border-outline-variant/10 text-primary flex items-center justify-center font-display text-xl font-black">
                      {i + 1}
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-display text-2xl font-bold text-on-surface">{step.title}</h4>
                      <p className="text-lg text-on-surface-variant leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Primary Action Desktop */}
            <div className="mt-20 border-t border-outline-variant/20 pt-12 flex items-center justify-between gap-8">
              <div>
                <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1 italic">Tired of thinking?</p>
                <h4 className="font-display text-xl font-bold text-on-surface">Record your masterpiece</h4>
              </div>
              <button 
                onClick={() => navigate('/usage-confirmation')}
                className="bg-primary text-white py-5 px-12 rounded-[1.5rem] font-display text-xl font-bold flex items-center justify-center gap-4 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-95 shadow-xl shadow-primary/20"
              >
                <CheckCircle size={28} />
                I Cooked This
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* Persistent Bottom Bar - Mobile Only */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-outline-variant p-6 z-50 shadow-[0_-8px_24px_rgba(0,0,0,0.05)] lg:hidden">
        <div className="max-w-[430px] mx-auto flex items-center justify-between gap-6">
          <button 
            onClick={() => navigate('/usage-confirmation')}
            className="flex-1 bg-primary text-white py-4 px-8 rounded-full font-display text-xl font-bold flex items-center justify-center gap-3 active:scale-95 shadow-lg shadow-primary/20"
          >
            <CheckCircle size={24} />
            I Cooked This
          </button>
        </div>
      </footer>
    </div>
  );
}
