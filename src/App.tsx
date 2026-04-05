/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Droplets, 
  MessageCircle, 
  CheckCircle2, 
  Users, 
  Building2, 
  PartyPopper, 
  ArrowRight,
  Menu,
  X,
  Instagram,
  Facebook,
  Twitter,
  Utensils,
  Moon,
  Sun,
  Quote,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

import { generateServiceImage } from './services/imageService';

// --- Constants ---
const WHATSAPP_NUMBER = "918252345852";
const WHATSAPP_MESSAGE = "Hi I want to customize a bottle";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const BUSINESS_NAME = "Sip Style";

const CATEGORIES = [
  {
    id: 'weddings',
    title: 'Weddings',
    description: 'Elegant designs that match your special day\'s theme.',
    icon: <PartyPopper className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/wedding-water/800/600',
    prompt: 'A premium customized mineral water bottle for a luxury wedding, elegant label, floral background, 8k resolution, professional photography'
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Professional branding for conferences and meetings.',
    icon: <Building2 className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/corporate-water/800/600',
    prompt: 'A premium customized mineral water bottle for a corporate conference, professional branding, office setting background, 8k resolution'
  },
  {
    id: 'restaurants',
    title: 'Restaurants',
    description: 'Custom branded bottles to enhance your dining experience.',
    icon: <Utensils className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/restaurant-water/800/600',
    prompt: 'A premium customized mineral water bottle on a restaurant table, high-end dining atmosphere, 8k resolution'
  },
  {
    id: 'personal',
    title: 'Personal Celebrations',
    description: 'Birthdays, anniversaries, and private parties.',
    icon: <Users className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/party-water/800/600',
    prompt: 'A premium customized mineral water bottle for a birthday party, colorful and festive label, 8k resolution'
  }
];

const STEPS = [
  { title: 'Choose Size', description: 'Select from 250ml, 500ml, or 1L premium bottles.' },
  { title: 'Design Label', description: 'Send us your logo or theme, or let us design it for you.' },
  { title: 'Approve Proof', description: 'Review the digital mockup before we start production.' },
  { title: 'Fast Delivery', description: 'Freshly bottled and delivered to your doorstep.' }
];

const TESTIMONIALS = [
  {
    quote: "The customized bottles were the talk of our wedding! The design was elegant and the water quality was superb.",
    name: "Ananya Sharma",
    company: "Bride"
  },
  {
    quote: "Sip Style provided perfect branding for our annual tech summit. Professional service and fast delivery.",
    name: "Rahul Verma",
    company: "Tech Solutions Inc."
  },
  {
    quote: "Our restaurant's brand identity feels much more premium now with these custom bottles. Highly recommended!",
    name: "Chef Marco",
    company: "The Grand Bistro"
  }
];

