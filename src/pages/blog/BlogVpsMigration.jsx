import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowLeft, MoveRight, Server, CheckCircle, AlertTriangle } from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';

const BlogVpsMigration = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-slate-950 text-gray-200">
            <Helmet>
                <title>Moving Made Easy: Your Ultimate Guide to Migrating Websites to a New VPS - XiteNodes</title>
                <meta name="description" content="Step-by-step guide to migrating your website to a new VPS. DNS, files, databases, and zero-downtime strategies explained." />
                <link rel="canonical" content="https://www.xitenodes.com/blog/vps-migration-guide" />
            </Helmet>

            <AnimatedParticles count={20} />

            <article className="container mx-auto px-4 max-w-3xl relative z-10">
                <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                </Link>

                <header className="mb-8">
                    <Badge className="mb-4 bg-indigo-500/20 text-indigo-300 border-indigo-500/30">Migration</Badge>
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-500">
                        Moving Made Easy: Your Ultimate Guide to Migrating Websites to a New VPS
                    </h1>
                    <div className="flex items-center text-sm text-gray-500 space-x-6">
                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> February 6, 2026</span>
                        <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> 10 min read</span>
                        <span className="flex items-center"><MoveRight className="w-4 h-4 mr-2" /> Step-by-Step</span>
                    </div>
                </header>

                <img src="https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_3veymm3veymm3vey.png" alt="VPS Migration Guide" className="w-full h-64 md:h-96 object-cover rounded-2xl mb-12 border border-slate-800" />

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="lead text-xl text-gray-300">Migrating to a new VPS doesn't have to be stressful. Follow this guide for a smooth, zero-drama transition.</p>

                    <h2>Pre-Migration Checklist</h2>
                    <ul>
                        <li>✅ Backup everything (files + database)</li>
                        <li>✅ Document all installed software</li>
                        <li>✅ Note DNS TTL values</li>
                        <li>✅ Test new server before migration</li>
                    </ul>

                    <h2 className="flex items-center gap-2"><Server className="w-6 h-6 text-indigo-400" /> Step 1: Setup New VPS</h2>
                    <ol>
                        <li>Install same OS version</li>
                        <li>Configure web server (Apache/Nginx)</li>
                        <li>Install PHP, MySQL, etc.</li>
                        <li>Configure SSL certificates</li>
                    </ol>

                    <h2>Step 2: Transfer Files</h2>
                    <pre className="bg-slate-900 p-4 rounded text-sm text-indigo-300 overflow-x-auto">
                        {`rsync -avz --progress /var/www/ user@newserver:/var/www/`}
                    </pre>

                    <h2>Step 3: Migrate Database</h2>
                    <pre className="bg-slate-900 p-4 rounded text-sm text-indigo-300 overflow-x-auto">
                        {`mysqldump -u user -p database > backup.sql
scp backup.sql user@newserver:~/
mysql -u user -p database < backup.sql`}
                    </pre>

                    <h2>Step 4: Update DNS</h2>
                    <ul>
                        <li>Lower TTL to 300 seconds (24 hours before)</li>
                        <li>Update A record to new server IP</li>
                        <li>Wait for propagation (up to 48 hours)</li>
                    </ul>

                    <div className="bg-indigo-900/20 border border-indigo-500/30 p-4 rounded-lg my-4">
                        <p className="text-indigo-300 font-semibold mb-2">💡 Pro Tip</p>
                        <p className="text-sm">Keep old server running for 48-72 hours after DNS change to catch stragglers.</p>
                    </div>

                    <h2 className="flex items-center gap-2"><CheckCircle className="w-6 h-6 text-indigo-400" /> Post-Migration Verification</h2>
                    <ul>
                        <li>Test all site functionality</li>
                        <li>Check SSL certificate</li>
                        <li>Verify email sending</li>
                        <li>Test forms and checkout</li>
                    </ul>

                    <div className="bg-gradient-to-r from-indigo-900/40 to-violet-900/40 p-6 rounded-xl my-8 border border-indigo-500/30">
                        <h3 className="text-white font-bold mb-3">🚀 XiteNodes Migration Support</h3>
                        <ul className="text-sm space-y-2">
                            <li>✅ Free migration assistance</li>
                            <li>✅ Zero-downtime migration options</li>
                            <li>✅ cPanel/Plesk migrations supported</li>
                        </ul>
                    </div>

                    <div className="not-prose mt-12 text-center">
                        <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                            <Link to="/contact-sales">Get Migration Help →</Link>
                        </Button>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogVpsMigration;
