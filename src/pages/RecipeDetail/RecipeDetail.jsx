import { useState } from 'react';
import {
  Lightbulb,
  CheckCircle,
  Copy,
  ShoppingCart,
  UtensilsCrossed,
} from 'lucide-react';
import { useRecipeDetail } from '../../hook/useRecipeDetail';
import RecipeHeader from './RecipeHeader';
import RecipeHero from './RecipeHero';
import IngredientsList from './IngredientList';
import MobileStats from './MobileStats';
import PreparationStep from './PreparationStep';
import MobileBottomBar from './MobileBottomBar';
import NutritionGrid from './NutritionGrid';
import RightHeader from './RightHeader';
import ShoppingList from './ShoppingList';

export default function RecipeDetail() {
  const [activeTab, setActiveTab] = useState('ingredients');

  const {
    recipe,
    details,
    servings,
    setServings,
    isFavourite,
    handleToggleFavourite,
    navigate,
    copied,
    checkedIngredients,
    setCheckedIngredients,
    toggleIngredient,
    handleShare,
  } = useRecipeDetail();

  return (
    <div className="min-h-screen bg-[#F7FBF7] pb-32 lg:pb-20">
      <RecipeHeader
        navigate={navigate}
        isFavourite={isFavourite}
        handleToggleFavourite={handleToggleFavourite}
        handleShare={handleShare}
        copied={copied}
      />

      {copied && (
        <div className="fixed top-20 right-6 z-50 bg-on-surface text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2 text-sm font-bold">
          <Copy size={16} /> Link copied to clipboard!
        </div>
      )}

      <main className="px-6 lg:px-24 pt-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left column — sticky hero + nutrition */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-fit">
            <RecipeHero image={recipe.image} detailTime={details.detailTime} />
            <NutritionGrid nutrition={details.nutrition} />

            {/* AI Pro Tip — Desktop */}
            <div className="hidden lg:block p-8 bg-[#F0F7F0] border border-primary/10 rounded-4xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <Lightbulb size={20} />
                </div>
                <span className="text-[11px] font-black text-primary uppercase tracking-[0.2em]">Pro ChopWise Tip</span>
              </div>
              <p className="text-sm font-medium text-on-secondary-container leading-relaxed italic">
                "{details.tip}"
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-7 pb-12">
            <RightHeader
              recipe={recipe}
              details={details}
              servings={servings}
              setServings={setServings}
            />

            {/* Tab bar */}
            <div className="flex gap-2 mb-8 bg-surface-container/50 p-1.5 rounded-2xl w-fit">
              <button
                onClick={() => setActiveTab('ingredients')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeTab === 'ingredients'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <UtensilsCrossed size={16} /> Ingredients
              </button>
              <button
                onClick={() => setActiveTab('shopping')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeTab === 'shopping'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <ShoppingCart size={16} /> Shopping List
              </button>
            </div>

            {activeTab === 'ingredients' && (
              <>
                <MobileStats
                  detailTime={details.detailTime}
                  energy={details.nutrition.energy}
                  level={recipe.level}
                />
                <IngredientsList
                  ingredients={details.ingredients}
                  checkedIngredients={checkedIngredients}
                  toggleIngredient={toggleIngredient}
                  clearChecks={() => setCheckedIngredients([])}
                />
                <PreparationStep steps={details.steps} />

                {/* Primary action */}
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
              </>
            )}

            {activeTab === 'shopping' && (
              <ShoppingList ingredients={details.ingredients} />
            )}
          </div>
        </div>
      </main>

      <MobileBottomBar />
    </div>
  );
}
