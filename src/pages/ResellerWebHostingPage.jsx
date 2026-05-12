import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, Server, Database, Users, ArrowRight, Terminal, Mail, Wifi, Globe, PlusCircle, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedParticles from '@/components/AnimatedParticles';

const ResellerWebHostingPage = () => {
  const plans = [
    {
      name: 'Starter Reseller',
      price: '₹99.00',
      priceSuffix: ' INR',
      borderColor: 'border-pink-500',
      buttonClass: 'bg-pink-500 hover:bg-pink-600',
      features: [
        { text: '30 cPanel Account', icon: Users, available: true },
        { text: '40GB NVMe SSD Disk Space', icon: Database, available: true },
        { text: '2 GB RAM per cP Account', icon: Server, available: true },
        { text: '1 core CPU', icon: Terminal, available: true },
        { text: '2TB Bandwidth', icon: Wifi, available: true },
        { text: '(worth $15) Free SSL', icon: Shield, available: true },
        { text: 'Free Migrations', icon: CheckCircle, available: true },
        { text: 'Free WHMCS [GPL]', icon: CheckCircle, available: true },
        { text: 'Weekly Backups', icon: CheckCircle, available: true },
        { text: 'Unlimited Subdomains', icon: Globe, available: true },
        { text: 'Unlimited Databases', icon: Database, available: true },
        { text: 'Unlimited Email Accounts', icon: Mail, available: true },
        { text: '24/7 Live Support', icon: CheckCircle, available: true },
        { text: 'OverSelling Allowed', icon: CheckCircle, available: true },
      ],
      checkoutLink: 'https://billing.xitenodes.com/index.php/store/reseller-web-hosting/starter-reseller',
      color: 'pink'
    },
    {
      name: 'Growth Reseller',
      price: '₹199.00',
      priceSuffix: ' INR',
      borderColor: 'border-purple-500',
      buttonClass: 'bg-purple-500 hover:bg-purple-600',
      features: [
        { text: '60 cPanel Account', icon: Users, available: true },
        { text: '90GB NVMe SSD Disk Space', icon: Database, available: true },
        { text: '2 GB RAM per cP Account', icon: Server, available: true },
        { text: '1 core CPU', icon: Terminal, available: true },
        { text: '2TB Bandwidth', icon: Wifi, available: true },
        { text: '(worth $15) Free SSL', icon: Shield, available: true },
        { text: 'Free Migrations', icon: CheckCircle, available: true },
        { text: 'Free WHMCS [GPL]', icon: CheckCircle, available: true },
        { text: 'Weekly Backups', icon: CheckCircle, available: true },
        { text: 'Unlimited Subdomains', icon: Globe, available: true },
        { text: 'Unlimited Databases', icon: Database, available: true },
        { text: 'Unlimited Email Accounts', icon: Mail, available: true },
        { text: '24/7 Live Support', icon: CheckCircle, available: true },
        { text: 'OverSelling Allowed', icon: CheckCircle, available: true },
      ],
      checkoutLink: 'https://billing.xitenodes.com/index.php/store/reseller-web-hosting/growth-reseller',
      color: 'purple'
    },
    {
      name: 'Growth+ Reseller',
      price: '₹499.00',
      priceSuffix: ' INR',
      borderColor: 'border-cyan-500',
      buttonClass: 'bg-cyan-500 hover:bg-cyan-600',
      features: [
        { text: '120 cPanel Account', icon: Users, available: true },
        { text: '140GB NVMe SSD Disk Space', icon: Database, available: true },
        { text: '2 GB RAM per cP Account', icon: Server, available: true },
        { text: '1 core CPU', icon: Terminal, available: true },
        { text: '2TB Bandwidth', icon: Wifi, available: true },
        { text: '(worth $15) Free SSL', icon: Shield, available: true },
        { text: 'Free Migrations', icon: CheckCircle, available: true },
        { text: 'Free WHMCS [GPL]', icon: CheckCircle, available: true },
        { text: 'Weekly Backups', icon: CheckCircle, available: true },
        { text: 'Unlimited Subdomains', icon: Globe, available: true },
        { text: 'Unlimited Databases', icon: Database, available: true },
        { text: 'Unlimited Email Accounts', icon: Mail, available: true },
        { text: '24/7 Live Support', icon: CheckCircle, available: true },
        { text: 'OverSelling Allowed', icon: CheckCircle, available: true },
      ],
      checkoutLink: 'https://billing.xitenodes.com/index.php/store/reseller-web-hosting/growth-reseller-1',
      color: 'cyan'
    },
    {
      name: 'Corp Reseller',
      price: '₹899.00',
      priceSuffix: ' INR',
      borderColor: 'border-emerald-500',
      buttonClass: 'bg-emerald-500 hover:bg-emerald-600',
      features: [
        { text: '200 cPanel Account', icon: Users, available: true },
        { text: '180GB NVMe SSD Disk Space', icon: Database, available: true },
        { text: '2 GB RAM per cP Account', icon: Server, available: true },
        { text: '1 core CPU', icon: Terminal, available: true },
        { text: '2TB Bandwidth', icon: Wifi, available: true },
        { text: '(worth $15) Free SSL', icon: Shield, available: true },
        { text: 'Free Migrations', icon: CheckCircle, available: true },
        { text: 'Free WHMCS [GPL]', icon: CheckCircle, available: true },
        { text: 'Weekly Backups', icon: CheckCircle, available: true },
        { text: 'Unlimited Subdomains', icon: Globe, available: true },
        { text: 'Unlimited Databases', icon: Database, available: true },
        { text: 'Unlimited Email Accounts', icon: Mail, available: true },
        { text: '24/7 Live Support', icon: CheckCircle, available: true },
        { text: 'OverSelling Allowed', icon: CheckCircle, available: true },
      ],
      checkoutLink: 'https://billing.xitenodes.com/index.php/store/reseller-web-hosting/corp-reseller',
      color: 'emerald'
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

      <Button
        onClick={() => window.open(plan.checkoutLink, '_blank')}
        className={`w-full mt-auto py-3 text-lg font-semibold ${plan.buttonClass} text-white transition-transform duration-200 group-hover:scale-105`}
      >
        Choose Plan <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </motion.div>
  );

  return (
    <div className="min-h-screen pb-16 relative overflow-hidden">
      <Helmet>
        <title>Reseller Web Hosting India | Start Your Hosting Business - XiteNodes</title>
        <meta name="description" content="Reseller web hosting in India with WHM/cPanel, white-label branding, and LiteSpeed. Start your hosting business with plans from ₹99/mo. Free SSL and 24/7 support." />
        <link rel="canonical" href="https://xitenodes.com/reseller-web-hosting" />
        <meta property="og:title" content="Reseller Web Hosting India | Start Your Hosting Business - XiteNodes" />
        <meta property="og:description" content="Reseller web hosting in India with WHM/cPanel, white-label branding, and LiteSpeed. Plans from ₹99/mo." />
        <meta property="og:url" content="https://xitenodes.com/reseller-web-hosting" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reseller Web Hosting India | Start Your Hosting Business - XiteNodes" />
        <meta name="twitter:description" content="Reseller web hosting in India with WHM/cPanel and white-label branding. Plans from ₹99/mo." />
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
              Reseller Web Hosting
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Resell fast, secure, and feature-rich hosting with WHM and cPanel. Includes WHMCS [GPL], free SSL, migrations, and more.
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
          <h2 className="text-3xl font-bold text-white mb-6">Questions about Reseller Hosting?</h2>
          <p className="text-gray-300 mb-6">
            Our team can help you choose the right reseller plan and assist with migrations. Get in touch for tailored guidance.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg">
            <Link to="/contact-sales">Contact Sales <PlusCircle className="w-5 h-5 ml-2" /></Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ResellerWebHostingPage;
