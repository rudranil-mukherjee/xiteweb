import React from 'react';
import { motion } from 'framer-motion';

const TrustedBy = () => {
  const partners = [
    { name: 'Amazon Web Services', logo: 'https://pub-854609f2a7264b88ad2ab96f665c95f2.r2.dev/webassests/aws.png' },
    { name: 'Oracle', logo: 'https://pub-854609f2a7264b88ad2ab96f665c95f2.r2.dev/webassests/oracle.png' },
    { name: 'Azure', logo: 'https://pub-854609f2a7264b88ad2ab96f665c95f2.r2.dev/webassests/azure.png' },
    { name: 'Nvidia', logo: 'https://pub-854609f2a7264b88ad2ab96f665c95f2.r2.dev/webassests/nvidia.png' },
    { name: 'AMD', logo: 'https://pub-854609f2a7264b88ad2ab96f665c95f2.r2.dev/webassests/amd.png' },
    { name: 'Intel', logo: 'https://pub-854609f2a7264b88ad2ab96f665c95f2.r2.dev/webassests/intel.png' },
    { name: 'Cloudflare', logo: 'https://pub-854609f2a7264b88ad2ab96f665c95f2.r2.dev/webassests/cloudflare.png' },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4 hero-title-font">Trusted by Industry Leaders</h2>
          <p className="text-gray-400 text-lg hero-description-font">Powering the infrastructure behind your favorite games and platforms</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 items-center justify-center mb-10 max-w-4xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {partners.slice(0, 4).map((partner, index) => (
            <motion.div
              key={partner.name}
              className="flex items-center justify-center group"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative p-4 rounded-lg transition-all duration-300 group-hover:bg-pink-500/5">
                <img 
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-12 md:h-14 w-auto transition-all duration-300 
                           filter brightness-75 group-hover:brightness-125
                           group-hover:drop-shadow-[0_0_8px_rgba(244,114,182,0.5)]
                           group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100
                              transition-opacity duration-300
                              bg-gradient-to-r from-pink-500/20 to-purple-500/20
                              blur-xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-10 md:gap-12 items-center justify-center max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {partners.slice(4, 7).map((partner, index) => (
            <motion.div
              key={partner.name}
              className="flex items-center justify-center group"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <div className="relative p-4 rounded-lg transition-all duration-300 group-hover:bg-pink-500/5">
                <img 
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-12 md:h-14 w-auto transition-all duration-300 
                           filter brightness-75 group-hover:brightness-125
                           group-hover:drop-shadow-[0_0_8px_rgba(244,114,182,0.5)]
                           group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100
                              transition-opacity duration-300
                              bg-gradient-to-r from-pink-500/20 to-purple-500/20
                              blur-xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;