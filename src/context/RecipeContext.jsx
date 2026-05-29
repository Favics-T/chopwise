import { createContext, useContext, useState } from 'react';
// import { ALL_RECIPES } from '../../data/mockData';
import { ALL_RECIPES } from '../data/mockData'
import { useNavigate } from 'react-router-dom';

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const navigate = useNavigate();

  const categories = ['All', 'Dinner', 'Lunch', 'Breakfast', 'Desserts', 'Quick Bites'];

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortByMatch, setSortByMatch] = useState(false);
  const [showNotif, setShowNotif] = useState(false);

  const handleBell = () => {
    setShowNotif(true);
    setTimeout(() => setShowNotif(false), 3000);
  };

  return (
    <RecipeContext.Provider
      value={{
        navigate,
        categories,
        activeCategory,
        setActiveCategory,
        searchTerm,
        setSearchTerm,
        sortByMatch,
        setSortByMatch,
        showNotif,
        handleBell,
        ALL_RECIPES
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = () => useContext(RecipeContext);