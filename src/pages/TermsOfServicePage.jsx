import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Gavel } from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';

const TermsOfServicePage = () => {
  const sections = [
    {
      title: "General Overview",
      content: [
        "These Terms of Service (ToS) govern the use of our infrastructure-as-a-service (IaaS), platform-as-a-service (PaaS), and other cloud-based solutions.",
        "By using our services, you confirm that you have read, understood, and accepted these terms.",
        "If you do not agree to these terms, please refrain from using our services."
      ]
    },
    {
      title: "Eligibility & User Obligations",
      content: [
        "Age Requirement: You must be at least 13 years old to access our services. If you are under 18, parental or legal guardian consent is required.",
        "Account Integrity: You agree to provide accurate registration details and maintain the confidentiality of your account credentials.",
        "Prohibited Activities:",
        "• Misuse, illegal activities, hacking, or unauthorized automation (bots, scripts).",
        "• Unauthorized modification, redistribution, or resale of our services.",
        "• Any attempt to bypass security mechanisms or disrupt the integrity of our platform."
      ]
    },
    {
      title: "Intellectual Property Rights",
      content: [
        "All trademarks, software, website design, and service-related content are the exclusive property of XiteNodes – NPTL Pvt Ltd.",
        "Unauthorized use, reproduction, or modification of our brand assets is strictly prohibited."
      ]
    },
    {
      title: "Payments & Billing",
      content: [
        "Accepted payment methods: UPI, Visa, Mastercard, PayPal, Bank Transfer, Razorpay, Cashfree, Stripe, Tebex.",
        "All transactions are securely processed through third-party gateways.",
        "Prices may be subject to change without prior notice."
      ]
    },
    {
      title: "Subscriptions & Renewals",
      content: [
        "All subscription-based services are set to auto-renew unless manually canceled.",
        "Cancellation requests take effect at the end of the current billing cycle.",
        "Any changes to pricing or billing terms will be communicated in advance."
      ]
    },
    {
      title: "Refund & Cancellation Policy",
      content: [
        "Refunds are subject to our Refund Policy.",
        "Services like domain registrations, dedicated servers, and VDS are non-refundable.",
        "Refunds on eligible services are processed only if requested within the defined timeframe."
      ]
    },
    {
      title: "Service Usage & Compliance",
      content: [
        "Users must comply with applicable laws and regulations while using our services.",
        "Unauthorized framing, linking, or impersonation is prohibited.",
        "Data mining, scraping, or automated access to our platform is strictly restricted."
      ]
    },
    {
      title: "User-Generated Content",
      content: [
        "Users are solely responsible for the content they upload or create using our services.",
        "We do not assume liability for any content created, shared, or hosted by users."
      ]
    },
    {
      title: "Privacy & Data Protection",
      content: [
        "Our services comply with the highest data protection standards and are PCI DSS compliant.",
        "User data is stored and processed in secure locations, including India and the U.S.",
        "Refer to our Privacy Policy for details on data collection and usage."
      ]
    },
    {
      title: "Service Availability & Interruptions",
      content: [
        "We strive for 99.99% uptime, but periodic maintenance or unforeseen outages may occur.",
        "XiteNodes is not liable for losses arising from service interruptions, network failures, or force majeure events."
      ]
    },
    {
      title: "Backup & Data Integrity",
      content: [
        "Off-site backups are provided for select services.",
        "Users are responsible for downloading backups before service termination.",
        "Deleted data cannot be recovered post-termination."
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "XiteNodes is not responsible for:",
        "• Data loss due to user negligence or third-party actions.",
        "• Service downtime caused by network failures or third-party providers.",
        "• Any indirect, incidental, or consequential damages."
      ]
    },
    {
      title: "Blacklisted Hosting Providers",
      content: [
        "Users are prohibited from using the following hosting providers to protect our brand integrity:",
        "  - Kanhalabs By Manak Jangid",
        "  - Ateex Cloud",
        "  - Aspire Hosting",
        "  - Rippu",
        "  - CreeperCastle",
        "  - Evo Trade Asset Private Limited",
        "  - Joy Services",
        "  - Any Other Provider whoses IP upstream might Following ASN (152565,153522,45117)",
        "Users can choose whether they want to be our Reseller or use the above-mentioned providers.",
        "If found violating this policy, reseller services will be suspended and a refund will be issued for the remaining days.",
        "This policy is in place to protect our brand from being perceived as a cheap, low-quality provider."
      ]
    },
    {
      title: "Governing Law & Dispute Resolution",
      content: [
        "This agreement is governed by Indian law, and any disputes shall be resolved in Kolkata, India.",
        "Arbitration will be the preferred method of dispute resolution."
      ]
    },
    {
      title: "Modifications to ToS",
      content: [
        "XiteNodes reserves the right to modify these terms at any time.",
        "Users will be notified of any significant changes. Continued usage after modifications constitutes acceptance."
      ]
    },
    {
      title: "Contact Information",
      content: [
        "For any queries or clarifications regarding this ToS, reach out via:",
        "Email: support@xitenodes.com",
        "Phone: +918069645488",
        "Registered Address: Netpool Technologies Private Limited, 1432 VIVEKANANDA SARANI, RANIA, BORAL, South 24 Parganas, South 24 Parganas, South 24 Parganas- 700154, West Bengal"
      ]
    }
  ];

  return (
    <div className="min-h-screen pb-16 relative overflow-hidden">
      <Helmet>
        <title>Terms of Service - XiteNodes</title>
        <meta name="description" content="Read XiteNodes Terms of Service governing the use of our IaaS, PaaS, and cloud hosting solutions." />
        <link rel="canonical" href="https://xitenodes.com/terms-of-service" />
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
          <Gavel className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 text-pink-400" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              Terms of Service
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
              Welcome to XiteNodes, a brand of NETPOOL TECHNOLOGIES PRIVATE LIMITED. By accessing or using our services, 
              you agree to comply with the terms outlined below. Please read them carefully.
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
              By continuing to use XiteNodes, you acknowledge that you have read and understood these terms and agree to comply with them.
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

export default TermsOfServicePage;
