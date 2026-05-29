
import React, { useState } from 'react';
import {
  Bell,
  Activity,
  History,
  TrendingUp,
  ChevronRight,
  Zap,
  Plus,
} from 'lucide-react';
import MetricCard from './MetricCard';
import HistoryEntry from './HistoryEntry';
import FoodLogSheet from './FoodLogSheet';
import WeeklyDigest from './WeeklyDigest';
import PatternWarning from './PatternWarning';
import { useJournal } from '../../hook/useJournal';
import { journalStats } from '../../data/mockdata';
import Sidebar from '../../components/Sidebar';


export default function Journal() {
  const { entries, visibleEntries, showAll, setShowAll, deleteEntry } = useJournal();
  const [showNotif, setShowNotif] = useState(false);
  const [showFoodLog, setShowFoodLog] = useState(false);
    // "View full report" handler shows a stats summary alert
  const handleViewReport = () => {
    alert(
      ' Weekly Culinary Report\n\n' +
      ' Meals Cooked: 18\n' +
      ' Food Waste Saved: 4.2 kg\n' +
      ' Cooking Streak: 12 Days\n' +
      ' Eco Score: A+\n' +
      ' Macro Balance: 92%'
    );
  };
    //  Bell shows notification toast
  const handleBell = () => {
    setShowNotif(true);
    setTimeout(() => setShowNotif(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#F7FBF7] flex">
      <Sidebar />

      {/*  Notification toast */}
      {showNotif && (
        <div className="fixed top-6 right-6 z-50 bg-on-surface text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
          <Zap size={18} className="text-secondary" />
          <p className="font-bold text-sm">Your 12-day streak is on fire!  Keep it up.</p>
        </div>
      )}

      <div className="flex-1 min-w-0">
        <header className="sticky top-0 w-full z-40 bg-white/80 backdrop-blur-xl lg:bg-transparent lg:backdrop-blur-none flex justify-between items-center px-6 py-4 lg:px-12 lg:py-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg lg:hidden">
              T
            </div>
            <h1 className="font-display text-xl lg:text-3xl font-bold text-primary">ChopWise</h1>
          </div>
          
          <div className="hidden lg:flex items-center gap-6">
              <div className="text-right">
                  <p className="text-xs font-black text-on-surface-variant uppercase tracking-widest">Cooking Streak</p>
                  <p className="text-xl font-display font-bold text-primary">🔥 12 Days</p>
              </div>
              {/* Fix: Bell button shows notification toast */}
              <button
                onClick={handleBell}
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-outline-variant/10 text-primary relative"
              >
                <Bell size={24} />
                <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-secondary rounded-full border-2 border-white" />
              </button>
          </div>
        </header>

        <main className="px-6 lg:px-24 pt-6 lg:pt-4 max-w-7xl mx-auto">
          {/* Performance Header */}
          <div className="mb-10 lg:mb-16">
            <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-2 block">Your Kitchen Journey</span>
            <h2 className="font-display text-[32px] lg:text-[56px] leading-tight font-bold text-on-background tracking-tighter">Culinary Dashboard</h2>
          </div>

          {/* Dashboard Grid */}
          <section className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
{
  journalStats.map((stat, index) => (
    <MetricCard 
      key={index}
      icon={stat.icon}
      label={stat.label}
      value={stat.value}
      colorClass={stat.colorClass}
      progress={stat.progress}
      subtext={stat.subtext}
    />
  ))
}
        
            <div className="col-span-2 lg:col-span-3">
              <div className="bg-primary/5 border border-primary/10 p-8 rounded-4xl flex flex-col lg:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-3xl bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/20">
                          <History size={32} />
                      </div>
                      <div>
                          <h4 className="font-display text-2xl font-bold text-on-surface">Weekly Milestone</h4>
                          <p className="text-on-surface-variant font-medium">You cooked {entries.length + 16} meals this week!</p>
                      </div>
                  </div>
                  {/*  "View full report" shows a stats summary alert */}
                  <button
                    onClick={handleViewReport}
                    className="bg-white text-primary font-bold px-8 py-4 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md transition-all"
                  >
                      View full report
                  </button>
              </div>
            </div>
          </section>

          {/* Feature 3: AI weekly digest — collapsible "This Week" card */}
          <WeeklyDigest />

          {/* History Timeline */}
          <section className="pb-20">
            <div className="flex items-center justify-between mb-12">
                <h3 className="font-display text-3xl font-bold flex items-center gap-4">
                  Culinary History
                </h3>
                {/*  "View Archive" toggles showing all journal entries */}
                <button
                  onClick={() => setShowAll(prev => !prev)}
                  className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
                >
                    {showAll ? 'Show Recent' : 'View Archive'} <ChevronRight size={18} className={`transition-transform ${showAll ? 'rotate-180' : ''}`} />
                </button>
            </div>
            
            {/* Feature 4: excess/pattern warning banner */}
            <PatternWarning />

            {entries.length === 0 ? (
              // Empty state – shown when all entries are deleted or none exist yet
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <TrendingUp size={48} className="text-outline-variant mb-4" />
                <h3 className="font-display text-xl font-bold text-on-surface mb-2">No meals logged yet</h3>
                <p className="text-on-surface-variant text-sm">Cook a recipe and confirm to see your history here.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {/*  render from global state, not hardcoded JSX */}
                {visibleEntries.map((entry, i) => (
                  <HistoryEntry
                    key={entry.id}
                    {...entry}
                    isFirst={i === 0}
                    onDelete={deleteEntry}
                  />
                ))}
              </div>
            )}

            {/* Show toggle button if there are more than 3 entries */}
            {entries.length > 3 && (
              <button
                onClick={() => setShowAll(prev => !prev)}
                className="mt-8 mx-auto block text-primary font-bold text-sm uppercase tracking-widest hover:underline transition-all"
              >
                {showAll ? `Show less` : `Show all ${entries.length} entries`}
              </button>
            )}
          </section>
        </main>
      </div>

      {/* Floating + FAB — log food eaten outside pantry */}
      <button
        onClick={() => setShowFoodLog(true)}
        title="Log a meal"
        className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-secondary text-white rounded-full shadow-2xl shadow-secondary/40 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
      >
        <Plus size={28} />
      </button>

      {showFoodLog && <FoodLogSheet onClose={() => setShowFoodLog(false)} />}
    </div>
  );
}
