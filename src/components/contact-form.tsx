import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Updated Google Apps Script Web App URL - Replace with your actual deployed URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwdImimLfkZ-xBo7VEvVl16L6TEuljk-wu4LledFOhfY2qsiwwEUjyjpGYsCQN_Jjtb/exec';
      
      // Create URL with parameters for GET request
      const params = new URLSearchParams({
        email: email,
        timestamp: new Date().toISOString(),
        source: 'BoostFlick Website'
      });

      console.log('Submitting to:', `${GOOGLE_SCRIPT_URL}?${params.toString()}`);

      const response = await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, {
        method: 'GET',
        mode: 'no-cors', // Required for Google Apps Script
        redirect: 'follow'
      });

      // Since we're using no-cors mode, we can't read the response
      // We'll assume success if no error is thrown
      console.log('Request sent successfully');
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting email:', error);
      setSubmitError('Failed to subscribe. Please try again or contact us directly.');
      
      // Reset error after 5 seconds
      setTimeout(() => {
        setSubmitError('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "boostflick@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91-9259382982",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office",
      value: "Govindpuram, Ghaziabad, India",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-morphing"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to boost your business? Let's discuss how we can help you achieve your goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Sparkles className="h-6 w-6 mr-2 text-blue-600 animate-spin" />
              Let's Start a Conversation
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We'd love to hear about your project and discuss how we can help you achieve your business objectives. 
              Reach out to us using any of the methods below.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className={`flex items-center group hover-3d transition-all duration-500 ${
                    isVisible ? 'animate-slide-in-left' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center text-white mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl animate-float`}>
                    {info.icon}
                    <div className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-gray-900 text-lg mb-1">{info.title}</div>
                    <div className="text-gray-600 whitespace-pre-line">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Newsletter Subscription */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="bg-white/80 glass-morphism p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift relative overflow-hidden">
              {/* Form Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-600 rounded-full animate-particle-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 8}s`,
                    }}
                  />
                ))}
              </div>

              {!isSubmitted ? (
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Stay Updated with BoostFlick
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Enter your email and subscribe now to get the latest updates, tips, and exclusive offers from our team.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors duration-200">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 hover-lift text-lg"
                        placeholder="Enter your email address"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    {submitError && (
                      <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-xl">
                        {submitError}
                      </div>
                    )}
                    
                    <button
                      type="submit"
                      disabled={isSubmitting || !email}
                      className={`w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient text-white px-8 py-5 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover-lift flex items-center justify-center group relative overflow-hidden ${
                        isSubmitting || !email ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                          Subscribing...
                        </>
                      ) : (
                        <>
                          Subscribe Now
                          <Send className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                  </form>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    By subscribing, you agree to receive marketing emails from BoostFlick. You can unsubscribe at any time.
                  </p>
                </div>
              ) : (
                <div className="text-center py-12 relative z-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white mb-6 animate-scale-in">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Successfully Subscribed!</h3>
                  <p className="text-gray-600">Thank you for subscribing to our newsletter. You'll receive updates and exclusive content from BoostFlick.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;