
import React from 'react';
import { motion } from 'framer-motion';
import { CloudCog, Zap, Shield, Database, Cpu, ArrowRight, PlusCircle, SlidersHorizontal, Layers, Terminal, HardDrive } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedParticles from '@/components/AnimatedParticles';

const CloudEnvironmentPage = () => {
  const baseFeatures = {
    osChoice: 'Linux (Ubuntu, CentOS, Debian), Windows Server',
    controlPanel: 'Intuitive Cloud Management Panel',
    scalability: 'Easy Vertical & Horizontal Scaling',
    network: 'High-Speed, Redundant Network',
    apiAccess: 'Full API Access for Automation',
    ddos: 'Standard DDoS Protection Included',
  };
  
  const plans = [
    { name: 'CE Starter', price: '₹699', vCpu: '1 vCPU', ram: '2GB RAM', storage: '40GB NVMe SSD', bandwidth: '1TB', color: 'pink', checkoutLink: 'https://billing.xitenodes.com/store/cloud-environment/starter', ipConfig: '1 IPv4, /64 IPv6' },
    { name: 'CE Pro', price: '₹1199', vCpu: '2 vCPU', ram: '4GB RAM', storage: '80GB NVMe SSD', bandwidth: '3TB', color: 'purple', checkoutLink: 'https://billing.xitenodes.com/store/cloud-environment/pro', ipConfig: '1 IPv4, /64 IPv6' },
    { name: 'CE Advanced', price: '₹2299', vCpu: '4 vCPU', ram: '8GB RAM', storage: '160GB NVMe SSD', bandwidth: '5TB', color: 'teal', checkoutLink: 'https://billing.xitenodes.com/store/cloud-environment/advanced', ipConfig: '1 IPv4, /64 IPv6' },
    { name: 'CE Business', price: '₹4399', vCpu: '8 vCPU', ram: '16GB RAM', storage: '320GB NVMe SSD', bandwidth: '10TB', color: 'blue', checkoutLink: 'https://billing.xitenodes.com/store/cloud-environment/business', ipConfig: '1 IPv4, /64 IPv6' },
    { name: 'CE Enterprise I', price: '₹7999', vCpu: '12 vCPU', ram: '32GB RAM', storage: '640GB NVMe SSD', bandwidth: '15TB', color: 'green', checkoutLink: 'https://billing.xitenodes.com/store/cloud-environment/enterprise-1', ipConfig: '1 IPv4, /64 IPv6' },
    { name: 'CE Enterprise II', price: '₹12999', vCpu: '16 vCPU', ram: '48GB RAM', storage: '1TB NVMe SSD', bandwidth: '20TB', color: 'yellow', checkoutLink: 'https://billing.xitenodes.com/store/cloud-environment/enterprise-2', ipConfig: '1 IPv4, /64 IPv6' },
    { name: 'Performance I', price: '₹18999', vCpu: '24 Dedicated vCPU', ram: '64GB RAM', storage: '1.5TB NVMe (RAID)', bandwidth: '30TB (Dedicated Port)', color: 'orange', checkoutLink: 'https://billing.xitenodes.com/store/cloud-environment/performance-1', ipConfig: 'Multiple IPv4s, /48 IPv6' },
    { name: 'Performance II', price: '₹27999', vCpu: '32 Dedicated vCPU', ram: '96GB RAM', storage: '2TB NVMe (RAID)', bandwidth: '50TB (Dedicated Port)', color: 'red', checkoutLink: 'https://billing.xitenodes.com/store/cloud-environment/performance-2', ipConfig: 'Multiple IPv4s, /48 IPv6' },
    { name: 'Custom Cloud Solution', price: 'Get Quote', vCpu: 'Tailored', ram: 'Tailored', storage: 'Tailored', bandwidth: 'Tailored', customQuote: true, color: 'slate', checkoutLink: '/contact-sales', ipConfig: 'Custom IP Allocation' },
  ];

  const PlanCard = ({ plan }) => (
    <motion.div
      className={`relative flex flex-col rounded-2xl border-2 border-${plan.color}-500/70 bg-slate-800/60 backdrop-blur-lg shadow-2xl group plan-card-shiny overflow-hidden hover:shadow-${plan.color}-500/30 transition-all duration-300 ease-out transform hover:-translate-y-2 h-full`}
      whileHover={{ scale: 1.02 }}
    >
      <div className={`absolute -top-1 -right-1 px-3 py-0.5 text-xs font-semibold text-white bg-${plan.color}-600 rounded-bl-lg rounded-tr-lg z-10`}>
        {plan.name.split(' ')[1] || (plan.customQuote ? "Custom" : plan.name.split(' ')[0])}
      </div>
      <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br from-${plan.color}-500/80 to-${plan.color}-700/80 opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-700 ease-out blur-xl`}></div>
      
      <div className="relative z-10 flex-grow p-6 md:p-8">
        <div className="mb-5 text-center pt-3">
            <h3 className="text-2xl font-bold text-white mb-1.5">{plan.name}</h3>
            <p className={`text-3xl font-extrabold text-${plan.color}-400`}>
            {plan.price}
            {plan.price !== 'Get Quote' && <span className="text-sm font-normal text-gray-400">/mo</span>}
            </p>
        </div>

        <div className="space-y-2.5 mb-6">
            {[
            { icon: Cpu, label: 'vCPU', value: plan.vCpu },
            { icon: Zap, label: 'RAM', value: plan.ram },
            { icon: HardDrive, label: 'Storage', value: plan.storage },
            { icon: Layers, label: 'Bandwidth', value: plan.bandwidth },
            { icon: SlidersHorizontal, label: 'OS Choice', value: baseFeatures.osChoice },
            { icon: Terminal, label: 'Control Panel', value: baseFeatures.controlPanel },
            { icon: CloudCog, label: 'Scalability', value: baseFeatures.scalability },
            { icon: Shield, label: 'DDoS Protection', value: baseFeatures.ddos },
            { icon: Database, label: 'IP Config', value: plan.ipConfig },
            ].map(item => (
            <div key={item.label} className="flex items-start feature-item-hover">
                <item.icon className={`w-4 h-4 mr-2.5 text-${plan.color}-500 flex-shrink-0 mt-0.5`} />
                 <div>
                  <span className="font-semibold text-gray-200">{item.label}: </span>
                  <span className="text-gray-300">{item.value}</span>
                </div>
            </div>
            ))}
        </div>
      </div>

      <div className="relative z-10 mt-auto p-6 md:p-8 pt-0">
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
            Deploy Environment <ArrowRight className="w-4 h-4 ml-2" />
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
          <CloudCog className="w-16 h-16 mx-auto mb-4 text-blue-400" />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500">
              Cloud Environment
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Flexible, scalable, and powerful cloud computing instances. Deploy virtual servers for any application, from websites to complex backends.
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
          <h2 className="text-3xl font-bold text-white mb-6">Build, Deploy, and Scale with XiteNodes Cloud</h2>
          <p className="text-gray-300 mb-6">
            Our cloud environments offer the perfect balance of performance, control, and affordability. Whether you're a startup or an enterprise, find the right resources to power your projects.
          </p>
           <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg">
             <Link to="/contact-sales">Request Enterprise Solution <PlusCircle className="w-5 h-5 ml-2" /></Link>
           </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default CloudEnvironmentPage;
