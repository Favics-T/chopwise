import { useState, useEffect } from 'react';
import { CheckCircle2, Clock, SignalHigh, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { callGemini } from '../../utils/gemini';

const mockWhyThis = {
  'Smoky Party Jollof Rice':   'Balanced carbs and vegetables — great for Healthier Eating.',
  'Egusi Soup with Spinach':   'Protein-rich and filling — supports your Muscle Gain goal.',
  'Garden Harvest Bowl':       'Light and nutrient-dense — ideal for Weight Loss.',
  'Gizdodo Breakfast':         'Low calorie, high flavour — fits your Maintenance goal.',
  'Beef Suya Skewers':         'High protein street food — great post-workout option.',
  'Puff Puff Dessert':         'A light treat — enjoy in moderation as part of balanced eating.',
};

export default function RecipeCard({ image, title, category, time, level, comment, isMatch }) {
  const navigate = useNavigate();
  const { state } = useAppContext();
  const [whyThis, setWhyThis] = useState(null);
  const [loadingWhy, setLoadingWhy] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const fetchWhy = async () => {
      const restrictions = state.restrictions.length
        ? state.restrictions.join(', ')
        : 'none';
      const prompt = `The user's health goal is ${state.healthGoal} and dietary restrictions are ${restrictions}. In one sentence under 20 words, explain why ${title} is a good fit for them. Plain text only.`;
      const fallback = mockWhyThis[title] ?? `A great fit for your ${state.healthGoal} goal.`;
      const result = await callGemini(prompt, fallback);
      if (!cancelled) {
        setWhyThis(result);
        setLoadingWhy(false);
      }
    };
    fetchWhy();
    return () => { cancelled = true; };
  }, [title, state.healthGoal, state.restrictions]);

  return (
    <div
      onClick={() => navigate('/recipe-detail', { state: { recipe: { image, title, category, time, level, comment, isMatch } } })}
      className="group bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-outline-variant/10 flex flex-col"
    >
      <div className="h-56 lg:h-64 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
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
        <h4 className="font-display text-xl lg:text-2xl font-bold text-on-surface mb-3 line-clamp-1 group-hover:text-primary transition-colors">
          {title}
        </h4>

        <div className="flex items-center gap-4 mb-3">
          <span className="flex items-center gap-1.5 text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">
            <Clock size={14} className="text-secondary" /> {time}
          </span>
          <span className="flex items-center gap-1.5 text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">
            <SignalHigh size={14} className="text-primary" /> {level}
          </span>
        </div>

        {/* "Why this?" AI pill */}
        {loadingWhy ? (
          <div className="mb-3 h-7 w-3/4 bg-surface-container/60 rounded-full animate-pulse" />
        ) : (
          <div className="mb-3 flex items-start gap-2 bg-secondary/10 px-3 py-2 rounded-2xl">
            <Sparkles size={13} className="text-secondary shrink-0 mt-0.5" />
            <p className="text-[11px] text-secondary font-semibold leading-snug">{whyThis}</p>
          </div>
        )}

        <div className="mt-auto bg-[#F7FBF7] p-4 rounded-2xl border border-primary/5 italic">
          <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-2">"{comment}"</p>
        </div>
      </div>
    </div>
  );
}
