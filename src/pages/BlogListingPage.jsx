import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';

const blogPosts = [
    // 4 Original SEO Articles
    {
        title: "Best Minecraft Hosting Provider 2026",
        slug: "/blog/best-minecraft-hosting-2026",
        category: "Minecraft",
        description: "In-depth review of the best Minecraft hosting providers for Indian players. Comparing XiteNodes vs Aternos vs Shockbyte.",
        date: "February 2026",
        readTime: "7 min read",
        featured: true,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_s4ieygs4ieygs4ie.png"
    },
    {
        title: "Best Indian VPS Provider 2026 | Benchmark Report",
        slug: "/blog/best-indian-vps-2026",
        category: "VPS Hosting",
        description: "Latency and performance benchmark tests from Kolkata and Mumbai. See why latency matters for your infrastructure.",
        date: "February 2026",
        readTime: "6 min read",
        featured: true,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_3veymm3veymm3vey.png"
    },
    {
        title: "Most Affordable VPS Provider 2026",
        slug: "/blog/affordable-vps-2026",
        category: "VPS Hosting",
        description: "Price-to-performance analysis of the cheapest VPS providers in India. Get premium performance for a budget price.",
        date: "January 2026",
        readTime: "5 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_9qx6pd9qx6pd9qx6.png"
    },
    {
        title: "Most Affordable Minecraft Hosting 2026",
        slug: "/blog/affordable-minecraft-hosting-2026",
        category: "Minecraft",
        description: "How to host a professional Minecraft server for under ₹500. The ultimate guide for budget-conscious gamers.",
        date: "January 2026",
        readTime: "4 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_y0ow32y0ow32y0ow.png"
    },
    // VPS & Infrastructure (Replicated)
    {
        title: "EPYC VPS India Benchmarks: AMD Milan vs DigitalOcean",
        slug: "/blog/epyc-vps-india-benchmarks",
        category: "Benchmarking",
        description: "Head-to-head comparison of XiteNodes AMD EPYC servers versus DigitalOcean Bangalore droplets.",
        date: "January 31, 2026",
        readTime: "7 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_5n0zfg5n0zfg5n0z.png"
    },
    {
        title: "The Best Budget VPS for Docker & Kubernetes Labs",
        slug: "/blog/budget-vps-docker-kubernetes",
        category: "DevOps",
        description: "Building a homelab? Here are the best VPS options under ₹2000 for running Docker containers and K8s clusters.",
        date: "January 20, 2026",
        readTime: "7 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/docker.png"
    },
    {
        title: "Unmetered Bandwidth VPS India: AMD EPYC Power",
        slug: "/blog/unmetered-bandwidth-vps-india",
        category: "VPS Hosting",
        description: "Why pay for traffic? Experience true unmetered bandwidth on our AMD EPYC powered Indian VPS nodes.",
        date: "January 15, 2026",
        readTime: "6 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_fbjrw3fbjrw3fbjr.png"
    },
    // Hytale Content (Replicated)
    {
        title: "Hytale Beginner's Guide (2026) | Best Server Hosting",
        slug: "/blog/hytale-beginners-guide-2026",
        category: "Hytale",
        description: "Prepare for your adventure in Orbis. The ultimate guide to starting your Hytale journey and finding the right server.",
        date: "January 24, 2026",
        readTime: "7 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_fwv4lqfwv4lqfwv4.png"
    },
    {
        title: "Best Items in Hytale: Top Weapons, Armor & Tools",
        slug: "/blog/best-hytale-items-weapons-guide",
        category: "Hytale",
        description: "A sneak peek into the best gear in Hytale. Master the weapon crafting system before the game even launches.",
        date: "January 22, 2026",
        readTime: "6 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_fwv4lqfwv4lqfwv4.png"
    },
    {
        title: "Hytale Server Hosting at XiteNodes",
        slug: "/blog/hytale-server-hosting",
        category: "Hytale",
        description: "Why XiteNodes is ready to be your #1 choice for Hytale server hosting in India and Dubai when the game drops.",
        date: "January 21, 2026",
        readTime: "4 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_fwv4lqfwv4lqfwv4.png"
    },
    // Minecraft Content (Replicated)
    {
        title: "How to Host a Minecraft Modded Server (2026)",
        slug: "/blog/how-to-host-minecraft-modded-server-2026",
        category: "Minecraft",
        description: "Step-by-step guide to installing Forge, Fabric, and massive modpacks like Better MC on your XiteNodes server.",
        date: "January 19, 2026",
        readTime: "7 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_3bsrbr3bsrbr3bsr.png"
    },
    {
        title: "20 Must-Know Minecraft Server Commands for 2026",
        slug: "/blog/must-know-minecraft-server-commands-2026",
        category: "Minecraft",
        description: "Essential commands for every server admin. From /ban to /gamerule, master your server management.",
        date: "January 18, 2026",
        readTime: "6 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_m8npr5m8npr5m8np.png"
    },
    {
        title: "Is Cracked Minecraft Illegal? The Truth",
        slug: "/blog/is-cracked-minecraft-illegal",
        category: "Minecraft",
        description: "Exploring the legalities and risks of using TLauncher and other cracked clients. Why you should buy the game.",
        date: "January 16, 2026",
        readTime: "5 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_7js0s17js0s17js0.png"
    },
    // New Game Content
    {
        title: "Why Palworld Server Hosting is Trending in 2026",
        slug: "/blog/why-palworld-hosting-trending-2026",
        category: "Palworld",
        description: "Palworld isn't dead. In 2026, it's bigger than ever with the new expansion. Find out why dedicated hosting is surging.",
        date: "February 2, 2026",
        readTime: "5 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_fwv4lqfwv4lqfwv4.png"
    },
    {
        title: "Top 5 Palworld Mods You Need in 2026",
        slug: "/blog/top-5-palworld-mods-2026",
        category: "Palworld",
        description: "Enhance your Gameplay with these essential Palworld mods. From map extensions to QoL improvements.",
        date: "February 4, 2026",
        readTime: "6 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_fwv4lqfwv4lqfwv4.png"
    },
    {
        title: "Setting Up Enshrouded Dedicated Server on VPS",
        slug: "/blog/setting-up-enshrouded-vps",
        category: "Enshrouded",
        description: "Complete guide to hosting your own Enshrouded world on a Linux VPS. Wine vs Proton, system requirements, and performance tuning.",
        date: "January 28, 2026",
        readTime: "10 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_fwv4lqfwv4lqfwv4.png"
    },
    {
        title: "Game Server Security Tips 2026: Protect Your Community",
        slug: "/blog/game-server-security-tips-2026",
        category: "Security",
        description: "Don't let hackers ruin your server. Essential tips on DDOS protection, whitelist management, and RCON security.",
        date: "February 1, 2026",
        readTime: "8 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_uxfaaxuxfaaxuxfa.png"
    },
    // New Minecraft Hosting Articles (February 2026)
    {
        title: "Free Minecraft Server Hosting 24/7: What Are You REALLY Getting?",
        slug: "/blog/free-minecraft-hosting-247-limitations",
        category: "Minecraft",
        description: "Discover the hidden limitations of free Minecraft server hosting. Learn what free 24/7 hosting actually offers and when it's time to upgrade.",
        date: "February 6, 2026",
        readTime: "8 min read",
        featured: true,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_s4ieygs4ieygs4ie.png"
    },
    {
        title: "Unleash Creativity: The Ultimate Guide to Minecraft Server Hosting for Modpacks",
        slug: "/blog/best-minecraft-hosting-modpacks",
        category: "Minecraft",
        description: "Complete guide to choosing the best Minecraft server hosting for modpacks. RAM requirements, performance tips, and top recommendations.",
        date: "February 6, 2026",
        readTime: "10 min read",
        featured: true,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_3bsrbr3bsrbr3bsr.png"
    },
    {
        title: "Level Up Your Game: Top-Rated Minecraft Server Hosting Solutions in India",
        slug: "/blog/minecraft-hosting-india-reviews",
        category: "Minecraft",
        description: "Comprehensive reviews of Minecraft server hosting providers in India. Compare latency, pricing, support, and features.",
        date: "February 6, 2026",
        readTime: "12 min read",
        featured: true,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_s4ieygs4ieygs4ie.png"
    },
    {
        title: "Building Worlds: Minecraft Server Hosting That Can Handle Your Epic Community",
        slug: "/blog/minecraft-hosting-large-player-counts",
        category: "Minecraft",
        description: "Complete guide to hosting Minecraft servers for large player counts. Hardware requirements, optimization, and hosting solutions for 50-500+ players.",
        date: "February 6, 2026",
        readTime: "11 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_m8npr5m8npr5m8np.png"
    },
    // VPS Core Topic Articles (February 2026)
    {
        title: "KVM vs. OpenVZ: Which Virtualization Technology Powers Your VPS?",
        slug: "/blog/kvm-vs-openvz-vps-virtualization",
        category: "VPS Hosting",
        description: "Compare KVM and OpenVZ virtualization. Understand the key differences in isolation, performance, and compatibility for VPS hosting.",
        date: "February 6, 2026",
        readTime: "8 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_3veymm3veymm3vey.png"
    },
    {
        title: "Managed vs. Unmanaged VPS: What's Right for Your Business?",
        slug: "/blog/managed-vs-unmanaged-vps-hosting",
        category: "VPS Hosting",
        description: "Detailed comparison of managed versus unmanaged VPS hosting. Understand costs, control, and responsibilities.",
        date: "February 6, 2026",
        readTime: "7 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_9qx6pd9qx6pd9qx6.png"
    },
    {
        title: "Scaling Your Business? How VPS Hosting Enables Seamless Growth",
        slug: "/blog/vps-scalability-business-growth",
        category: "VPS Hosting",
        description: "Learn how VPS hosting enables business scalability. Vertical and horizontal scaling strategies explained.",
        date: "February 6, 2026",
        readTime: "6 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_5n0zfg5n0zfg5n0z.png"
    },
    {
        title: "Level Up Your E-commerce: The Benefits of VPS Hosting for Your Store",
        slug: "/blog/vps-hosting-for-ecommerce",
        category: "E-commerce",
        description: "Discover why VPS hosting is ideal for e-commerce stores. Performance, security, and scalability benefits.",
        date: "February 6, 2026",
        readTime: "6 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_fbjrw3fbjrw3fbjr.png"
    },
    {
        title: "Your VPS, Your Fortress: Essential Security Features Every Provider Should Offer",
        slug: "/blog/vps-security-features-protection",
        category: "Security",
        description: "Essential VPS security features explained. From firewalls to DDoS protection, secure your server properly.",
        date: "February 6, 2026",
        readTime: "7 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_uxfaaxuxfaaxuxfa.png"
    },
    {
        title: "Demystifying VPS Performance: How CPU, RAM, and SSD Speed Up Your Website",
        slug: "/blog/vps-performance-cpu-ram-ssd",
        category: "VPS Hosting",
        description: "Understand how CPU, RAM, and SSD impact VPS performance. Optimization tips for faster websites.",
        date: "February 6, 2026",
        readTime: "6 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_5n0zfg5n0zfg5n0z.png"
    },
    {
        title: "Migrating to a New VPS: A Step-by-Step Guide for a Smooth Transition",
        slug: "/blog/migrate-website-to-vps-guide",
        category: "VPS Hosting",
        description: "Complete guide to migrating your website to a new VPS. File transfers, database moves, and DNS changes.",
        date: "February 6, 2026",
        readTime: "9 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_3veymm3veymm3vey.png"
    },
    {
        title: "From Shared Hosting to VPS: When and Why to Make the Upgrade",
        slug: "/blog/shared-hosting-to-vps-upgrade",
        category: "VPS Hosting",
        description: "Is it time to upgrade from shared hosting to VPS? Signs to watch for and benefits of making the switch.",
        date: "February 6, 2026",
        readTime: "5 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_9qx6pd9qx6pd9qx6.png"
    },
    {
        title: "VPS Disaster Recovery & Backup: Essential Strategies for Peace of Mind",
        slug: "/blog/vps-disaster-recovery-backup",
        category: "VPS Hosting",
        description: "Disaster recovery and backup strategies for VPS. Protect your data with proper planning and automation.",
        date: "February 6, 2026",
        readTime: "7 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_uxfaaxuxfaaxuxfa.png"
    },
    // Budget VPS Articles
    {
        title: "Beware the Fine Print: Hidden Costs of Cheap VPS Hosting Exposed",
        slug: "/blog/cheap-vps-hidden-costs-exposed",
        category: "VPS Hosting",
        description: "Uncover hidden costs in cheap VPS hosting. Bandwidth overages, setup fees, and surprise charges revealed.",
        date: "February 6, 2026",
        readTime: "6 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_9qx6pd9qx6pd9qx6.png"
    },
    {
        title: "The Savvy Shopper's Guide to Finding the Best Value Budget VPS",
        slug: "/blog/best-value-budget-vps-hosting",
        category: "VPS Hosting",
        description: "Find the best value in budget VPS hosting. Features to prioritize and how to compare providers effectively.",
        date: "February 6, 2026",
        readTime: "6 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_fbjrw3fbjrw3fbjr.png"
    },
    {
        title: "Surprising Features You Can Find in Budget VPS Plans",
        slug: "/blog/budget-vps-unexpected-features",
        category: "VPS Hosting",
        description: "Unexpected premium features available in budget VPS plans. DDoS protection, backups, and more.",
        date: "February 6, 2026",
        readTime: "5 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_5n0zfg5n0zfg5n0z.png"
    },
    {
        title: "Cloud vs. Traditional VPS: The Budget Showdown for Your Hosting Needs",
        slug: "/blog/cloud-vs-traditional-vps-budget",
        category: "Comparison",
        description: "Compare cloud VPS vs traditional VPS hosting. Understand pricing models and which is better for your budget.",
        date: "February 6, 2026",
        readTime: "7 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_3veymm3veymm3vey.png"
    },
    {
        title: "Squeeze More Power: 7 Optimization Hacks for Your Cheap VPS",
        slug: "/blog/optimize-cheap-vps-performance",
        category: "VPS Hosting",
        description: "Maximize your budget VPS performance with these 7 optimization tips. Get more from less.",
        date: "February 6, 2026",
        readTime: "8 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_5n0zfg5n0zfg5n0z.png"
    },
    // IRCTC VPS Articles
    {
        title: "IRCTC VPS & Indian IPs: Your Guide to Staying Compliant",
        slug: "/blog/irctc-vps-indian-ip-compliance",
        category: "IRCTC VPS",
        description: "Why Indian IP addresses matter for IRCTC booking. Compliance requirements and how to avoid account blocks.",
        date: "February 6, 2026",
        readTime: "6 min read",
        featured: true,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_3veymm3veymm3vey.png"
    },
    {
        title: "Tatkal Turbocharge: Unlocking Maximum Speed for IRCTC with Your VPS",
        slug: "/blog/irctc-tatkal-vps-speed-optimization",
        category: "IRCTC VPS",
        description: "Maximize IRCTC Tatkal booking speed with VPS optimization. Tips for faster loading and successful bookings.",
        date: "February 6, 2026",
        readTime: "7 min read",
        featured: true,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_fbjrw3fbjrw3fbjr.png"
    },
    {
        title: "Master Tatkal: Setting Up Your Windows VPS for IRCTC Auto-Login",
        slug: "/blog/irctc-windows-vps-setup-autologin",
        category: "IRCTC VPS",
        description: "Step-by-step guide to setting up Windows VPS for IRCTC booking. Browser configuration and optimal settings.",
        date: "February 6, 2026",
        readTime: "10 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_9qx6pd9qx6pd9qx6.png"
    },
    {
        title: "Don't Get Blocked: The Indispensable Role of a Dedicated IP for IRCTC VPS",
        slug: "/blog/irctc-dedicated-ip-importance",
        category: "IRCTC VPS",
        description: "Why dedicated IPs are crucial for IRCTC VPS. Avoid blocks and improve success rates.",
        date: "February 6, 2026",
        readTime: "6 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_5n0zfg5n0zfg5n0z.png"
    },
    {
        title: "Fortress for Tatkal: Essential Security Tips for Your IRCTC VPS",
        slug: "/blog/irctc-vps-security-tips",
        category: "IRCTC VPS",
        description: "Secure your IRCTC VPS with essential security tips. Protect your account and payment details.",
        date: "February 6, 2026",
        readTime: "7 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_uxfaaxuxfaaxuxfa.png"
    },
    {
        title: "IRCTC VPS Not Working? Your Go-To Guide for Common Errors & Solutions",
        slug: "/blog/irctc-vps-troubleshooting-errors",
        category: "IRCTC VPS",
        description: "Fix common IRCTC VPS issues. Solutions for connection errors, booking failures, and payment problems.",
        date: "February 6, 2026",
        readTime: "8 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_3veymm3veymm3vey.png"
    },
    {
        title: "Ping Perfect: How to Select the Best Indian Data Center for Your IRCTC VPS",
        slug: "/blog/irctc-vps-best-datacenter-india",
        category: "IRCTC VPS",
        description: "Choose the best datacenter for IRCTC VPS. Compare Mumbai, Bangalore, Chennai latency.",
        date: "February 6, 2026",
        readTime: "5 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_fbjrw3fbjrw3fbjr.png"
    },
    {
        title: "More Than Just Tickets: Unexpected Uses for Your High-Performance IRCTC VPS",
        slug: "/blog/irctc-vps-alternative-uses",
        category: "IRCTC VPS",
        description: "Get more value from your IRCTC VPS. Use it for web hosting, development, and remote desktop.",
        date: "February 6, 2026",
        readTime: "5 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_9qx6pd9qx6pd9qx6.png"
    },
    // Indian VPS Articles
    {
        title: "Homegrown Power: The Undeniable Advantages of Indian VPS Hosting",
        slug: "/blog/indian-vps-hosting-advantages",
        category: "VPS India",
        description: "Benefits of Indian VPS hosting. Lower latency, INR billing, local support, and data sovereignty.",
        date: "February 6, 2026",
        readTime: "6 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_3veymm3veymm3vey.png"
    },
    {
        title: "Linux or Windows? Picking the Perfect VPS OS for Your Indian Projects",
        slug: "/blog/linux-vs-windows-vps-india",
        category: "VPS India",
        description: "Compare Linux vs Windows VPS for Indian projects. Costs, use cases, and which works best.",
        date: "February 6, 2026",
        readTime: "7 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_5n0zfg5n0zfg5n0z.png"
    },
    {
        title: "Managed vs. Self-Managed VPS: The Right Choice for Your Indian Business",
        slug: "/blog/managed-vs-self-managed-vps-india",
        category: "VPS India",
        description: "Choose between managed and self-managed VPS for Indian businesses. Compare costs and control.",
        date: "February 6, 2026",
        readTime: "6 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_9qx6pd9qx6pd9qx6.png"
    },
    {
        title: "Hassle-Free Payments: All Accepted Methods for Your Indian VPS Hosting",
        slug: "/blog/indian-vps-payment-methods",
        category: "VPS India",
        description: "Payment options for Indian VPS hosting. UPI, credit cards, net banking, and more.",
        date: "February 6, 2026",
        readTime: "4 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_fbjrw3fbjrw3fbjr.png"
    },
    {
        title: "Beyond the Base Price: Demystifying Tiered Pricing for Indian VPS Plans",
        slug: "/blog/indian-vps-tiered-pricing-explained",
        category: "VPS India",
        description: "Understand Indian VPS pricing tiers. What you get at each price point and how to choose.",
        date: "February 6, 2026",
        readTime: "5 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_5n0zfg5n0zfg5n0z.png"
    },
    {
        title: "From Startups to Scale-Ups: Indian Businesses Thriving with VPS Hosting",
        slug: "/blog/indian-business-vps-success-stories",
        category: "VPS India",
        description: "Success stories of Indian businesses using VPS hosting. E-commerce, SaaS, and startups scaling.",
        date: "February 6, 2026",
        readTime: "6 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_3veymm3veymm3vey.png"
    },
    // Dedicated Server Articles
    {
        title: "Unlocking Power: 7 Unexpected Ways Businesses Use Dedicated Servers",
        slug: "/blog/dedicated-server-business-uses",
        category: "Dedicated Servers",
        description: "Discover unique business uses for dedicated servers. From AI training to game hosting.",
        date: "February 6, 2026",
        readTime: "7 min read",
        featured: false,
        image: "https://storage.xitestudios.tech/webassests/Gemini_Generated_Image_5n0zfg5n0zfg5n0z.png"
    }
];

const BlogListingPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterCategory, setFilterCategory] = useState("All");

    const categories = ["All", ...new Set(blogPosts.map(post => post.category))];

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory === "All" || post.category === filterCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-slate-950 text-gray-200">
            <Helmet>
                <title>Insights & Updates - XiteNodes Hosting Blog</title>
                <meta name="description" content="Expert tips on game server hosting, VPS management, cloud infrastructure, and 2026 gaming trends." />
                <link rel="canonical" content="https://www.xitenodes.com/blog" />
            </Helmet>

            <AnimatedParticles count={20} />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">XiteNodes Blog</Badge>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        Insights & Updates
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                        Expert tips on game server hosting, VPS management, cloud infrastructure, and stating ahead in the hosting world.
                    </p>

                    <div className="max-w-md mx-auto relative mb-8">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="w-full bg-slate-900 border border-slate-700 rounded-full py-3 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilterCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filterCategory === cat ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30' : 'bg-slate-800 text-gray-400 hover:bg-slate-700'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Link to={post.slug} className="block h-full group">
                                <Card className="h-full bg-slate-900/50 border-slate-800 group-hover:border-purple-500/50 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10">
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <Badge className="bg-slate-900/80 backdrop-blur-sm text-white border-none">
                                                {post.category}
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardHeader>
                                        <div className="flex items-center space-x-4 text-xs text-gray-500 mb-2">
                                            <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                                            <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</span>
                                        </div>
                                        <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors line-clamp-2">
                                            {post.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-gray-400 line-clamp-3 mb-4">
                                            {post.description}
                                        </CardDescription>
                                        <span className="text-purple-400 text-sm font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                                            Read Article <ArrowRight className="w-4 h-4 ml-1" />
                                        </span>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogListingPage;
