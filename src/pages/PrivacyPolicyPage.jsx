import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_NAME, CONTACT_EMAIL_1 } from '@/constants';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-neutral-50 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-8 text-center">
            Privacy <span className="text-primary">Policy</span>
          </h1>

          <div className="prose prose-lg max-w-none text-neutral-700 bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-neutral-200">
            <p><strong>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong></p>

            <p>
              {COMPANY_NAME} ("us", "we", or "our") operates the website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>

            <h2>Information Collection and Use</h2>
            <p>
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            <h3>Types of Data Collected</h3>
            <h4>Personal Data</h4>
            <p>
              While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
            </p>
            <ul>
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
              <li>Cookies and Usage Data</li>
            </ul>
            <h4>Usage Data</h4>
            <p>
              We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
            </p>

            <h2>Use of Data</h2>
            <p>{COMPANY_NAME} uses the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>

            <h2>Security of Data</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "last updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicyPage;