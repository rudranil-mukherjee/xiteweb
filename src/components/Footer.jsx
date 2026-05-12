import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Shield, BookOpen, FileText, Youtube, Twitter, Instagram, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Terms of Service', path: '/terms-of-service' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Refund Policy', path: '/refund-policy' },
    { name: 'Data Deletion', path: '/data-deletion' },
    { name: 'Service Level Agreement (SLA)', path: '/sla' },
    { name: 'Blog', path: '/blog' },
    { name: 'Knowledge Base', path: 'https://discord.gg/besthost', external: true },
    { name: 'Support Center', path: 'https://discord.gg/besthost', external: true },
    { name: 'Reseller ToS', path: '/reseller-tos' },
  ];

  const socialLinks = [
    { name: 'Discord', icon: MessageSquare, href: 'https://discord.gg/besthost', color: 'hover:text-indigo-400' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/xitenodes', color: 'hover:text-pink-500' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@XiteNodes', color: 'hover:text-red-500' },
  ];

  return (
    <footer className="relative py-16 border-t border-slate-700/50 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <motion.div
            className="space-y-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center space-x-3">
              <img src="https://i.ibb.co/gxnSyjn/xite.png"
                className="w-10 h-10"
                alt="XiteNodes logo"
              />
              <div>
                <span className="text-xl font-bold fancy-xitenodes-text">XiteNodes™</span>
                <p className="text-xs text-gray-500">by NETPOOL TECHNOLOGIES</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-2">
              <a href="https://www.whtop.com/" title="Listed on WHTop.com, biggest web hosting directory!" target="_blank" rel="noopener noreferrer">
                <img src="https://images.whtop.com/listed-whtop-26.png" width="140" height="140" alt="Listed on WHTop.com" />
              </a>
              <a href="https://www.dmca.com/compliance/xitenodes.com" title="DMCA Compliance information for xitenodes.com" target="_blank" rel="noopener noreferrer">
                <img src="https://www.dmca.com/img/dmca-compliant-grayscale.png" alt="DMCA compliant image" />
              </a>
            </div>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map(social => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className={`text-gray-400 ${social.color} transition-colors`}>
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-white mb-4 footer-heading-font">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/competitor-comparison" className="text-gray-400 hover:text-purple-400 transition-colors text-sm footer-link-font font-semibold text-green-400">
                  Why XiteNodes? (vs Competitors)
                </Link>
              </li>
              <li>
                <Link to="/lordcloud-comparison" className="text-gray-400 hover:text-purple-400 transition-colors text-sm footer-link-font font-semibold text-emerald-400">
                  XiteNodes vs LordCloud
                </Link>
              </li>
              <li>
                <Link to="/top-10-minecraft-hosting-india" className="text-gray-400 hover:text-purple-400 transition-colors text-sm footer-link-font font-semibold text-amber-400">
                  Top 10 Hostings In India
                </Link>
              </li>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a href={link.path} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors text-sm footer-link-font">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.path} className="text-gray-400 hover:text-purple-400 transition-colors text-sm footer-link-font">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-white mb-4 footer-heading-font">Gaming Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/minecraft-hosting-india" className="text-gray-400 hover:text-purple-400 transition-colors text-sm footer-link-font">
                  Minecraft Hosting India
                </Link>
              </li>
              <li>
                <Link to="/game-servers" className="text-gray-400 hover:text-purple-400 transition-colors text-sm footer-link-font">
                  Game Server Hosting
                </Link>
              </li>
              <li>
                <Link to="/game-servers/minecraft" className="text-gray-400 hover:text-purple-400 transition-colors text-sm footer-link-font">
                  Indian Minecraft Server
                </Link>
              </li>
              <li>
                <Link to="/ddos-protection" className="text-gray-400 hover:text-purple-400 transition-colors text-sm footer-link-font">
                  DDoS Protection
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-white mb-4 footer-heading-font">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-400 footer-text-font">
                  <p>NETPOOL TECHNOLOGIES PVT LTD</p>
                  <p>Kolkata, West Bengal, India</p>
                  <p className="font-semibold text-green-400 mt-1">Servers hosted in Mumbai & Kolkata, India.</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-gray-400 footer-text-font">+91-8069645488</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-gray-400 footer-text-font">support@xitenodes.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-lg font-bold text-white mb-4 footer-heading-font">Company</h3>
            <div className="space-y-2 text-sm text-gray-400 footer-text-font">
              <p>GSTIN: 19AAJCN6468P1ZE</p>
              <p>CIN: U63111WB2024PTC270902</p>
              <Link to="/about-us" className="text-purple-400 hover:text-purple-300 transition-colors block footer-link-font">
                About Us
              </Link>
              <Link to="/contact-sales" className="text-purple-400 hover:text-purple-300 transition-colors block footer-link-font">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="text-sm text-gray-400 mb-4 md:mb-0 footer-text-font">
            <p>© 2021-2026 NETPOOL TECHNOLOGIES PVT LTD. All rights reserved.</p>
            <p>XiteNodes™ is a trademark of NETPOOL TECHNOLOGIES PVT LTD.</p>
          </div>

          <div className="text-xs text-gray-500 footer-text-font">
            Built by <a href="https://mcu.xitenodes.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors footer-link-font">Abhishek GaurF</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
