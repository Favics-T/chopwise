import { Check } from 'lucide-react'

export default function RestrictionTile({ id, title, description, isChecked, onToggle }) {
  return (
    <button
      onClick={() => onToggle(id)}
      className="w-full flex items-center gap-3 px-4 py-[13px] rounded-[14px] text-left transition-all duration-200 focus:outline-none"
      style={{
        border: isChecked ? '1.5px solid #4ade80' : '1.5px solid rgba(255,255,255,0.06)',
        background: isChecked ? 'rgba(74,222,128,0.08)' : 'rgba(255,255,255,0.025)',
      }}
    >
      {/* Checkbox */}
      <div
        className="flex-shrink-0 w-[18px] h-[18px] rounded-md flex items-center justify-center transition-all duration-200"
        style={{
          background: isChecked ? '#4ade80' : 'rgba(0,0,0,0.3)',
          border: isChecked ? '1.5px solid #4ade80' : '1.5px solid rgba(255,255,255,0.18)',
        }}
      >
        {isChecked && <Check size={11} color="#0d1a0f" strokeWidth={3} />}
      </div>

      <div className="flex-1 min-w-0">
        <p
          className="text-[12px] font-semibold leading-snug"
          style={{ color: isChecked ? '#e8f5ea' : '#c8e6cc' }}
        >
          {title}
        </p>
        <p className="text-[11px] mt-[2px]" style={{ color: '#4a7a52' }}>
          {description}
        </p>
      </div>
    </button>
  );
}