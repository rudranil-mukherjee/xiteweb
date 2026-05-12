import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Zap, Globe, Diamond, Crown, Calculator, Hammer, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedParticles from '@/components/AnimatedParticles';
import CategoryHero from '@/components/CategoryHero';
import PlanCard from '@/components/game-servers/PlanCard';
import { locations as gameServerLocations, generatePlansForCategory, categorySpecificDetails as gameCategorySpecificDetails } from '@/components/game-servers/planData';

const minecraftServerCategoriesData = [
    {
        id: 'budget',
        name: '⛏️ Budget Series',
        subtitle: 'The Overworld',
        icon: Diamond,
        color: 'green',
        description: '🌱 Unbeatable prices for starting your Minecraft adventure. Low latency, high uptime, and pocket-friendly rates.',
        minecraftTheme: '🏡 Perfect for: New servers, small groups, and budget-conscious players'
    },
    // Other categories kept for navigation but focus is on Budget
    {
        id: 'premium',
        name: '🔥 Premium Series',
        subtitle: 'The Nether',
        icon: Zap,
        color: 'purple',
        description: '⚡ Need more power? Upgrade to Premium for higher performance.',
        minecraftTheme: '🎮 Perfect for: Modpacks & Plugins'
    }
];

const MinecraftHostingBudgetPage = () => {
    const [activeCategory, setActiveCategory] = useState('budget');
    const [selectedLocation, setSelectedLocation] = useState(gameServerLocations[0].id);

    const heroData = {
        title: 'Cheap Minecraft Hosting Starting at ₹40',
        description: 'Get the best value for your money with our reliable and cheap Minecraft hosting plans. Low ping, 24/7 support, and instant setup.',
        image: 'https://images.unsplash.com/photo-1555864400-cc47dd93d427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        colorScheme: { title: 'text-green-500', button: 'from-green-500 to-emerald-600', featureIcon: 'text-green-400' },
    };

    const selectedCategoryData = activeCategory ? gameCategorySpecificDetails[activeCategory] : null;
    const plans = activeCategory ? generatePlansForCategory(activeCategory) : [];

    const faqData = [
        {
            question: "How is it so cheap?",
            answer: "We optimize our infrastructure and own our hardware, allowing us to pass the savings directly to you without compromising on quality."
        },
        {
            question: "Is there a performance compromise?",
            answer: "Our Budget series offers excellent performance for vanilla and lightly modded servers. For heavy modpacks, investigate our Premium series."
        },
        {
            question: "Can I pay with UPI?",
            answer: "Yes! We accept UPI, RuPay, Paytm, and all major Indian payment methods."
        }
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Cheap Minecraft Hosting Starter Plan",
        "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": "150.00",
            "availability": "https://schema.org/InStock"
        }
    };

    const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <div className="min-h-screen pb-16 relative overflow-hidden">
            <Helmet>
                <title>Cheap Minecraft Hosting | Budget Servers - XiteNodes</title>
                <meta name="description" content="Affordable Minecraft Hosting starting at ₹150. Low ping Indian servers in Mumbai & Kolkata. Best value for money." />
                <meta name="keywords" content="Cheap Minecraft Hosting, Budget Minecraft Server, Affordable Game Hosting India, Low Cost Minecraft Server" />
                <link rel="canonical" content="https://www.xitenodes.com/budget-minecraft-hosting" />

                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(faqStructuredData)}
                </script>
            </Helmet>

            <AnimatedParticles count={30} />
            <CategoryHero
                title={heroData.title}
                description={heroData.description}
                image={heroData.image}
                colorScheme={heroData.colorScheme}
                isGameServerHero={true}
            />

            <div className="bg-gradient-to-br from-slate-900 via-black to-slate-900 py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            High Quality at <span className="text-green-500">Unbeatable Prices</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-6">
                            Start your journey without breaking the bank. Our budget plans are designed for efficiency and value.
                        </p>
                    </div>
                </div>
            </div>

            <div id="minecraft-server-categories" className="container mx-auto px-4 py-12 md:py-20 relative z-10">
                {/* Categories Selection */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
                    {minecraftServerCategoriesData.map((cat, index) => {
                        const IconComponent = cat.icon;
                        return (
                            <motion.button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id === activeCategory ? null : cat.id)}
                                className={`px-6 py-4 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ease-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 min-h-[80px] flex flex-col items-center justify-center
                  ${activeCategory === cat.id ? `bg-gradient-to-r from-${cat.color}-500 to-${cat.color}-700 text-white shadow-${cat.color}-500/40 shadow-lg` : `bg-slate-700/60 hover:bg-slate-600/80 text-gray-200 border border-slate-600`
                                    }`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <IconComponent className={`w-5 h-5 mb-1 ${activeCategory === cat.id ? 'text-white' : `text-${cat.color}-400`}`} />
                                <span className="font-bold">{cat.name}</span>
                                <span className={`text-xs ${activeCategory === cat.id ? 'text-white/80' : `text-${cat.color}-300`}`}>
                                    {cat.subtitle}
                                </span>
                            </motion.button>
                        );
                    })}
                </div>

                <AnimatePresence mode="wait">
                    {selectedCategoryData && activeCategory && (
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="overflow-hidden"
                        >
                            <div className="py-10 px-2">
                                <div className="text-center mb-8">
                                    <h2 className={`text-4xl font-bold mb-2 text-${selectedCategoryData.color}-400 hero-title-font`}>
                                        {minecraftServerCategoriesData.find(cat => cat.id === activeCategory)?.name}
                                    </h2>
                                </div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {plans.map((plan, index) => (
                                        <PlanCard
                                            key={`${activeCategory}-${plan.name}-${index}`}
                                            plan={plan}
                                            selectedLocation={selectedLocation}
                                            categoryName="game-servers"
                                            subCategoryName={activeCategory}
                                            details={selectedCategoryData}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* CTA */}
            <div className="text-center py-10">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-8 transform hover:scale-105 transition-all duration-300">
                    <Link to="/contact-sales">
                        Need Custom Pricing? Contact Sales
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default MinecraftHostingBudgetPage;
