import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Shield, Eye, Gavel, Users, Repeat, Info, HelpCircle } from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';

const getIconForTitle = (title) => {
  if (title.toLowerCase().includes('terms')) return Gavel;
  if (title.toLowerCase().includes('privacy')) return Shield;
  if (title.toLowerCase().includes('refund')) return Repeat;
  if (title.toLowerCase().includes('knowledge')) return HelpCircle;
  if (title.toLowerCase().includes('resell')) return Users;
  return FileText;
};

const PlaceholderPage = ({ title }) => {
  const Icon = getIconForTitle(title);

  const commonSections = [
    "Introduction and Scope",
    "Definitions of Key Terms",
    "User/Customer Responsibilities",
    "Company Obligations and Commitments",
    "Specific Clauses relevant to the policy (e.g., Data Usage for Privacy, Eligibility for Refund)",
    "Dispute Resolution / Governing Law",
    "Policy Update Procedures",
    "Contact Information for Queries",
    "Effective Date / Last Updated Date"
  ];

  return (
    <div className="min-h-screen pb-16 relative overflow-hidden">
      <AnimatedParticles count={15} />
      <div className="container mx-auto px-6 py-12 md:py-20 relative z-10 pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <Icon className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 text-pink-400" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              {title}
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Official Document & Guidelines
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto p-6 md:p-10 glass-effect rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-white mb-6">Key Information ({title})</h2>
          <div className="prose prose-invert prose-sm md:prose-base max-w-none text-gray-300 space-y-4">
            <p>
              Welcome to the {title} page for XiteNodes. This document outlines the terms, conditions, and guidelines related to your use of our services. 
              Please read this information carefully to understand your rights and obligations.
            </p>
            <p>
              At XiteNodes, we are committed to transparency and providing clear information to our valued customers. This section is currently being finalized by our legal and compliance team to ensure it is comprehensive, accurate, and up-to-date with all relevant regulations and best practices.
            </p>
            <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">Typical Content:</h3>
            <ul className="list-disc list-inside space-y-1.5 marker:text-pink-400">
              {commonSections.map((section, idx) => (
                <li key={idx}>{section}</li>
              ))}
            </ul>
            <p className="mt-6">
              We appreciate your patience as we complete this section. The full {title} will be available here soon. If you have any immediate questions or require specific information regarding our {title.toLowerCase()} before it is published, please do not hesitate to contact our support team.
            </p>
            <p>
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} (Pending final review)
            </p>
          </div>
          <div className="mt-10 text-center">
            <Button asChild className="bg-gradient-to-r from-pink-500 to-purple-600 hover:brightness-110 text-white px-8 py-3 text-lg">
              <Link to="/">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back to Homepage
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PlaceholderPage;