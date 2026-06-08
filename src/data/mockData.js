import { Activity, Trash2,Leaf,Dumbbell,Flame,Utensils,
  Sprout, Droplets,TrendingUp,Zap,Heart,Wheat,Weight
 } from "lucide-react";

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

 export const MOCK_DETECTED = [
  { id: 1, name: '12 Farm Eggs', status: 'Detected', type: 'Protein' },
  { id: 2, name: '1kg Basmati Rice', status: 'Waste Risk', type: 'Grains' },
  { id: 3, name: 'Fresh Spinach', status: 'Detected', type: 'Vegetables' },
  { id: 4, name: '500ml Olive Oil', status: 'Detected', type: 'Oil' },
  { id: 5, name: 'Red Onions', status: 'Waste Risk', type: 'Vegetables' },
];

export const ingredientsList = [


    { name: 'Long-grain Parboiled Rice', amount: '3 Cups' },
    { name: 'Red Bell Peppers (Tatashe)', amount: '3 Large' },
    { name: 'Plum Tomatoes', amount: '5 Medium' },
    { name: 'Scotch Bonnet (Atarodo)', amount: '2-3 Small' },
    { name: 'Chicken or Beef Stock', amount: '4 Cups' },
    { name: 'Vegetable Oil', amount: '1/2 Cup' },
    { name: 'Tomato Paste', amount: '150g' }
  ];

  export   const steps = [
    {
      title: 'The Base Blend',
      description: 'Blend the bell peppers, tomatoes, onions, and scotch bonnets until smooth. Pour into a pot and boil down until the water evaporates and you\'re left with a thick paste.'
    },
    {
      title: 'Fry the Paste',
      description: 'Heat oil in a large pot. Add sliced onions and fry until translucent. Stir in the tomato paste and fry for 5 minutes. Add your boiled pepper mix and fry until the oil starts to separate from the sauce.'
    },
    {
      title: 'Seasoning',
      description: 'Add curry powder, thyme, bay leaves, and bouillon cubes. Pour in the stock. Season with salt and pepper to taste. The liquid should be slightly saltier than you want the rice to be.'
    },
    {
      title: 'The Rice Steam',
      description: 'Add the washed rice. The liquid level should be just above the rice. Cover tightly with foil then the pot lid. Cook on very low heat for 30 minutes until the rice is tender and has absorbed all the liquid.'
    },
    {
      title: 'The Finish',
      description: 'Turn up the heat for the last 2-3 minutes to get that smoky \'bottom burn\' aroma. Stir in butter and fresh onion rings. Fluff with a fork and serve hot.'
    }
  ];

