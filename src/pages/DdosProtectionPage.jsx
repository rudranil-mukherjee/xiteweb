
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Database, Server, Layers, Settings, ArrowRight, HelpCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedParticles from '@/components/AnimatedParticles';

const DdosProtectionPage = () => {
  const categories = [
    {
      name: 'Game Server Protection',
      icon: Zap,
      color: 'pink',
      description: 'Specialized protection for game servers, ensuring low latency and uninterrupted gameplay even during attacks.',
      plans: [
        { 
          name: 'Protected Proxy (500Gbps)', 
          features: ['Location: India', 'Dedicated IP/Port Available', 'Optimized for Low Latency Gaming', 'TCP/UDP Game Protocols'],
          price: '₹1,499/mo',
          checkoutLink: 'https://billing.xitenodes.com/ddos-protection/game/proxy-500gbps'
        },
        { 
          name: 'Cloudflare Spectrum (Protected Port)', 
          features: ['Anycast Network (Global)', 'Lowest Latency via CF Edge', 'Dedicated Port Available', 'Advanced TCP/UDP Mitigation'],
          price: '₹2,999/mo',
          checkoutLink: 'https://billing.xitenodes.com/ddos-protection/game/cf-spectrum'
        },
        { 
          name: 'Custom Game Shield', 
          features: ['Tailored Mitigation Rules', 'Specific Game Protocol Filters', 'Scalable Capacity', 'Consultative Setup'],
          price: 'Get Quote',
          customQuote: true,
          checkoutLink: '/contact-sales'
        },
      ]
    },
    {
      name: 'L3/L4 DDoS Protection',
      icon: Layers,
      color: 'purple',
      description: 'Robust network-layer protection against volumetric attacks like UDP floods, SYN floods, and ICMP attacks.',
      plans: [
        { 
          name: '500Gbps Full IPv4 Protection', 
          features: ['Dedicated IP (Full /32)', 'Unmetered Bandwidth', 'All Ports (1-65535) Protected', 'Location: India (Good Latency for India)'],
          price: '₹4,999/mo',
          checkoutLink: 'https://billing.xitenodes.com/ddos-protection/l3l4/500gbps-ipv4'
        },
        { 
          name: '1Tbps Full IPv4 Protection', 
          features: ['Dedicated IP (Full /32)', 'Unmetered Bandwidth', 'Advanced Traffic Scrubbing', 'Global Mitigation Network'],
          price: '₹8,999/mo',
          checkoutLink: 'https://billing.xitenodes.com/ddos-protection/l3l4/1tbps-ipv4'
        },
        { 
          name: 'Custom L3/L4 Shield', 
          features: ['Multi-Terabit Capacity Options', 'Specific IP Range Protection', 'BGP Integration Options', 'Dedicated Mitigation Hardware'],
          price: 'Get Quote',
          customQuote: true,
          checkoutLink: '/contact-sales'
        },
      ]
    },
    {
      name: 'L7 DDoS Protection',
      icon: Globe,
      color: 'cyan',
      description: 'Application-layer protection against sophisticated attacks targeting web applications, APIs, and online services.',
      plans: [
        { 
          name: 'Premium L7 Shield', 
          features: ['Managed DNS', 'Premium SSL Certificate', 'Advanced WAF (Web Application Firewall)', 'Rate Limiting & Bot Management'],
          price: '₹2,499/mo',
          checkoutLink: 'https://billing.xitenodes.com/ddos-protection/l7/premium-shield'
        },
        { 
          name: 'Enterprise L7 Shield', 
          features: ['Custom SSL Certificates', 'Advanced DDoS Mitigation Engine', 'Behavioral Analysis', 'Dedicated WAF Instances', 'API Protection'],
          price: '₹7,999/mo',
          checkoutLink: 'https://billing.xitenodes.com/ddos-protection/l7/enterprise-shield'
        },
        { 
          name: 'Custom L7 Defense', 
          features: ['Tailored WAF Rulesets', 'Machine Learning Anomaly Detection', 'Geo-blocking & IP Reputation', '24/7 Security Operations Center'],
          price: 'Get Quote',
          customQuote: true,
          checkoutLink: '/contact-sales'
        },
      ]
    }
  ];

  const PlanCard = ({ plan, categoryColor }) => (
    <motion.div 
      className={`relative flex flex-col p-6 rounded-xl border-2 border-${categoryColor}-500/60 bg-gray-800/50 backdrop-blur-md shadow-xl hover:shadow-${categoryColor}-500/30 transition-all duration-300 ease-out transform hover:-translate-y-1.5 h-full plan-card-shiny overflow-hidden`}
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1 }
      }}
    >
      <h4 className={`text-xl font-semibold text-${categoryColor}-400 mb-3`}>{plan.name}</h4>
      <ul className="space-y-2 mb-6 text-sm flex-grow">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-gray-300">
            <ShieldCheck className={`w-4 h-4 mr-2 text-${categoryColor}-500 flex-shrink-0`} />
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-700/50">
        <p className={`text-2xl font-bold text-${categoryColor}-400`}>
          {plan.price}
          {plan.price !== 'Get Quote' && <span className="text-xs text-gray-400">/mo</span>}
        </p>
        {plan.customQuote ? (
          <Button asChild size="sm" className={`bg-gradient-to-r from-${categoryColor}-500 to-${categoryColor}-700 hover:brightness-110 text-white font-semibold`}>
            <Link to={plan.checkoutLink}>Get Quote <HelpCircle className="w-4 h-4 ml-1.5" /></Link>
          </Button>
        ) : (
          <Button 
            onClick={() => window.open(plan.checkoutLink, '_blank')}
            size="sm" 
            className={`bg-gradient-to-r from-${categoryColor}-500 to-${categoryColor}-700 hover:brightness-110 text-white font-semibold`}
          >
            Order Now <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen pb-16 relative overflow-hidden">
      <AnimatedParticles count={30} />
      <div className="container mx-auto px-6 py-12 md:py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <ShieldCheck className="w-16 h-16 mx-auto mb-4 text-purple-400" />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
              DDoS Protection Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Robust, multi-layered DDoS mitigation to keep your online services secure and available, 24/7.
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <motion.section 
              key={category.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{ visible: { transition: { staggerChildren: 0.1 }}}}
            >
              <div className="flex items-center mb-8">
                <category.icon className={`w-10 h-10 text-${category.color}-400 mr-4`} />
                <div>
                  <h2 className={`text-3xl font-bold text-${category.color}-400`}>{category.name}</h2>
                  <p className="text-gray-400 text-sm">{category.description}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.plans.map((plan) => (
                  <PlanCard key={plan.name} plan={plan} categoryColor={category.color} />
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="mt-20 text-center p-8 glass-effect rounded-xl max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Unsure Which Protection You Need?</h2>
          <p className="text-gray-300 mb-6">
            Our security experts can analyze your specific needs and recommend the optimal DDoS protection strategy for your applications and infrastructure. Don't leave your online presence vulnerable.
          </p>
           <Button asChild size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white text-lg">
             <Link to="/contact-sales">Consult Our Security Experts <Info className="w-5 h-5 ml-2" /></Link>
           </Button>
        </motion.div>
         <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
          className="mt-12 text-center"
        >
           <Button asChild size="lg" variant="outline" className="border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white">
             <Link to="/infrastructure">How Our Network Handles Attacks <Zap className="ml-2 w-5 h-5" /></Link>
           </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default DdosProtectionPage;