import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services as serviceItems, COMPANY_NAME } from '@/constants';
import { ArrowRight, Ship, FileText, Warehouse, GitFork, Truck, PlaneTakeoff, Combine, TrainTrack, Anchor, PackageSearch, Brain, Leaf, Globe as GlobeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParallaxLayer from '@/components/ParallaxLayer';

const iconMap = {
  Ship: <Ship className="w-10 h-10 text-primary" />,
  FileText: <FileText className="w-10 h-10 text-primary" />,
  Warehouse: <Warehouse className="w-10 h-10 text-primary" />,
  GitFork: <GitFork className="w-10 h-10 text-primary" />,
  Truck: <Truck className="w-10 h-10 text-primary" />,
  PlaneTakeoff: <PlaneTakeoff className="w-10 h-10 text-primary" />,
  Combine: <Combine className="w-10 h-10 text-primary" />,
  TrainTrack: <TrainTrack className="w-10 h-10 text-primary" />,
  Anchor: <Anchor className="w-10 h-10 text-primary" />,
  PackageSearch: <PackageSearch className="w-10 h-10 text-primary" />,
  Brain: <Brain className="w-10 h-10 text-primary" />,
  Leaf: <Leaf className="w-10 h-10 text-primary" />,
  Globe: <GlobeIcon className="w-10 h-10 text-primary" />,
};

const ServicesOverviewPage = () => {
  return (
    <div className="bg-neutral-50">
      {/* Hero Section for Services */}
      <ParallaxLayer offset={-20} tag="section">
        <div className="relative py-20 md:py-28 bg-gradient-to-br from-primary to-blue-700 text-white overflow-hidden">
           <div className="absolute inset-0 opacity-10">
              <Truck className="w-full h-full text-blue-400 transform scale-150 -rotate-[5deg]" />
           </div>
          <div className="container mx-auto relative z-10 text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl lg:text-5xl font-extrabold mb-4"
            >
              Our Comprehensive <span className="text-yellow-300">Logistics Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100/90"
            >
              Explore our wide range of services designed to meet all your supply chain and transportation needs, ensuring efficiency and reliability across every stage of your logistics journey.
            </motion.p>
          </div>
        </div>
      </ParallaxLayer>

      {/* Services Grid */}
      <ParallaxLayer offset={10} tag="section">
        <div className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {serviceItems.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col items-start h-full border border-transparent hover:border-primary/50 group"
                >
                  <div className="p-4 bg-primary/10 rounded-lg mb-5 group-hover:bg-primary transition-colors duration-300">
                     {React.cloneElement(iconMap[service.icon] || <Ship className="w-10 h-10 text-primary" />, {className: "w-10 h-10 text-primary group-hover:text-white transition-colors duration-300"})}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary transition-colors duration-300">{service.name}</h3>
                  <p className="text-neutral-600 text-sm mb-5 flex-grow">{service.description}</p>
                  <Button asChild variant="link" className="text-primary hover:text-primary/80 px-0 mt-auto font-medium group">
                    <Link to={`/services/${service.id}`}>
                      Learn More <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </ParallaxLayer>

      {/* Call to Action Section */}
      <ParallaxLayer offset={30} tag="section">
        <div className="py-16 lg:py-20 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold mb-6"
            >
              Ready to Optimize Your Logistics?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-neutral-300 mb-10 max-w-xl mx-auto"
            >
              Let {COMPANY_NAME} be your trusted partner. Contact us today for a personalized consultation and quote.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button asChild size="lg" className="bg-primary hover:bg-primary/85 text-white font-semibold px-10 py-4 text-lg rounded-lg group">
                <Link to="/contact#quote">
                  Request a Quote <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </ParallaxLayer>
    </div>
  );
};

export default ServicesOverviewPage;