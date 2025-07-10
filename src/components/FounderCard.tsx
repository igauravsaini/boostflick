import React from 'react';
import { Linkedin, Instagram, MessageCircle } from 'lucide-react';

interface FounderCardProps {
  founder: {
    name: string;
    title: string;
    image: string;
    bio: string;
    expertise: string[];
    social: {
      linkedin: string;
      twitter: string;
      email: string;
      instagram?: string;
      whatsapp?: string;
    };
  };
  index: number;
  isVisible: boolean;
}

const FounderCard: React.FC<FounderCardProps> = ({ founder, index, isVisible }) => {
  // Use the new image for the first founder (Raj Yadav)
  const imageSource = founder.name === "Raj Yadav" ? "/IMG.png" : founder.image;

  const handleWhatsAppClick = () => {
    if (!founder.social.whatsapp) return;
    
    let message = "";
    if (founder.name === "Raj Yadav") {
      message = "Hi Raj! I just visited your website and I'm interested in learning more about your digital marketing services. Can you please help me grow my business?";
    } else if (founder.name === "Gaurav Saini") {
      message = "Hi Gaurav! I visited your website and I'm interested in your technical services and web development solutions. Can you please help me with my project?";
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${founder.social.whatsapp}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      className={`bg-white/80 glass-morphism rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift group ${
        isVisible ? 'animate-slide-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.3}s` }}
    >
      {/* Founder Image */}
      <div className="relative mb-6">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
          <img
            src={imageSource}
            alt={founder.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Floating Ring */}
        <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full border-4 border-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-rotate-3d"></div>
      </div>

      {/* Founder Info */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
        <p className="text-lg text-blue-600 font-semibold mb-4">{founder.title}</p>
        <p className="text-gray-600 leading-relaxed">{founder.bio}</p>
      </div>

      {/* Expertise */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-3">Expertise</h4>
        <div className="flex flex-wrap gap-2">
          {founder.expertise.map((skill, skillIndex) => (
            <span
              key={skillIndex}
              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-4">
        <a
          href={founder.social.linkedin}
          className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href={founder.social.instagram || "#"}
          className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Instagram className="h-5 w-5" />
        </a>
        {founder.social.whatsapp && (
          <button
            onClick={handleWhatsAppClick}
            className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default FounderCard;