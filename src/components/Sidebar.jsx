
import React from 'react';
import { 
  ChefHat, 
  Refrigerator, 
  Settings,
  LogOut,
  LayoutDashboard
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavItem = ({ icon: Icon, label, path, active }) => {
  const navigate = useNavigate();
  return (
    <button 
      onClick={() => navigate(path)}
      className={`w-full flex items-center gap-4 px-6 py-4 transition-all relative group ${
        active 
          ? 'text-primary font-bold bg-primary/5 border-r-4 border-primary' 
          : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low font-medium'
      }`}
    >
      <Icon size={22} className={active ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary'} />
      <span className="lg:text-base">{label}</span>
      {active && <div className="absolute right-0 top-0 bottom-0 w-1 bg-primary rounded-l-full" />}
    </button>
  );
};

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Journal', path: '/journal' },
    { icon: ChefHat, label: 'Recipes', path: '/recipes' },
    { icon: Refrigerator, label: 'Pantry', path: '/pantry' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-72 bg-white border-r border-outline-variant/10 h-screen sticky top-0 z-40 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
      {/* Logo */}
      <div className="p-8 pb-12">
        <h1 
          onClick={() => navigate('/journal')}
          className="font-display text-3xl font-black text-primary cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-xl">C</div>
          <span>ChopWise</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        <div className="px-6 mb-4 text-[10px] font-black text-on-surface-variant/40 uppercase tracking-[0.2em]">
          Menu
        </div>
        {menuItems.map((item) => (
          <NavItem 
            key={item.path} 
            icon={item.icon} 
            label={item.label} 
            path={item.path}
            active={location.pathname === item.path}
          />
        ))}
      </nav>

      {/* Profile & Logout */}
      <div className="mt-auto border-t border-outline-variant/10 p-6 space-y-4">
        {/* Fix: Profile card now navigates to Settings when clicked */}
        <button
          onClick={() => navigate('/settings')}
          className="w-full flex items-center gap-4 px-4 py-3 bg-surface-container-low rounded-xl border border-outline-variant/5 hover:border-primary/20 transition-all"
        >
          <div className="w-10 h-10 rounded-full bg-primary-container overflow-hidden border border-white flex items-center justify-center text-primary font-bold text-lg">
            T
          </div>
          <div className="text-left">
            <p className="text-sm font-bold text-on-surface">Taiwo Adewale</p>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Premium Plan</p>
          </div>
        </button>
        <button 
          onClick={() => navigate('/')}
          className="w-full flex items-center gap-3 px-6 py-3 text-error font-bold hover:bg-error/5 rounded-xl transition-all"
        >
          <LogOut size={20} />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
