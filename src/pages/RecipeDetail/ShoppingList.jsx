import { useState, useEffect } from 'react';
import { CheckCircle2, ShoppingBag, Share2, Copy, Loader2 } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { callGemini } from '../../utils/gemini';
import { useRecipeDetail } from '../../hook/useRecipeDetail';

const mockPrices = {
  items: [
    { name: 'Long Grain Rice',  price: '₦3,200' },
    { name: 'Tomatoes',         price: '₦800'   },
    { name: 'Vegetable Oil',    price: '₦1,500' },
    { name: 'Scotch Bonnet',    price: '₦400'   },
  ],
  total: '₦5,900',
};

function normName(s) {
  return s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').trim();
}

function isInPantry(ingredientName, pantryItems) {
  const ing = normName(ingredientName);
  return pantryItems.some(p => {
    const pantry = normName(p.name);
    return pantry.includes(ing.split(' ')[0]) || ing.includes(pantry.split(' ')[0]);
  });
}

function findPrice(itemName, priceItems) {
  if (!priceItems) return null;
  const target = normName(itemName).split(' ')[0];
  return priceItems.find(p => normName(p.name).includes(target));
}

export default function ShoppingList({ ingredients }) {
  const { state } = useAppContext();
  const { recipe } = useRecipeDetail();
  const [prices, setPrices] = useState(null);
  const [loadingPrices, setLoadingPrices] = useState(false);
  const [copied, setCopied] = useState(false);

  const pantryItems = state.pantryItems ?? [];
  const preferredStore = state.preferredStores?.[0] ?? 'Local Market';

  const inPantry  = ingredients.filter(i =>  isInPantry(i.name, pantryItems));
  const needToBuy = ingredients.filter(i => !isInPantry(i.name, pantryItems));

  useEffect(() => {
    if (needToBuy.length === 0) return;
    setLoadingPrices(true);
    const names = needToBuy.map(i => i.name).join(', ');
    const prompt = `Estimate the current Nigerian market price in Naira for each of these ingredients: ${names}. Return JSON only, no extra text: { "items": [{ "name": "...", "price": "₦..." }], "total": "₦..." }`;
    callGemini(prompt, mockPrices).then(raw => {
      try {
        const parsed = JSON.parse(raw);
        setPrices(parsed);
      } catch {
        setPrices(mockPrices);
      }
      setLoadingPrices(false);
    });
  }, []); // run once when tab mounts

  const handleShare = async () => {
    const buyLines = needToBuy.map(i => {
      const pe = findPrice(i.name, prices?.items);
      return `• ${i.name} ${i.amount}${pe ? ` — ${pe.price}` : ''}  [${preferredStore}]`;
    }).join('\n');
    const pantryLines = inPantry.map(i => `✓ ${i.name} (in pantry)`).join('\n');
    const totalLine = prices?.total ? `\nEstimated total: ${prices.total}` : '';
    const text = `ChopWise Shopping List — ${recipe.title}\n\nNeed to buy:\n${buyLines}${totalLine}\n\nAlready in pantry:\n${pantryLines}`;

    if (navigator.share) {
      try { await navigator.share({ title: 'Shopping List', text }); } catch (_) {}
    } else {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="pb-8">
      {/* Need to buy */}
      {needToBuy.length > 0 && (
        <div className="mb-8">
          <h4 className="font-display text-xl font-bold text-on-surface mb-4 flex items-center gap-2">
            <ShoppingBag size={20} className="text-secondary" />
            Need to buy
          </h4>
          <ul className="space-y-2">
            {needToBuy.map((item, i) => {
              const pe = findPrice(item.name, prices?.items);
              return (
                <li
                  key={i}
                  className="flex items-center gap-3 py-3 px-4 bg-white rounded-2xl border border-outline-variant/10 shadow-sm"
                >
                  <ShoppingBag size={15} className="text-secondary shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold text-on-surface text-sm">{item.name}</span>
                    <span className="text-xs text-on-surface-variant ml-2">{item.amount}</span>
                  </div>
                  <span className="text-[10px] font-black text-secondary bg-secondary/10 px-2 py-1 rounded-lg whitespace-nowrap shrink-0">
                    {preferredStore}
                  </span>
                  {loadingPrices ? (
                    <div className="w-14 h-4 bg-surface-container animate-pulse rounded-md shrink-0" />
                  ) : pe ? (
                    <span className="text-sm font-bold text-on-surface whitespace-nowrap shrink-0">{pe.price}</span>
                  ) : null}
                </li>
              );
            })}
          </ul>

          {prices?.total && (
            <div className="mt-4 flex justify-end">
              <span className="text-sm font-black text-on-surface bg-primary/10 border border-primary/20 px-4 py-2 rounded-2xl">
                Estimated total: <span className="text-primary">{prices.total}</span>
              </span>
            </div>
          )}
        </div>
      )}

      {/* In pantry */}
      {inPantry.length > 0 && (
        <div className="mb-8">
          <h4 className="font-display text-xl font-bold text-on-surface mb-4 flex items-center gap-2">
            <CheckCircle2 size={20} className="text-primary" />
            In your pantry
          </h4>
          <ul className="space-y-2">
            {inPantry.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 py-3 px-4 bg-primary/5 rounded-2xl border border-primary/10"
              >
                <CheckCircle2 size={15} className="text-primary shrink-0" />
                <span className="font-semibold text-on-surface text-sm">{item.name}</span>
                <span className="text-xs text-on-surface-variant ml-1">{item.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Share / Copy button */}
      <button
        onClick={handleShare}
        className="w-full flex items-center justify-center gap-3 bg-primary text-white font-bold py-4 rounded-2xl hover:opacity-90 transition-opacity"
      >
        {copied
          ? <><Copy size={18} /> Copied to clipboard!</>
          : <><Share2 size={18} /> Share List</>
        }
      </button>

      {/* "Copied!" toast */}
      {copied && (
        <div className="fixed top-20 right-6 z-50 bg-on-surface text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2 text-sm font-bold animate-slide-up">
          <Copy size={16} /> Copied!
        </div>
      )}
    </section>
  );
}
