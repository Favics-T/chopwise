import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  Camera, 
  Check, 
  ShoppingBag, 
  Plus,
  Trash2,
  ChevronRight,
  ArrowRight,
  X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useAppContext } from '../../context/AppContext';
import { ingredients as mockIngredients } from '../../data/mockdata';
import IngredientCard from './IngredientCard';

const categories = ["FRESH", "GRAINS", "SPICES", "OTHERS"];


export default function PantrySetup() {
  const navigate = useNavigate();
  const { dispatch } = useAppContext();
  const [activeTab, setActiveTab] = useState("FRESH");
  const [selectedItems, setSelectedItems] = useState(["Spinach", "Plantains"]);

  // search term to filter ingredient grid
  const [searchTerm, setSearchTerm] = useState('');

  //  state for custom ingredient inline input
  const [showAddInput, setShowAddInput] = useState(false);
  const [customName, setCustomName] = useState('');

  // All built-in ingredients per tab
  const [ingredients, setIngredients] = useState(mockIngredients);

  const toggleItem = (name) => {
    setSelectedItems(prev => 
      prev.includes(name) ? prev.filter(i => i !== name) : [...prev, name]
    );
  };

  //  filter visible ingredients by search term
  const visibleIngredients = (ingredients[activeTab] || []).filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //  add a custom ingredient to the current tab's list and auto-select it
  const handleAddCustomIngredient = () => {
    const trimmed = customName.trim();
    if (!trimmed) return;
    // Use a placeholder image for custom items
    const newItem = {
      name: trimmed,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop&q=80',
    };
    setIngredients(prev => ({
      ...prev,
      [activeTab]: [...prev[activeTab], newItem],
    }));
    setSelectedItems(prev => [...prev, trimmed]);
    setCustomName('');
    setShowAddInput(false);
  };

  //  "Continue" maps selected items to pantry format and dispatches SET_PANTRY
  const handleContinue = () => {
    // Build pantry items from all ingredient lists + selected filter
    const allIngredients = Object.values(ingredients).flat();
    const pantryItems = allIngredients
      .filter(item => selectedItems.includes(item.name))
      .map((item, index) => ({
        id: Date.now() + index,
        name: item.name,
        qty: 1,
        unit: 'Item',
        status: 'Stable',
        expiry: '',
        image: item.image,
        isExpiringSoon: false,
      }));

    // Save to global state
    dispatch({ type: 'SET_PANTRY', payload: pantryItems });
    navigate('/recipes');
  };

  return (
    <div className="min-h-screen bg-[#F7FBF7] pb-40">
      <header className="sticky top-0 w-full z-40 bg-white/80 backdrop-blur-xl lg:bg-transparent lg:backdrop-blur-none px-6 py-4 lg:px-12 lg:pt-10 flex justify-between items-center">
        <button onClick={() => navigate(-1)} className="flex items-center gap-3 text-primary group">
          <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
            <ArrowLeft size={24} />
          </div>
          <span className="hidden lg:block font-black text-[10px] uppercase tracking-widest">Back to Onboarding</span>
        </button>
        
        {/*  desktop search bar is now controlled and filters the ingredient grid */}
        <div className="hidden lg:relative lg:flex lg:flex-1 lg:max-w-xl mx-auto">
            <div className="relative w-full">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-on-surface-variant" size={20} />
              <input 
                  type="text"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  placeholder="Search ingredients by name or scan a photo..."
                  className="w-full bg-white border border-outline-variant/10 rounded-3xl py-5 pl-16 pr-10 focus:outline-none focus:ring-4 focus:ring-primary/10 shadow-sm"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className="absolute right-5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-error transition-colors">
                  <X size={18} />
                </button>
              )}
            </div>
        </div>

        <button 
           onClick={() => navigate('/receipt-scan')}
           className="w-12 h-12 lg:w-fit lg:px-8 rounded-2xl bg-white shadow-sm flex items-center justify-center lg:gap-3 text-secondary lg:border lg:border-secondary/10 hover:shadow-lg transition-all"
        >
          <Camera size={24} />
          <span className="hidden lg:block font-bold">Quick Scan</span>
        </button>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-24 pt-12 lg:pt-20 text-center mb-16">
        <span className="bg-primary/10 text-primary text-[10px] font-black tracking-[0.3em] px-5 py-2 rounded-xl uppercase mb-6 inline-block border border-primary/20">Step 2 of 3</span>
        <h2 className="font-display text-[42px] lg:text-[72px] leading-[0.95] font-bold text-on-background mb-8 tracking-tighter max-w-2xl mx-auto">What's on your counter right now?</h2>
      </main>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto px-6 mb-16 flex gap-4 lg:gap-6 justify-center">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => { setActiveTab(cat); setSearchTerm(''); }}
            className={`px-8 py-3.5 rounded-[1.5rem] font-black text-[10px] lg:text-xs uppercase tracking-widest transition-all ${
              activeTab === cat 
                ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-105' 
                : 'bg-white text-on-surface-variant border border-outline-variant/10 hover:border-primary/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
        {visibleIngredients.map((item) => (
          <IngredientCard 
            key={item.name}
            {...item}
            isSelected={selectedItems.includes(item.name)}
            onToggle={() => toggleItem(item.name)}
          />
        ))}

        {/*  "Add Ingredient" card reveals inline input to type a custom item */}
        {showAddInput ? (
          <div className="aspect-square bg-white border-2 border-primary/30 rounded-[2.5rem] flex flex-col items-center justify-center p-6 gap-3">
            <input
              type="text"
              autoFocus
              value={customName}
              onChange={e => setCustomName(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleAddCustomIngredient()}
              placeholder="Item name…"
              className="w-full border border-outline-variant/20 rounded-xl px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 text-center"
            />
            <div className="flex gap-2 w-full">
              <button
                onClick={() => { setShowAddInput(false); setCustomName(''); }}
                className="flex-1 py-2 rounded-xl border border-outline-variant/20 text-xs font-bold text-on-surface-variant hover:bg-surface-container transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCustomIngredient}
                disabled={!customName.trim()}
                className="flex-1 py-2 rounded-xl bg-primary text-white text-xs font-bold disabled:opacity-50 transition-all"
              >
                Add
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowAddInput(true)}
            className="aspect-square bg-white/50 border-4 border-dashed border-outline-variant/10 rounded-[2.5rem] flex flex-col items-center justify-center text-on-surface-variant group hover:bg-white hover:border-primary/20 transition-all"
          >
            <div className="w-16 h-16 rounded-[1.5rem] bg-white shadow-sm flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
              <Plus size={40} className="text-primary" />
            </div>
            <span className="text-xs font-black uppercase tracking-widest">Add Ingredient</span>
          </button>
        )}
      </div>

      {/* Summary Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 md:p-6 lg:p-10 z-50">
        <div className="max-w-full lg:max-w-7xl mx-auto bg-white/90 backdrop-blur-2xl rounded-[2.5rem] md:rounded-[3rem] border border-outline-variant/10 shadow-2xl p-4 md:p-6 lg:p-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          <div className="flex-1 flex items-center gap-6">
              <div className="w-16 h-16 rounded-[1.5rem] bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20 shrink-0">
                  <ShoppingBag size={32} />
              </div>
              <div className="text-left">
                  <p className="text-2xl font-display font-bold text-on-surface">{selectedItems.length} Ingredients</p>
                  {/* Fix: "Clear" button clears the selection */}
                  <button
                    onClick={() => setSelectedItems([])}
                    className="text-error font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-opacity"
                  >
                      <Trash2 size={12} /> Clear Current Selection
                  </button>
              </div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-auto">
              <button 
                onClick={() => navigate('/receipt-scan')}
                className="hidden lg:flex items-center gap-2 text-on-surface-variant font-black text-[10px] uppercase tracking-widest hover:text-primary transition-colors px-6"
              >
                  Or scan receipt instead <ChevronRight size={14} />
              </button>
              {/*  "Continue" saves selected items to global state before navigating */}
              <button 
                onClick={handleContinue}
                disabled={selectedItems.length === 0}
                className="w-full lg:w-72 bg-primary text-white py-6 rounded-[1.5rem] font-display text-2xl font-bold flex items-center justify-center gap-4 hover:scale-[1.02] shadow-xl shadow-primary/20 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue <ArrowRight size={28} />
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
