import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Globe, Server, Cpu, Shield, Zap, Database, Wifi, HardDrive, BarChart, MapPin, ExternalLink, Network, Lightbulb, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedParticles from '@/components/AnimatedParticles';

const FeatureCard = ({ icon: Icon, title, description, color, delay }) => (
  <motion.div
    className={`p-6 rounded-xl bg-slate-800/70 backdrop-blur-md border border-${color}-500/50 shadow-xl hover:shadow-${color}-500/30 transition-all duration-300 transform hover:-translate-y-1.5`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className={`mb-4 inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br from-${color}-500 to-${color}-700 shadow-md`}>
      <Icon className="w-7 h-7 text-white" />
    </div>
    <h3 className={`text-2xl font-semibold text-${color}-400 mb-3`}>{title}</h3>
    <p className="text-gray-300 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const StatItem = ({ value, label, color, icon: Icon, delay }) => (
  <motion.div
    className={`p-5 rounded-lg bg-slate-800/50 border border-slate-700/60 text-center backdrop-blur-sm hover:bg-${color}-500/10 transition-colors duration-300`}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.4, delay }}
  >
    {Icon && <Icon className={`w-8 h-8 mx-auto mb-2 text-${color}-400`} />}
    <div className={`text-4xl font-bold text-${color}-400 mb-1`}>{value}</div>
    <div className="text-sm text-gray-400">{label}</div>
  </motion.div>
);


