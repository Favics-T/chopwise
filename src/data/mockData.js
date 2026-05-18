import { Activity, Trash2,Leaf } from "lucide-react";
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
  ]