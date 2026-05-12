import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Zap, ShieldCheck, Gem, ArrowRight, Cpu, Gauge, Server as ServerIconLucide, Calculator, Diamond } from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';
import CategoryHero from '@/components/CategoryHero';
import PlanCard from '@/components/game-servers/PlanCard';
import { locations as gameServerLocations, generatePlansForCategory, categorySpecificDetails as gameCategorySpecificDetails } from '@/components/game-servers/planData';
import { Helmet } from 'react-helmet-async';

const gameServerCategoriesData = [
	{
		id: 'budget',
		name: 'Budget Series',
		icon: Diamond,
		color: 'green',
		description: 'Affordable power for your gaming community. Get started without breaking the bank, perfect for new servers and smaller groups.',
	},
	{
		id: 'premium',
		name: 'Premium Series',
		icon: Zap,
		color: 'purple',
		description: 'The perfect balance of performance and features. Ideal for growing communities needing more power and advanced options.',
	},
	{
		id: 'network-series',
		name: 'Network Series',
		icon: Zap,
		color: 'blue',
		description: 'High-performance servers optimized for networking applications and multiplayer games, featuring enhanced network capabilities.',
	},
	{
		id: 'extreme-series',
		name: 'Extreme Series',
		icon: Gem,
		color: 'pink',
		description: 'Unleash ultimate power with our top-tier hardware and unlimited CPU. For large communities and demanding games. *Terms apply for unlimited CPU.',
	},
];

