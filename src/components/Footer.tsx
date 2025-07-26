import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, Github } from 'lucide-react';

// Custom X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

interface FooterProps {
  onAboutClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAboutClick }) => {
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/profile.php?id=61562220029173", label: "Facebook" },
    { icon: <XIcon className="h-5 w-5" />, href: "https://x.com/boostflick", label: "X (Twitter)" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/boostflick.agency/", label: "Instagram" },
    { icon: <Youtube className="h-5 w-5" />, href: "https://www.youtube.com/@growwithrajyadav", label: "YouTube" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/gaurav-saini-349711338/?originalSubdomain=in", label: "LinkedIn" },
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/IGAURAVSAINI12", label: "GitHub" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceName: string) => {
    // First scroll to services section
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Optional: You can add logic here to highlight the specific service
    // For now, it will just scroll to the services section
  };

  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <button 
              onClick={scrollToTop}
              className="flex items-center space-x-3 mb-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl animate-float relative">
                <img 
                  src="/WhatsApp Image 2025-07-02 at 14.31.32_8d61cef6 (1).jpg" 
                  alt="BoostFlick Logo" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Boostflick
              </span>
            </button>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Accelerating digital success for businesses worldwide. We transform ideas into powerful digital solutions 
              that drive growth and maximize potential.
            </p>
            
            {/* Enhanced Social Media Icons */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`group w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover-lift animate-slide-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="group-hover:animate-pulse">
                    {social.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="animate-slide-in-up stagger-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                "Digital Marketing",
                "Personal Branding",
                "Brand Design", 
                "Consulting",
                "Web Development",
                "Mobile Apps"
              ].map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleServiceClick(service)}
                    className="hover:text-white transition-colors duration-200 hover:translate-x-2 transform inline-block relative group text-left w-full"
                  >
                    {service}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-slide-in-up stagger-2">
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                { name: "About", action: () => onAboutClick?.() },
                { name: "Our Team", action: () => onAboutClick?.() },
                { name: "Careers", action: () => onAboutClick?.() }, 
                { name: "Contact", action: () => scrollToSection('contact') },
                { name: "Blog", action: () => window.open('https://boost-flick.my.canva.site/', '_blank') }
              ].map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={item.action}
                    className="hover:text-white transition-colors duration-200 hover:translate-x-2 transform inline-block relative group text-left w-full"
                  >
                    {item.name}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center animate-slide-in-up stagger-3">
          <p className="text-gray-400 text-sm">
            © 2025 Boostflick. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {[
              { name: "Privacy Policy", action: () => scrollToSection('contact') },
              { name: "Terms of Service", action: () => scrollToSection('contact') }, 
              { name: "Cookie Policy", action: () => scrollToSection('contact') }
            ].map((policy, index) => (
              <button 
                key={index}
                onClick={policy.action}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200 relative group"
              >
                {policy.name}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
