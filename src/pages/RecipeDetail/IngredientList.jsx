import React from 'react'
import { ingredientsList } from '../../data/mockdata';
import { useRecipeDetail } from '../../hook/useRecipeDetail';

 function IngredientList() {
  const { checkedIngredients, toggleIngredient, setCheckedIngredients } = useRecipeDetail();
  return (
   <section className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-display text-3xl font-bold">Ingredients</h3>
                <span className="text-secondary font-black text-xs uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-lg">{ingredientsList.length} items</span>
              </div>
              {/*  ingredients are now interactive – tap to check off */}
              <ul className="grid grid-cols-1 gap-1">
                {ingredientsList.map((item, i) => {
                  const isChecked = checkedIngredients.includes(item.name);
                  return (
                    <li
                      key={i}
                      onClick={() => toggleIngredient(item.name)}
                      className="flex items-center gap-4 py-4 px-2 hover:bg-white/40 rounded-xl transition-colors border-b border-outline-variant/5 cursor-pointer"
                    >
                      <div className={`w-6 h-6 border-2 rounded-md flex items-center justify-center shrink-0 transition-all ${
                        isChecked ? 'bg-primary border-primary' : 'border-primary/20 bg-white'
                      }`}>
                        {isChecked && <div className="w-3 h-3 bg-white rounded-xs" />}
                      </div>
                      <span className={`text-on-surface text-lg transition-all ${isChecked ? 'line-through opacity-40 font-medium' : 'font-semibold'}`}>
                        {item.name}
                      </span>
                      <span className="ml-auto text-sm font-black text-on-surface-variant/60">{item.amount}</span>
                    </li>
                  );
                })}
              </ul>
              {checkedIngredients.length > 0 && (
                <button
                  onClick={() => setCheckedIngredients([])}
                  className="mt-4 text-xs font-black uppercase tracking-widest text-on-surface-variant hover:text-error transition-colors"
                >
                  Clear checks
                </button>
              )}
            </section>
  )
}

export default IngredientList
