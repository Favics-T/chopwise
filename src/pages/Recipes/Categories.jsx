import React from 'react'

function Categories() {
  return (
    <div>
       {/* Categories Desktop */}
          <div className="hidden lg:flex gap-3 mb-4">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'bg-white text-on-surface-variant hover:bg-surface-container border border-outline-variant/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Categories Mobile */}
          <div className="flex lg:hidden gap-3 px-6 pb-3 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                  ? 'bg-primary text-white' 
                  : 'bg-white text-on-surface-variant border border-outline-variant/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
    </div>
  )
}

export default Categories
