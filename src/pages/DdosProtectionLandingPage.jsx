
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Zap, Layers, Globe, ArrowRight } from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';
import GenericHero from '@/components/GenericHero';

const categories = [
  {
    name: 'Game Server Protection', slug: 'game-server', icon: Zap,
    description: 'Low-latency, high-performance DDoS mitigation specifically designed for game servers. Keep your players online and lag-free.',
    color: 'pink', features: ['Optimized for UDP/TCP Game Traffic', 'Anycast Network Options', 'Custom Game Filters'],
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'L3/L4 Network Protection', slug: 'l3-l4', icon: Layers,
    description: 'Robust protection against volumetric network-layer attacks like SYN floods, UDP floods, and ICMP attacks. Secure your entire network infrastructure.',
    color: 'purple', features: ['High-Capacity Scrubbing Centers', 'Dedicated IP Protection', 'Real-time Traffic Analysis'],
    image: 'https://images.unsplash.com/photo-1517990890009-105a05ac7368?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'L7 Application Protection', slug: 'l7', icon: Globe,
    description: 'Advanced WAF and application-layer mitigation to defend against sophisticated attacks targeting websites, APIs, and online services.',
    color: 'cyan', features: ['Web Application Firewall (WAF)', 'Bot Management & Rate Limiting', 'SSL/TLS Offloading'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  },
];

const DdosProtectionLandingPage = () => {
  const heroData = {
    title: "DDoS Protection Services",
    description: "Secure your online assets with XiteNodes' multi-layered DDoS protection. We offer tailored solutions for game servers, network infrastructure, and web applications. Up to 192Tbps mitigation capacity.",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    browseLink: "#ddos-categories",
    browseButtonText: "View Protection Tiers",
    HeroIcon: ShieldCheck,
    colorScheme: { title: 'text-purple-400', button: 'from-purple-500 to-pink-600', featureIcon: 'text-purple-400' },
  };
  return (
    <div className="min-h-screen pb-16 relative overflow-hidden">
      <Helmet>
        <title>DDoS Protection India | Up to 192Tbps Mitigation - XiteNodes</title>
        <meta name="description" content="Enterprise DDoS protection in India with up to 192Tbps mitigation capacity. Game server, web, and infrastructure protection with instant mitigation and 24/7 monitoring." />
        <link rel="canonical" href="https://xitenodes.com/ddos-protection" />
        <meta property="og:title" content="DDoS Protection India | Up to 192Tbps Mitigation - XiteNodes" />
        <meta property="og:description" content="Enterprise DDoS protection in India with up to 192Tbps mitigation capacity. Game server, web, and infrastructure protection." />
        <meta property="og:url" content="https://xitenodes.com/ddos-protection" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DDoS Protection India | Up to 192Tbps Mitigation - XiteNodes" />
        <meta name="twitter:description" content="Enterprise DDoS protection in India with up to 192Tbps mitigation and 24/7 monitoring." />
      </Helmet>
      <AnimatedParticles count={30} />
      <GenericHero {...heroData} />
      <div id="ddos-categories" className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y:20 }}
          animate={{ opacity: 1, y:0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-400">
              Choose Your Protection Level
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Select the DDoS mitigation service that best fits your needs, from game server specific filtering to comprehensive L3/L4 and L7 application security.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
              className={`relative rounded-2xl overflow-hidden shadow-2xl group border-2 border-${category.color}-500/70 plan-card-shiny bg-gray-800/40 backdrop-blur-md`}
            >
              <div className="absolute inset-0">
                <img-replace src={category.image} alt={`${category.name} background`} className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/80 via-${category.color}-900/30 to-transparent`}></div>
              </div>
              
              <div className="relative p-8 flex flex-col h-full">
                <div className={`mb-6 p-4 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-${category.color}-500 to-${category.color}-700 self-start shadow-lg`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className={`text-3xl font-bold text-${category.color}-400 mb-3`}>{category.name}</h2>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed flex-grow">{category.description}</p>
                
                <div className="mb-8 space-y-2">
                  {category.features.map((feature, featIndex) => (
                    <div key={featIndex} className="flex items-center text-gray-300 feature-item-hover">
                      <ShieldCheck className={`w-4 h-4 mr-3 text-${category.color}-500 flex-shrink-0`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button asChild size="lg" className={`w-full mt-auto bg-gradient-to-r from-${category.color}-500 to-${category.color}-700 hover:from-${category.color}-600 hover:to-${category.color}-800 text-white font-semibold text-md group-hover:scale-105 transition-transform duration-300 transform`}>
                  <Link to={`/ddos-protection/${category.slug}`}>
                    View {category.name.split(' ')[0]} Plans <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DdosProtectionLandingPage;
