import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Users,
  Zap,
  Target,
  BarChart,
  Globe,
  Lightbulb,
  Smile,
  Brain,
  UserCheck,
  Code,
  UserCog,
  // Shield is already imported, so removed from here
} from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';

// Add these imports at the top if not already present
import { Shield, Cloud, Gamepad, Award, Cpu, Users as UsersIcon, Building2, CheckCircle } from 'lucide-react';

// Add these imports if not already present
import { Building, Phone, Mail, MapPin, FileText, ShieldCheck } from 'lucide-react';

const AboutUsPage = () => {
  const teamMembers = [
    { name: 'Rudranil Mukherjee aka Mr. Shadow', role: 'Founder', image: 'https://pub-854609f2a7264b88ad2ab96f665c95f2.r2.dev/webassests/about-us-rudra.png', bio: 'The visionary architect behind XiteNodes, driving innovation from day one.' },
    { name: 'Mark Coutinho', role: 'CEO', image: 'https://storage.xitestudios.tech/webassests/about-us-mark.png', bio: 'Steering XiteNodes to new heights with strategic leadership and operational excellence.' },
    { name: 'Abhishek Gaur', role: 'Tech Advisor', image: 'https://pub-854609f2a7264b88ad2ab96f665c95f2.r2.dev/webassests/about-us-mcu.png', bio: 'Providing expert guidance on emerging technologies and strategic technical direction.' },
    { name: 'HackerJi', role: 'System Admin', image: 'https://pub-854609f2a7264b88ad2ab96f665c95f2.r2.dev/webassests/hackerji.png', bio: 'The guardian of our infrastructure, ensuring stability and peak performance 24/7.' },
    
    // New Founding Member
    { 
      name: 'Yatharth Rathi',
      role: 'Founding Member', 
      image: 'https://storage.xitestudios.tech/webassests/about-us-yath.png ',
      bio: 'A cornerstone of XiteNodes from the beginning, Alex\'s unwavering dedication and pioneering spirit have been crucial in shaping our journey. With a passion for pushing boundaries and a relentless drive for excellence, Alex ensures our team stays at the forefront of innovation.' 
    },
  ];

  const values = [
    { icon: Brain, title: 'Innovation', text: 'Constantly pushing boundaries to deliver cutting-edge hosting solutions.', color: 'pink'},
    { icon: Shield, title: 'Reliability', text: 'Providing a stable and secure platform you can trust, 24/7.', color: 'purple'},
    { icon: UserCheck, title: 'Customer-Centric', text: 'Your success is our priority. We are committed to your needs.', color: 'cyan'},
    { icon: Zap, title: 'Performance', text: 'Optimizing every aspect of our service for maximum speed and efficiency.', color: 'blue'},
  ];

  return (
    <div className="min-h-screen pb-16 relative overflow-hidden">
      <Helmet>
        <title>About Us | XiteNodes - India's Game & Cloud Hosting Provider</title>
        <meta name="description" content="Learn about XiteNodes (Netpool Technologies Pvt Ltd) — India's trusted game server and cloud hosting provider based in Kolkata, serving gamers and businesses nationwide." />
        <link rel="canonical" href="https://xitenodes.com/about-us" />
        <meta property="og:title" content="About Us | XiteNodes - India's Game & Cloud Hosting Provider" />
        <meta property="og:description" content="Learn about XiteNodes — India's trusted game server and cloud hosting provider based in Kolkata." />
        <meta property="og:url" content="https://xitenodes.com/about-us" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | XiteNodes - India's Game & Cloud Hosting Provider" />
        <meta name="twitter:description" content="India's trusted game server and cloud hosting provider based in Kolkata." />
      </Helmet>
      <AnimatedParticles count={20} />
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        {/* Hero Section */}
        <motion.section 
          className="text-center mb-20 md:mb-28"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400">
              About XiteNodes™
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Fueling the digital world with <strong className="text-pink-400">next-generation hosting solutions</strong>. We are passionate about performance, reliability, and empowering our customers to achieve their online ambitions.
          </p>
        </motion.section>

        {/* Our Mission Section */}
        <motion.section 
          className="mb-20 md:mb-28 grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition:{duration:0.6}} }}>
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission: <span className="text-purple-400">Empowering Your Vision</span></h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              At XiteNodes, our mission is simple: to provide high-performance, reliable, and scalable hosting services that empower individuals, developers, and businesses to thrive online. We believe in leveraging the latest technology to offer an unparalleled hosting experience, backed by expert support and a commitment to continuous improvement.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Whether you're launching a new game server, a complex web application, or a global cloud infrastructure, XiteNodes is your trusted partner for success. We're not just a hosting company; we're enablers of innovation and digital growth.
            </p>
          </motion.div>
          <motion.div 
            className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
            variants={{ hidden: { opacity: 0, scale:0.8 }, visible: { opacity: 1, scale:1, transition:{duration:0.6}} }}
          >
            <img 
              src="https://pub-854609f2a7264b88ad2ab96f665c95f2.r2.dev/webassests/about-us-mission.png"
              alt="Our Mission - Team working" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
          </motion.div>
        </motion.section>

        {/* Our Values Section */}
        <motion.section 
          className="mb-20 md:mb-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-16"
            variants={{ hidden: { opacity: 0, y:20 }, visible: { opacity: 1, y:0, transition:{duration:0.5}} }}
          >
            Core Values That <span className="text-cyan-400">Drive Us</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className={`p-8 rounded-xl bg-gray-800/50 backdrop-blur-md shadow-lg transition-all duration-300 ease-out group hover:shadow-${value.color}-500/40 hover:-translate-y-1 border-2 border-transparent hover:border-${value.color}-500`}
                variants={{ hidden: { opacity: 0, y:30 }, visible: { opacity: 1, y:0, transition:{duration:0.5, delay: index * 0.1}} }}
              >
                <div className={`mb-4 inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-${value.color}-500 to-${value.color}-700 group-hover:scale-105 transition-transform duration-300`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-2xl font-semibold text-${value.color}-400 mb-2 group-hover:text-${value.color}-300 transition-colors duration-300`}>{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Our Highlights Section */}
        <motion.section 
          className="mb-20 md:mb-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-16"
            variants={{ hidden: { opacity: 0, y:20 }, visible: { opacity: 1, y:0, transition:{duration:0.5}} }}
          >
            Our <span className="text-blue-400">Highlights</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Legally Registered & Compliant",
                description: "XiteNodes operates under NETPOOL TECHNOLOGIES PRIVATE LIMITED, ensuring full legal transparency, PCI DSS compliance, and secure operations for all clients",
                color: "blue"
              },
              {
                icon: Shield,
                title: "Cloudflare Enterprise & Xite Shield",
                description: "We provide AI-driven DDoS protection using Cloudflare Spectrum and our proprietary Xite Shield, offering unmatched security for game servers and network infrastructure",
                color: "orange"
              },
              {
                icon: Gamepad,
                title: "Pioneers in Indian Game Hosting",
                description: "First in India to introduce World Manager for Minecraft, zero-capped performance hosting, and a custom-built game control panel",
                color: "green"
              },
              {
                icon: Award,
                title: "Recognized by Microsoft & Nvidia",
                description: "XiteNodes is a proud member of the Microsoft Founders Hub and Nvidia Inception, recognized for our innovation in cloud computing and AI-powered hosting solutions",
                color: "purple"
              },
              {
                icon: Cpu,
                title: "AI-Powered Infrastructure",
                description: "Transitioning towards AI-enabled cloud solutions for NVIDIA applications, while maintaining high-performance computing for gaming and AI workloads",
                color: "pink"
              },
              {
                icon: UsersIcon,
                title: "Trusted by 100+ Users",
                description: "Our robust infrastructure ensures zero downtime, unlimited scalability, and a seamless gaming & cloud experience for all users",
                color: "cyan"
              }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                className={`p-8 rounded-xl bg-slate-800/50 backdrop-blur-md border border-${highlight.color}-500/30 shadow-lg hover:shadow-${highlight.color}-500/20 transition-all duration-300 group hover:-translate-y-1`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1
                    }
                  }
                }}
              >
                <div className={`mb-4 inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br from-${highlight.color}-500 to-${highlight.color}-600 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-semibold text-${highlight.color}-400 mb-3 group-hover:text-${highlight.color}-300 transition-colors duration-300`}>
                  {highlight.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Meet the Team Section */}
        <motion.section 
          className="mb-20 md:mb-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-16"
            variants={{ hidden: { opacity: 0, y:20 }, visible: { opacity: 1, y:0, transition:{duration:0.5}} }}
          >
            Meet the <span className="text-pink-400">Innovators</span>
          </motion.h2>
          
          {/* First row - 4 team members */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {teamMembers.slice(0, 4).map((member, index) => (
              <motion.div 
                key={index} 
                className="text-center p-6 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 hover:shadow-pink-500/20 hover:shadow-lg hover:-translate-y-1"
                variants={{ hidden: { opacity: 0, scale:0.9 }, visible: { opacity: 1, scale:1, transition:{duration:0.5, delay: index * 0.15}} }}
              >
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-pink-500/60" />
                <h3 className="text-xl font-semibold text-pink-400">{member.name}</h3>
                <p className="text-purple-400 text-sm mb-2">{member.role}</p>
                <p className="text-gray-400 text-xs leading-snug">{member.bio}</p>
              </motion.div>
            ))}
          </div>

          {/* Second row - Centered founding member */}
          <div className="flex justify-center">
            <motion.div 
              className="text-center p-6 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 hover:shadow-pink-500/20 hover:shadow-lg hover:-translate-y-1 max-w-sm"
              variants={{ hidden: { opacity: 0, scale:0.9 }, visible: { opacity: 1, scale:1, transition:{duration:0.5, delay: 0.6}} }}
            >
              <img src={teamMembers[4].image} alt={teamMembers[4].name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-pink-500/60" />
              <h3 className="text-xl font-semibold text-pink-400">{teamMembers[4].name}</h3>
              <p className="text-purple-400 text-sm mb-2">{teamMembers[4].role}</p>
              <p className="text-gray-400 text-xs leading-snug">{teamMembers[4].bio}</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Our Journey Section */}
        <motion.section
          className="text-center glass-effect p-8 md:p-12 rounded-2xl mb-20 md:mb-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: { opacity: 0, y:50 }, visible: { opacity: 1, y:0, transition:{duration:0.7}} }}
        >
          <Lightbulb className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Journey: From Idea to <span className="text-yellow-400">Innovation</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-4 leading-relaxed">
            Founded in 2021 by NETPOOL TECHNOLOGIES PVT LTD, XiteNodes™ was born from a desire to redefine the hosting landscape. We saw a need for truly high-performance, developer-friendly, and customer-focused hosting services that could keep pace with the rapidly evolving digital world.
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Since our inception, we've dedicated ourselves to building a robust global infrastructure, curating the best hardware, and fostering a team of passionate experts. Our journey is one of continuous learning, adaptation, and an unwavering commitment to providing exceptional value to our clients. We're excited for what the future holds and to continue growing with you.
          </p>
        </motion.section>
        
        {/* Our Company Section */}
        <motion.section 
          className="mb-20 md:mb-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-16"
            variants={{ hidden: { opacity: 0, y:20 }, visible: { opacity: 1, y:0, transition:{duration:0.5}} }}
          >
            Our <span className="text-emerald-400">Company</span>
          </motion.h2>

          <motion.div 
            className="max-w-4xl mx-auto rounded-2xl overflow-hidden bg-slate-800/50 backdrop-blur-md border border-slate-700/50"
            variants={{ hidden: { opacity: 0, y:30 }, visible: { opacity: 1, y:0, transition:{duration:0.6}} }}
          >
            <div className="p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-emerald-400 mb-6">Legal Information</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Registered Name</h4>
                      <p className="text-gray-300">NETPOOL TECHNOLOGIES PRIVATE LIMITED</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Legal Status</h4>
                      <p className="text-gray-300">Private Limited Company, India</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Brand Name</h4>
                      <p className="text-gray-300">XiteNodes™</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Compliance & Security</h4>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <ShieldCheck className="w-5 h-5 text-emerald-400" />
                        <span>GSTIN and PCI DSS Compliance</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Registration Details</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <FileText className="w-5 h-5 text-emerald-400 mt-1" />
                        <div>
                          <p className="text-gray-400">CIN</p>
                          <p className="text-gray-300">U63111WB2024PTC270902</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <FileText className="w-5 h-5 text-emerald-400 mt-1" />
                        <div>
                          <p className="text-gray-400">GSTIN</p>
                          <p className="text-gray-300">19AAJCN6468P1ZE</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Contact Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-emerald-400 mt-1" />
                        <div>
                          <p className="text-gray-400">Registered Address</p>
                          <p className="text-gray-300">1432 VIVEKANANDA SARANI, RANIA, BORAL, South 24 Parganas, West Bengal - 700154</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-emerald-400" />
                        <a href="tel:+918069645488" className="text-gray-300 hover:text-emerald-400 transition-colors">
                          +91 80696 45488
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-emerald-400" />
                        <a href="mailto:support@xitenodes.com" className="text-gray-300 hover:text-emerald-400 transition-colors">
                          support@xitenodes.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutUsPage;