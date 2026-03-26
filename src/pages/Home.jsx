import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import ComboAeroporto from '../components/ComboAeroporto';
import WhatsAppPromo from '../components/WhatsAppPromo';
import Locations from '../components/Locations';
import About from '../components/About';
import PromoImage from '../components/PromoImage';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    // Utility functions for legacy menu tab support
    function switchMain(btn, panelId) {
      document.querySelectorAll(".main-tab").forEach((t) => t.classList.remove("active"));
      btn.classList.add("active");
      ["pizzaria", "restaurante", "gelateria"].forEach((id) => {
        const panel = document.getElementById("panel-" + id);
        if (panel) panel.classList.remove("active");
      });
      const target = document.getElementById("panel-" + panelId);
      if (target) {
        target.classList.add("active");
        const firstSub = target.querySelector(".sub-tab");
        if (firstSub) {
          target.querySelectorAll(".sub-tab").forEach((t) => t.classList.remove("active"));
          firstSub.classList.add("active");
          target.querySelectorAll(":scope > .panel").forEach((p) => p.classList.remove("active"));
          const firstPanel = target.querySelector(":scope > .panel");
          if (firstPanel) firstPanel.classList.add("active");
        }
        animateCards(target);
      }
    }

    function switchSub(btn, panelId) {
      const parent = btn.closest(".panel");
      if (!parent) return;
      parent.querySelectorAll(":scope > .sub-tabs .sub-tab").forEach((t) => t.classList.remove("active"));
      btn.classList.add("active");
      parent.querySelectorAll(":scope > .panel").forEach((p) => p.classList.remove("active"));
      const target = document.getElementById("panel-" + panelId);
      if (target) {
        target.classList.add("active");
        animateCards(target);
      }
    }

    function animateCards(container) {
      container.querySelectorAll(".product-card").forEach((card, i) => {
        card.style.animation = "none";
        void card.offsetHeight;
        card.style.animation = "";
        card.style.animationDelay = i * 0.06 + 0.03 + "s";
      });
    }

    // Assign to window for legacy onclick handlers in components
    window.switchMain = switchMain;
    window.switchSub = switchSub;
    window.animateCards = animateCards;

    // No mutation observer here - we use CSS to hide legacy builder elements
    // This prevents conflicts with React's DOM management
    
    return () => {
      // Cleanup window assignments if necessary
    };
  }, []);

  return (
    <div id="site">
      <Navbar />
      <Hero />
      <Menu />
      <ComboAeroporto />
      <WhatsAppPromo />
      <Locations />
      <About />
      <PromoImage />
      <Footer />
    </div>
  );
};

export default Home;
