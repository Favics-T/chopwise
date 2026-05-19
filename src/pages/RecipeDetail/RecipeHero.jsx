import React from 'react'
import { Clock } from 'lucide-react'

function RecipeHero() {
  return (
     <section className="relative rounded-4xl overflow-hidden aspect-4/3 lg:aspect-4/5 shadow-xl mb-8 group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPj96iH8ZJCKGScyfJTqnVAcF-TpW9tffJGRBD13mJGsHEs__EKPYetV2Ef-j3LTpOlkBNOTLyC0kH8kTfxjTyJ1qXmO0wSTcmhzs9PbR3zzFiLGm-f7gEFuvlcWc8surnvdpeUfCe_n3U_PNkBPgehonDK63ZRjCiC191L4qa7PpwXitMQRJakyrsbNhs96e0rAAYW5_DGy4a6mMkQrdmF1bbsX0rMtcB0XA-JXy4stDhbebnG4Zqy5BJvsKiKk8Bxzwssu2gRYU" 
                alt="Smoky Jollof Rice" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent lg:hidden" />
              
              <div className="absolute bottom-6 left-6 hidden lg:flex bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl items-center gap-2 border border-white/20">
                <Clock className="text-secondary" size={18} />
                <span className="font-display font-bold text-on-surface">65 MIN</span>
              </div>
            </section>
  )
}

export default RecipeHero
