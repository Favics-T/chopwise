import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const RECIPE_TITLE = 'Smoky Party Jollof Rice';

export const useRecipeDetail = () => {
  const { state, dispatch } = useAppContext();
  const [servings, setServings] = useState(4);
  const navigate = useNavigate();

  const isFavourite = state.favouriteRecipes.includes(RECIPE_TITLE);
  const handleToggleFavourite = () => {
    dispatch({ type: 'TOGGLE_FAVOURITE_RECIPE', payload: RECIPE_TITLE });
  };

  const [copied, setCopied] = useState(false);
  
  const handleShare = async () => {
    const shareData = {
      title: RECIPE_TITLE,
      text: `Check out this recipe on ChopWise: ${RECIPE_TITLE}`,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (_) {
        
      }
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
    handleShare

  }

}