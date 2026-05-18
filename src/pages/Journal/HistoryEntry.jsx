import { History,Calendar,X, ChevronRight } from 'lucide-react'

const HistoryEntry = ({ id, date, image, title, saved, description, time, tag, isFirst, onDelete }) => (
  <div className="flex gap-6 lg:gap-10 group relative">
    {/* Timeline desktop */}
    <div className="hidden lg:flex flex-col items-center">
        <div className={`w-10 h-10 rounded-full border-4 border-white shadow-md z-10 flex items-center justify-center ${isFirst ? 'bg-primary text-white' : 'bg-white text-on-surface-variant'}`}>
            <History size={18} />
        </div>
        <div className="flex-1 w-0.5 bg-outline-variant/20 my-2" />
    </div>

    <div className="flex-1 pb-12">
        <div className="flex items-center gap-2 mb-4">
            <Calendar size={14} className="text-secondary" />
            <span className="text-xs font-black text-on-surface-variant uppercase tracking-widest">
              {date}
            </span>
        </div>
        
        <div className="bg-white rounded-4xl shadow-sm border border-outline-variant/10 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col lg:flex-row h-full">
          {image && (
            <div className="lg:w-64 h-48 lg:h-auto overflow-hidden shrink-0">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
          )}
          <div className="p-8 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-display text-xl lg:text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">{title}</h4>
              <div className="flex items-center gap-2">
                <span className="bg-[#F0F7F0] text-primary px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider border border-primary/10">
                  {saved} saved
                </span>
                {/*  delete button removes entry from global state */}
                {onDelete && (
                  <button
                    onClick={() => onDelete(id)}
                    title="Remove entry"
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-on-surface-variant hover:text-error hover:bg-error/10 transition-all opacity-0 group-hover:opacity-100"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
            <p className="text-on-surface-variant text-base leading-relaxed mb-6 font-medium">
              {description || 'Meal cooked and logged to your journal.'}
            </p>
            <div className="mt-auto flex items-center gap-3">
              <span className="bg-surface-container/40 px-4 py-2 rounded-xl text-[10px] font-black text-on-surface-variant uppercase tracking-widest">
                {time}
              </span>
              <span className="bg-surface-container/40 px-4 py-2 rounded-xl text-[10px] font-black text-on-surface-variant uppercase tracking-widest">
                {tag}
              </span>
              <div className="ml-auto w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary-container lg:hidden">
                  <ChevronRight size={20} />
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
);

export default HistoryEntry