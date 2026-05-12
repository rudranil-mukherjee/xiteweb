import React, { useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import HeroCarousel from '@/components/HeroCarousel';
import TrustedBy from '@/components/TrustedBy';
import CoreFeatures from '@/components/CoreFeatures';
import DDoSRecord from '@/components/DDoSRecord';
import BeyondTheHype from '@/components/BeyondTheHype';
import GlobalInfrastructure from '@/components/GlobalInfrastructure';
import Reviews from '@/components/Reviews';
import AnimatedParticles from '@/components/AnimatedParticles';

import { Zap, Shield, Clock, Users, Cpu, Globe, Server as ServerIcon, Bot as BotIcon, Cloud as CloudIcon, HardDrive, Webhook, Hammer, MapPin, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';


const HomePage = () => {
  const slides = [
    {
      id: 'home-games',
      title: "Craft Your Adventure",
      description: "Experience unparalleled performance with XiteNodes Game Servers. Instant setup, robust DDoS protection, and 24/7 expert support for over 80+ popular games.",
      image: "https://tse3.mm.bing.net/th/id/OIP.3RLzJUtD2mHxvByjCkH8HAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      features: [
        { icon: Zap, text: "Instant Setup" },
        { icon: Shield, text: "DDoS Protection" },
        { icon: Clock, text: "99.9% Uptime" },
        { icon: Users, text: "24/7 Support" },
        { icon: Cpu, text: "Latest Hardware" },
        { icon: Globe, text: "Global Locations" }
      ],
      browseLink: "/game-servers"
    },
    {
      id: 'home-vps',
      title: "Power Your Projects",
      description: "Choose from high-performance VPS, VDS, or Dedicated Servers. Full root access, NVMe SSDs, and enterprise-grade hardware for ultimate control and reliability.",
      image: "https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      features: [
        { icon: Cpu, text: "Ryzen & Xeon CPUs" },
        { icon: HardDrive, text: "NVMe SSD Storage" },
        { icon: Shield, text: "Full Root Access" },
        { icon: Globe, text: "Multiple Locations" },
        { icon: Webhook, text: "Scalable Resources" },
        { icon: Users, text: "Expert Support" }
      ],
      browseLink: "/vps-hosting"
    },
    {
      id: 'home-cloud',
      title: "Elevate to the Cloud",
      description: "Discover scalable Cloud Solutions: Bot Hosting, Cloud Gaming, and versatile Development Environments. Robust infrastructure for all your cloud ambitions.",
      image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      features: [
        { icon: CloudIcon, text: "Scalable Resources" },
        { icon: BotIcon, text: "Bot Hosting" },
        { icon: Globe, text: "Cloud Gaming" },
        { icon: Cpu, text: "Dev Environments" },
        { icon: Shield, text: "Secure Cloud" },
        { icon: Zap, text: "High Availability" }
      ],
      browseLink: "/cloud-gaming"
    },
    {
      id: 'home-ddos',
      title: "Bulletproof Protection",
      description: "Secure your online presence with XiteNodes' industry-leading DDoS Protection. Up to 192Tbps mitigation capacity ensures your services stay online, always.",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      features: [
        { icon: Shield, text: "192Tbps+ Capacity" },
        { icon: Zap, text: "Instant Mitigation" },
        { icon: Globe, text: "Global Network" },
        { icon: Clock, text: "24/7 Monitoring" },
        { icon: Cpu, text: "AI-Powered Detection" },
        { icon: Users, text: "Expert Security Team" }
      ],
      browseLink: "/ddos-protection"
    },
    {
      id: 'home-web',
      title: "Launch Your Website",
      description: "Reliable, fast, and feature-rich Web Hosting. Perfect for personal sites, blogs, or e-commerce stores. Easy management with cPanel and LiteSpeed.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      features: [
        { icon: ServerIcon, text: "cPanel Included" },
        { icon: Shield, text: "Free SSL Certificate" },
        { icon: Zap, text: "LiteSpeed Web Server" },
        { icon: Clock, text: "99.9% Uptime" },
        { icon: Users, text: "24/7 Support" },
        { icon: Globe, text: "CloudLinux OS" }
      ],
      browseLink: "/web-hosting"
    }
  ];

  return (
    <div className="relative">
      <Helmet>
        <title>Indian Minecraft Hosting | Low Ping Servers - XiteNodes</title>
        <link rel="canonical" href="https://xitenodes.com/" />
        <meta name="description" content="Get the best Indian Minecraft server hosting with XiteNodes. Low latency servers in Mumbai & Kolkata, Java + Bedrock support, DDoS protection, 99.9% uptime SLA." />
        <meta property="og:title" content="Indian Minecraft Hosting | Low Ping Servers - XiteNodes" />
        <meta property="og:description" content="Get the best Indian Minecraft server hosting with XiteNodes. Low latency servers in Mumbai & Kolkata, Java + Bedrock support, DDoS protection, 99.9% uptime SLA." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xitenodes.com/" />
        <meta property="og:image" content="https://xitenodes.com/images/og-banner.png" />
        <meta property="og:image:alt" content="Minecraft Hosting India - XiteNodes low latency servers" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Indian Minecraft Hosting | Low Ping Servers - XiteNodes" />
        <meta name="twitter:description" content="Get the best Indian Minecraft server hosting with XiteNodes. Low latency servers in Mumbai & Kolkata, Java + Bedrock support, DDoS protection, 99.9% uptime SLA." />
        <meta name="twitter:image" content="https://xitenodes.com/images/og-banner.png" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "XiteNodes Minecraft Hosting India",
            "url": "https://xitenodes.com/",
            "description": "Minecraft Hosting in India and Game Hosting India by XiteNodes. High-performance, secure, and reliable game server hosting for Indian gamers."
          }
        `}</script>
      </Helmet>
      <h1 className="sr-only">Indian Minecraft Server Hosting - XiteNodes</h1>
      <AnimatedParticles count={50} />
      <HeroCarousel slidesData={slides} />
      <TrustedBy />
      <CoreFeatures />

      {/* Free Minecraft Hosting Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-900 via-green-900 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ff00' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-green-400 to-emerald-400 text-black font-bold px-4 py-2 rounded-full text-sm mb-4">
              100% TRULY FREE - NO CHARGES
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-300 bg-clip-text text-transparent">
                FREE Minecraft Hosting
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Start your Minecraft journey with our truly free hosting plan. Perfect for small communities with unlimited players and plugins.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-400/30 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-white mb-2">Free Forever Plan</h3>
                  <div className="text-5xl font-bold text-green-400 mb-2">FREE</div>
                  <p className="text-gray-300">Truly free, no charges at all</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-slate-800/40 rounded-xl border border-green-500/20">
                    <div className="p-2 bg-green-500/20 rounded-lg mr-4">
                      <Cpu className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">16GB RAM</h4>
                      <p className="text-gray-400">Premium DDR4 memory for smooth gameplay</p>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-slate-800/40 rounded-xl border border-green-500/20">
                    <div className="p-2 bg-green-500/20 rounded-lg mr-4">
                      <Zap className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">400% CPU Power</h4>
                      <p className="text-gray-400">High-performance processors for lag-free experience</p>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-slate-800/40 rounded-xl border border-green-500/20">
                    <div className="p-2 bg-green-500/20 rounded-lg mr-4">
                      <Users className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Unlimited Players</h4>
                      <p className="text-gray-400">No player limit restrictions</p>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-slate-800/40 rounded-xl border border-green-500/20">
                    <div className="p-2 bg-green-500/20 rounded-lg mr-4">
                      <MapPin className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">India Locations</h4>
                      <p className="text-gray-400">Mumbai & Kolkata data centers</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link to="/free-minecraft-hosting-india" className="inline-block">
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <Gamepad2 className="w-6 h-6 mr-2" />
                    Get Your Free Server Now
                  </Button>
                </Link>
                <p className="text-gray-400 mt-3 text-sm">Truly free • Instant activation</p>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border-2 border-green-400/30 shadow-2xl">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-black font-bold px-4 py-1 rounded-full text-sm">
                    FREE TIER
                  </div>
                </div>

                <div className="absolute top-6 left-4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute top-6 left-10 w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-6 left-16 w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="mt-12 space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
                    <span className="text-green-400 font-semibold">✓ Server Status:</span>
                    <span className="text-white font-bold">Ready to Deploy</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
                    <span className="text-green-400 font-semibold">⚡ Setup Time:</span>
                    <span className="text-white font-bold">&lt; 60 seconds</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
                    <span className="text-green-400 font-semibold">🚀 Performance:</span>
                    <span className="text-white font-bold">Low</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
                    <span className="text-green-400 font-semibold">💰 Cost:</span>
                    <span className="text-green-400 font-bold text-xl">FREE</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                  <h4 className="text-white font-semibold mb-2">What's Included:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Full server control panel</li>
                    <li>• Automatic backups</li>
                    <li>• Unlimited plugins & mods</li>
                    <li>• Java & Bedrock compatible</li>
                    <li>• Community support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400 max-w-2xl mx-auto">
              Need more resources? Upgrade to our premium plans anytime with additional RAM, storage,
              and priority support. Start free and scale as your community grows.
            </p>
          </div>
        </div>
      </section>

      {/* Beyond the Hype - Competitive Positioning Section */}
      <BeyondTheHype />

      {/* Minecraft Hosting Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Minecraft Hosting in India
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the ultimate Minecraft adventure with XiteNodes' premium hosting solutions,
              designed specifically for Indian gamers and communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/80 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-green-500/20 rounded-lg mr-3">
                      <Hammer className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Instant Setup</h3>
                  </div>
                  <p className="text-gray-400">Get your Minecraft server running in under 60 seconds with our automated deployment system.</p>
                </div>

                <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/80 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg mr-3">
                      <Shield className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">DDoS Protection</h3>
                  </div>
                  <p className="text-gray-400">Advanced protection keeps your server online even during the heaviest attacks.</p>
                </div>

                <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/80 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-purple-500/20 rounded-lg mr-3">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Low Latency</h3>
                  </div>
                  <p className="text-gray-400">Servers located in India ensure minimal ping and the smoothest gameplay experience.</p>
                </div>

                <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/80 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-cyan-500/20 rounded-lg mr-3">
                      <Users className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">24/7 Support</h3>
                  </div>
                  <p className="text-gray-400">Expert support team available round the clock to help with any issues or questions.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-3">Game Hosting India</h3>
                <p className="text-gray-300 mb-4">
                  Beyond Minecraft, XiteNodes offers comprehensive game hosting solutions across India.
                  Our infrastructure is optimized for speed, security, and scalability, making us the
                  preferred choice for serious gamers and communities.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Minecraft</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">CS2</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Rust</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Valheim</span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">80+ More</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
                <div className="absolute top-4 left-4 w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="absolute top-4 left-10 w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="absolute top-4 left-16 w-3 h-3 bg-green-400 rounded-full"></div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                    <span className="text-green-400">✓ Server Status:</span>
                    <span className="text-white font-semibold">Online</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                    <span className="text-blue-400">⚡ Ping:</span>
                    <span className="text-white font-semibold">12ms</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                    <span className="text-purple-400">👥 Players:</span>
                    <span className="text-white font-semibold">24/100</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                    <span className="text-cyan-400">🔒 Protection:</span>
                    <span className="text-white font-semibold">Active</span>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Link to="/game-servers" className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                      <Gamepad2 className="w-5 h-5 mr-2" />
                      Start Your Server
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DDoSRecord />
      <GlobalInfrastructure />
      <Reviews />
    </div>
  );
};

export default HomePage;
