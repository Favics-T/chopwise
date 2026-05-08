import React, { createContext, useReducer, useContext } from 'react';

const AppContext = createContext();

const initialState = {
  healthGoal: 'Healthier Eating', 
  restrictions: ['Ulcer-safe'],
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_HEALTH_GOAL':
      return { ...state, healthGoal: action.payload };
    case 'TOGGLE_RESTRICTION':
      const exists = state.restrictions.includes(action.payload);
      if (exists) {
        return { ...state, restrictions: state.restrictions.filter(r => r !== action.payload) };
      } else {
        return { ...state, restrictions: [...state.restrictions, action.payload] };
      }
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
