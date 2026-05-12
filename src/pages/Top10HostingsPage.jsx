import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Shield, Award, AlertTriangle, Info, Star } from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';

const HostReview = ({ rank, name, verdict, verdictColor, description, pros, link, isWinner }) => {
    return (
        <div className={`relative mb-12 rounded-xl border ${isWinner ? 'bg-slate-900/80 border-green-500/50 shadow-2xl shadow-green-900/20' : 'bg-slate-900/40 border-slate-700/50'} p-6 md:p-8 overflow-hidden`}>
            {isWinner && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-400 to-green-500"></div>
            )}

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                    {isWinner && <div className="inline-flex items-center gap-1 bg-green-500/10 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-500/20 mb-3 uppercase tracking-wider"><Award className="w-3 h-3" /> #1 Winner</div>}
                    <h2 className={`text-2xl md:text-3xl font-bold ${isWinner ? 'text-white' : 'text-gray-200'} hero-title-font`}>
                        <span className="opacity-50 mr-2">#{rank}</span> {name}
                    </h2>
                </div>
                <div className={`inline-flex items-center px-4 py-2 rounded-lg font-bold text-sm md:text-base border ${verdictColor || 'bg-slate-800 border-slate-600 text-gray-400'}`}>
                    {verdict}
                </div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-6 hero-description-font">
                {description}
            </p>

            {pros && (
                <ul className="space-y-3 mb-8">
                    {pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                            <CheckCircle className={`w-5 h-5 ${isWinner ? 'text-green-400' : 'text-slate-500'} flex-shrink-0 mt-0.5`} />
                            <span>{pro}</span>
                        </li>
                    ))}
                </ul>
            )}

            {link && (
                <Button asChild size="lg" className={`${isWinner ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-slate-800 hover:bg-slate-700 text-gray-300'} font-bold w-full md:w-auto`}>
                    <Link to={link}>
                        Visit {name} <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </Button>
            )}
        </div>
    );
};

const Top10HostingsPage = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 relative">
            <Helmet>
                <title>Top 10 Best Minecraft Hosting in India: 2026 Reviews & Latency Tests</title>
                <meta name="description" content="We tested latency, support, and prices to find the best Minecraft hosting in India for 2026. XiteNodes takes #1 for low ping and trust." />
                <meta name="keywords" content="Best Minecraft Hosting India, Top 10 Minecraft Hosts, Indian Minecraft Server Hosting Reviews 2026" />
            </Helmet>

            <AnimatedParticles count={30} />

            <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 hero-title-font leading-tight">
                        Top 10 Best Minecraft Hosting in India: <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">2026 Reviews & Latency Tests</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto hero-description-font">
                        We tested latency, support, and legal accountability to find the absolute best options for Indian server owners. Here is the definitive list.
                    </p>
                </div>

                <div className="border-t border-slate-800 my-10"></div>

                <HostReview
                    rank="1"
                    name="XiteNodes India"
                    isWinner={true}
                    verdict="🏆 Best Overall Performance & Trust"
                    verdictColor="bg-green-900/30 border-green-500/30 text-green-400"
                    description={
                        <span>
                            XiteNodes takes the top spot for one critical reason: <strong>Trust</strong>. It is the only host on this list explicitly owned by a Registered Pvt Ltd Company (<strong>Netpool Technologies</strong>) with physical offices in Kolkata. While others are "discord hosts," XiteNodes is real infrastructure. With <strong>15ms latency</strong> in Mumbai/Kolkata, complete UPI support, and enterprise <strong>Path.net DDoS protection</strong>, it is the professional choice for Indian gamers.
                        </span>
                    }
                    pros={[
                        <span><strong>Registered Company:</strong> 100% Legal Accountability.</span>,
                        <span><strong>Local Payment:</strong> Full UPI, RuPay, and QR support.</span>,
                        <span><strong>99.9% Uptime:</strong> Legally binding SLA, not just a promise.</span>
                    ]}
                    link="/store"
                />

                <HostReview
                    rank="2"
                    name="LordCloud"
                    verdict="Good for casual gamers"
                    description="LordCloud is a popular name in the community. They offer decent ping and are widely used. However, it is important to note they operate more as a 'community-run' host compared to XiteNodes' corporate infrastructure. This makes them good for small SMPs, but the lack of formal accountability is a risk for larger projects."
                />

                <HostReview
                    rank="3"
                    name="Hostinger"
                    verdict="Good but Expensive"
                    description="A marketing giant. Hostinger is fantastic for web hosting, but their game hosting feels like an afterthought. Their 'India' servers are often rerouted via Singapore, leading to higher latency than true local hosts. Plus, renewal prices often double after the first month."
                />

                <HostReview
                    rank="4"
                    name="SparkedHost"
                    verdict="Best for US Players"
                    description="SparkedHost is an excellent global host with a great reputation in the US and Europe. However, for a user sitting in Kolkata or Mumbai, they lack the true physical Indian hardware needed for the absolute lowest ping. Great panel, wrong location."
                />

                <HostReview
                    rank="5"
                    name="GiantNodes"
                    verdict="Decent budget option"
                    description="A standard budget host. GiantNodes offers okay pricing and will get a server running. However, they lack the advanced Path.net DDoS protection and premium support channels found in the top 3. A fine choice if you are on a strict budget and don't expect heavy traffic."
                />

                <HostReview
                    rank="6"
                    name="BisectHosting"
                    verdict="Premium but Pricey"
                    description="Often sponsored by YouTubers, Bisect has a great custom panel. The downside? They charge in USD ($). This makes them incredibly expensive for Indian students due to conversion rates and high base pricing. Poor value for money in the Indian market."
                />

                <HostReview
                    rank="7"
                    name="Aternos"
                    verdict="Best Free Host (If you hate performance)"
                    description="It's completely free, and that's the only pro. You will face 60-minute wait queues to start your server, and massive lag once you get in. It is acceptable for testing a plugin for 5 minutes, but impossible for actually playing the game."
                />

                <HostReview
                    rank="8"
                    name="TeroHost"
                    verdict="Entry Level"
                    description="Cheap and cheerful. TeroHost is a known budget option. However, reliance on manual backups and slower support tickets makes it a risky choice for any server where you care about your data."
                />

                <HostReview
                    rank="9"
                    name="GBNodes"
                    verdict="Older Hardware"
                    description="GBNodes offers good prices, but often utilizes older Ryzen 5000 series chips. In Minecraft, single-thread performance is king, and these older chips significantly lag behind the modern hardware used by providers like XiteNodes."
                />

                <HostReview
                    rank="10"
                    name="Apex Hosting"
                    verdict="The Global Giant"
                    description="Extremely polished, but extremely expensive. Apex is the gold standard for support if you can afford it. However, the lack of local UPI payment support and high dollar pricing effectively blocks most Indian users from accessing their services."
                />

                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-10 text-center mt-20">
                    <h3 className="text-2xl font-bold text-white mb-4">🏆 Editor's Choice: 2026 Winner</h3>
                    <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                        For anyone wanting low ping, legal accountability, and seamless UPI payments in India, the choice is clear.
                    </p>
                    <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-8">
                        XiteNodes India
                    </div>
                    <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-10 text-lg shadow-lg shadow-green-900/20">
                        <Link to="/store">
                            Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Top10HostingsPage;
