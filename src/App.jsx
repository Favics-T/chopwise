import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Onboarding from './pages/Onboarding';
import Recipes from './pages/Recipes';
import Pantry from './pages/Pantry';
import RecipeDetail from './pages/RecipeDetail';
import Journal from './pages/Journal';
import PantrySetup from './pages/PantrySetup';
import ReceiptScan from './pages/ReceiptScan';
import Settings from './pages/Settings';

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen max-w-[430px] mx-auto relative bg-background overflow-x-hidden">
        <Router>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/pantry" element={<Pantry />} />
            <Route path="/recipe-detail" element={<RecipeDetail />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/pantry-setup" element={<PantrySetup />} />
            <Route path="/receipt-scan" element={<ReceiptScan />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </div>
    </AppProvider>
  );
}