export const RECIPE_DETAILS = {
  'Smoky Party Jollof Rice': {
    description: "The legendary Nigerian one-pot classic, perfected with that signature wood-fire smoke flavour. A centrepiece of every celebration.",
    badge: 'TRADITIONAL',
    rating: 4,
    reviews: 120,
    detailTime: '65 MIN',
    nutrition: { protein: '18g', energy: '540 kcal', carbs: '78g', fat: '12g' },
    tip: "Don't let the bottom burn too much! A little 'bun-bun' is traditional and adds flavour, but keep it controlled by using foil under the lid to trap steam.",
    ingredients: [
      { name: 'Long-grain Parboiled Rice', amount: '3 Cups' },
      { name: 'Red Bell Peppers (Tatashe)', amount: '3 Large' },
      { name: 'Plum Tomatoes', amount: '5 Medium' },
      { name: 'Scotch Bonnet (Atarodo)', amount: '2–3 Small' },
      { name: 'Chicken or Beef Stock', amount: '4 Cups' },
      { name: 'Vegetable Oil', amount: '½ Cup' },
      { name: 'Tomato Paste', amount: '150g' },
    ],
    steps: [
      { title: 'The Base Blend', description: "Blend the bell peppers, tomatoes, onions, and scotch bonnets until smooth. Boil down until the water evaporates and you're left with a thick paste." },
      { title: 'Fry the Paste', description: "Heat oil in a large pot. Fry sliced onions until translucent. Add tomato paste and fry for 5 minutes. Add the pepper blend and fry until oil separates from the sauce." },
      { title: 'Seasoning', description: "Add curry powder, thyme, bay leaves, and bouillon cubes. Pour in the stock. Season with salt — the liquid should be slightly saltier than you want the rice to be." },
      { title: 'The Rice Steam', description: "Add washed rice so the liquid is just above the rice. Cover tightly with foil then the pot lid. Cook on very low heat for 30 minutes until tender." },
      { title: 'The Finish', description: "Turn up the heat for the last 2–3 minutes to get that smoky 'bottom burn' aroma. Stir in butter and fresh onion rings. Fluff and serve hot." },
    ],
  },

  'Egusi Soup with Spinach': {
    description: "A rich, earthy West African classic packed with ground melon seeds and vibrant spinach. High in protein and deeply satisfying — perfect for meal prep.",
    badge: 'HIGH PROTEIN',
    rating: 5,
    reviews: 89,
    detailTime: '75 MIN',
    nutrition: { protein: '28g', energy: '480 kcal', carbs: '12g', fat: '32g' },
    tip: "Fry the ground egusi in palm oil until it changes colour and smells nutty before adding any liquid — this is the secret to a rich, non-bitter soup.",
    ingredients: [
      { name: 'Ground Egusi Seeds', amount: '2 Cups' },
      { name: 'Fresh Spinach (Efo)', amount: '300g' },
      { name: 'Palm Oil', amount: '½ Cup' },
      { name: 'Assorted Beef & Tripe', amount: '500g' },
      { name: 'Ground Crayfish', amount: '3 tbsp' },
      { name: 'Onions', amount: '1 Large' },
      { name: 'Scotch Bonnet', amount: '2 Pieces' },
      { name: 'Stock Cubes', amount: '2 Cubes' },
    ],
    steps: [
      { title: 'Cook the Meat', description: "Season beef and tripe with onions, stock cubes, and salt. Cook until tender, about 20 minutes. Reserve the stock." },
      { title: 'Fry the Egusi', description: "Heat palm oil in a pot. Add ground egusi and stir continuously over medium heat for 8–10 minutes until golden and nutty-smelling." },
      { title: 'Build the Base', description: "Add blended onion, scotch bonnet, and crayfish to the pot. Stir and fry for 5 minutes." },
      { title: 'Add Meat & Stock', description: "Add cooked meat and enough stock for a thick stew consistency. Simmer on low heat for 15 minutes, stirring occasionally." },
      { title: 'Finish with Spinach', description: "Stir in washed, chopped spinach. Cook 3–4 minutes until just wilted. Taste, adjust seasoning, and serve with eba, fufu, or rice." },
    ],
  },

  'Garden Harvest Bowl': {
    description: "A vibrant, nutrient-packed bowl of grains, fresh vegetables, and toasted seeds. Quick to assemble and endlessly customisable with whatever's in your pantry.",
    badge: 'BALANCED',
    rating: 4,
    reviews: 56,
    detailTime: '20 MIN',
    nutrition: { protein: '12g', energy: '380 kcal', carbs: '48g', fat: '14g' },
    tip: "Toast seeds in a dry pan for 2 minutes before adding — it unlocks a deeper nutty flavour and gives a great crunch.",
    ingredients: [
      { name: 'Cooked Brown Rice or Quinoa', amount: '1½ Cups' },
      { name: 'Mixed Salad Greens', amount: '2 Handfuls' },
      { name: 'Cucumber', amount: '1 Medium' },
      { name: 'Cherry Tomatoes', amount: '10 Pieces' },
      { name: 'Avocado', amount: '1 Medium' },
      { name: 'Mixed Seeds', amount: '2 tbsp' },
      { name: 'Olive Oil', amount: '2 tbsp' },
      { name: 'Lemon Juice', amount: '1 Lemon' },
    ],
    steps: [
      { title: 'Cook the Grain', description: "Cook rice or quinoa per package instructions. Rinse with cold water and set aside to cool slightly." },
      { title: 'Prep the Vegetables', description: "Halve cherry tomatoes, dice cucumber, and slice avocado. Wash and dry the greens." },
      { title: 'Toast the Seeds', description: "Dry-toast seeds in a pan over medium heat for 2 minutes, shaking frequently, until golden and fragrant." },
      { title: 'Make the Dressing', description: "Whisk olive oil, lemon juice, a pinch of salt, and black pepper. Taste and adjust." },
      { title: 'Assemble & Serve', description: "Layer grain in a bowl, top with greens and vegetables. Drizzle with dressing and scatter toasted seeds. Serve immediately." },
    ],
  },

  'Gizdodo Breakfast': {
    description: "A Nigerian breakfast staple combining tender fried gizzard with sweet caramelised dodo. Bold flavours, satisfying textures — the ultimate morning energy boost.",
    badge: 'STREET FOOD',
    rating: 4,
    reviews: 74,
    detailTime: '30 MIN',
    nutrition: { protein: '24g', energy: '420 kcal', carbs: '36g', fat: '18g' },
    tip: "Parboil the gizzard for 15 minutes before frying — it ensures they're cooked through and tender inside while still getting crispy outside.",
    ingredients: [
      { name: 'Chicken Gizzards', amount: '400g' },
      { name: 'Ripe Plantains', amount: '2 Large' },
      { name: 'Red Bell Pepper', amount: '1 Large' },
      { name: 'Scotch Bonnet', amount: '1 Piece' },
      { name: 'Onions', amount: '1 Medium' },
      { name: 'Vegetable Oil', amount: '1 Cup' },
      { name: 'Suya Spice / Seasoning', amount: '1 tbsp' },
      { name: 'Salt & Stock Cube', amount: 'To taste' },
    ],
    steps: [
      { title: 'Parboil the Gizzard', description: "Season gizzards with salt, stock cube, and onion. Parboil for 15 minutes. Drain and pat dry." },
      { title: 'Fry the Dodo', description: "Peel and slice plantains diagonally. Fry in hot oil until golden on both sides, about 3–4 minutes per side. Drain on paper towels." },
      { title: 'Fry the Gizzard', description: "In the same oil, fry gizzards on medium-high heat for 6–8 minutes until crispy and browned. Drain and set aside." },
      { title: 'Sauté the Peppers', description: "Leave 2 tbsp oil in the pan. Sauté diced onions, bell pepper, and scotch bonnet for 3 minutes until softened." },
      { title: 'Combine & Serve', description: "Add gizzards and dodo back to the pan. Toss with the pepper mix and suya spice. Taste, adjust seasoning, and serve hot." },
    ],
  },

  'Beef Suya Skewers': {
    description: "West Africa's beloved street food — thinly sliced beef coated in a smoky, nutty yaji spice blend and grilled over open flame. Addictive, bold, and deeply flavourful.",
    badge: 'STREET FOOD',
    rating: 5,
    reviews: 143,
    detailTime: '35 MIN',
    nutrition: { protein: '38g', energy: '380 kcal', carbs: '6g', fat: '22g' },
    tip: "Freeze the beef for 30 minutes before slicing — it makes cutting paper-thin strips much easier and they cook more evenly on the grill.",
    ingredients: [
      { name: 'Beef Sirloin or Rump', amount: '500g' },
      { name: 'Ground Groundnuts (peanuts)', amount: '½ Cup' },
      { name: 'Yaji Suya Spice Mix', amount: '3 tbsp' },
      { name: 'Ginger Powder', amount: '1 tsp' },
      { name: 'Garlic Powder', amount: '1 tsp' },
      { name: 'Vegetable Oil', amount: '3 tbsp' },
      { name: 'Onion', amount: '1 Large (for garnish)' },
      { name: 'Salt', amount: 'To taste' },
    ],
    steps: [
      { title: 'Slice the Beef', description: "Freeze beef for 20–30 minutes. Slice as thinly as possible across the grain, about 3mm thick. Thinner slices = more tender result." },
      { title: 'Make the Yaji Marinade', description: "Combine ground groundnuts, suya spice, ginger, garlic, and salt. Mix with oil to form a paste. Reserve some for basting." },
      { title: 'Marinate & Skewer', description: "Coat beef slices thoroughly in the yaji paste. Thread onto pre-soaked skewers. Marinate at least 30 minutes." },
      { title: 'Grill or Roast', description: "Grill over charcoal or under a hot oven broiler for 3–4 minutes per side. Baste with reserved paste halfway through." },
      { title: 'Serve', description: "Serve immediately garnished with sliced raw onions, tomatoes, and extra suya spice. Best enjoyed straight off the skewer." },
    ],
  },

  'Puff Puff Dessert': {
    description: "Nigeria's favourite fried dough — impossibly light, golden, and slightly sweetened. A crowd-pleasing treat that disappears in minutes at every gathering.",
    badge: 'DESSERT',
    rating: 5,
    reviews: 98,
    detailTime: '30 MIN',
    nutrition: { protein: '4g', energy: '320 kcal', carbs: '44g', fat: '14g' },
    tip: "The batter should be thick enough to hold its shape when dropped from a spoon. Too thin = flat puff puff. Let it rest 10 minutes after mixing so the yeast activates fully.",
    ingredients: [
      { name: 'Plain Flour', amount: '2 Cups' },
      { name: 'Active Dry Yeast', amount: '1 tsp' },
      { name: 'Sugar', amount: '4 tbsp' },
      { name: 'Salt', amount: '½ tsp' },
      { name: 'Warm Water', amount: '1 Cup' },
      { name: 'Ground Nutmeg', amount: '¼ tsp' },
      { name: 'Vegetable Oil', amount: '3 Cups (for frying)' },
    ],
    steps: [
      { title: 'Activate the Yeast', description: "Mix yeast with 2 tbsp warm water and 1 tsp sugar. Let stand 5 minutes until frothy — this confirms the yeast is active." },
      { title: 'Make the Batter', description: "Combine flour, remaining sugar, salt, and nutmeg. Add activated yeast and warm water gradually, stirring to a thick, smooth batter." },
      { title: 'Rest the Batter', description: "Cover the bowl with a clean cloth and rest in a warm spot for 10–15 minutes until slightly puffed." },
      { title: 'Fry in Batches', description: "Heat oil to 175°C. Drop spoonfuls of batter into the oil without overcrowding. Fry 2–3 minutes per side until deep golden brown." },
      { title: 'Drain & Serve', description: "Drain on paper towels. Serve warm, dusted with powdered sugar or with a cold drink. Best eaten fresh." },
    ],
  },
};

  export const ALL_RECIPES = [
  {
    // Nigerian Jollof rice with fried fish — by Keesha's Kitchen
    image: 'https://images.unsplash.com/photo-1665332195309-9d75071138f0?auto=format&fit=crop&q=80&w=800',
    title: 'Smoky Party Jollof Rice',
    category: 'Dinner',
    time: '45m',
    level: 'Medium',
    isMatch: true,
    comment: 'Uses your expiring bell peppers and scotch bonnets.',
  },
  {
    // Actual egusi soup with assorted meats — by Tosan Dudun
    image: 'https://images.unsplash.com/photo-1763048443535-1243379234e2?auto=format&fit=crop&q=80&w=800',
    title: 'Egusi Soup with Spinach',
    category: 'Dinner',
    time: '60m',
    level: 'Hard',
    isMatch: false,
    comment: 'High in protein and perfect for meal prepping.',
  },
  {
    // Colourful grain & vegetable harvest bowl
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    title: 'Garden Harvest Bowl',
    category: 'Lunch',
    time: '20m',
    level: 'Easy',
    isMatch: true,
    comment: 'Quick lunch option with your current stock.',
  },
  {
    // West African breakfast plate — meat, rice & plantain
    image: 'https://images.unsplash.com/photo-1705088293214-7494366cce01?auto=format&fit=crop&q=80&w=800',
    title: 'Gizdodo Breakfast',
    category: 'Breakfast',
    time: '15m',
    level: 'Easy',
    isMatch: true,
    comment: 'Uses those overripe plantains.',
  },
  {
    // Smoked meat & peppers at Nigerian street stall, Benin City — by Ben Iwara
    image: 'https://images.unsplash.com/photo-1765584830134-12d879ad13bd?auto=format&fit=crop&q=80&w=800',
    title: 'Beef Suya Skewers',
    category: 'Quick Bites',
    time: '30m',
    level: 'Medium',
    isMatch: false,
    comment: 'Classic spicy street food at home.',
  },
  {
    // Golden fried dough balls on cooling rack — by Yulin Wang
    image: 'https://images.unsplash.com/photo-1759302307623-0ed463b8a9b9?auto=format&fit=crop&q=80&w=800',
    title: 'Puff Puff Dessert',
    category: 'Desserts',
    time: '25m',
    level: 'Easy',
    isMatch: false,
    comment: 'Sweet fried dough – a Nigerian classic treat.',
  },
];

