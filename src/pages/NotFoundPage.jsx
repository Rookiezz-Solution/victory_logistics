import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center text-center bg-neutral-50 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <AlertTriangle className="w-24 h-24 text-primary mb-6 mx-auto" />
        <h1 className="text-5xl md:text-7xl font-extrabold text-neutral-800 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-neutral-700 mb-6">Oops! Page Not Found</h2>
        <p className="text-neutral-600 mb-10 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg">
          <Link to="/">Go Back to Homepage</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;