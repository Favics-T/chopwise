import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
 
export function useOnboarding() {
  const { state, dispatch } = useAppContext();
 
  const [customRestriction, setCustomRestriction] = useState('');
 
  return {
    state,
    dispatch,
    customRestriction,
    setCustomRestriction,
  };
}