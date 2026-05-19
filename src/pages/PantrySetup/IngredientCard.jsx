import { Check } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

const IngredientCard = ({ image, name, isSelected, onToggle }) => (
  <button 
    onClick={onToggle}
    className={`relative flex flex-col p-4 lg:p-6 rounded-[2.5rem] transition-all duration-500 border-2 ${
      isSelected 
        ? 'border-primary bg-white shadow-2xl scale-[1.05] z-10' 
        : 'border-outline-variant/10 bg-white shadow-sm hover:border-primary/20'
    } group`}
  >
    <div className="aspect-square w-full rounded-4xl overflow-hidden mb-4 bg-surface-container relative">
      <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className={`absolute inset-0 transition-opacity duration-300 flex items-center justify-center ${isSelected ? 'bg-primary/20 opacity-100' : 'bg-black/0 opacity-0 group-hover:opacity-10'}`}>
        <div className={`p-3 rounded-2xl shadow-xl transition-all duration-500 transform ${isSelected ? 'bg-primary text-white rotate-0 scale-100' : 'bg-white text-primary rotate-12 scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-100'}`}>
          <Check size={24} strokeWidth={3} />
        </div>
      </div>
    </div>
    <span className={`text-base lg:text-lg font-bold text-center leading-tight transition-colors ${isSelected ? 'text-primary' : 'text-on-surface'}`}>
      {name}
    </span>
    {isSelected && (
        <motion.div 
            layoutId="active-dot"
            className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg lg:hidden"
        />
    )}
  </button>
);

export default IngredientCard;
