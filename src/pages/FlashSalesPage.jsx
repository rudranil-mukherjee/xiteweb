import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Server, Cpu, Zap, Shield, Database, Wifi, Gauge, ArrowRight, PlusCircle, CheckCircle, HardDrive, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedParticles from '@/components/AnimatedParticles';
import GenericHero from '@/components/GenericHero';

const FlashSalesPage = () => {
  // Set if_empty to true to show "no flash sale now" message, or false to show plans
  const if_empty = false;

  // Sample flash sale plans - these will be shown when if_empty is false
  const plans = [
    { 
      name: 'Flash VPS 32GB',
      location: 'India, Mumbai', 
      cpu: 'AMD EPYC 9354P 8 Cores',
      ram: '32GB DDR4',
      disk: '400GB NVMe SSD',
      bandwidth: '32TB',
      ddos: 'Standard',
      panel: 'None',
      features: ['Limited Time Offer', '50% Discount'], 
      price: '1999',
      originalPrice: '4999',
      checkoutLink: 'https://billing.xitenodes.com/index.php/store/flash-sale/kvm-amd',
      color: 'pink', 
      ipConfig: '1 Free IPv4, /64 IPv6',
      saleEnds: '48 hours'
    }
  ];

  const heroData = {
    title: "Flash Sales",
    description: "Limited-time offers on our premium VPS and dedicated servers. Act fast — these deals won't last long!",
    image: "https://images.unsplash.com/photo-1552960562-daf630e9278b?q=80&w=1470&auto=format&fit=crop",
    browseLink: "#flash-plans",
    browseButtonText: "Browse Deals",
    HeroIcon: Zap,
    colorScheme: { title: 'text-yellow-400', button: 'from-yellow-500 to-pink-600', featureIcon: 'text-yellow-400' },
  };

  const PlanCard = ({ plan }) => (
    <motion.div
      className={`relative flex flex-col rounded-2xl border-2 border-${plan.color}-500/70 bg-slate-800/60 backdrop-blur-lg shadow-2xl group plan-card-shiny overflow-hidden hover:shadow-${plan.color}-500/30 transition-all duration-300 ease-out transform hover:-translate-y-2 h-full`}
      whileHover={{ scale: 1.02 }}
    >
      <div className={`absolute -top-1 -right-1 px-3 py-0.5 text-xs font-semibold text-white bg-${plan.color}-600 rounded-bl-lg rounded-tr-lg z-10`}>
        {plan.name.split(' ')[1] || (plan.customQuote ? "Custom" : plan.name.split(' ')[0])}
      </div>
      
      {/* Flash Sale Badge */}
      <div className={`absolute -top-1 -left-1 px-3 py-0.5 text-xs font-semibold text-white bg-red-600 rounded-br-lg rounded-tl-lg z-10`}>
        FLASH SALE
      </div>
      
      {/* Sale Ends Countdown */}
      <div className={`absolute top-8 -left-1 px-3 py-0.5 text-xs font-semibold text-white bg-yellow-600 rounded-r-lg z-10`}>
        Ends in: {plan.saleEnds}
      </div>

      <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br from-${plan.color}-500/80 to-${plan.color}-700/80 opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-700 ease-out blur-xl`}></div>

      <div className="relative z-10 flex-grow p-6 md:p-8">
        <div className="mb-6 text-center">
          <h3 className={`text-3xl font-bold text-${plan.color}-400 mb-1 hero-title-font`}>{plan.name}</h3>
          <p className="text-sm text-gray-400 hero-description-font">{plan.location}</p>
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
                <span className="font-semibold text-gray-200 hero-description-font">{item.label}: </span>
                <span className="text-gray-300 hero-description-font">{item.value}</span>
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
          <p className="text-base font-normal text-gray-400 line-through mb-1">{plan.originalPrice}/mo</p>
          <p className={`text-4xl font-extrabold text-${plan.color}-400`}>
            ₹{plan.price}
            <span className="text-base font-normal text-gray-400">/mo</span>
          </p>
        </div>
        <Button
          onClick={() => window.open(plan.checkoutLink, '_blank')}
          className={`w-full py-3 text-lg font-semibold bg-gradient-to-r from-${plan.color}-500 to-${plan.color}-700 hover:from-${plan.color}-600 hover:to-${plan.color}-800 text-white transition-transform duration-200 group-hover:scale-105`}
        >
          Order Now <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </motion.div>
  );

  // Empty state component to show when there are no flash sales
  const EmptyState = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="text-center p-12 glass-effect rounded-xl max-w-3xl mx-auto"
    >
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-24 h-24 rounded-full bg-slate-700 flex items-center justify-center mb-6"
        >
          <AlertCircle className="w-12 h-12 text-yellow-400" />
        </motion.div>
        
        <h2 className="text-3xl font-bold text-white mb-4 hero-title-font">No Flash Sales Right Now</h2>
        <p className="text-xl text-gray-300 mb-8 hero-description-font">
          Our flash sales come and go quickly! Check back soon for exclusive limited-time offers.
        </p>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 border border-purple-500/30 rounded-lg bg-slate-800/50 max-w-md"
        >
          <h3 className="text-xl font-semibold text-purple-400 mb-2">Want to be notified?</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter to be the first to know when new flash sales are available.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            <Link to="/newsletter">Get Notified <Zap className="ml-2 w-5 h-5" /></Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen pb-16 relative overflow-hidden">
      <Helmet>
        <title>Flash Sales | Limited Time Server Deals - XiteNodes</title>
        <meta name="description" content="Grab limited-time flash sale deals on VPS, game servers, and dedicated servers at XiteNodes. Massive discounts on premium hosting in India." />
        <link rel="canonical" href="https://xitenodes.com/flash-sales" />
        <meta property="og:title" content="Flash Sales | Limited Time Server Deals - XiteNodes" />
        <meta property="og:description" content="Limited-time flash sale deals on VPS, game servers, and dedicated servers at XiteNodes India." />
        <meta property="og:url" content="https://xitenodes.com/flash-sales" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Flash Sales | Limited Time Server Deals - XiteNodes" />
        <meta name="twitter:description" content="Grab limited-time flash sale deals on VPS, game servers, and dedicated servers at XiteNodes." />
      </Helmet>
      <AnimatedParticles count={30} />
      <GenericHero {...heroData} />
      <div id="flash-plans" className="container mx-auto px-6 py-12 md:py-20 relative z-10">

        {if_empty ? (
          <EmptyState />
        ) : (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </div>
        )}

        {!if_empty && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="mt-20 text-center p-8 glass-effect rounded-xl max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Why Our Flash Sales Are Special</h2>
            <ul className="space-y-3 text-gray-300 text-left max-w-md mx-auto">
              <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-pink-400" />Massive Discounts on Premium Servers</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-purple-400" />Same High-Quality Infrastructure</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-cyan-400" />No Compromise on Performance</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-blue-400" />Limited Time, Unlimited Potential</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-pink-400" />24/7 Support Included</li>
            </ul>
            <Button asChild size="lg" variant="outline" className="mt-8 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-white">
              <Link to="/contact-sales">Need a Custom Solution? <PlusCircle className="ml-2 w-5 h-5" /></Link>
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FlashSalesPage;