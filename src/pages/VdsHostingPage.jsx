
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Server, Cpu, Zap, Shield, Database, Wifi, Gauge, ArrowRight, PlusCircle, CheckCircle, HardDrive, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedParticles from '@/components/AnimatedParticles';

const VdsHostingPage = () => {
  const plans = [
    { 
      name: 'Intel VDS', 
      location: 'India, Mumbai', 
      cpu: 'Intel Xeon Processors', 
      ram: 'High-Performance DDR4', 
      disk: '256GB SSD', 
      bandwidth: 'Unlimited', 
      ddos: 'Advanced', 
      panel: 'SolusVM', 
      features: ['High Performance', 'Low Latency'], 
      price: '₹999+GST', 
      checkoutLink: 'https://billing.xitenodes.com/store/vds/intel-vds', 
      color: 'blue', 
      ipConfig: '2 Free IPv4, /64 IPv6' 
    },
    { 
      name: 'AMD VDS', 
      location: 'India, Mumbai', 
      cpu: 'AMD EPYC Processors', 
      ram: 'High-Performance DDR4', 
      disk: '256GB SSD', 
      bandwidth: 'Unlimited', 
      ddos: 'Advanced', 
      panel: 'SolusVM', 
      features: ['Multi-Core Performance', 'Cost Effective'], 
      price: '₹1399+GST', 
      checkoutLink: 'https://billing.xitenodes.com/store/vds/amd-vds', 
      color: 'red', 
      ipConfig: '2 Free IPv4, /64 IPv6' 
    }
  ];

  const PlanCard = ({ plan }) => (
    <motion.div
      className={`relative flex flex-col rounded-2xl border-2 border-gray-500/70 bg-slate-800/60 backdrop-blur-lg shadow-2xl group plan-card-shiny overflow-hidden opacity-80 h-full`}
    >
      {/* Discontinued overlay */}
      <div className="absolute inset-0 bg-black/40 z-20 flex items-center justify-center">
        <div className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg transform -rotate-12 text-xl border-2 border-white">
          DISCONTINUED
        </div>
      </div>

      <div className={`absolute -top-1 -right-1 px-3 py-0.5 text-xs font-semibold text-white bg-${plan.color}-600 rounded-bl-lg rounded-tr-lg z-10`}>
        {plan.name.split(' ')[1] || (plan.customQuote ? "Custom" : plan.name.split(' ')[0])}
      </div>
      <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br from-${plan.color}-500/80 to-${plan.color}-700/80 opacity-10 transition-all duration-700 ease-out blur-xl`}></div>

      <div className="relative z-10 flex-grow p-6 md:p-8">
        <div className="mb-6 text-center">
          <h3 className={`text-3xl font-bold text-${plan.color}-400 mb-1`}>{plan.name}</h3>
          <p className="text-sm text-gray-400">{plan.location}</p>
        </div>

        <div className="space-y-3 mb-8">
          {[
            { icon: Cpu, label: 'CPU', value: plan.cpu },
            { icon: Server, label: 'RAM', value: plan.ram },
            { icon: HardDrive, label: 'Disk', value: plan.disk },
            { icon: Wifi, label: 'Bandwidth', value: plan.bandwidth },
            { icon: Shield, label: 'DDoS', value: <span>{plan.ddos} (<Link to="/ddos-protection" className={`text-${plan.color}-400 hover:underline`}>Need More?</Link>)</span> },
            { icon: Gauge, label: 'Panel', value: plan.panel },
            { icon: Zap, label: 'IP Config', value: plan.ipConfig },
          ].map((item, index) => (
            <div key={index} className="flex items-start feature-item-hover">
              <item.icon className={`w-5 h-5 mr-3 text-${plan.color}-500 flex-shrink-0 mt-0.5`} />
              <div>
                <span className="font-semibold text-gray-200">{item.label}: </span>
                <span className="text-gray-300">{item.value}</span>
              </div>
            </div>
          ))}
        </div>

        <hr className={`my-6 border-${plan.color}-500/30`} />

        <ul className="space-y-2 mb-8 text-xs">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-400">
              <CheckCircle className={`w-4 h-4 mr-2 text-${plan.color}-400 flex-shrink-0`} />
              {feature}
            </li>
          ))}
          <li className="flex items-center text-gray-400"><CheckCircle className={`w-4 h-4 mr-2 text-${plan.color}-400 flex-shrink-0`} />Resources scalable on demand</li>
        </ul>
      </div>

      <div className="relative z-10 mt-auto p-6 md:p-8 pt-0">
        <div className="text-center mb-6">
          <p className="text-4xl font-extrabold text-gray-400">
            {plan.price}
            {plan.price !== 'Get Quote' && <span className="text-base font-normal text-gray-500">/mo</span>}
          </p>
        </div>
        <Button
          disabled
          className="w-full py-3 text-lg font-semibold bg-gray-600 text-gray-300 cursor-not-allowed opacity-70"
        >
          Discontinued <AlertTriangle className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </motion.div>
  );


  return (
    <div className="min-h-screen pb-16 relative overflow-hidden">
      <Helmet>
        <title>VDS Hosting India | Virtual Dedicated Servers - XiteNodes</title>
        <meta name="description" content="High-performance VDS hosting in India with dedicated resources. Intel Xeon & AMD EPYC processors, NVMe storage, DDoS protection, and full root access." />
        <link rel="canonical" href="https://xitenodes.com/vds-hosting" />
        <meta property="og:title" content="VDS Hosting India | Virtual Dedicated Servers - XiteNodes" />
        <meta property="og:description" content="High-performance VDS hosting in India with dedicated resources. Intel Xeon & AMD EPYC processors, NVMe storage, and DDoS protection." />
        <meta property="og:url" content="https://xitenodes.com/vds-hosting" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VDS Hosting India | Virtual Dedicated Servers - XiteNodes" />
        <meta name="twitter:description" content="High-performance VDS hosting in India with dedicated resources, NVMe storage, and DDoS protection." />
      </Helmet>
      <AnimatedParticles count={25} />
      <div className="container mx-auto px-6 py-12 md:py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
              Virtual Dedicated Servers (VDS)
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience dedicated resources with the flexibility of virtualization. Our VDS plans offer robust performance, enhanced security, and full control for your demanding projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-red-600/90 border-2 border-red-400 rounded-lg p-4 mb-10 max-w-4xl mx-auto flex items-center justify-center"
        >
          <AlertTriangle className="w-8 h-8 text-white mr-4 flex-shrink-0" />
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">VDS PLANS ARE DISCONTINUED</h2>
            <p className="text-white mt-1">These plans are no longer available for purchase. Please check our other hosting options.</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="mt-20 text-center p-8 glass-effect rounded-xl max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-6">VDS Plans Are Discontinued</h2>
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="w-10 h-10 text-red-500 mr-3" />
            <p className="text-xl text-red-400">These plans are no longer available for purchase.</p>
          </div>
          <p className="text-gray-300 mb-8">
            We recommend checking out our other hosting solutions that offer similar or better performance.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
              <Link to="/vps-hosting">Explore VPS Hosting <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              <Link to="/dedicated-servers">View Dedicated Servers <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VdsHostingPage;
