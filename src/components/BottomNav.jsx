import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Archive, 
  Bot, 
  BookOpen, 
  Settings as SettingsIcon 
} from 'lucide-react';

export default function BottomNav() {
  const navItems = [
    { label: 'Pantry', icon: Archive, path: '/pantry' },
    { label: 'AI Recipes', icon: Bot, path: '/recipes' },
    { label: 'Journal', icon: BookOpen, path: '/journal' },
    { label: 'Settings', icon: SettingsIcon, path: '/settings' },
  ];

  return (
    <nav className="fixed bottom-0 w-full max-w-[430px] z-50 flex justify-around items-center px-4 py-3 bg-white border-t border-outline-variant rounded-t-2xl shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => 
            `flex flex-col items-center justify-center gap-1 transition-all duration-200 flex-1 h-full min-h-[56px] ${
              isActive 
                ? 'text-primary' 
                : 'text-on-surface-variant hover:text-primary'
            }`
          }
        >
          <div className={`transition-all duration-300 p-1 rounded-full flex items-center justify-center ${
            window.location.pathname === item.path ? 'bg-primary-container/20 px-6 py-1.5' : ''
          }`}>
             <item.icon 
               size={22} 
               strokeWidth={window.location.pathname === item.path ? 2.5 : 2} 
               fill={window.location.pathname === item.path ? "currentColor" : "none"} 
               fillOpacity={0.2}
             />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
