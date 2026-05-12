import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Gamepad2, Zap, Cloud, Shield, Cpu, Eye, ArrowRight, PlusCircle, MonitorPlay } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedParticles from '@/components/AnimatedParticles';
import GenericHero from '@/components/GenericHero';

const CloudGamingPage = () => {
  const baseFeatures = {
    gpu: 'NVIDIA RTX Series', latency: 'Ultra-Low Latency Network', resolution: 'Up to 4K Streaming',
    storage: 'Fast NVMe Storage', access: 'Multi-Platform Access (PC, Mobile)', ddos: 'Standard DDoS Protection',
  };
  
  const plans = [
    { name: 'CG Starter', price: '₹799', hours: '20 Hours/mo', vCpu: '2 vCPU', ram: '8GB RAM', gpuTier: 'RTX 3060 Equivalent', color: 'pink', checkoutLink: 'https://billing.xitenodes.com/cloud-gaming/starter' },
    { name: 'CG Plus', price: '₹1299', hours: '40 Hours/mo', vCpu: '4 vCPU', ram: '12GB RAM', gpuTier: 'RTX 3070 Equivalent', color: 'purple', checkoutLink: 'https://billing.xitenodes.com/cloud-gaming/plus' },
    { name: 'CG Pro', price: '₹1999', hours: '70 Hours/mo', vCpu: '6 vCPU', ram: '16GB RAM', gpuTier: 'RTX 3080 Equivalent', color: 'teal', checkoutLink: 'https://billing.xitenodes.com/cloud-gaming/pro' },
    { name: 'CG Elite', price: '₹2999', hours: '120 Hours/mo', vCpu: '8 vCPU', ram: '24GB RAM', gpuTier: 'RTX 4070 Equivalent', color: 'blue', checkoutLink: 'https://billing.xitenodes.com/cloud-gaming/elite' },
    { name: 'CG Ultimate', price: '₹4499', hours: '200 Hours/mo', vCpu: '10 vCPU', ram: '32GB RAM', gpuTier: 'RTX 4080 Equivalent', color: 'green', checkoutLink: 'https://billing.xitenodes.com/cloud-gaming/ultimate' },
    { name: 'CG Extreme', price: '₹6999', hours: 'Unlimited Fair Use*', vCpu: '12 vCPU', ram: '48GB RAM', gpuTier: 'RTX 4090 Equivalent', color: 'yellow', checkoutLink: 'https://billing.xitenodes.com/cloud-gaming/extreme' },
    { name: 'Power User I', price: '₹9999', hours: 'Dedicated Instance Option', vCpu: '16 vCPU (Dedicated)', ram: '64GB RAM', gpuTier: 'Dedicated RTX A5000', color: 'orange', checkoutLink: 'https://billing.xitenodes.com/cloud-gaming/power-user-1' },
    { name: 'Power User II', price: '₹14999', hours: 'Dedicated Instance Option', vCpu: '24 vCPU (Dedicated)', ram: '96GB RAM', gpuTier: 'Dedicated RTX A6000', color: 'red', checkoutLink: 'https://billing.xitenodes.com/cloud-gaming/power-user-2' },
    { name: 'Custom Rig', price: 'Get Quote', hours: 'Tailored to Needs', vCpu: 'Custom', ram: 'Custom', gpuTier: 'Your Choice of GPU', customQuote: true, color: 'slate', checkoutLink: '/contact-sales' },
  ];

  const PlanCard = ({ plan }) => (
    <motion.div
      className={`relative flex flex-col p-8 rounded-2xl border-2 border-${plan.color}-500/70 bg-gray-800/50 backdrop-blur-md shadow-2xl group plan-card-shiny overflow-hidden hover:shadow-${plan.color}-500/40 transition-all duration-300 ease-out transform hover:-translate-y-2 h-full`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className={`absolute -top-1 -right-1 px-3 py-0.5 text-xs font-semibold text-white bg-${plan.color}-600 rounded-bl-lg rounded-tr-lg z-10`}>
        {plan.name.split(' ')[1] || (plan.customQuote ? "Custom" : plan.name.split(' ')[0])}
      </div>
      <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-${plan.color}-500 to-${plan.color}-700 opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500 ease-out blur-lg`}></div>
      
      <div className="relative z-10 flex-grow">
        <div className="mb-5 text-center pt-3">
            <h3 className="text-2xl font-bold text-white mb-1.5">{plan.name}</h3>
            <p className={`text-3xl font-extrabold text-${plan.color}-400`}>
            {plan.price}
            {plan.price !== 'Get Quote' && <span className="text-sm font-normal text-gray-400">/mo</span>}
            </p>
        </div>

        <ul className="space-y-2.5 mb-6 text-sm">
            {[
            { icon: Eye, label: 'Gaming Hours', value: plan.hours },
            { icon: Cpu, label: 'vCPU', value: plan.vCpu },
            { icon: Zap, label: 'RAM', value: plan.ram },
            { icon: MonitorPlay, label: 'GPU Tier', value: plan.gpuTier },
            { icon: Cloud, label: 'Resolution', value: baseFeatures.resolution },
            { icon: Shield, label: 'DDoS Protection', value: baseFeatures.ddos },
            ].map(item => (
            <li key={item.label} className="flex items-center feature-item-hover">
                <item.icon className={`w-4 h-4 mr-2.5 text-${plan.color}-500 flex-shrink-0`} />
                <span className="text-gray-300">{item.label}: {item.value}</span>
            </li>
            ))}
        </ul>
      </div>

      <div className="relative z-10 mt-auto">
        {plan.customQuote ? (
            <Button asChild className={`w-full mt-auto py-2.5 text-md font-semibold bg-gradient-to-r from-${plan.color}-500 to-${plan.color}-700 hover:from-${plan.color}-600 hover:to-${plan.color}-800 text-white transition-transform duration-200 group-hover:scale-105`}>
            <Link to={plan.checkoutLink}>
                Get Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            </Button>
        ) : (
            <Button
            onClick={() => window.open(plan.checkoutLink, '_blank')}
            className={`w-full mt-auto py-2.5 text-md font-semibold bg-gradient-to-r from-${plan.color}-500 to-${plan.color}-700 hover:from-${plan.color}-600 hover:to-${plan.color}-800 text-white transition-transform duration-200 group-hover:scale-105`}
            >
            Start Gaming <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
        )}
      </div>
    </motion.div>
  );

  const heroData = {
    title: "Cloud Gaming",
    description: "Stream your favorite PC games from our high-performance cloud servers. No downloads, no powerful hardware needed. Just pure gaming.",
    image: "https://images.unsplash.com/photo-1580234810462-48506c190066?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    browseLink: "#cloud-gaming-plans",
    browseButtonText: "Explore Gaming Plans",
    HeroIcon: Gamepad2,
    colorScheme: { title: 'text-pink-400', button: 'from-pink-500 to-purple-600', featureIcon: 'text-pink-400' },
  };

  return (
    <div className="min-h-screen pb-16 relative overflow-hidden">
      <Helmet>
        <title>Cloud Gaming India | GPU Cloud Servers - XiteNodes</title>
        <meta name="description" content="Cloud gaming servers in India with NVIDIA RTX GPUs. Ultra-low latency, up to 4K streaming, NVMe storage, and multi-platform access. Play any game from anywhere." />
        <link rel="canonical" href="https://xitenodes.com/cloud-gaming" />
        <meta property="og:title" content="Cloud Gaming India | GPU Cloud Servers - XiteNodes" />
        <meta property="og:description" content="Cloud gaming servers in India with NVIDIA RTX GPUs. Ultra-low latency, up to 4K streaming, and multi-platform access." />
        <meta property="og:url" content="https://xitenodes.com/cloud-gaming" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cloud Gaming India | GPU Cloud Servers - XiteNodes" />
        <meta name="twitter:description" content="Cloud gaming servers in India with NVIDIA RTX GPUs and ultra-low latency streaming." />
      </Helmet>
      <AnimatedParticles count={30} />
      <GenericHero {...heroData} />

      <div id="cloud-gaming-plans" className="container mx-auto px-6 py-12 md:py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-amber-500/10 border-2 border-amber-500/20 rounded-xl p-6 mb-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5"></div>
          <h3 className="text-2xl font-bold text-amber-400 mb-3">Coming Soon!</h3>
          <p className="text-amber-200/90 text-lg mb-4">
            Our Cloud Gaming service is currently in final stages of development and not yet available to the public.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
            <Link to="/contact-sales">
              Contact Sales for Early Access <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
        {/* Rest of the content... */}
        <motion.div 
            initial={{ opacity: 0, y:20 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                Our Cloud Gaming Tiers
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-xl mx-auto">
              Choose a plan that fits your gaming style and budget. All powered by cutting-edge NVIDIA RTX GPUs.
            </p>
          </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
             <PlanCard key={index} plan={plan} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="mt-20 text-center p-8 glass-effect rounded-xl max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Experience Next-Level Gaming</h2>
          <p className="text-gray-300 mb-6">
            XiteNodes Cloud Gaming offers a seamless, high-fidelity gaming experience on almost any device. Powered by NVIDIA RTX graphics and our ultra-low latency network.
             <Link to="/infrastructure" className="text-cyan-400 hover:underline ml-1">Learn about our tech.</Link>
          </p>
           <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg">
             <Link to="/contact-sales">Inquire About Dedicated Instances <PlusCircle className="w-5 h-5 ml-2" /></Link>
           </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default CloudGamingPage;