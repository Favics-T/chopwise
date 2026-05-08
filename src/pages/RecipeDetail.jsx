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
    <div className="min-h-screen bg-background pb-32">
      {/* Navigation Top Bar */}
      <header className="sticky top-0 w-full z-50 bg-surface/90 backdrop-blur-md flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors"
          >
            <ArrowLeft className="text-primary" size={24} />
          </button>
          <h1 className="font-display text-xl font-bold text-primary">ChopWise</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
            <Heart size={24} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
            <Share2 size={24} />
          </button>
        </div>
      </header>

      <main className="px-6 pt-4">
        {/* Hero Section */}
        <section className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg mb-8 group">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPj96iH8ZJCKGScyfJTqnVAcF-TpW9tffJGRBD13mJGsHEs__EKPYetV2Ef-j3LTpOlkBNOTLyC0kH8kTfxjTyJ1qXmO0wSTcmhzs9PbR3zzFiLGm-f7gEFuvlcWc8surnvdpeUfCe_n3U_PNkBPgehonDK63ZRjCiC191L4qa7PpwXitMQRJakyrsbNhs96e0rAAYW5_DGy4a6mMkQrdmF1bbsX0rMtcB0XA-JXy4stDhbebnG4Zqy5BJvsKiKk8Bxzwssu2gRYU" 
            alt="Smoky Jollof Rice" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex gap-2 mb-3">
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                Best Seller
              </span>
              <span className="bg-primary-container text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                Traditional
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold text-white mb-2 leading-tight">
              Smoky Party Jollof Rice
            </h2>
            <p className="text-white/90 text-sm leading-relaxed max-w-sm">
              The legendary Nigerian one-pot classic, perfected with that signature wood-fire smoke flavor.
            </p>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex justify-between items-center py-2 px-1 border-b border-outline-variant/30 md:border-none">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Prep Time</span>
              <span className="font-display text-xl font-bold text-primary flex items-center gap-1.5"><Clock size={16} /> 20m</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Cook Time</span>
              <span className="font-display text-xl font-bold text-primary flex items-center gap-1.5"><Flame size={16} /> 45m</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Difficulty</span>
              <span className="font-display text-xl font-bold text-primary flex items-center gap-1.5"><ChefHat size={16} /> Medium</span>
            </div>
          </div>

          <div className="bg-surface-container p-4 rounded-xl flex items-center justify-between shadow-sm">
            <div>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Serving Size</p>
              <p className="font-display text-lg font-bold text-on-surface">{servings} Persons</p>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full p-1.5 border border-outline-variant/50 shadow-inner">
              <button 
                onClick={() => setServings(Math.max(1, servings - 1))}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high hover:bg-surface-container-highest transition-colors active:scale-95"
              >
                <Minus size={20} />
              </button>
              <span className="w-10 text-center font-display text-xl font-black">{servings}</span>
              <button 
                onClick={() => setServings(servings + 1)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary-container transition-colors active:scale-95"
              >
                <Plus size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* Nutrition Estimates */}
        <section className="mb-12">
          <h3 className="font-display text-2xl font-bold mb-6">Nutrition Estimates</h3>
          <div className="grid grid-cols-2 gap-3">
            <NutritionCard label="Calories" value="540" colorClass="text-secondary" />
            <NutritionCard label="Protein" value="18g" colorClass="text-primary" />
            <NutritionCard label="Carbs" value="78g" colorClass="text-on-secondary-container" />
            <NutritionCard label="Fat" value="12g" colorClass="text-on-surface-variant" />
          </div>
        </section>

        {/* Content Layout */}
        <div className="space-y-12 mb-12">
          {/* Ingredients */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-2xl font-bold">Ingredients</h3>
              <span className="text-primary font-bold text-sm tracking-wide">12 items</span>
            </div>
            <ul className="space-y-4">
              {ingredients.map((item, i) => (
                <li key={i} className="flex justify-between items-center py-2 border-b border-outline-variant/30">
                  <span className="text-on-surface font-medium">{item.name}</span>
                  <span className="text-sm font-bold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">{item.amount}</span>
                </li>
              ))}
            </ul>

            {/* AI Pro Tip */}
            <div className="mt-8 p-6 bg-secondary-container/5 border-2 border-secondary/20 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-secondary" />
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="text-secondary fill-secondary/20" size={24} />
                <span className="text-xs font-black text-secondary uppercase tracking-[0.2em]">Pro ChopWise Tip</span>
              </div>
              <p className="text-sm italic text-on-surface-variant leading-relaxed">
                "Don't let the bottom burn too much! A little 'bun-bun' is traditional and adds flavor, but keep it controlled by using a heavy-bottomed pot and foil under the lid to trap steam."
              </p>
            </div>
          </section>

          {/* Instructions */}
          <section>
            <h3 className="font-display text-2xl font-bold mb-8">Instructions</h3>
            <div className="space-y-12">
              {steps.map((step, i) => (
                <Step key={i} number={i + 1} title={step.title} description={step.description} />
              ))}
            </div>

            {/* Why This Recipe Matters Card */}
            <div className="mt-16 bg-primary/5 p-8 rounded-3xl border border-primary/10">
              <h4 className="font-display text-xl font-bold text-primary mb-3">Why This Recipe Matters</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                In Nigerian culture, Jollof Rice is more than a meal; it's a centerpiece of celebration. Known as "Party Jollof," this version uses the steam-lock method to ensure every grain is infused with the smoky essence of the rich tomato-pepper base. Whether at a wedding or a Sunday dinner, it represents unity and heritage.
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Persistent Bottom Bar */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-outline-variant p-6 z-50 shadow-[0_-8px_24px_rgba(0,0,0,0.05)]">
        <div className="max-w-[430px] mx-auto flex items-center justify-between gap-6">
          <div className="hidden min-[380px]:block">
            <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest block mb-0.5">Ready to eat?</span>
            <p className="text-sm font-bold text-primary">Record your achievement!</p>
          </div>
          <button className="flex-1 bg-primary text-white py-4 px-8 rounded-full font-display text-xl font-bold flex items-center justify-center gap-3 hover:bg-primary-container transition-all active:scale-95 shadow-lg shadow-primary/20">
            <CheckCircle size={24} />
            I Cooked This
          </button>
        </div>
      </footer>
    </div>
  );
}
