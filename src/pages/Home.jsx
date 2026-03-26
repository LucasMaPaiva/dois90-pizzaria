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
    function switchMain(btn, panelId) { document.querySelectorAll(".main-tab").forEach((t) => t.classList.remove("active")); btn.classList.add("active");["pizzaria", "restaurante", "gelateria"].forEach((id) => { document.getElementById("panel-" + id).classList.remove("active"); }); const target = document.getElementById("panel-" + panelId); target.classList.add("active"); const firstSub = target.querySelector(".sub-tab"); if (firstSub) { target.querySelectorAll(".sub-tab").forEach((t) => t.classList.remove("active")); firstSub.classList.add("active"); target.querySelectorAll(":scope > .panel").forEach((p) => p.classList.remove("active")); const firstPanel = target.querySelector(":scope > .panel"); if (firstPanel) firstPanel.classList.add("active"); } animateCards(target); if (window._cardapioApplyHeight) window._cardapioApplyHeight(); } function switchSub(btn, panelId) { const parent = btn.closest(".panel"); parent.querySelectorAll(":scope > .sub-tabs .sub-tab").forEach((t) => t.classList.remove("active")); btn.classList.add("active"); parent.querySelectorAll(":scope > .panel").forEach((p) => p.classList.remove("active")); const target = document.getElementById("panel-" + panelId); if (target) { target.classList.add("active"); animateCards(target); if (window._cardapioApplyHeight) window._cardapioApplyHeight(); } } function animateCards(container) { container.querySelectorAll(".product-card").forEach((card, i) => { card.style.animation = "none"; void card.offsetHeight; card.style.animation = ""; card.style.animationDelay = i * 0.06 + 0.03 + "s"; }); } function watchCardapioHeight(targetId) { var section = document.querySelector(".cardapio"); var parentDoc; try { parentDoc = window.parent.document; } catch (e) { parentDoc = document; } var target = parentDoc.getElementById(targetId); if (!section || !target) { console.warn("[watchCardapioHeight] elemento não encontrado."); return; } var baseTargetHeight = window.innerWidth <= 768 ? 1611 : target.offsetHeight; var baseContentHeight = null; function applyHeight() { requestAnimationFrame(function () { var currentContent = section.offsetHeight; if (!baseContentHeight || baseContentHeight === 0) { if (currentContent > 0) baseContentHeight = currentContent; target.style.height = baseTargetHeight + "px"; return; } var diff = currentContent - baseContentHeight; target.style.height = (baseTargetHeight + diff) + "px"; }); } window._cardapioApplyHeight = applyHeight; new ResizeObserver(applyHeight).observe(section); applyHeight(); setTimeout(applyHeight, 300); setTimeout(applyHeight, 800); } watchCardapioHeight("b_3536911_1_177340533469b404961c76e");

    // Aggressive cleanup for legacy cookie banner
    const cleanupLegacyCookies = () => {
      const selectors = ['#gpc-lgpd', '.gpc_modal_lgpd', '#gpc-lgpd_editar', '.gpc-aviso-cookies', '#aviso-cookies', '.gpc-aviso-cookies-container'];
      selectors.forEach(s => {
        document.querySelectorAll(s).forEach(el => el.remove());
      });
      // Also look for elements containing the specific text if they don't have these classes
      document.querySelectorAll('div').forEach(div => {
        if (div.textContent.includes('Usamos cookies') && div.textContent.includes('Ok, entendi') && div.children.length < 10) {
          div.remove();
        }
      });
    };

    const observer = new MutationObserver(cleanupLegacyCookies);
    observer.observe(document.body, { childList: true, subtree: true });
    cleanupLegacyCookies(); // Run once initially

    window.switchMain = switchMain;
    window.switchSub = switchSub;
    window.animateCards = animateCards;
    window.watchCardapioHeight = watchCardapioHeight;

    return () => observer.disconnect();
  }, []);

  return (
    <div id="site">
      <Navbar />
      <Hero />
      <Menu />
      <ComboAeroporto />
      <Locations />
      <About />
      <PromoImage />
      <Footer />
    </div>
  );
};

export default Home;
