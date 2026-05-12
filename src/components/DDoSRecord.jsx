import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, CalendarDays, BarChartBig } from 'lucide-react';

const DDoSRecord = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,105,180,0.2),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-500/30 rounded-full px-6 py-2 mb-6">
            <Shield className="w-5 h-5 text-pink-400" />
            <span className="text-pink-300 font-medium">Record DDoS Protection</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent mb-6">
            Why Our DDoS Protection is Best?
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We've successfully mitigated the largest DDoS attacks in the industry, protecting our clients with unmatched reliability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-pink-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Record DDoS Attack Mitigated
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-6 mb-4">
                    <Zap className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-2">2.4</div>
                    <div className="text-pink-300">Tbps</div>
                  </div>
                  <span className="text-gray-300 font-medium">Attack Size</span>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 mb-4">
                    <CalendarDays className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-2">June 30</div>
                    <div className="text-purple-300">2025</div>
                  </div>
                  <span className="text-gray-300 font-medium">Attack Date</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-6 mb-4">
                     <BarChartBig className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-2">100+</div>
                    <div className="text-pink-300">Tbps Mitigated</div>
                  </div>
                  <span className="text-gray-300 font-medium">Total Till Date</span>
                </motion.div>
              </div>

              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 font-semibold text-lg">Successfully Mitigated</span>
                </div>
                <p className="text-gray-300">
                  Attack neutralized in under 3 seconds with zero downtime for protected services.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-pink-400 mb-2">500Gbps</div>
              <div className="text-gray-300">Standard Protection</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">192Tbps</div>
              <div className="text-gray-300">Maximum Capacity</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-pink-400 mb-2">99.99%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DDoSRecord;