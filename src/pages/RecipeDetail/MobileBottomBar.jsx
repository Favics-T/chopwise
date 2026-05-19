import React from 'react'
import { CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'


export default function MobileBottomBar() {
    const navigate = useNavigate()
  return (
     <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-outline-variant p-6 z-50 shadow-[0_-8px_24px_rgba(0,0,0,0.05)] lg:hidden">
        <div className="max-w-107.5 mx-auto flex items-center justify-between gap-6">
          <button 
            onClick={() => navigate('/usage-confirmation')}
            className="flex-1 bg-primary text-white py-4 px-8 rounded-full font-display text-xl font-bold flex items-center justify-center gap-3 active:scale-95 shadow-lg shadow-primary/20"
          >
            <CheckCircle size={24} />
            I Cooked This
          </button>
        </div>
      </footer>
  )
}
