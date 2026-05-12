import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowLeft, Terminal } from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';

const BlogMinecraftCommands = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-slate-950 text-gray-200">
            <Helmet>
                <title>20 Must-Know Minecraft Server Commands for 2026 - XiteNodes</title>
                <meta name="description" content="Running a server in 2026? Here is the cheat sheet of essential commands for admins, moderators, and operators." />
                <link rel="canonical" content="https://www.xitenodes.com/blog/must-know-minecraft-server-commands-2026" />
            </Helmet>

            <AnimatedParticles count={20} />

            <article className="container mx-auto px-4 max-w-3xl relative z-10">
                <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                </Link>

                <header className="mb-8">
                    <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">Tutorials</Badge>
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                        20 Must-Know Minecraft Server Commands for 2026
                    </h1>
                    <div className="flex items-center text-sm text-gray-500 space-x-6">
                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> January 18, 2026</span>
                        <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> 6 min read</span>
                    </div>
                </header>

                <img
                    src="https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_m8npr5m8npr5m8np.png"
                    alt="Terminal"
                    className="w-full h-64 md:h-96 object-cover rounded-2xl mb-12 border border-slate-800"
                />

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="lead text-xl text-gray-300">
                        You've got OP. Now what? Here are the essential commands you need to manage your community effectively in 2026.
                    </p>

                    <h2>Basic Management</h2>
                    <ul className="space-y-4 list-none pl-0">
                        <li className="bg-slate-900 p-4 rounded border border-slate-700">
                            <code className="text-purple-400 font-bold">/whitelist add &lt;player&gt;</code>
                            <p className="text-sm mt-1 mb-0">The first line of defense. Only allow friends to join.</p>
                        </li>
                        <li className="bg-slate-900 p-4 rounded border border-slate-700">
                            <code className="text-purple-400 font-bold">/gamemode &lt;creative|survival|spectator&gt; [player]</code>
                            <p className="text-sm mt-1 mb-0">Switch modes instantly. Shortcut: F3 + F4.</p>
                        </li>
                    </ul>

                    <h2>Moderation (The Ban Hammer)</h2>
                    <ul className="space-y-4 list-none pl-0">
                        <li className="bg-slate-900 p-4 rounded border border-slate-700">
                            <code className="text-red-400 font-bold">/ban &lt;player&gt; [reason]</code>
                            <p className="text-sm mt-1 mb-0">Permanent ban. Use wisely.</p>
                        </li>
                        <li className="bg-slate-900 p-4 rounded border border-slate-700">
                            <code className="text-red-400 font-bold">/kick &lt;player&gt; [reason]</code>
                            <p className="text-sm mt-1 mb-0">Temporary removal. Good for warnings.</p>
                        </li>
                    </ul>

                    <h2>New 1.22+ Commands</h2>
                    <p>
                        With the recent updates, new gamerules have been added to control the new biome generation features.
                    </p>
                    <pre className="bg-black p-4 rounded text-green-400">/gamerule doWardenSpawning false</pre>

                    <div className="not-prose mt-12 text-center">
                        <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                            <Link to="/budget-minecraft-hosting">Start Your Server</Link>
                        </Button>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogMinecraftCommands;
