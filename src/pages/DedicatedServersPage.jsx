import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { HardDrive, Cpu, Zap, Shield, Wifi, Database, ArrowRight, PlusCircle, Server as ServerRackIcon, Network as NetworkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedParticles from '@/components/AnimatedParticles';
import GenericHero from '@/components/GenericHero';


const dedicatedServerPlansData = [
  {
    name: 'Intel Xeon Gen 2 [Eco Series]',
    cpu: 'Dell R620 • Intel Xeon E5-XXXX v2 (Dual CPU)',
    ram: '256GB ECC On-Die RAM',
    storage: '3TB RAID 2 Storage • NVMe',
    bandwidth: 'Configurable Bandwidth',
    ddos: 'Advanced DDoS Protection',
    location: 'Available on request',
    ipv4: '5 Free IPs • BYOIP (Requires ASN and /24)',
    ipv6: 'Available on request',
    price: '₹6000+GST',
    checkoutLink: 'https://billing.xitenodes.com/index.php/store/dedicated-servers/intel-xeon-gen-2',
    color: 'cyan',
    icon: ServerRackIcon,
  },
  {
    name: 'Intel Gen 10',
    cpu: 'Dell R640 • Intel Xeon Platinum/Gold (Dual CPU)',
    ram: '256GB to 512GB ECC DDR4',
    storage: '3TB NVMe',
    bandwidth: 'Configurable Bandwidth',
    ddos: 'Advanced DDoS Protection',
    location: 'Available on request',
    ipv4: '5 Free IPs • BYOIP (Requires ASN and /24)',
    ipv6: 'Available on request',
    price: '₹12999+GST',
    checkoutLink: 'https://billing.xitenodes.com/index.php/store/dedicated-servers/intel-gen-10',
    color: 'blue',
    icon: Cpu,
  },
  {
    name: 'AMD EPYC 5th Gen',
    cpu: 'AMD EPYC 4000 Series',
    ram: '32GB to 192GB DDR5',
    storage: '1TB to 8TB NVMe',
    bandwidth: '1G 25TB to 10G Unmetered',
    ddos: 'Xite Shield (Advanced XDP with 25G NIC)',
    location: 'Available on request',
    ipv4: '1 Free IPs •BYOIP (Requires ASN and /24)',
    ipv6: 'Available on request',
    price: '₹8000+GST',
    checkoutLink: 'https://billing.xitenodes.com/index.php/store/dedicated-servers/amd-epyc-5th-gen',
    color: 'purple',
    icon: HardDrive,
  },
  {
    name: 'Ryzen 9',
    cpu: 'AMD Ryzen 9 9950X',
    ram: '128GB DDR5',
    storage: '2TB NVMe',
    bandwidth: 'Configurable Bandwidth',
    ddos: 'Advanced DDoS Protection',
    location: 'Available on request',
    ipv4: '5 Free IPs • BYOIP (Requires ASN and /24)',
    ipv6: 'Available on request',
    price: '₹15000+GST',
    checkoutLink: 'https://billing.xitenodes.com/index.php/store/dedicated-servers/ryzen-9',
    color: 'red',
    icon: Cpu,
  },
  {
    name: 'AMD EPYC 3rd Gen',
    cpu: 'Cores: 16 to 128',
    ram: '64GB to 2TB DDR4',
    storage: '1 to 8 NVMe',
    bandwidth: 'Unmanaged • Configurable',
    ddos: 'Advanced DDoS Protection',
    location: 'Available on request',
    ipv4: 'BYOIP (Requires ASN and /24)',
    ipv6: 'Available on request',
    price: '₹30000+GST',
    checkoutLink: 'https://billing.xitenodes.com/index.php/store/dedicated-servers/amd-epyc-3rd-gen',
    color: 'yellow',
    icon: HardDrive,
  },
  {
    name: 'AMD EPYC 4th Generation',
    cpu: 'Cores: 16 to 128',
    ram: '64GB to 2.3TB DDR5',
    storage: '1 to 8 NVMe',
    bandwidth: '25TB @ 1Gbps • Unmanaged',
    ddos: 'Advanced DDoS Protection',
    location: 'Available on request',
    ipv4: 'BYOIP (Requires ASN and /24)',
    ipv6: 'Available on request',
    price: '₹36000+GST',
    checkoutLink: 'https://billing.xitenodes.com/index.php/store/dedicated-servers/amd-epyc-4th-generation',
    color: 'green',
    icon: NetworkIcon,
  },
  {
    name: 'Custom Bare Metal',
    cpu: 'Fully customizable CPU',
    ram: 'Scalable RAM (up to multi-terabytes)',
    storage: 'Bespoke NVMe/SSD/HDD arrays',
    bandwidth: 'Tailored port speeds and commits',
    ddos: 'Custom mitigation profiles',
    location: 'Choose your preferred datacenter',
    ipv4: 'Custom IPv4 allocation • BYOIP supported',
    ipv6: 'Custom IPv6 subnets',
    price: 'Get Qoute',
    customQuote: true,
    ctaText: 'Get Qoute',
    checkoutLink: 'https://discord.xitenodes.com',
    color: 'slate',
    icon: ServerRackIcon,
  },
];

const DedicatedServerPlanCard = ({ plan, index }) => {
  const PlanIcon = plan.icon;
  const isOutOfStock = false; // All new plans are available

  return (
    <motion.div
      className={`relative flex flex-col md:flex-row items-stretch p-6 md:p-8 rounded-2xl border-2 border-${plan.color}-500/70 bg-slate-800/60 backdrop-blur-lg shadow-2xl group plan-card-shiny overflow-hidden ${
        isOutOfStock ? 'opacity-75' : `hover:shadow-${plan.color}-500/30 transition-all duration-300 ease-out transform hover:-translate-y-1.5`
      }`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {isOutOfStock && (
        <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm z-20 flex items-center justify-center">
          <div className="bg-red-500/20 border border-red-500/50 rounded-lg px-4 py-2 transform -rotate-12">
            <span className="text-red-100 font-bold text-xl">Out of Stock</span>
          </div>
        </div>
      )}

      <div className={`md:w-1/3 lg:w-1/4 flex flex-col items-center justify-center p-4 md:border-r-2 border-${plan.color}-500/30 md:mr-6 mb-6 md:mb-0`}>
        <PlanIcon className={`w-16 h-16 text-${plan.color}-400 mb-3`} />
        <h3 className={`text-2xl font-bold text-${plan.color}-400 text-center`}>{plan.name}</h3>
        <p className="text-xs text-gray-400 text-center mt-1">{plan.location}</p>
      </div>

      <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
        {[
          { icon: Cpu, label: 'CPU', value: plan.cpu },
          { icon: ServerRackIcon, label: 'RAM', value: plan.ram },
          { icon: Database, label: 'Storage', value: plan.storage },
          { icon: Wifi, label: 'Bandwidth', value: plan.bandwidth },
          { icon: Shield, label: 'DDoS Protection', value: plan.ddos, link: '/ddos-protection' },
          { icon: NetworkIcon, label: 'IPv4', value: plan.ipv4 },
          { icon: NetworkIcon, label: 'IPv6', value: plan.ipv6 },
        ].map(item => (
          <div key={item.label} className="flex items-start feature-item-hover">
            <item.icon className={`w-4 h-4 mr-2.5 text-${plan.color}-500 flex-shrink-0 mt-0.5`} />
            <div>
              <strong className="text-gray-200 block">{item.label}:</strong>
              <span className="text-gray-300">{item.value}</span>
              {item.link && <Link to={item.link} className="text-xs text-blue-400 hover:underline ml-1 block">(Details)</Link>}
            </div>
          </div>
        ))}
        <div className="col-span-full sm:col-span-2 mt-2">
           <p className="text-xs text-gray-500">*All IP allocations are scalable on demand.</p>
        </div>
      </div>
      
      <div className="md:w-1/4 lg:w-1/5 flex flex-col items-center justify-center mt-6 md:mt-0 md:ml-6 md:pl-6 md:border-l-2 border-${plan.color}-500/30">
        <p className={`text-3xl font-extrabold ${isOutOfStock ? 'text-gray-500' : `text-${plan.color}-400`} mb-3`}>
          {plan.price}
        </p>
        {plan.customQuote ? (
          <Button asChild className={`w-full bg-gradient-to-r from-${plan.color}-500 to-${plan.color}-700 hover:from-${plan.color}-600 hover:to-${plan.color}-800 text-white font-semibold group-hover:scale-105 transition-transform duration-200`}>
            <Link to={plan.checkoutLink}>
              {plan.ctaText || 'Get Quote'} <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        ) : (
          <Button
            onClick={() => !isOutOfStock && window.open(plan.checkoutLink, '_blank')}
            disabled={isOutOfStock}
            className={`w-full ${
              isOutOfStock 
                ? 'bg-gray-600 cursor-not-allowed opacity-50' 
                : `bg-gradient-to-r from-${plan.color}-500 to-${plan.color}-700 hover:from-${plan.color}-600 hover:to-${plan.color}-800 text-white font-semibold group-hover:scale-105 transition-transform duration-200`
            }`}
          >
            {isOutOfStock ? 'Out of Stock' : 'Order Now'} {!isOutOfStock && <ArrowRight className="w-4 h-4 ml-2" />}
          </Button>
        )}
      </div>
    </motion.div>
  );
};


const DedicatedServersPage = () => {

  const heroData = {
    title: "Dedicated Bare Metal Servers",
    description: "Unleash raw power with our dedicated servers. Full hardware control, top-tier components, and robust network for your most demanding applications.",
    image: "https://images.unsplash.com/photo-1593421074361-de5a68350059?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", // Replace with a relevant image for Dedicated Servers
    browseLink: "#dedicated-server-plans", 
    browseButtonText: "View Server Plans",
    HeroIcon: HardDrive,
    colorScheme: { title: 'text-cyan-400', button: 'from-cyan-500 to-blue-600', featureIcon: 'text-cyan-400' },
  };

  return (
    <div className="min-h-screen pb-16 relative overflow-hidden">
      <Helmet>
        <title>Dedicated Servers India | Bare Metal Hosting - XiteNodes</title>
        <meta name="description" content="Enterprise dedicated servers in India with Intel Xeon & AMD EPYC processors. Up to 512GB RAM, NVMe storage, 5 free IPs, and advanced DDoS protection. From ₹6000/mo." />
        <link rel="canonical" href="https://xitenodes.com/dedicated-servers" />
        <meta property="og:title" content="Dedicated Servers India | Bare Metal Hosting - XiteNodes" />
        <meta property="og:description" content="Enterprise dedicated servers in India with Intel Xeon & AMD EPYC processors. Up to 512GB RAM, NVMe storage, and advanced DDoS protection." />
        <meta property="og:url" content="https://xitenodes.com/dedicated-servers" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dedicated Servers India | Bare Metal Hosting - XiteNodes" />
        <meta name="twitter:description" content="Enterprise dedicated servers in India with Intel Xeon & AMD EPYC processors. Up to 512GB RAM, NVMe storage." />
      </Helmet>
      <AnimatedParticles count={20} />
      <GenericHero {...heroData} />

      <div id="dedicated-server-plans" className="container mx-auto px-6 py-12 md:py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500">
              Choose Your Dedicated Server
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Select from our range of powerful bare metal servers or contact us for a custom build.
          </p>
        </motion.div>

        <div className="space-y-10">
          {dedicatedServerPlansData.map((plan, index) => (
            <DedicatedServerPlanCard key={index} plan={plan} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: dedicatedServerPlansData.length * 0.1 + 0.2, ease: 'easeOut' }}
          className="mt-20 text-center p-8 glass-effect rounded-xl max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Maximum Control, Maximum Performance</h2>
          <p className="text-gray-300 mb-6">
            XiteNodes dedicated servers give you exclusive access to all server resources. Perfect for large databases, high-traffic websites, complex applications, and game server hosting at scale.
          </p>
           <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-lg">
             <Link to="/contact-sales">Request Custom Configuration <PlusCircle className="w-5 h-5 ml-2" /></Link>
           </Button>
        </motion.div>
         <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: dedicatedServerPlansData.length * 0.1 + 0.4, ease: 'easeOut' }}
          className="mt-12 text-center"
        >
           <Button asChild size="lg" variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
             <Link to="/infrastructure">Our Datacenter Technology <Zap className="ml-2 w-5 h-5" /></Link>
           </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default DedicatedServersPage;