import React from 'react';


const PantryItem = ({ image, name, status, amount, isExpiringSoon }) => (
  <div className={`bg-white p-4 rounded-xl shadow-sm border-l-4 flex items-center justify-between mb-3 ${
    isExpiringSoon ? 'border-secondary' : 'border-transparent'
  }`}>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-lg bg-surface-container-low overflow-hidden shadow-inner">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="text-sm font-bold text-on-surface">{name}</h3>
        <span className={`text-[11px] font-semibold ${isExpiringSoon ? 'text-secondary' : 'text-on-surface-variant'}`}>
          {status}
        </span>
      </div>
    </div>
    <div className={`${isExpiringSoon ? 'bg-secondary-container/30 text-on-secondary-container' : 'bg-surface-container-high text-on-surface-variant'} px-3 py-1 rounded-full`}>
      <span className="text-[11px] font-bold">{amount}</span>
    </div>
  </div>
);