import React from 'react';

const PantryItem = ({ image, name, status, amount, isExpiringSoon }) => (
  <div className={`bg-white p-4 rounded-2xl border flex items-center justify-between mb-3 transition-all duration-200 hover:shadow-md ${
    isExpiringSoon
      ? 'border-l-4 border-l-secondary border-t-transparent border-r-transparent border-b-transparent shadow-sm'
      : 'border border-outline-variant/10 shadow-sm'
  }`}>
    <div className="flex items-center gap-4">
      <div className="w-13 h-13 rounded-xl bg-surface-container-low overflow-hidden shadow-inner shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="text-sm font-bold text-on-surface leading-tight">{name}</h3>
        <span className={`text-[11px] font-semibold mt-0.5 block ${
          isExpiringSoon ? 'text-secondary' : 'text-on-surface-variant'
        }`}>
          {status}
        </span>
      </div>
    </div>
    <div className={`px-3 py-1.5 rounded-full shrink-0 ${
      isExpiringSoon
        ? 'bg-secondary-container/40 text-on-secondary-container'
        : 'bg-surface-container-high text-on-surface-variant'
    }`}>
      <span className="text-[11px] font-bold">{amount}</span>
    </div>
  </div>
);

export default PantryItem;