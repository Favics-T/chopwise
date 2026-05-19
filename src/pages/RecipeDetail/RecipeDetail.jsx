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
  ChefHat,
  Copy,
  Check
} from 'lucide-react';
import { useRecipeDetail } from '../../hook/useRecipeDetail';
import RecipeHeader from './RecipeHeader';
import RecipeHero from './RecipeHero';
import ServingsControl from './ServingsControl';
import IngredientsList from './IngredientList';
import MobileStats from './MobileStats';
import PreparationStep from './PreparationStep';
import MobileBottomBar from './MobileBottomBar';
import NutritionGrid from './NutritionGrid';
import RightHeader from './RightHeader';
import { useNavigate } from 'react-router-dom';
import { ingredientsList  } from '../../data/mockdata';

const RECIPE_TITLE = 'Smoky Party Jollof Rice';

export default function RecipeDetail() {

  const {
  servings,
  increaseServings,
  decreaseServings,
  isFavourite,
  toggleFavourite,
  copied,
  shareRecipe,
  checkedIngredients,
  toggleIngredient,
  clearIngredients,
  goToUsageConfirmation
} = useRecipeDetail();

  return (
    <div className="min-h-screen bg-[#F7FBF7] pb-32 lg:pb-20">
      {/* Navigation Top Bar */}
      <RecipeHeader />
      {copied && (
        <div className="fixed top-20 right-6 z-50 bg-on-surface text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2 text-sm font-bold">
          <Copy size={16} /> Link copied to clipboard!
        </div>
      )}

      <main className="px-6 lg:px-24 pt-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">        
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-fit">
            {/* Hero Image Section */}
            <RecipeHero />
           <NutritionGrid />

            {/* AI Pro Tip - Desktop */}
            <div className="hidden lg:block p-8 bg-[#F0F7F0] border border-primary/10 rounded-4xl relative overflow-hidden group">
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
            <RightHeader />
                        <MobileStats />
            {/* Ingredients Section */}
            <IngredientsList
  ingredients={ingredientsList}
  checkedIngredients={checkedIngredients}
  toggleIngredient={toggleIngredient}
  clearChecks={() => setCheckedIngredients([])} />         
            <PreparationStep />
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
     <MobileBottomBar />
    </div>
  );
}
