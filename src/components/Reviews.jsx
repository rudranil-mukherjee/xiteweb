import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const reviewsData = [
  { id: 1, name: 'Shaan', avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79', rating: 5, title: 'Unmatched Performance!', text: 'Your services are good but u can improve one thing that i experienced in aternos hosting that in some plugins they suggest the version that is Compatible with your server version', date: '2025-05-15' },
  { id: 2, name: 'Anonymous User', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d', rating: 5, title: 'Best Cloud Gaming Experience', text: 'XiteNodes is one of the best and only hosting(s) which almost no downtime, announcement before maintenance, fast servers and cheap prices. I\'m glad I found this host 🙂.', date: '2025-04-22' },
  { id: 3, name: 'Ahtesham', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7', rating: 4, title: 'One of the best Nodes for India...', text: 'The server is Pretty good. He is also doing some good work and really work for the server. The prices are Pretty Low for the high quality service, He is Providing.', date: '2025-03-10' },
  { id: 4, name: 'Technical Panji', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e', rating: 5, title: 'BEST HOSTING AS COMPARED TO OTHER IN…', text: 'BEST HOSTING AS COMPARED TO OTHER IN TERMS OF PERFORMANCE, PRICE ITS WORTH IT AND THE OWNER OF THIS HOSTING BEHAVES POLITELY. 😄', date: '2025-06-01' },
];

// ...other imports remain the same

// Use your actual Trustpilot info:
const TRUSTPILOT_TEMPLATE_ID = "56278e9abfbbba0bdcd568bc";
const TRUSTPILOT_BUSINESS_UNIT_ID = "6656f450a9eea31f7a98b8b6";
const TRUSTPILOT_DOMAIN = "billing.xitenodes.com";

const TrustpilotWidget = () => {
  useEffect(() => {
    if (!document.getElementById('trustpilot-widget-script')) {
      const script = document.createElement('script');
      script.id = 'trustpilot-widget-script';
      script.async = true;
      script.src = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="flex justify-center my-10">
      <div
        className="trustpilot-widget tp-link"
        data-locale="en-US"
        data-template-id={TRUSTPILOT_TEMPLATE_ID}
        data-businessunit-id={TRUSTPILOT_BUSINESS_UNIT_ID}
        data-style-height="83px"
        data-style-width="360px"
        data-theme="light"
        style={{ maxWidth: 360, width: '100%' }}>
        {/* Fallback link */}
        <a href={`https://www.trustpilot.com/review/${TRUSTPILOT_DOMAIN}`} target="_blank" rel="noopener">
          Trustpilot Reviews
        </a>
      </div>
    </div>
  );
};

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const currentReview = reviewsData[currentIndex];

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-pink-900/2 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={isIntersecting ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Rated Excellent on <img alt="TrustPilot Logo" className="inline h-10 ml-2 filter brightness-0 invert" src="https://i.ibb.co/vrnkJQV/CJib2-KO0yo-EDEAE-removebg-preview.png" />
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real feedback from users who trust XiteNodes™ for their hosting needs.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              className="glass-effect rounded-2xl p-8 md:p-12 shadow-2xl border border-pink-500/20 min-h-[350px] flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isIntersecting ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div>
                <div className="flex items-center mb-6">
                  <img
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-pink-400"
                    alt={currentReview.name}
                    src={currentReview.avatar}
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">{currentReview.name}</h3>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${ i < currentReview.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600' }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <h4 className="text-2xl font-semibold text-pink-400 mb-3">{currentReview.title}</h4>
                <p className="text-gray-300 leading-relaxed mb-6">{currentReview.text}</p>
              </div>
              <p className="text-sm text-gray-500 text-right">Reviewed on: {currentReview.date}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8 space-x-2 mb-12">
            {reviewsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${ index === currentIndex ? 'bg-pink-500 scale-125' : 'bg-gray-600 hover:bg-gray-500' }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={isIntersecting ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            onClick={() => window.open(`https://www.trustpilot.com/review/${TRUSTPILOT_DOMAIN}`, '_blank')}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 text-lg"
          >
            <CheckCircle className="w-5 h-5 mr-2" /> View All TrustPilot Reviews
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;