const InfrastructurePage = () => {
  const corePillars = [
    {
      icon: Cpu,
      title: "Elite Hardware",
      description: "We utilize latest-gen AMD Ryzen & Intel Xeon CPUs, paired with high-speed NVMe SSDs and DDR5 RAM for peak processing power and I/O performance.",
      color: "pink",
    },
    {
      icon: Network,
      title: "Global Network Fabric",
      description: "Our robust BGP network with multiple Tier-1 transits and extensive peering ensures ultra-low latency and high-availability across all our strategic datacenters.",
      color: "purple",
    },
    {
      icon: Shield,
      title: "Uncompromising Security",
      description: "Multi-layered DDoS protection (up to 192Tbps), advanced firewalls, and proactive monitoring safeguard your services 24/7 against evolving threats.",
      color: "cyan",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "Constantly exploring and implementing cutting-edge technologies to provide efficient, scalable, and future-proof hosting solutions for our clients.",
      color: "blue",
    },
  ];

  const stats = [
    { value: "192Tbps+", label: "DDoS Mitigation Capacity", color: "pink", icon: Shield },
    { value: "99.99%", label: "Network Uptime SLA", color: "purple", icon: Zap },
    { value: "10+", label: "Global Datacenters", color: "cyan", icon: Globe },
    { value: "Sub-20ms", label: "Avg. Latency (Regional)", color: "blue", icon: BarChart },
  ];

  const datacenterHighlights = [
    { 
      name: "Noida, India", 
      features: ["Tier III+", "Multi-carrier", "High Density"], 
      image: "https://i.ibb.co/fV6kDTWX/Noida-Data-Center.webp",
      color: "pink" 
    },
    { 
      name: "Frankfurt, Germany", 
      features: ["DE-CIX Access", "Eco-Friendly", "ISO 27001"], 
      image: "https://i.ibb.co/7hs5LKW/We-are-Hetzner-thmb-small-v2.webp",
      color: "purple" 
    },
    { 
      name: "Singapore", 
      features: ["Asia Hub", "Low Latency to SEA", "Secure Facility"], 
      image: "https://i.ibb.co/SDfsVbBT/download-1.jpg",
      color: "cyan" 
    },
    { 
      name: "Mumbai, India",
      features: ["Central India", "Robust Connectivity", "Scalable"],
      image: "https://i.ibb.co/KxP68kxb/image.png",
      color: "blue" 
    }
  ];


  return (
    <div className="min-h-screen pb-16 relative overflow-hidden bg-slate-950 text-white">
      <Helmet>
        <title>Infrastructure | Global Network & Hardware - XiteNodes</title>
        <meta name="description" content="Explore XiteNodes infrastructure — AMD EPYC & Intel Xeon servers, NVMe storage, Tier-3 datacenters in Mumbai & Kolkata, and a global anycast network." />
        <link rel="canonical" href="https://xitenodes.com/infrastructure" />
        <meta property="og:title" content="Infrastructure | Global Network & Hardware - XiteNodes" />
        <meta property="og:description" content="Explore XiteNodes infrastructure — AMD EPYC & Intel Xeon servers, NVMe storage, and Tier-3 datacenters in India." />
        <meta property="og:url" content="https://xitenodes.com/infrastructure" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Infrastructure | Global Network & Hardware - XiteNodes" />
        <meta name="twitter:description" content="AMD EPYC & Intel Xeon servers, NVMe storage, Tier-3 datacenters in Mumbai & Kolkata." />
      </Helmet>
      <AnimatedParticles count={15} />
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16 md:mb-20"
        >
          <Server className="w-20 h-20 text-pink-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400">
              XiteNodes Global Infrastructure
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Engineered for unmatched performance, reliability, and security. Powering your digital ambitions worldwide.
          </p>
        </motion.div>

        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-400">Our Core Pillars</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {corePillars.map((pillar, index) => (
              <FeatureCard 
                key={pillar.title}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
                color={pillar.color}
                delay={index * 0.15}
              />
            ))}
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-400">Key Performance Metrics</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatItem 
                key={stat.label}
                value={stat.value}
                label={stat.label}
                color={stat.color}
                icon={stat.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>
        
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pink-400">Strategic Datacenter Locations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {datacenterHighlights.map((dc, index) => (
              <motion.div 
                key={dc.name}
                className={`relative rounded-xl overflow-hidden shadow-xl group ${
                  index === 0 ? 'border-2 border-pink-500/60 hover:shadow-pink-500/30' :
                  index === 1 ? 'border-2 border-purple-500/60 hover:shadow-purple-500/30' :
                  index === 2 ? 'border-2 border-cyan-500/60 hover:shadow-cyan-500/30' :
                  'border-2 border-blue-500/60 hover:shadow-blue-500/30'
                } transition-all duration-300 transform hover:-translate-y-1`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
              >
                <img 
                  src={dc.image}
                  alt={`${dc.name} Datacenter`} 
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 ${
                  index === 0 ? 'via-pink-900/40' :
                  index === 1 ? 'via-purple-900/40' :
                  index === 2 ? 'via-cyan-900/40' :
                  'via-blue-900/40'
                } to-transparent opacity-90 group-hover:opacity-80 transition-opacity`}></div>
                <div className="absolute bottom-0 left-0 p-5 w-full">
                  <h3 className={`text-xl font-bold ${
                    index === 0 ? 'text-pink-300' :
                    index === 1 ? 'text-purple-300' :
                    index === 2 ? 'text-cyan-300' :
                    'text-blue-300'
                  } mb-1.5 flex items-center`}>
                    <MapPin className="w-5 h-5 mr-2" /> {dc.name}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {dc.features.map(feat => (
                      <span key={feat} className={`text-xs ${
                        index === 0 ? 'bg-pink-500/30 text-pink-200' :
                        index === 1 ? 'bg-purple-500/30 text-purple-200' :
                        index === 2 ? 'bg-cyan-500/30 text-cyan-200' :
                        'bg-blue-500/30 text-blue-200'
                      } px-2 py-0.5 rounded-full backdrop-blur-sm`}>
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-8 text-sm">And many more locations worldwide to ensure optimal reach and performance for your users.</p>
        </section>


        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          className="text-center mt-12 p-8 md:p-12 bg-gradient-to-br from-slate-800 via-slate-800/80 to-slate-900/70 rounded-2xl shadow-2xl border border-slate-700"
        >
          <Users className="w-12 h-12 text-purple-400 mx-auto mb-5" />
          <h2 className="text-3xl font-bold text-purple-400 mb-5">Ready to Build on XiteNodes?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Leverage our powerful infrastructure to host your applications, websites, and game servers. Experience the XiteNodes difference today.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg py-3.5 px-10 shadow-lg hover:shadow-pink-500/30 transition-all duration-300 transform hover:scale-105">
            <Link to="/contact-sales">
              Speak to an Expert <ExternalLink className="ml-2.5 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default InfrastructurePage;