import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Diamond, Server, Cpu, Zap, Shield, Database, Wifi, Gauge, ArrowRight, PlusCircle, CheckCircle, HardDrive, Package, TrendingUp, Sparkles, Brain, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedParticles from '@/components/AnimatedParticles';
import GenericHero from '@/components/GenericHero';
import { Helmet } from 'react-helmet-async';

// Reusing similar data structure but can be customized per market needs
const vpsPlanData = {
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
    'noida-general': {
        title: 'Noida General VPS',
        icon: Server,
        color: 'amber',
        description: 'Reliable and balanced VPS hosting solutions based in Noida for optimal performance and regional connectivity.',
        plans: [
            { name: 'Noida KVM 1', cpu: '4 vCore Intel Xeon', ram: '32GB DDR4', disk: '200GB SSD', bandwidth: '1TB', price: '600', ipConfig: '1 IPv4, /64 IPv6', features: ['Standard DDoS', 'Custom Panel', 'Full Root Access'], checkoutLink: 'https://billing.xitenodes.com/store/noida-general-vps/kvm-1' },
            { name: 'Noida Premium', cpu: '8 vCore Intel Xeon', ram: '64GB DDR4', disk: '300GB SSD', bandwidth: '2TB', price: '1299', ipConfig: '1 IPv4, /64 IPv6', features: ['Advanced DDoS', 'Custom Panel', 'Full Root Access'], checkoutLink: 'https://billing.xitenodes.com/store/noida-general-vps/kvm-2' },
        ]
    },
};

const categories = [
    { slug: 'high-performance', name: 'High Performance', icon: TrendingUp, color: 'purple' },
    { slug: 'noida-general', name: 'Noida General', icon: Server, color: 'amber' },
];

const VpsPlanCard = ({ plan, color, showRework = false, disableOrdering = false }) => (
    <motion.div
        className={`relative flex flex-col rounded-2xl border-2 border-${color}-500/70 bg-slate-800/60 backdrop-blur-lg shadow-2xl group plan-card-shiny overflow-hidden hover:shadow-${color}-500/30 transition-all duration-300 ease-out transform hover:-translate-y-2 h-full`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
    >
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
                Order Now <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
        </div>
    </motion.div>
);

const VpsIndiaPage = () => {
    const [activeCategory, setActiveCategory] = useState('high-performance');

    const selectedCategoryData = activeCategory ? vpsPlanData[activeCategory] : null;

    const heroData = {
        title: "High Performance Indian VPS Hosting",
        description: "Experience the lowest latency with our Indian VPS servers hosted in Mumbai & Kolkata. Engineered for speed, stability, and control.",
        image: "https://images.unsplash.com/photo-1605907063640-016458301609?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        browseLink: "#vps-categories",
        browseButtonText: "View Performance Plans",
        HeroIcon: TrendingUp,
        colorScheme: { title: 'text-purple-400', button: 'from-purple-500 to-indigo-600', featureIcon: 'text-purple-400' },
    };

    return (
        <div className="min-h-screen pb-16 relative overflow-hidden">
            <Helmet>
                <title>Indian VPS Hosting | High Performance - XiteNodes</title>
                <meta name="description" content="Deploy high performance VPS instances in India. Hosted in Mumbai & Kolkata data centers for ultra-low latency." />
                <meta name="keywords" content="Indian VPS Hosting, Mumbai VPS, Kolkata VPS, High Performance VPS India" />
                <link rel="canonical" content="https://www.xitenodes.com/vps-india" />
                <meta property="og:title" content="High Performance Indian VPS Hosting" />
                <meta property="og:description" content="Low latency, NVMe SSDs, and Ryzen/EPYC power in India." />
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
                            Premium Hardware in Indian Data Centers
                        </span>
                    </h2>
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
            </div>
        </div>
    );
};

export default VpsIndiaPage;
