import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { RecipeProvider } from './context/RecipeContext.jsx';
import Onboarding from './pages/Onboarding/Onboarding';
import Recipes from './pages/Recipes/Recipes.jsx';
import Pantry from './pages/Pantry/Pantry';
import RecipeDetail from './pages/RecipeDetail/RecipeDetail';
import PantrySetup from './pages/PantrySetup/PantrySetup.jsx';
import RecieptScan from './pages/RecieptScan/RecieptScan.jsx';
import Settings from './pages/Settings';
import UsageConfirmation from './pages/UsageConfirmation';
import StorePreferences from './pages/StorePreferences';
import Journal from './pages/Journal/Journal';

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen relative bg-background overflow-x-hidden">
        <Router>
          <RecipeProvider>
            <Routes>
              <Route path="/" element={<Onboarding />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/pantry" element={<Pantry />} />
              <Route path="/recipe-detail" element={<RecipeDetail />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/pantry-setup" element={<PantrySetup />} />
              <Route path="/receipt-scan" element={<RecieptScan />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/usage-confirmation" element={<UsageConfirmation />} />
              <Route path="/store-preferences" element={<StorePreferences />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </RecipeProvider>
        </Router>
      </div>
    </AppProvider>
  );
}
