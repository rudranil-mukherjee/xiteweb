import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Code, Zap, Cloud, Shield, Cpu, Database, ArrowRight, PlusCircle, Puzzle, Users, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedParticles from '@/components/AnimatedParticles';
import GenericHero from '@/components/GenericHero';

const GameDevelopmentCloudPage = () => {
  const baseFeatures = {
    ide: 'Pre-configured IDEs (VS Code, etc.)',
    versionControl: 'Git Integration & Private Repos',
    engines: 'Support for Unity, Unreal Engine, Godot',
    storage: 'High-Speed NVMe Project Storage',
    collaboration: 'Team Collaboration Tools',
    ddos: 'Standard DDoS Protection',
  };
  
  const plans = [
    { name: 'Indie Dev', price: '₹999', vCpu: '2 vCPU', ram: '8GB RAM', projectStorage: '50GB', buildMinutes: '500/mo', color: 'pink', checkoutLink: 'https://billing.xitenodes.com/gamedev-cloud/indie' },
    { name: 'Studio Starter', price: '₹1999', vCpu: '4 vCPU', ram: '16GB RAM', projectStorage: '100GB', buildMinutes: '1200/mo', color: 'purple', checkoutLink: 'https://billing.xitenodes.com/gamedev-cloud/studio-starter' },
    { name: 'Pro Studio', price: '₹3499', vCpu: '8 vCPU', ram: '32GB RAM', projectStorage: '250GB', buildMinutes: '3000/mo', color: 'teal', checkoutLink: 'https://billing.xitenodes.com/gamedev-cloud/pro-studio' },
    { name: 'Studio Max', price: '₹5999', vCpu: '12 vCPU', ram: '48GB RAM', projectStorage: '500GB', buildMinutes: 'Unlimited*', color: 'blue', checkoutLink: 'https://billing.xitenodes.com/gamedev-cloud/studio-max' },
    { name: 'Enterprise Dev I', price: '₹8999', vCpu: '16 Dedicated vCPU', ram: '64GB RAM', projectStorage: '1TB NVMe', buildMinutes: 'Dedicated Build Server Option', color: 'green', checkoutLink: 'https://billing.xitenodes.com/gamedev-cloud/enterprise-1' },
    { name: 'Enterprise Dev II', price: '₹13999', vCpu: '24 Dedicated vCPU', ram: '96GB RAM', projectStorage: '2TB NVMe', buildMinutes: 'Dedicated Build Server Option', color: 'yellow', checkoutLink: 'https://billing.xitenodes.com/gamedev-cloud/enterprise-2' },
    { name: 'Dedicated Pipeline S', price: '₹19999', vCpu: '32 Dedicated vCPU (Build Focus)', ram: '128GB RAM', projectStorage: '4TB NVMe (Fast Access)', buildMinutes: 'High-Performance Dedicated Build Farm', color: 'orange', checkoutLink: 'https://billing.xitenodes.com/gamedev-cloud/pipeline-s' },
    { name: 'Dedicated Pipeline M', price: '₹29999', vCpu: '48 Dedicated vCPU (Build Focus)', ram: '192GB RAM', projectStorage: '8TB NVMe (Fast Access)', buildMinutes: 'High-Performance Dedicated Build Farm', color: 'red', checkoutLink: 'https://billing.xitenodes.com/gamedev-cloud/pipeline-m' },
    { name: 'Custom Dev Environment', price: 'Get Quote', vCpu: 'Custom', ram: 'Custom', projectStorage: 'Custom', buildMinutes: 'Tailored Solution', customQuote: true, color: 'slate', checkoutLink: '/contact-sales' },
  ];

   const PlanCard = ({ plan }) => (
    <motion.div
      className={`relative flex flex-col p-8 rounded-2xl border-2 border-${plan.color}-500/70 bg-gray-800/50 backdrop-blur-md shadow-2xl group plan-card-shiny overflow-hidden hover:shadow-${plan.color}-500/40 transition-all duration-300 ease-out transform hover:-translate-y-2 h-full`}
      whileHover={{ scale: 1.02 }}
    >
      <div className={`absolute -top-1 -right-1 px-3 py-0.5 text-xs font-semibold text-white bg-${plan.color}-600 rounded-bl-lg rounded-tr-lg z-10`}>
        {plan.name.split(' ')[0] || (plan.customQuote ? "Custom" : plan.name.split(' ')[1])}
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
            { icon: Cpu, label: 'vCPU', value: plan.vCpu },
            { icon: Zap, label: 'RAM', value: plan.ram },
            { icon: Database, label: 'Project Storage', value: plan.projectStorage },
            { icon: Puzzle, label: 'Build Minutes/Resources', value: plan.buildMinutes },
            { icon: Code, label: 'IDE Support', value: baseFeatures.ide },
            { icon: GitBranch, label: 'Version Control', value: baseFeatures.versionControl },
            { icon: Users, label: 'Collaboration', value: baseFeatures.collaboration },
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
            Start Developing <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
        )}
      </div>
    </motion.div>
  );

  const heroData = {
    title: "Game Development Cloud",
    description: "Powerful cloud environments optimized for game development. Collaborate, build, and test your games with ease and speed.",
    image: "https://images.unsplash.com/photo-1605907063640-016458301609?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    browseLink: "#gamedev-plans",
    browseButtonText: "Explore Dev Plans",
    HeroIcon: Code,
    colorScheme: { title: 'text-teal-400', button: 'from-teal-500 to-cyan-600', featureIcon: 'text-teal-400' },
  };


  return (
    <div className="min-h-screen pb-16 relative overflow-hidden">
      <Helmet>
        <title>Game Development Cloud India | Dev Environments - XiteNodes</title>
        <meta name="description" content="Cloud development environments for game studios in India. Pre-configured IDEs, Unity/Unreal/Godot support, Git integration, and NVMe project storage." />
        <link rel="canonical" href="https://xitenodes.com/game-development-cloud" />
        <meta property="og:title" content="Game Development Cloud India | Dev Environments - XiteNodes" />
        <meta property="og:description" content="Cloud development environments for game studios in India. Unity/Unreal/Godot support, Git integration, and NVMe storage." />
        <meta property="og:url" content="https://xitenodes.com/game-development-cloud" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Game Development Cloud India | Dev Environments - XiteNodes" />
        <meta name="twitter:description" content="Cloud development environments for game studios in India with Unity, Unreal, and Godot support." />
      </Helmet>
      <AnimatedParticles count={30} />
      <GenericHero {...heroData} />
      <div id="gamedev-plans" className="container mx-auto px-6 py-12 md:py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-500/10 border-2 border-blue-500/20 rounded-xl p-6 mb-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5"></div>
          <h3 className="text-2xl font-bold text-blue-400 mb-3">Coming Soon!</h3>
          <p className="text-blue-200/90 text-lg mb-4">
            Our Game Development Cloud platform is currently in final testing phase and not yet available to the public.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
            <Link to="/contact-sales">
              Contact Sales for Priority Access <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
        {/* Rest of the content... */}
      

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500">
              Choose Your Development Environment
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Scalable cloud solutions tailored for every stage of game development, from indie projects to AAA pipelines.
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
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="mt-20 text-center p-8 glass-effect rounded-xl max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Accelerate Your Game Development</h2>
          <p className="text-gray-300 mb-6">
            XiteNodes Game Development Cloud provides scalable resources, pre-configured tools, and robust infrastructure to streamline your workflow from concept to launch.
             Focus on creating amazing games, we'll handle the backend.
          </p>
           <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white text-lg">
             <Link to="/contact-sales">Talk to a Solutions Architect <PlusCircle className="w-5 h-5 ml-2" /></Link>
           </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default GameDevelopmentCloudPage;