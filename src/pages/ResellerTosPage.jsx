import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield } from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';

const ResellerTosPage = () => {

  const sections = [
    {
      title: "1. Reseller Tiers & Privileges",
      content: [
        "XiteNodes offers a structured 4-tier reseller program. Advancement is based on monthly resale volume:",
        "",
        "Tier 1 – Starter Reseller",
        "• Entry-level: Open to all approved applicants (approval required but rarely denied)",
        "• Standard reseller discount (minimal)",
        "• May request additional perks by contacting us on Discord",
        "",
        "Tier 2 – Growth Reseller",
        "• Criteria: ₹5,000+ monthly resale value",
        "• Perks:",
        "  • Priority Support Line (no IVR, Discord queue skip)",
        "  • ₹200–₹300 OFF on all VPS plans",
        "",
        "Tier 3 – Premium Reseller",
        "• Criteria: ₹10,000+ monthly resale value",
        "• Perks:",
        "  • Postpaid billing – up to 30 days to settle dues",
        "  • Higher discounts: ₹300–₹500 OFF per VPS plan",
        "",
        "Tier 4 – Master Reseller",
        "• Criteria: ₹30,000+ monthly resale value",
        "• Perks:",
        "  • Access to our internal server provisioning panel",
        "  • Full server management capabilities without staff intervention"
      ]
    },
    {
      title: "2. Mutual Respect Policy",
      content: [
        "• XiteNodes will never approach your end customers or attempt to convert them.",
        "• In return, you are expected to uphold the same principle.",
        "• Violation of this policy will result in immediate termination of your reseller status and services."
      ]
    },
    {
      title: "3. Tier Disclosure",
      content: [
        "• Your reseller tier will be publicly displayed on our website or dashboard unless you are Tier 3 or Tier 4.",
        "• If you prefer to keep your tier private, please notify us via support ticket."
      ]
    },
    {
      title: "4. White-Labeling Policy",
      content: [
        "• All resellers may market VPS services as their own brand/hardware (optional).",
        "• Full white-labeling is available at extra cost.",
        "• However, due to upstream requirements, \"NETPOOL TECHNOLOGIES PRIVATE LIMITED\" may still appear under ISP details in IP whois results — this is non-removable."
      ]
    },
    {
      title: "5. Resellable Products",
      content: [
        "• Only VPS Plans are eligible for resale.",
        "• Game Servers are not permitted to be resold under the reseller program.",
        "• Dedicated Server sales do not count toward reseller tier upgrade targets."
      ]
    },
    {
      title: "6. General Conditions",
      content: [
        "• Resellers must comply with all XiteNodes ToS, AUP, and privacy policies.",
        "• Abuse, misuse, or unethical behavior may result in demotion, suspension, or permanent ban from the program."
      ]
    },
    {
      title: "7. Blacklisted Hosting Providers",
      content: [
        "• Resellers are prohibited from using the following hosting providers to protect our brand integrity:",
        "  - Kanhalabs By Mayank Jangid",
        "  - Ateex Cloud",
        "  - Rippu",
        "  - Aspire Hosting",
        "  - CreeperCastle",
        "  - Evo Trade Asset Private Limited",
        "  - Joy Services",
        "  - Any Other Provider whoses IP upstream might Following ASN (152565,153522,45117)",
        "• Resellers can choose whether they want to be our Reseller or use the above-mentioned providers.",
        "• If found violating this policy, reseller services will be suspended and a refund will be issued for the remaining days.",
        "• This policy is in place to protect our brand from being perceived as a cheap, low-quality provider."
      ]
    }
  ];

  return (
    <div className="min-h-screen pb-16 relative overflow-hidden">
      <Helmet>
        <title>Reseller Terms of Service - XiteNodes</title>
        <meta name="description" content="XiteNodes Reseller ToS — terms, tiers, commissions, and policies for the XiteNodes reseller hosting program." />
        <link rel="canonical" href="https://xitenodes.com/reseller-tos" />
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
          <Shield className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 text-blue-400" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500">
              Reseller Terms of Service
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p className="text-md text-gray-400 max-w-2xl mx-auto mt-2">
            Applies To: All XiteNodes Resellers
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
              Welcome to the XiteNodes Reseller Program. By participating, you agree to the following terms and conditions as set by <strong>XiteNodes – Netpool Technologies Private Limited</strong>.
            </p>

            {sections.map((section, index) => (
              <motion.div 
                key={index} 
                className={`mb-8 ${index === 6 ? "p-6 rounded-xl bg-red-900/30 border border-red-500/50" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className={`text-xl font-semibold ${index === 6 ? "text-red-400" : "text-blue-400"} mt-6 mb-3`}>
                  {index === 6 ? "SUMMARY: " + section.title : section.title}
                </h3>
                {section.content.map((paragraph, i) => (
                  <p key={i} className="mb-2 text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            ))}


            <motion.div 
              className="mt-8 p-6 rounded-xl bg-blue-900/20 border border-blue-500/30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Contact Us</h4>
              <p className="text-gray-300">
                For questions, special requests, or tier evaluations, contact us at:
              </p>
              <ul className="mt-3 space-y-2 text-gray-300">
                <li>Email: support@xitenodes.com</li>
                <li>Discord: discord.gg/besthost</li>
              </ul>
            </motion.div>
          </div>

          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-600 hover:brightness-110 text-white px-8 py-3 text-lg">
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

export default ResellerTosPage;
