import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { COMPANY_NAME, INCORPORATION_DATE } from '@/constants';
import { ArrowRight } from 'lucide-react';
import { WHO_WE_ARE } from '../../assets';
const AboutPreview = () => {
  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">Who We Are</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-6">
              Pioneering <span className="text-primary">Logistics</span> Solutions Since {INCORPORATION_DATE.split(" ")[2]}
            </h2>
            <p className="text-neutral-600 mb-5 leading-relaxed text-lg">
              {COMPANY_NAME}, incorporated on {INCORPORATION_DATE}, embarked on a mission to redefine logistics with a client-centric and technology-driven approach. Though a young company, our foundations are built upon decades of collective industry experience from our leadership team.
            </p>
            <p className="text-neutral-600 mb-8 leading-relaxed text-lg">
              Our journey has been characterized by rapid growth, strategic partnerships, and an unwavering commitment to innovation. We quickly established ourselves by understanding the evolving needs of modern businesses and providing agile, responsive logistics services.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg group">
              <Link to="/about">
                Discover Our Journey <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <img 
              class="w-full h-auto object-cover aspect-[4/3]"
              alt="Victory Logistics team collaborating in a modern office"
             src={WHO_WE_ARE}/>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPreview;