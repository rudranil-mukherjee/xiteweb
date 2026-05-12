import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Gem, Zap, Cpu, ArrowRightCircle, AlertTriangle } from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';
import { Helmet } from 'react-helmet-async';

const categoryCardsData = [
	{
		slug: 'budget',
		icon: Gem,
		title: 'Budget Game Servers',
		description:
			'Perfect for starters and small communities. Get reliable performance without breaking the bank. All essential features included.',
		features: [
			'Cost-Effective',
			'Reliable Performance',
			'Instant Setup',
			'Basic DDoS Protection',
		],
		gradient: 'from-green-500 to-emerald-600',
		hoverShadow: 'hover:shadow-green-500/40',
	},
	{
		slug: 'premium',
		icon: Zap,
		title: 'Premium Game Servers',
		description:
			'Elevate your gaming with high-performance hardware, more resources, and advanced DDoS protection. Ideal for growing communities.',
		features: [
			'High-Performance CPUs',
			'Increased Resources',
			'Advanced DDoS Protection',
			'Priority Support',
		],
		gradient: 'from-purple-500 to-indigo-600',
		hoverShadow: 'hover:shadow-purple-500/40',
	},
	{
		slug: 'network-series',
		icon: Zap,
		title: 'Network Game Servers',
		description:
			'High-performance servers optimized for networking applications and multiplayer games, featuring enhanced network capabilities.',
		features: [
			'High-Performance CPUs',
			'Enhanced Network Features',
			'Advanced DDoS Protection',
			'Priority Support',
		],
		gradient: 'from-blue-500 to-indigo-600',
		hoverShadow: 'hover:shadow-blue-500/40',
	},
	{
		slug: 'extreme',
		icon: Cpu,
		title: 'Extreme Custom Builder',
		description:
			'Unleash ultimate power. Fully customize your server with top-tier hardware, dedicated resources, and enterprise-grade features.',
		features: [
			'Top-Tier Hardware',
			'Full Customization',
			'Dedicated Resources',
			'Enterprise DDoS Options',
		],
		gradient: 'from-pink-500 to-rose-600',
		hoverShadow: 'hover:shadow-pink-500/40',
	},
];