// --- Components ---

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 4.5, ease: "circIn" }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col items-center text-center select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.5,
            delay: 1.5,
            ease: "backOut"
          }}
          className="space-y-2"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-none">
            Sip
          </h1>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-blue-500 uppercase leading-none">
            Style
          </h1>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Navbar = ({ isDarkMode, toggleDarkMode }: { isDarkMode: boolean, toggleDarkMode: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-slate-100 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Droplets className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">{BUSINESS_NAME}</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">How it Works</a>
            
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              Order Now
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 transition-all"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600 dark:text-slate-400">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-black border-b border-slate-100 dark:border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <a href="#services" onClick={() => setIsOpen(false)} className="block text-base font-medium text-slate-600 dark:text-slate-400">Services</a>
              <a href="#how-it-works" onClick={() => setIsOpen(false)} className="block text-base font-medium text-slate-600 dark:text-slate-400">How it Works</a>
              <a 
                href={WHATSAPP_LINK}
                className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 text-white rounded-xl font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                Contact on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 dark:bg-blue-600/5 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50 dark:bg-indigo-600/5 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 dark:bg-blue-600/10 rounded-full">
              Premium Customization
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
              Your Brand, <br />
              <span className="text-blue-600">Purely Refreshed.</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              Elevate your events with premium mineral water bottles customized with your unique branding. Perfect for weddings, corporate meetings, and special celebrations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 dark:hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl active:scale-95 w-full sm:w-auto"
              >
                <MessageCircle className="w-6 h-6 text-green-400" />
                Chat on WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services"
                className="px-8 py-4 bg-white dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-2xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-white/10 transition-all w-full sm:w-auto"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServiceImage = ({ prompt, fallbackImage, title }: { prompt: string, fallbackImage: string, title: string }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const generated = await generateServiceImage(prompt);
        if (generated) {
          setImageUrl(generated);
        }
      } catch (error) {
        console.error("Failed to generate image:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [prompt]);

  if (loading) {
    return (
      <div className="w-full h-full bg-slate-100 dark:bg-white/5 animate-pulse flex items-center justify-center">
        <Droplets className="w-8 h-8 text-blue-600/20 animate-bounce" />
      </div>
    );
  }

  return (
    <img 
      src={imageUrl || fallbackImage} 
      alt={title} 
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      referrerPolicy="no-referrer"
    />
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">Tailored for Every Occasion</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">We provide high-quality mineral water with labels that speak your language.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <motion.div 
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-zinc-900/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-white/5 group"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <ServiceImage prompt={cat.prompt} fallbackImage={cat.image} title={cat.title} />
                <div className="absolute top-4 left-4 p-3 bg-white/90 dark:bg-black/90 backdrop-blur rounded-2xl shadow-lg">
                  <div className="text-blue-600 dark:text-blue-400">
                    {cat.icon}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{cat.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{cat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 dark:bg-zinc-900/40 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative border border-slate-800 dark:border-white/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Simple 4-Step Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {STEPS.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="text-5xl font-black text-blue-500/20 mb-4">{idx + 1}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  {idx < STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-slate-800 dark:bg-white/10" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a 
                href={WHATSAPP_LINK}
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-600/20"
              >
                Start Your Design
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    "Premium Quality Mineral Water",
    "High-Resolution Custom Labels",
    "Eco-Friendly Recyclable Bottles",
    "Fast Turnaround Times",
    "Bulk Order Discounts",
    "Doorstep Delivery"
  ];

  return (
    <section className="py-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-8">Why Choose {BUSINESS_NAME}?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-blue-50 dark:bg-white/5 overflow-hidden shadow-inner border border-slate-100 dark:border-white/10">
               <img 
                src="https://picsum.photos/seed/water-bottle/800/800" 
                alt="Customized Bottle" 
                className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal opacity-80 dark:opacity-60"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-white/10 max-w-[200px]">
              <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">Trusted by 500+</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Event planners and businesses across the country.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-slate-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">What Our Clients Say</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Real experiences from people who chose Sip Style for their special moments.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 -translate-x-12 -translate-y-12 opacity-10 dark:opacity-20">
            <Quote className="w-32 h-32 text-blue-600" />
          </div>

          <div className="relative z-10 bg-white dark:bg-zinc-900/40 rounded-[2.5rem] p-10 md:p-16 shadow-xl border border-slate-100 dark:border-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl font-medium text-slate-800 dark:text-slate-200 mb-10 italic leading-relaxed">
                  "{TESTIMONIALS[currentIndex].quote}"
                </p>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">{TESTIMONIALS[currentIndex].name}</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{TESTIMONIALS[currentIndex].company}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-12">
              <button 
                onClick={prev}
                className="p-3 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={next}
                className="p-3 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-zinc-950 pt-20 pb-10 border-t border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Droplets className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">{BUSINESS_NAME}</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm mb-8">
              Making every sip special with customized mineral water bottles for your most important moments.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-white dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 text-sm transition-colors">Home</a></li>
              <li><a href="#services" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 text-sm transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 text-sm transition-colors">Process</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-4">
              <li className="text-slate-600 dark:text-slate-400 text-sm">WhatsApp: +91 8252345852</li>
              <li className="text-slate-600 dark:text-slate-400 text-sm">Email: sipstyle01@gmail.com</li>
              <li className="text-slate-600 dark:text-slate-400 text-sm">Location: Anandapur, Kolkata</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 dark:border-white/10 text-center">
          <p className="text-slate-400 dark:text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center group"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-3 px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </motion.a>
  );
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sip-style-theme');
      return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });
  const [showSplash, setShowSplash] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newValue = !prev;
      localStorage.setItem('sip-style-theme', newValue ? 'dark' : 'light');
      return newValue;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen bg-white dark:bg-black font-sans selection:bg-blue-100 selection:text-blue-900 transition-colors duration-300`}>
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <main>
            <Hero />
            <Services />
            <Features />
            <Testimonials />
            <HowItWorks />
          </main>
          <Footer />
          <WhatsAppButton />
        </motion.div>
      )}
    </div>
  );
}
