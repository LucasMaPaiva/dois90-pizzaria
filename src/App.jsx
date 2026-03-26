import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import CookieBanner from './components/CookieBanner';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos" element={<TermsOfUse />} />
        {/* Fallback to home for any other route */}
        <Route path="*" element={<Home />} />
      </Routes>
      <CookieBanner />
    </Router>
  );
}

export default App;
