import React from 'react'
import { Clock, Flame, ChefHat } from 'lucide-react';

function MobileStats() {
  return (
   <section className="lg:hidden mb-10 border-b border-outline-variant/30 pb-8 flex justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Time</span>
                <span className="font-display text-xl font-bold text-primary flex items-center gap-1.5"><Clock size={16} /> 65m</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Energy</span>
                {/* Fix: typo "kcl" → "kcal" on mobile stat too */}
                <span className="font-display text-xl font-bold text-primary flex items-center gap-1.5"><Flame size={16} /> 540kcal</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Level</span>
                <span className="font-display text-xl font-bold text-primary flex items-center gap-1.5"><ChefHat size={16} /> Med</span>
              </div>
            </section>
  )
}

export default MobileStats
