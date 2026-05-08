import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  Camera, 
  Check, 
  ShoppingBag, 
  Plus 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = ["FRESH", "GRAINS", "SPICES", "OTHERS"];

const IngredientCard = ({ image, name, isSelected, onToggle }) => (
  <button 
    onClick={onToggle}
    className={`relative flex flex-col p-3 rounded-2xl transition-all duration-300 border-2 ${
      isSelected 
        ? 'border-primary bg-primary/5 shadow-md scale-[1.02]' 
        : 'border-transparent bg-white shadow-sm hover:border-outline-variant'
    }`}
  >
    <div className="aspect-square w-full rounded-xl overflow-hidden mb-3 bg-surface-container">
      <img src={image} alt={name} className="w-full h-full object-cover" />
      {isSelected && (
        <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
          <div className="bg-primary text-white p-1.5 rounded-full shadow-lg">
            <Check size={20} strokeWidth={3} />
          </div>
        </div>
      )}
    </div>
    <span className={`text-sm font-bold text-center leading-tight ${isSelected ? 'text-primary' : 'text-on-surface'}`}>
      {name}
    </span>
  </button>
);

export default function PantrySetup() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("FRESH");
  const [selectedItems, setSelectedItems] = useState(["Spinach", "Plantains"]);

  const ingredients = {
    FRESH: [
      { name: "Tomatoes", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBC6gL8f_R3C5FvW-PZp4_p4wYyV7_f-R9r7X-iL-Y_v7Y-R-f-R-f-R-f-R-f-R-f-R" },
      { name: "Red Peppers", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9p_O7n5p-R-f-R-f-R-f-R-f-R-f-R-f-R-f-R-f-R" },
      { name: "Eggplant", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBD9p_O7n5p-R-f-R-f-R-f-R-f-R-f-R-f-R-f-R-f-R" },
      { name: "Spinach", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIu6WlMXRniNgWwi-tleYMYBvYEGrJmzfUGjMwgS5i5S96cx9-e5Cqm9mKna2aXVxRinwVH7YLYqej2XXrWUr8fpg8V3y0cnbesr1k3Xpg7hKSryKNShAvhpGzg52B2zYKKKLCRtRd1laCMdCnoEnuiZhPa6AVDHTqBzDWiVNubwDbIbOW4I6WTC-aX16yeytBuyi2SqjpyS8TH8RzDYLsLpipm2M1_dR09tVR5O-d2ki_Lhzl3LpTu7E_DpcMVx1MX41_4oSEc4Y" },
      { name: "Plantains", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYWw0O_R-f-R-f-R-f-R-f-R-f-R-f-R-f-R-f-R-f-R-f-R" },
      { name: "Ginger", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9p_O7n5p-R-f-R-f-R-f-R-f-R-f-R-f-R-f-R-f-R" },
    ],
    GRAINS: [
      { name: "Long Grain Rice", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuZZHi2QBmMVepX-S7M6GjOPGirW-a_MTw66LyS_Arsw15HHQOvt8B0tR7bDXeEfiHieIu8LKyvut66N7jC8fm-JfnyqwVQTjyt0XQewEAdxEU57VcQv-WIGHVA0ub3ARnIpiFX3wtP2dBdHYj91fxqY6Jx1rMhNZho7D3Fk6mS8uJ-eV86P5gkvz5td5dogh63iMfJqpQpdJKuNNXYey_UU9ff5MfuIzib6kD2PhUGMWJqmNYWGvKif73S5OxzOI5s6Jw5nBuOyM" },
      { name: "Egusi Seeds", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBB9p_O7n5p-R-f-R-f-R-f-R-f-R-f-R-f-R-f-R-f-R" },
    ],
    SPICES: [
      { name: "Curry Powder", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBC9p_O7n5p-R-f-R-f-R-f-R-f-R-f-R-f-R-f-R-f-R" },
      { name: "Thyme", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBD9p_O7n5p-R-f-R-f-R-f-R-f-R-f-R-f-R-f-R-f-R" },
    ],
    OTHERS: []
  };

  const toggleItem = (name) => {
    setSelectedItems(prev => 
      prev.includes(name) ? prev.filter(i => i !== name) : [...prev, name]
    );
  };

  return (
    <div className="min-h-screen bg-background pb-40">
      <header className="sticky top-0 w-full z-40 bg-surface/90 backdrop-blur-md px-6 py-4 flex justify-between items-center shadow-sm">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-primary">
          <ArrowLeft size={24} />
        </button>
        <h1 className="font-display text-xl font-bold text-primary">Pantry Setup</h1>
        <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
          <Camera size={22} />
        </button>
      </header>

      <main className="px-6 pt-8 text-center mb-10">
        <span className="bg-secondary-container text-on-secondary-container text-[10px] font-black tracking-[0.2em] px-3 py-1.5 rounded-full uppercase mb-4 inline-block">Step 2 of 3</span>
        <h2 className="font-display text-[32px] leading-tight font-bold text-on-background mb-3 tracking-tighter">What's on your counter?</h2>
        <p className="text-on-surface-variant text-sm uppercase font-black tracking-widest leading-relaxed">
          Tap ingredients to add them to your digital pantry
        </p>
      </main>

      {/* Tabs */}
      <div className="px-6 mb-8 flex gap-3 overflow-x-auto no-scrollbar">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${
              activeTab === cat 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="px-6 grid grid-cols-3 gap-4">
        {ingredients[activeTab]?.map((item, i) => (
          <IngredientCard 
            key={item.name}
            {...item}
            isSelected={selectedItems.includes(item.name)}
            onToggle={() => toggleItem(item.name)}
          />
        ))}
        {/* Mock Add Card */}
        <button className="aspect-square bg-surface-container-high border-2 border-dashed border-outline-variant/50 rounded-2xl flex flex-col items-center justify-center text-outline group hover:border-primary hover:text-primary transition-all">
          <Plus size={32} className="group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-black uppercase mt-1">Add Detail</span>
        </button>
      </div>

      {/* Summary Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-outline-variant p-6 z-50">
        <div className="max-w-[430px] mx-auto flex flex-col gap-4">
          <div className="flex justify-between items-center px-2">
            <span className="text-sm font-bold text-on-surface-variant">{selectedItems.length} items selected</span>
            <button className="text-primary text-sm font-bold flex items-center gap-1">
              Clear All
            </button>
          </div>
          <button 
            onClick={() => navigate('/pantry')}
            className="w-full bg-primary text-white py-5 rounded-full font-display text-xl font-bold flex items-center justify-center gap-4 hover:shadow-lg shadow-primary/20 transition-all active:scale-95"
          >
            <ShoppingBag size={24} />
            Add to Pantry
          </button>
          <button 
            onClick={() => navigate('/receipt-scan')}
            className="w-full text-on-surface-variant font-bold text-sm py-2 underline decoration-outline-variant underline-offset-4"
          >
            Scan Receipt Instead
          </button>
        </div>
      </div>
    </div>
  );
}
