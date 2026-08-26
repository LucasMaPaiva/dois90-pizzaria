import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Locations from '../components/Locations';
import PromoSections from '../components/PromoSections';
import SocialGallery from '../components/SocialGallery';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div id="site">
      <Navbar />
      <Hero />
      <PromoSections position="apos-inicio" />
      <Menu />
      <PromoSections position="apos-cardapio" />
      <Locations />
      <PromoSections position="apos-unidades" />
      <SocialGallery />
      <PromoSections position="apos-galeria" />
      <Footer />
    </div>
  );
};

export default Home;