const GameServersPage = () => {
	return (
		<div className="min-h-screen pt-32 pb-16 relative overflow-hidden">
			<Helmet>
				<title>
					Minecraft Hosting in India | Game Hosting India | Game Servers |
					XiteNodes
				</title>
				<meta
					name="description"
					content="XiteNodes offers the best Minecraft Hosting in India and Game Hosting India. Get high-performance, low-latency game servers with instant setup and DDoS protection."
				/>
				<meta
					name="keywords"
					content="Minecraft Hosting India, Game Hosting India, Indian Minecraft Server, Game Server Hosting India, XiteNodes"
				/>
				<meta
					property="og:title"
					content="Minecraft Hosting in India | Game Hosting India | Game Servers | XiteNodes"
				/>
				<meta
					property="og:description"
					content="Host Minecraft and other games in India with XiteNodes. Fast, secure, and reliable game hosting."
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://www.xitenodes.com/game-servers"
				/>
				<meta property="og:image" content="/img.png" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Minecraft Hosting in India | Game Hosting India | Game Servers | XiteNodes"
				/>
				<meta
					name="twitter:description"
					content="Host Minecraft and other games in India with XiteNodes. Fast, secure, and reliable game hosting."
				/>
				<meta name="twitter:image" content="/img.png" />
				<script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Game Servers - Minecraft Hosting India",
            "url": "https://www.xitenodes.com/game-servers",
            "description": "Game server hosting in India, including Minecraft Hosting India and Game Hosting India by XiteNodes. High-performance, secure, and reliable game server hosting for Indian gamers."
          }
        `}</script>
			</Helmet>
			<AnimatedParticles count={30} />
			{/* SEO Section for Minecraft Hosting in India & Game Hosting India */}
			<section className="max-w-2xl mx-auto mt-8 mb-8 p-6 bg-gradient-to-r from-indigo-900 to-purple-900 rounded-xl shadow-lg text-white">
				<h1 className="text-3xl font-bold mb-2">
					Minecraft Hosting in India
				</h1>
				<p className="mb-4">
					Get the best Minecraft hosting in India with XiteNodes. Our servers
					offer low latency, instant setup, and robust DDoS protection for
					Minecraft communities across India.
				</p>
				<h2 className="text-2xl font-bold mb-2">Game Hosting India</h2>
				<p>
					Choose XiteNodes for game hosting in India. We provide
					high-performance servers for all popular games, with 24/7 support and
					scalable resources for Indian gamers.
				</p>
			</section>

			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: 'easeOut' }}
					className="text-center mb-16"
				>
					<h1 className="text-5xl md:text-6xl font-extrabold mb-4">
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400">
							Game Server Hosting
						</span>
					</h1>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto">
						Choose your path to gaming excellence. From budget-friendly options to
						fully customizable extreme servers, XiteNodes has you covered.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
					{categoryCardsData.map((card, index) => (
						<motion.div
							key={card.slug}
							initial={{ opacity: 0, y: 50, scale: 0.95 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							transition={{
								duration: 0.5,
								delay: index * 0.15,
								ease: 'easeOut',
							}}
							className={`relative flex flex-col rounded-2xl p-8 border border-slate-700/80 group transition-all duration-300 ease-out overflow-hidden bg-slate-800/70 backdrop-blur-md shadow-xl ${card.hoverShadow} hover:border-slate-600`}
						>
							<div
								className={`absolute -top-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-br ${card.gradient} opacity-20 group-hover:opacity-30 group-hover:scale-125 transition-all duration-500 ease-out blur-lg`}
							></div>
       <div className="relative z-10 flex-grow flex flex-col">
								<div className="mb-6">
									<div
										className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${card.gradient} mb-5 shadow-lg`}
									>
										<card.icon className="w-10 h-10 text-white" />
									</div>
									<h2 className="text-3xl font-bold text-white mb-3">
										{card.title}
									</h2>
									<p className="text-gray-400 leading-relaxed text-sm mb-5">
										{card.description}
									</p>
								</div>

								<ul className="space-y-2 mb-8 text-sm flex-grow">
									{card.features.map((feature, idx) => (
										<li key={idx} className="flex items-center text-gray-300">
											<ArrowRightCircle
												className={`w-4 h-4 mr-2 text-${card.gradient.split(
													'-',
												)[1]}-400 flex-shrink-0`}
											/>
											{feature}
										</li>
									))}
								</ul>

							<Link
								to={`/game-servers/${card.slug}`}
								className={`mt-auto inline-block w-full text-center px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${card.gradient} hover:brightness-110 shadow-md group-hover:scale-105 transition-all duration-200 ease-out`}
							>
								Browse Plans
							</Link>
							</div>
						</motion.div>
					))}
				</div>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.5,
						delay: categoryCardsData.length * 0.15 + 0.2,
					}}
					className="mt-20 text-center"
				>
					<Button
						variant="outline"
						asChild
						className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-colors py-3 px-8 text-lg"
					>
						<Link to="/infrastructure">
							Our Infrastructure Advantage{' '}
							<Zap className="ml-2 h-5 w-5" />
						</Link>
					</Button>
				</motion.div>

				{/* Internal SEO links */}
				<div className="text-center mt-8">
					<Link
						to="/"
						className="text-purple-400 underline hover:text-purple-600 font-semibold"
					>
						Home - XiteNodes Minecraft Hosting India
					</Link>
					<span className="mx-2">|</span>
					<Link
						to="/game-servers/plans"
						className="text-indigo-400 underline hover:text-indigo-600 font-semibold"
					>
						Minecraft Hosting in India & Game Hosting India Plans
					</Link>
				</div>
			</div>
		</div>
	);
};

export default GameServersPage;

