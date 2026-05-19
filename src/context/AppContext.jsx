import React, { createContext, useReducer, useContext } from 'react';
import { journalEntries, pantryItems } from '../data/mockdata.js';


const AppContext = createContext();

const initialState = {
  healthGoal: 'Healthier Eating',
  restrictions: ['Ulcer-safe'],
  // User preferences tracked in global state
  notifications: true,
  units: 'Metric',
  theme: 'Light',
  // Favourite recipes (by title)
  favouriteRecipes: [],
   pantryItems,
   journalEntries
   };

function reducer(state, action) {
  switch (action.type) {

    //  Health Goal 
    case 'SET_HEALTH_GOAL':
      return { ...state, healthGoal: action.payload };

    //  Dietary Restrictions 
    case 'TOGGLE_RESTRICTION': {
      const exists = state.restrictions.includes(action.payload);
      return {
        ...state,
        restrictions: exists
          ? state.restrictions.filter(r => r !== action.payload)
          : [...state.restrictions, action.payload],
      };
    }

    // ── Pantry Operations 
    case 'SET_PANTRY':
      return { ...state, pantryItems: action.payload };

    case 'ADD_PANTRY_ITEM':
      return { ...state, pantryItems: [...state.pantryItems, { id: Date.now(), ...action.payload }] };

    case 'REMOVE_PANTRY_ITEM':
      return { ...state, pantryItems: state.pantryItems.filter(item => item.id !== action.payload) };

    case 'UPDATE_PANTRY_QTY':
      return {
        ...state,
        pantryItems: state.pantryItems.map(item =>
          item.id === action.payload.id ? { ...item, qty: action.payload.qty } : item
        ),
      };

    // Fix: Full item update (for inline edits on the Pantry page)
    case 'UPDATE_PANTRY_ITEM':
      return {
        ...state,
        pantryItems: state.pantryItems.map(item =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };

    //  Journal Operations 
    case 'ADD_JOURNAL_ENTRY':
      return { ...state, journalEntries: [{ id: Date.now(), ...action.payload }, ...state.journalEntries] };

    // Fix: Allow journal entries to be removed
    case 'REMOVE_JOURNAL_ENTRY':
      return { ...state, journalEntries: state.journalEntries.filter(e => e.id !== action.payload) };

    //  Favourite Recipes 
    // Fix: Toggle a recipe title in/out of favourites list
    case 'TOGGLE_FAVOURITE_RECIPE': {
      const isFav = state.favouriteRecipes.includes(action.payload);
      return {
        ...state,
        favouriteRecipes: isFav
          ? state.favouriteRecipes.filter(r => r !== action.payload)
          : [...state.favouriteRecipes, action.payload],
      };
    }

    // ── App Preferences 
    // Fix: Toggle notifications on/off
    case 'SET_NOTIFICATIONS':
      return { ...state, notifications: action.payload };

    // Fix: Switch between Metric and Imperial
    case 'SET_UNITS':
      return { ...state, units: action.payload };

    // Fix: Switch app theme
    case 'SET_THEME':
      return { ...state, theme: action.payload };

    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

export default AppContext;
