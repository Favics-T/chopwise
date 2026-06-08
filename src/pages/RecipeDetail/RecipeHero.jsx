import { Clock } from 'lucide-react';

export default function RecipeHero({ image, detailTime }) {
  return (
    <section className="relative rounded-4xl overflow-hidden aspect-4/3 lg:aspect-4/5 shadow-xl mb-8 group">
      <img
        src={image}
        alt="Recipe hero"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent lg:hidden" />

      <div className="absolute bottom-6 left-6 hidden lg:flex bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl items-center gap-2 border border-white/20">
        <Clock className="text-secondary" size={18} />
        <span className="font-display font-bold text-on-surface">{detailTime}</span>
      </div>
    </section>
  );
}
