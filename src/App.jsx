import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import CookieBanner from './components/CookieBanner';
import WhatsAppWidget from './components/WhatsAppWidget';
import NotFound from './pages/NotFound';
import QuemSomos from './pages/QuemSomos';
import AdminApp from './admin/AdminApp';
import { ContentProvider } from './context/ContentContext';
import './index.css';
import './TabletLandscape.css';

function AppRoutes() {
  // O painel tem layout proprio: banner de cookies e widget do WhatsApp
  // ficam fora dele.
  const isAdmin = useLocation().pathname.startsWith('/admin');

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos" element={<TermsOfUse />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/admin/*" element={<AdminApp />} />
        {/* Wildcard route for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isAdmin && (
        <>
          <CookieBanner />
          <WhatsAppWidget />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <ContentProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ContentProvider>
  );
}

export default App;
