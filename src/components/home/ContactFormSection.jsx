
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { services as serviceItems } from '@/constants';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { CONTACT_EMAIL_1, CONTACT_PHONE_1, ADDRESS } from '@/constants';
import { useEffect, useRef } from 'react';

const ContactFormSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Home Page Form Data:", formData);

    const emailBody = `
      New Contact Form Submission:
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone || 'Not provided'}
      Service of Interest: ${formData.service || 'Not specified'}
      Message: ${formData.message}
    `;
    console.log("Formatted for email (conceptual):", emailBody);

    toast({
      title: (
        <div className="flex items-center">
          <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
          <span className="font-semibold text-lg text-primary">Inquiry Sent Successfully!</span>
        </div>
      ),
      description: (
        <p className="text-neutral-700">
          Thanks, <span className="font-medium">{formData.name}</span>! We've received your message regarding {formData.service || 'our services'} and will be in touch shortly.
        </p>
      ),
      variant: "default",
      className: "border-2 border-primary bg-primary/5 shadow-xl",
      duration: 7000,
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    { icon: <Mail size={22} className="text-primary" />, text: CONTACT_EMAIL_1, href: `mailto:${CONTACT_EMAIL_1}` },
    { icon: <Phone size={22} className="text-primary" />, text: CONTACT_PHONE_1, href: `tel:${CONTACT_PHONE_1}` },
    { icon: <MapPin size={22} className="text-primary" />, text: ADDRESS, href: "#" }, 
  ];

  const borderVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1, 
      transition: { duration: 2, ease: "easeInOut" }
    }
  };

  return (
    <div id="quote" className="py-16 lg:py-24 bg-neutral-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
        >
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800">
                Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
                Have a question or need a quote? Fill out the form below or reach out to us directly. We're here to help!
            </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-5 gap-10 lg:gap-16 relative">
          <motion.svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            width="100%"
            height="100%"
            viewBox="0 0 1000 600" 
            preserveAspectRatio="none"
            initial="hidden"
            animate={controls}
          >
            <motion.rect
              x="5" y="5" width="calc(100% - 10px)" height="calc(100% - 10px)"
              rx="12" 
              stroke="hsl(var(--primary))" 
              strokeWidth="3" 
              fill="none"
              variants={borderVariants}
            />
          </motion.svg>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-3 bg-white p-8 sm:p-10 rounded-xl shadow-xl border border-neutral-200 z-10"
          >
            <h3 className="text-2xl font-semibold text-neutral-800 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name-home" className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
                  <input type="text" name="name" id="name-home" value={formData.name} onChange={handleChange} required className="form-input" placeholder="e.g. John Doe" />
                </div>
                <div>
                  <label htmlFor="email-home" className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                  <input type="email" name="email" id="email-home" value={formData.email} onChange={handleChange} required className="form-input" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="phone-home" className="block text-sm font-medium text-neutral-700 mb-1">Phone (Optional)</label>
                <input type="tel" name="phone" id="phone-home" value={formData.phone} onChange={handleChange} className="form-input" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div>
                <label htmlFor="service-home" className="block text-sm font-medium text-neutral-700 mb-1">Service of Interest</label>
                <select name="service" id="service-home" value={formData.service} onChange={handleChange} className="form-input appearance-none">
                  <option value="">-- Select a Service --</option>
                  {serviceItems.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
                  <option value="Other Inquiry">Other Inquiry</option>
                </select>
              </div>
              <div>
                <label htmlFor="message-home" className="block text-sm font-medium text-neutral-700 mb-1">Your Message</label>
                <textarea name="message" id="message-home" rows="4" value={formData.message} onChange={handleChange} required className="form-input" placeholder="Tell us more about your requirements..."></textarea>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 text-base rounded-lg">
                  Send Your Inquiry <Send size={18} className="ml-2" />
                </Button>
              </motion.div>
            </form>
          </motion.div>
           <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            className="lg:col-span-2 z-10"
          >
            <div className="bg-white p-8 sm:p-10 rounded-xl shadow-xl border border-neutral-200 h-full">
                 <h3 className="text-2xl font-semibold text-neutral-800 mb-6">Direct Contact Info</h3>
                 <div className="space-y-5">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                                {info.icon}
                            </div>
                            <div>
                                <span className="block text-sm text-neutral-500">
                                    {info.text === ADDRESS ? "Address" : info.href.startsWith("mailto:") ? "Email Us" : "Call Us"}
                                </span>
                                <a href={info.href !== "#" ? info.href : undefined} className={`block text-neutral-700 font-medium ${info.href !== "#" ? "hover:text-primary" : ""}`}>
                                    {info.text}
                                </a>
                            </div>
                        </div>
                    ))}
                 </div>
                 <p className="text-sm text-neutral-600 mt-8 pt-6 border-t border-neutral-200">
                    We are available during standard business hours. For urgent inquiries, please call us directly.
                 </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;