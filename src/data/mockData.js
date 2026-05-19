import { Activity, Trash2,Leaf,Dumbbell,Flame,Utensils,
  Sprout, Droplets,TrendingUp,Zap,Heart,Wheat,Weight
 } from "lucide-react";
import { progress } from "motion";

export const pantryItems= [
    { id: 1, name: 'Red Bell Peppers', qty: 3, unit: 'Large', status: 'Expiring Soon', expiry: 'Oct 26', image: 'https://images.unsplash.com/photo-1592924357228-91a4daaafd7c?w=100&h=100&fit=crop', isExpiringSoon: true },
    { id: 2, name: 'Long-grain Rice', qty: 2.5, unit: 'kg', status: 'Stable', expiry: 'Dec 2024', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=100&h=100&fit=crop' },
    { id: 3, name: 'Vegetable Oil', qty: 1.2, unit: 'Liters', status: 'Stable', expiry: 'Mar 2025', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=100&h=100&fit=crop' },
    { id: 4, name: 'Scotch Bonnet', qty: 5, unit: 'Pieces', status: 'Expiring Soon', expiry: 'Oct 25', image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=100&h=100&fit=crop', isExpiringSoon: true },
    { id: 5, name: 'Onions', qty: 8, unit: 'Large', status: 'Stable', expiry: 'Nov 12', image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=100&h=100&fit=crop' },
  ];

  export const  journalEntries= [
    { id: 1, date: 'Today, Oct 24', title: 'Smoky Party Jollof', saved: '450g', time: '45 mins', tag: 'High Protein',
      image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=800',
      description: 'Used surplus bell peppers and stock from Tuesday\'s meal prep. Perfectly smoky flavor.' },
    { id: 2, date: 'Yesterday, Oct 23', title: 'Harvest Grain Bowl', saved: '120g', time: '15 mins', tag: 'Fiber Rich',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
      description: 'Successfully utilized wilting kale and leftover quinoa from Monday\'s dinner.' },
  ];

  export const journalStats =[
    {icon: Trash2, label: 'Food Waste Saved', value: '4.2kg', colorClass: 'text-secondary', progress: 75, subtext: 'Top 5% in your area' },
    {icon: Activity, label: 'Macro Balance', value: '92%', colorClass: 'text-primary', progress: 92, subtext: 'Balanced nutrition' },
    {icon: Leaf, label: 'Eco Score', value: 'A+', colorClass: 'text-secondary', progress: 100, subtext: 'Sustainable choices' },
  ];

  // GOAL META contains all the dynamic content for the GoalDetail page, keyed by goal name
  export const GOAL_META = {
  'Muscle Gain': {
    heroImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200',
    accent: '#16a34a',
    tagline: 'Build strength with every bite.',
    badge: 'High Protein',
    stats: [
      { label: 'Protein Target', value: '150g', icon: Dumbbell },
      { label: 'Daily Calories', value: '2800', icon: Flame },
      { label: 'Meals / Day',   value: '5', icon: Utensils },
    ],
    tip: 'Pair egusi soup with oatmeal swallow for a perfect muscle-building combo.',
    color: '#dcfce7',
  },
  'Healthier Eating': {
    heroImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200',
    accent: '#15803d',
    tagline: 'Nourish your body, naturally.',
    badge: 'Balanced',
    stats: [
      { label: 'Veggies / Day', value: '5+', icon: Sprout },
      { label: 'Daily Calories', value: '2000', icon: Flame },
      { label: 'Hydration',     value: '3L', icon: Droplets },
    ],
    tip: "Add ugu leaves to your stews — one of West Africa's most nutrient-dense greens.",
    color: '#f0fdf4',
  },
  'Weight Loss': {
    heroImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200',
    accent: '#166534',
    tagline: 'Lighter meals, lasting results.',
    badge: 'Low Calorie',
    stats: [
      { label: 'Calorie Limit', value: '1500', icon: Flame },
      { label: 'Deficit / Day', value: '500', icon: TrendingUp },
      { label: 'Meals / Day',   value: '4', icon: Utensils },
    ],
    tip: 'Okra soup with grilled tilapia is only ~320 calories and incredibly filling.',
    color: '#fafffe',
  },
  'Maintenance': {
    heroImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200',
    accent: '#16a34a',
    tagline: 'Steady habits, lifelong vitality.',
    badge: 'Sustainable',
    stats: [
      { label: 'Daily Calories', value: '2200', icon: Flame },
      { label: 'Macro Balance', value: '40/30/30', icon: Zap },
      { label: 'Meals / Day',   value: '3', icon: Utensils },
    ],
    tip: 'Rotate between jollof, egusi, and bean dishes to hit all your macros effortlessly.',
    color: '#f7fdf7',
  },
};

export const RESTRICTION_LABELS = {
  'Ulcer-safe':  { icon: Heart,    color: '#fde68a', text: 'Stomach-friendly dishes only.' },
  'Low Sugar':   { icon: Droplets, color: '#bfdbfe', text: 'Prioritising low-GI carbs.' },
  'Gluten-free': { icon: Wheat,    color: '#d9f99d', text: 'Ancient grains: fonio & millet.' },
};

export  const goals = [
    { id: 'Muscle Gain',      icon: Dumbbell, title: 'Muscle Gain',      description: 'Protein-rich recipes to fuel your strength training.', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800' },
    { id: 'Healthier Eating', icon: Sprout,   title: 'Healthier Eating', description: 'Balanced meals focusing on whole foods.',                image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800' },
    { id: 'Weight Loss',      icon: Weight,   title: 'Weight Loss',      description: 'Calorie-conscious Nigerian options.',                    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800' },
    { id: 'Maintenance',      icon: Utensils, title: 'Maintenance',      description: 'Sustainable habits for long-term vitality.',             image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800' },
  ];

  export  const restrictions = [
    { id: 'Ulcer-safe',  icon: Activity, title: 'Ulcer-safe',  description: 'Low acid and soothing West African recipes.',   image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800' },
    { id: 'Low Sugar',   icon: Droplets, title: 'Low Sugar',   description: 'Focus on low-GI complex carbohydrates.',         image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=800' },
    { id: 'Gluten-free', icon: Wheat,    title: 'Gluten-free', description: 'Traditional grains like fonio and millet.',      image: 'https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?auto=format&fit=crop&q=80&w=800' },
  ];

  export const ingredients = {
     
    FRESH: [
      { name: "Tomatoes", image: "https://images.unsplash.com/photo-1546470427-e26264be0b0d?w=300&h=300&fit=crop&q=80" },
      { name: "Red Peppers", image: "https://images.unsplash.com/photo-1592924357228-91a4daaafd7c?w=300&h=300&fit=crop&q=80" },
      { name: "Eggplant", image: "https://images.unsplash.com/photo-1473001271688-dd2b35e0fd37?w=300&h=300&fit=crop&q=80" },
      { name: "Spinach", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=300&fit=crop&q=80" },
      { name: "Plantains", image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=300&h=300&fit=crop&q=80" },
      { name: "Ginger", image: "https://images.unsplash.com/photo-1573401706955-47bb9a6d6b89?w=300&h=300&fit=crop&q=80" },
      { name: "Onions", image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=300&h=300&fit=crop&q=80" },
      { name: "Okra", image: "https://images.unsplash.com/photo-1582515073490-39981397c445?w=300&h=300&fit=crop&q=80" },
    ],
    GRAINS: [
      { name: "Long Grain Rice", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop&q=80" },
      { name: "Egusi Seeds", image: "https://images.unsplash.com/photo-1612548403247-aa2873e9422d?w=300&h=300&fit=crop&q=80" },
      { name: "Oats", image: "https://images.unsplash.com/photo-1614961908502-e90d5e5d0baa?w=300&h=300&fit=crop&q=80" },
      { name: "Semolina", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop&q=80" },
      { name: "Garri", image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=300&h=300&fit=crop&q=80" },
    ],
    SPICES: [
      { name: "Curry Powder", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=300&fit=crop&q=80" },
      { name: "Thyme", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop&q=80" },
      { name: "Black Pepper", image: "https://images.unsplash.com/photo-1614977645540-7abd88ba8e14?w=300&h=300&fit=crop&q=80" },
      { name: "Coriander", image: "https://images.unsplash.com/photo-1621264448270-9ef00e88a935?w=300&h=300&fit=crop&q=80" },
    ],
    OTHERS: [
      { name: "Vegetable Oil", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=300&fit=crop&q=80" },
      { name: "Bouillon Cubes", image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=300&h=300&fit=crop&q=80" },
      { name: "Salt", image: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=300&h=300&fit=crop&q=80" },
      { name: "Sugar", image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=300&h=300&fit=crop&q=80" },
    ]
  
  };
