
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowDownCircle, BookOpen } from 'lucide-react'; 

const GenericHero = ({ title, description, image, browseLink, browseButtonText = "Browse Plans", HeroIcon = ArrowDownCircle, colorScheme }) => {
  const navigate = useNavigate();

  const defaultColorScheme = {
    title: 'text-purple-400',
    button: 'from-purple-500 to-blue-600',
    featureIcon: 'text-purple-400', 
  };
  const currentColors = colorScheme || defaultColorScheme;

  const handleBrowseAction = () => {
    if (browseLink.startsWith('/')) {
      if (browseLink.includes('#')) {
        const elementId = browseLink.split('#')[1];
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          navigate(browseLink.split('#')[0]); 
        }
      } else {
        navigate(browseLink);
      }
    } else {
      window.open(browseLink, '_blank');
    }
  };


  return (
    <section className="relative min-h-[60vh] md:min-h-[55vh] flex items-center justify-center overflow-hidden isolate py-12 md:py-16">
      {image && (
        <motion.div
          className="hero-bg-slide"
          style={{ backgroundImage: `url(${image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/85 to-slate-900 opacity-95 z-0"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${currentColors.title} mb-6 hero-title-font`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 hero-description-font"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {description}
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button 
              onClick={handleBrowseAction} 
              className={`bg-gradient-to-r ${currentColors.button} hover:brightness-110 text-white px-8 py-3 text-lg glow-effect-subtle`}
            >
              {browseButtonText}
              {HeroIcon && <HeroIcon className="ml-2 w-5 h-5"/>}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GenericHero;
