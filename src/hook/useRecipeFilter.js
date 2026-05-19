import { useRecipe } from '../context/RecipeContext';

export const useRecipeFilters = () => {
  const {
    ALL_RECIPES,
    activeCategory,
    searchTerm,
    sortByMatch,
  } = useRecipe();

  const term = searchTerm.toLowerCase();

  const visibleRecipes = ALL_RECIPES
    .filter(r => {
      const matchesCategory =
        activeCategory === 'All' || r.category === activeCategory;

      const matchesSearch =
        r.title?.toLowerCase().includes(term) ||
        r.comment?.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    })
    .sort((a, b) =>
      sortByMatch
        ? (b.isMatch ? 1 : 0) - (a.isMatch ? 1 : 0)
        : 0
    );

  return { visibleRecipes };
};