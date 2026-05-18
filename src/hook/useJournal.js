import { useAppContext } from '../context/AppContext';
import { useState } from 'react';

export function useJournal() {
  const { state, dispatch } = useAppContext(); 

  const [showAll, setShowAll] = useState(false);

  const entries = state.journalEntries;

  const visibleEntries = showAll ? entries : entries.slice(0, 3);

  const deleteEntry = (id) => {
    dispatch({ type: 'REMOVE_JOURNAL_ENTRY', payload: id });
  };

  return {
    entries,
    visibleEntries,
    showAll,
    setShowAll,
    deleteEntry,
  };
}