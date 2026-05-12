import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Server, Cpu, Zap, Shield, Database, Wifi, Gauge, ArrowRight, PlusCircle, CheckCircle, HardDrive, Package, TrendingUp, Sparkles, Brain, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedParticles from '@/components/AnimatedParticles';

const vpsPlanData = {
  'entry-level': {
    title: 'Entry Level VPS',
    icon: Package,
    color: 'pink',
    description: 'Affordable and reliable VPS for small projects, personal websites, and development. Get started with solid performance without breaking the bank.',
    plans: Array(9).fill(null).map((_, i) => ({
      name: `EL VPS ${i + 1}`,
      cpu: `${i < 3 ? 1 : (i < 6 ? 2 : 3)} vCore Intel Xeon`,
      ram: `${(i + 1) * 1}GB DDR4`,
      disk: `${(i + 1) * 20}GB SSD`,
      bandwidth: `${(i + 1) * 0.5}TB`,
      price: `${199 + i * 100}`,
      ipConfig: '1 IPv4, /64 IPv6',
      features: ['Basic DDoS', 'Virtualizor Panel', 'Full Root Access'],
      checkoutLink: `https://billing.xitenodes.com/store/vps-hosting/entry-level/el-${i+1}`
    }))
  },
  'high-performance': {
    title: 'High Performance VPS',
    icon: TrendingUp,
    color: 'purple',
    description: 'Powerful VPS with NVMe SSDs and enhanced CPU resources for demanding applications, busy websites, and larger databases.',
    plans: Array(9).fill(null).map((_, i) => ({
      name: `HP VPS ${i + 1}`,
      cpu: `${i < 3 ? 2 : (i < 6 ? 4 : 6)} vCore Intel Xeon Gold`,
      ram: `${(i + 1) * 2}GB DDR4 ECC`,
      disk: `${(i + 1) * 40}GB NVMe SSD`,
      bandwidth: `${(i + 1) * 1}TB`,
      price: `${499 + i * 250}`,
      ipConfig: '1 IPv4, /64 IPv6',
      features: ['Standard DDoS', 'SolusVM Panel', 'NVMe Storage'],
      checkoutLink: `https://billing.xitenodes.com/store/vps-hosting/high-performance/hp-${i+1}`
    }))
  },
  'ryzen-powered': {
    title: 'Ryzen Powered VPS',
    icon: Cpu,
    color: 'cyan',
    description: 'Blazing fast VPS featuring AMD Ryzen CPUs for superior processing power, ideal for game servers, compute-intensive tasks, and multitasking.',
    plans: Array(9).fill(null).map((_, i) => ({
      name: `Ryzen VPS ${i + 1}`,
      cpu: `${i < 2 ? 2 : (i < 5 ? 4 : (i < 7 ? 6 : 8))} vCore AMD Ryzen`,
      ram: `${(i + 1) * 2 + (i > 4 ? 2:0)}GB DDR4/DDR5`,
      disk: `${(i + 1) * 50}GB NVMe Gen4 SSD`,
      bandwidth: `${(i + 1) * 1.5}TB`,
      price: `${699 + i * 350}`,
      ipConfig: '1 IPv4, /64 IPv6',
      features: ['Advanced DDoS', 'Virtualizor Panel', 'Ryzen Performance'],
      checkoutLink: `https://billing.xitenodes.com/store/vps-hosting/ryzen-powered/ryzen-${i+1}`
    }))
  },
  'spot-instances': {
    title: 'Spot Instances VPS',
    icon: Sparkles,
    color: 'blue',
    description: 'Cost-effective VPS for fault-tolerant workloads, batch processing, and testing environments. Get massive discounts for interruptible tasks.',
    plans: [
      { name: 'Spot Small', cpu: '2 vCore (Burstable)', ram: '4GB RAM', disk: '80GB SSD', bandwidth: '1TB (Flexible)', price: '₹249 (Variable)', ipConfig: '1 IPv4 (Dynamic)', features: ['Deep Discount', 'Ideal for Batch Jobs', 'Interruptible'], checkoutLink: 'https://billing.xitenodes.com/store/vps-hosting/spot-instances/small' },
      { name: 'Spot Medium', cpu: '3 vCore (Burstable)', ram: '6GB RAM', disk: '120GB SSD', bandwidth: '1.5TB (Flexible)', price: '₹379 (Variable)', ipConfig: '1 IPv4 (Dynamic)', features: ['Great Value', 'CI/CD Runners', 'Interruptible'], checkoutLink: 'https://billing.xitenodes.com/store/vps-hosting/spot-instances/medium' },
      { name: 'Spot Large', cpu: '4 vCore (Burstable)', ram: '8GB RAM', disk: '160GB SSD', bandwidth: '2TB (Flexible)', price: '₹499 (Variable)', ipConfig: '1 IPv4 (Dynamic)', features: ['Max Savings', 'Large Scale Testing', 'Fault-Tolerant Apps'], checkoutLink: 'https://billing.xitenodes.com/store/vps-hosting/spot-instances/large' }
    ]
  }
};


