import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, XCircle, Shield, Zap, Server, Database } from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';

const ComparisonSection = ({ title, intro, data, conclusion, competitorName }) => (
    <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-8 mb-16 relative overflow-hidden backdrop-blur-sm">
        <div className="absolute top-0 right-0 p-4 opacity-10 font-[900] text-9xl text-slate-500 pointer-events-none select-none">VS</div>

        <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white hero-title-font">{title}</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-3xl hero-description-font">
                {intro}
            </p>

            <div className="overflow-x-auto mb-8 rounded-lg border border-slate-700">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-slate-800 border-b border-slate-700">
                            <th className="p-4 text-left text-gray-400 font-semibold">Feature</th>
                            <th className="p-4 text-left bg-green-900/20 text-green-400 border-l border-green-500/30">XiteNodes (Netpool)</th>
                            <th className="p-4 text-left text-gray-400 border-l border-slate-700">{competitorName}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
                                <td className="p-4 font-medium text-gray-300">{row.feature}</td>
                                <td className="p-4 bg-green-900/10 text-white font-semibold border-l border-green-500/20">
                                    {row.xite === true ? <CheckCircle className="w-5 h-5 text-green-500 inline mr-2" /> : row.xite}
                                </td>
                                <td className="p-4 text-gray-400 border-l border-slate-700/50">
                                    {typeof row.competitor === 'string' && (row.competitor.includes('High') || row.competitor.includes('Variable') || row.competitor.includes('Standard') || row.competitor.includes('Manual')) ?
                                        <span className="text-red-400">{row.competitor}</span> : row.competitor}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-green-400" />
                    Why XiteNodes Wins
                </h3>
                <p className="text-gray-300 hero-description-font mb-6">
                    {conclusion}
                </p>
                <Button asChild className="bg-green-600 hover:bg-green-700 text-white font-bold">
                    <Link to="/game-servers/minecraft">Switch to XiteNodes <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
            </div>
        </div>
    </div>
);

const CompetitorComparisonPage = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 relative">
            <Helmet>
                <title>XiteNodes vs Competitors | 2026 India Performance Review</title>
                <meta name="description" content="Compare XiteNodes against Hostinger, TeroHost, GBNodes, and SparkedHost. See why serious Indian gamers choose XiteNodes for performance and reliability." />
                <meta name="keywords" content="XiteNodes vs Hostinger, XiteNodes vs TeroHost, Minecraft Hosting Comparison India, Best Indian Minecraft Host" />
            </Helmet>

            <AnimatedParticles count={40} />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 hero-title-font">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">XiteNodes</span> vs The Rest
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto hero-description-font">
                        The 2026 India Performance Review. We compared latency, hardware, and legal accountability. Here are the results.
                    </p>
                </div>

                <ComparisonSection
                    title="XiteNodes vs. Hostinger"
                    competitorName="Hostinger"
                    intro="Hostinger is a massive global brand, but physics doesn't care about marketing budgets. When they say 'Asia' servers, they almost always mean Singapore. For an Indian gamer in Mumbai or Delhi, routing to Singapore adds 70ms to 100ms of latency. In competitive gaming, that is the difference between winning and lagging out."
                    conclusion="Hostinger is a web hosting company trying to do game hosting. XiteNodes is a dedicated game hosting provider owned by Netpool Technologies Pvt Ltd. We offer real infrastructure for huge Indian communities. Do not compromise your performance for a brand name that isn't even in the country."
                    data={[
                        { feature: 'Server Location', xite: 'Kolkata & Mumbai', competitor: 'Singapore' },
                        { feature: 'Latency to India', xite: '15-25ms (Ultra Low)', competitor: '70ms - 150ms' },
                        { feature: 'Support Channel', xite: 'Discord, WhatsApp & Ticket', competitor: 'AI Chat Bot / Slow Ticket' },
                        { feature: 'Pricing Model', xite: 'Fixed INR (Cheaper)', competitor: 'Expensive Renewals' }
                    ]}
                />

                <ComparisonSection
                    title="XiteNodes vs. TeroHost"
                    competitorName="TeroHost"
                    intro="TeroHost is a known budget option, but 'budget' often means cutting corners on safety. One of the biggest risks server owners face is data loss. TeroHost often relies on manual backups, meaning if you forget to click save and the server crashes, your progress is gone."
                    conclusion="Running a Minecraft server isn't just a game; it's a responsibility to your players. TeroHost might save you ₹50, but is that worth losing your entire world data? XiteNodes is operated by Netpool Technologies Pvt Ltd, providing enterprise-grade reliability and legal accountability."
                    data={[
                        { feature: 'Backup System', xite: 'Automated Daily', competitor: 'Manual / User Triggered' },
                        { feature: 'Uptime SLA', xite: '99.9% Guaranteed', competitor: 'Variable / Best Effort' },
                        { feature: 'Legal Status', xite: 'Registered Pvt Ltd', competitor: 'Unregistered / Individual' }
                    ]}
                />

                <ComparisonSection
                    title="XiteNodes vs. GBNodes"
                    competitorName="GBNodes"
                    intro="GBNodes is a respectable competitor, but in the world of hosting, hardware age matters. GBNodes often uses older chips for their budget plans. XiteNodes focuses on newer, high-frequency hardware optimized for Minecraft 1.21+. We deliver better performance per Rupee, ensuring your TPS stays at 20 even with heavy modpacks."
                    conclusion="Why pay 2026 prices for 2020 hardware? At XiteNodes (Netpool Technologies Pvt Ltd), we constantly upgrade our infrastructure to ensure you get the raw power you pay for. Combined with superior DDoS protection that filters attacks without stopping legitimate players, XiteNodes is the clear winner."
                    data={[
                        { feature: 'Hardware Value', xite: 'Best (High Freq Ryzen)', competitor: 'Good (Older Gen)' },
                        { feature: 'DDoS Protection', xite: 'Path.net & Cosmic', competitor: 'Standard' },
                        { feature: 'Payment Methods', xite: 'UPI, QR, RuPay', competitor: 'Standard Gateways' }
                    ]}
                />

                <ComparisonSection
                    title="XiteNodes vs. SparkedHost"
                    competitorName="SparkedHost"
                    intro="SparkedHost is a global giant, but giants often overlook local details. While they may offer an 'India' location, global hosts often use generic capacity with poor routing tables. This means your players on Jio or Airtel might get routed through Europe before reaching the server! XiteNodes uses optimized BGP peering specifically for Indian ISPs."
                    conclusion="SparkedHost doesn't care if the Rupee creates conversion fees for you, or if your players on Jio are lagging. We do. As Netpool Technologies Pvt Ltd, an Indian company, we built XiteNodes specifically to solve these local problems. Support local infrastructure that supports you back."
                    data={[
                        { feature: 'ISP Routing', xite: 'Optimized (Jio/Airtel)', competitor: 'Generic / Global' },
                        { feature: 'Currency', xite: 'Fixed INR (₹)', competitor: 'Fluctuating USD ($)' },
                        { feature: 'Support Language', xite: 'English & Hindi', competitor: 'English Only' }
                    ]}
                />

                <div className="text-center mt-20">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Upgrade?</h2>
                    <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-6 px-10 text-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300" asChild>
                        <Link to="/game-servers/minecraft">
                            <Server className="mr-2 w-6 h-6" /> Deploy Your Indian Server Now
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CompetitorComparisonPage;
