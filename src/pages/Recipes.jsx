
import React from 'react';
import { 
  Bell, 
  CheckCircle2, 
  ShoppingCart, 
  Lightbulb, 
  ExternalLink,
  SignalHigh,
  Users,
  Award,
  Zap,
  ArrowRight,
  Plus,
  Check,
  X,
  MoreHorizontal
} from 'lucide-react';
import BottomNav from '../components/BottomNav';

import { useNavigate } from 'react-router-dom';

const CookNowCard = ({ image, time, title, level, servings, comment, icon: Icon }) => {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate('/recipe-detail')}
      className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all mb-6 cursor-pointer"
    >
      <div className="h-52 w-full relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
          {time}
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-display text-xl font-bold text-on-surface">{title}</h4>
          <div className="text-secondary">
            <Icon size={20} />
          </div>
        </div>
        <div className="flex gap-4 mb-4">
          <span className="flex items-center gap-1.5 text-on-surface-variant text-xs font-semibold uppercase tracking-wider">
            <SignalHigh size={14} className="text-primary" /> {level}
          </span>
          <span className="flex items-center gap-1.5 text-on-surface-variant text-xs font-semibold uppercase tracking-wider">
            <Users size={14} className="text-primary" /> {servings} Servings
          </span>
        </div>
        <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 italic">
          <p className="text-sm text-on-surface-variant leading-relaxed">"{comment}"</p>
        </div>
      </div>
    </div>
  );
};

