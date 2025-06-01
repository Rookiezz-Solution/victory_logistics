import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { COMPANY_NAME, ADDRESS, CONTACT_PHONE_1, CONTACT_PHONE_2, CONTACT_EMAIL_1, CONTACT_EMAIL_2, INSTAGRAM_URL, FACEBOOK_URL, ADDRESS_COORDINATES } from '@/constants';
import { Send, Mail, Phone, MapPin, Instagram, Facebook, MessageSquare } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import ParallaxLayer from '@/components/ParallaxLayer';

const MapComponent = () => {
  const position = [ADDRESS_COORDINATES.lat,ADDRESS_COORDINATES.lng]; // Latitude, Longitude

  return (
    <MapContainer center={position} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>A marker in London.</Popup>
      </Marker>
    </MapContainer>
  );
};

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#quote') {
      const quoteSection = document.getElementById('contact-form-section');
      if (quoteSection) {
        quoteSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Page Form Data:", formData);
    toast({
      title: "Message Received!",
      description: `Thanks, ${formData.name}! We've got your inquiry and will respond shortly.`,
      variant: "default",
      duration: 7000,
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactMethods = [
    { icon: <Phone size={24} className="text-primary" />, title: "Call Us", lines: [CONTACT_PHONE_1, CONTACT_PHONE_2], hrefs: [`tel:${CONTACT_PHONE_1}`, `tel:${CONTACT_PHONE_2}`] },
    { icon: <Mail size={24} className="text-primary" />, title: "Email Us", lines: [CONTACT_EMAIL_1, CONTACT_EMAIL_2], hrefs: [`mailto:${CONTACT_EMAIL_1}`, `mailto:${CONTACT_EMAIL_2}`] },
    { icon: <MapPin size={24} className="text-primary" />, title: "Our Office", lines: [ADDRESS], hrefs: [`https://www.openstreetmap.org/?mlat=${ADDRESS_COORDINATES.lat}&mlon=${ADDRESS_COORDINATES.lng}#map=16/${ADDRESS_COORDINATES.lat}/${ADDRESS_COORDINATES.lng}`] },
  ];

  return (
    <div className="bg-white">
      {/* Contact Hero Section */}
      <ParallaxLayer offset={-30} tag="section">
        <div className="relative py-20 md:py-28 bg-gradient-to-b from-blue-100 to-blue-700 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <MessageSquare className="w-full h-full text-blue-400 transform scale-150 rotate-[-10deg]" />
          </div>
          <div className="container mx-auto relative z-10 text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl lg:text-5xl font-extrabold mb-4"
            >
              Contact <span className="text-yellow-300">Victory Logistics</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100/90"
            >
              We're ready to assist you with your logistics needs. Reach out today for inquiries, quotes, or any support you require.
            </motion.p>
          </div>
        </div>
      </ParallaxLayer>

      {/* Contact Form & Info Section */}
      <ParallaxLayer offset={20} tag="section">
        <div id="contact-form-section" className="py-16 lg:py-24 bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-3 bg-white p-8 sm:p-10 rounded-xl shadow-xl border border-neutral-200 hover:shadow-primary/10 transition-shadow"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-800 mb-1 text-primary">Send Us a Message</h2>
                <p className="text-neutral-600 mb-8 text-sm">Fill out the form and our team will get back to you within 24 hours.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name-contact" className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
                    <input type="text" name="name" id="name-contact" value={formData.name} onChange={handleChange} required className="form-input" placeholder="Your Full Name" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email-contact" className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                      <input type="email" name="email" id="email-contact" value={formData.email} onChange={handleChange} required className="form-input" placeholder="your.email@example.com" />
                    </div>
                    <div>
                      <label htmlFor="phone-contact" className="block text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
                      <input type="tel" name="phone" id="phone-contact" value={formData.phone} onChange={handleChange} className="form-input" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject-contact" className="block text-sm font-medium text-neutral-700 mb-1">Subject</label>
                    <input type="text" name="subject" id="subject-contact" value={formData.subject} onChange={handleChange} required className="form-input" placeholder="e.g., Quotation for Air Freight" />
                  </div>
                  <div>
                    <label htmlFor="message-contact" className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                    <textarea name="message" id="message-contact" rows="5" value={formData.message} onChange={handleChange} required className="form-input" placeholder="Please describe your requirements..."></textarea>
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 text-base rounded-lg">
                      Submit Inquiry <Send size={18} className="ml-2" />
                    </Button>
                  </motion.div>
                </form>
              </motion.div>

              {/* Contact Info Column */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="lg:col-span-2 space-y-8"
              >
                {contactMethods.map((method, idx) => (
                  <motion.div 
                    key={idx} 
                    className="bg-white p-6 rounded-xl shadow-xl border border-neutral-200 flex items-start hover:shadow-primary/10 transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-5">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-800 mb-1">{method.title}</h3>
                      {method.lines.map((line, lineIdx) => (
                         <a key={lineIdx} href={method.hrefs[lineIdx]} target={method.hrefs[lineIdx] !== "#" ? "_blank" : undefined} rel="noopener noreferrer" className={`block text-neutral-600 text-sm ${method.hrefs[lineIdx] !== "#" ? "hover:text-primary hover:underline" : ""}`}>
                          {line}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                ))}
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-xl border border-neutral-200 hover:shadow-primary/10 transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-semibold text-neutral-800 mb-3">Connect on Social Media</h3>
                  <div className="flex space-x-4">
                    <motion.a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" whileHover={{ y: -3, scale:1.05 }} className="flex items-center space-x-2 text-neutral-600 hover:text-[#E1306C] transition-colors">
                      <Instagram size={28} /> <span className="text-sm font-medium">Instagram</span>
                    </motion.a>
                    <motion.a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" whileHover={{ y: -3, scale:1.05 }} className="flex items-center space-x-2 text-neutral-600 hover:text-[#1877F2] transition-colors">
                      <Facebook size={28} /> <span className="text-sm font-medium">Facebook</span>
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
      
      {/* Map Section */}
      <ParallaxLayer offset={-20} tag="section">
        <div className="h-[400px] md:h-[500px] bg-neutral-200">
          <MapComponent/>
        </div>
      </ParallaxLayer>
    </div>
  );
};

export default ContactPage;