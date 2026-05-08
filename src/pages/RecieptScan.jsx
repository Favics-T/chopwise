
import React from 'react';
import { 
  X, 
  Camera, 
  Scan, 
  CheckCircle2, 
  AlertCircle, 
  RefreshCcw,
  Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

const DetectedItem = ({ name, status, type }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 mb-3"
  >
    <div>
      <h4 className="text-white font-bold text-sm">{name}</h4>
      <p className="text-white/60 text-[10px] uppercase font-black tracking-widest mt-0.5">{type}</p>
    </div>
    <div className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 ${
      status === 'Detected' ? 'bg-green-500/20 text-green-400' : 
      status === 'Waste Risk' ? 'bg-orange-500/20 text-orange-400' : 'bg-primary/20 text-on-primary-container'
    }`}>
      {status === 'Detected' ? <CheckCircle2 size={12} /> : <AlertCircle size={12} />}
      {status}
    </div>
  </motion.div>
);

export default function ReceiptScan() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Camera View Simulation */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=1000&auto=format&fit=crop" 
          alt="Receipt Scan Background" 
          className="w-full h-full object-cover opacity-50 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      {/* Scanning UI Overlays */}
      <div className="relative z-10 h-screen flex flex-col pt-12 pb-10 px-8">
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white"
          >
            <X size={24} />
          </button>
          <div className="bg-primary/90 text-white px-4 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold shadow-lg animate-pulse">
            <Zap size={14} fill="currentColor" /> AI SCANNING...
          </div>
          <div className="w-10" />
        </div>

        {/* Scan Frame */}
        <div className="flex-1 relative flex items-center justify-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full aspect-[3/4] border-2 border-primary/50 rounded-2xl relative shadow-[0_0_50px_rgba(30,123,73,0.3)]"
          >
            {/* Corner Accents */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-xl" />
            <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-xl" />
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-xl" />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-xl" />

            {/* Scanning Line Animation */}
            <motion.div 
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_15px_#1e7b49] z-20"
            />
            
            {/* Viewfinder Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-40">
              <Scan size={64} className="text-white mb-4" strokeWidth={1} />
              <p className="text-white text-xs font-black tracking-[0.3em] uppercase">Align Receipt</p>
            </div>
          </motion.div>
        </div>

        {/* Detection Results */}
        <div className="mt-8 mb-10">
          <h3 className="text-white font-display text-xl font-bold mb-4 flex items-center gap-2">
            Matching Items
          </h3>
          <div className="space-y-0">
            <DetectedItem name="12 Farm Eggs" status="Detected" type="Protein" />
            <DetectedItem name="1kg Basmati Rice" status="Waste Risk" type="Grains" />
            <DetectedItem name="Fresh Spinach" status="Expiring Soon" type="Vegetables" />
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => navigate('/pantry')}
            className="col-span-2 bg-primary text-white py-5 rounded-full font-display text-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-primary/20 active:scale-95 transition-all"
          >
            <CheckCircle2 size={24} /> Confirm Items
          </button>
          <button className="bg-white/10 backdrop-blur-md text-white py-4 rounded-full font-bold text-sm flex items-center justify-center gap-2">
            <RefreshCcw size={18} /> Retake
          </button>
          <button className="bg-white/10 backdrop-blur-md text-white py-4 rounded-full font-bold text-sm flex items-center justify-center gap-2">
            <Camera size={18} /> Manual
          </button>
        </div>
      </div>

      {/* Audio Wave Visualizer Simulation */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary/20 flex gap-[1px]">
        {[...Array(100)].map((_, i) => (
          <motion.div 
            key={i}
            animate={{ height: [`${Math.random() * 100}%`, `${Math.random() * 100}%`] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="flex-1 bg-primary/40"
          />
        ))}
      </div>
    </div>
  );
}
