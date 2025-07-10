import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Clock, Heart, Sparkles, Linkedin, Star, Instagram, MessageCircle } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ awards: 0, clients: 0, years: 0, satisfaction: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { icon: <Award className="h-8 w-8" />, value: 50, suffix: "+", label: "Awards Won", color: "from-yellow-500 to-orange-500" },
    { icon: <Users className="h-8 w-8" />, value: 500, suffix: "+", label: "Happy Clients", color: "from-blue-500 to-cyan-500" },
    { icon: <Clock className="h-8 w-8" />, value: 5, suffix: "+", label: "Years Experience", color: "from-green-500 to-emerald-500" },
    { icon: <Heart className="h-8 w-8" />, value: 98, suffix: "%", label: "Client Satisfaction", color: "from-red-500 to-pink-500" }
  ];

  const founder = {
    name: "Raj Yadav",
    title: "Founder & CEO",
    image: "/IMG.png",
    bio: "I'm Raj Yadav — a Social Media Marketer, Personal Branding Coach, and Founder of a full-service digital marketing agency. I help individuals and companies grow their brand visibility, generate leads, and drive business growth through strategic content, paid ads, and automation. From building powerful personal brands through engaging short-form content to running high-ROI Facebook and Google Ads campaigns, I specialize in delivering results that matter. My agency works with entrepreneurs, professionals, and established businesses — managing everything from content creation and influencer campaigns to lead funnels, email automation, and complete digital growth strategy.",
    expertise: [
      "Social Media Growth Strategy (Instagram, LinkedIn, YouTube)",
      "Viral Video Scripting & Short-Form Content Direction",
      "Personal Branding & Audience Building",
      "Paid Ads (Meta, Google)",
      "Lead Generation Funnels & Landing Pages",
      "WhatsApp + Email Marketing Automation",
      "Influencer & UGC Campaigns",
      "Full-Service Digital Marketing Execution"
    ],
    achievements: [
      "Generated Thousands of Leads Through Organic and Paid Social Campaigns",
      "Helped 500+ businesses scale",
      "Worked with Clients from Over 100+ Niches",
      "Helped Real Estate Client Sell 100+ Flats Using Digital Marketing",
      "Increased Client social media reach by 15x in 50 Days",
      "Helped 5 E-commerce Brands Cross ₹50 Lakhs in Revenue"
    ],
    social: {
      linkedin: "https://www.linkedin.com/company/boostflick/about/",
      instagram: "https://www.instagram.com/rao_rajyadav/",
      whatsapp: "919259382982"
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentValue = 0;
      const increment = stat.value / steps;
      
      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= stat.value) {
          currentValue = stat.value;
          clearInterval(timer);
        }
        
        setCounters(prev => ({
          ...prev,
          [index === 0 ? 'awards' : index === 1 ? 'clients' : index === 2 ? 'years' : 'satisfaction']: Math.floor(currentValue)
        }));
      }, stepDuration);
    });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = founder.social.whatsapp;
    const message = "Hi Raj! I just visited your website and I'm interested in learning more about your digital marketing services. Can you please help me grow my business?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-morphing"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
               Founder
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The visionary leader behind BoostFlick's success and innovation
          </p>
        </div>

        {/* Main Founder Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Founder Image & Info */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative perspective-1000 group">
              {/* Main Image Container */}
              <div className="relative w-80 h-80 mx-auto mb-8">
                {/* Floating Rings */}
                <div className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-blue-500 to-purple-500 opacity-30 animate-rotate-3d"></div>
                <div className="absolute inset-4 rounded-full border-2 border-gradient-to-r from-purple-500 to-pink-500 opacity-40 animate-float"></div>
                
                {/* Image */}
                <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-700 hover-lift">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Orbiting Particles */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-particle-float opacity-60"
                    style={{
                      left: `${50 + Math.cos(i * Math.PI / 3) * 45}%`,
                      top: `${50 + Math.sin(i * Math.PI / 3) * 45}%`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                ))}
              </div>

              {/* Founder Details */}
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-2 animate-text-glow">{founder.name}</h3>
                <p className="text-xl text-blue-600 font-semibold mb-4">{founder.title}</p>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-4 mb-6">
                  <a
                    href={founder.social.linkedin}
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-2xl animate-float"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href={founder.social.instagram}
                    className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-2xl animate-float"
                    style={{ animationDelay: '0.5s' }}
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-2xl animate-float"
                    style={{ animationDelay: '1s' }}
                  >
                    <MessageCircle className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Bio & Details */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white/80 glass-morphism rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-600 rounded-full animate-particle-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 10}s`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <Sparkles className="h-8 w-8 text-blue-600 mr-3 animate-spin" />
                  <h3 className="text-2xl font-bold text-gray-900">About Raj</h3>
                </div>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {founder.bio}
                </p>

                {/* Expertise */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-2 animate-pulse" />
                    Core Expertise
                  </h4>
                  <div className="space-y-3">
                    {founder.expertise.map((skill, index) => (
                      <div
                        key={index}
                        className={`px-4 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-xl text-sm font-medium hover:scale-105 transition-all duration-300 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}
                        style={{ animationDelay: `${index * 0.1 + 0.8}s` }}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Award className="h-5 w-5 text-yellow-500 mr-2 animate-pulse" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {founder.achievements.map((achievement, index) => (
                      <li 
                        key={index}
                        className={`flex items-center text-gray-600 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                        style={{ transitionDelay: `${index * 0.2 + 1.2}s` }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 animate-pulse"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => {
            const counterValue = index === 0 ? counters.awards : 
                              index === 1 ? counters.clients : 
                              index === 2 ? counters.years : counters.satisfaction;
            
            return (
              <div 
                key={index} 
                className={`text-center p-6 bg-white/80 glass-morphism rounded-2xl hover-3d group transition-all duration-500`}
                style={{ transitionDelay: `${index * 0.2 + 0.9}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl text-white mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-float`}>
                  {stat.icon}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                </div>
                
                <div className={`text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {counterValue}{stat.suffix}
                </div>
                
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                
                {/* Animated Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-1 mt-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-2000 ease-out`}
                    style={{ width: isVisible ? '100%' : '0%', transitionDelay: `${index * 0.2 + 1.2}s` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;