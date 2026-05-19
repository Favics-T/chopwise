 import { motion } from 'motion/react';
 import { useState } from 'react';
 import { CheckCircle2, AlertCircle, X } from 'lucide-react';
 
 function DetectedItem  ({ id, name, status, type, editMode, onRename, onRemove })  {
  const [editValue, setEditValue] = useState(name);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center justify-between p-5 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 mb-4 hover:shadow-xl hover:bg-white/20 transition-all"
    >
      {editMode ? (
        // Fix: inline editing when "Edit All" is toggled
        <input
          value={editValue}
          onChange={e => setEditValue(e.target.value)}
          onBlur={() => onRename(id, editValue)}
          className="flex-1 bg-white/20 text-white font-bold text-base rounded-xl px-3 py-1 focus:outline-none border border-white/30 mr-3"
        />
      ) : (
        <div>
          <h4 className="text-white font-bold text-base">{name}</h4>
          <p className="text-white/50 text-[10px] uppercase font-black tracking-widest mt-1">{type}</p>
        </div>
      )}

      <div className="flex items-center gap-2">
        <div className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider flex items-center gap-2 ${
          status === 'Detected' ? 'bg-green-500/20 text-green-400' : 
          status === 'Waste Risk' ? 'bg-orange-500/20 text-orange-400' : 'bg-primary/20 text-[#1e7b49]'
        }`}>
          {status === 'Detected' ? <CheckCircle2 size={14} /> : <AlertCircle size={14} />}
          {status}
        </div>
        {/* Fix: remove button visible in edit mode */}
        {editMode && (
          <button
            onClick={() => onRemove(id)}
            className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/10 text-white hover:bg-red-500/30 transition-all"
          >
            <X size={14} />
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default DetectedItem ;