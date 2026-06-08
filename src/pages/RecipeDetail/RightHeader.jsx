import { Minus, Plus } from 'lucide-react';

export default function RightHeader({ recipe, details, servings, setServings }) {
  return (
    <header className="mb-8">
      <div className="flex gap-2 mb-4">
        <span className="bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
          {details.badge}
        </span>
        <div className="flex items-center gap-1 ml-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-3.5 h-3.5 ${i < details.rating ? 'text-amber-400 fill-amber-400' : 'text-outline-variant'}`}
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
          <span className="text-[10px] font-bold text-on-surface-variant ml-1">({details.reviews} Reviews)</span>
        </div>
      </div>

      <h2 className="font-display text-4xl lg:text-5xl font-bold text-on-surface mb-4 leading-tight">
        {recipe.title}
      </h2>

      <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl mb-8">
        {details.description}
      </p>

      {/* Servings control */}
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
  );
}
