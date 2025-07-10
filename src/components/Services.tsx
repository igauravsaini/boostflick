import React, { useEffect, useRef, useState } from 'react';
import { Globe, Smartphone, Search, PenTool, MessageCircle, User } from 'lucide-react';

const Services = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: <Search className="h-12 w-12" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive qualified traffic.",
      features: ["SEO/SEM", "Social Media- Facebook Ads , Google Ads", "Email Marketing", "Content Strategy"],
      color: "from-green-500 to-emerald-500",
      bgPattern: "radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
      whatsappMessage: "Hi! I need digital marketing services for my company/startup. Can you help me boost my online presence?"
    },
    {
      icon: <User className="h-12 w-12" />,
      title: "Personal Branding",
      description: "Build a powerful personal brand that defines your unique identity , showcases your value, and grows your influence in your industry.",
      features: ["Define Unique identity & Value", "Build Visual Identity", "Content Strategy", "Audience Growth"],
      color: "from-pink-500 to-rose-500",
      bgPattern: "radial-gradient(circle at 30% 70%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)",
      whatsappMessage: "Hi! I'm interested in personal branding services to build my professional presence and grow my influence."
    },
    {
      icon: <PenTool className="h-12 w-12" />,
      title: "Brand Design",
      description: "Creative brand identity and visual design solutions that make your business stand out from the competition.",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "UI/UX Design"],
      color: "from-orange-500 to-red-500",
      bgPattern: "radial-gradient(circle at 30% 70%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)",
      whatsappMessage: "Hi! I need brand design services including logo design and visual identity for my business."
    },
    {
      icon: <MessageCircle className="h-12 w-12" />,
      title: "Consulting",
      description: "Strategic business consulting to help you make informed decisions and accelerate your growth trajectory.",
      features: ["Business Strategy", "Digital Transformation", "Process Optimization", "Market Analysis"],
      color: "from-indigo-500 to-purple-500",
      bgPattern: "radial-gradient(circle at 70% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
      whatsappMessage: "Hi! I'm looking for business consulting services to help grow my company and optimize our processes."
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Mobile-First"],
      color: "from-blue-500 to-cyan-500",
      bgPattern: "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
      whatsappMessage: "Hi! I need web development services to create a professional website for my business."
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
      features: ["iOS & Android", "React Native", "App Store Optimization", "Push Notifications"],
      color: "from-purple-500 to-pink-500",
      bgPattern: "radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
      whatsappMessage: "Hi! I'm interested in mobile app development services for iOS and Android platforms."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = "919259382982"; // Adding country code for India
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-2xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-morphing"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 animate-slide-in-up">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-in-up stagger-1">
            Comprehensive solutions tailored to your business needs and designed to deliver exceptional results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`service-card group relative bg-white/80 glass-morphism p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-700 transform preserve-3d hover-lift ${
                visibleItems.includes(index) ? 'animate-slide-in-up' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 0.15}s`,
                background: hoveredCard === index ? service.bgPattern : undefined
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Dynamic Background */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"
                style={{ background: service.bgPattern }}
              ></div>
              
              {/* Floating Icon with 3D Effect */}
              <div className="relative mb-6 perspective-1000">
                <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${service.color} rounded-3xl text-white mb-6 group-hover:scale-110 group-hover:rotate-y-12 transition-all duration-700 shadow-lg group-hover:shadow-2xl preserve-3d animate-float`}>
                  {service.icon}
                  
                  {/* Icon Reflection */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10`}></div>
                  
                  {/* Rotating Ring */}
                  <div className={`absolute inset-0 border-2 border-gradient-to-r ${service.color} rounded-3xl opacity-0 group-hover:opacity-60 animate-rotate-3d`}></div>
                </div>
                
                {/* Orbiting Particles */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${service.color} rounded-full animate-particle-float`}
                        style={{
                          left: `${25 + Math.cos(i * Math.PI / 2) * 40}%`,
                          top: `${25 + Math.sin(i * Math.PI / 2) * 40}%`,
                          animationDelay: `${i * 0.5}s`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-500">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>
              
              {/* Animated Feature List */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className={`flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-all duration-300 ${
                      hoveredCard === index ? 'animate-slide-in-left' : ''
                    }`}
                    style={{ animationDelay: `${featureIndex * 0.1}s` }}
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* WhatsApp Button */}
              <button 
                onClick={() => handleWhatsAppClick(service.whatsappMessage)}
                className={`w-full bg-gradient-to-r ${service.color} text-white py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover-tilt relative overflow-hidden group-hover:animate-pulse-3d`}
              >
                <span className="relative z-10">Start Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              {/* Card Border Glow */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                   style={{ boxShadow: `0 0 30px rgba(59, 130, 246, 0.3)` }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;