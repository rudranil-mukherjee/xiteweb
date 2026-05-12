import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowLeft, Cloud } from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';

const BlogEnshroudedGuide = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-slate-950 text-gray-200">
            <Helmet>
                <title>Setting Up Enshrouded Dedicated Server on VPS (2026 Guide) - XiteNodes</title>
                <meta name="description" content="Complete guide to hosting your own Enshrouded world on a Linux VPS. Wine vs Proton, system requirements, and performance tuning." />
                <link rel="canonical" content="https://www.xitenodes.com/blog/setting-up-enshrouded-vps" />
            </Helmet>

            <AnimatedParticles count={20} />

            <article className="container mx-auto px-4 max-w-3xl relative z-10">
                <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                </Link>

                <header className="mb-8">
                    <Badge className="mb-4 bg-teal-500/20 text-teal-300 border-teal-500/30">Enshrouded</Badge>
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500">
                        Setting Up Enshrouded Dedicated Server on VPS
                    </h1>
                    <div className="flex items-center text-sm text-gray-500 space-x-6">
                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> January 28, 2026</span>
                        <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> 10 min read</span>
                        <span className="flex items-center"><Cloud className="w-4 h-4 mr-2" /> Linux Guide</span>
                    </div>
                </header>

                <img
                    src="https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_fwv4lqfwv4lqfwv4.png"
                    alt="Enshrouded Mist"
                    className="w-full h-64 md:h-96 object-cover rounded-2xl mb-12 border border-slate-800"
                />

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="lead text-xl text-gray-300">
                        Enshrouded is notoriously difficult to run on Linux due to its Windows-native server binary. Here is how we do it efficiently using Wine.
                    </p>

                    <h2>System Requirements</h2>
                    <ul>
                        <li><strong>CPU:</strong> 4 vCores (Ryzen recommended)</li>
                        <li><strong>RAM:</strong> 16GB (The Shroud eats RAM)</li>
                        <li><strong>OS:</strong> Ubuntu 24.04 LTS</li>
                    </ul>

                    <h2>The Setup (Docker Method)</h2>
                    <p>
                        We recommend using a Docker container with Wine pre-configured. It's cleaner and easier to update.
                    </p>

                    <pre className="bg-slate-900 p-4 rounded text-sm text-cyan-300 overflow-x-auto">
                        {`docker run -d \\
    --name enshrouded \\
    -p 15636:15636/udp \\
    -p 15637:15637/udp \\
    -v /path/to/data:/home/steam/enshrouded \\
    mornedhel/enshrouded-server:latest`}
                    </pre>

                    <div className="bg-slate-800 p-6 rounded-lg my-6">
                        <h3 className="text-white font-bold mb-2">Don't want to deal with Linux?</h3>
                        <p className="text-sm">
                            XiteNodes Game Hosting plans come with a <strong>1-Click Enshrouded Installer</strong>.
                            We handle the Wine layers and updates for you.
                        </p>
                    </div>

                    <div className="not-prose mt-12 text-center">
                        <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                            <Link to="/vps-india">Get a VPS</Link>
                        </Button>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogEnshroudedGuide;
