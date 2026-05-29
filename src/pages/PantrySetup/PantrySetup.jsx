import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  Camera, 
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
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddInput, setShowAddInput] = useState(false);
  const [customName, setCustomName] = useState('');
  const [ingredients, setIngredients] = useState(mockIngredients);

  const toggleItem = (name) => {
    setSelectedItems(prev => 
      prev.includes(name) ? prev.filter(i => i !== name) : [...prev, name]
    );
  };

  const visibleIngredients = (ingredients[activeTab] || []).filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddCustomIngredient = () => {
    const trimmed = customName.trim();
    if (!trimmed) return;
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

  const handleContinue = () => {
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
    dispatch({ type: 'SET_PANTRY', payload: pantryItems });
    navigate('/recipes');
  };

  return (
    <div className="min-h-screen bg-[#F7FBF7] pb-40">

      {/* ── Header ── */}
      <header className="sticky top-0 w-full z-40 bg-white/80 backdrop-blur-xl px-5 py-3.5 lg:px-12 lg:pt-8 flex justify-between items-center border-b border-outline-variant/10">
        <button onClick={() => navigate(-1)} className="flex items-center gap-3 text-primary group">
          <div className="w-10 h-10 rounded-2xl bg-white shadow-sm border border-outline-variant/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-200">
            <ArrowLeft size={20} />
          </div>
          <span className="hidden lg:block font-black text-[10px] uppercase tracking-widest text-on-surface-variant">Back to Onboarding</span>
        </button>

        {/* Search — desktop only */}
        <div className="hidden lg:flex flex-1 max-w-md mx-8 relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant" size={17} />
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search ingredients by name…"
            className="w-full bg-white border border-outline-variant/15 rounded-2xl py-3.5 pl-12 pr-10 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-primary/10 shadow-sm"
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-error transition-colors">
              <X size={15} />
            </button>
          )}
        </div>

        <button
          onClick={() => navigate('/receipt-scan')}
          className="w-10 h-10 lg:w-auto lg:px-6 rounded-2xl bg-white shadow-sm border border-outline-variant/10 flex items-center justify-center lg:gap-2.5 text-secondary hover:shadow-md transition-all duration-200"
        >
          <Camera size={20} />
          <span className="hidden lg:block font-bold text-sm">Quick Scan</span>
        </button>
      </header>

      {/* ── Hero text ── */}
      <main className="max-w-4xl mx-auto px-5 lg:px-12 pt-10 lg:pt-16 mb-10 text-center">
        <span className="bg-primary/10 text-primary text-[10px] font-black tracking-[0.25em] px-4 py-1.5 rounded-xl uppercase mb-5 inline-block border border-primary/15">
          Step 2 of 3
        </span>

        {/* Mobile search */}
        <div className="lg:hidden relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={16} />
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search ingredients…"
            className="w-full bg-white border border-outline-variant/15 rounded-2xl py-3 pl-10 pr-9 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-primary/10 shadow-sm"
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant">
              <X size={14} />
            </button>
          )}
        </div>

        <h2 className="font-display text-[36px] lg:text-[64px] leading-[0.97] font-bold text-on-background tracking-tighter max-w-xl mx-auto">
          What's on your counter right now?
        </h2>
        <p className="text-sm text-on-surface-variant mt-3 font-medium">
          Tap everything you have — we'll suggest recipes from it.
        </p>
      </main>

      {/* ── Category Tabs ── */}
      <div className="max-w-2xl mx-auto px-5 mb-8 flex gap-2.5 justify-center flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => { setActiveTab(cat); setSearchTerm(''); }}
            className={`px-6 py-2.5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all duration-200 ${
              activeTab === cat
                ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                : 'bg-white text-on-surface-variant border border-outline-variant/10 hover:border-primary/25 hover:text-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Ingredient Grid ── */}
      <div className="max-w-4xl mx-auto px-5 lg:px-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
        {visibleIngredients.map((item) => (
          <IngredientCard
            key={item.name}
            {...item}
            isSelected={selectedItems.includes(item.name)}
            onToggle={() => toggleItem(item.name)}
          />
        ))}

        {/* Add custom ingredient card */}
        {showAddInput ? (
          <div className="aspect-square bg-white border-2 border-primary/25 rounded-[2rem] flex flex-col items-center justify-center p-5 gap-3 shadow-sm">
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
            className="aspect-square bg-white/50 border-2 border-dashed border-outline-variant/15 rounded-[2rem] flex flex-col items-center justify-center text-on-surface-variant group hover:bg-white hover:border-primary/25 hover:text-primary transition-all duration-200"
          >
            <div className="w-14 h-14 rounded-[1.25rem] bg-white shadow-sm flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110 group-hover:shadow-md">
              <Plus size={32} className="text-primary" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest">Add Ingredient</span>
          </button>
        )}
      </div>

      {/* ── Floating Summary Bar ── */}
      <div className="fixed bottom-0 left-0 right-0 p-4 lg:p-8 z-50">
        <div className="max-w-3xl mx-auto bg-white/92 backdrop-blur-2xl rounded-[2rem] border border-outline-variant/10 shadow-2xl shadow-black/10 p-4 lg:p-6 flex flex-col lg:flex-row items-center gap-4 lg:gap-10">

          <div className="flex items-center gap-4 flex-1 w-full lg:w-auto">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/25 shrink-0">
              <ShoppingBag size={26} />
            </div>
            <div className="text-left">
              <p className="font-display text-xl font-bold text-on-surface leading-tight">
                {selectedItems.length} Ingredients
              </p>
              <button
                onClick={() => setSelectedItems([])}
                className="text-error font-black text-[10px] uppercase tracking-widest flex items-center gap-1.5 mt-0.5 hover:opacity-70 transition-opacity"
              >
                <Trash2 size={11} /> Clear Selection
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-3 w-full lg:w-auto">
            <button
              onClick={() => navigate('/receipt-scan')}
              className="hidden lg:flex items-center gap-1.5 text-on-surface-variant font-black text-[10px] uppercase tracking-widest hover:text-primary transition-colors px-4"
            >
              Or scan receipt <ChevronRight size={13} />
            </button>
            <button
              onClick={handleContinue}
              disabled={selectedItems.length === 0}
              className="w-full lg:w-64 bg-primary text-white py-5 rounded-2xl font-display text-xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] shadow-xl shadow-primary/20 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue <ArrowRight size={22} />
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}