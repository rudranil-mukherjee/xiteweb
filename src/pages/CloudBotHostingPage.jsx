
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Bot, Zap, Shield, Database, Cpu, ArrowRight, PlusCircle, MessageSquare, Code, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedParticles from '@/components/AnimatedParticles';
import GenericHero from '@/components/GenericHero';

const CloudBotHostingPage = () => {
  const plans = [
    {
      name: 'Bot Starter', price: '₹299', cpu: '1 vCore (Shared)', ram: '1GB RAM', storage: '10GB NVMe SSD',
      bots: 'Up to 2 Bots', platform: 'Discord, Telegram', ddos: 'Basic Protection', color: 'pink',
      checkoutLink: 'https://billing.xitenodes.com/store/discord-bot-hosting/starterr', languages: ['Python', 'Node.js']
    },
    {
      name: 'Bot Pro', price: '₹599', cpu: '2 vCores (Burstable)', ram: '2GB RAM', storage: '25GB NVMe SSD',
      bots: 'Up to 5 Bots', platform: 'Discord, Telegram, Custom', ddos: 'Standard Protection', color: 'purple',
      checkoutLink: 'https://billing.xitenodes.com/store/discord-bot-hosting/bot-pro', languages: ['Python', 'Node.js', 'Java']
    }
  ];

  const LanguageIcon = ({ lang }) => {
    let Icon;
    switch(lang.toLowerCase()) {
      case 'python': Icon = Brain; break; 
      case 'node.js': Icon = Zap; break; 
      case 'java': Icon = Code; break; 
      case 'rust': Icon = Shield; break; 
      default: Icon = Cpu; 
    }
    return <Icon className="w-4 h-4 mr-1.5" />;
  };


  const PlanCard = ({ plan }) => (
    <motion.div
      className={`relative flex flex-col p-8 rounded-2xl border-2 border-${plan.color}-500/70 bg-gray-800/50 backdrop-blur-md shadow-2xl group plan-card-shiny overflow-hidden hover:shadow-${plan.color}-500/40 transition-all duration-300 ease-out transform hover:-translate-y-2 h-full`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className={`absolute -top-1 -right-1 px-4 py-1 text-xs font-semibold text-white bg-${plan.color}-600 rounded-bl-lg rounded-tr-lg z-10`}>
        {plan.customQuote ? "Custom" : plan.name.split(' ')[1] || "Enterprise"}
      </div>
      <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-${plan.color}-500 to-${plan.color}-700 opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500 ease-out blur-lg`}></div>
      
      <div className="relative z-10 flex-grow">
        <div className="mb-6 text-center pt-4">
            <h3 className="text-3xl font-bold text-white mb-2">{plan.name}</h3>
            <p className={`text-4xl font-extrabold text-${plan.color}-400`}>
            {plan.price}
            {plan.price !== 'Custom' && <span className="text-base font-normal text-gray-400">/mo</span>}
            </p>
        </div>

        <ul className="space-y-3 mb-4 text-sm">
            {[
            { icon: Cpu, label: 'CPU', value: plan.cpu },
            { icon: Zap, label: 'RAM', value: plan.ram },
            { icon: Database, label: 'Storage', value: plan.storage },
            { icon: Bot, label: 'Bots', value: plan.bots },
            { icon: MessageSquare, label: 'Platform', value: plan.platform },
            { icon: Shield, label: 'DDoS', value: plan.ddos },
            ].map(item => (
            <li key={item.label} className="flex items-center feature-item-hover">
                <item.icon className={`w-5 h-5 mr-3 text-${plan.color}-500 flex-shrink-0`} />
                <span className="text-gray-300">{item.label}: {item.value}</span>
            </li>
            ))}
        </ul>
        {plan.languages && plan.languages.length > 0 && (
            <div className="mb-6 mt-4">
            <h4 className={`text-sm font-semibold text-${plan.color}-300 mb-2`}>Supported Languages:</h4>
            <div className="flex flex-wrap gap-2">
                {plan.languages.map(lang => (
                <span key={lang} className={`flex items-center text-xs px-2.5 py-1 rounded-full bg-${plan.color}-500/20 text-${plan.color}-200 border border-${plan.color}-500/50`}>
                    <LanguageIcon lang={lang} /> {lang}
                </span>
                ))}
            </div>
            </div>
        )}
      </div>

      <div className="relative z-10 mt-auto">
        {plan.customQuote ? (
            <Button asChild className={`w-full mt-auto py-3 text-lg font-semibold bg-gradient-to-r from-${plan.color}-500 to-${plan.color}-700 hover:from-${plan.color}-600 hover:to-${plan.color}-800 text-white transition-transform duration-200 group-hover:scale-105`}>
            <Link to={plan.checkoutLink}>
                Get a Quote <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            </Button>
        ) : (
            <Button
            onClick={() => window.open(plan.checkoutLink, '_blank')}
            className={`w-full mt-auto py-3 text-lg font-semibold bg-gradient-to-r from-${plan.color}-500 to-${plan.color}-700 hover:from-${plan.color}-600 hover:to-${plan.color}-800 text-white transition-transform duration-200 group-hover:scale-105`}
            >
            Deploy Now <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
        )}
      </div>
    </motion.div>
  );

  const heroData = {
    title: "Cloud Bot Hosting",
    description: "Reliable and scalable hosting for your Discord bots, Telegram bots, and custom automated applications. Keep your bots online 24/7.",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f07316?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    browseLink: "#cloud-bot-plans", // Scroll to plans section
    browseButtonText: "View Bot Plans",
    HeroIcon: Bot,
    colorScheme: { title: 'text-purple-400', button: 'from-purple-500 to-pink-600', featureIcon: 'text-purple-400' },
  };

  return (
    <div className="min-h-screen pb-16 relative overflow-hidden">
      <Helmet>
        <title>Discord Bot Hosting India | Cloud Bot Hosting - XiteNodes</title>
        <meta name="description" content="Reliable Discord and Telegram bot hosting in India. NVMe SSDs, Python/Node.js/Java support, DDoS protection, and 24/7 uptime. Plans from ₹299/mo." />
        <link rel="canonical" href="https://xitenodes.com/cloud-bot-hosting" />
        <meta property="og:title" content="Discord Bot Hosting India | Cloud Bot Hosting - XiteNodes" />
        <meta property="og:description" content="Reliable Discord and Telegram bot hosting in India. NVMe SSDs, Python/Node.js/Java support, and 24/7 uptime. Plans from ₹299/mo." />
        <meta property="og:url" content="https://xitenodes.com/cloud-bot-hosting" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Discord Bot Hosting India | Cloud Bot Hosting - XiteNodes" />
        <meta name="twitter:description" content="Reliable Discord and Telegram bot hosting in India with NVMe SSDs and 24/7 uptime." />
      </Helmet>
      <AnimatedParticles count={25} />
      <GenericHero {...heroData} />
      
      <div id="cloud-bot-plans" className="container mx-auto px-6 py-12 md:py-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y:20 }}
          animate={{ opacity: 1, y:0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
              Choose Your Bot Hosting Plan
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Find the perfect hosting solution tailored for your bot's needs and scale.
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
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="mt-20 text-center p-8 glass-effect rounded-xl max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Power Your Automation</h2>
          <p className="text-gray-300 mb-6">
            XiteNodes provides a robust platform for all your bot hosting needs, from simple community bots to complex enterprise automation. Enjoy high uptime, fast performance, and easy management.
          </p>
           <Button asChild size="lg" className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white text-lg">
             <Link to="/contact-sales">Discuss Custom Bot Solutions <PlusCircle className="w-5 h-5 ml-2" /></Link>
           </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          className="mt-12 text-center"
        >
           <Button asChild size="lg" variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white">
             <Link to="/infrastructure">Our Cloud Infrastructure <Zap className="ml-2 w-5 h-5" /></Link>
           </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default CloudBotHostingPage;
