
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { WifiIcon as WifiSolidIcon } from '@heroicons/react/24/solid';
import { Route, Network, ShieldCheck, ArrowRight, Settings, BarChart, Layers, Globe as GlobeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedParticles from '@/components/AnimatedParticles';
import GenericHero from '@/components/GenericHero';

const IpPoolsPage = () => {
  const products = [
    {
      name: 'Dedicated IPv4 Subnet (/24)',
      slug: 'ipv4-slash-24',
      icon: Network,
      color: 'cyan',
      description: 'Secure your own dedicated /24 IPv4 subnet (256 IPs) for full control over your IP reputation, routing, and network services. Ideal for large-scale applications, VPNs, mail servers, and custom network setups.',
      features: [
        { text: 'Full /24 Subnet (253 Usable IPs)', icon: Route },
        { text: 'Clean IP Addresses', icon: ShieldCheck },
        { text: 'BGP Session Options', icon: WifiSolidIcon },
        { text: 'RIPE/ARIN Registration Assistance', icon: GlobeIcon },
        { text: 'Flexible Routing Configurations', icon: Settings },
        { text: 'Optional DDoS Protection Addon', icon: ShieldCheck },
        { text: 'Usage Monitoring & Analytics', icon: BarChart },
      ],
      approxPrice: '₹19,999/mo',
      checkoutLink: '/contact-sales',
    },
    {
      name: 'Dedicated IPv4 Subnet (/22)',
      slug: 'ipv4-slash-22',
      icon: Layers, 
      color: 'purple',
      description: 'Acquire a larger /22 IPv4 subnet (1024 IPs) for extensive network requirements, offering greater scalability and flexibility for enterprise-level applications and services.',
      features: [
        { text: 'Full /22 Subnet (1021 Usable IPs)', icon: Route },
        { text: 'Premium Clean IP Addresses', icon: ShieldCheck },
        { text: 'Advanced BGP Session Control', icon: WifiSolidIcon },
        { text: 'Dedicated RIPE/ARIN LIR Support', icon: GlobeIcon },
        { text: 'Customizable Network Policies', icon: Settings },
        { text: 'Advanced DDoS Protection Options', icon: ShieldCheck },
        { text: 'Comprehensive Traffic Analysis', icon: BarChart },
      ],
      approxPrice: '₹74,999/mo',
      checkoutLink: '/contact-sales',
    }
  ];

  const ProductCard = ({ product, index }) => (
    <motion.div 
      className={`relative flex flex-col p-8 md:p-12 rounded-2xl border-2 border-${product.color}-500/70 bg-gray-900/50 backdrop-blur-xl shadow-2xl shadow-${product.color}-500/30 overflow-hidden plan-card-shiny`}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.2 }}
    >
      <div className={`absolute -top-16 -left-16 w-64 h-64 rounded-full bg-gradient-to-br from-${product.color}-600/50 to-transparent opacity-20 blur-3xl animate-pulse`}></div>
      <div className={`absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-tl from-${product.color}-700/50 to-transparent opacity-15 blur-3xl animate-pulse animation-delay-2000`}></div>
      
      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <product.icon className={`w-12 h-12 text-${product.color}-300 mr-4`} />
          <h2 className={`text-3xl md:text-4xl font-bold text-${product.color}-300`}>{product.name}</h2>
        </div>
        <p className="text-gray-300 mb-10 text-lg leading-relaxed">{product.description}</p>
        
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mb-12">
          {product.features.map((feature, idx) => {
            const FeatureIcon = feature.icon;
            return (
              <div key={idx} className="flex items-center">
                <FeatureIcon className={`w-7 h-7 mr-4 text-${product.color}-400 flex-shrink-0 p-1 bg-${product.color}-500/10 rounded-md`} />
                <span className="text-gray-200 text-md">{feature.text}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-auto flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-700/60">
          <p className={`text-3xl font-extrabold text-${product.color}-400 mb-4 sm:mb-0`}>
            Approx. {product.approxPrice}
            <span className="text-sm font-normal text-gray-400"> (Pricing varies)</span>
          </p>
          <Button asChild size="lg" className={`bg-gradient-to-r from-${product.color}-500 to-${product.color}-700 hover:from-${product.color}-600 hover:to-${product.color}-800 text-white font-semibold shadow-lg hover:shadow-${product.color}-500/40 transition-all duration-300 transform hover:scale-105`}>
            <Link to={product.checkoutLink}>
              Get a Custom Quote <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-6 text-center">
          Dedicated IP subnets are subject to justification and regional availability. Contact our sales team for a detailed consultation.
        </p>
      </div>
    </motion.div>
  );

  const heroData = {
    title: "IP Pools & Subnets",
    description: "Gain greater control and flexibility over your network presence with dedicated IP subnets from XiteNodes.",
    image: "https://images.unsplash.com/photo-1558541966-d1071f7329bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    browseLink: "#ip-pools-details",
    browseButtonText: "Explore Subnet Options",
    HeroIcon: Network,
    colorScheme: { title: 'text-cyan-400', button: 'from-cyan-500 to-purple-600', featureIcon: 'text-cyan-400' },
  };


  return (
    <div className="min-h-screen pb-16 relative overflow-hidden">
      <Helmet>
        <title>IP Pools & Subnets | Dedicated IPv4 & IPv6 - XiteNodes</title>
        <meta name="description" content="Dedicated IPv4 subnets and IPv6 pools from XiteNodes India. BYOIP support, DDoS-protected IPs, and flexible IP management for your infrastructure." />
        <link rel="canonical" href="https://xitenodes.com/ip-pools" />
        <meta property="og:title" content="IP Pools & Subnets | Dedicated IPv4 & IPv6 - XiteNodes" />
        <meta property="og:description" content="Dedicated IPv4 subnets and IPv6 pools from XiteNodes India with BYOIP support and DDoS protection." />
        <meta property="og:url" content="https://xitenodes.com/ip-pools" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IP Pools & Subnets | Dedicated IPv4 & IPv6 - XiteNodes" />
        <meta name="twitter:description" content="Dedicated IPv4 subnets and IPv6 pools with BYOIP support and DDoS protection." />
      </Helmet>
      <AnimatedParticles count={20} />
      <GenericHero {...heroData} />

      <div id="ip-pools-details" className="container mx-auto px-6 py-12 md:py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className={`bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-cyan-400 to-purple-300`}>
              Dedicated IP Solutions
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Empower your network with clean, dedicated IP subnets tailored for your specific requirements.
          </p>
        </motion.div>

        <div className="space-y-16">
          {products.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="mt-20 text-center p-8 glass-effect rounded-xl max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Why Dedicated IP Pools?</h2>
          <ul className="space-y-3 text-gray-300 text-left text-md list-inside list-disc marker:text-cyan-400">
            <li><strong className="text-cyan-300">Enhanced Reputation:</strong> Control your sender reputation for email marketing and other services.</li>
            <li><strong className="text-cyan-300">Network Isolation:</strong> Isolate your services from potential "bad neighbor" effects on shared IPs.</li>
            <li><strong className="text-cyan-300">Custom Routing:</strong> Implement custom BGP routing policies and announcements.</li>
            <li><strong className="text-cyan-300">Scalability:</strong> Easily manage IP allocation for growing infrastructure and numerous services.</li>
            <li><strong className="text-cyan-300">Security:</strong> Apply specific firewall rules and security policies across your IP range.</li>
          </ul>
           <Button asChild size="lg" variant="outline" className="mt-10 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white">
             <Link to="/infrastructure">Our Network Infrastructure <Route className="ml-2 w-5 h-5" /></Link>
           </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default IpPoolsPage;
