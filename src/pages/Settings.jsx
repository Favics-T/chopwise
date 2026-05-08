import React from 'react';
import { 
  User, 
  Target, 
  HeartPulse, 
  Bell, 
  Moon, 
  Ruler, 
  HelpCircle, 
  ShieldCheck, 
  LogOut,
  ChevronRight
} from 'lucide-react';
import BottomNav from '../components/BottomNav';

const SettingItem = ({ icon: Icon, label, value, colorClass = "text-on-surface-variant" }) => (
  <button className="w-full flex items-center justify-between p-4 bg-white hover:bg-surface-container/50 transition-colors">
    <div className="flex items-center gap-4">
      <div className={`p-2 rounded-xl bg-surface-container-low ${colorClass}`}>
        <Icon size={20} />
      </div>
      <span className="font-semibold text-on-surface text-sm">{label}</span>
    </div>
    <div className="flex items-center gap-2">
      {value && <span className="text-xs font-bold text-on-surface-variant/60">{value}</span>}
      <ChevronRight size={16} className="text-outline-variant" />
    </div>
  </button>
);

const SectionHeader = ({ title }) => (
  <h3 className="px-6 mt-8 mb-3 text-[10px] font-black text-on-surface-variant uppercase tracking-[0.25em]">
    {title}
  </h3>
);

export default function Settings() {
  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header Profile Section */}
      <div className="bg-primary pt-16 pb-12 px-8 rounded-b-[40px] shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none" />
        <div className="flex items-center gap-6 relative z-10">
          <div className="w-20 h-20 rounded-full border-4 border-white/20 p-1 bg-white/10 backdrop-blur-md">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuADIIP1bDM72lloYp4Wf9-pORLvjNJzP3AiKda98pVbGJWQdRalENBcifpT1bPAEZM1dUL9d2_1lnG9enqe812VLp2ULgs9dUewgLT7alJBLOvJTPrEM3gmJW0F_UYkej0diMXkOqBaVxoMRnvFt88339sbQLjcoWsrBKbvc00mI1nACZmaLK9CCXIvtVxZoLhfLjZV3aMfEqyvB-lbSzCMlFTFL2rpdnrU4xQ-xmxNLJuGDsEohgvqKlrSadgcgQj4QhpIBq83lFg" 
              alt="Taiwo" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-1">Hi, Taiwo</h2>
            <p className="text-on-primary-container text-xs font-bold uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded-md inline-block">
              Premium Chef
            </p>
          </div>
        </div>
      </div>

      <main className="mt-4">
        {/* Profile Section */}
        <SectionHeader title="Profile" />
        <div className="divide-y divide-outline-variant/20 rounded-t-3xl overflow-hidden bg-white mx-4 shadow-sm border border-outline-variant/10">
          <SettingItem icon={User} label="Account Information" />
          <SettingItem icon={Target} label="Health Goals" value="Muscle Gain" />
          <SettingItem icon={HeartPulse} label="Dietary Restrictions" value="Ulcer-safe" />
        </div>

        {/* App Settings Section */}
        <SectionHeader title="App Settings" />
        <div className="divide-y divide-outline-variant/20 overflow-hidden bg-white mx-4 shadow-sm border border-outline-variant/10 rounded-2xl">
          <SettingItem icon={Bell} label="Notifications" value="On" />
          <SettingItem icon={Moon} label="Dark Mode" value="System" />
          <SettingItem icon={Ruler} label="Measurement Units" value="Metric (kg/g)" />
        </div>

        {/* Support Section */}
        <SectionHeader title="Support" />
        <div className="divide-y divide-outline-variant/20 overflow-hidden bg-white mx-4 shadow-sm border border-outline-variant/10 rounded-2xl">
          <SettingItem icon={HelpCircle} label="Help Center" />
          <SettingItem icon={ShieldCheck} label="Privacy Policy" />
        </div>

        {/* Footer Actions */}
        <div className="px-6 mt-12 mb-10">
          <button className="w-full bg-surface-container-high text-error font-bold py-5 rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform">
            <LogOut size={22} />
            Logout Account
          </button>
          
          <div className="mt-8 text-center">
            <span className="text-[10px] font-black text-outline uppercase tracking-[0.3em]">ChopWise v1.0.4</span>
            <p className="text-[10px] text-outline mt-2 italic">Crafted with love for West African home cooks.</p>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
