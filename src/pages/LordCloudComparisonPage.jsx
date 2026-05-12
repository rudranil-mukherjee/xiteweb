import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';

const LordCloudComparisonPage = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 relative">
            <Helmet>
                <title>XiteNodes vs LordCloud | The Difference Between a 'Host' and a 'Company'</title>
                <meta name="description" content="Comparison: XiteNodes vs LordCloud. Why serious servers choose Netpool Technologies Pvt Ltd over unregistered hosts. Legal accountability, physical infrastructure, and uptime guarantees." />
                <meta name="keywords" content="XiteNodes vs LordCloud, LordCloud Review India, Best Minecraft Hosting India, XiteNodes Legit" />
            </Helmet>

            <AnimatedParticles count={40} />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto bg-slate-900/50 border border-slate-700 rounded-xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
                    {/* Visual VS Graphic */}
                    <div className="absolute top-0 right-0 p-4 opacity-10 font-[900] text-9xl text-slate-500 pointer-events-none select-none">VS</div>

                    <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-white hero-title-font text-center leading-tight">
                        XiteNodes vs. LordCloud <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 text-2xl md:text-4xl block mt-2">
                            The Difference Between a 'Host' and a 'Company'
                        </span>
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed text-center max-w-3xl mx-auto hero-description-font">
                        LordCloud is popular, but let's ask the hard question: <strong>Do you know who actually owns your data?</strong> XiteNodes is operated by <em>Netpool Technologies Pvt Ltd</em>, a government-registered Indian company with physical offices in Kolkata. We don't just rent servers; we build infrastructure.
                    </p>

                    <div className="overflow-x-auto mb-10 rounded-lg border border-slate-700 shadow-xl">
                        <table className="w-full border-collapse bg-slate-800/50">
                            <thead>
                                <tr className="border-b border-slate-700">
                                    <th className="p-5 text-left text-gray-400 font-semibold w-1/3">Feature</th>
                                    <th className="p-5 text-left bg-emerald-900/20 text-emerald-400 border-l border-emerald-500/30 w-1/3">XiteNodes (Netpool)</th>
                                    <th className="p-5 text-left text-gray-500 border-l border-slate-700 w-1/3">LordCloud</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
                                    <td className="p-5 font-medium text-gray-300">Legal Status</td>
                                    <td className="p-5 bg-emerald-900/10 text-white font-bold border-l border-emerald-500/20 flex items-center">
                                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" /> Registered Pvt Ltd (2+ Years)
                                    </td>
                                    <td className="p-5 text-gray-500 border-l border-slate-700/50">Recently Incorporated</td>
                                </tr>
                                <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
                                    <td className="p-5 font-medium text-gray-300">Infrastructure</td>
                                    <td className="p-5 bg-emerald-900/10 text-white font-bold border-l border-emerald-500/20 flex items-center">
                                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" /> Owned Colo & Hardware
                                    </td>
                                    <td className="p-5 text-gray-500 border-l border-slate-700/50">Owned Hardware (Rented Colo)</td>
                                </tr>
                                <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
                                    <td className="p-5 font-medium text-gray-300">Network Assets</td>
                                    <td className="p-5 bg-emerald-900/10 text-white font-bold border-l border-emerald-500/20 flex items-center">
                                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" /> Own ASN & IP Pools
                                    </td>
                                    <td className="p-5 text-gray-500 border-l border-slate-700/50">No ASN / Rented IPs</td>
                                </tr>
                                <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
                                    <td className="p-5 font-medium text-gray-300">DDoS Protection</td>
                                    <td className="p-5 bg-emerald-900/10 text-white font-bold border-l border-emerald-500/20 flex items-center">
                                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" /> Stormwall, GCore, OVH + Custom XDP
                                    </td>
                                    <td className="p-5 text-gray-500 border-l border-slate-700/50">OVH Native</td>
                                </tr>
                                <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
                                    <td className="p-5 font-medium text-gray-300">Support Channels</td>
                                    <td className="p-5 bg-emerald-900/10 text-white font-bold border-l border-emerald-500/20 flex items-center">
                                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" /> Omni Channel Support
                                    </td>
                                    <td className="p-5 text-gray-500 border-l border-slate-700/50">Discord & WhatsApp Only</td>
                                </tr>
                                <tr>
                                    <td className="p-5 font-medium text-gray-300">Uptime SLA</td>
                                    <td className="p-5 bg-emerald-900/10 text-white font-bold border-l border-emerald-500/20 flex items-center">
                                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" /> Legally Binding SLA
                                    </td>
                                    <td className="p-5 text-gray-500 border-l border-slate-700/50">Standard Promise</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-slate-800/50 rounded-lg p-8 border-l-4 border-emerald-500 mb-10">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                            <Zap className="w-6 h-6 mr-3 text-emerald-400" />
                            Why Serious Servers Switch to XiteNodes
                        </h3>
                        <p className="text-gray-300 text-lg hero-description-font">
                            LordCloud is great for starting out or testing ideas. But when your server grows, you need stability, legal accountability, and enterprise hardware. <strong>XiteNodes is where you go when you get serious.</strong> We are built to handle high-traffic Indian communities that cannot afford "reseller downtime."
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-emerald-900/40 to-green-900/40 border border-green-500/30 rounded-xl p-8 text-center backdrop-blur-sm relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                        <div className="absolute inset-0 bg-green-500/5 blur-3xl"></div>
                        <h3 className="text-2xl font-bold text-white mb-2 relative z-10">🚀 Moving from LordCloud?</h3>
                        <p className="text-green-200 text-lg mb-6 relative z-10">Get <span className="font-bold text-white">50% Off Your First Month</span> + Free File Transfer</p>
                        <Button asChild size="lg" className="bg-white text-green-700 hover:bg-gray-100 font-bold py-6 px-10 relative z-10 text-lg shadow-lg">
                            <Link to="/contact-sales">
                                Claim Migration Offer <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LordCloudComparisonPage;
