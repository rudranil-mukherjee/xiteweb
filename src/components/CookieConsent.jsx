import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent_xitenodes');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000); // Show after 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent_xitenodes', 'true');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-full max-w-md p-6 glass-effect rounded-xl shadow-2xl z-[9990] border border-pink-500/30"
        >
          <div className="flex items-start space-x-4">
            <Cookie className="w-8 h-8 text-pink-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">We Value Your Privacy</h3>
              <p className="text-sm text-gray-300 mb-4">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
              <div className="flex justify-end space-x-3">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white" onClick={handleAccept}>
                  Decline
                </Button>
                <Button
                  onClick={handleAccept}
                  size="sm"
                  className="bg-pink-500 hover:bg-pink-600 text-white"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;