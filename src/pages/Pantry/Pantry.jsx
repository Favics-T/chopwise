import React from 'react';
import { 
  Bell, 
  Search, 
  Filter, 
  Plus, 
  Utensils 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PantryItem from './PantryItem';


export default function Pantry() {
  const navigate = useNavigate();
  return (
  <div className="min-h-screen bg-background pb-32">
      {/* Top Header */}
      <header className="sticky top-0 w-full z-40 bg-surface-container-low/95 backdrop-blur-sm shadow-sm px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container overflow-hidden border-2 border-white shadow-sm">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAOLovCJmEqhyh-OsH_MBaQ7fdPcUdp7H-pdqgwDUqUwitwhV4VjxskolAda6R3m3079tPrzocQSuEYsUCo9EfagP8l3wp_NVjYeH5WSlsuvoQF6g836WwBDfdPd_0iry6YSXCn6K8MW0kt4EUKE07Rf5OH8I2SnB9u-rMvrzmF7yEmp_5tNxPrHeg94Blz5JqBoMyyqB4zdVoRtQVwa1AJbSGy2P5cWdxw0MsPrdXD-8AZy8YPZDNmJepVNLTesHnnECiKsZ_UAE" 
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
        {/* Statistics Widgets */}
        <section className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-surface-container-high p-5 rounded-2xl flex flex-col justify-between h-32 shadow-sm">
            <span className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">Pantry Items</span>
            <span className="text-[40px] font-display font-bold text-primary leading-tight">42</span>
          </div>
          <div className="bg-secondary-container p-5 rounded-2xl flex flex-col justify-between h-32 shadow-md">
            <span className="text-on-secondary-container text-xs font-bold uppercase tracking-wider">Waste Saved</span>
            <span className="text-[40px] font-display font-bold text-on-secondary-container leading-tight">1.2kg</span>
          </div>
        </section>

        {/* Search Bar */}
        <section className="mb-10 relative">
          <div className="bg-white border-2 border-outline-variant/30 rounded-2xl px-5 py-4 flex items-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.03)] focus-within:border-primary transition-all">
            <Search className="text-outline" size={20} />
            <input 
              type="text" 
              placeholder="Search ingredients..." 
              className="bg-transparent border-none p-0 focus:ring-0 w-full font-sans text-sm font-medium"
            />
            <Filter className="text-outline cursor-pointer hover:text-primary transition-colors" size={20} />
          </div>
        </section>

        {/* Proteins Section */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-display text-2xl font-bold">Proteins</h2>
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">5 items</span>
          </div>
          <PantryItem 
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCJuSuU9oq28RaZJ9rz48QgIi-tiQrxqFg_w1y5liqtXb2EVHfYosSQwwE438RFDJjlTB68HY5nIMiaY2rf-fNggRSD0DQgyAE0GUmoPXK1QVYWqK8wlqA2EbWuKmjSXK7J5t6IS9jRHsMbwHLp2YYXPa9uj_OrOPtPA9qXq4AjW2ccdRqWte-idx-LgbY5kln17rU8HrmGR2CvqHOr1_i_nxW201QRFkZBiteHqj5NyWgPDxd2IzCe3-pjFr6JxwG7YFfw-AvVZow"
            name="Chicken Breast"
            status="Expiring in 2 days"
            amount="500g"
            isExpiringSoon={true}
          />
          <PantryItem 
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBMFH2BDiwpjcpxcXsJ2rJmpX7f2guBCRWk0QzL7zAQF1sMBzcQOSSObIjLmM5jALGGWq_R_iCl_qwvFmanb7U_EoyBPX9rGCyg3OpUuaQzjlcpiIOlWKbo-dBt8Shi5_Kqo-gLoGrgC2fPSNyxN6KVg1zsV4c5u648DvqBHcRDozWHs0K5FpzbM8jOZTpl3t-m4PzHbFerocuZPPkUSHSVtAbj6k5QxGM31HGoKI7uA9ay2zhF9LtOYgRo1TcKM1tXRcxR-RIIiJA"
            name="Farm Eggs"
            status="Expires in 12 days"
            amount="12 pcs"
          />
        </section>

        {/* Grains Section */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-display text-2xl font-bold">Grains</h2>
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">3 items</span>
          </div>
          <PantryItem 
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCuZZHi2QBmMVepX-S7M6GjOPGirW-a_MTw66LyS_Arsw15HHQOvt8B0tR7bDXeEfiHieIu8LKyvut66N7jC8fm-JfnyqwVQTjyt0XQewEAdxEU57VcQv-WIGHVA0ub3ARnIpiFX3wtP2dBdHYj91fxqY6Jx1rMhNZho7D3Fk6mS8uJ-eV86P5gkvz5td5dogh63iMfJqpQpdJKuNNXYey_UU9ff5MfuIzib6kD2PhUGMWJqmNYWGvKif73S5OxzOI5s6Jw5nBuOyM"
            name="Jollof Rice (Raw)"
            status="Expires in 4 months"
            amount="5kg"
          />
        </section>

        {/* Vegetables Highlights Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-4 text-on-surface">
            <h2 className="font-display text-2xl font-bold">Vegetables</h2>
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">8 items</span>
          </div>
          
          <div className="bg-[#E9F3EE] p-6 rounded-2xl border border-primary/10 relative overflow-hidden group">
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="bg-secondary-container text-on-secondary-container text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded inline-block mb-3">
                  Urgent
                </span>
                <h3 className="font-display text-2xl font-bold text-primary mb-2">Spinach Leaves</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Use today for an AI-suggested Efo Riro to avoid waste.
                </p>
              </div>
              <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIu6WlMXRniNgWwi-tleYMYBvYEGrJmzfUGjMwgS5i5S96cx9-e5Cqm9mKna2aXVxRinwVH7YLYqej2XXrWUr8fpg8V3y0cnbesr1k3Xpg7hKSryKNShAvhpGzg52B2zYKKKLCRtRd1laCMdCnoEnuiZhPa6AVDHTqBzDWiVNubwDbIbOW4I6WTC-aX16yeytBuyi2SqjpyS8TH8RzDYLsLpipm2M1_dR09tVR5O-d2ki_Lhzl3LpTu7E_DpcMVx1MX41_4oSEc4Y" 
                  alt="Spinach" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <button 
              onClick={() => navigate('/recipe-detail')}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-container transition-all active:scale-95 shadow-md"
            >
              <Utensils size={18} /> Get AI Recipe
            </button>
          </div>
        </section>
      </main>

      {/* FAB */}
      <button className="fixed bottom-28 right-6 w-16 h-16 bg-secondary-container text-on-secondary-container rounded-full shadow-xl flex items-center justify-center hover:scale-105 active:scale-90 transition-transform z-50">
        <Plus size={32} strokeWidth={3} />
      </button>

    </div>
  );
}
