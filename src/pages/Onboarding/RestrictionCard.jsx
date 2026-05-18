import { CheckCircle2 } from 'lucide-react'

const RestrictionCard = ({ id, icon: Icon, title, description, image, isChecked, onToggle }) => (
  <div 
    onClick={() => onToggle(id)}
    className={`w-full group relative flex flex-col md:flex-row bg-white rounded-4xl overflow-hidden transition-all duration-500 border-2 cursor-pointer ${
      isChecked 
        ? 'border-primary shadow-2xl scale-[1.01] z-10' 
        : 'border-outline-variant/10 hover:border-primary/20 shadow-sm'
    }`}
  >
    <div className="h-36 md:h-auto md:w-36 shrink-0 overflow-hidden relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className={`absolute inset-0 bg-secondary/10 transition-opacity duration-500 ${isChecked ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'}`} />
      <div className="absolute top-3 left-3">
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${isChecked ? 'bg-primary text-white shadow-lg' : 'bg-white/80 backdrop-blur-md text-primary shadow-sm'}`}>
          <Icon size={18} />
        </div>
      </div>
    </div>
    
    <div className="p-5 flex-1 flex flex-col justify-center relative">
      <div className="absolute top-4 right-4">
        <div className={`w-7 h-7 rounded-xl border-2 flex items-center justify-center transition-all ${
          isChecked ? 'bg-primary border-primary scale-110' : 'border-outline-variant bg-[#F7FBF7]'
        }`}>
          {isChecked && <CheckCircle2 size={16} className="text-white" />}
        </div>
      </div>
      <h4 className="font-display text-xl font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">{title}</h4>
      <p className="text-sm text-on-surface-variant font-medium leading-relaxed">{description}</p>
    </div>
  </div>
);

export default RestrictionCard;