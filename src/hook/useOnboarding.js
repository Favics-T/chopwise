import { useState } from "react";
import { useAppContext } from "../context/AppContext";

export function useOnboarding() {
  const { state, dispatch } = useAppContext();

  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customRestriction, setCustomRestriction] = useState('');

  const addCustomRestriction = () => {
    const trimmed = customRestriction.trim();
    if (!trimmed) return;

    dispatch({ type: 'TOGGLE_RESTRICTION', payload: trimmed });

    setCustomRestriction('');
    setShowCustomInput(false);
  };

  return {
    state,
    dispatch,
    showCustomInput,
    setShowCustomInput,
    customRestriction,
    setCustomRestriction,
    addCustomRestriction,
  };
}