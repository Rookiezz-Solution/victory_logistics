
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';
import { WHATSAPP_LOGO } from '../assets/';
const WhatsAppWidget = ({ phoneNumber }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}?text=Hello%20Victory%20Logistics!%20I%20have%20an%20inquiry.`, '_blank');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white p-4 rounded-lg shadow-xl mb-3 w-72 border border-neutral-200"
          >
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold text-neutral-800">Chat with Us!</h4>
              <button onClick={toggleChat} className="text-neutral-500 hover:text-neutral-700">
                <X size={20} />
              </button>
            </div>
            <p className="text-sm text-neutral-600 mb-4">
              Have questions? Tap below to chat with us directly on WhatsApp.
            </p>
            <button
              onClick={openWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-4 rounded-lg flex items-center justify-center transition-colors"
            >
              <MessageSquare size={18} className="mr-2" /> Open WhatsApp
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleChat}
        initial={{ opacity: 1, y: 50 }}
        // animate={{ opacity: 1, scale: 1, y: 0 }}
        // transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          opacity: 1,
          y: [0, -30, 0], // up, then down
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className=" flex items-center justify-center"
        aria-label="Open WhatsApp chat"
      >
        <img 
              className="whatsapp-logo w-20 h-20"
              alt="whatsapp"
              src={WHATSAPP_LOGO}/>
      </motion.button>
    </div>
  );
};

export default WhatsAppWidget;