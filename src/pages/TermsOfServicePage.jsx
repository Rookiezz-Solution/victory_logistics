import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_NAME, CONTACT_EMAIL_1 } from '@/constants';

const TermsOfServicePage = () => {
  return (
    <div className="bg-neutral-50 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-8 text-center">
            Terms of <span className="text-primary">Service</span>
          </h1>

          <div className="prose prose-lg max-w-none text-neutral-700 bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-neutral-200">
            <p><strong>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong></p>

            <p>
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the website (the "Service") operated by {COMPANY_NAME} ("us", "we", or "our").
            </p>
            <p>
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
            <p>
              By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
            </p>

            <h2>Accounts</h2>
            <p>
              When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of {COMPANY_NAME} and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of {COMPANY_NAME}.
            </p>

            <h2>Links To Other Web Sites</h2>
            <p>
              Our Service may contain links to third-party web sites or services that are not owned or controlled by {COMPANY_NAME}.
            </p>
            <p>
              {COMPANY_NAME} has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that {COMPANY_NAME} shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
            </p>

            <h2>Termination</h2>
            <p>
              We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of Karnataka, India, without regard to its conflict of law provisions.
            </p>

            <h2>Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <ul>
              <li>By email: <a href={`mailto:${CONTACT_EMAIL_1}`} className="text-primary hover:underline">{CONTACT_EMAIL_1}</a></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;