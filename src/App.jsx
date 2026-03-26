import React, { useEffect } from 'react';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import ComboAeroporto from './components/ComboAeroporto';
import WhatsAppPromo from './components/WhatsAppPromo';
import Locations from './components/Locations';
import About from './components/About';
import Loyalty from './components/Loyalty';
import LoyaltySteps from './components/LoyaltySteps';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    function switchMain(btn, panelId) { document.querySelectorAll(".main-tab").forEach((t) => t.classList.remove("active")); btn.classList.add("active");["pizzaria", "gelateria"].forEach((id) => { document.getElementById("panel-" + id).classList.remove("active"); }); const target = document.getElementById("panel-" + panelId); target.classList.add("active"); const firstSub = target.querySelector(".sub-tab"); if (firstSub) { target.querySelectorAll(".sub-tab").forEach((t) => t.classList.remove("active")); firstSub.classList.add("active"); target.querySelectorAll(":scope > .panel").forEach((p) => p.classList.remove("active")); const firstPanel = target.querySelector(":scope > .panel"); if (firstPanel) firstPanel.classList.add("active"); } animateCards(target); if (window._cardapioApplyHeight) window._cardapioApplyHeight(); } function switchSub(btn, panelId) { const parent = btn.closest(".panel"); parent.querySelectorAll(":scope > .sub-tabs .sub-tab").forEach((t) => t.classList.remove("active")); btn.classList.add("active"); parent.querySelectorAll(":scope > .panel").forEach((p) => p.classList.remove("active")); const target = document.getElementById("panel-" + panelId); if (target) { target.classList.add("active"); animateCards(target); if (window._cardapioApplyHeight) window._cardapioApplyHeight(); } } function animateCards(container) { container.querySelectorAll(".product-card").forEach((card, i) => { card.style.animation = "none"; void card.offsetHeight; card.style.animation = ""; card.style.animationDelay = i * 0.06 + 0.03 + "s"; }); } function watchCardapioHeight(targetId) { var section = document.querySelector(".cardapio"); var parentDoc; try { parentDoc = window.parent.document; } catch (e) { parentDoc = document; } var target = parentDoc.getElementById(targetId); if (!section || !target) { console.warn("[watchCardapioHeight] elemento não encontrado."); return; } var baseTargetHeight = window.innerWidth <= 768 ? 1611 : target.offsetHeight; var baseContentHeight = null; function applyHeight() { requestAnimationFrame(function () { var currentContent = section.offsetHeight; if (!baseContentHeight || baseContentHeight === 0) { if (currentContent > 0) baseContentHeight = currentContent; target.style.height = baseTargetHeight + "px"; return; } var diff = currentContent - baseContentHeight; target.style.height = (baseTargetHeight + diff) + "px"; }); } window._cardapioApplyHeight = applyHeight; new ResizeObserver(applyHeight).observe(section); applyHeight(); setTimeout(applyHeight, 300); setTimeout(applyHeight, 800); } watchCardapioHeight("b_3536911_1_177340533469b404961c76e");

    window.getCrawler = function () { let user = {}; if (document.cookie != '') { let split = document.cookie.split(';'); for (var i = 0; i < split.length; i++) { var conteudo = split[i].split('='); if (conteudo[0].indexOf('gpages_user') !== -1) { user = JSON.parse(decodeURI(conteudo[1]).replaceAll('%3A', ':').replaceAll('%2C', ',').replaceAll('%2F', '/').replaceAll('%3B', ';')); } } } if (typeof navigator.userAgentData != 'undefined') { let retorno = false; navigator.userAgentData.brands.forEach(function (item) { if (item.brand.toLowerCase() == 'lighthouse' || item.brand.toLowerCase() == 'gtmetrix') { retorno = true; } }); if (!retorno) { retorno = window.navigator.userAgent.indexOf('GTmetrix') !== -1 ? true : false; } if (user?.agent) { retorno = user.agent.indexOf('GTmetrix') !== -1 || user.agent.indexOf('Lighthouse') !== -1 ? true : false; } return retorno; } else { if (window.navigator.userAgent.indexOf('GTmetrix') !== -1 || window.navigator.userAgent.indexOf('Lighthouse') !== -1) { return true; } else if (user?.agent) { return user.agent.indexOf('GTmetrix') !== -1 || user.agent.indexOf('Lighthouse') !== -1 ? true : false; } else { return false; } } };
    let random = Math.random().toString(); window.eid = 'GPages.' + random.substr(random.length - 4) + (new Date()).getTime(); var c = '', u = '', fbclid = '', gpages_conversion = '', data = new Date(); function FormatarDigitosData(valor, digitos) { if (valor.toString().length < digitos) { return (new Array(digitos - valor.toString().length + 1).join('0')) + valor; } else { return valor; } } if (document.cookie != '') { var split = document.cookie.split(';'); for (var i = 0; i < split.length; i++) { var conteudo = split[i].split('='); if (conteudo[0].indexOf('_fbp') !== -1) { c = conteudo[1]; } if (conteudo[0].indexOf('_fbc') !== -1) { fbclid = conteudo[1]; } if (conteudo[0].indexOf('gpages_user') !== -1) { u = JSON.parse(decodeURI(conteudo[1]).replaceAll('%3A', ':').replaceAll('%2C', ',').replaceAll('%2F', '/').replaceAll('%3B', ';')); } if (conteudo[0].indexOf('gpages_conversion') !== -1) { gpages_conversion = JSON.parse(decodeURI(conteudo[1]).replaceAll('%3A', ':').replaceAll('%2C', ',').replaceAll('%2F', '/').replaceAll('%3B', ';')); } } } if (u.fbc == false) { fbclid = ''; } if (u.fbp == false) { c = ''; } if (typeof u != undefined) { if (u?.eId != undefined) { window.eid = u.eId; } } if (typeof gpages_conversion != undefined) { window.gpages_conversion = gpages_conversion; }
    window.switchMain = switchMain;
    window.switchSub = switchSub;
    window.animateCards = animateCards;
    window.watchCardapioHeight = watchCardapioHeight;
    window.FormatarDigitosData = FormatarDigitosData;
  }, []);

  return (
    <>
      <div id="site">
        <Navbar />
        <Hero />
        <Menu />
        <ComboAeroporto />
        <WhatsAppPromo />
        <Locations />
        <About />
        <Loyalty />
        <LoyaltySteps />
        <Footer />
      </div>
    </>
  );
}

export default App;
