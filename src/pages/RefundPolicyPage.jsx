import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Repeat } from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';

const RefundPolicyPage = () => {
    const sections = [
        {
            title: "Refund Policy Overview",
            content: [
                "• Domains: Non-refundable.",
                "• Dedicated and VDS Services: Non-refundable.",
                "• VPS Services: Refundable within 24 hours of purchase, provided usage stays within minimal resource limits.",
                "• Shared Hosting Services: Refundable within 7 days of purchase, subject to revised conditions.",
                "• GST Charges: Non-refundable."
            ]
        },
        {
            title: "Shared Hosting Refund Criteria",
            content: [
                "• Within 2 Days: Eligible for a full refund with immediate service termination.",
                "• Within 7 Days (After 2 Days): Eligible for a 50% refund with immediate service termination.",
                "• After 7 Days: Refunds are not available; services will continue for the remainder of the billing period.",
                "• Renewals: Strictly non-refundable under any circumstances."
            ]
        },
        {
            title: "Refund Eligibility",
            content: [
                "Refunds are applicable only when XiteNodes fails to provide the core service functionality as described at the time of purchase. Issues caused by client-side configuration, misuse, abuse, or violations of the Terms of Service do not qualify for refunds.",
                "",
                "All refunds are issued to Xite Wallet by default for instant credit. Wallet credits can be used for future purchases, excluding domain registrations.",
                "",
                "Cash refunds require management approval and will only be processed to the same source account used for payment, subject to strict verification and compliance checks.",
                "",
                "Transactions below Rs300 are eligible only for Xite Wallet credits and not cash refunds."
            ]
        },
        {
            title: "Refund Methods and Associated Charges",
            content: [
                "• Xite Wallet (Default): Instant credit for eligible refunds with no additional verification.",
                "• Cash Refund to Original Payment Method: Subject to strict source verification, identity checks, and a processing timeline of 5–7 working days or more depending on the bank.",
                "• Processing Fees: Cash refunds incur a fee of 4% or Rs50 (whichever is higher), along with a Rs20 administrative charge.",
                "• NEFT Bank Transfer: An additional Rs30 charge applies if NEFT transfer is required.",
                "• Refunds are strictly denied in cases of service abuse, malicious activity, or TOS violation."
            ]
        },
        {
            title: "IP Allocation & Refund on IP Pools",
            content: [
                "• Upon purchase of any services, IP addresses will be allocated at managements sole discretion. The client cannot demand or request any specific or favourable IP pools.",
                "",
                "• Any refund claims raised on the grounds that the allocated IP pool is not favourable or does not match the client's preference will only be refunded as Xite Wallet Credits. Cash refunds will not be processed for such claims. Refund processing against IP allocation claims will take 14–20 working days.",
                "",
                "• IP Pool selection is only available via a support Ticket raised in the Billing Area. Custom IP pool allocation is a separate paid service and must be purchased independently."
            ]
        }
    ];

    return (
        <div className="min-h-screen pb-16 relative overflow-hidden">
            <Helmet>
                <title>Refund Policy - XiteNodes</title>
                <meta name="description" content="XiteNodes Refund Policy — understand our refund terms for VPS, game servers, web hosting, and dedicated server services." />
                <link rel="canonical" href="https://xitenodes.com/refund-policy" />
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
                    <Repeat className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 text-pink-400" />
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                            Refund Policy
                        </span>
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Last Updated: February 10, 2026
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
                            At XiteNodes, a brand of Netpool Technologies Private Limited, we are committed to providing our customers
                            with high-quality services. To ensure transparency, we have outlined our refund policy below.
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
                                    {section.title}
                                </h3>
                                {section.content.map((paragraph, i) => (
                                    <p key={i} className="mb-2 text-gray-300">
                                        {paragraph}
                                    </p>
                                ))}
                            </motion.div>
                        ))}

                        <motion.div
                            className="mt-8 p-6 rounded-xl bg-purple-900/20 border border-purple-500/30"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-lg font-semibold text-purple-400 mb-3">Need Help?</h4>
                            <p className="text-gray-300">
                                For any questions about our refund policy or to request a refund, please contact our billing team at:
                            </p>
                            <ul className="mt-3 space-y-2 text-gray-300">
                                <li>Email: billing@xitenodes.com</li>
                                <li>Phone: +918069645488</li>
                                <li>Address: Netpool Technologies Private Limited, 1432 VIVEKANANDA SARANI, RANIA, BORAL, South 24 Parganas, South 24 Parganas, South 24 Parganas- 700154, West Bengal</li>
                            </ul>
                        </motion.div>
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

export default RefundPolicyPage;
