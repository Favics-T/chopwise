
import React from 'react';
import { 
  Bell, 
  Trash2, 
  Activity, 
  History, 
  TrendingUp, 
  Leaf 
} from 'lucide-react';
import BottomNav from '../components/BottomNav'


const MetricCard = ({ icon: Icon, label, value, subtext, colorClass, progress }) => (
  <div className="bg-surface-container-low p-5 rounded-2xl flex flex-col justify-between h-36 shadow-sm border border-outline-variant/10">
    <div>
      <div className={`flex items-center gap-2 mb-2 ${colorClass}`}>
        <Icon size={18} />
        <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
      </div>
      <p className="text-3xl font-display font-bold text-on-surface">
        {value}
      </p>
    </div>
    <div className="space-y-2">
      {subtext && <p className={`text-[10px] font-bold ${colorClass}`}>{subtext}</p>}
      {progress && (
        <div className="w-full bg-outline-variant/30 rounded-full h-1.5 overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-1000 ${colorClass.replace('text-', 'bg-')}`} 
            style={{ width: `${progress}%` }} 
          />
        </div>
      )}
    </div>
  </div>
);

const HistoryEntry = ({ date, image, title, saved, description, time, tag, isFirst }) => (
  <div className="relative pl-10 mb-10">
    {/* Timeline Line & Dot */}
    <div className={`absolute left-[11px] top-0 bottom-[-40px] w-0.5 ${isFirst ? 'bg-gradient-to-b from-primary to-outline-variant' : 'bg-outline-variant'}`} />
    <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-background z-10 flex items-center justify-center ${isFirst ? 'bg-primary' : 'bg-outline-variant'}`} />
    
    <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest block mb-3">
      {date}
    </span>
    
    <div className="bg-white rounded-2xl shadow-sm border border-outline-variant/20 overflow-hidden hover:shadow-md transition-shadow group">
      <div className="h-44 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h4 className="font-display text-lg font-bold text-on-surface">{title}</h4>
          <span className="bg-secondary-container/20 text-on-secondary-container px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shrink-0">
            <Leaf size={12} fill="currentColor" /> {saved} saved
          </span>
        </div>
        <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex gap-2">
          <span className="bg-surface-container px-3 py-1.5 rounded-lg text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
            {time}
          </span>
          <span className="bg-surface-container px-3 py-1.5 rounded-lg text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
            {tag}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default function Journal() {
  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Top App Bar */}
      <header className="sticky top-0 w-full z-40 bg-surface/80 backdrop-blur-md flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container overflow-hidden border-2 border-white shadow-sm">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMBGsOaFU-4ZcTnt-2SYqB-KD1Z7eh7B_IjO53P7qylLRpI9gZ663BXlEzMF-SmUc6BU2G-1i5NKgIDffymzcE63wE7Uo_m-w1himsyluq5soceMXAdBp2Qh4e7M_uCn6CS1xwaJJBp6iRnPjyBv1H7UTSRSfkWXfIHiJc0MYmVUkKo3lf5poau9T7nmK3k1-37IiRg6PI3lM6rAa1V8Trx37cO3iXo4BalJ8bLyxOikEUtgAgwn3bFL7L69Z-qJmewgJBVfkWf24" 
              alt="User" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-display text-xl font-bold text-primary">ChopWise</h1>
        </div>
        <button className="p-2.5 rounded-full hover:bg-surface-container transition-colors text-primary relative">
          <Bell size={24} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full border-2 border-white" />
        </button>
      </header>

      <main className="px-6 pt-6">
        {/* Performance Header */}
        <div className="mb-8">
          <span className="text-primary font-black text-xs uppercase tracking-[0.2em] mb-2 block">Weekly Insights</span>
          <h2 className="font-display text-[40px] leading-tight font-bold text-on-background tracking-tighter">Kitchen Performance</h2>
        </div>

        {/* Dashboard Grid */}
        <section className="grid grid-cols-2 gap-4 mb-12">
          <MetricCard 
            icon={Trash2}
            label="Waste Saved"
            value="4.2kg"
            colorClass="text-secondary"
            progress={75}
          />
          <MetricCard 
            icon={Activity}
            label="Macro Balance"
            value="92%"
            colorClass="text-primary"
            progress={92}
          />
          <div className="col-span-2">
            <MetricCard 
              icon={History}
              label="Meals Cooked"
              value="18"
              subtext="+3 from last week"
              colorClass="text-primary"
            />
          </div>
        </section>

        {/* History Timeline */}
        <section>
          <h3 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
            <TrendingUp size={24} className="text-primary" /> Culinary History
          </h3>
          
          <div className="ml-1">
            <HistoryEntry 
              date="Today, Oct 24"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuAUaIFUXkxRvdtKi8bb4d4OmHod05g1Ea3QYJiPnoALpAYd1imWlJAG_A2qzpcUJVfiYWRtK0f-rbLCVEwItH36Qco6NMb8V7EGb-FzW-R-xgz0xXaxTJxo26lYuArqNkC7zQa9Zg1rEQumhIzmAZv-UYfuJn2bRuMqYOvhuMgEZeHok46xIk26qFCpVTjc57rttmLmwl4AkI0Su7grquTvrxAxEcK7CKlXtLuy8CUmKaPjq00gMVqWcYnT35faSNE_7Bk-IfUMUXU"
              title="Smoky Party Jollof"
              saved="450g"
              description="Used surplus bell peppers and stock from Tuesday's meal prep."
              time="45 mins"
              tag="High Protein"
              isFirst={true}
            />
            
            <HistoryEntry 
              date="Yesterday, Oct 23"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuDGELcZbvl6_Q2bN5J4m85nHoM8McJ_rXAwSkuCMyY4o_ELQnQGe6pixSbDL_im3dzW1libS5SFKHu0XVPwEmsO_X4lSpnT1_smc9u6KwAWHqe85PKDvYM2z8al-OyE_ijJS9zVZMOcgGRWry_UmtnPl9G7f2PZjm6WPj0OTR_pgDskm_CWU_bPQO7eecqDMY7o6kwW34v3eF5nun7NH-tqykpctSHdjRB5Ij5CmDmd8MDAGTWUDwwhKcnHThGZ35ocegFcEfmOZgM"
              title="Harvest Grain Bowl"
              saved="120g"
              description="Successfully utilized wilting kale and leftover quinoa."
              time="15 mins"
              tag="Fiber Rich"
            />
            
            <HistoryEntry 
              date="Monday, Oct 21"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuA58ngFJUsVQKqtI3u8HVbMiEeeCVe7Dq4pnBNCNDAbqa1VrSXxKIVf3mUHr_Z8IMWaOxeqFSubtc5M0MBZHOhaRwdXrsVCaikWN_Ck8fxonUcCLumNwxYN2cKQe3o5SnzVr0S8wf890ShOQ30EKaSDNDebN3xSuJZZf5EuXNn3uSsAM5ig6dLp7r4YbrT2lk0cc-HMTCBIKPH-5Ez-Jz_Yze1s8PSkfgxBffzUtN4nHRE5sHjZMCOdcXOrNUozV1QBIjbV_nVmDSA"
              title="Spiced Tomato Stew"
              saved="800g"
              description="Large batch prep using tomatoes nearing expiration. Stored for 3 future meals."
              time="1.5 hours"
              tag="Batch Cook"
            />
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
