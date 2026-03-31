import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import CookieBanner from './components/CookieBanner';
import WhatsAppWidget from './components/WhatsAppWidget';
import NotFound from './pages/NotFound';
import QuemSomos from './pages/QuemSomos';
import './index.css';
import './TabletLandscape.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos" element={<TermsOfUse />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        {/* Wildcard route for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieBanner />
      <WhatsAppWidget />
    </Router>
  );
}

export default App;
