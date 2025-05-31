import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_NAME, INCORPORATION_DATE, CIN_NUMBER, DIRECTORS, coreValues, milestones } from '@/constants';
import { Building, Info, CalendarDays, Users, Target, CheckCircle, Lightbulb, ShieldCheck } from 'lucide-react';

const iconMap = {
    Users: <Users className="w-10 h-10 text-primary" />,
    ShieldCheck: <ShieldCheck className="w-10 h-10 text-primary" />,
    Lightbulb: <Lightbulb className="w-10 h-10 text-primary" />,
};

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-blue-100 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Building className="w-full h-full text-blue-400 transform scale-150 rotate-[15deg]" />
        </div>
        <div className="container mx-auto relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl lg:text-5xl font-extrabold mb-4"
          >
            About <span className="text-yellow-300">{COMPANY_NAME}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100/90"
          >
            Pioneering client-centric logistics with innovation and decades of collective industry experience.
          </motion.p>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-6">
                Our <span className="text-primary">Journey</span>
              </h2>
              <p className="text-neutral-700 mb-4 leading-relaxed text-lg">
                {COMPANY_NAME}, incorporated on <strong className="text-primary">{INCORPORATION_DATE}</strong> (CIN: {CIN_NUMBER}), embarked on a mission to redefine logistics with a client-centric and technology-driven approach. Though a young company, our foundations are built upon decades of collective industry experience from our leadership team.
              </p>
              <p className="text-neutral-700 mb-4 leading-relaxed text-lg">
                Our journey has been characterized by rapid growth, strategic partnerships, and an unwavering commitment to innovation. We quickly established ourselves by understanding the evolving needs of modern businesses and providing agile, responsive logistics services.
              </p>
              <p className="text-neutral-700 leading-relaxed text-lg">
                Today, {COMPANY_NAME} is proud to serve a diverse clientele, offering comprehensive solutions that span the globe. We are registered with ROC-Bangalore and maintain an active status, continually striving to exceed expectations and drive success for our partners.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              <img  class="w-full h-auto object-cover aspect-video" alt="Team brainstorming logistics solutions" src="https://images.unsplash.com/photo-1605732562742-3023a888e56e" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-neutral-800 text-center mb-12 lg:mb-16"
          >
            Company <span className="text-primary">Information</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto bg-neutral-50 p-8 rounded-xl shadow-xl border border-neutral-200"
          >
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {[
                { label: "Company Name", value: COMPANY_NAME, icon: <Building className="text-primary" /> },
                { label: "CIN", value: CIN_NUMBER, icon: <Info className="text-primary" /> },
                { label: "Incorporation Date", value: INCORPORATION_DATE, icon: <CalendarDays className="text-primary" /> },
                { label: "Status", value: "Active", icon: <CheckCircle className="text-green-500" /> },
              ].map(item => (
                <div key={item.label} className="flex items-start">
                  <div className="mr-3 mt-1 flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-sm text-neutral-500">{item.label}</p>
                    <p className="font-semibold text-neutral-800">{item.value}</p>
                  </div>
                </div>
              ))}
              <div className="sm:col-span-2">
                <div className="flex items-start">
                  <div className="mr-3 mt-1 flex-shrink-0"><Users className="text-primary" /></div>
                  <div>
                    <p className="text-sm text-neutral-500">Directors</p>
                    {DIRECTORS.map(dir => (
                      <p key={dir.din} className="font-semibold text-neutral-800">{dir.name} <span className="text-xs text-neutral-500">(DIN: {dir.din})</span></p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
        <section className="py-16 lg:py-24 bg-primary/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl font-bold text-neutral-800 text-center mb-12 lg:mb-16">
                    Our Core <span className="text-primary">Values</span>
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {coreValues.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-lg text-center border border-transparent hover:border-primary/30 transition-all"
                        >
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                                {iconMap[value.icon] || <Target className="w-10 h-10 text-primary" />}
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-800 mb-3">{value.title}</h3>
                            <p className="text-neutral-600 text-sm leading-relaxed">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

      {/* Milestones Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-neutral-800 text-center mb-12 lg:mb-16"
          >
            Our <span className="text-primary">Milestones</span>
          </motion.h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 rounded-full transform -translate-x-1/2"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className={`mb-10 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 order-2'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-xl border border-neutral-200">
                    <h4 className="text-xl font-semibold text-primary mb-1">{milestone.year}</h4>
                    <p className="text-sm text-neutral-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-10 h-10 bg-primary rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-md flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white"/>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;