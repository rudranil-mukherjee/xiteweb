import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Map, Server, Globe, Shield, FileText, Newspaper, Gamepad2, Database, Cloud, HelpCircle, Swords, Monitor, Zap } from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';
import { allSeoPages } from '@/data/seoLandingPageData';

// Build dynamic sections from SEO data
const gamePages = allSeoPages.filter(p => p.category === 'game-server');
const vpsPages = allSeoPages.filter(p => p.category === 'vps');
const dedicatedPages = allSeoPages.filter(p => p.category === 'dedicated');
const comparisonPages = allSeoPages.filter(p => p.category === 'comparison');

// Group game pages by game name
const gameGroups = {};
gamePages.forEach(p => {
    const game = p.game || 'Other';
    if (!gameGroups[game]) gameGroups[game] = [];
    gameGroups[game].push(p);
});

const SitemapPage = () => {
    const sections = [
        {
            title: "Products",
            icon: Server,
            links: [
                { name: "Game Servers", path: "/game-servers" },
                { name: "Minecraft Hosting India", path: "/minecraft-hosting-india" },
                { name: "Minecraft Hosting", path: "/minecraft-hosting" },
                { name: "Budget Minecraft Hosting", path: "/budget-minecraft-hosting" },
                { name: "Free Minecraft Hosting", path: "/free-minecraft-hosting-india" },
                { name: "VPS Hosting", path: "/vps-hosting" },
                { name: "VPS India", path: "/vps-india" },
                { name: "Cheap VPS", path: "/cheap-vps" },
                { name: "VDS Hosting", path: "/vds-hosting" },
                { name: "Dedicated Servers", path: "/dedicated-servers" },
                { name: "Web Hosting", path: "/web-hosting" },
                { name: "Reseller Web Hosting", path: "/reseller-web-hosting" },
            ]
        },
        {
            title: "Cloud Services",
            icon: Cloud,
            links: [
                { name: "Cloud Bot Hosting", path: "/cloud-bot-hosting" },
                { name: "Cloud Gaming", path: "/cloud-gaming" },
                { name: "Game Development Cloud", path: "/game-development-cloud" },
            ]
        },
        {
            title: "Infrastructure",
            icon: Database,
            links: [
                { name: "DDoS Protection", path: "/ddos-protection" },
                { name: "IP Pools", path: "/ip-pools" },
                { name: "Datacenter Colocation", path: "/datacenter-colocation" },
                { name: "Infrastructure", path: "/infrastructure" },
            ]
        },
        {
            title: "Company",
            icon: Globe,
            links: [
                { name: "About Us", path: "/about-us" },
                { name: "Contact Sales", path: "/contact-sales" },
                { name: "Flash Sales", path: "/flash-sales" },
                { name: "Competitor Comparison", path: "/competitor-comparison" },
                { name: "LordCloud Comparison", path: "/lordcloud-comparison" },
                { name: "Top 10 Minecraft Hosting India", path: "/top-10-minecraft-hosting-india" },
            ]
        },
        {
            title: "Legal",
            icon: FileText,
            links: [
                { name: "Terms of Service", path: "/terms-of-service" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Refund Policy", path: "/refund-policy" },
                { name: "SLA", path: "/sla" },
                { name: "Reseller TOS", path: "/reseller-tos" },
                { name: "Data Deletion", path: "/data-deletion" },
            ]
        },
        {
            title: "Blog - Minecraft",
            icon: Gamepad2,
            links: [
                { name: "Best Minecraft Hosting 2026", path: "/blog/best-minecraft-hosting-2026" },
                { name: "Affordable Minecraft Hosting 2026", path: "/blog/affordable-minecraft-hosting-2026" },
                { name: "How to Host Modded Minecraft Server", path: "/blog/how-to-host-minecraft-modded-server-2026" },
                { name: "Minecraft Server Commands 2026", path: "/blog/must-know-minecraft-server-commands-2026" },
                { name: "Is Cracked Minecraft Illegal?", path: "/blog/is-cracked-minecraft-illegal" },
                { name: "Free Minecraft Hosting 24/7 Limitations", path: "/blog/free-minecraft-hosting-247-limitations" },
                { name: "Best Minecraft Hosting for Modpacks", path: "/blog/best-minecraft-hosting-modpacks" },
                { name: "Minecraft Hosting India Reviews", path: "/blog/minecraft-hosting-india-reviews" },
                { name: "Minecraft Hosting Large Player Counts", path: "/blog/minecraft-hosting-large-player-counts" },
            ]
        },
        {
            title: "Blog - VPS Hosting",
            icon: Server,
            links: [
                { name: "Best Indian VPS 2026", path: "/blog/best-indian-vps-2026" },
                { name: "Affordable VPS 2026", path: "/blog/affordable-vps-2026" },
                { name: "EPYC VPS India Benchmarks", path: "/blog/epyc-vps-india-benchmarks" },
                { name: "Budget VPS Docker Kubernetes", path: "/blog/budget-vps-docker-kubernetes" },
                { name: "Unmetered Bandwidth VPS India", path: "/blog/unmetered-bandwidth-vps-india" },
                { name: "KVM vs OpenVZ Virtualization", path: "/blog/kvm-vs-openvz-vps-virtualization" },
                { name: "Managed vs Unmanaged VPS", path: "/blog/managed-vs-unmanaged-vps-hosting" },
                { name: "VPS Scalability Business Growth", path: "/blog/vps-scalability-business-growth" },
                { name: "VPS for E-commerce", path: "/blog/vps-hosting-for-ecommerce" },
                { name: "VPS Security Features", path: "/blog/vps-security-features-protection" },
                { name: "VPS Performance CPU RAM SSD", path: "/blog/vps-performance-cpu-ram-ssd" },
                { name: "Migrate Website to VPS Guide", path: "/blog/migrate-website-to-vps-guide" },
                { name: "Shared Hosting to VPS Upgrade", path: "/blog/shared-hosting-to-vps-upgrade" },
                { name: "VPS Disaster Recovery Backup", path: "/blog/vps-disaster-recovery-backup" },
            ]
        },
        {
            title: "Blog - Budget VPS",
            icon: HelpCircle,
            links: [
                { name: "Cheap VPS Hidden Costs Exposed", path: "/blog/cheap-vps-hidden-costs-exposed" },
                { name: "Best Value Budget VPS", path: "/blog/best-value-budget-vps-hosting" },
                { name: "Budget VPS Unexpected Features", path: "/blog/budget-vps-unexpected-features" },
                { name: "Cloud vs Traditional VPS Budget", path: "/blog/cloud-vs-traditional-vps-budget" },
                { name: "Optimize Cheap VPS Performance", path: "/blog/optimize-cheap-vps-performance" },
            ]
        },
        {
            title: "Blog - IRCTC VPS",
            icon: Shield,
            links: [
                { name: "IRCTC VPS Indian IP Compliance", path: "/blog/irctc-vps-indian-ip-compliance" },
                { name: "IRCTC Tatkal VPS Speed", path: "/blog/irctc-tatkal-vps-speed-optimization" },
                { name: "IRCTC Windows VPS Setup", path: "/blog/irctc-windows-vps-setup-autologin" },
                { name: "IRCTC Dedicated IP Importance", path: "/blog/irctc-dedicated-ip-importance" },
                { name: "IRCTC VPS Security Tips", path: "/blog/irctc-vps-security-tips" },
                { name: "IRCTC VPS Troubleshooting", path: "/blog/irctc-vps-troubleshooting-errors" },
                { name: "IRCTC VPS Best Datacenter India", path: "/blog/irctc-vps-best-datacenter-india" },
                { name: "IRCTC VPS Alternative Uses", path: "/blog/irctc-vps-alternative-uses" },
            ]
        },
        {
            title: "Blog - Indian VPS",
            icon: Globe,
            links: [
                { name: "Indian VPS Hosting Advantages", path: "/blog/indian-vps-hosting-advantages" },
                { name: "Linux vs Windows VPS India", path: "/blog/linux-vs-windows-vps-india" },
                { name: "Managed vs Self-Managed VPS India", path: "/blog/managed-vs-self-managed-vps-india" },
                { name: "Indian VPS Payment Methods", path: "/blog/indian-vps-payment-methods" },
                { name: "Indian VPS Tiered Pricing", path: "/blog/indian-vps-tiered-pricing-explained" },
                { name: "Indian Business VPS Success Stories", path: "/blog/indian-business-vps-success-stories" },
            ]
        },
        {
            title: "Blog - Games & Other",
            icon: Newspaper,
            links: [
                { name: "Hytale Beginner's Guide 2026", path: "/blog/hytale-beginners-guide-2026" },
                { name: "Best Hytale Items Weapons Guide", path: "/blog/best-hytale-items-weapons-guide" },
                { name: "Hytale Server Hosting", path: "/blog/hytale-server-hosting" },
                { name: "Palworld Hosting Trending 2026", path: "/blog/why-palworld-hosting-trending-2026" },
                { name: "Top 5 Palworld Mods 2026", path: "/blog/top-5-palworld-mods-2026" },
                { name: "Setting Up Enshrouded VPS", path: "/blog/setting-up-enshrouded-vps" },
                { name: "Game Server Security Tips 2026", path: "/blog/game-server-security-tips-2026" },
                { name: "Dedicated Server Business Uses", path: "/blog/dedicated-server-business-uses" },
            ]
        },
        // ── Dynamic SEO sections from data config ─────────────────
        ...Object.entries(gameGroups).map(([gameName, pages]) => ({
            title: `${gameName} Hosting`,
            icon: Gamepad2,
            links: pages.map(p => ({ name: p.h1, path: `/${p.slug}` })),
        })),
        {
            title: "VPS Hosting Pages",
            icon: Monitor,
            links: vpsPages.map(p => ({ name: p.h1, path: `/${p.slug}` })),
        },
        {
            title: "Dedicated Servers",
            icon: Zap,
            links: dedicatedPages.map(p => ({ name: p.h1, path: `/${p.slug}` })),
        },
        {
            title: "Competitor Comparisons",
            icon: Swords,
            links: comparisonPages.map(p => ({ name: p.h1, path: `/${p.slug}` })),
        },
    ];

    return (
        <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-slate-950 text-gray-200">
            <Helmet>
                <title>Sitemap - XiteNodes</title>
                <meta name="description" content="Complete sitemap of XiteNodes website. Find all pages, products, services, and blog articles." />
                <link rel="canonical" href="https://www.xitenodes.com/sitemap" />
            </Helmet>

            <AnimatedParticles count={15} />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
                        <Map className="w-3 h-3 mr-1" /> Site Navigation
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        Sitemap
                    </h1>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Complete index of all pages on XiteNodes. Find products, services, and articles quickly.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sections.map((section, idx) => (
                        <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-purple-500/30 transition-colors">
                            <h2 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                                <section.icon className="w-5 h-5 text-purple-400" />
                                {section.title}
                            </h2>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <Link
                                            to={link.path}
                                            className="text-gray-400 hover:text-purple-400 text-sm transition-colors flex items-center gap-1"
                                        >
                                            <span className="text-purple-500">›</span> {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center text-sm text-gray-500">
                    <p>XML Sitemap: <a href="/sitemap.xml" className="text-purple-400 hover:underline">/sitemap.xml</a></p>
                    <p>RSS Feed: <a href="/sitemap.rss" className="text-purple-400 hover:underline">/sitemap.rss</a></p>
                </div>
            </div>
        </div>
    );
};

export default SitemapPage;
