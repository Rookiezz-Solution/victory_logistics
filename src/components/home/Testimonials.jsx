import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData } from '@/constants';
import ParallaxLayer from '@/components/ParallaxLayer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

const TestimonialCard = ({ testimonial, imageSrc }) => (
  <div className="bg-neutral-800 p-8 rounded-xl shadow-2xl flex flex-col items-center text-center border border-neutral-700 h-full hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300 mx-2">
    <Quote className="w-10 h-10 text-primary mb-4 transform rotate-180" />
    <p className="text-neutral-300 italic mb-6 text-sm leading-relaxed flex-grow">"{testimonial.quote}"</p>
    <div className="flex items-center mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-600'}`} />
      ))}
    </div>
    <img 
      className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-2 border-primary"
      alt={`Portrait of ${testimonial.name}`}
      src={imageSrc} 
    />
    <h4 className="font-semibold text-lg text-white">{testimonial.name}</h4>
    <p className="text-xs text-primary">{testimonial.company}</p>
  </div>
);

const Testimonials = () => {
  const imageSources = [
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop", // Rohan
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop", // Priya
    "https://images.unsplash.com/photo-1557862921-37829c7ef0f1?q=80&w=2070&auto=format&fit=crop", // Amit
    "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=1941&auto=format&fit=crop", // Sunita
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop", // Vikram
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop", // Anjali
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop", // Rajesh
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop", // Deepa
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop", // Karan
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"  // Nisha
  ];

  return (
    <div className="py-16 lg:py-24 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
            Hear from businesses who trust Victory Logistics with their critical supply chain needs.
          </p>
        </motion.div>
        
        <ParallaxLayer offset={20} className="w-full">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
              })
            ]}
            className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-1">
              {testimonialsData.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-1">
                  <div className="p-1 h-full">
                    <TestimonialCard testimonial={testimonial} imageSrc={imageSources[index % imageSources.length]} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white bg-primary/50 hover:bg-primary/80 -left-4 sm:-left-8 md:-left-10" />
            <CarouselNext className="text-white bg-primary/50 hover:bg-primary/80 -right-4 sm:-right-8 md:-right-10" />
          </Carousel>
        </ParallaxLayer>
      </div>
    </div>
  );
};

export default Testimonials;