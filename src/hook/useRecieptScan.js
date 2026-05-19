import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { MOCK_DETECTED } from '../data/mockdata'; // Importing mock detected items for the receipt scan page, since we don't have a real OCR/AI API integration in this mockup.

export function useReceiptScan() {
  const navigate = useNavigate();
  const { dispatch } = useAppContext();


  const [detectedItems, setDetectedItems] = useState(MOCK_DETECTED);
  const [editMode, setEditMode] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

    const handleRetake = () => {
    setDetectedItems(MOCK_DETECTED);
    setEditMode(false);
    setConfirmed(false);
  };

  const handleRename = (id, newName) => {
    setDetectedItems(prev =>
      prev.map(item => item.id === id ? { ...item, name: newName } : item)
    );
  };

  const handleRemove = (id) => {
    setDetectedItems(prev => prev.filter(item => item.id !== id));
  };

   const handleConfirmSave = () => {
    detectedItems.forEach((item, index) => {
      dispatch({
        type: 'ADD_PANTRY_ITEM',
        payload: {
          name: item.name,
          qty: 1,
          unit: item.type,
          status: item.status === 'Waste Risk' ? 'Expiring Soon' : 'Stable',
          expiry: '',
          image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&h=100&fit=crop',
          isExpiringSoon: item.status === 'Waste Risk',
        }
      });
    });
    setConfirmed(true);
    setTimeout(() => navigate('/pantry'), 1800);
  }

  const handleManualEntry = () => navigate('/pantry-setup');


  return {
    detectedItems,
    editMode,
    confirmed,
    setEditMode,
    handleRetake,
    handleRename,
    handleRemove,
    handleConfirmSave,
    handleManualEntry,
    navigate
  };
}