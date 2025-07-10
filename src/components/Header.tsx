import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onAboutClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAboutClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGetStartedClick = () => {
    const phoneNumber = "919259382982";
    const message = "Hi! I just visited your website and I'm interested in getting started with your services. Can you please help me?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 glass-morphism shadow-2xl backdrop-blur-md' : 'bg-transparent'
    }`}>
      {/* Interactive Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full overflow-hidden group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl animate-float relative">
              <img 
                src="/WhatsApp Image 2025-07-02 at 14.31.32_8d61cef6 (1).jpg" 
                alt="BoostFlick Logo" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Boostflick
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium capitalize relative group animate-slide-in-up"
            >
              services
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium capitalize relative group animate-slide-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              features
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </button>
            
            <button 
              onClick={onAboutClick}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium capitalize relative group animate-slide-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              about
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </button>
            
            <button 
              onClick={handleGetStartedClick}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient text-white px-8 py-3 rounded-full hover:shadow-2xl transition-all duration-500 font-medium transform hover:scale-105 hover-lift relative overflow-hidden group animate-slide-in-up stagger-3"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              <span className="relative z-10">Get Started</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover-3d"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative">
              {isMenuOpen ? (
                <X className="h-6 w-6 animate-spin" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 glass-morphism border-t border-gray-100 py-6 space-y-4 animate-slide-in-up">
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 capitalize font-medium rounded-xl mx-4 animate-slide-in-left"
            >
              services
            </button>
            
            <button 
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 capitalize font-medium rounded-xl mx-4 animate-slide-in-left"
              style={{ animationDelay: '0.1s' }}
            >
              features
            </button>
            
            <button 
              onClick={() => {
                onAboutClick();
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 capitalize font-medium rounded-xl mx-4 animate-slide-in-left"
              style={{ animationDelay: '0.2s' }}
            >
              about
            </button>
            
            <button 
              onClick={handleGetStartedClick}
              className="block w-full text-left px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl mx-4 font-medium hover:shadow-lg transition-all duration-300 animate-slide-in-left stagger-3"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;