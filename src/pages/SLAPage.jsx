import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock } from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';

const SLAPage = () => {
    const sections = [
        {
            title: "Uptime Commitment",
            content: [
                "We commit to maintaining 99.9% monthly uptime across all SLA-covered services. After recent upstream-related disruptions, all routing and infrastructure have been fully migrated to XiteNodes-controlled systems for consistent and predictable stability.",
                "Our goal is to ensure long-term reliability backed by improved monitoring, faster incident response, and complete internal routing control."
            ]
        },
        {
            title: "Support & Response Times",
            content: [
                "• Critical Issues (Service Down / Major Impact): Response within 30 minutes via Phone or WhatsApp Hotline.",
                "• Non-Critical Issues (Performance Issues, Panel Errors): Response within 6 hours via Discord Ticket.",
                "• General Inquiries: Response within 24 hours via Email or Ticket Portal.",
                "During major incidents, customers will receive live updates, ETA for fix, and post-incident summaries for complete transparency."
            ]
        },
        {
            title: "Compensation Policy",
            content: [
                "• ≤ 30 Minutes Downtime: No compensation.",
                "• 30–60 Minutes: ₹150 Xite Wallet credit.",
                "• 1–2 Hours: 3-day service extension.",
                "• 2–6 Hours: 7-day service extension + ₹500 credit.",
                "• 6–12 Hours: 10-day service extension + ₹750 credit.",
                "• > 12 Hours: Choice between a 100% Wallet Refund or a Full Month service extension.",
                "Compensation applies only to SLA-covered services. Budget Series plans do not include uptime guarantees."
            ]
        },
        {
            title: "Exclusions & Limitations",
            content: [
                "The SLA does not apply to downtime or interruptions caused by:",
                "",
                "• Scheduled maintenance (announced at least 24 hours in advance).",
                "• Natural disasters, backbone outages, or large-scale DDoS attacks exceeding 100 Gbps.",
                "• Client-side issues including misconfigurations, abuse, unsupported modifications, or policy violations.",
                "• Downtime less than or equal to 30 minutes."
            ]
        },
        {
            title: "Data Security",
            content: [
                "We take data integrity on Game Servers seriously.",
                "• If your service data becomes corrupted on our Game Server infrastructure, you are eligible for a 100% refund to the original payment method, subject to our Refund Policy.",
                "• Not applicable if the server was suspended or terminated (including for non-payment, abuse, or policy violations).",
                "• We guarantee 100% data recovery if you have created an in‑panel Backup from the Backup tab prior to the incident.",
                (<>
                    For details, please review our <Link to="/refund-policy" className="text-pink-400 underline">Refund Policy</Link>.
                </>)
            ]
        },
        {
            title: "Monitoring & Reporting",
            content: [
                "All services are monitored in real-time using internal and external tools. Outage notifications, incident updates, and maintenance alerts are shared transparently via Discord announcements and Email notifications.",
                "Clients are encouraged to follow these channels for the latest service updates."
            ]
        },
        {
            title: "Support Hours & Channels",
            content: [
                "Our support team is available during business hours through the following channels:",
                "",
                "• Phone / WhatsApp (Priority Support)",
                "• Discord (Fast Support)",
                "• Ticket System (Standard Support)",
                "• Email (General Queries)"
            ]
        },
        {
            title: "Disclaimer",
            content: [
                "This SLA represents a service commitment and is not a legally binding contract. All compensations, credits, and extensions are issued at the discretion of XiteNodes' management based on fairness and service impact.",
                "",
                "With upgraded routing, improved monitoring, and complete infrastructure control, XiteNodes is committed to delivering reliable, stable performance backed by transparent communication."
            ]
        }
    ];

    return (
        <div className="min-h-screen pb-16 relative overflow-hidden">
            <Helmet>
                <title>Service Level Agreement (SLA) - XiteNodes</title>
                <meta name="description" content="XiteNodes SLA — 99.9% uptime commitment, credit policies, and service guarantees for all hosting plans." />
                <link rel="canonical" href="https://xitenodes.com/sla" />
                <meta name="robots" content="noindex, follow" />
            </Helmet>
            <AnimatedParticles count={15} />
            <div className="container mx-auto px-6 py-12 md:py-20 relative z-10 pt-24 md:pt-32">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-center mb-12"
                >
                    <Clock className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 text-pink-400" />
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              Service Level Agreement (SLA)
            </span>
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-3xl mx-auto p-6 md:p-10 glass-effect rounded-2xl shadow-xl bg-slate-900/50 backdrop-blur-md border border-slate-700/50"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="prose prose-invert prose-sm md:prose-base max-w-none text-gray-300 space-y-6">
                        <p className="text-lg">
                            This Service Level Agreement ("SLA") outlines the commitment of XiteNodes - Netpool Technologies Private Limited to deliver exceptional service for the following offerings: Minecraft Servers, VPS Hosting, Xite Shield, and Xite Cloud Services.
                        </p>

                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                className="mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">
                                    {index + 1}. {section.title}
                                </h3>
                                {section.content.map((paragraph, i) => (
                                    <p key={i} className="mb-2 text-gray-300">
                                        {paragraph}
                                    </p>
                                ))}
                            </motion.div>
                        ))}

                        <motion.p
                            className="text-center text-gray-400 mt-8 pt-6 border-t border-gray-700"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            By using our services, you acknowledge that you have read, understood, and agreed to this Service Level Agreement.
                        </motion.p>
                    </div>

                    <motion.div
                        className="mt-10 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Button asChild className="bg-gradient-to-r from-pink-500 to-purple-600 hover:brightness-110 text-white px-8 py-3 text-lg">
                            <Link to="/">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Back to Homepage
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default SLAPage;
