import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
// Add this to the import statement if not already present
import { Diamond } from 'lucide-react';
import { Server, Cpu, Zap, Shield, Database, Wifi, Gauge, ArrowRight, PlusCircle, CheckCircle, HardDrive, Package, TrendingUp, Sparkles, Brain, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedParticles from '@/components/AnimatedParticles';
import GenericHero from '@/components/GenericHero';

// Add the new Noida Gold VPS category to vpsPlanData
const vpsPlanData = {
  'entry-level': {
    title: 'Entry Level VPS',
    icon: Package,
    color: 'pink',
    description: 'Affordable & reliable VPS for small projects, personal websites, and development. Powered by Intel Xeon E5-2667 v4 3.2GHz',
    plans: [
      { name: 'Entry VPS Guardians', cpu: '2 vCore Intel Xeon', ram: '8GB DDR4', disk: '25GB SSD', bandwidth: '1TB', price: '699', ipConfig: '1 IPv4, /64 IPv6', features: ['Basic DDoS', 'Custom Panel', 'Full Root Access'], checkoutLink: 'https://billing.xitenodes.com/store/high-performance-vps/vps-chotu' },
      { name: 'Entry VPS Avengers', cpu: '4 vCore Intel Xeon', ram: '16GB DDR4', disk: '50GB SSD', bandwidth: '2TB', price: '999', ipConfig: '1 IPv4, /64 IPv6', features: ['Basic DDoS', 'Custom Panel', 'Full Root Access'], checkoutLink: 'https://billing.xitenodes.com/store/high-performance-vps/vps-mantri' },
      { name: 'Entry VPS Eternals', cpu: '8 vCore Intel Xeon', ram: '32GB DDR4', disk: '160GB SSD', bandwidth: '3TB', price: '1299', ipConfig: '1 IPv4, /64 IPv6', features: ['Basic DDoS', 'Custom Panel', 'Full Root Access'], checkoutLink: 'https://billing.xitenodes.com/store/high-performance-vps/vps-raja' },
      { name: 'Entry VPS Beyonder', cpu: '10 vCore Intel Xeon', ram: '48GB DDR4', disk: '180GB SSD', bandwidth: '3TB', price: '1599', ipConfig: '1 IPv4, /64 IPv6', features: ['Basic DDoS', 'Custom Panel', 'Full Root Access'], checkoutLink: 'https://billing.xitenodes.com/store/high-performance-vps/vps-beyonder' },
      { name: 'VPS One-Above-All', cpu: '12 vCore Intel Xeon', ram: '64GB DDR4', disk: '200GB SSD', bandwidth: '3TB', price: '1899', ipConfig: '1 IPv4, /64 IPv6', features: ['Basic DDoS', 'Custom Panel', 'Full Root Access'], checkoutLink: 'https://billing.xitenodes.com/store/high-performance-vps/vps-one-above-all' }
    ]
  },
  'noida-gold': {
    title: 'Noida Gold VPS',
    icon: Diamond,
    color: 'yellow',
    description: 'Premium Intel Gold processors with enhanced performance and reliability for demanding applications.',
    plans: [
      { name: 'Intel Gold KVM 1', cpu: '4 vCore Intel Gold', ram: '8GB DDR4', disk: '200GB SSD', bandwidth: '400 MBPS', price: '699', ipConfig: '1 IPv4', features: ['Intel Gold Processor', 'Enhanced Performance', 'Premium Support'], checkoutLink: 'https://billing.xitenodes.com/store/noida-gold-vps/intel-gold-kvm-1' },
      { name: 'Intel Gold KVM 2', cpu: '8 vCore Intel Gold', ram: '16GB DDR4', disk: '1000GB SSD', bandwidth: '400 MBPS', price: '900', ipConfig: '1 IPv4', features: ['Intel Gold Processor', 'Enhanced Performance', 'Premium Support'], checkoutLink: 'https://billing.xitenodes.com/store/noida-gold-vps/intel-gold-kvm-2' },
      { name: 'Intel Gold KVM 3', cpu: '12 vCore Intel Gold', ram: '32GB DDR4', disk: '4000GB SSD', bandwidth: '400 MBPS', price: '1500', ipConfig: '1 IPv4', features: ['Intel Gold Processor', 'Enhanced Performance', 'Premium Support'], checkoutLink: 'https://billing.xitenodes.com/store/noida-gold-vps/intel-gold-kvm-3' },
      { name: 'Intel Gold KVM 4', cpu: '16 vCore Gold 6248', ram: '64GB DDR4', disk: '6000GB SSD', bandwidth: '400 MBPS', price: 'Contact Sales', ipConfig: '1 IPv4', features: ['Intel Gold 6248 Processor', 'Premium Performance', 'Enterprise Support'], checkoutLink: 'https://billing.xitenodes.com/store/noida-gold-vps/intel-gold-kvm-4' }
    ]
  },
  'noida-platinum': {
    title: 'Noida Platinum',
    icon: Diamond,
    color: 'indigo',
    description: 'Intel Platinum KVM plans in Noida with top-tier compute.',
    plans: [
      { name: 'Platinum KVM 1', cpu: '8 vCore Intel Platinum', ram: '16GB DDR4', disk: '80GB SSD', bandwidth: '400 MBPS', price: '600', ipConfig: '1 IPv4', features: ['Intel Platinum Processor', 'Enhanced Performance', 'Premium Support'], checkoutLink: 'https://billing.xitenodes.com/index.php/store/intel-platinum/platinum-kvm-1' },
      { name: 'Platinum KVM 2', cpu: '12 vCore Intel Platinum', ram: '32GB DDR4', disk: '128GB SSD', bandwidth: '400 MBPS', price: '1000', ipConfig: '1 IPv4', features: ['Intel Platinum Processor', 'Enhanced Performance', 'Premium Support'], checkoutLink: 'https://billing.xitenodes.com/index.php/store/intel-platinum/platinum-kvm-2' },
      { name: 'Platinum KVM 3', cpu: '24 vCore Intel Platinum', ram: '64GB DDR4', disk: '254GB SSD', bandwidth: '400 MBPS', price: '1899', ipConfig: '1 IPv4', features: ['Intel Platinum Processor', 'Enhanced Performance', 'Premium Support'], checkoutLink: 'https://billing.xitenodes.com/index.php/store/intel-platinum/platinum-kvm-3' }
    ]
  },
  'high-performance': {
    title: 'High Performance VPS',
    icon: TrendingUp,
    color: 'purple',
    description: 'Powerful VPS with NVMe SSDs and enhanced CPU for demanding applications. Powered by AMD EPYC Turin',
    plans: [
      { name: 'HP VPS Guardians', cpu: '4 vCore AMD EPYC Turin', ram: '8GB DDR5 ECC', disk: '25GB NVMe SSD', bandwidth: '1TB', price: '799', ipConfig: '1 IPv4, /64 IPv6', features: ['Standard DDoS', 'Custom Panel', 'NVMe Storage'], checkoutLink: 'https://billing.xitenodes.com/store/premium-vps/vps-guardians' },
      { name: 'HP VPS Avengers', cpu: '4 vCore AMD EPYC Turin', ram: '16GB DDR5 ECC', disk: '50GB NVMe SSD', bandwidth: '2TB', price: '1499', ipConfig: '1 IPv4, /64 IPv6', features: ['Standard DDoS', 'Custom Panel', 'NVMe Storage'], checkoutLink: 'https://billing.xitenodes.com/store/premium-vps/vps-avengers' },
      { name: 'HP VPS Eternals', cpu: '8 vCore AMD EPYC Turin', ram: '32GB DDR5 ECC', disk: '100GB NVMe SSD', bandwidth: '3TB', price: '2200', ipConfig: '1 IPv4, /64 IPv6', features: ['Standard DDoS', 'Custom Panel', 'NVMe Storage'], checkoutLink: 'https://billing.xitenodes.com/store/premium-vps/vps-eternals' },
      { name: 'HP VPS One-Above-All', cpu: '8 vCore AMD EPYC Turin', ram: '64GB DDR4 ECC', disk: '100GB NVMe SSD', bandwidth: '3TB', price: '4000', ipConfig: '1 IPv4, /64 IPv6', features: ['Standard DDoS', 'Custom Panel', 'NVMe Storage'], checkoutLink: 'https://billing.xitenodes.com/index.php/store/premium-vps/vps-one-above-all-1' }
    ]
  },
  'ryzen-powered': {
    title: 'Ryzen Powered VPS',
    icon: Cpu,
    color: 'cyan',
    description: 'Blazing fast VPS featuring AMD Ryzen 9 9950x CPUs for superior processing power.',
    plans: [
      { name: 'Ryzen 8GB', cpu: '2 vCore AMD Ryzen', ram: '8GB DDR5', disk: '50GB NVMe Gen4 SSD', bandwidth: '1TB', price: '1800', ipConfig: '1 IPv4, /64 IPv6', features: ['Advanced DDoS', 'Custom Panel', 'Ryzen Performance'], checkoutLink: 'https://billing.xitenodes.com/store/ryzen-vps-india/ryzen-8gb' },
      { name: 'Ryzen 12GB', cpu: '3 vCore AMD Ryzen', ram: '12GB DDR5', disk: '75GB NVMe Gen4 SSD', bandwidth: '1TB', price: '2000', ipConfig: '1 IPv4, /64 IPv6', features: ['Advanced DDoS', 'Custom Panel', 'Ryzen Performance'], checkoutLink: 'https://billing.xitenodes.com/store/ryzen-vps-india/ryzen-12gb' },
      { name: 'Ryzen 16GB', cpu: '4 vCore AMD Ryzen', ram: '16GB DDR5', disk: '120GB NVMe Gen4 SSD', bandwidth: '2TB', price: '2200', ipConfig: '1 IPv4, /64 IPv6', features: ['Advanced DDoS', 'Custom Panel', 'Ryzen Performance'], checkoutLink: 'https://billing.xitenodes.com/store/ryzen-vps-india/ryzen-16gb' },
      { name: 'Ryzen 24GB', cpu: '6 vCore AMD Ryzen', ram: '24GB DDR5', disk: '160GB NVMe Gen4 SSD', bandwidth: '2TB', price: '2399', ipConfig: '1 IPv4, /64 IPv6', features: ['Advanced DDoS', 'Custom Panel', 'Ryzen Performance'], checkoutLink: 'https://billing.xitenodes.com/store/ryzen-vps-india/ryzen-24gb' },
      { name: 'Ryzen 32GB', cpu: '8 vCore AMD Ryzen', ram: '32GB DDR5', disk: '180GB NVMe Gen4 SSD', bandwidth: '3TB', price: '4599', ipConfig: '1 IPv4, /64 IPv6', features: ['Advanced DDoS', 'Custom Panel', 'Ryzen Performance'], checkoutLink: 'https://billing.xitenodes.com/store/ryzen-vps-india/ryzen-32gb' }


    ]
  },
  'spot-instances': {
    title: 'Spot Instances VPS',
    icon: Sparkles,
    color: 'blue',
    description: 'Cost-effective VPS for fault-tolerant workloads and batch processing.',
    plans: [
      { name: 'Spot VPS XL', cpu: '16 vCore (Burstable)', ram: '60GB RAM', disk: '2YB SSD', bandwidth: '30TB (Flexible)', price: '800 (Variable)', ipConfig: '1 IPv4 (Dynamic)', features: ['Deep Discount', 'Ideal for Batch Jobs', 'Interruptible'], checkoutLink: 'https://billing.xitenodes.com/store/spot-series-vps/vps-xl' },
      { name: 'Spot VPS XLL', cpu: '24 vCore (Burstable)', ram: '120GB RAM', disk: '2TB SSD', bandwidth: '30TB (Flexible)', price: '₹1200 (Variable)', ipConfig: '1 IPv4 (Dynamic)', features: ['Great Value', 'CI/CD Runners', 'Interruptible'], checkoutLink: 'https://billing.xitenodes.com/store/spot-series-vps/vps-xll' },
    ]
  },
  'noida-general': {
    title: 'Noida General VPS',
    icon: Server,
    color: 'amber',
    description: 'Reliable and balanced VPS hosting solutions based in Noida for optimal performance and regional connectivity.',
    plans: [
      { name: 'Noida Free', cpu: '4 vCore Intel Xeon', ram: '16GB DDR4', disk: '100GB SSD', bandwidth: '500GB', price: '2', ipConfig: '1 IPv4, /64 IPv6', features: ['Basic DDoS', 'Custom Panel', 'Full Root Access'], checkoutLink: 'https://billing.xitenodes.com/store/noida-general-vps/free-kvm-1' },
      { name: 'Noida KVM 1', cpu: '4 vCore Intel Xeon', ram: '32GB DDR4', disk: '200GB SSD', bandwidth: '1TB', price: '600', ipConfig: '1 IPv4, /64 IPv6', features: ['Standard DDoS', 'Custom Panel', 'Full Root Access'], checkoutLink: 'https://billing.xitenodes.com/store/noida-general-vps/kvm-1' },
      { name: 'Noida Premium', cpu: '8 vCore Intel Xeon', ram: '64GB DDR4', disk: '300GB SSD', bandwidth: '2TB', price: '1299', ipConfig: '1 IPv4, /64 IPv6', features: ['Advanced DDoS', 'Custom Panel', 'Full Root Access'], checkoutLink: 'https://billing.xitenodes.com/store/noida-general-vps/kvm-2' },
    ]
  },
  // ... existing categories ...
  'premium': {
    title: 'Premium VPS',
    icon: Diamond,
    color: 'emerald',
    description: 'Enterprise-grade VPS solutions with premium hardware, enhanced reliability, and dedicated resources for mission-critical applications.',
    plans: [
      { 
        name: 'Coming Soon',
      },
    ]
  },
  // ... other categories remain the same ...
};

// Update the categories array to include the new Noida Gold category
const categories = [
  { slug: 'noida-general', name: 'Noida General', icon: Server, color: 'amber' },
  { slug: 'entry-level', name: 'Entry Level', icon: Package, color: 'pink' },
  { slug: 'noida-gold', name: 'Noida Gold', icon: Diamond, color: 'yellow' },
  { slug: 'noida-platinum', name: 'Noida Platinum', icon: Diamond, color: 'indigo' },
  //{ slug: 'premium', name: 'Premium', icon: Diamond, color: 'emerald' },
  { slug: 'high-performance', name: 'High Performance', icon: TrendingUp, color: 'purple' },
  { slug: 'ryzen-powered', name: 'Ryzen Powered', icon: Cpu, color: 'cyan' },
  { slug: 'spot-instances', name: 'Spot Instances', icon: Sparkles, color: 'blue' },
];

const VpsPlanCard = ({ plan, color, showRework = false, disableOrdering = false }) => (
  <motion.div
    className={`relative flex flex-col rounded-2xl border-2 border-${color}-500/70 bg-slate-800/60 backdrop-blur-lg shadow-2xl group plan-card-shiny overflow-hidden hover:shadow-${color}-500/30 transition-all duration-300 ease-out transform hover:-translate-y-2 h-full`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {showRework && (
      <div className="absolute top-3 right-3 z-20">
        <span className="bg-amber-500 text-black text-[10px] font-extrabold px-2 py-1 rounded shadow-md uppercase tracking-wide">Rework in Progress</span>
      </div>
    )}

    {disableOrdering && (
      <div className="absolute inset-0 bg-black/40 z-20 flex items-center justify-center">
        <div className="bg-amber-500 text-black font-bold py-2 px-6 rounded-lg transform -rotate-12 text-xl border-2 border-white">
          REWORK IN PROGRESS
        </div>
      </div>
    )}

    <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br from-${color}-500/80 to-${color}-700/80 opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-700 ease-out blur-xl`}></div>
    <div className="relative z-10 flex-grow p-6 md:p-8">
      <div className="mb-6 text-center">
        <h3 className={`text-3xl font-bold text-${color}-400 mb-1 hero-title-font`}>{plan.name}</h3>
      </div>
      <div className="space-y-3 mb-8">
        {[
          { icon: Cpu, label: 'CPU', value: plan.cpu },
          { icon: Server, label: 'RAM', value: plan.ram },
          { icon: HardDrive, label: 'Disk', value: plan.disk },
          { icon: Wifi, label: 'Bandwidth', value: plan.bandwidth },
          { icon: Zap, label: 'IP Config', value: plan.ipConfig },
        ].map((item, index) => (
          <div key={index} className="flex items-start feature-item-hover">
            <item.icon className={`w-5 h-5 mr-3 text-${color}-500 flex-shrink-0 mt-0.5`} />
            <div>
              <span className="font-semibold text-gray-200 hero-description-font">{item.label}: </span> 
              <span className="text-gray-300 hero-description-font">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
      <hr className={`my-6 border-${color}-500/30`} />
      <ul className="space-y-2 mb-8 text-xs">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-400 hero-description-font">
            <CheckCircle className={`w-4 h-4 mr-2 text-${color}-400 flex-shrink-0`} />
            {feature}
          </li>
        ))}
         <li className="flex items-center text-gray-400 hero-description-font"><CheckCircle className={`w-4 h-4 mr-2 text-${color}-400 flex-shrink-0`} />Resources scalable on demand</li>
      </ul>
    </div>
    <div className="relative z-10 mt-auto p-6 md:p-8 pt-0">
      <div className="text-center mb-6">
        <p className={`text-4xl font-extrabold text-${color}-400`}>
          ₹{plan.price}
          {!plan.price.toLowerCase().includes('variable') && <span className="text-base font-normal text-gray-400">/mo</span>}
        </p>
      </div>
      <Button
        disabled={disableOrdering}
        onClick={!disableOrdering ? () => window.open(plan.checkoutLink, '_blank') : undefined}
        className={`${disableOrdering ? 'bg-gray-600 text-gray-300 cursor-not-allowed opacity-80' : `bg-gradient-to-r from-${color}-500 to-${color}-700 hover:from-${color}-600 hover:to-${color}-800 text-white`} w-full py-3 text-lg font-semibold transition-transform duration-200 group-hover:scale-105`}
      >
        {disableOrdering ? (
          <>Temporarily Unavailable <AlertTriangle className="w-5 h-5 ml-2" /></>
        ) : (
          <>Order Now <ArrowRight className="w-5 h-5 ml-2" /></>
        )}
      </Button>
    </div>
  </motion.div>
);

const VpsHostingPage = () => {
  const [activeCategory, setActiveCategory] = useState('entry-level'); 



  const selectedCategoryData = activeCategory ? vpsPlanData[activeCategory] : null;

  const heroData = {
    title: "VPS Hosting Solutions",
    description: "Powerful and flexible Virtual Private Servers. Choose from various configurations including Noida General, Entry Level, High Performance, Ryzen Powered, and cost-effective Spot Instances.",
    image: "https://images.unsplash.com/photo-1605907063640-016458301609?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    browseLink: "#vps-categories",
    browseButtonText: "Explore VPS Categories",
    HeroIcon: Brain,
    colorScheme: { title: 'text-pink-400', button: 'from-pink-500 to-purple-600', featureIcon: 'text-pink-400' },
  };


  return (
    <div className="min-h-screen pb-16 relative overflow-hidden">
      <Helmet>
        <title>VPS Hosting India | High Performance Virtual Servers - XiteNodes</title>
        <meta name="description" content="Premium VPS hosting in India with AMD EPYC, Ryzen & Intel Xeon CPUs. NVMe SSDs, DDoS protection, full root access. Plans from ₹600/mo with instant deployment." />
        <link rel="canonical" href="https://xitenodes.com/vps-hosting" />
        <meta property="og:title" content="VPS Hosting India | High Performance Virtual Servers - XiteNodes" />
        <meta property="og:description" content="Premium VPS hosting in India with AMD EPYC, Ryzen & Intel Xeon CPUs. NVMe SSDs, DDoS protection, full root access. Plans from ₹600/mo." />
        <meta property="og:url" content="https://xitenodes.com/vps-hosting" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VPS Hosting India | High Performance Virtual Servers - XiteNodes" />
        <meta name="twitter:description" content="Premium VPS hosting in India with AMD EPYC, Ryzen & Intel Xeon CPUs. NVMe SSDs, DDoS protection, full root access." />
      </Helmet>
      <AnimatedParticles count={30} />
      <GenericHero {...heroData} />
      <div id="vps-categories" className="container mx-auto px-6 py-12 md:py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 hero-title-font">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              Find Your Perfect VPS
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto hero-description-font">
            Explore our VPS categories. Click one to view available plans and pricing.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
          {categories.map((cat, index) => {
            const IconComponent = cat.icon;
            return (
            <motion.button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug === activeCategory ? null : cat.slug)}
              className={`px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ease-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900
                ${activeCategory === cat.slug 
                  ? `bg-gradient-to-r from-${cat.color}-500 to-${cat.color}-700 text-white shadow-${cat.color}-500/40 shadow-lg` 
                  : `bg-slate-700/60 hover:bg-slate-600/80 text-gray-200 border border-slate-600`
                }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <IconComponent className={`w-5 h-5 mr-2 inline-block text-${cat.color}-300 ${activeCategory === cat.slug ? 'text-white' : ''}`} />
              {cat.name}
            </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {selectedCategoryData && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mb-12">
                <h3 className={`text-3xl font-bold text-center mb-2 text-${selectedCategoryData.color}-400 hero-title-font`}>
                  {selectedCategoryData.title}
                </h3>
                <p className="text-md text-gray-400 text-center mb-8 max-w-xl mx-auto hero-description-font">{selectedCategoryData.description}</p>


                {(activeCategory === 'spot-instances') && (
                  <motion.div 
                    className="mb-12 p-6 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 flex items-start gap-4 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <AlertTriangle className="w-10 h-10 text-amber-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg text-amber-300">Heads Up! What are Spot Instances?</h4>
                      <p className="text-sm mt-1">
                        Spot Instances offer significant discounts on unused server capacity. However, they can be interrupted with short notice if the capacity is needed elsewhere. They are ideal for fault-tolerant workloads like batch processing, development/testing, and other non-critical tasks.
                      </p>
                    </div>
                  </motion.div>
                )}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {selectedCategoryData.plans.map((plan, index) => (
                    <VpsPlanCard 
                      key={index} 
                      plan={plan} 
                      color={selectedCategoryData.color}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mt-20 text-center p-8 glass-effect rounded-xl max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-6 hero-title-font">Need More Power or Custom Specs?</h2>
          <p className="text-gray-300 mb-6 hero-description-font">
            If our standard VPS plans don't quite fit, or you need a dedicated server, we offer custom configurations and bare metal solutions.
          </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg">
              <Link to="/contact-sales">Contact Sales <PlusCircle className="w-5 h-5 ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white">
              <Link to="/dedicated-servers">View Dedicated Servers <HardDrive className="ml-2 w-5 h-5" /></Link>
            </Button>
           </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VpsHostingPage;