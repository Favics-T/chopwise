import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { 
  Bell, 
  CheckCircle2, 
  Lightbulb, 
  SignalHigh,
  Zap,
  Plus,
  Search,
  Filter,
  Clock,
  X
} from 'lucide-react';
import RecipeCard from './RecipeCard';
import { useRecipe} from '../../hook/useRecipe';
import { useRecipeFilters } from '../../hook/useRecipeFilter';
import Header from './Header';


export default function Recipes() {

 const {
  navigate,
  categories,
  activeCategory,
  setActiveCategory,
  searchTerm,
  handleBell,
  visibleRecipes,
  setSearchTerm,
  showNotif,
  sortByMatch,
} = useRecipe();

const {visibleRecipe} = useRecipeFilters()
  
  return (
    <div className="min-h-screen bg-[#F7FBF7] flex">
      <Sidebar />

      {/* Fix: Notification toast */}
      {showNotif && (
        <div className="fixed top-6 right-6 z-50 bg-on-surface text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-pulse">
          <Zap size={18} className="text-secondary" />
          <p className="font-bold text-sm">2 items expiring soon – check your pantry!</p>
        </div>
      )}

      <div className="flex-1 min-w-0">
       <Header  />
      

        <main className="px-6 lg:px-24 pt-6 lg:pt-8 pb-32">
          {/* Header Intro */}
          <div className="mb-10 lg:mb-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <div>
                <span className="text-secondary font-black text-[10px] uppercase tracking-[0.3em] mb-2 block">Personalized For You</span>
                <h2 className="font-display text-[32px] lg:text-[48px] leading-tight font-bold text-on-background tracking-tight">Smart Suggestions</h2>
              </div>
              <p className="text-on-surface-variant text-sm lg:text-base max-w-md lg:text-right font-medium leading-relaxed">
                Based on your pantry and history, here's what we recommend cooking today.
              </p>
            </div>
          </div>

          {/* : Recipes grid now uses the filtered list */}
          {visibleRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
              {visibleRecipes.map((recipe) => (
                <RecipeCard key={recipe.title} {...recipe} />
              ))}
              
              <div
                onClick={() => navigate('/pantry-setup')}
                className="bg-white/40 border-2 border-dashed border-outline-variant/30 rounded-[2rem] flex flex-col items-center justify-center p-8 text-center cursor-pointer hover:bg-white hover:border-primary/20 transition-all"
              >
                 <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-primary mb-4">
                   <Plus size={32} />
                 </div>
                 <h5 className="font-display font-bold text-on-surface">Discover More</h5>
                 <p className="text-xs text-on-surface-variant mt-2 font-medium">Connect more stores to unlock recipes</p>
              </div>
            </div>
          ) : (
            
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <Lightbulb size={48} className="text-outline-variant mb-4" />
              <h3 className="font-display text-2xl font-bold text-on-surface mb-2">No recipes found</h3>
              <p className="text-on-surface-variant text-sm">Try a different category or clear your search.</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchTerm(''); }}
                className="mt-6 bg-primary text-white px-8 py-3 rounded-2xl font-bold"
              >
                Show All Recipes
              </button>
            </div>
          )}
        </main>
      </div>

      {/* <BottomNav /> */}
    </div>
  );
}
