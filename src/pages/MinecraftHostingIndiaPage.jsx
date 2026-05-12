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

const MinecraftHostingIndiaPage = () => {
	const [activeCategory, setActiveCategory] = useState('budget');
	const [selectedLocation, setSelectedLocation] = useState(gameServerLocations[0].id);

	const heroData = {
		title: 'Indian Minecraft Hosting | Low Ping Servers',
		description: 'Tired of high ping on US/Europe servers? Host your Minecraft server in Kolkata/Mumbai for <20ms latency. XiteNodes delivers raw performance with localized peering, DDoS protection, and native INR pricing.',
		image: 'https://images.unsplash.com/photo-1555864400-cc47dd93d427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
		colorScheme: { title: 'text-orange-500', button: 'from-orange-500 to-red-600', featureIcon: 'text-orange-400' },
	};

	const selectedCategoryData = activeCategory ? gameCategorySpecificDetails[activeCategory] : null;
	const plans = activeCategory ? generatePlansForCategory(activeCategory) : [];

	const faqData = [
		{
			question: "How much does a Minecraft Server cost in India?",
			answer: "Starts at ₹150/mo with XiteNodes. We offer affordable, high-performance plans charged in INR, so you don't lose money on currency conversion fees. Get enterprise hardware without the enterprise price tag."
		},
		{
			question: "Is XiteNodes better than Aternos?",
			answer: "Yes, because we offer 24/7 uptime and dedicated RAM. Aternos puts you in long queues and shuts down when no one is online. with XiteNodes, your server is always up, always fast, and purely yours—no sharing resources with thousands of others."
		},
		{
			question: "Do you offer free MySQL databases?",
			answer: "Yes! Every plan includes free MySQL databases, essential for advanced plugins and data storage. We also provide full FTP access, Modpack installers, and automated backups at no extra cost."
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
				<title>Indian Minecraft Hosting | Low Ping Servers - XiteNodes</title>
				<meta name="description" content="Tired of high ping? Host Minecraft in Kolkata & Mumbai for <20ms latency. UPI accepted, Path.net DDoS Protection, and 24/7 Hindi Support. Starts ₹150/mo." />
				<meta name="keywords" content="Indian Minecraft Hosting, Minecraft Hosting Kolkata, Minecraft Server Mumbai, Low Ping Minecraft India, UPI Minecraft Hosting, RuPay Accepted" />
				<link rel="canonical" content="https://www.xitenodes.com/minecraft-hosting-india" />

				{/* Open Graph Tags */}
				<meta property="og:title" content="Indian Minecraft Hosting | Low Ping Servers - XiteNodes" />
				<meta property="og:description" content="Host Minecraft in Kolkata & Mumbai for <20ms latency. UPI accepted, Path.net DDoS Protection, and 24/7 Hindi Support." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.xitenodes.com/minecraft-hosting-india" />
				<meta property="og:image" content="/img.png" />
				<meta property="og:image:alt" content="Indian Minecraft Hosting Low Ping" />

				{/* Twitter Card Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Indian Minecraft Hosting | Low Ping Servers - XiteNodes" />
				<meta name="twitter:description" content="Host Minecraft in Kolkata & Mumbai for <20ms latency. UPI accepted, Path.net DDoS Protection." />
				<meta name="twitter:image" content="/img.png" />

				{/* Structured Data */}
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
							<div className="inline-block bg-orange-500/20 text-orange-400 font-bold px-4 py-2 rounded-full text-sm mb-6 border border-orange-500/30">
								📡 THE TECHNICAL EDGE
							</div>
							<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
								Optimized Peering with <span className="text-orange-500">Indian ISPs</span>
							</h2>
							<p className="text-gray-300 text-lg mb-6 leading-relaxed">
								Most "Indian" hosts just resell generic cloud capacity. We own our network edge.
								XiteNodes utilizes customized BGP peering with major Indian ISPs like
								<span className="text-white font-semibold"> Alliance Broadband, Jio, and Airtel</span>.
							</p>
							<p className="text-gray-300 text-lg mb-8">
								This ensures the lowest possible latency for players in West Bengal, Maharashtra,
								and across the subcontinent—avoiding the congested routes other providers are stuck with.
							</p>

							<div className="grid grid-cols-2 gap-4">
								<div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
									<h4 className="font-bold text-white mb-1">Path.net Protection</h4>
									<p className="text-sm text-gray-400">Advanced mitigation that filters attacks, not players.</p>
								</div>
								<div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
									<h4 className="font-bold text-white mb-1">Local Authority</h4>
									<p className="text-sm text-gray-400">Registered Indian business with localized support.</p>
								</div>
							</div>
						</div>
						<div className="relative">
							<div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full"></div>
							<div className="relative bg-slate-800/80 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
								<h3 className="text-xl font-bold text-white mb-6">Network Latency Test</h3>
								<div className="space-y-4">
									<div className="flex justify-between items-center">
										<span className="text-gray-300 flex items-center"><img src="https://flagcdn.com/w20/in.png" className="mr-2 h-3" alt="India" /> Kolkata (Use)</span>
										<span className="text-green-400 font-mono font-bold">5ms</span>
									</div>
									<div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
										<div className="bg-green-500 h-full w-[5%]"></div>
									</div>

									<div className="flex justify-between items-center mt-2">
										<span className="text-gray-300 flex items-center"><img src="https://flagcdn.com/w20/in.png" className="mr-2 h-3" alt="India" /> Mumbai</span>
										<span className="text-green-400 font-mono font-bold">18ms</span>
									</div>
									<div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
										<div className="bg-green-500 h-full w-[18%]"></div>
									</div>

									<div className="flex justify-between items-center mt-2">
										<span className="text-gray-300 flex items-center"><img src="https://flagcdn.com/w20/sg.png" className="mr-2 h-3" alt="Singapore" /> Singapore (Others)</span>
										<span className="text-yellow-400 font-mono font-bold">85ms</span>
									</div>
									<div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
										<div className="bg-yellow-500 h-full w-[60%]"></div>
									</div>

									<div className="flex justify-between items-center mt-2">
										<span className="text-gray-300 flex items-center"><img src="https://flagcdn.com/w20/de.png" className="mr-2 h-3" alt="Germany" /> Germany (Others)</span>
										<span className="text-red-400 font-mono font-bold">160ms</span>
									</div>
									<div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
										<div className="bg-red-500 h-full w-[95%]"></div>
									</div>
								</div>
								<div className="mt-6 pt-6 border-t border-slate-700 text-center">
									<p className="text-sm text-gray-400">Real-time latency to average ISP connection</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="minecraft-server-categories" className="container mx-auto px-4 py-12 md:py-20 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl md:text-5xl font-extrabold mb-6 hero-title-font">
						<span className="bg-clip-text text-transparent bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400">
							⚔️ Choose Your Minecraft Adventure Series 🏰
						</span>
					</h2>
					<p className="text-lg text-gray-300 max-w-2xl mx-auto hero-description-font">
						🎯 Select your perfect Minecraft hosting series for Indian players, or use our calculator to craft the ideal server setup!
					</p>
				</motion.div>

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

				<motion.div
					className="mb-12 text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: minecraftServerCategoriesData.length * 0.1 + 0.1 }}
				>
					<Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold text-md py-3 px-10 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105">
						<Link to="/game-servers/usage-calculator">
							<Calculator className="mr-2 w-5 h-5" /> 🧮 Find Your Perfect Minecraft Setup
						</Link>
					</Button>
				</motion.div>

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
									<h3 className={`text-2xl font-semibold mb-4 text-${selectedCategoryData.color}-300 hero-title-font`}>
										{minecraftServerCategoriesData.find(cat => cat.id === activeCategory)?.subtitle}
									</h3>
									<p className="text-lg text-gray-400 mb-4 max-w-xl mx-auto hero-description-font">
										{minecraftServerCategoriesData.find(cat => cat.id === activeCategory)?.description}
									</p>
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

				{!activeCategory && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5 }}
						className="text-center text-gray-400 mt-16 text-lg hero-description-font"
					>
						🎮 Select a Minecraft series above to explore our hosting plans optimized for Indian players!
					</motion.div>
				)}

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
					className="mt-20 text-center p-8 glass-effect rounded-xl max-w-4xl mx-auto"
				>
					<h2 className="text-3xl font-bold text-white mb-6 hero-title-font">
						🏆 Why Choose XiteNodes for Minecraft Hosting in India? 🇮🇳
					</h2>
					<div className="grid md:grid-cols-3 gap-6 text-left">
						<div className="flex items-start space-x-3">
							<div className="p-2 bg-pink-500/20 rounded-lg">
								<MapPin className="w-8 h-8 text-pink-400 mt-1 flex-shrink-0" />
							</div>
							<div>
								<h4 className="font-semibold text-pink-400 hero-title-font mb-1">📍 Kolkata & Mumbai</h4>
								<p className="text-sm text-gray-400 hero-description-font">Strategically located servers for <span className="text-white">lowest ping in India</span>. Stop playing on Singapore nodes!</p>
							</div>
						</div>
						<div className="flex items-start space-x-3">
							<div className="p-2 bg-purple-500/20 rounded-lg">
								<Shield className="w-8 h-8 text-purple-400 mt-1 flex-shrink-0" />
							</div>
							<div>
								<h4 className="font-semibold text-purple-400 hero-title-font mb-1">🛡️ Cosmic Guard / Path.net</h4>
								<p className="text-sm text-gray-400 hero-description-font">We use premium mitigation (Path.net & Cosmic Guard) to filter TBps+ attacks. Your server stays online, always.</p>
							</div>
						</div>
						<div className="flex items-start space-x-3">
							<div className="p-2 bg-cyan-500/20 rounded-lg">
								<Zap className="w-8 h-8 text-cyan-400 mt-1 flex-shrink-0" />
							</div>
							<div>
								<h4 className="font-semibold text-cyan-400 hero-title-font mb-1">🇮🇳 UPI & RuPay Accepted</h4>
								<p className="text-sm text-gray-400 hero-description-font">Pay easily with GPay, PhonePe, Paytm, or RuPay cards. No international transaction failures.</p>
							</div>
						</div>
						<div className="flex items-start space-x-3">
							<div className="p-2 bg-green-500/20 rounded-lg">
								<Cpu className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" />
							</div>
							<div>
								<h4 className="font-semibold text-green-400 hero-title-font mb-1">⚡ Dedicated Ryzen Power</h4>
								<p className="text-sm text-gray-400 hero-description-font">We don't oversell. You get dedicated threads for stable TPS, even with 50+ mods loaded.</p>
							</div>
						</div>
						<div className="flex items-start space-x-3">
							<div className="p-2 bg-yellow-500/20 rounded-lg">
								<Users className="w-8 h-8 text-yellow-400 mt-1 flex-shrink-0" />
							</div>
							<div>
								<h4 className="font-semibold text-yellow-400 hero-title-font mb-1">🗣️ English & Hindi Support</h4>
								<p className="text-sm text-gray-400 hero-description-font">Our local team understands your language and time zone. Fast responses via Ticket & WhatsApp.</p>
							</div>
						</div>
						<div className="flex items-start space-x-3">
							<div className="p-2 bg-blue-500/20 rounded-lg">
								<Hammer className="w-8 h-8 text-blue-400 mt-1 flex-shrink-0" />
							</div>
							<div>
								<h4 className="font-semibold text-blue-400 hero-title-font mb-1">🔧 1-Click Modpacks</h4>
								<p className="text-sm text-gray-400 hero-description-font">RLCraft, BetterMC, Pixelmon? Install them in one click. Bedrock & Geyser supported too!</p>
							</div>
						</div>
					</div>
				</motion.div>
			</div>

			{/* FAQ Section */}
			<section className="py-16 bg-black/20">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4 hero-title-font">
							<span className="bg-clip-text text-transparent bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400">
								❓ Frequently Asked Questions about Minecraft Hosting in India 🤔
							</span>
						</h2>
						<p className="text-gray-300 text-lg hero-description-font">
							🎯 Everything you need to know about hosting your Minecraft server in India with XiteNodes!
						</p>
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

			{/* CTA Section */}
			<section className="py-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
				<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl md:text-4xl font-bold mb-4 hero-title-font">
						<span className="bg-clip-text text-transparent bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400">
							🚀 Ready to Start Your Epic Indian Minecraft Server? ⚔️
						</span>
					</h2>
					<p className="text-gray-300 text-lg mb-8 hero-description-font">
						🌟 Join thousands of satisfied Minecraft players hosting their adventures in India with XiteNodes! Your legendary server awaits! 🏰
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 transform hover:scale-105 transition-all duration-300">
							<Hammer className="w-5 h-5 mr-2" />
							⚡ Launch in Mumbai/Kolkata Now 🇮🇳
						</Button>
						<Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transform hover:scale-105 transition-all duration-300" asChild>
							<Link to="/sla">
								🛡️ View 99.9% Uptime SLA
								<ArrowRight className="w-4 h-4 ml-2" />
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default MinecraftHostingIndiaPage;
