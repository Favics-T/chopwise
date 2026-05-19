import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ALL_RECIPES } from '../data/mockData';

export const useRecipe = () => {
        const navigate = useNavigate();
        
  const categories = ['All', 'Dinner', 'Lunch', 'Breakfast', 'Desserts', 'Quick Bites'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortByMatch, setSortByMatch] = useState(false);
    const [showNotif, setShowNotif] = useState(false);

    const visibleRecipes = ALL_RECIPES
    .filter(r => {
      const matchesCategory = activeCategory === 'All' || r.category === activeCategory;
      const matchesSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            r.comment.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    
    .sort((a, b) => sortByMatch ? (b.isMatch ? 1 : 0) - (a.isMatch ? 1 : 0) : 0);

  
  const handleBell = () => {
    setShowNotif(true);
    setTimeout(() => setShowNotif(false), 3000);
  };

  return {
    navigate,
    categories,
    activeCategory,
    setActiveCategory,
    searchTerm,
    setSearchTerm,
    handleBell,
    visibleRecipes,
    showNotif,
    setShowNotif
  }

}