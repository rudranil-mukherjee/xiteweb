import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, MapPin, Shield, Zap, Users, Globe, Clock, Star, Server, Gamepad2, ArrowRight, Diamond, Gem, Calculator, Cpu, Gauge, Hammer, Crown, Swords, AlertTriangle } from 'lucide-react';
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
		description: '🌱 Perfect for new Minecraft adventurers! Start your SMP journey in India with affordable hosting that doesn\'t compromise on quality. Ideal for small communities exploring the Overworld together.',
		minecraftTheme: '🏡 Perfect for: Small SMP servers, vanilla gameplay, friend groups starting their Minecraft adventure'
	},
	{
		id: 'premium',
		name: '🔥 Premium Series',
		subtitle: 'The Nether',
		icon: Zap,
		color: 'purple',
		description: '⚡ Enter the Nether realm of performance! High-powered Minecraft servers in India for communities ready to take on modpacks, plugins, and enhanced gameplay experiences.',
		minecraftTheme: '🎮 Perfect for: Modded servers, plugin-heavy setups, medium communities with custom content'
	},
	{
		id: 'network-series',
		name: '🌐 Network Series',
		subtitle: 'The Multiverse',
		icon: Globe,
		color: 'blue',
		description: '🚀 Build your Minecraft empire! Multi-server networks in India for complex setups like Hub servers, mini-games, and interconnected worlds that create endless possibilities.',
		minecraftTheme: '🏰 Perfect for: Multi-server networks, hub servers, mini-game networks, large communities'
	},
	{
		id: 'extreme-series',
		name: '👑 Extreme Series',
		subtitle: 'The End Dimension',
		icon: Crown,
		color: 'pink',
		description: '🐉 Conquer the End! Ultimate Minecraft hosting in India with Unlimited CPU* for the most demanding servers. Face the Ender Dragon of performance challenges!',
		minecraftTheme: '💎 Perfect for: Massive modpacks, 200+ player servers, intensive automation, ultimate performance'
	},
];

const MinecraftHostingGlobalPage = () => {
	const [activeCategory, setActiveCategory] = useState('premium');
	const [selectedLocation, setSelectedLocation] = useState(gameServerLocations[0].id);

	const heroData = {
		title: 'Premium Minecraft Hosting Solutions',
		description: 'Experience low latency, high performance, and 99.9% uptime with our premium Minecraft hosting solutions focused on the Indian market.',
		image: 'https://images.unsplash.com/photo-1555864400-cc47dd93d427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
		colorScheme: { title: 'text-purple-500', button: 'from-purple-500 to-indigo-600', featureIcon: 'text-purple-400' },
	};

	const selectedCategoryData = activeCategory ? gameCategorySpecificDetails[activeCategory] : null;
	const plans = activeCategory ? generatePlansForCategory(activeCategory) : [];

	const faqData = [
		{
			question: "What makes your Minecraft Hosting 'Premium'?",
			answer: "We use enterprise-grade Ryzen processors, NVMe SSDs, and premium local peering in Mumbai & Kolkata ensuring sub-20ms latency for Indian players."
		},
		{
			question: "Is DDoS protection included in premium plans?",
			answer: "Yes, all premium plans include our advanced Path.net & Cosmic Guard protection to keep your server online during attacks."
		},
		{
			question: "Can I upgrade from Budget to Premium later?",
			answer: "Absolutely. You can upgrade your server resources instantly through our billing panel without losing any data."
		}
	];

	const structuredData = {
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
				<title>Minecraft Hosting | Premium Servers - XiteNodes</title>
				<meta name="description" content="Premium Minecraft Hosting Solutions in India with low latency, Ryzen CPUs, and 24/7 Support. Join XiteNodes today." />
				<meta name="keywords" content="Premium Minecraft Hosting, Minecraft Server India, High Performance Minecraft, Ryzen Minecraft Hosting" />
				<link rel="canonical" content="https://www.xitenodes.com/minecraft-hosting" />

				<meta property="og:title" content="Premium Minecraft Hosting Solutions - XiteNodes" />
				<meta property="og:description" content="Host your Minecraft server with premium hardware and low latency in India." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.xitenodes.com/minecraft-hosting" />
				<meta property="og:image" content="/img.png" />

				<script type="application/ld+json">
					{JSON.stringify(structuredData)}
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
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<div className="inline-block bg-purple-500/20 text-purple-400 font-bold px-4 py-2 rounded-full text-sm mb-6 border border-purple-500/30">
								💎 PREMIUM EXPERIENCE
							</div>
							<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
								Why Choose <span className="text-purple-500">Premium Solutions?</span>
							</h2>
							<p className="text-gray-300 text-lg mb-6 leading-relaxed">
								Our Premium Minecraft Hosting is designed for communities that demand the best.
                                With dedicated resources, priority support, and superior hardware, you get a lag-free experience.
							</p>

							<div className="grid grid-cols-2 gap-4">
								<div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
									<h4 className="font-bold text-white mb-1">Ryzen Performance</h4>
									<p className="text-sm text-gray-400">Powered by high-frequency Ryzen CPUs.</p>
								</div>
								<div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
									<h4 className="font-bold text-white mb-1">Priority Support</h4>
									<p className="text-sm text-gray-400">Skip the queue with premium support access.</p>
								</div>
							</div>
						</div>
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
									<div className={`bg-gradient-to-r from-${selectedCategoryData.color}-500/10 to-slate-900/10 rounded-lg p-4 border border-${selectedCategoryData.color}-500/30 max-w-2xl mx-auto`}>
										<p className={`text-${selectedCategoryData.color}-300 font-medium hero-description-font`}>
											{minecraftServerCategoriesData.find(cat => cat.id === activeCategory)?.minecraftTheme}
										</p>
									</div>
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

			{/* FAQ Section */}
			<section className="py-16 bg-black/20">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4 hero-title-font">
							<span className="bg-clip-text text-transparent bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400">
								❓ Frequently Asked Questions
							</span>
						</h2>
					</div>
					<div className="space-y-6">
						{faqData.map((faq, index) => (
							<Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
								<CardHeader>
									<CardTitle className="text-white text-lg hero-title-font">{faq.question}</CardTitle>
									<CardDescription className="text-gray-300 leading-relaxed hero-description-font">
										{faq.answer}
									</CardDescription>
								</CardHeader>
							</Card>
						))}
					</div>
				</div>
			</section>

		</div>
	);
};

export default MinecraftHostingGlobalPage;
