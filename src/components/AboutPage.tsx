import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Award, Users, Clock, Heart, Sparkles } from 'lucide-react';
import FounderCard from './FounderCard';

interface AboutPageProps {
  onBack: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ awards: 0, clients: 0, years: 0, satisfaction: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { icon: <Award className="h-8 w-8" />, value: 50, suffix: "+", label: "Awards Won", color: "from-yellow-500 to-orange-500" },
    { icon: <Users className="h-8 w-8" />, value: 500, suffix: "+", label: "Happy Clients", color: "from-blue-500 to-cyan-500" },
    { icon: <Clock className="h-8 w-8" />, value: 5, suffix: "+", label: "Years Experience", color: "from-green-500 to-emerald-500" },
    { icon: <Heart className="h-8 w-8" />, value: 98, suffix: "%", label: "Client Satisfaction", color: "from-red-500 to-pink-500" }
  ];

  const founders = [
    {
      name: "Raj Yadav",
      title: "Founder & CEO",
      image: "/IMG_20250702_214716cgdfg copy.jpg",
      bio: "With over 8 years of experience in digital marketing and business strategy, Raj leads BoostFlick's vision of transforming businesses through innovative digital solutions. Previously worked at top-tier agencies and helped scale multiple startups.",
      expertise: ["Digital Strategy", "Business Development", "Team Leadership", "Client Relations"],
      social: {
        linkedin: "https://www.linkedin.com/company/boostflick/about/",
        twitter: "https://x.com/boostflick",
        email: "boostflick@gmail.com",
        instagram: "https://www.instagram.com/rao_rajyadav/",
        whatsapp: "919259382982"
      }
    },
    {
      name: "Gaurav Saini",
      title: "Co-Founder & CTO",
      image: "/IMG_20250702_214716cgdfg copy.jpg",
      bio: "Gaurav Saini brings 8+ years of technical expertise in web development and digital innovation. He is a versatile Social Media Analyst with a strong foundation in technical strategy and web development. He combines data-driven social media insights with hands-on technical expertise to craft and optimize digital experiences that engage audiences and drive growth. With a deep understanding of analytics, content performance, and the latest web technologies, he helps brands build a powerful online presence that is both impactful and scalable. At Boostflick, he has played a key role in enhancing digital marketing strategies, improving platform performance, and driving measurable results for clients.",
      expertise: ["Full-Stack Development", "System Architecture", "Technical Innovation", "Product Development ", "Video Marketing", "Automation & Workflow Optimization","Content Strategy & Brand Development"],
      social: {
        linkedin: "https://www.linkedin.com/in/gaurav-saini-349711338/",
        twitter: "https://x.com/GauravSaini8014",
      
        instagram: "https://www.instagram.com/boostflick.agency/",
        whatsapp: "919368946391"
      }
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    animateCounters();
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-float-reverse"></div>
      </div>

      {/* Header with Back Button */}
      <div className="relative z-10 pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 group mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pb-20">
        {/* Company About Section */}
        <section className="mb-20">
          <div className={`text-center mb-16 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                BoostFlick
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Accelerating digital success for businesses worldwide through innovative solutions and strategic excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
Founded by Raj and Gaurav in 2023, BoostFlick emerged from a simple yet powerful vision: to democratize digital success for businesses of all sizes. We recognized that many companies struggled to navigate the complex digital landscape and needed a trusted partner to guide them through their transformation journey.
              </p>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            What started as a small team of passionate digital experts has grown into a full-service digital agency that serves clients across the globe. Over time, the company has worked with numerous creators, businesses, and brands. Our commitment to innovation, transparency, and results-driven strategies has helped hundreds of businesses achieve unprecedented growth.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
               Today, we specialize in digital marketing, personal branding, web development, and strategic consulting—always staying ahead of industry trends to deliver cutting-edge solutions that drive real business impact.
              </p>
            </div>
            
            {/* Mission & Vision Card */}
            <div className={`relative perspective-1000 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div className="relative preserve-3d hover-tilt group">
                <div className="bg-white/80 glass-morphism rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <Sparkles className="h-8 w-8 text-blue-600 mr-3 animate-spin" />
                      <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      To empower businesses with innovative digital solutions that accelerate growth, 
                      maximize potential, and create lasting competitive advantages in the digital marketplace.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      <Award className="h-8 w-8 text-purple-600 mr-3 animate-pulse" />
                      <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      To be the leading digital transformation partner that businesses trust to navigate 
                      the evolving digital landscape and achieve sustainable, long-term success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
            {stats.map((stat, index) => {
              const counterValue = index === 0 ? counters.awards : 
                                index === 1 ? counters.clients : 
                                index === 2 ? counters.years : counters.satisfaction;
              
              return (
                <div 
                  key={index} 
                  className="text-center p-6 bg-white/80 glass-morphism rounded-2xl hover-3d group transition-all duration-500"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl text-white mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-float`}>
                    {stat.icon}
                  </div>
                  
                  <div className={`text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {counterValue}{stat.suffix}
                  </div>
                  
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Founders Section */}
        <section>
          <div className={`text-center mb-16 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Founders
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The visionary leaders behind BoostFlick's success and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <FounderCard
                key={index}
                founder={founder}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
