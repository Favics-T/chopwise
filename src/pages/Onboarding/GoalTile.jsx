export default function GoalTile({ id, title, description, isSelected, onClick }) {
  return (
    <button
      onClick={() => onClick(id)}
      className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-left transition-all duration-250 focus:outline-none"
      style={{
        border: isSelected ? '1.5px solid #4ade80' : '1.5px solid rgba(255,255,255,0.07)',
        background: isSelected ? 'rgba(74,222,128,0.09)' : 'rgba(255,255,255,0.03)',
      }}
    >
      {/* Radio circle */}
      <div
        className="flex-shrink-0 w-[18px] h-[18px] rounded-full flex items-center justify-center transition-all duration-200"
        style={{
          background: isSelected ? '#4ade80' : 'rgba(0,0,0,0.3)',
          border: isSelected ? '1.5px solid #4ade80' : '1.5px solid rgba(255,255,255,0.2)',
        }}
      >
        {isSelected && <div className="w-[7px] h-[7px] rounded-full bg-[#0d1a0f]" />}
      </div>

      <div className="flex-1 min-w-0">
        <p
          className="text-[13px] font-semibold leading-snug mb-0.5"
          style={{ color: isSelected ? '#e8f5ea' : '#c8e6cc' }}
        >
          {title}
        </p>
        <p className="text-[11px] leading-snug" style={{ color: '#4a7a52' }}>
          {description}
        </p>
      </div>

      {isSelected && (
        <div
          className="flex-shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg"
          style={{ background: 'rgba(74,222,128,0.12)', color: '#4ade80' }}
        >
          Selected
        </div>
      )}
    </button>
  );
}