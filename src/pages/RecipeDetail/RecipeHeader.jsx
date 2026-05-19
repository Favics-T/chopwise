import React from 'react'
import { ArrowLeft, Heart, Share2, Check, Copy } from 'lucide-react';
import { useRecipeDetail } from '../../hook/useRecipeDetail';

function RecipeHeader() {
    const {navigate, isFavourite, handleToggleFavourite, handleShare, copied} = useRecipeDetail();
  return (
  <header className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md flex justify-between items-center px-6 py-4 lg:px-12 lg:py-6 lg:bg-transparent">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors lg:bg-white lg:shadow-sm"
          >
            <ArrowLeft className="text-primary" size={24} />
          </button>
          <h1 className="font-display text-xl font-bold text-primary lg:hidden">ChopWise</h1>
        </div>
        <div className="flex items-center gap-2">
          
          <button
            onClick={handleToggleFavourite}
            title={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all lg:bg-white lg:shadow-sm ${
              isFavourite ? 'text-error bg-error/10' : 'text-on-surface-variant hover:bg-surface-container'
            }`}
          >
            <Heart size={24} fill={isFavourite ? 'currentColor' : 'none'} />
          </button>
          
          <button
            onClick={handleShare}
            title={copied ? 'Link copied!' : 'Share recipe'}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all lg:shadow-sm ${
              copied ? 'bg-primary text-white' : 'hover:bg-surface-container text-on-surface-variant lg:bg-white'
            }`}
          >
            {copied ? <Check size={20} /> : <Share2 size={24} />}
          </button>
        </div>
      </header>
  )
}

export default RecipeHeader
