import React from 'react'

function NutritionGrid() {
  return (
    <div>
      {/* Desktop Quick Stats / Nutrition Bento */}
            <section className="hidden lg:block mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-[1.5rem] shadow-sm border border-outline-variant/10">
                  <span className="bg-[#E6F3E6] text-primary text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wider mb-2 inline-block">Protein</span>
                  <p className="font-display text-2xl font-bold text-on-surface">18g</p>
                </div>
                <div className="bg-white p-5 rounded-[1.5rem] shadow-sm border border-outline-variant/10">
                  <span className="bg-[#FFF4E6] text-[#FF8C00] text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wider mb-2 inline-block">Energy</span>
                  {/* Fix: typo "kcl" → "kcal" */}
                  <p className="font-display text-2xl font-bold text-on-surface">540 kcal</p>
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
    </div>
  )
}

export default NutritionGrid