export default function Recipes() {
  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Top Bar */}
      <header className="sticky top-0 w-full z-40 bg-surface/80 backdrop-blur-md flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container overflow-hidden border-2 border-white shadow-sm">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuADIIP1bDM72lloYp4Wf9-pORLvjNJzP3AiKda98pVbGJWQdRalENBcifpT1bPAEZM1dUL9d2_1lnG9enqe812VLp2ULgs9dUewgLT7alJBLOvJTPrEM3gmJW0F_UYkej0diMXkOqBaVxoMRnvFt88339sbQLjcoWsrBKbvc00mI1nACZmaLK9CCXIvtVxZoLhfLjZV3aMfEqyvB-lbSzCMlFTFL2rpdnrU4xQ-xmxNLJuGDsEohgvqKlrSadgcgQj4QhpIBq83lFg" 
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

      <main className="px-6 pt-4">
        {/* Header Intro */}
        <div className="mb-10">
          <span className="text-secondary font-bold text-xs uppercase tracking-[0.2em] mb-2 block">Your Personal Chef</span>
          <h2 className="font-display text-[40px] leading-tight font-bold text-on-background mb-3 tracking-tighter">Smart Suggestions</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Based on your pantry and preferences, here’s what’s fresh and ready to cook today.
          </p>
        </div>

        {/* Cook Now Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-xl bg-primary-container text-white shadow-sm">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold">Cook Now</h3>
            <span className="bg-[#E4F2E6] text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">100% Match</span>
          </div>

          <CookNowCard 
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDHg-7rgjZizG7qeeNwFy_cXCI8EkO72RxR4uZFcdks_lDTI03a8dpp2wFsTsoenHAfH-PjGG3uQ9XGzShwMV19bDY0K3K8jQu-pdlsslFfseEYNhFtpVcAIG02kroEIrYACJHluMUvblCFKxqaUC-hKFbIn03xnSK-fxHUZ3U-kJWR3dmnlZ5yetFdTcpQAC5l_ayHqw9g0m3TNGL3fwgyhfQ-nS4skF_s-ZiQD-3EtArjIEw0bdOlt4SUpMtZiZte34wicqWhwgw"
            time="45m"
            title="Smoky Jollof Rice"
            level="Medium"
            servings="4"
            comment="Perfect use for your expiring bell peppers and scotch bonnets."
            icon={Award}
          />

          <CookNowCard 
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAg9jrIt_cY4LaVbSgHAXqTcxmo-JptXrnqXJTjdbWBo3Shu_h_VeNEIzBFfRCHlCdsV9_jhfkys10-JXlUWpBfBoGlq2In8KuKH9g8nyu_ej637zarITw80Qt67oJtr6WDh0gJJl392k6mhu55BdFVbokPQmnSrYFoOs2CGYG-is9k_X7yPVaa1QFSA3K9sjlvo1SIjHx909Gzj2D6irNEaUFilkR1SIFheum297ZMTmdp0kVv6RJmaWvOpdgEQzp-zVH6zyUZgSk"
            time="15m"
            title="Gisdodo Breakfast"
            level="Easy"
            servings="2"
            comment="Quick way to use those overripe plantains on your counter."
            icon={Zap}
          />
        </section>

        {/* Almost There Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-xl bg-secondary-container text-on-secondary-container shadow-sm">
              <ShoppingCart size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold">Almost There</h3>
            <span className="bg-secondary-container/20 text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">1-2 Items Needed</span>
          </div>

          <div className="space-y-6">
            {/* Egusi Soup Card */}
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30">
              <div className="h-64 relative">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj2sVyEmX0R89e0Fipek9qbH5N7Z13BpsNY5MfCv_hd1o6qZvSFoO3ofrcwd5p3ZQl24oOW2igW64V4OJ6oqcF_hJ7iaXOYt3DEVUdjiNczgsYotE2a8gwwsCWTQDvjLLWZUxoU0K562rSg3_4gNXtmPpJGKDqImwAxp9UJL2JuSCveQeN7xTk2vP0YCUgPXG8V23nAAz9FyXNsKq1UlnTS37_uKNxgJG7P922chywR0vKuAfAngTfnmSoLwf3WwKLhrz4siRVknA" 
                  alt="Egusi Soup" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-display text-2xl font-bold text-on-surface">Egusi Soup with Spinach</h4>
                  <div className="bg-error-container text-error px-3 py-1.5 rounded-full text-[10px] font-bold uppercase whitespace-nowrap">
                    -1 Item
                  </div>
                </div>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                  A savory delight made with ground melon seeds and hearty greens.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="bg-surface-container-high px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 text-primary">
                    <Check size={14} strokeWidth={3} /> EGUSI SEEDS
                  </span>
                  <span className="bg-surface-container-high px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 text-primary">
                    <Check size={14} strokeWidth={3} /> PALM OIL
                  </span>
                  <span className="bg-error-container px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 text-error">
                    <X size={14} strokeWidth={3} /> FRESH SPINACH
                  </span>
                </div>
                <button className="w-full bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary-container transition-all shadow-md">
                  Add Missing to Cart <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Suya Card */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm">
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaQ9s0naY5bo_PtGN0c3QNBQ4-JI85d_pGUhdVJFqkAUHpx4d1zzBIh9_U2t054Pff4rdGE_hT3yHInKkbbz3s29H9HCwHXtatngHhOD7mQ5OkwyeKyfJZIdVs-L7Vf_Ys-PQbh7jcGmXScF7esxAfY-pVtrPP8VQn-BlaOF55IzdX4Rs2n3EhzWgl3m1gyYzYnve_yEW4_-kOkCBHPBrygLPB-bxGG6KjfbdQhNHnlN2MJ4BgWgbrafxLWTRdZ-fzVfZmYTYNjCc" 
                  alt="Suya" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-display text-xl font-bold mb-1 text-on-surface">Beef Suya Platter</h4>
              <p className="text-sm text-on-surface-variant mb-6">Authentic spicy skewers.</p>
              <div className="flex justify-between items-center">
                <span className="text-secondary text-sm font-bold">Missing: Suya Spice</span>
                <button className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-sm">
                  <Plus size={24} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Inspiration Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-slate-200 text-slate-700 shadow-sm">
                <Lightbulb size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold">Inspiration</h3>
            </div>
            <button className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
              Explore All <ExternalLink size={14} />
            </button>
          </div>

          <div className="flex gap-6 overflow-x-auto no-scrollbar -mx-6 px-6">
            {/* Horizontal Card */}
            <div className="min-w-75 bg-white rounded-2xl p-3 shadow-sm border border-outline-variant/30">
              <div className="h-48 rounded-xl overflow-hidden mb-4 relative">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbnolWAJz1aMD6pezs_VVxXu6LqZeQes54OccKATVcV5wOtFl5AcfyPVVBeg80bcWnZyX-6a_NEM6VtxPWwvZUmtW-CU_P6cnw6TdQG_ATqNf2CEt-TYntv9gqHqmJV9wUTYleYOnfH0Q4rrSWv6HIwNbjTjxgd90-oDx7olQ40diltHITYhJ_eAkq_o8Fur_kEejabqYOXK8BGOJxOyixNQsn140g8Z5Wdg2_HAIfDz9pdl4-OhWVI6QOHZjzGQzZXowjR0Efcdk" 
                  alt="Bowl" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm">
                  Trending
                </div>
              </div>
              <div className="px-2 pb-2">
                <h5 className="font-display text-lg font-bold mb-3 text-on-surface">Garden Harvest Bowl</h5>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant text-xs font-bold uppercase tracking-wider items-center gap-1 flex">
                    300 kcal
                  </span>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <div className="w-2 h-2 rounded-full bg-surface-container-highest"></div>
                    <MoreHorizontal size={16} className="text-on-surface-variant ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mock Extra Card */}
            <div className="min-w-75 bg-white rounded-2xl p-3 shadow-sm border border-outline-variant/30 opacity-60">
               <div className="h-48 rounded-xl bg-surface-container-low" />
               <div className="h-4 w-1/2 bg-surface-container-low mt-4 rounded" />
               <div className="h-4 w-1/3 bg-surface-container-low mt-2 rounded" />
            </div>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
