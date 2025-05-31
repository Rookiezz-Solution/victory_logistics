
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { COMPANY_NAME, NAV_LINKS, services as serviceItems } from '@/constants';
import {VICTORY_LOGO} from '../../assets/'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleServicesMenu = (e) => {
    e.stopPropagation();
    setIsServicesOpen(!isServicesOpen);
    setIsAboutOpen(false); 
  };

  const toggleAboutMenu = (e) => {
    e.stopPropagation();
    setIsAboutOpen(!isAboutOpen);
    setIsServicesOpen(false);
  };
  
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsAboutOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemBaseClass = "font-medium transition-colors text-base";
  const navItemClass = `${navItemBaseClass} ${isScrolled || isOpen ? 'text-neutral-800 hover:text-primary' : 'text-black hover:text-primary'}`;
  const activeNavItemClass = `${navItemBaseClass} ${isScrolled || isOpen ? 'text-primary font-semibold' : 'text-primary font-semibold'}`;
  
  const aboutSubLinks = [
    { name: "Our Company", path: "/about" },
    { name: "Why Victory Logistics?", path: "/why-victory-logistics" },
  ];

  const orderedNavLinks = [
    NAV_LINKS.find(link => link.name === "Home"),
    { name: "About Us", path: "/about", isDropdown: true, subLinks: aboutSubLinks },
    NAV_LINKS.find(link => link.name === "Services"),
    NAV_LINKS.find(link => link.name === "Contact"),
  ].filter(Boolean);


  const renderNavLinks = (isMobile = false) => (
    <>
      {orderedNavLinks.map((link) => {
        if (link.name === "Services" && link.isDropdown) {
          return (
            <div key={link.name} className={`relative ${isMobile ? 'w-full' : ''}`}>
              <Button
                variant="ghost"
                onClick={toggleServicesMenu}
                className={`${isMobile ? 'w-full justify-between py-3' : ''} ${location.pathname.startsWith('/services') ? activeNavItemClass : navItemClass} flex items-center`}
              >
                {link.name} <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </Button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: isMobile ? 0 : -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: isMobile ? 0 : -10, height: 0 }}
                    className={isMobile ? 'pl-4 mt-1 space-y-1' : 'absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white/90 backdrop-blur-sm ring-1 ring-black ring-opacity-5 py-1 z-[60] max-h-72 overflow-y-auto'}
                  >
                    {serviceItems.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.id}`}
                        className={`block px-4 py-2 text-sm ${location.pathname === `/services/${service.id}` ? 'bg-primary/10 text-primary font-medium' : 'text-neutral-700 hover:bg-primary/5 hover:text-primary'}`}
                        onClick={() => { setIsServicesOpen(false); if (isMobile) setIsOpen(false); }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }
        if (link.name === "About Us" && link.isDropdown) {
          return (
            <div key={link.name} className={`relative ${isMobile ? 'w-full' : ''}`}>
              <Button
                variant="ghost"
                onClick={toggleAboutMenu}
                className={`${isMobile ? 'w-full justify-between py-3' : ''} ${location.pathname.startsWith('/about') || location.pathname.startsWith('/why-victory-logistics') ? activeNavItemClass : navItemClass} flex items-center`}
              >
                {link.name} <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
              </Button>
              <AnimatePresence>
                {isAboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: isMobile ? 0 : -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: isMobile ? 0 : -10, height: 0 }}
                    className={isMobile ? 'pl-4 mt-1 space-y-1' : 'absolute left-0 mt-2 w-60 rounded-md shadow-lg bg-white/90 backdrop-blur-sm ring-1 ring-black ring-opacity-5 py-1 z-[60]'}
                  >
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.path}
                        className={`block px-4 py-2 text-sm ${location.pathname === subLink.path ? 'bg-primary/10 text-primary font-medium' : 'text-neutral-700 hover:bg-primary/5 hover:text-primary'}`}
                        onClick={() => { setIsAboutOpen(false); if (isMobile) setIsOpen(false); }}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }
        return (
          <Button
            key={link.name}
            asChild
            variant="ghost"
            className={`${isMobile ? 'w-full justify-start py-3' : ''} ${location.pathname === link.path ? activeNavItemClass : navItemClass}`}
            onClick={() => isMobile && setIsOpen(false)}
          >
            <Link to={link.path}>{link.name}</Link>
          </Button>
        );
      })}
    </>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300 ease-in-out 
      bg-transparent backdrop-blur-sm shadow-sm `}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-2">
          <img className="h-10 sm:h-12 w-auto" alt="Victory Logistics Logo" src={VICTORY_LOGO} />
        </Link>
        
        <div className="hidden lg:flex items-center space-x-1">
          {renderNavLinks()}
        </div>

        <div className="hidden lg:block ml-4">
          <Button asChild className={`font-semibold px-6 py-2.5 text-base rounded-lg transition-colors duration-300 ${isScrolled || isOpen ? 'bg-primary hover:bg-primary/90 text-white' : 'bg-white hover:bg-primary/10 text-primary border border-primary hover:text-primary'}`}>
            <Link to="/contact#quote">Get a Quote</Link>
          </Button>
        </div>

        <div className="lg:hidden">
          <Button onClick={toggleMenu} variant="ghost" size="icon" className={isScrolled || isOpen ? 'text-neutral-700 hover:text-primary' : 'text-black hover:text-primary'}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg py-4 px-4 z-40"
          >
            <nav className="flex flex-col space-y-2">
              {renderNavLinks(true)}
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 text-base mt-3 rounded-lg">
                <Link to="/contact#quote" onClick={() => setIsOpen(false)}>Get a Quote</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;