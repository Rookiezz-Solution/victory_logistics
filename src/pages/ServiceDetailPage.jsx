
import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services as serviceItems, COMPANY_NAME } from '@/constants';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronsRight, Ship, FileText, Warehouse, GitFork, Truck, PlaneTakeoff, Combine, TrainTrack, Anchor, PackageSearch, Brain, Leaf, Globe as GlobeIcon, CheckSquare, DollarSign, Users, Clock, Info, Settings, BarChart3, ShieldQuestion } from 'lucide-react';
import ParallaxLayer from '@/components/ParallaxLayer';
import {FREIGHT_FORWARDING_HERO,FREIGHT_FORWARDING, FAQ ,OCEAN_FREIGHT,TECHNOLOGY, WAREHOUSE, 
  PACKAGING,RAIL_FREIGHT,CONSULTING,MULTIMODAL_TRANSPORT,CUSTOM_CLEARANCE,SUPPLY_CHAIN,ADVANTAGES,
  CARGO_LOGISTICS} from '../assets/index';

const iconMap = {
  Ship: <Ship className="w-12 h-12 text-primary" />,
  FileText: <FileText className="w-12 h-12 text-primary" />,
  Warehouse: <Warehouse className="w-12 h-12 text-primary" />,
  GitFork: <GitFork className="w-12 h-12 text-primary" />,
  Truck: <Truck className="w-12 h-12 text-primary" />,
  PlaneTakeoff: <PlaneTakeoff className="w-12 h-12 text-primary" />,
  Combine: <Combine className="w-12 h-12 text-primary" />,
  TrainTrack: <TrainTrack className="w-12 h-12 text-primary" />,
  Anchor: <Anchor className="w-12 h-12 text-primary" />,
  PackageSearch: <PackageSearch className="w-12 h-12 text-primary" />,
  Brain: <Brain className="w-12 h-12 text-primary" />,
  Leaf: <Leaf className="w-12 h-12 text-primary" />,
  Globe: <GlobeIcon className="w-12 h-12 text-primary" />,
};

const serviceImageMap = {
  "freight-forwarding": `${FREIGHT_FORWARDING_HERO}`, // Container ship with cranes
  "ocean-freight": `${OCEAN_FREIGHT}`, // Cargo ship on open ocean
  "customs-clearance": `${CUSTOM_CLEARANCE}` ,// Official documents and stamps
  "warehousing-distribution": `${WAREHOUSE}`, // Modern warehouse interior with shelves
  "supply-chain-management": `${SUPPLY_CHAIN}`, // Network diagram or interconnected globes
  "project-cargo-logistics": `${CARGO_LOGISTICS}`, // Heavy machinery being transported
  "multimodal-transport": `${MULTIMODAL_TRANSPORT}`, // Montage of ship, plane, truck, train
  "rail-freight": `${RAIL_FREIGHT}`, // Freight train on tracks
  "packaging-consolidation": `${PACKAGING}`, // Neatly packed boxes and crates
  "logistics-consulting": `${CONSULTING}`, // Professionals in a meeting with charts
  "faq":`${FAQ}`,
  "technology":`${TECHNOLOGY}`,
  "advantages":`${ADVANTAGES}`
};


