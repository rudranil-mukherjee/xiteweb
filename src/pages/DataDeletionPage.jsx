import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Trash2 } from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';

const DataDeletionPage = () => {
  const sections = [
    {
      title: 'What data can be deleted?',
      content: [
        'You can request deletion of your account-related data. This typically includes:',
        '• Account profile details (e.g., username and display name).',
        '• Contact information (e.g., email address, phone if provided).',
        '• Authentication metadata (e.g., hashed passwords — we cannot recover passwords).',
        '• Logged sessions and access tokens associated with your account.',
        '• Billing account profile data you provided (note: payment processor data may be retained by them per their policies).'
      ]
    },
    {
      title: 'What cannot be deleted?',
      content: [
        'Certain operational and security records must be retained for legal, security, and fraud‑prevention purposes. These include:',
        '• Server audit logs.',
        '• Server network logs.',
        '• Server usage metrics and aggregated analytics that do not directly identify you.',
        'We minimize retention where possible and apply access controls to protect these records.'
      ]
    },
    {
      title: 'How to request deletion',
      content: [
        'To request deletion of your account data, email us from your registered email address:',
        '• abuse@xitenodes.com',
        'Please include your account email/ID and any relevant context. Our team will acknowledge within 7 business days and guide you through verification and next steps.'
      ]
    }
  ];

  return (
    <div className="min-h-screen pb-16 relative overflow-hidden">
      <Helmet>
        <title>Data Deletion Request - XiteNodes</title>
        <meta name="description" content="Request deletion of your personal data from XiteNodes. Learn what data can be deleted and how to submit a request." />
        <link rel="canonical" href="https://xitenodes.com/data-deletion" />
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
          <Trash2 className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 text-red-400" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-cyan-500">
              Data Deletion
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
              This page explains what data we can delete upon your request, what we cannot delete, and how to initiate a deletion request.
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
              <h4 className="text-lg font-semibold text-purple-400 mb-3">Support</h4>
              <p className="text-gray-300">
                If you have questions regarding data deletion or privacy, contact our team at abuse@xitenodes.com.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button asChild className="bg-gradient-to-r from-red-500 to-purple-600 hover:brightness-110 text-white px-8 py-3 text-lg">
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

export default DataDeletionPage;
