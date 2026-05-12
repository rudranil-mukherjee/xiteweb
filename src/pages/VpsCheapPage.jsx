import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Package, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Cpu, HardDrive, Wifi, Zap } from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';
import GenericHero from '@/components/GenericHero';
import { Helmet } from 'react-helmet-async';

const vpsPlanData = {
    'noida-general': {
        title: 'Budget Friendly VPS',
        icon: Server,
        color: 'amber',
        description: 'Extremely affordable VPS hosting in India. Perfect for learning, testing, and small apps.',
        plans: [
            { name: 'Noida KVM 1', cpu: '4 vCore Intel Xeon', ram: '32GB DDR4', disk: '200GB SSD', bandwidth: '1TB', price: '600', ipConfig: '1 IPv4, /64 IPv6', features: ['Standard DDoS', 'Custom Panel', 'Full Root Access'], checkoutLink: 'https://billing.xitenodes.com/store/noida-general-vps/kvm-1' },
            // Other low cost plans
            { name: 'Entry VPS Guardians', cpu: '2 vCore Intel Xeon', ram: '8GB DDR4', disk: '25GB SSD', bandwidth: '1TB', price: '699', ipConfig: '1 IPv4, /64 IPv6', features: ['Basic DDoS', 'Custom Panel', 'Full Root Access'], checkoutLink: 'https://billing.xitenodes.com/store/high-performance-vps/vps-chotu' },
        ]
    },
};

const VpsPlanCard = ({ plan, color, disableOrdering = false }) => (
    <motion.div
        className={`relative flex flex-col rounded-2xl border-2 border-${color}-500/70 bg-slate-800/60 backdrop-blur-lg shadow-2xl group plan-card-shiny overflow-hidden hover:shadow-${color}-500/30 transition-all duration-300 ease-out transform hover:-translate-y-2 h-full`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
    >
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
            <div className="relative z-10 mt-auto pt-0">
                <div className="text-center mb-6">
                    <p className={`text-4xl font-extrabold text-${color}-400`}>
                        ₹{plan.price}
                        <span className="text-base font-normal text-gray-400">/mo</span>
                    </p>
                </div>
                <Button
                    onClick={() => window.open(plan.checkoutLink, '_blank')}
                    className={`bg-gradient-to-r from-${color}-500 to-${color}-700 hover:from-${color}-600 hover:to-${color}-800 text-white w-full py-3 text-lg font-semibold transition-transform duration-200 group-hover:scale-105`}
                >
                    Order Now <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
            </div>
        </div>
    </motion.div>
);

const VpsCheapPage = () => {
    const heroData = {
        title: "Cheap VPS Hosting for Developers",
        description: "Launch your next project without burning your wallet. Reliable, fast, and incredibly affordable VPS hosting starting at just ₹600/mo.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        browseLink: "#plans",
        browseButtonText: "See Cheap Plans",
        HeroIcon: Sparkles,
        colorScheme: { title: 'text-amber-400', button: 'from-amber-500 to-orange-600', featureIcon: 'text-amber-400' },
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Noida KVM 1 VPS",
        "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": "600.00",
            "availability": "https://schema.org/InStock"
        }
    };

    return (
        <div className="min-h-screen pb-16 relative overflow-hidden">
            <Helmet>
                <title>Cheap VPS Hosting | Developer Friendly - XiteNodes</title>
                <meta name="description" content="Affordable VPS Hosting in India starting at ₹600/mo. Perfect for developers, students, and startups. Full root access." />
                <meta name="keywords" content="Cheap VPS India, Budget VPS, Low Cost Server, Developer VPS" />
                <link rel="canonical" content="https://www.xitenodes.com/cheap-vps" />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <AnimatedParticles count={30} />
            <GenericHero {...heroData} />

            <div id="plans" className="container mx-auto px-6 py-12 md:py-20 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 hero-title-font">
                        Maximum Value, <span className="text-amber-500">Minimum Cost</span>
                    </h2>
                    <p className="text-gray-300">Don't overpay for cloud. Get raw performance for a fraction of the price.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {vpsPlanData['noida-general'].plans.map((plan, index) => (
                        <VpsPlanCard key={index} plan={plan} color="amber" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VpsCheapPage;
