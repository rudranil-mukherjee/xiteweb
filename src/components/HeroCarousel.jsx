import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Zap, Shield, Clock, Users, Cpu, Globe, Play, Pause, Server as ServerIcon, Bot as BotIcon, Cloud as CloudIcon, HardDrive, Webhook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const slideColors = [
	{ titleColor: 'text-pink-400', button: 'from-pink-500 to-purple-600', featureIcon: 'text-pink-400', dot: 'bg-pink-400' },
	{ titleColor: 'text-blue-400', button: 'from-blue-500 to-sky-600', featureIcon: 'text-blue-400', dot: 'bg-blue-400' },
	{ titleColor: 'text-teal-400', button: 'from-teal-500 to-cyan-600', featureIcon: 'text-teal-400', dot: 'bg-teal-400' },
	{ titleColor: 'text-purple-400', button: 'from-purple-500 to-indigo-600', featureIcon: 'text-purple-400', dot: 'bg-purple-400' },
	{ titleColor: 'text-cyan-400', button: 'from-cyan-500 to-sky-600', featureIcon: 'text-cyan-400', dot: 'bg-cyan-400' },
];

const HeroCarousel = ({ slidesData }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);
	const intervalRef = useRef(null);

	const defaultSlides = [
		{ id: 'home-games', title: "Unleash Your Game", description: "Premium game server hosting with 99.9% uptime, instant setup, and 24/7 support. Perfect for Minecraft, CS2, Rust, and 80+ other games.", image: "https://images.unsplash.com/photo-1607802038100-97f635078130?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", features: [{ icon: Zap, text: "Instant Setup" }, { icon: Shield, text: "DDoS Protection" }, { icon: Clock, text: "99.9% Uptime" }, { icon: Users, text: "24/7 Support" }, { icon: Cpu, text: "Latest Hardware" }, { icon: Globe, text: "Global Locations" }], browseLink: "/game-servers", browseButtonText: "Explore Game Servers" },
		{ id: 'home-vps', title: "Power Your Projects", description: "High-performance VPS and dedicated servers with full root access, SSD storage, and enterprise-grade hardware for maximum reliability.", image: "https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", features: [{ icon: Cpu, text: "Ryzen & Xeon CPUs" }, { icon: Zap, text: "NVMe SSD" }, { icon: Shield, text: "Full Root Access" }, { icon: Globe, text: "Multiple Locations" }, { icon: Clock, text: "Instant Deployment" }, { icon: Users, text: "Expert Support" }], browseLink: "/vps-hosting", browseButtonText: "Discover Server Hosting" },
		{ id: 'home-cloud', title: "Elevate to the Cloud", description: "Scalable cloud solutions including Bot Hosting, Cloud Gaming, and Development Environments. Powerful infrastructure for all your cloud needs.", image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", features: [{ icon: CloudIcon, text: "Scalable Resources" }, { icon: BotIcon, text: "Bot Hosting" }, { icon: Globe, text: "Cloud Gaming" }, { icon: Cpu, text: "Dev Environments" }, { icon: Shield, text: "Secure Cloud" }, { icon: Zap, text: "High Availability" }], browseLink: "/cloud-gaming", browseButtonText: "View Cloud Services" },
		{ id: 'home-ddos', title: "Bulletproof Protection", description: "Industry-leading DDoS protection with 500Gbps mitigation capacity, expandable to 192Tbps. Keep your services online 24/7.", image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", features: [{ icon: Shield, text: "192Tbps+ Capacity" }, { icon: Zap, text: "Instant Mitigation" }, { icon: Globe, text: "Global Network" }, { icon: Clock, text: "24/7 Monitoring" }, { icon: Cpu, text: "AI Detection" }, { icon: Users, text: "Expert Analysis" }], browseLink: "/ddos-protection", browseButtonText: "See Protection Plans" },
		{ id: 'home-web', title: "Launch Your Website", description: "Reliable and fast web hosting solutions for personal websites, blogs, and e-commerce stores. Packed with features and easy to manage.", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", features: [{ icon: ServerIcon, text: "cPanel Included" }, { icon: Shield, text: "Free SSL" }, { icon: Zap, text: "LiteSpeed Server" }, { icon: Clock, text: "99.9% Uptime" }, { icon: Users, text: "24/7 Support" }, { icon: Globe, text: "CloudLinux OS" }], browseLink: "/web-hosting", browseButtonText: "Get Web Hosting" }
	];

	const slides = slidesData && slidesData.length > 0 ? slidesData : defaultSlides;

	const startAutoplay = () => {
		if (intervalRef.current) clearInterval(intervalRef.current);
		intervalRef.current = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 7000);
	};

	const stopAutoplay = () => {
		if (intervalRef.current) clearInterval(intervalRef.current);
	};

	useEffect(() => {
		if (isPlaying) startAutoplay(); else stopAutoplay();
		return () => stopAutoplay();
	}, [isPlaying, slides.length]);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
		if (isPlaying) startAutoplay();
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
		if (isPlaying) startAutoplay();
	};

	const togglePlayPause = () => setIsPlaying(!isPlaying);

	const currentColors = slideColors[currentSlide % slideColors.length];
	const currentSlideData = slides[currentSlide];

	const featuresSectionRef = useRef(null);

	const handleBrowsePlansClick = () => {
		if (currentSlideData.browseLink.startsWith('/')) {
			const elementId = currentSlideData.browseLink.split('#')[1];
			if (elementId) {
				const element = document.getElementById(elementId);
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' });
				}
			} else {
				window.location.href = currentSlideData.browseLink;
			}
		} else if (featuresSectionRef.current) {
			featuresSectionRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden isolate pt-24 md:pt-32">
			{/* Background image for hero slide */}
			<div className="absolute inset-0 z-0">
				<div
					className="w-full h-full bg-cover bg-center"
					role="img"
					aria-label={slides[currentSlide].title}
					style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
				/>
				{/* Accessible label for background image */}
			</div>

			<AnimatePresence mode="wait">
				<motion.div
					key={`${currentSlide}-bg`}
					className="absolute inset-0 hero-bg-slide"
					style={{ backgroundImage: `url(${currentSlideData.image})` }}
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.15 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1.5, ease: "easeInOut" }}
				/>
			</AnimatePresence>
			<div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/85 to-slate-900 opacity-95 z-0"></div>

			<div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
				<AnimatePresence mode="wait">
					<motion.div
						key={currentSlide}
						className="w-full max-w-4xl"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -30 }}
						transition={{ duration: 0.7, ease: "easeInOut" }}
					>
						<h2 className={`text-5xl lg:text-7xl font-bold leading-tight hero-title-font ${currentColors.titleColor}`}>
							{currentSlideData.title}
						</h2>
						<p className="text-xl text-gray-200 leading-relaxed mt-6 max-w-2xl mx-auto hero-description-font">
							{currentSlideData.description}
						</p>
						<div className="mt-10 flex flex-wrap gap-4 items-center justify-center">
							<Button
								onClick={handleBrowsePlansClick}
								className={`bg-gradient-to-r ${currentColors.button} hover:brightness-110 text-white px-8 py-3 text-lg glow-effect`}
							>
								{currentSlideData.browseButtonText || "Browse Plans"}
							</Button>
							<Button
								asChild
								variant="outline"
								className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg backdrop-blur-sm transition-all duration-300"
							>
								<Link to="/competitor-comparison">
									Why XiteNodes?
								</Link>
							</Button>
						</div>
					</motion.div>
				</AnimatePresence>

				<motion.div
					className="w-full max-w-5xl mt-16"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.2 }}
				>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
						{currentSlideData.features.map((feature, index) => (
							<motion.div
								key={feature.text}
								className="glass-effect-light rounded-lg p-4 flex flex-col items-center text-center hover:bg-slate-700/30 transition-colors duration-200"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
							>
								{(() => { const Icon = feature.icon; return <Icon className={`w-7 h-7 ${currentColors.featureIcon} mb-2 flex-shrink-0`} /> })()}
								<span className="text-white text-sm font-medium">{feature.text}</span>
							</motion.div>
						))}
					</div>
				</motion.div>

				<div className="flex items-center space-x-2 mt-12">
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={() => { setCurrentSlide(index); if (isPlaying) startAutoplay(); }}
							className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? `${currentColors.dot} scale-150 shadow-md` : 'bg-white/40 hover:bg-white/70'}`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
					<button onClick={togglePlayPause} className="glass-effect rounded-full p-2 hover:bg-white/20 transition-colors" aria-label={isPlaying ? "Pause slider" : "Play slider"}>
						{isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
					</button>
				</div>
			</div>

			<button
				onClick={prevSlide}
				className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 glass-effect rounded-full p-2.5 hover:bg-white/20 transition-colors hidden lg:block"
				aria-label="Previous slide"
			>
				<ChevronLeft className="w-6 h-6 text-white" />
			</button>
			<button
				onClick={nextSlide}
				className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 glass-effect rounded-full p-2.5 hover:bg-white/20 transition-colors hidden lg:block"
				aria-label="Next slide"
			>
				<ChevronRight className="w-6 h-6 text-white" />
			</button>
			<div id="features-section-hero" ref={featuresSectionRef}></div>
		</section>
	);
};

export default HeroCarousel;