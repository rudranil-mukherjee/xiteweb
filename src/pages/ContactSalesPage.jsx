
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedParticles from '@/components/AnimatedParticles';
import { Link } from 'react-router-dom';

const ContactSalesPage = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91-9876543210',
      description: "Speak directly with our sales team. Mention the plan you're interested in for faster assistance.",
      actionText: 'Call Now',
      actionLink: 'tel:+919876543210',
      color: 'pink'
    },
    {
      icon: MessageSquare,
      title: 'Discord Support',
      content: 'Join our Server',
      description: 'Fastest response times. Get text or voice support from our dedicated team on Discord.',
      actionText: 'Join Discord',
      actionLink: 'https://discord.xitenodes.com',
      color: 'purple'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'sales@xitenodes.com',
      description: 'Prefer email? Send us your queries, and we\'ll get back to you as soon as possible.',
      actionText: 'Send Email',
      actionLink: 'mailto:sales@xitenodes.com',
      color: 'cyan'
    }
  ];

  return (
    <div className="min-h-screen pb-16 relative overflow-hidden">
      <Helmet>
        <title>Contact Sales | Get a Custom Quote - XiteNodes</title>
        <meta name="description" content="Contact XiteNodes sales team for custom hosting solutions, enterprise quotes, and dedicated server configurations. Call, Discord, or email us." />
        <link rel="canonical" href="https://xitenodes.com/contact-sales" />
        <meta property="og:title" content="Contact Sales | Get a Custom Quote - XiteNodes" />
        <meta property="og:description" content="Contact XiteNodes sales team for custom hosting solutions and enterprise quotes." />
        <meta property="og:url" content="https://xitenodes.com/contact-sales" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Sales | Get a Custom Quote - XiteNodes" />
        <meta name="twitter:description" content="Contact XiteNodes sales for custom hosting solutions and enterprise quotes." />
      </Helmet>
      <AnimatedParticles count={25} />
      <div className="container mx-auto px-6 py-12 md:py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <MessageSquare className="w-16 h-16 mx-auto mb-4 text-purple-400" />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              Contact Sales and Support
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto hero-description-font">
            Have questions about our plans, need a custom solution, or require technical assistance? We're here to help you every step of the way.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.2, ease: 'easeOut' }}
              className={`relative flex flex-col p-8 rounded-xl border-2 border-${method.color}-500/70 bg-gray-900/40 backdrop-blur-md shadow-2xl overflow-hidden group plan-card-shiny hover:shadow-${method.color}-500/40 transition-all duration-300 ease-out transform hover:-translate-y-2 h-full`}
            >
              <div className={`mb-6 p-4 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-${method.color}-500 to-${method.color}-700 self-center shadow-lg`}>
                <method.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-3xl font-bold text-${method.color}-400 mb-3 text-center hero-title-font`}>{method.title}</h3>
              <p className="text-gray-300 text-center mb-2 text-lg font-medium hero-description-font">{method.content}</p>
              <p className="text-gray-400 text-center mb-6 text-sm leading-relaxed flex-grow hero-description-font">{method.description}</p>
              
              <Button 
                onClick={() => window.open(method.actionLink, '_blank')}
                className={`w-full mt-auto py-3 text-lg font-semibold bg-gradient-to-r from-${method.color}-500 to-${method.color}-700 hover:from-${method.color}-600 hover:to-${method.color}-800 text-white transition-transform duration-200 group-hover:scale-105`}
              >
                {method.actionText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSalesPage;
