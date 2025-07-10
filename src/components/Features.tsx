import React, { useEffect, useRef, useState } from 'react';
import { Rocket, Shield, Zap, Target, Users, BarChart3 } from 'lucide-react';

const Features = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Accelerate your business growth with our optimized solutions that deliver results in record time.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Bank-level security protocols to protect your data and ensure complete peace of mind.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Smart Automation",
      description: "Intelligent automation that streamlines your workflows and maximizes efficiency.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Precise Targeting",
      description: "Reach your ideal customers with laser-focused marketing strategies that convert.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description: "Work with industry experts who understand your business and deliver exceptional results.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data-Driven",
      description: "Make informed decisions with comprehensive analytics and actionable insights.",
      color: "from-indigo-500 to-blue-500"
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

    const cards = sectionRef.current?.querySelectorAll('.feature-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-float-reverse"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-morphing"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 animate-slide-in-up">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Boostflick
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-in-up stagger-1">
            Discover the powerful features that make us the preferred choice for businesses worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`feature-card group p-8 bg-white rounded-3xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform preserve-3d hover-lift ${
                visibleItems.includes(index) ? 'animate-slide-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Floating Icon Container */}
              <div className="relative mb-6">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl animate-float`}>
                  {feature.icon}
                  
                  {/* Icon Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                </div>
                
                {/* Floating Particles around Icon */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${feature.color} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-700 animate-particle-float`}
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${10 + i * 20}%`,
                        animationDelay: `${i * 0.5}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {feature.description}
              </p>
              
              {/* Hover Accent Line */}
              <div className={`w-0 h-1 bg-gradient-to-r ${feature.color} rounded-full mt-4 group-hover:w-full transition-all duration-500`}></div>
              
              {/* 3D Depth Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;