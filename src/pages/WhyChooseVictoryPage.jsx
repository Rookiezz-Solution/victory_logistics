
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ParallaxLayer from '@/components/ParallaxLayer';
import { COMPANY_NAME } from '@/constants';
import { ArrowRight, CheckCircle, Target, Users, TrendingUp, MapPin, Award, Lightbulb, ShieldCheck, Globe, Zap } from 'lucide-react';
import { LEADING_LOGISTICS, TECHNOLOGY } from '../assets';

const sectionIconMap = {
  Target: <Target className="w-10 h-10 text-primary" />,
  Users: <Users className="w-10 h-10 text-primary" />,
  TrendingUp: <TrendingUp className="w-10 h-10 text-primary" />,
  MapPin: <MapPin className="w-10 h-10 text-primary" />,
  Award: <Award className="w-10 h-10 text-primary" />,
  Lightbulb: <Lightbulb className="w-10 h-10 text-primary" />,
  ShieldCheck: <ShieldCheck className="w-10 h-10 text-primary" />,
  Globe: <Globe className="w-10 h-10 text-primary" />,
  Zap: <Zap className="w-10 h-10 text-primary" />,
};

const WhyChooseVictoryPage = () => {
  const pageSections = [
    {
      id: "our-edge",
      title: "The Victory Logistics Edge",
      icon: "Award",
      content: `At ${COMPANY_NAME}, we don't just move cargo; we deliver peace of mind. Our distinct edge lies in a combination of deep industry expertise, a relentless commitment to customer satisfaction, and innovative solutions tailored to the unique challenges of the Indian and global markets. We understand that efficient logistics is the backbone of your success, and we strive to be more than just a vendor – we aim to be your strategic logistics partner.`,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
      points: [
        "Decades of combined experience in diverse logistics sectors.",
        "Proactive problem-solving and risk management.",
        "Transparent communication and real-time tracking.",
        "Commitment to ethical practices and sustainability."
      ]
    },
    {
      id: "our-process",
      title: "Our Streamlined Process",
      icon: "TrendingUp",
      content: `We follow a meticulously designed process to ensure seamless execution from start to finish. This systematic approach minimizes delays, optimizes costs, and guarantees the safety and integrity of your shipments. Our process is built on clarity, efficiency, and continuous improvement, adapting to the dynamic nature of global trade.`,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      steps: [
        { name: "Consultation & Analysis", description: "Understanding your specific needs and challenges." },
        { name: "Strategic Planning", description: "Designing a tailored logistics solution with optimal routes and modes." },
        { name: "Execution & Coordination", description: "Managing all aspects of the shipment with precision." },
        { name: "Monitoring & Reporting", description: "Providing real-time updates and transparent communication." },
        { name: "Review & Optimization", description: "Continuously seeking ways to improve service and efficiency." }
      ]
    },
    {
      id: "best-in-india",
      title: "Leading Logistics in India",
      icon: "MapPin",
      content: `Victory Logistics has rapidly emerged as a preferred logistics partner in India due to our profound understanding of the local landscape, regulatory environment, and infrastructure. We leverage this knowledge to navigate complexities unique to the Indian market, offering our clients a significant competitive advantage. Our expansive domestic network, combined with global reach, makes us a one-stop solution for businesses operating in and out of India.`,
      image: `${LEADING_LOGISTICS}`,
      strengths: [
        "Comprehensive knowledge of Indian customs and trade regulations.",
        "Strong relationships with local authorities and transport providers.",
        "Strategically located warehousing facilities across key Indian hubs.",
        "Expertise in handling diverse cargo types specific to Indian industries."
      ]
    },
     {
      id: "technology-innovation",
      title: "Technology & Innovation",
      icon: "Lightbulb",
      content: `We embrace technology as a key enabler for superior logistics services. From advanced Warehouse Management Systems (WMS) and Transport Management Systems (TMS) to AI-powered route optimization and real-time tracking portals, we invest in cutting-edge tools. This allows us to provide greater visibility, enhance efficiency, reduce errors, and offer predictive insights to our clients, keeping them ahead in a fast-paced market.`,
      image: `${TECHNOLOGY}`,
      techPoints: [
        "Advanced WMS and TMS for streamlined operations.",
        "Real-time GPS tracking and shipment visibility.",
        "Data analytics for performance monitoring and optimization.",
        "Secure digital platforms for documentation and communication."
      ]
    }
  ];

  return (
    <div className="bg-white">
      <ParallaxLayer offset={-20} tag="section">
        <div className="relative py-20 md:py-28 bg-gradient-to-br from-blue-100 to-blue-700 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Award className="w-full h-full text-blue-400 transform scale-150 rotate-[15deg]" />
          </div>
          <div className="container mx-auto relative z-10 text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl lg:text-5xl font-extrabold mb-4"
            >
              Why Choose <span className="text-yellow-300">{COMPANY_NAME}?</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100/90"
            >
              Discover the strategic advantages, proven processes, and unwavering commitment that make us a leader in the logistics industry.
            </motion.p>
          </div>
        </div>
      </ParallaxLayer>

      <div className="py-12 lg:py-20">
        {pageSections.map((section, idx) => (
          <ParallaxLayer key={section.id} offset={10 + idx * 5} tag="section">
            <div className={`py-10 lg:py-16 ${idx % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}`}>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={`order-2 ${idx % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img 
                      className="w-full h-auto max-h-[450px] object-cover rounded-xl shadow-2xl"
                      alt={`${section.title} - Victory Logistics`}
                      src={section.image}
                    />
                  </div>
                  <div className={`order-1 ${idx % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center mb-5">
                      <div className="p-3 bg-primary/10 rounded-lg mr-4">
                        {React.cloneElement(sectionIconMap[section.icon] || <Award />, {className: "w-8 h-8 text-primary"})}
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800">{section.title}</h2>
                    </div>
                    <p className="text-neutral-600 leading-relaxed mb-6">{section.content}</p>
                    {section.points && (
                      <ul className="space-y-3 mb-6">
                        {section.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start text-neutral-700">
                            <CheckCircle size={20} className="mr-3 mt-1 text-green-500 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.steps && (
                      <div className="space-y-4 mb-6">
                        {section.steps.map((step, sIdx) => (
                          <div key={sIdx} className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                            <h4 className="font-semibold text-primary">{sIdx + 1}. {step.name}</h4>
                            <p className="text-sm text-neutral-600 ml-1">{step.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                     {section.strengths && (
                      <ul className="space-y-3 mb-6">
                        {section.strengths.map((strength, sIdx) => (
                          <li key={sIdx} className="flex items-start text-neutral-700">
                            <CheckCircle size={20} className="mr-3 mt-1 text-green-500 flex-shrink-0" />
                            <span>{strength}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.techPoints && (
                      <ul className="space-y-3 mb-6">
                        {section.techPoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start text-neutral-700">
                            <CheckCircle size={20} className="mr-3 mt-1 text-green-500 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </ParallaxLayer>
        ))}
      </div>
      
      <ParallaxLayer offset={30} tag="section">
        <div className="py-16 lg:py-20 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold mb-6 text-white"
            >
              Partner with {COMPANY_NAME} Today!
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-neutral-300 mb-10 max-w-xl mx-auto"
            >
              Experience the difference that a dedicated, expert logistics partner can make. Let us help you achieve your business goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button asChild size="lg" className="bg-primary hover:bg-primary/85 text-white font-semibold px-10 py-4 text-lg rounded-lg group">
                <Link to="/contact#quote">
                  Get Your Custom Quote <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </ParallaxLayer>
    </div>
  );
};

export default WhyChooseVictoryPage;