import React from 'react'
import { CheckCircle2,Clock,SignalHigh } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function RecipeCard() {
    
  
    const RecipeCard = ({ image, title, category, time, level, comment, isMatch }) => {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate('/recipe-detail')}
      className="group bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-outline-variant/10 flex flex-col"
    >
      <div className="h-56 lg:h-64 relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-lg">
            {category}
          </span>
        </div>
        {isMatch && (
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-black text-primary flex items-center gap-1.5 shadow-sm border border-white/20">
            <CheckCircle2 size={14} /> 100% MATCH
          </div>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h4 className="font-display text-xl lg:text-2xl font-bold text-on-surface mb-3 line-clamp-1 group-hover:text-primary transition-colors">{title}</h4>
        
        <div className="flex items-center gap-4 mb-4">
          <span className="flex items-center gap-1.5 text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">
            <Clock size={14} className="text-secondary" /> {time}
          </span>
          <span className="flex items-center gap-1.5 text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">
            <SignalHigh size={14} className="text-primary" /> {level}
          </span>
        </div>
        
        <div className="mt-auto bg-[#F7FBF7] p-4 rounded-2xl border border-primary/5 italic">
          <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-2">"{comment}"</p>
        </div>
      </div>
    </div>
  );
};
  
}

export default RecipeCard
