
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY_NAME, ADDRESS, CONTACT_PHONE_1, CONTACT_EMAIL_1, INSTAGRAM_URL, FACEBOOK_URL, NAV_LINKS, services as serviceItems, VICTORY_LOGO_URL, ROOKIEZZ_SOLUTIONS_URL } from '@/constants';
import { Button } from '@/components/ui/button';


const Footer = () => {
  const footerLinkClass = "text-neutral-300 hover:text-white hover:underline transition-colors duration-300";

  return (
    <footer className="bg-neutral-900 text-neutral-200 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
             <Link to="/" className="flex items-center space-x-3 mb-5">
              <img  className="h-12 w-auto" alt="Victory Logistics Logo White" src={VICTORY_LOGO_URL} />
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-5">
              Your Logistics Our Victory.
            </p>
            <div className="flex space-x-5">
              <motion.a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.15, color: "#E1306C" }} className="text-neutral-400 hover:text-white">
                <Instagram size={24} />
              </motion.a>
              <motion.a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.15, color: "#1877F2" }} className="text-neutral-400 hover:text-white">
                <Facebook size={24} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5 border-b-2 border-primary pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.filter(link => !link.isDropdown && link.name !== "Services").map(link => (
                 <li key={link.name}><Link to={link.path} className={footerLinkClass}>{link.name}</Link></li>
              ))}
              <li><Link to="/services" className={footerLinkClass}>All Services</Link></li>
              <li><Link to="/contact#quote" className={footerLinkClass}>Request a Quote</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5 border-b-2 border-primary pb-2 inline-block">Our Services</h4>
            <ul className="space-y-3">
              {serviceItems.slice(0, 5).map(service => (
                <li key={service.id}><Link to={`/services/${service.id}`} className={footerLinkClass}>{service.name}</Link></li>
              ))}
               {serviceItems.length > 5 && (
                <li><Link to="/services" className={`${footerLinkClass} font-medium`}>View All...</Link></li>
              )}
            </ul>
          </div>
          
          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5 border-b-2 border-primary pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-neutral-300">{ADDRESS}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-primary flex-shrink-0" />
                <a href={`tel:${CONTACT_PHONE_1}`} className={footerLinkClass}>{CONTACT_PHONE_1}</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-primary flex-shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL_1}`} className={footerLinkClass}>{CONTACT_EMAIL_1}</a>
              </li>
            </ul>
            <Button asChild variant="outline" className="mt-6 border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto">
                <Link to="/contact">Contact Our Experts</Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-neutral-700 pt-8 text-center">
          <p className="text-sm text-neutral-400">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.
          </p>
          <p className="text-xs text-neutral-500 mt-2">
            Designed and Developed by <a href={ROOKIEZZ_SOLUTIONS_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Rookiezz Solutions</a>.
          </p>
           <div className="mt-3 space-x-4 text-xs">
            <Link to="/privacy-policy" className={footerLinkClass}>Privacy Policy</Link>
            <Link to="/terms-of-service" className={footerLinkClass}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;