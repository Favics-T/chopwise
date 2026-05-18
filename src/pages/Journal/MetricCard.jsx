const MetricCard = ({ icon: Icon, label, value, subtext, colorClass, progress }) => (
  <div className={`bg-white p-6 lg:p-8 rounded-4xl flex flex-col justify-between shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all group`}>
    <div>
      <div className={`flex items-center gap-3 mb-4 ${colorClass}`}>
        <div className="p-2 rounded-xl bg-current/10 flex items-center justify-center">
          <Icon size={20} />
        </div>
        <span className="text-[11px] font-black uppercase tracking-widest">{label}</span>
      </div>
      <p className="text-3xl lg:text-4xl font-display font-bold text-on-surface">
        {value}
      </p>
    </div>
    <div className="mt-6 space-y-3">
      {subtext && <p className={`text-xs font-bold text-on-surface-variant group-hover:text-primary transition-colors`}>{subtext}</p>}
      {progress && (
        <div className="w-full bg-outline-variant/10 rounded-full h-2 overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-1000 ${colorClass.replace('text-', 'bg-')}`} 
            style={{ width: `${progress}%` }} 
          />
        </div>
      )}
    </div>
  </div>
);

export default MetricCard