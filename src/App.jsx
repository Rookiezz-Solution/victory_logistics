
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesOverviewPage from '@/pages/ServicesOverviewPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import ContactPage from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsOfServicePage from '@/pages/TermsOfServicePage';
import WhyChooseVictoryPage from '@/pages/WhyChooseVictoryPage';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { CONTACT_PHONE_1 } from '@/constants';

function App() {
  const whatsappNumber = CONTACT_PHONE_1.replace(/[^0-9]/g, "");

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/why-victory-logistics" element={<WhyChooseVictoryPage />} />
        <Route path="/services" element={<ServicesOverviewPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <WhatsAppWidget phoneNumber={whatsappNumber} />
    </MainLayout>
  );
}

export default App;