const VpsPlanCard = ({ plan, color }) => (
  <motion.div
    className={`relative flex flex-col rounded-2xl border-2 border-${color}-500/70 bg-slate-800/60 backdrop-blur-lg shadow-2xl group plan-card-shiny overflow-hidden hover:shadow-${color}-500/30 transition-all duration-300 ease-out transform hover:-translate-y-2 h-full`}
    whileHover={{ scale: 1.02 }}
  >
    <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br from-${color}-500/80 to-${color}-700/80 opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-700 ease-out blur-xl`}></div>
    
    <div className="relative z-10 flex-grow p-6 md:p-8">
      <div className="mb-6 text-center">
        <h3 className={`text-3xl font-bold text-${color}-400 mb-1`}>{plan.name}</h3>
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
              <span className="font-semibold text-gray-200">{item.label}: </span>
              <span className="text-gray-300">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
      
      <hr className={`my-6 border-${color}-500/30`} />

      <ul className="space-y-2 mb-8 text-xs">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-400">
            <CheckCircle className={`w-4 h-4 mr-2 text-${color}-400 flex-shrink-0`} />
            {feature}
          </li>
        ))}
         <li className="flex items-center text-gray-400"><CheckCircle className={`w-4 h-4 mr-2 text-${color}-400 flex-shrink-0`} />Resources scalable on demand</li>
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
        onClick={() => window.open(plan.checkoutLink, '_blank')}
        className={`w-full py-3 text-lg font-semibold bg-gradient-to-r from-${color}-500 to-${color}-700 hover:from-${color}-600 hover:to-${color}-800 text-white transition-transform duration-200 group-hover:scale-105`}
      >
        Order Now <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  </motion.div>
);


const VpsCategoryPage = () => {
  const { category } = useParams();
  const categoryData = vpsPlanData[category];

  if (!categoryData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white p-8">
        <AnimatedParticles count={20} />
        <h1 className="text-4xl font-bold text-red-500 mb-4">Category Not Found</h1>
        <p className="text-lg text-gray-300 mb-8">The VPS category you're looking for doesn't exist.</p>
        <Button asChild className="bg-pink-500 hover:bg-pink-600 text-white">
          <Link to="/vps-hosting">Back to VPS Hosting</Link>
        </Button>
      </div>
    );
  }

  const IconComponent = categoryData.icon || Brain;

  return (
    <div className="min-h-screen pb-16 relative overflow-hidden">
      <AnimatedParticles count={25} />
      <div className="container mx-auto px-6 py-12 md:py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <IconComponent className={`w-16 h-16 mx-auto mb-4 text-${categoryData.color}-400`} />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className={`bg-clip-text text-transparent bg-gradient-to-r from-${categoryData.color}-500 via-${categoryData.color}-400 to-${categoryData.color}-600`}>
              {categoryData.title}
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {categoryData.description}
          </p>
        </motion.div>

        {category === 'spot-instances' && (
          <motion.div 
            className="mb-12 p-6 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 flex items-start gap-4"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> 
          {categoryData.plans.map((plan, index) => (
            <VpsPlanCard key={index} plan={plan} color={categoryData.color} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="mt-20 text-center"
        >
           <Button asChild size="lg" variant="outline" className={`border-${categoryData.color}-500 text-${categoryData.color}-400 hover:bg-${categoryData.color}-500 hover:text-white`}>
             <Link to="/vps-hosting">View Other VPS Categories <ArrowRight className="ml-2 w-5 h-5" /></Link>
           </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default VpsCategoryPage;