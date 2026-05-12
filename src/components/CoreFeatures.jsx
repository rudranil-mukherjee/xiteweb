
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Aperture, Gauge, Network, Smartphone, ShieldCheck, Award, Wifi, Database, Activity, Users, Settings2, Globe2 as GlobeEurope, Play, Pause } from 'lucide-react';

const CoreFeatures = () => {
  const allFeatures = [
    { icon: ShieldCheck, title: "192Tbps+ DDoS Protection", description: "Robust DDoS mitigation on all services, ensuring maximum uptime and security for your projects.", gradient: "from-red-500 to-orange-600" },
    { icon: Aperture, title: "Latest Gen Hardware", description: "Cutting-edge servers with latest CPUs, NVMe SSDs, and enterprise components for max performance.", gradient: "from-blue-500 to-sky-600" },
    { icon: Gauge, title: "Overclocked Processors", description: "Top-tier single/multi-core performance with overclocked CPUs for unmatched power.", gradient: "from-purple-500 to-indigo-600" },
    { icon: Smartphone, title: "24/7 Expert Support", description: "Expert support via Discord, WhatsApp, Tickets & Calls. We're always here to help you succeed.", gradient: "from-teal-500 to-cyan-600" },
    { icon: Wifi, title: "Low Latency Network", description: "Optimized network routes and premium bandwidth ensure minimal latency for your applications globally.", gradient: "from-pink-400 to-rose-500" },
    { icon: Award, title: "Industry Excellence", description: "Years of experience with unmatched expertise at the top. Trusted by thousands worldwide.", gradient: "from-blue-400 to-indigo-500" },
    { icon: Database, title: "Automated Backups", description: "Daily automated backups for critical data, ensuring your information is safe and easily restorable.", gradient: "from-sky-400 to-blue-500" },
    { icon: Activity, title: "Real-time Monitoring", description: "Comprehensive server monitoring with instant alerts and detailed performance metrics.", gradient: "from-cyan-400 to-teal-500" },
    { icon: Users, title: "Scalable Solutions", description: "Easily scale resources up or down based on demand, ensuring optimal performance and cost-efficiency.", gradient: "from-indigo-400 to-purple-500" },
    { icon: Settings2, title: "User-Friendly Panels", description: "Intuitive control panels (Pterodactyl, cPanel, Virtualizor) for easy management of your servers and services.", gradient: "from-rose-400 to-pink-500" },
    { icon: GlobeEurope, title: "Global Datacenters", description: "Strategically located datacenters worldwide for optimal reach, performance, and redundancy.", gradient: "from-indigo-500 to-blue-600" },
    { icon: Network, title: "Redundant Infrastructure", description: "Highly redundant power, cooling, and network systems to guarantee service availability.", gradient: "from-green-500 to-lime-600" }
  ];

  const [currentSet, setCurrentSet] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const featuresPerSet = 6;
  const totalSets = Math.ceil(allFeatures.length / featuresPerSet);
  const intervalRef = useRef(null);

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSet((prevSet) => (prevSet + 1) % totalSets);
    }, 5000); 
  };

  const stopAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (isPlaying) startAutoplay(); else stopAutoplay();
    return () => stopAutoplay();
  }, [isPlaying, totalSets]);

  const displayedFeatures = allFeatures.slice(
    currentSet * featuresPerSet,
    (currentSet + 1) * featuresPerSet
  );
  
  const togglePlayPause = () => setIsPlaying(!isPlaying);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mb-4 hero-title-font">
            Core Features
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto hero-description-font">
            Discover what makes XiteNodes™ the preferred choice for hosting solutions worldwide
          </p>
        </motion.div>

        <div className="relative min-h-[450px] md:min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSet}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -150 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {displayedFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="service-card rounded-2xl p-6 md:p-8 group h-full flex flex-col"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className="mb-5 flex-grow">
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 md:p-4 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg flex items-center justify-center`}>
                      {(() => { const Icon = feature.icon; return <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" /> })()}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 hero-title-font">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-xs md:text-sm hero-description-font">{feature.description}</p>
                  </div>
                  <motion.div
                    className="w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-auto"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center mt-12 space-x-4">
          {Array.from({ length: totalSets }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSet(index);
                if (isPlaying) startAutoplay();
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSet ? 'bg-pink-500 scale-150' : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to feature set ${index + 1}`}
            />
          ))}
          <button onClick={togglePlayPause} className="glass-effect rounded-full p-2 hover:bg-white/20 transition-colors" aria-label={isPlaying ? "Pause slider" : "Play slider"}>
            {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
