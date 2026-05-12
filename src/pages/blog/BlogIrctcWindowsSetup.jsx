import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowLeft, Monitor, Settings, CheckCircle } from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';

const BlogIrctcWindowsSetup = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-slate-950 text-gray-200">
            <Helmet>
                <title>Master Tatkal: Setting Up Your Windows VPS for IRCTC Auto-Login - XiteNodes</title>
                <meta name="description" content="Step-by-step guide to setting up Windows VPS for IRCTC booking. Browser configuration, auto-login setup, and optimal settings." />
                <link rel="canonical" content="https://www.xitenodes.com/blog/irctc-windows-vps-setup-autologin" />
            </Helmet>

            <AnimatedParticles count={20} />

            <article className="container mx-auto px-4 max-w-3xl relative z-10">
                <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                </Link>

                <header className="mb-8">
                    <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">Setup Guide</Badge>
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                        Master Tatkal: Windows VPS Setup for IRCTC
                    </h1>
                    <div className="flex items-center text-sm text-gray-500 space-x-6">
                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> February 6, 2026</span>
                        <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> 10 min read</span>
                        <span className="flex items-center"><Monitor className="w-4 h-4 mr-2" /> Tutorial</span>
                    </div>
                </header>

                <img src="https://storage.xitestudios.tech/webassests/windows-vps-setup.png" alt="Windows VPS Setup for IRCTC" className="w-full h-64 md:h-96 object-cover rounded-2xl mb-12 border border-slate-800" />

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="lead text-xl text-gray-300">Get your Windows VPS optimized for IRCTC booking with this complete setup guide.</p>

                    <h2 className="flex items-center gap-2"><Settings className="w-6 h-6 text-blue-400" /> Step 1: Access Your VPS</h2>
                    <ol>
                        <li>Open Remote Desktop Connection on your PC</li>
                        <li>Enter VPS IP address</li>
                        <li>Login with Administrator credentials</li>
                    </ol>

                    <h2>Step 2: Install Browser</h2>
                    <ul>
                        <li>Download Chrome or Edge (pre-installed)</li>
                        <li>Disable all extensions</li>
                        <li>Enable hardware acceleration</li>
                    </ul>

                    <h2>Step 3: Configure Browser</h2>
                    <ul>
                        <li><CheckCircle className="inline w-5 h-5 text-green-400 mr-2" />Save IRCTC credentials</li>
                        <li><CheckCircle className="inline w-5 h-5 text-green-400 mr-2" />Bookmark irctc.co.in</li>
                        <li><CheckCircle className="inline w-5 h-5 text-green-400 mr-2" />Save payment details</li>
                        <li><CheckCircle className="inline w-5 h-5 text-green-400 mr-2" />Pre-fill passenger info</li>
                    </ul>

                    <h2>Step 4: Windows Optimization</h2>
                    <ul>
                        <li>Disable visual effects (Performance Options)</li>
                        <li>Set power plan to High Performance</li>
                        <li>Disable Windows Update during booking time</li>
                        <li>Close background apps</li>
                    </ul>

                    <h2>Step 5: Time Synchronization</h2>
                    <p>Ensure VPS time is synced to Indian Standard Time (IST). Critical for 10 AM booking.</p>
                    <pre className="bg-slate-900 p-4 rounded text-sm text-blue-300 overflow-x-auto">{`w32tm /config /manualpeerlist:time.windows.com /syncfromflags:manual /update`}</pre>

                    <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 p-6 rounded-xl my-8 border border-blue-500/30">
                        <h3 className="text-white font-bold mb-3">💻 XiteNodes Windows VPS</h3>
                        <ul className="text-sm space-y-2">
                            <li>✅ Windows Server pre-installed</li>
                            <li>✅ RDP access ready</li>
                            <li>✅ Browser pre-configured</li>
                            <li>✅ IST timezone set</li>
                        </ul>
                    </div>

                    <div className="not-prose mt-12 text-center">
                        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                            <Link to="/irctc-vps">Get Windows VPS →</Link>
                        </Button>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogIrctcWindowsSetup;
