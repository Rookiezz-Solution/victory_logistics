
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import AboutPreview from '@/components/home/AboutPreview';
import ContactFormSection from '@/components/home/ContactFormSection';
import ParallaxLayer from '@/components/ParallaxLayer';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ParallaxLayer offset={30} tag="section" >
       <AboutPreview />
      </ParallaxLayer>
      <ParallaxLayer offset={40} tag="section">
        <ServicesPreview />
      </ParallaxLayer>
      <ParallaxLayer offset={20} tag="section">
        <WhyChooseUs />
      </ParallaxLayer>
      <ParallaxLayer offset={50} tag="section" className="bg-gradient-to-b from-neutral-800 to-neutral-900">
        <Testimonials />
      </ParallaxLayer>
      <ParallaxLayer offset={60} tag="section" className="bg-neutral-100">
        <ContactFormSection />
      </ParallaxLayer>
    </>
  );
};

export default HomePage;