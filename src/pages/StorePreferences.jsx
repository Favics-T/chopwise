import { useState } from 'react';
import { ArrowLeft, X, Plus, Store } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const PRESET_STORES = ['Shoprite', 'Spar', 'FoodCo', 'Justrite', 'Ebeano', 'Local Market'];
const MAX_STORES = 3;

export default function StorePreferences() {
  const navigate = useNavigate();
  const { state, dispatch } = useAppContext();
  const [selected, setSelected] = useState(state.preferredStores ?? []);
  const [customInput, setCustomInput] = useState('');

  const toggle = (store) => {
    if (selected.includes(store)) {
      setSelected(s => s.filter(x => x !== store));
    } else if (selected.length < MAX_STORES) {
      setSelected(s => [...s, store]);
    }
  };

  const addCustom = () => {
    const name = customInput.trim();
    if (!name || selected.includes(name) || selected.length >= MAX_STORES) return;
    setSelected(s => [...s, name]);
    setCustomInput('');
  };

  const handleSave = () => {
    dispatch({ type: 'SET_PREFERRED_STORES', payload: selected });
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-[#F7FBF7] pb-24">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-outline-variant/10 px-6 py-4 flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-2xl bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="font-display text-xl font-bold text-on-surface">Store Preferences</h1>
      </header>

      <main className="px-6 lg:px-24 pt-8 max-w-2xl mx-auto">
        <div className="mb-6">
          <span className="text-secondary font-black text-[10px] uppercase tracking-[0.3em] mb-2 block">Shopping</span>
          <h2 className="font-display text-2xl font-bold text-on-background">Where do you shop?</h2>
          <p className="text-on-surface-variant text-sm mt-2">
            Pick up to {MAX_STORES} stores. We'll tag your shopping list with your favourite.
          </p>
        </div>

        {/* Selected chips */}
        {selected.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selected.map(store => (
              <span
                key={store}
                className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold"
              >
                {store}
                <button
                  onClick={() => toggle(store)}
                  className="hover:opacity-70 transition-opacity"
                  aria-label={`Remove ${store}`}
                >
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Preset store grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {PRESET_STORES.map(store => {
            const isSelected = selected.includes(store);
            const isDisabled = !isSelected && selected.length >= MAX_STORES;
            return (
              <button
                key={store}
                onClick={() => toggle(store)}
                disabled={isDisabled}
                className={`flex items-center gap-3 px-5 py-4 rounded-2xl border-2 font-bold text-sm transition-all text-left ${
                  isSelected
                    ? 'bg-primary text-white border-primary shadow-md shadow-primary/20'
                    : isDisabled
                    ? 'bg-surface-container-low text-on-surface-variant/40 border-outline-variant/10 cursor-not-allowed'
                    : 'bg-white text-on-surface border-outline-variant/20 hover:border-primary/30 hover:bg-primary/5'
                }`}
              >
                <Store size={18} className={isSelected ? 'text-white' : 'text-primary'} />
                {store}
              </button>
            );
          })}
        </div>

        {/* Custom store input */}
        <div className="mb-10">
          <p className="text-xs font-black text-on-surface-variant uppercase tracking-widest mb-3">
            Add custom store
          </p>
          <div className="flex gap-3">
            <input
              type="text"
              value={customInput}
              onChange={e => setCustomInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && addCustom()}
              placeholder="e.g. Mile 12 Market, Mama Nkechi's…"
              disabled={selected.length >= MAX_STORES}
              className="flex-1 bg-white border border-outline-variant/20 rounded-2xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
            />
            <button
              onClick={addCustom}
              disabled={!customInput.trim() || selected.length >= MAX_STORES}
              className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity shrink-0"
            >
              <Plus size={20} />
            </button>
          </div>
          {selected.length >= MAX_STORES && (
            <p className="text-xs text-secondary mt-2 font-medium">
              Maximum {MAX_STORES} stores selected. Remove one to add another.
            </p>
          )}
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-primary text-white font-bold py-5 rounded-2xl text-base hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-primary/20"
        >
          Save Preferences
        </button>
      </main>
    </div>
  );
}
