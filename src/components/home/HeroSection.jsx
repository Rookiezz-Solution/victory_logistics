
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { heroImages as defaultHeroImages, COMPANY_NAME } from '@/constants';
import { ChevronRight } from 'lucide-react';
import { HERO_IMAGE_2,HERO_IMAGE_3 } from '../../assets';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const activeHeroImages = [
    defaultHeroImages[0], 
    defaultHeroImages[1],
    defaultHeroImages[2] // Added one more image as requested
  ].filter(Boolean); 

  useEffect(() => {
    if (activeHeroImages.length === 0) return; 

    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % activeHeroImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [activeHeroImages.length]);

  const heroImageSources = [
    `https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop`, // Cargo Ship
    `${HERO_IMAGE_2}`,
    `${HERO_IMAGE_3}`
  ];
  
  const imagesToDisplay = activeHeroImages.map((img, index) => ({
    ...img,
    src: heroImageSources[index % heroImageSources.length] 
  }));


  if (imagesToDisplay.length === 0) {
    return (
      <section className="relative h-[calc(100vh-5rem)] min-h-[600px] sm:min-h-[700px] bg-neutral-800 flex items-center justify-center text-white">
        <p>Hero images are currently unavailable.</p>
      </section>
    );
  }
  
  const currentImage = imagesToDisplay[currentImageIndex];

  console.log(activeHeroImages.length)
  return (
    <section className="relative h-screen min-h-[600px] sm:min-h-[700px] text-white overflow-hidden flex items-center justify-center">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex} 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 2, ease: [0.42, 0, 0.58, 1] }}
          className="absolute inset-0 z-0"
        >
          <img 
            className="w-full h-full object-cover"
            alt={currentImage.alt}
            src={currentImage.src} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </motion.div>
      </AnimatePresence>
      
      <div className="container mx-auto relative z-10 flex flex-col items-start text-left px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
            Global Logistics Excellence
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-shadow-md max-w-3xl"
        >
          <span className="block">{COMPANY_NAME.split(" ")[0]} Logistics:</span>
          Your Partner in <span className="text-primary">Smart</span> Supply Chain Solutions.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="text-lg md:text-xl mb-10 max-w-2xl text-neutral-200 text-shadow-sm"
        >
          Delivering reliable, efficient, and innovative logistics services tailored to fuel your business growth and success globally.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-white hover:text-primary text-white font-bold text-lg px-10 py-7 h-auto rounded-lg shadow-xl transition-all duration-300 group"
            asChild
          >
            <Link to="/contact#quote">
              Get a Free Quote <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-neutral-900 bg-white/90 hover:bg-primary hover:text-white font-bold text-lg px-10 py-7 h-auto rounded-lg shadow-xl transition-all duration-300 group"
            asChild
          >
            <Link to="/services">
              Explore Services <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
      {imagesToDisplay.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-2.5">
          {imagesToDisplay.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ease-out ${currentImageIndex === index ? 'bg-primary scale-125' : 'bg-white/40 hover:bg-white/70'}`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSection;
