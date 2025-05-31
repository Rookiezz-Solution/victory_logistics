import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { services as serviceItems } from '@/constants';
import { ArrowRight, Ship, FileText, Warehouse, GitFork, Truck, PlaneTakeoff, Combine, TrainTrack, Anchor, PackageSearch, Brain, Leaf, Globe as GlobeIcon } from 'lucide-react';
import ParallaxLayer from '@/components/ParallaxLayer';


const iconMap = {
  Ship: <Ship className="w-8 h-8 text-primary" />,
  FileText: <FileText className="w-8 h-8 text-primary" />,
  Warehouse: <Warehouse className="w-8 h-8 text-primary" />,
  GitFork: <GitFork className="w-8 h-8 text-primary" />,
  Truck: <Truck className="w-8 h-8 text-primary" />,
  PlaneTakeoff: <PlaneTakeoff className="w-8 h-8 text-primary" />,
  Combine: <Combine className="w-8 h-8 text-primary" />,
  TrainTrack: <TrainTrack className="w-8 h-8 text-primary" />,
  Anchor: <Anchor className="w-8 h-8 text-primary" />,
  PackageSearch: <PackageSearch className="w-8 h-8 text-primary" />,
  Brain: <Brain className="w-8 h-8 text-primary" />,
  Leaf: <Leaf className="w-8 h-8 text-primary" />,
  Globe: <GlobeIcon className="w-8 h-8 text-primary" />,
};

const ServiceCard = ({ service, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col items-start h-full border border-transparent hover:border-primary/50 group"
  >
    <div className="p-3 bg-primary/10 rounded-lg mb-5 group-hover:bg-primary transition-colors duration-300">
      {React.cloneElement(iconMap[service.icon] || <Ship className="w-8 h-8 text-primary" />, {className: "w-8 h-8 text-primary group-hover:text-white transition-colors duration-300"})}
    </div>
    <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary transition-colors duration-300">{service.name}</h3>
    <p className="text-neutral-600 text-sm mb-5 flex-grow">{service.shortDescription}</p>
    <Button asChild variant="link" className="text-primary hover:text-primary/80 px-0 font-medium group mt-auto">
      <Link to={`/services/${service.id}`}>
        Learn More <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </Button>
  </motion.div>
);

const ServicesPreview = () => {
  return (
    <div className="py-16 lg:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to meet your business needs. From freight forwarding to supply chain management, we've got you covered.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {serviceItems.slice(0, 8).map((service, index) => ( 
             <ParallaxLayer key={service.id} offset={20 + index * 5} className="h-full">
                <ServiceCard service={service} delay={index * 0.05} />
            </ParallaxLayer>
          ))}
        </div>
        {serviceItems.length > 8 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg group">
              <Link to="/services">
                View All Services <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ServicesPreview;