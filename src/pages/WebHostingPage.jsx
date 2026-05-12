
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, Server, Database, Shield, Users, ArrowRight, Terminal, Mail, Zap, Wifi, Globe, PlusCircle, Cpu, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedParticles from '@/components/AnimatedParticles';

const WebHostingPage = () => {
  const plans = [
    {
      name: 'Starter',
      price: '₹29',
      priceSuffix: '/Month',
      borderColor: 'border-pink-500',
      buttonClass: 'bg-pink-500 hover:bg-pink-600',
      features: [
        { text: '5 GB RAM', icon: Server, available: true },
        { text: '1 GB NVMe', icon: Database, available: true },
        { text: '1 Domain Limit', icon: Globe, available: true },
        { text: '1 Database Limit', icon: Database, available: true },
        { text: '1 FTP Account Limit', icon: Users, available: true },
        { text: '0 SSH Account Limit', icon: Terminal, available: false },
        { text: '1 SMTP Relay', icon: Mail, available: true },
        { text: '10 GB Bandwidth Limit', icon: Wifi, available: true },
      ],
      checkoutLink: 'https://billing.xitenodes.com/index.php/store/webhosting/starter',
      color: 'pink'
    },
    {
      name: 'Business',
      price: '₹49',
      priceSuffix: '/Month',
      borderColor: 'border-purple-500',
      buttonClass: 'bg-purple-500 hover:bg-purple-600',
      features: [
        { text: 'Supports WordPress', icon: CheckCircle, available: true },
        { text: '10 GB NVMe', icon: Database, available: true },
        { text: '5 Domain Limit', icon: Globe, available: true },
        { text: '5 Database Limit', icon: Database, available: true },
        { text: '3 FTP Account Limit', icon: Users, available: true },
        { text: '3 SSH Account Limit', icon: Terminal, available: true },
        { text: '5 SMTP Relay', icon: Mail, available: true },
        { text: '10 GB Bandwidth Limit', icon: Wifi, available: true },
        { text: 'WP Tool Kit', icon: CheckCircle, available: true },
      ],
      checkoutLink: 'https://billing.xitenodes.com/index.php/store/webhosting/business',
      color: 'purple'
    },
    {
      name: 'Enterprise',
      price: '₹99',
      priceSuffix: '/Month',
      borderColor: 'border-cyan-500',
      buttonClass: 'bg-cyan-500 hover:bg-cyan-600',
      features: [
        { text: 'Supports WordPress', icon: CheckCircle, available: true },
        { text: '100 GB NVMe', icon: Database, available: true },
        { text: 'Unlimited Domain Limit', icon: Globe, available: true },
        { text: 'Unlimited Database Limit', icon: Database, available: true },
        { text: 'Unlimited FTP Account Limit', icon: Users, available: true },
        { text: 'Unlimited SSH Account Limit', icon: Terminal, available: true },
        { text: 'Unlimited SMTP Relay', icon: Mail, available: true },
        { text: 'Unmetered Bandwidth Limit', icon: Wifi, available: true },
      ],
      checkoutLink: 'https://billing.xitenodes.com/index.php/store/webhosting/enterprise',
      color: 'cyan'
    },
  ];

  const PlanCard = ({ plan }) => (
    <motion.div
      className={`relative flex flex-col p-8 rounded-xl border-2 ${plan.borderColor} bg-gray-900/40 backdrop-blur-md shadow-2xl overflow-hidden group plan-card-shiny hover:shadow-${plan.color}-500/40 transition-all duration-300 ease-out transform hover:-translate-y-2 h-full`}
      whileHover={{ scale: 1.02 }}
    >
      <div className="mb-6 text-center pt-4">
        <h3 className="text-3xl font-bold text-white mb-2">{plan.name}</h3>
        <p className={`text-4xl font-extrabold text-${plan.color}-400`}>
          {plan.price}
          {plan.priceSuffix && <span className="text-base font-normal text-gray-400">{plan.priceSuffix}</span>}
        </p>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300 feature-item-hover">
            {(() => { const Icon = feature.icon; return <Icon className={`w-5 h-5 mr-3 ${feature.available ? `text-${plan.color}-400` : 'text-gray-500'} flex-shrink-0`} /> })()}
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>

      {plan.customQuote ? (
        <Button asChild className={`w-full mt-auto py-3 text-lg font-semibold ${plan.buttonClass} text-white transition-transform duration-200 group-hover:scale-105`}>
          <Link to={plan.checkoutLink}>
            Get a Custom Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </Button>
      ) : (
        <Button
          onClick={() => window.open(plan.checkoutLink, '_blank')}
          className={`w-full mt-auto py-3 text-lg font-semibold ${plan.buttonClass} text-white transition-transform duration-200 group-hover:scale-105`}
        >
          Choose Plan <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      )}
    </motion.div>
  );

  return (
    <div className="min-h-screen pb-16 relative overflow-hidden">
      <Helmet>
        <title>Web Hosting India | cPanel & LiteSpeed Hosting - XiteNodes</title>
        <meta name="description" content="Affordable web hosting in India with cPanel, LiteSpeed, free SSL, and CloudLinux. NVMe storage, 99.9% uptime, and 24/7 support. Plans from ₹29/mo." />
        <link rel="canonical" href="https://xitenodes.com/web-hosting" />
        <meta property="og:title" content="Web Hosting India | cPanel & LiteSpeed Hosting - XiteNodes" />
        <meta property="og:description" content="Affordable web hosting in India with cPanel, LiteSpeed, free SSL, and CloudLinux. Plans from ₹29/mo." />
        <meta property="og:url" content="https://xitenodes.com/web-hosting" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Hosting India | cPanel & LiteSpeed Hosting - XiteNodes" />
        <meta name="twitter:description" content="Affordable web hosting in India with cPanel, LiteSpeed, free SSL, and CloudLinux. Plans from ₹29/mo." />
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              Web Hosting Plans
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Powerful, reliable, and affordable web hosting solutions for websites of all sizes. Get started today!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          <h2 className="text-3xl font-bold text-white mb-6">Not Sure Which Plan to Choose?</h2>
          <p className="text-gray-300 mb-6">
            Our experts are here to help! Whether you're launching a small blog or a large e-commerce site, we can guide you to the perfect hosting solution.
            Contact us for a personalized consultation or if you need a custom enterprise-grade setup.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg">
             <Link to="/contact-sales">Contact Sales <PlusCircle className="w-5 h-5 ml-2" /></Link>
          </Button>
        </motion.div>
         <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          className="mt-12 text-center"
        >
           <Button asChild size="lg" variant="outline" className="border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white">
             <Link to="/infrastructure">Explore Our Infrastructure <Zap className="ml-2 w-5 h-5" /></Link>
           </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default WebHostingPage;
