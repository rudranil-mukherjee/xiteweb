import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Server, Cloud, Shield, Globe, Gamepad2, Bot, ExternalLink, Home, BarChart, Disc, Menu, X, Activity, HardDrive, Cpu as InfraIcon, Brain, Webhook, Layers, Zap as VpsZapIcon, Package as VpsPackageIcon, TrendingUp as VpsTrendingUpIcon, Sparkles as VpsSparklesIcon, Calculator, LifeBuoy, UserCircle, CreditCard, MessageSquare as MessageSquareWarning, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activePanelsDropdown, setActivePanelsDropdown] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);
  const navbarRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Always keep navbar visible, only change background transparency based on scroll position
      setIsVisible(true);
      if (currentScrollY < 50) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
      lastScrollY.current = currentScrollY;
    };

    const handleResize = () => {
      const mobileCheck = window.innerWidth < 1024;
      if (isMobile !== mobileCheck) {
        setIsMobile(mobileCheck);
      }
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile, isMobileMenuOpen]);

  const serviceMenuDropdownColors = {
    'Game Servers': 'text-cyan-400',
    'Server Hosting': 'text-pink-400',
    'Cloud Services': 'text-purple-400',
    'Infrastructure': 'text-blue-400',
    'Web Hosting': 'text-green-400',
  };

  const services = {
    'Game Servers': {
      icon: Gamepad2,
      pageLink: '/game-servers',
      dropdownColor: serviceMenuDropdownColors['Game Servers'],
      items: [
        { name: 'Free Hosting', desc: 'Start with our free Minecraft hosting plan', link: '/free-minecraft-hosting-india', icon: Gamepad2 },
        { name: 'All Game Servers', desc: 'Explore our range of game servers', link: '/game-servers', icon: Gamepad2 },
        { name: 'Minecraft Hosting India', desc: 'Low latency Minecraft servers in India', link: '/minecraft-hosting-india', icon: Gamepad2 },
        { name: 'Usage Calculator', desc: 'Estimate your server needs', link: '/game-servers/usage-calculator', icon: Calculator }
      ]
    },
    'Server Hosting': {
      icon: Server,
      pageLink: '/vps-hosting',
      dropdownColor: serviceMenuDropdownColors['Server Hosting'],
      items: [
        { name: 'VPS Hosting', desc: 'Virtual private servers', link: '/vps-hosting', icon: HardDrive },
        { name: 'VDS Hosting', desc: 'Virtual dedicated servers', link: '/vds-hosting', icon: HardDrive },
        { name: 'Dedicated Servers', desc: 'Bare metal servers', link: '/dedicated-servers', icon: HardDrive },
        { name: 'Flash Sales', desc: 'Limited-time server offers', link: '/flash-sales', icon: VpsZapIcon }
      ]
    },
    'Cloud Services': {
      icon: Cloud,
      pageLink: '/cloud-gaming',
      dropdownColor: serviceMenuDropdownColors['Cloud Services'],
      items: [
        { name: 'Cloud Bot Hosting', desc: 'Scalable bot hosting', link: '/cloud-bot-hosting', icon: Bot },
        { name: 'Cloud Gaming', desc: 'Stream games from cloud', link: '/cloud-gaming', icon: Gamepad2 },
        { name: 'Game Dev Cloud', desc: 'Dev environment for games', link: '/game-development-cloud', icon: Globe },
      ]
    },
    'Infrastructure': {
      icon: Shield,
      pageLink: '/infrastructure',
      dropdownColor: serviceMenuDropdownColors['Infrastructure'],
      items: [
        { name: 'DDoS Protection', desc: 'Robust DDoS mitigation solutions', link: '/ddos-protection', icon: Shield },
        { name: 'IP Pools', desc: 'Lease /24 & /22 subnets', link: '/ip-pools', icon: Globe },
        { name: 'Datacenter', desc: 'Colocation and hardware services', link: '/datacenter-colocation', icon: Server },
        { name: 'Our Infrastructure', desc: 'Learn about our global network', link: '/infrastructure', icon: InfraIcon }
      ]
    },
    'Web Hosting': {
      icon: Globe,
      pageLink: '/web-hosting',
      dropdownColor: serviceMenuDropdownColors['Web Hosting'],
      items: [
        { name: 'Web Hosting', desc: 'Reliable and fast web hosting solutions', link: '/web-hosting', icon: Globe },
        { name: 'Reseller Web Hosting', desc: 'Plans for resellers with WHM/cPanel', link: '/reseller-web-hosting', icon: Globe }
      ]
    },
  };

  const panelLinks = [
    { name: 'Game Panel', href: 'https://panel.xitenodes.com', icon: Gamepad2, color: serviceMenuDropdownColors['Game Servers'] },
    { name: 'VPS Panel', href: 'https://vps.xitenodes.xyz/', icon: HardDrive, color: serviceMenuDropdownColors['Server Hosting'] },
    { name: 'Billing Panel', href: 'https://billing.xitenodes.com/clientarea.php', icon: CreditCard, color: 'text-blue-400' },
    { name: 'Support Ticket', href: 'https://billing.xitenodes.com/submitticket.php', icon: MessageSquareWarning, color: 'text-green-400' },
    { name: 'Uptime Status', href: 'https://status.xitenodes.com', icon: Network, color: 'text-yellow-400' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navVariants = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
    hidden: { y: "-100%", opacity: 0, transition: { duration: 0.4, ease: "easeIn" } },
  };

  const navItemClass = `flex items-center space-x-1 text-gray-200 hover:text-white transition-colors whitespace-nowrap text-sm font-medium nav-link-font`;
  const dropdownItemClass = "flex items-start space-x-3 p-2.5 rounded-lg hover:bg-slate-700/60 cursor-pointer transition-colors";

  const getDropdownIconClass = (category) => {
    return `w-5 h-5 ${services[category]?.dropdownColor || 'text-purple-400'} mt-0.5 flex-shrink-0`;
  };

  const handleSupportClick = (e) => {
    e.preventDefault();
    navigate('/contact-sales');
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };


  if (isMobile) {
    return (
      <>
        <motion.nav
          ref={navbarRef}
          className={`fixed top-0 left-0 right-0 z-50 p-4 shadow-lg transition-colors duration-300 ${isAtTop ? 'bg-transparent' : 'navbar-modern-blur'}`}
          variants={navVariants}
          animate="visible"
          initial="visible"
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img src="https://pub-854609f2a7264b88ad2ab96f665c95f2.r2.dev/Eee_noback.png" className="w-7 h-7" alt="XiteNodes logo" />
              <div>
                <span className="text-lg font-bold fancy-xitenodes-text">XiteNodes</span>
                <p className="text-xs text-gray-400 -mt-1">India's #1 Hosting</p>
              </div>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-white">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </motion.nav>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-[68px] navbar-modern-blur p-6 z-40 overflow-y-auto"
            >
              <div className="space-y-4">
                {Object.entries(services).map(([category, data]) => (
                  <div key={category}>
                    <Link to={data.pageLink} className={`block py-2 text-lg font-medium text-gray-200 hover:text-white nav-link-font`} onClick={toggleMobileMenu}>{category}</Link>
                    {data.items.map(item => (
                      <Link to={item.link} key={item.name} className={`block py-1 pl-4 ${data.dropdownColor} hover:text-white nav-link-font`} onClick={toggleMobileMenu}>{item.name}</Link>
                    ))}
                  </div>
                ))}
                <hr className="border-slate-700 my-4" />
                <div className={`text-lg font-medium text-gray-200 mb-2 nav-link-font`}>Panels</div>
                {panelLinks.map(link => (
                  <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 py-2 text-gray-300 hover:text-white nav-link-font" onClick={toggleMobileMenu}>
                    <link.icon className={`w-5 h-5 ${link.color}`} />
                    <span>{link.name}</span>
                  </a>
                ))}
                <hr className="border-slate-700 my-4" />
                <Link to="/contact-sales" onClick={handleSupportClick} className="block py-2 text-lg font-medium text-gray-300 hover:text-white nav-link-font">Support</Link>
                <a href="https://billing.xitenodes.com/clientarea.php" target="_blank" rel="noopener noreferrer" className="block py-2 text-lg font-medium text-gray-300 hover:text-white nav-link-font" onClick={toggleMobileMenu}>Client Area</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <div
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isAtTop ? 'py-4 px-6' : 'py-0 px-0'}`}
      style={{ willChange: 'padding' }}
    >
      <div className={`mx-auto flex items-center justify-between transition-all duration-500 ease-out ${isAtTop ? 'max-w-6xl' : 'max-w-full'}`}>
        {/* Main Navigation Pill */}
        <nav
          className={`flex items-center transition-all duration-500 ease-out ${isAtTop
            ? 'rounded-full px-5 py-2.5'
            : 'rounded-none px-6 py-3 w-full'
            }`}
          style={{
            background: isAtTop
              ? 'rgba(20, 10, 40, 0.45)'
              : 'rgba(20, 10, 40, 0.85)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: isAtTop
              ? '1px solid rgba(140, 100, 200, 0.2)'
              : 'none',
            borderBottom: !isAtTop ? '1px solid rgba(140, 100, 200, 0.15)' : undefined,
            boxShadow: isAtTop
              ? '0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
              : '0 4px 20px rgba(0, 0, 0, 0.3)',
            willChange: 'transform, background, border-radius, padding',
          }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <img src="https://pub-854609f2a7264b88ad2ab96f665c95f2.r2.dev/Eee_noback.png" className="w-8 h-8" alt="XiteNodes logo" />
            <div className="hidden sm:block">
              <span className="text-lg font-bold fancy-xitenodes-text">XiteNodes</span>
              <p className="text-[10px] text-gray-400 -mt-1">India's #1 Hosting</p>
            </div>
          </Link>

          {/* Navigation Links - Only show when not at top OR always show */}
          <div className={`hidden lg:flex items-center ml-8 transition-all duration-300 ${isAtTop ? 'space-x-4' : 'space-x-6'}`}>
            {Object.entries(services).map(([category, data]) => (
              <div
                key={category}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(category)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to={data.pageLink} className={navItemClass}>
                  <span>{category}</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-200" />
                </Link>
                <AnimatePresence>
                  {activeDropdown === category && (
                    <motion.div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 dropdown-modern-blur rounded-xl border border-slate-700/50 p-4 z-50"
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      onMouseEnter={() => setActiveDropdown(category)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="space-y-2">
                        {data.items.map((item, index) => {
                          const IconComponent = item.icon || data.icon;
                          return (
                            <Link to={item.link} key={item.name}>
                              <motion.div
                                className={dropdownItemClass}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.04, duration: 0.15 }}
                              >
                                <IconComponent className={getDropdownIconClass(category)} />
                                <div>
                                  <h4 className="text-white font-medium text-sm nav-link-font">{item.name}</h4>
                                  <p className="text-gray-400 text-xs mt-0.5 nav-link-font">{item.desc}</p>
                                </div>
                              </motion.div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Spacer for when scrolled - push actions to the right */}
          {!isAtTop && <div className="flex-1" />}

          {/* Action Buttons - Only show when scrolled (integrated into main nav) */}
          {!isAtTop && (
            <div className="hidden lg:flex items-center ml-0">
              {/* Panels Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActivePanelsDropdown(true)}
                onMouseLeave={() => setActivePanelsDropdown(false)}
              >
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white text-sm font-medium nav-link-font h-8 px-3">
                  Panels <ChevronDown className={`w-3.5 h-3.5 ml-1 opacity-60 transition-all duration-200 group-hover:opacity-100 ${activePanelsDropdown ? 'rotate-180' : ''}`} />
                </Button>
                <AnimatePresence>
                  {activePanelsDropdown && (
                    <motion.div
                      className="absolute top-full right-0 mt-3 w-56 dropdown-modern-blur rounded-xl border border-slate-700/50 p-2.5 z-50"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      onMouseEnter={() => setActivePanelsDropdown(true)}
                      onMouseLeave={() => setActivePanelsDropdown(false)}
                    >
                      {panelLinks.map(link => (
                        <a
                          key={link.name}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-slate-700/50 text-sm text-gray-300 hover:text-white transition-colors nav-link-font"
                        >
                          <link.icon className={`w-4 h-4 ${link.color || 'text-purple-400'}`} />
                          <span className="flex-1">{link.name}</span>
                          <ExternalLink className="w-3 h-3 text-gray-500" />
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Divider */}
              <div className="w-px h-4 bg-white/10 mx-1" />

              {/* Support */}
              <Button
                onClick={handleSupportClick}
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white text-sm font-medium flex items-center nav-link-font h-8 px-3"
              >
                <LifeBuoy className="w-4 h-4 mr-1.5 opacity-70" /> Support
              </Button>

              {/* Divider */}
              <div className="w-px h-4 bg-white/10 mx-1" />

              {/* Client Area */}
              <Button
                onClick={() => window.open('https://billing.xitenodes.com/clientarea.php', '_blank')}
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white text-sm font-medium flex items-center nav-link-font h-8 px-3"
              >
                <UserCircle className="w-4 h-4 mr-1.5 opacity-70" /> Client Area
              </Button>
            </div>
          )}
        </nav>

        {/* Separate Actions Pill - Only visible when at top */}
        <AnimatePresence>
          {isAtTop && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="hidden lg:flex items-center ml-3 rounded-full px-2 py-1.5"
              style={{
                background: 'rgba(20, 10, 40, 0.45)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(140, 100, 200, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
              }}
            >
              {/* Panels Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActivePanelsDropdown(true)}
                onMouseLeave={() => setActivePanelsDropdown(false)}
              >
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white text-sm font-medium nav-link-font h-8 px-3 rounded-full">
                  Panels <ChevronDown className={`w-3.5 h-3.5 ml-1 opacity-60 transition-all duration-200 group-hover:opacity-100 ${activePanelsDropdown ? 'rotate-180' : ''}`} />
                </Button>
                <AnimatePresence>
                  {activePanelsDropdown && (
                    <motion.div
                      className="absolute top-full right-0 mt-3 w-56 dropdown-modern-blur rounded-xl border border-slate-700/50 p-2.5 z-50"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      onMouseEnter={() => setActivePanelsDropdown(true)}
                      onMouseLeave={() => setActivePanelsDropdown(false)}
                    >
                      {panelLinks.map(link => (
                        <a
                          key={link.name}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-slate-700/50 text-sm text-gray-300 hover:text-white transition-colors nav-link-font"
                        >
                          <link.icon className={`w-4 h-4 ${link.color || 'text-purple-400'}`} />
                          <span className="flex-1">{link.name}</span>
                          <ExternalLink className="w-3 h-3 text-gray-500" />
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Divider */}
              <div className="w-px h-4 bg-white/10" />

              {/* Support */}
              <Button
                onClick={handleSupportClick}
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white text-sm font-medium flex items-center nav-link-font h-8 px-3 rounded-full"
              >
                <LifeBuoy className="w-4 h-4 mr-1.5 opacity-70" /> Support
              </Button>

              {/* Divider */}
              <div className="w-px h-4 bg-white/10" />

              {/* Client Area */}
              <Button
                onClick={() => window.open('https://billing.xitenodes.com/clientarea.php', '_blank')}
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white text-sm font-medium flex items-center nav-link-font h-8 px-3 rounded-full"
              >
                <UserCircle className="w-4 h-4 mr-1.5 opacity-70" /> Client Area
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
