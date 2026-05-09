// src/pages/UsageConfirmation.jsx
import React, { useState } from 'react';
import { 
  CheckCircle2, 
  X, 
  ChevronDown,
  Info 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const IngredientUsageRow = ({ name, usedQty, unit, stockQty, stockUnit }) => (
  <div className="bg-white p-5 lg:p-4 rounded-2xl border border-outline-variant/20 shadow-sm flex items-center justify-between group hover:border-primary/30 transition-all">
    <div className="flex flex-col">
      <h4 className="font-bold text-on-surface lg:text-sm">{name}</h4>
      <p className="text-[11px] lg:text-[10px] text-on-surface-variant font-bold uppercase lg:capitalize lg:font-medium tracking-wider lg:tracking-normal mt-0.5">
        {/* desktop */}
        <span className="hidden lg:inline">Pantry stock: </span>
        <span className="lg:hidden">Pantry: </span>
        {stockQty} {stockUnit} {stockUnit === 'cups' ? 'left' : stockUnit === 'cup' ? '' : 'left'}
      </p>
    </div>
    <div className="flex items-center gap-3">
      <div className="bg-surface-container lg:bg-background px-4 py-2 lg:px-3 lg:py-1 rounded-xl lg:rounded-lg flex items-center gap-2 border border-outline-variant/10">
        <input 
          type="number" 
          defaultValue={usedQty}
          className="w-10 lg:w-8 bg-transparent text-center font-display text-lg lg:text-base font-bold text-primary lg:text-primary-container focus:outline-none"
        />
      </div>
      <span className="text-sm font-bold text-on-surface-variant w-12 lg:w-auto">{unit}</span>
    </div>
  </div>
);

export default function UsageConfirmation() {
  const navigate = useNavigate();
  const [isConfirming, setIsConfirming] = useState(false);

  const handleConfirm = () => {
    setIsConfirming(true);
    // Simulate update delay
    setTimeout(() => {
      navigate('/journal');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black/40 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-6">
      <motion.div 
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        className="w-full max-w-125 bg-background rounded-t-[40px] md:rounded-[40px] overflow-hidden shadow-2xl relative"
      >
        {/* Success Overlay */}
        <AnimatePresence>
          {isConfirming && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 z-50 bg-primary flex flex-col items-center justify-center text-white text-center px-10"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 12 }}
              >
                <CheckCircle2 size={120} strokeWidth={1} />
              </motion.div>
              <h2 className="font-display text-3xl font-bold mt-8 mb-4">Pantry Updated!</h2>
              <p className="text-white/80 font-bold uppercase tracking-widest text-[10px]">
                Subtracting ingredients...
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="p-8 pt-4">
          {/* Handle for mobile UI */}
          <div className="w-16 h-1.5 bg-outline-variant/30 rounded-full mx-auto mb-8 md:hidden" />
          
          <div className="text-center mb-10">
            <h2 className="font-display text-[32px] font-bold text-on-surface leading-tight tracking-tighter mb-2">
              Confirm what you used
            </h2>
            <p className="text-on-surface-variant text-base font-medium">
              We'll update your pantry automatically.
            </p>
          </div>

          <div className="space-y-4 mb-10 max-h-[40vh] overflow-y-auto no-scrollbar pr-1">
            <IngredientUsageRow 
              name="Egusi Seeds"
              usedQty={2}
              unit="cups"
              stockQty={4}
              stockUnit="cups"
            />
            <IngredientUsageRow 
              name="Red Palm Oil"
              usedQty={500}
              unit="ml"
              stockQty={1.2}
              stockUnit="L"
            />
            <IngredientUsageRow 
              name="Spinach"
              usedQty={1}
              unit="bunch"
              stockQty={2}
              stockUnit="bunches"
            />
            <IngredientUsageRow 
              name="Assorted Meat"
              usedQty={1}
              unit="kg"
              stockQty={2.5}
              stockUnit="kg"
            />
          </div>

          {/* After Confirming Badge */}
          <div className="flex justify-center mb-10 lg:mb-8 lg:border-t lg:border-outline-variant/10 lg:pt-6">
            <div className="bg-primary/5 lg:bg-transparent border border-primary/10 lg:border-none px-5 py-2.5 rounded-full flex items-center gap-3 lg:gap-2">
              {/* desktop icon */}
              <div className="hidden lg:flex items-center gap-2 text-secondary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <span className="text-[10px] lg:text-[11px] font-black lg:font-bold uppercase lg:capitalize text-on-surface-variant lg:text-secondary tracking-widest lg:tracking-tight">
                After Confirming: <span className="hidden lg:inline text-secondary">21 ingredients remaining</span>
              </span>
              <span className="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase lg:hidden">
                21 ingredients remaining
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button 
              onClick={handleConfirm}
              className="w-full bg-primary text-white py-5 lg:py-4 rounded-full lg:rounded-xl font-display text-xl lg:text-base font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              Confirm & Update Pantry
            </button>
            <button 
              onClick={() => navigate(-1)}
              className="w-full py-4 text-on-surface-variant font-bold text-sm lg:text-base hover:bg-surface-container rounded-2xl lg:rounded-xl border border-transparent lg:border-outline-variant/30 transition-all"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Bottom Tip */}
        <div className="bg-surface-container-high py-4 px-8 flex justify-center items-center gap-2">
          <Info size={16} className="text-primary" />
          <p className="text-[11px] font-bold text-on-surface-variant text-center leading-tight">
            Logging this to your culinary journal automatically.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
