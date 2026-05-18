import { CheckCircle2 } from 'lucide-react'

const GoalCard = ({ id, icon: Icon, title, description, image, isSelected, onClick }) => (
  <button 
    onClick={() => onClick(id)}
    className={`w-full group relative flex flex-col md:flex-row bg-white rounded-4xl overflow-hidden transition-all duration-500 border-2 text-left ${
      isSelected 
        ? 'border-primary shadow-2xl scale-[1.01] z-10' 
        : 'border-outline-variant/10 hover:border-primary/20 shadow-sm'
    }`}
  >
    <div className="h-40 md:h-auto md:w-36 shrink-0 overflow-hidden relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className={`absolute inset-0 bg-primary/10 transition-opacity duration-500 ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'}`} />
      <div className="absolute top-3 left-3">
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${isSelected ? 'bg-primary text-white shadow-lg' : 'bg-white/80 backdrop-blur-md text-primary shadow-sm'}`}>
          <Icon size={18} />
        </div>
      </div>
    </div>
    
    <div className="p-5 flex-1 flex flex-col justify-center relative">
      {isSelected && (
        <div className="absolute top-4 right-4 text-primary">
          <CheckCircle2 size={22} fill="currentColor" className="text-primary fill-primary bg-white rounded-full" />
        </div>
      )}
      <h4 className="font-display text-xl font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">{title}</h4>
      <p className="text-sm text-on-surface-variant font-medium leading-relaxed">{description}</p>
    </div>
  </button>
);

export default GoalCard