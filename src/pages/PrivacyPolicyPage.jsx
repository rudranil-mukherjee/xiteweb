import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield } from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "We collect the following types of data to provide, maintain, and improve our services:",
        "A. Personal Information",
        "When you register, purchase a service, or interact with our platform, we may collect:",
        "• Full Name",
        "• Email Address",
        "• Phone Number",
        "• Billing & Payment Details",
        "• Address and Postal Code",
        "• Any other data voluntarily provided by you",
        "B. Automated Data Collection",
        "To enhance security and optimize our services, we automatically collect:",
        "• IP Address & Geolocation Data",
        "• Browser & Device Information",
        "• Session Activity & Usage Statistics",
        "• Cookies & Tracking Technologies"
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "We use the collected data for the following purposes:",
        "• Service Delivery: To process orders, provide hosting & cloud solutions, and manage user accounts.",
        "• Customer Support: To assist users and resolve technical issues.",
        "• Security & Fraud Prevention: To detect, investigate, and prevent fraudulent activities.",
        "• Legal Compliance: To comply with regulatory requirements and legal obligations.",
        "• Marketing & Promotions: To provide personalized offers, newsletters, and service updates (opt-in required)."
      ]
    },
    {
      title: "Data Sharing & Third-Party Disclosure",
      content: [
        "We do not sell or rent your data. However, we may share information under the following circumstances:",
        "• Service Providers & Vendors: Payment processors (Razorpay, Stripe), hosting providers, and analytics partners.",
        "• Legal Compliance: If required by law, court order, or regulatory authority.",
        "• Business Transfers: In the case of a merger, acquisition, or business restructuring."
      ]
    },
    {
      title: "Data Security Measures",
      content: [
        "We prioritize data security and implement the following safeguards:",
        "• Encryption: Secure encryption for data storage & transmission.",
        "• Access Control: Restricted access to sensitive data.",
        "• Regular Security Audits: Routine system evaluations to identify vulnerabilities.",
        "Despite these measures, no security system is completely foolproof. We encourage users to use strong passwords and enable multi-factor authentication (2FA)."
      ]
    },
    {
      title: "Cookies & Tracking Technologies",
      content: [
        "We use cookies, web beacons, and analytics tools like Google Analytics to:",
        "• Improve website functionality.",
        "• Track user behavior for service enhancements.",
        "• Provide targeted advertising (third-party opt-in required).",
        "Users can disable cookies in their browser settings, but this may impact the platform's performance."
      ]
    },
    {
      title: "User Rights & Control",
      content: [
        "As a user, you have the right to:",
        "• Access & Update Data: Modify your personal details in your account settings.",
        "• Data Deletion: Request account closure and data removal.",
        "• Marketing Opt-Out: Unsubscribe from promotional emails via the provided link.",
        "• Obtain a Copy of Data: Request a digital copy of stored information."
      ]
    },
    {
      title: "Data Retention Policy",
      content: [
        "We retain user data for as long as necessary to fulfill contractual obligations and legal requirements. Inactive accounts may be deleted after a specific period, as per our internal data retention policy."
      ]
    },
    {
      title: "Social Media & Third-Party Logins",
      content: [
        "If you choose to log in via third-party platforms (Facebook, Twitter, Google, etc.), we may receive your public profile data, including name, email, and profile picture. You can manage these permissions in your social media settings."
      ]
    },
    {
      title: "Data Ownership and Control (Data Ownership Act 2025)",
      content: [
        "This section clarifies ownership and handling of data hosted with XiteNodes.",
        "• Server Data (Paid Services): Data stored on Virtual Machines (VMs), dedicated/virtual private servers, or shared game servers is owned by the respective server operator or account holder.",
        "• No Interference Without Consent: XiteNodes will not access, copy, take backups of, or modify your Server Data without a prior written request/authorization from the account holder, except where required by law or to mitigate an active security or abuse incident.",
        "• Terminated State Ownership Transfer: When a server or service enters a Terminated State (canceled and deprovisioned), ownership of any remaining Server Data on that service transfers to XiteNodes. XiteNodes may retain, use, or monetize such content at its discretion, subject to applicable law and third-party rights.",
        "• Free Tier/Free Servers: All data stored on services provided free of charge (\"Free Servers\") is owned by XiteNodes irrespective of status. XiteNodes may use or monetize such data at its sole discretion, subject to applicable law and third-party rights.",
        "• Account and Payment Information: Personal account profile data and payment information are always owned by the account holder. As per PCI DSS compliance, XiteNodes does not store your full card data or passwords and cannot read them; payment data is handled by compliant payment processors.",
        "Definitions:",
        "- \"Server Data\" means files, databases, game files, configurations, and content you upload or generate on your provisioned services.",
        "- \"Terminated State\" means the service is canceled and resources are reclaimed/deleted per our lifecycle process.",
        "- \"Free Servers\" means services provisioned at zero monetary cost to you."
      ]
    },
    {
      title: "Policy Updates & Changes",
      content: [
        "We may update this Privacy Policy periodically. Any changes will be reflected on this page, and significant updates will be notified via email or website notification."
      ]
    },
    {
      title: "Contact Us",
      content: [
        "For questions or concerns about this Privacy Policy, you may contact us at:",
        "Email: support@xitenodes.com",
        "Phone: +918069645488",
        "Address: 1432 VIVEKANANDA SARANI, RANIA, BORAL, South 24 Parganas, South 24 Parganas, South 24 Parganas- 700154, West Bengal"
      ]
    }
  ];

  return (
    <div className="min-h-screen pb-16 relative overflow-hidden">
      <Helmet>
        <title>Privacy Policy - XiteNodes</title>
        <meta name="description" content="XiteNodes Privacy Policy — learn how we collect, use, and protect your personal data across our hosting services." />
        <link rel="canonical" href="https://xitenodes.com/privacy-policy" />
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
          <Shield className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 text-pink-400" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              Privacy Policy
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
              This Privacy Policy describes how XiteNodes - NETPOOL TECHNOLOGIES PRIVATE LIMITED ("Company," "we," "us," or "our") 
              collects, uses, discloses, and safeguards your personal information when you interact with our services, 
              website, and digital platforms.
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
              By using our services, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
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

export default PrivacyPolicyPage;