
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Building, Server, HardDrive, Zap, Shield, MapPin, ArrowRight, HelpCircle, Cog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedParticles from '@/components/AnimatedParticles';
import GenericHero from '@/components/GenericHero';

const DatacenterPage = () => {
  const categories = [
    {
      name: 'Server Colocation', icon: Building, color: 'blue',
      image: 'https://images.unsplash.com/photo-1580974928075-00a11b999103?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      description: 'Host your own server hardware in our secure, state-of-the-art datacenter facilities. Benefit from our robust infrastructure, redundant power, cooling, and high-speed network connectivity.',
      features: [
        'Flexible Rack Space (1U to Full Racks)', 'Redundant Power (N+1 or 2N UPS)', 'Climate Controlled Environment',
        '24/7 Physical Security & Monitoring', 'High-Speed Multi-Carrier Network Access', 'Remote Hands & Eyes Support',
      ],
      approxPrice: 'Starting from ₹9,999/mo per U', checkoutLink: '/contact-sales',
    },
    {
      name: 'Hardware Purchase & Leasing', icon: HardDrive, color: 'teal',
      image: 'https://images.unsplash.com/photo-1604322875991-c12d00783efa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      description: 'Procure or lease enterprise-grade server hardware directly through XiteNodes. We offer competitive pricing on latest-gen CPUs, RAM, storage, and networking equipment, pre-configured and ready for deployment.',
      features: [
        'Access to Latest Server Components', 'Custom Hardware Configurations', 'Purchase or Flexible Leasing Options',
        'Pre-Deployment Testing & Setup', 'Integration with Colocation Services', 'Warranty & Support Management',
      ],
      approxPrice: 'Varies (Get a Quote)', checkoutLink: '/contact-sales',
    }
  ];

  const CategoryCard = ({ category, index }) => (
    <motion.div
      className={`relative flex flex-col p-8 md:p-10 rounded-2xl border-2 border-${category.color}-500/70 bg-gray-900/50 backdrop-blur-xl shadow-2xl shadow-${category.color}-500/30 overflow-hidden plan-card-shiny h-full`}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }} // Slower transition
      whileHover={{ y: -5, boxShadow: `0 25px 50px -12px rgba(var(--${category.color}-rgb, 0,0,0) / 0.4)` }}
      style={{'--blue-rgb': '59, 130, 246', '--teal-rgb': '20, 184, 166'}}
    >
      <div className={`absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gradient-to-bl from-${category.color}-600/40 to-transparent opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500`}></div>
      <img-replace src={category.image} alt={`${category.name} background`} className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:opacity-10 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col flex-grow">
        <div className={`mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-${category.color}-500 to-${category.color}-700 self-start shadow-lg`}>
          <category.icon className="w-10 h-10 text-white" />
        </div>
        <h2 className={`text-4xl font-bold text-${category.color}-300 mb-4`}>{category.name}</h2>
        <p className="text-gray-300 mb-8 text-md leading-relaxed flex-grow">{category.description}</p>
        
        <ul className="space-y-3 mb-10">
          {category.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-200">
              <Zap className={`w-5 h-5 mr-3 text-${category.color}-400 flex-shrink-0`} />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-700/60">
          <p className={`text-2xl font-semibold text-${category.color}-400 mb-3 sm:mb-0`}>
            {category.approxPrice}
          </p>
          <Button asChild size="lg" className={`bg-gradient-to-r from-${category.color}-500 to-${category.color}-700 hover:from-${category.color}-600 hover:to-${category.color}-800 text-white font-semibold shadow-md hover:shadow-${category.color}-500/30 transition-all duration-300 transform hover:scale-105`}>
            <Link to={category.checkoutLink}>
              Get a Custom Quote <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );

  const heroData = {
    title: "Datacenter & Colocation",
    description: "Leverage XiteNodes' world-class datacenter infrastructure for your critical hardware and IT needs. Secure, scalable, and connected.",
    image: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    browseLink: "#datacenter-services", 
    browseButtonText: "Explore Services",
    HeroIcon: Cog,
    colorScheme: { title: 'text-blue-400', button: 'from-blue-500 to-teal-600', featureIcon: 'text-blue-400' },
  };

  return (
    <div className="min-h-screen pb-16 relative overflow-hidden">
      <Helmet>
        <title>Datacenter & Colocation India | Server Housing - XiteNodes</title>
        <meta name="description" content="Datacenter colocation services in India. House your servers in our Tier-3 facilities with redundant power, cooling, and high-speed network connectivity." />
        <link rel="canonical" href="https://xitenodes.com/datacenter-colocation" />
        <meta property="og:title" content="Datacenter & Colocation India | Server Housing - XiteNodes" />
        <meta property="og:description" content="Datacenter colocation services in India with Tier-3 facilities, redundant power, and high-speed connectivity." />
        <meta property="og:url" content="https://xitenodes.com/datacenter-colocation" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Datacenter & Colocation India | Server Housing - XiteNodes" />
        <meta name="twitter:description" content="Datacenter colocation services in India with Tier-3 facilities and redundant infrastructure." />
      </Helmet>
      <AnimatedParticles count={20} />
      <GenericHero {...heroData} />

      <div id="datacenter-services" className="container mx-auto px-6 py-12 md:py-20 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y:20 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500">
                Our Datacenter Offerings
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-xl mx-auto">
              State-of-the-art facilities and expert support for your mission-critical hardware.
            </p>
          </motion.div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="mt-20 text-center p-8 glass-effect rounded-xl max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Our Datacenter Advantage</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="flex items-start space-x-3 p-3 rounded-md hover:bg-slate-700/30 transition-colors">
              <MapPin className="w-10 h-10 text-teal-400 mt-1 flex-shrink-0"/>
              <div><h4 className="font-semibold text-teal-300">Strategic Locations</h4><p className="text-sm text-gray-400">Global presence for optimal reach.</p></div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-md hover:bg-slate-700/30 transition-colors">
              <Shield className="w-10 h-10 text-blue-400 mt-1 flex-shrink-0"/>
              <div><h4 className="font-semibold text-blue-300">Tier III+ Standards</h4><p className="text-sm text-gray-400">High availability and redundancy.</p></div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-md hover:bg-slate-700/30 transition-colors">
              <Server className="w-10 h-10 text-purple-400 mt-1 flex-shrink-0"/>
              <div><h4 className="font-semibold text-purple-300">Carrier-Neutral Connectivity</h4><p className="text-sm text-gray-400">Multiple network providers.</p></div>
            </div>
          </div>
           <Button asChild size="lg" variant="outline" className="mt-10 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white">
             <Link to="/infrastructure">Explore Full Infrastructure Details <HelpCircle className="ml-2 w-5 h-5" /></Link>
           </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default DatacenterPage;
