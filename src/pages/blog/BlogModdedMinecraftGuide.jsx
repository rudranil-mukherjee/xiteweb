import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowLeft, Box } from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';

const BlogModdedMinecraftGuide = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-slate-950 text-gray-200">
            <Helmet>
                <title>How to Host a Minecraft Modded Server: The Ultimate Guide (2026)</title>
                <meta name="description" content="Step-by-step guide to hosting 'Better MC', 'RLCraft', and other modpacks in 2026. Fabric vs Forge explained." />
                <link rel="canonical" content="https://www.xitenodes.com/blog/how-to-host-minecraft-modded-server-2026" />
            </Helmet>

            <AnimatedParticles count={20} />

            <article className="container mx-auto px-4 max-w-3xl relative z-10">
                <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                </Link>

                <header className="mb-8">
                    <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">Tutorials</Badge>
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-lime-400">
                        How to Host a Minecraft Modded Server: The Ultimate Guide (2026)
                    </h1>
                    <div className="flex items-center text-sm text-gray-500 space-x-6">
                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> January 19, 2026</span>
                        <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> 7 min read</span>
                    </div>
                </header>

                <img
                    src="https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_3bsrbr3bsrbr3bsr.png"
                    alt="Modded Minecraft"
                    className="w-full h-64 md:h-96 object-cover rounded-2xl mb-12 border border-slate-800"
                />

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="lead text-xl text-gray-300">
                        Vanilla is fun, but Modded is where the magic happens. In 2026, modpacks like "Better MC 5" and "All The Mods 11" are dominating the scene.
                        Here is how you can host them easily.
                    </p>

                    <h2>Fabric vs. NeoForge</h2>
                    <p>
                        The loader war continues. <strong>Fabric</strong> is still king for performance and lightweight mods.
                        <strong>NeoForge</strong> (the successor to Forge) is required for heavy industrial mods. XiteNodes supports both.
                    </p>

                    <h2>Step 1: Choose Your Plan</h2>
                    <p>
                        <strong>Warning:</strong> Don't try to run <em>All The Mods</em> on 2GB RAM. It will crash.
                    </p>
                    <ul>
                        <li><strong>Small Pack (Lite)</strong>: 4GB RAM</li>
                        <li><strong>Medium Pack (Beter MC)</strong>: 8GB RAM</li>
                        <li><strong>Heavy Pack (ATM/GregTech)</strong>: 12GB+ RAM</li>
                    </ul>

                    <h2>Step 2: The One-Click Install</h2>
                    <p>
                        Forget FTPing thousands of files. On the XiteNodes panel:
                    </p>
                    <ol>
                        <li>Go to "Modpack Manager"</li>
                        <li>Search for your pack (e.g., "DawnCraft")</li>
                        <li>Click "Install"</li>
                        <li>Wait 2 minutes. Done.</li>
                    </ol>

                    <div className="not-prose mt-12 text-center">
                        <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                            <Link to="/minecraft-hosting">Get a Modded Capable Server</Link>
                        </Button>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogModdedMinecraftGuide;
