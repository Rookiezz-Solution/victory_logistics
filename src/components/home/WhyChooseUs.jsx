
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Users, Zap, Award, Lightbulb } from 'lucide-react';
import ParallaxLayer from '@/components/ParallaxLayer';

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 mb-4 text-white group-hover:text-yellow-300 transition-colors duration-300" />,
    title: "Reliability & Trust",
    description: "Decades of experience ensuring your cargo is safe and delivered on time, every time.",
    color: "bg-blue-600",
    hoverColor: "hover:bg-blue-700"
  },
  {
    icon: <Globe className="w-10 h-10 mb-4 text-white group-hover:text-yellow-300 transition-colors duration-300" />,
    title: "Global Network",
    description: "Extensive partnerships worldwide, providing seamless logistics solutions across continents.",
    color: "bg-green-600",
    hoverColor: "hover:bg-green-700"
  },
  {
    icon: <Users className="w-10 h-10 mb-4 text-white group-hover:text-yellow-300 transition-colors duration-300" />,
    title: "Customer-Centric",
    description: "Dedicated support and tailored solutions to meet your unique business requirements.",
    color: "bg-purple-600",
    hoverColor: "hover:bg-purple-700"
  },
  {
    icon: <Zap className="w-10 h-10 mb-4 text-white group-hover:text-yellow-300 transition-colors duration-300" />,
    title: "Efficiency & Speed",
    description: "Optimized processes and technology for the fastest possible transit times.",
    color: "bg-red-600",
    hoverColor: "hover:bg-red-700"
  },
  {
    icon: <Lightbulb className="w-10 h-10 mb-4 text-white group-hover:text-yellow-300 transition-colors duration-300" />,
    title: "Innovative Solutions",
    description: "Constantly adapting and implementing cutting-edge technology for superior service.",
    color: "bg-indigo-600",
    hoverColor: "hover:bg-indigo-700"
  },
  {
    icon: <Award className="w-10 h-10 mb-4 text-white group-hover:text-yellow-300 transition-colors duration-300" />,
    title: "Proven Excellence",
    description: "A track record of success and industry recognition for outstanding performance.",
    color: "bg-pink-600",
    hoverColor: "hover:bg-pink-700"
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-16 lg:py-24 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Why Choose <span className="text-primary">Victory Logistics?</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
            We are committed to providing exceptional logistics services that drive your business forward. Discover the Victory advantage.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ParallaxLayer key={index} offset={15 + (index % 3) * 10} className="h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ y: -10, boxShadow: "0px 20px 30px -10px rgba(var(--primary-rgb), 0.3)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className={`p-8 rounded-xl shadow-2xl flex flex-col items-center text-center h-full transition-all duration-400 ease-in-out group ${feature.color} ${feature.hoverColor} border-2 border-transparent hover:border-yellow-300`}
                style={{'--primary-rgb': 'var(--primary)'}}
              >
                <motion.div 
                  className="mb-4 p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300"
                  whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1}}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">{feature.title}</h3>
                <p className="text-neutral-200 text-sm leading-relaxed group-hover:text-neutral-100 transition-colors duration-300">{feature.description}</p>
              </motion.div>
            </ParallaxLayer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