const GameServersLandingPage = () => {
	const [activeCategory, setActiveCategory] = useState('budget');
	const [selectedLocation, setSelectedLocation] = useState(gameServerLocations[0].id);

	const heroData = {
		title: 'Game Server Hosting | Minecraft Hosting in India & Game Hosting India',
		description:
			'Choose the perfect tier for your gaming needs. From budget-friendly options to extreme performance with unlimited CPU, XiteNodes has you covered with top-tier hardware, instant setup, and robust DDoS protection. Now featuring dedicated Minecraft Hosting in India and Game Hosting India for the best experience.',
		image:
			'https://images.unsplash.com/photo-1555864400-cc47dd93d427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
		colorScheme: { title: 'text-pink-400', button: 'from-pink-500 to-purple-600', featureIcon: 'text-pink-400' },
	};

	const selectedCategoryData = activeCategory ? gameCategorySpecificDetails[activeCategory] : null;
	const plans = activeCategory ? generatePlansForCategory(activeCategory) : [];

	return (
		<div className="min-h-screen pb-16 relative overflow-hidden">
			<Helmet>
				<title>Minecraft Hosting in India | Game Hosting India | Game Server Plans | XiteNodes</title>
				<meta name="description" content="Explore Minecraft Hosting in India and Game Hosting India plans by XiteNodes. High-performance, secure, and reliable game server hosting for Indian gamers." />
				<meta name="keywords" content="Minecraft Hosting India, Game Hosting India, Indian Minecraft Server, Game Server Hosting India, XiteNodes" />
				<meta property="og:title" content="Minecraft Hosting in India | Game Hosting India | Game Server Plans | XiteNodes" />
				<meta property="og:description" content="Explore Minecraft and game hosting plans in India with XiteNodes. Fast, secure, and reliable game hosting." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.xitenodes.com/game-servers/plans" />
				<meta property="og:image" content="/img.png" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Minecraft Hosting in India | Game Hosting India | Game Server Plans | XiteNodes" />
				<meta name="twitter:description" content="Explore Minecraft and game hosting plans in India with XiteNodes. Fast, secure, and reliable game hosting." />
				<meta name="twitter:image" content="/img.png" />
				<script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Game Server Plans - Minecraft Hosting India",
            "url": "https://www.xitenodes.com/game-servers/plans",
            "description": "Game server hosting plans in India, including Minecraft Hosting India and Game Hosting India by XiteNodes. High-performance, secure, and reliable game server hosting for Indian gamers."
          }
        `}</script>
			</Helmet>
			<AnimatedParticles count={30} />
			<CategoryHero
				title={heroData.title}
				description={heroData.description}
				image={heroData.image}
				colorScheme={heroData.colorScheme}
				isGameServerHero={true}
			/>
			<div id="game-server-categories" className="container mx-auto px-4 py-12 md:py-20 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl md:text-5xl font-extrabold mb-6 hero-title-font">
						<span className="bg-clip-text text-transparent bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400">
							Our Game Server Solutions
						</span>
					</h2>
					<p className="text-lg text-gray-300 max-w-2xl mx-auto hero-description-font">
						Select a category to view plans or use our calculator to find the best fit.
					</p>
				</motion.div>

				<div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
					{gameServerCategoriesData.map((cat, index) => {
						const IconComponent = cat.icon;
						return (
							<motion.button
								key={cat.id}
								onClick={() => setActiveCategory(cat.id === activeCategory ? null : cat.id)}
								className={`px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ease-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900
                ${activeCategory === cat.id ? `bg-gradient-to-r from-${cat.color}-500 to-${cat.color}-700 text-white shadow-${cat.color}-500/40 shadow-lg` : `bg-slate-700/60 hover:bg-slate-600/80 text-gray-200 border border-slate-600`
									}`}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
							>
								<IconComponent className={`w-5 h-5 mr-2 inline-block ${activeCategory === cat.id ? 'text-white' : `text-${cat.color}-400`}`} />
								{cat.name}
							</motion.button>
						);
					})}
				</div>

				<motion.div
					className="mb-12 text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: gameServerCategoriesData.length * 0.1 + 0.1 }}
				>
					<Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold text-md py-3 px-10 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105">
						<Link to="/game-servers/usage-calculator">
							<Calculator className="mr-2 w-5 h-5" /> Find What's Best For You
						</Link>
					</Button>
				</motion.div>

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
							<div className="py-10 px-2">
								<h2 className={`text-4xl font-bold text-center mb-2 text-${selectedCategoryData.color}-400 hero-title-font`}>{selectedCategoryData.title}</h2>
								<p className="text-lg text-gray-400 text-center mb-10 max-w-xl mx-auto hero-description-font">{selectedCategoryData.description}</p>
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
						Select a category above to explore our Game Server plans.
					</motion.div>
				)}

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
					className="mt-20 text-center p-8 glass-effect rounded-xl max-w-3xl mx-auto"
				>
					<h2 className="text-3xl font-bold text-white mb-6 hero-title-font">Why Choose XiteNodes for Game Hosting?</h2>
					<div className="grid md:grid-cols-3 gap-6 text-left">
						<div className="flex items-start space-x-3">
							<Cpu className="w-8 h-8 text-pink-400 mt-1 flex-shrink-0" />
							<div>
								<h4 className="font-semibold text-pink-400 hero-title-font">Blazing Fast Hardware</h4>
								<p className="text-sm text-gray-400 hero-description-font">Latest CPUs & NVMe SSDs for peak performance.</p>
							</div>
						</div>
						<div className="flex items-start space-x-3">
							<Gauge className="w-8 h-8 text-purple-400 mt-1 flex-shrink-0" />
							<div>
								<h4 className="font-semibold text-purple-400 hero-title-font">Ultra Low Latency</h4>
								<p className="text-sm text-gray-400 hero-description-font">Optimized network for lag-free gaming.</p>
							</div>
						</div>
						<div className="flex items-start space-x-3">
							<ServerIconLucide className="w-8 h-8 text-cyan-400 mt-1 flex-shrink-0" />
							<div>
								<h4 className="font-semibold text-cyan-400 hero-title-font">Instant Server Setup</h4>
								<p className="text-sm text-gray-400 hero-description-font">Get your server online in minutes.</p>
							</div>
						</div>
					</div>
					<Button asChild size="lg" variant="outline" className="mt-8 mr-4 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white">
						<Link to="/ddos-protection/game-server">
							DDoS Protection for Game Servers <ShieldCheck className="ml-2 w-5 h-5" />
						</Link>
					</Button>
					<Button asChild size="lg" variant="outline" className="mt-8 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white">
						<Link to="/infrastructure">
							Learn More About Our Infrastructure <ArrowRight className="ml-2 w-5 h-5" />
						</Link>
					</Button>
				</motion.div>

				<section className="max-w-2xl mx-auto mt-8 mb-8 p-6 bg-gradient-to-r from-indigo-900 to-purple-900 rounded-xl shadow-lg text-white">
					<h1 className="text-3xl font-bold mb-2">Minecraft Hosting in India</h1>
					<p className="mb-4">
						XiteNodes now offers dedicated Minecraft Hosting in India. Enjoy low latency, instant setup, and robust DDoS protection for your Minecraft server, tailored for Indian gamers.
					</p>
					<h2 className="text-2xl font-bold mb-2">Game Hosting India</h2>
					<p>
						Host your favorite games with XiteNodes in India. Our game hosting solutions are optimized for speed, security, and scalability, making us the top choice for game hosting in India.
					</p>
				</section>

				{/* Internal SEO links */}
				<div className="text-center mt-8">
					<Link to="/" className="text-purple-400 underline hover:text-purple-600 font-semibold">Home - XiteNodes Minecraft Hosting India</Link>
					<span className="mx-2">|</span>
					<Link to="/game-servers" className="text-indigo-400 underline hover:text-indigo-600 font-semibold">Game Server Hosting India</Link>
				</div>
			</div>
		</div>
	);
};

export default GameServersLandingPage;

