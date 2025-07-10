import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/contact-form';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  const showAboutPage = () => setCurrentPage('about');
  const showHomePage = () => setCurrentPage('home');

  if (currentPage === 'about') {
    return <AboutPage onBack={showHomePage} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onAboutClick={showAboutPage} />
      <Hero />
      <Services />
      <Features />
      <About />
      <Contact />
      <Footer onAboutClick={showAboutPage} />
    </div>
  );
}

export default App;