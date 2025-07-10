import React, { useEffect, useState } from 'react';
import { ArrowRight, ExternalLink, TrendingUp, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "919259382982";
    const message = "Hi! I just visited your website and I'm interested in knowing more about your services. Can you please help me?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCheckWorkClick = () => {
    window.open('https://boost-flick.my.canva.site/', '_blank');
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden perspective-1000">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* 3D Floating Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float blur-sm"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg opacity-20 animate-float-reverse blur-sm"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-rotate-3d blur-sm"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl opacity-20 animate-morphing blur-sm"></div>

      {/* Interactive Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 preserve-3d">
        <div className="text-center">
          <button 
            onClick={scrollToServices}
            className={`inline-flex items-center px-6 py-3 bg-white/20 glass-morphism rounded-full text-blue-800 text-sm font-medium mb-8 hover-3d transition-all duration-300 hover:scale-105 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
          >
            <TrendingUp className="h-4 w-4 mr-2 animate-pulse" />
            <Sparkles className="h-4 w-4 mr-2 animate-spin" />
            Boost Your Business Growth
          </button>
          
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight preserve-3d ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
            <span className="block animate-text-glow mb-2">Accelerate Your</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient leading-relaxed py-2">
              Digital Success
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed ${isVisible ? 'animate-slide-in-up stagger-2' : 'opacity-0'}`}>
            Transform your business with our cutting-edge digital solutions. 
            We help companies scale faster, reach more customers, and maximize their online potential.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 ${isVisible ? 'animate-slide-in-up stagger-3' : 'opacity-0'}`}>
            <button 
              onClick={handleWhatsAppClick}
              className="group bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover-lift flex items-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Zap className="mr-2 h-5 w-5 animate-pulse" />
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            
            <button 
              onClick={handleCheckWorkClick}
              className="group flex items-center text-gray-700 hover:text-blue-600 transition-all duration-300 px-10 py-5 rounded-full border-2 border-gray-300 hover:border-blue-300 bg-white/50 glass-morphism hover-tilt"
            >
              <ExternalLink className="mr-3 h-6 w-6 group-hover:scale-125 transition-transform duration-300" />
              <span className="font-semibold">Check Our Work</span>
            </button>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto ${isVisible ? 'animate-slide-in-up stagger-4' : 'opacity-0'}`}>
            {[
              { value: '500+', label: 'Happy Clients', color: 'from-blue-600 to-cyan-600' },
              { value: '98%', label: 'Success Rate', color: 'from-purple-600 to-pink-600' },
              { value: '24/7', label: 'Support', color: 'from-blue-600 to-purple-600' }
            ].map((stat, index) => (
              <button 
                key={index} 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`text-center p-6 bg-white/30 glass-morphism rounded-2xl hover-3d stagger-${index + 1} transition-all duration-300 hover:scale-105`}
              >
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 animate-pulse-3d`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <button 
        onClick={scrollToServices}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-300"
      >
        <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center relative overflow-hidden">
          <div className="w-1 h-4 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mt-2 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
      </button>
    </section>
  );
};

export default Hero;