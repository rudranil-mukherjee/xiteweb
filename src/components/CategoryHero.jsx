import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, ArrowDownCircle, Shield, Zap, Wifi, Gamepad2 } from 'lucide-react';


const CategoryHero = ({ title, description, image, browseLink, learnMoreLink, features, colorScheme, buttonText = "Browse Plans", isGameServerHero = false }) => {
  const navigate = useNavigate();
  const defaultColorScheme = {
    title: 'text-purple-400',
    button: 'from-purple-500 to-blue-600',
    featureIcon: 'text-purple-400',
  };

  const currentColors = colorScheme || defaultColorScheme;

  let heroButtonText = buttonText;
  let HeroButtonIcon = BookOpen;
  let heroButtonAction = () => navigate(browseLink);

  if (isGameServerHero) {
    heroButtonText = "Browse Plans";
    HeroButtonIcon = ArrowDownCircle;
    heroButtonAction = () => {
      const element = document.getElementById('game-server-categories');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  }


  const gameServerFeatures = [
    { text: "High Speed NVMe Gen4 SSD", icon: Zap },
    { text: "DDoS Protection", icon: Shield },
    { text: "Unmetered Bandwidth", icon: Wifi },
  ];

  return (
    <section className="relative min-h-[70vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden isolate py-16 md:py-20">
      {image && (
        <motion.div
          className="hero-bg-slide"
          style={{ backgroundImage: `url(${image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      )}
      {/* Visually hidden image for SEO and accessibility */}
      {image && (
        <img src={image} alt={title + ' - ' + description + ' | Minecraft Hosting in India, Game Hosting India'} style={{ display: 'none' }} />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/85 to-slate-900 opacity-95 z-0"></div>


      <div className="container mx-auto px-6 relative z-10">
        <div className={`grid ${isGameServerHero ? 'lg:grid-cols-2 gap-8 items-center' : 'grid-cols-1 text-center'}`}>
          <motion.div
            className={`max-w-3xl ${isGameServerHero ? 'lg:text-left' : 'mx-auto text-center'}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }} // Slightly slower
          >
            <motion.h1 
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${currentColors.title} mb-6 fancy-xitenodes-text`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              {title}
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {description}
            </motion.p>
            <motion.div 
              className={`flex flex-wrap gap-4 ${isGameServerHero ? 'lg:justify-start justify-center' : 'justify-center'}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Button onClick={heroButtonAction} className={`bg-gradient-to-r ${currentColors.button} hover:brightness-110 text-white px-8 py-3 text-lg glow-effect-subtle`}>
                {heroButtonText}
                <HeroButtonIcon className="ml-2 w-5 h-5"/>
              </Button>
              {learnMoreLink && !isGameServerHero && (
                <Button asChild variant="outline" className={`border-current ${currentColors.title} hover:bg-current hover:text-white px-8 py-3 text-lg`}>
                  <Link to={learnMoreLink}>Learn More <BookOpen className="ml-2 w-5 h-5"/></Link>
                </Button>
              )}
            </motion.div>

            {isGameServerHero && (
              <motion.div 
                className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, staggerChildren: 0.1 }}
              >
                {gameServerFeatures.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="glass-effect-light rounded-lg p-4 flex items-center space-x-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.08, duration: 0.4 }} // Slower stagger
                  >
                    {(() => { const Icon = feature.icon; return <Icon className={`w-6 h-6 ${currentColors.featureIcon}`} /> })()}
                    <span className="text-gray-200 text-sm font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {isGameServerHero && (
            <motion.div
              className="hidden lg:flex flex-col items-center justify-center p-6 glass-effect-light rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <Gamepad2 className="w-16 h-16 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold text-center text-blue-300 mb-2">Games We Support</h3>
              <p className="text-xs text-gray-400 text-center">Minecraft, FiveM, CS:GO/CS2, ARK, and more!</p>
              <p className="text-xs text-gray-400 text-center mt-1">Check our <Link to="/game-servers/usage-calculator" className="text-blue-400 hover:underline">calculator</Link> for details.</p>
            </motion.div>
          )}
        </div>

        {features && !isGameServerHero && features.length > 0 && (
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6, staggerChildren: 0.1 }}
          >
            {features.slice(0, 6).map((feature, index) => (
              <motion.div 
                key={index} 
                className="glass-effect-light rounded-lg p-3 flex flex-col items-center justify-center text-center space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.08, duration: 0.4 }} // Slower stagger
              >
                {(() => { const Icon = feature.icon; return <Icon className={`w-6 h-6 ${currentColors.featureIcon}`} /> })()}
                <span className="text-white text-xs font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CategoryHero;
