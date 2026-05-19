import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { 
  Camera, 
  Scan, 
  CheckCircle2, 
  AlertCircle, 
  RefreshCcw,
  Zap,
  ChevronLeft,
  Edit2,
  X,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_DETECTED } from '../../data/mockdata'; // Importing mock detected items for the receipt scan page, since we don't have a real OCR/AI API integration in this mockup.
import  DetectedItem  from './DetectedItem';
import { useReceiptScan }  from '../../hook/useRecieptScan';


export default function ReceiptScan() {

  const { detectedItems, editMode, confirmed, setEditMode,
         handleRetake, handleRename, handleRemove,
          handleConfirmSave, handleManualEntry,navigate } = useReceiptScan();
 
  return (
    <div className="min-h-screen bg-black flex overflow-hidden">
      <Sidebar />

      <div className="flex-1 relative flex flex-col min-w-0">
        {/* Camera View Simulation */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=1000&auto=format&fit=crop" 
            alt="Receipt Scan Background" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/60" />
        </div>

        {/* Success overlay */}
        {confirmed && (
          <div className="absolute inset-0 z-50 bg-primary flex flex-col items-center justify-center text-white text-center px-10">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', damping: 12 }}>
              <CheckCircle2 size={100} strokeWidth={1} />
            </motion.div>
            <h2 className="font-display text-3xl font-bold mt-8 mb-4">Items Added!</h2>
            <p className="text-white/80 font-bold uppercase tracking-widest text-[10px]">Updating your pantry…</p>
          </div>
        )}

        {/* Scanning UI Overlays */}
        <div className="relative z-10 flex-1 flex flex-col max-w-6xl mx-auto w-full px-6 lg:px-12 py-10">
          <header className="flex justify-between items-center mb-10">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white/20 transition-all">
                <ChevronLeft size={24} />
              </div>
              <span className="hidden lg:block font-bold">Back to Pantry</span>
            </button>
            <div className="bg-primary/90 text-white px-6 py-2.5 rounded-2xl flex items-center gap-3 text-xs lg:text-sm font-black tracking-widest shadow-[0_0_20px_rgba(30,123,73,0.4)] animate-pulse">
              <Zap size={18} fill="currentColor" /> AI ENGINE SCANNING...
            </div>
            <div className="w-12" />
          </header>

          <div className="flex-1 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Scan Frame */}
            <div className="relative">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full aspect-3/4 max-h-125 border-2 border-primary/40 rounded-3xl relative shadow-[0_0_60px_rgba(30,123,73,0.2)] bg-black/20 overflow-hidden"
              >
                {/* Corner Accents */}
                <div className="absolute -top-1 -left-1 w-12 h-12 border-t-4 border-l-4 border-primary rounded-tl-2xl shadow-[0_0_10px_rgba(30,123,73,0.5)]" />
                <div className="absolute -top-1 -right-1 w-12 h-12 border-t-4 border-r-4 border-primary rounded-tr-2xl shadow-[0_0_10px_rgba(30,123,73,0.5)]" />
                <div className="absolute -bottom-1 -left-1 w-12 h-12 border-b-4 border-l-4 border-primary rounded-bl-2xl shadow-[0_0_10px_rgba(30,123,73,0.5)]" />
                <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-4 border-r-4 border-primary rounded-br-2xl shadow-[0_0_10px_rgba(30,123,73,0.5)]" />

                {/* Scanning Line Animation */}
                <motion.div 
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-1 bg-linear-to-r from-transparent via-primary to-transparent shadow-[0_0_25px_#1e7b49] z-20"
                />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-30">
                  <Scan size={80} className="text-white mb-6" strokeWidth={1} />
                  <p className="text-white text-[10px] font-black tracking-[0.4em] uppercase">Align Document</p>
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                     <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Fixed Focus Active</p>
                </div>
              </motion.div>
            </div>

            {/* Detection Results Container */}
            <div className="flex flex-col h-full lg:justify-center">
              <div className="mb-8 flex items-end justify-between">
                <div>
                  <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-2 block">Detection Results</span>
                  <h3 className="text-white font-display text-3xl lg:text-4xl font-bold">Matching Items</h3>
                </div>
                {/*  "Edit All" toggles edit mode so each item name is editable */}
                <button
                  onClick={() => setEditMode(prev => !prev)}
                  className={`text-sm font-bold pb-1 flex items-center gap-2 transition-colors ${
                    editMode ? 'text-primary' : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  {editMode ? <Check size={16} /> : <Edit2 size={16} />}
                  {editMode ? 'Done' : 'Edit All'}
                </button>
              </div>
              
              <div className="space-y-2 mb-10 overflow-y-auto max-h-87.5 pr-2 no-scrollbar">
                {detectedItems.map(item => (
                  <DetectedItem
                    key={item.id}
                    {...item}
                    editMode={editMode}
                    onRename={handleRename}
                    onRemove={handleRemove}
                  />
                ))}
                {detectedItems.length === 0 && (
                  <p className="text-white/40 text-center py-8 font-bold">No items detected. Try retaking the scan.</p>
                )}
              </div>

              {/* Actions Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/*  "Confirm & Save" adds items to pantry state */}
                <button 
                  onClick={handleConfirmSave}
                  disabled={detectedItems.length === 0}
                  className="col-span-2 bg-primary text-white py-5 rounded-[1.5rem] font-display text-xl font-bold flex items-center justify-center gap-3 shadow-2xl shadow-primary/40 hover:scale-[1.02] transition-all active:scale-95 disabled:opacity-50"
                >
                  <CheckCircle2 size={24} /> Confirm & Save
                </button>
                {/*  "Retake" resets detected items to mock data */}
                <button
                  onClick={handleRetake}
                  className="bg-white/10 backdrop-blur-md text-white py-5 rounded-2xl font-bold text-sm flex items-center justify-center gap-3 border border-white/10 hover:bg-white/20 transition-all"
                >
                  <RefreshCcw size={18} /> Retake
                </button>
                {/*  "Manual Entry" goes to PantrySetup for manual input */}
                <button
                  onClick={handleManualEntry}
                  className="bg-white/10 backdrop-blur-md text-white py-5 rounded-2xl font-bold text-sm flex items-center justify-center gap-3 border border-white/10 hover:bg-white/20 transition-all"
                >
                  <Camera size={18} /> Manual Entry
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Audio Wave Visualizer Simulation */}
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-primary/10 flex gap-0.5 opacity-30">
          {[...Array(120)].map((_, i) => (
            <motion.div 
              key={i}
              animate={{ height: [`${Math.random() * 100}%`, `${Math.random() * 100}%`] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="flex-1 bg-primary"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
