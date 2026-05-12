import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowLeft, DollarSign, TrendingUp, CheckCircle } from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';

const BlogIndianVpsPricing = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-slate-950 text-gray-200">
            <Helmet>
                <title>Beyond the Base Price: Demystifying Tiered Pricing for Indian VPS Plans - XiteNodes</title>
                <meta name="description" content="Understand Indian VPS pricing tiers. What you get at each price point and how to choose the right plan for your needs." />
                <link rel="canonical" content="https://www.xitenodes.com/blog/indian-vps-tiered-pricing-explained" />
            </Helmet>

            <AnimatedParticles count={20} />

            <article className="container mx-auto px-4 max-w-3xl relative z-10">
                <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                </Link>

                <header className="mb-8">
                    <Badge className="mb-4 bg-cyan-500/20 text-cyan-300 border-cyan-500/30">Pricing</Badge>
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                        Demystifying Tiered Pricing for Indian VPS
                    </h1>
                    <div className="flex items-center text-sm text-gray-500 space-x-6">
                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> February 6, 2026</span>
                        <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> 5 min read</span>
                        <span className="flex items-center"><DollarSign className="w-4 h-4 mr-2" /> Pricing Guide</span>
                    </div>
                </header>

                <img src="https://storage.xitestudios.tech/webassests/pricing-tiers.png" alt="Indian VPS Pricing" className="w-full h-64 md:h-96 object-cover rounded-2xl mb-12 border border-slate-800" />

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="lead text-xl text-gray-300">VPS pricing can be confusing. Here's what each tier typically offers and who it's for.</p>

                    <h2 className="flex items-center gap-2"><TrendingUp className="w-6 h-6 text-cyan-400" /> Entry Tier (₹400-700/mo)</h2>
                    <ul>
                        <li>1-2 vCPU</li>
                        <li>2-4GB RAM</li>
                        <li>30-50GB storage</li>
                        <li><strong>Best for:</strong> Personal projects, small blogs, learning</li>
                    </ul>

                    <h2>Mid Tier (₹800-1500/mo)</h2>
                    <ul>
                        <li>2-4 vCPU</li>
                        <li>4-8GB RAM</li>
                        <li>50-100GB storage</li>
                        <li><strong>Best for:</strong> Business websites, WordPress, small e-commerce</li>
                    </ul>

                    <h2>Professional Tier (₹1500-3000/mo)</h2>
                    <ul>
                        <li>4-8 vCPU</li>
                        <li>8-16GB RAM</li>
                        <li>100-200GB storage</li>
                        <li><strong>Best for:</strong> Growing businesses, medium e-commerce, SaaS apps</li>
                    </ul>

                    <h2>Enterprise Tier (₹3000+/mo)</h2>
                    <ul>
                        <li>8+ vCPU</li>
                        <li>16-64GB RAM</li>
                        <li>200GB+ storage</li>
                        <li><strong>Best for:</strong> Large applications, databases, high-traffic sites</li>
                    </ul>

                    <h2>What's Usually Included</h2>
                    <ul>
                        <li><CheckCircle className="inline w-5 h-5 text-green-400 mr-2" />DDoS protection</li>
                        <li><CheckCircle className="inline w-5 h-5 text-green-400 mr-2" />Dedicated IP</li>
                        <li><CheckCircle className="inline w-5 h-5 text-green-400 mr-2" />Basic backups</li>
                        <li><CheckCircle className="inline w-5 h-5 text-green-400 mr-2" />24/7 support</li>
                    </ul>

                    <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 p-6 rounded-xl my-8 border border-cyan-500/30">
                        <h3 className="text-white font-bold mb-3">💰 XiteNodes Transparent Pricing</h3>
                        <p className="text-sm">All plans include DDoS, backups, and support. No hidden fees. No surprises.</p>
                    </div>

                    <div className="not-prose mt-12 text-center">
                        <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                            <Link to="/vps-india">View All Plans →</Link>
                        </Button>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogIndianVpsPricing;
