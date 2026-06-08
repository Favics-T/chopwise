import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { RECIPE_DETAILS, ALL_RECIPES } from '../data/mockData';

export const useRecipeDetail = () => {
  const { state, dispatch } = useAppContext();
  const [servings, setServings] = useState(4);
  const navigate = useNavigate();
  const location = useLocation();

  // Read recipe from navigation state; fall back to first recipe
  const recipe = location.state?.recipe ?? ALL_RECIPES[0];
  const details = RECIPE_DETAILS[recipe.title] ?? RECIPE_DETAILS['Smoky Party Jollof Rice'];

  const isFavourite = state.favouriteRecipes.includes(recipe.title);
  const handleToggleFavourite = () => {
    dispatch({ type: 'TOGGLE_FAVOURITE_RECIPE', payload: recipe.title });
  };

  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: recipe.title,
      text: `Check out this recipe on ChopWise: ${recipe.title}`,
      url: window.location.href,
    };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch (_) {}
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const [checkedIngredients, setCheckedIngredients] = useState([]);

  const toggleIngredient = (name) => {
    setCheckedIngredients(prev =>
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  return {
    recipe,
    details,
    servings,
    setServings,
    isFavourite,
    handleToggleFavourite,
    navigate,
    copied,
    setCopied,
    checkedIngredients,
    setCheckedIngredients,
    toggleIngredient,
    handleShare,
  };
};