const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = serviceItems.find(s => s.id === serviceId);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!service) {
    return (
      <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center text-center text-xl text-red-600 bg-neutral-50 px-4">
        <p>Sorry, the service you are looking for could not be found. <Link to="/services" className="text-primary underline">View all services.</Link></p>
      </div>
    );
  }

  const otherServices = serviceItems.filter(s => s.id !== serviceId).slice(0, 3);

  const sections = [
    {
      title: `Comprehensive Overview of ${service.name}`,
      icon: <Info className="w-6 h-6 text-primary mr-3" />,
      content: service.details || `Explore the full scope of our ${service.name} services. We delve into the critical aspects, common challenges, and effective strategies we employ. Our goal is to provide a clear understanding of how this service integrates into your broader logistics framework, ensuring optimal performance and value. We cover everything from initial planning to final execution, with a focus on transparency and client collaboration.`,
      image: serviceImageMap[service.id]
    },
    {
      title: "Our Strategic Approach & Methodology",
      icon: <CheckSquare className="w-6 h-6 text-primary mr-3" />,
      content: `At ${COMPANY_NAME}, our methodology for ${service.name} is built on precision, proactivity, and partnership. We start with an in-depth analysis of your requirements, followed by the development of a customized strategic plan. Our experienced team then executes this plan, utilizing advanced technology and industry best practices to ensure efficiency and reliability at every stage. Continuous monitoring and communication are key components of our approach.`,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: `Key Advantages of Our ${service.name} Service`,
      icon: <Users className="w-6 h-6 text-primary mr-3" />,
      content: `Choosing ${COMPANY_NAME} for ${service.name} provides distinct advantages. We offer ${service.keyBenefits ? service.keyBenefits.join(', ').toLowerCase() : 'unparalleled expertise, competitive pricing, and a commitment to reliability'}. Our dedicated client support, coupled with our robust global network and technological edge, ensures your shipments are handled with the utmost care and efficiency, delivering tangible benefits to your bottom line.`,
      image: serviceImageMap["advantages"]
    },
    {
      title: "Technology and Innovation in Service",
      icon: <Settings className="w-6 h-6 text-primary mr-3" />,
      content: `We leverage state-of-the-art technology to enhance our ${service.name} offerings. This includes advanced tracking systems, data analytics for route optimization, and digital platforms for seamless documentation and communication. Our commitment to innovation means we are always exploring new ways to improve efficiency, reduce costs, and provide greater value to our clients.`,
      image: serviceImageMap["technology"]
    },
    {
      title: "Case Studies & Success Stories",
      icon: <BarChart3 className="w-6 h-6 text-primary mr-3" />,
      content: `Discover how ${COMPANY_NAME} has successfully delivered ${service.name} solutions for businesses like yours. Our case studies highlight our ability to tackle complex challenges, meet tight deadlines, and achieve significant cost savings for our clients. (Placeholder: Specific success stories related to ${service.name} would be detailed here, showcasing tangible results and client testimonials.)`,
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Frequently Asked Questions (FAQ)",
      icon: <ShieldQuestion className="w-6 h-6 text-primary mr-3" />,
      content: `Here are some common questions about our ${service.name} services: 
      Q1: What is the typical transit time? (Answer specific to service)
      Q2: How is pricing determined? (Answer specific to service)
      Q3: What documentation is required? (Answer specific to service)
      (Placeholder: More FAQs relevant to ${service.name} would be listed here to provide quick answers and build trust.)`,
      image: serviceImageMap["faq"]
    }
  ];


  return (
    <div className="bg-white">
      <ParallaxLayer offset={-25} tag="section">
        <div className="relative md:py-28 text-white overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 shadow-sm opacity-80"
            style={{ backgroundImage: `url(${service.image})` }}/>

          <div className="container mx-auto relative z-10 text-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-block p-4 bg-white/10 rounded-xl mb-6"
            >
              {React.cloneElement(iconMap[service.icon] || <Ship />, {className: "w-12 h-12 md:w-16 md:h-16 text-neutral-700"})}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-4xl lg:text-5xl font-extrabold mb-4 text-black/80 shadow-sm"
            >
              {service.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl max-w-3xl mx-auto text-black"
            >
              {service.description}
            </motion.p>
          </div>
        </div>
      </ParallaxLayer>

      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            <main className="lg:col-span-2 space-y-12">
              {sections.map((section, index) => (
                <ParallaxLayer key={index} offset={10 + index * 3} tag="section">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="bg-neutral-50 p-6 sm:p-8 rounded-xl shadow-lg border border-neutral-200 hover:shadow-primary/10 transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      {section.icon}
                      <h2 className="text-2xl sm:text-3xl font-bold text-neutral-800">{section.title}</h2>
                    </div>
                    <div className="grid md:grid-cols-1 gap-6 items-center">
                      <img 
                        className="w-full h-56 object-cover rounded-lg mb-4 md:mb-0 shadow-md"
                        alt={`${section.title} - ${service.name}`}
                        src={section.image}
                      />
                      <div className="prose max-w-none text-neutral-700 leading-relaxed">
                        <p>{section.content}</p>
                      </div>
                    </div>
                  </motion.div>
                </ParallaxLayer>
              ))}
               <ParallaxLayer offset={30} tag="div">
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 p-8 bg-primary/10 rounded-xl text-center"
                  >
                    <h3 className="text-2xl font-semibold text-primary mb-4">Ready to Get Started with {service.name}?</h3>
                    <p className="text-neutral-700 mb-6 max-w-xl mx-auto">
                      Our team is eager to discuss your specific {service.name.toLowerCase()} requirements and provide a tailored solution that drives results for your business.
                    </p>
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg group">
                      <Link to="/contact#quote">
                        Request a Personalized Quote <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </motion.div>
               </ParallaxLayer>
            </main>

            <ParallaxLayer offset={20} tag="aside">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="lg:col-span-1 space-y-8 sticky top-24" 
              >
                <div className="bg-neutral-50 p-6 rounded-xl shadow-lg border border-neutral-200 hover:shadow-primary/10 transition-shadow">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-4 border-b pb-2 border-primary/30">Key Benefits of this Service</h3>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    {(service.keyBenefits || ["Customized Solutions", "Global Network Access", "Cost-Effective Options", "Real-Time Tracking", "Dedicated Support"]).map((benefit, idx) => (
                       <li key={idx} className="flex items-center"><ChevronsRight size={18} className="mr-2 text-primary flex-shrink-0" /> {benefit}</li>
                    ))}
                  </ul>
                </div>

                {otherServices.length > 0 && (
                  <div className="bg-neutral-50 p-6 rounded-xl shadow-lg border border-neutral-200 hover:shadow-primary/10 transition-shadow">
                    <h3 className="text-xl font-semibold text-neutral-800 mb-4 border-b pb-2 border-primary/30">Explore Other Services</h3>
                    <ul className="space-y-3">
                      {otherServices.map(s => (
                        <li key={s.id}>
                          <Link to={`/services/${s.id}`} className="flex items-center text-neutral-700 hover:text-primary font-medium group transition-colors py-1">
                            {React.cloneElement(iconMap[s.icon] || <Ship />, {className: "w-5 h-5 mr-3 text-primary/70 group-hover:text-primary"})}
                            {s.name}
                            <ArrowRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" className="mt-6 w-full border-primary text-primary hover:bg-primary hover:text-white">
                      <Link to="/services">View All Services</Link>
                    </Button>
                  </div>
                )}
              </motion.div>
            </ParallaxLayer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
