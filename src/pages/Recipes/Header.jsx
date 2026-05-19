import React from 'react'
import Search from './Search';
import Categories from './Categories';
import { Bell } from 'lucide-react';
import { useRecipe } from '../../hook/useRecipe';

function Header() {
    const { handleBell, searchTerm, setSearchTerm, categories, activeCategory, setActiveCategory } = useRecipe();
  return (
    <div>
       <header className="sticky top-0 w-full z-40 bg-white/80 backdrop-blur-xl lg:bg-transparent lg:backdrop-blur-none flex flex-col lg:px-12 lg:pt-10">
          
          <div className="flex justify-between items-center px-6 py-4 lg:hidden">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                T
              </div>
              <h1 className="font-display text-xl font-bold text-primary">ChopWise</h1>
            </div>
            
            <button
              onClick={handleBell}
              className="p-2.5 rounded-full hover:bg-surface-container transition-colors text-primary relative"
            >
              <Bell size={24} />
            </button>
          </div>

         
          <Search
        searchTerm={searchTerm} />
         <div>
       
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
        </header>
    </div>
  )
}

export default Header
