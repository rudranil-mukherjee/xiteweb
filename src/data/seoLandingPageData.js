/**
 * SEO Landing Page Data Configuration
 * 
 * Each page has a unique slug, title, description, hero content, features, and FAQs.
 * The SeoLandingPage component reads from this data to render dynamic pages.
 */

// ── Helper: Generate game server page variants ──────────────────────────
const generateGamePages = (game, displayName, startingPrice, ctaLink, color, heroImage) => {
  const variants = [
    {
      slugSuffix: 'hosting-india',
      titlePrefix: `${displayName} Hosting India`,
      h1: `Best ${displayName} Server Hosting in India`,
      desc: `Premium ${displayName} hosting in India with ultra-low ping servers in Mumbai & Kolkata. DDoS protection, instant setup, and 24/7 support. Plans from ₹${startingPrice}/mo.`,
      ctaText: `Get ${displayName} Server`,
      faqs: [
        { q: `Why choose XiteNodes for ${displayName} hosting in India?`, a: `XiteNodes offers the lowest ping ${displayName} servers in India with datacenters in Mumbai and Kolkata. Our servers feature NVMe SSDs, enterprise DDoS protection, and plans starting at just ₹${startingPrice}/mo.` },
        { q: `What locations are available for ${displayName} servers?`, a: `We offer ${displayName} servers in Mumbai (West India) and Kolkata (East India), giving you the lowest possible latency no matter where you are in India.` },
        { q: `Do you offer free trials for ${displayName} hosting?`, a: `Yes! We offer free trials for our ${displayName} servers so you can test the performance before committing. No credit card required.` },
      ],
    },
    {
      slugSuffix: 'server-hosting-india',
      titlePrefix: `${displayName} Server Hosting India`,
      h1: `Affordable ${displayName} Server Hosting in India`,
      desc: `Get lag-free ${displayName} servers hosted in India. Enterprise-grade hardware, NVMe storage, and automatic backups. Starting at ₹${startingPrice}/mo with instant deployment.`,
      ctaText: 'View Server Plans',
      faqs: [
        { q: `How fast can I get my ${displayName} server?`, a: `Your ${displayName} server is deployed instantly after payment. You'll receive your login credentials via email within seconds.` },
        { q: `What hardware do your ${displayName} servers run on?`, a: `Our servers run on AMD EPYC & Intel Xeon processors with DDR4/DDR5 RAM and NVMe SSDs for maximum performance.` },
        { q: `Can I upgrade my ${displayName} server later?`, a: `Absolutely! You can upgrade your plan anytime from your client dashboard. Upgrades are applied instantly with zero downtime.` },
      ],
    },
    {
      slugSuffix: 'india',
      titlePrefix: `${displayName} India`,
      h1: `${displayName} Servers in India — Low Latency`,
      desc: `Play ${displayName} with the lowest ping in India. Our Indian datacenters ensure sub-10ms latency for players across the country. UPI & INR payments accepted.`,
      ctaText: 'Start Playing',
      faqs: [
        { q: `What ping can I expect for ${displayName} in India?`, a: `Players in metro cities like Mumbai, Delhi, Bangalore, and Kolkata typically get 5-15ms ping. Even remote areas usually get under 40ms.` },
        { q: `Do you accept INR payments?`, a: `Yes! We accept UPI, Paytm, PhonePe, Google Pay, net banking, and all major Indian payment methods. No international transaction fees.` },
        { q: `Is ${displayName} server hosting legal in India?`, a: `Yes, hosting game servers is completely legal in India. XiteNodes operates under Netpool Technologies Pvt Ltd, a registered Indian company.` },
      ],
    },
    {
      slugSuffix: 'price',
      titlePrefix: `${displayName} Hosting Price`,
      h1: `${displayName} Server Hosting Pricing India`,
      desc: `Compare ${displayName} server hosting prices in India. Plans starting at ₹${startingPrice}/mo with NVMe SSD, DDoS protection, and premium support included. Best value guaranteed.`,
      ctaText: 'Compare Plans',
      faqs: [
        { q: `What is the cheapest ${displayName} server plan?`, a: `Our most affordable ${displayName} plan starts at ₹${startingPrice}/mo with enough resources for a small server. Perfect for playing with friends.` },
        { q: `Are there any hidden fees?`, a: `No hidden fees, ever. The price you see includes DDoS protection, backups, and 24/7 support. We believe in transparent pricing.` },
        { q: `Do you offer monthly billing?`, a: `Yes! We offer monthly, quarterly, semi-annual, and annual billing. Longer commitments get additional discounts.` },
      ],
    },
    {
      slugSuffix: 'free-trial',
      titlePrefix: `${displayName} Free Trial`,
      h1: `Free ${displayName} Server Trial — No Card Required`,
      desc: `Try ${displayName} hosting free before you buy. Get a no-commitment trial server with full features. No credit card needed. Test our Indian servers risk-free.`,
      ctaText: 'Start Free Trial',
      faqs: [
        { q: `How long is the free trial?`, a: `Our free trial gives you enough time to test the server performance and features. No credit card is required to start.` },
        { q: `What features are included in the trial?`, a: `The trial includes full server access with the same performance as paid plans. You can install mods, plugins, and configure everything.` },
        { q: `What happens after the trial ends?`, a: `After the trial, you can upgrade to a paid plan to keep your server. Your data and configurations are preserved during the upgrade.` },
      ],
    },
    {
      slugSuffix: 'under-100-rs',
      titlePrefix: `${displayName} Under ₹100`,
      h1: `${displayName} Server Hosting Under ₹100/mo`,
      desc: `Get a ${displayName} server for under ₹100/mo in India. Budget-friendly plans perfect for small groups. Includes DDoS protection and full control panel access.`,
      ctaText: 'Get Budget Server',
      faqs: [
        { q: `Can I really get a ${displayName} server for under ₹100?`, a: `Yes! Our budget plans start at incredibly low prices. While these are basic plans, they include full server access and are perfect for 2-5 players.` },
        { q: `What are the limitations of budget plans?`, a: `Budget plans have lower RAM and CPU allocations, making them ideal for small friend groups. For larger servers, we recommend our premium plans.` },
        { q: `Can I upgrade from a budget plan?`, a: `Yes! You can upgrade anytime. The price difference is prorated, so you only pay the difference for the remaining billing period.` },
      ],
    },
  ];

  return variants.map(v => ({
    slug: `${game}-${v.slugSuffix}`,
    category: 'game-server',
    game: displayName,
    title: `${v.titlePrefix} | Low Ping Servers - XiteNodes`,
    metaDescription: v.desc,
    h1: v.h1,
    heroDescription: v.desc,
    ctaLink: ctaLink,
    ctaText: v.ctaText,
    colorScheme: color,
    heroImage: heroImage,
    features: [
      'Ultra-Low Ping Indian Servers',
      'Enterprise DDoS Protection',
      'NVMe SSD Storage',
      'Instant Server Setup',
      '24/7 Expert Support',
      'Full Mod & Plugin Support',
    ],
    faqs: v.faqs,
    relatedPages: [
      { title: 'Game Servers', path: '/game-servers' },
      { title: 'DDoS Protection', path: '/ddos-protection' },
      { title: 'Infrastructure', path: '/infrastructure' },
    ],
  }));
};

// ── Helper: Generate VPS page variants ──────────────────────────────────
const generateVpsPages = (vpsType, displayName, startingPrice, ctaLink, color, heroImage) => {
  const variants = [
    {
      slugSuffix: 'hosting-india',
      titlePrefix: `${displayName} VPS Hosting India`,
      h1: `${displayName} VPS Hosting in India`,
      desc: `High-performance ${displayName} VPS servers in India. Full root access, NVMe storage, and enterprise DDoS protection. Starting at ₹${startingPrice}/mo.`,
    },
    {
      slugSuffix: 'server-hosting-india',
      titlePrefix: `${displayName} VPS Server India`,
      h1: `${displayName} VPS Server Hosting in India`,
      desc: `Deploy ${displayName} VPS servers in Indian datacenters. Low latency, unmetered bandwidth, and instant provisioning. Plans from ₹${startingPrice}/mo.`,
    },
    {
      slugSuffix: 'india',
      titlePrefix: `${displayName} VPS India`,
      h1: `${displayName} VPS in India — Deploy Instantly`,
      desc: `Get ${displayName} VPS servers deployed instantly in India. Mumbai & Kolkata datacenters with sub-10ms latency. UPI payments accepted.`,
    },
    {
      slugSuffix: 'price',
      titlePrefix: `${displayName} VPS Price`,
      h1: `${displayName} VPS Hosting Pricing India`,
      desc: `Compare ${displayName} VPS prices in India. Transparent pricing with no hidden fees. NVMe SSD, DDoS protection, and premium support included from ₹${startingPrice}/mo.`,
    },
    {
      slugSuffix: 'free-trial',
      titlePrefix: `${displayName} VPS Free Trial`,
      h1: `Free ${displayName} VPS Trial — Test Before You Buy`,
      desc: `Try ${displayName} VPS free in India. Full root access, real hardware performance. No credit card required for trial.`,
    },
    {
      slugSuffix: 'under-100-rs',
      titlePrefix: `${displayName} VPS Under ₹100`,
      h1: `${displayName} VPS Under ₹100/mo in India`,
      desc: `Affordable ${displayName} VPS hosting starting under ₹100/mo. Perfect for developers, students, and small projects in India.`,
    },
  ];

  return variants.map(v => ({
    slug: `${vpsType}-${v.slugSuffix}`,
    category: 'vps',
    title: `${v.titlePrefix} | XiteNodes`,
    metaDescription: v.desc,
    h1: v.h1,
    heroDescription: v.desc,
    ctaLink: ctaLink,
    ctaText: 'View VPS Plans',
    colorScheme: color,
    heroImage: heroImage,
    features: [
      'Full Root / Admin Access',
      'NVMe SSD Storage',
      'Enterprise DDoS Protection',
      'Mumbai & Kolkata Datacenters',
      '99.9% Uptime SLA',
      'UPI & INR Payments',
    ],
    faqs: [
      { q: `What makes ${displayName} VPS different?`, a: `${displayName} VPS servers offer optimized performance for specific workloads. With dedicated resources and NVMe storage, you get consistent, high performance.` },
      { q: 'Do I get full root access?', a: 'Yes! All our VPS plans include full root/admin access. You can install any software, configure the OS, and have complete control over your server.' },
      { q: 'What operating systems are supported?', a: 'We support Ubuntu, Debian, CentOS, AlmaLinux, Rocky Linux, and Windows Server. You can also upload custom ISOs.' },
    ],
    relatedPages: [
      { title: 'VPS Hosting', path: '/vps-hosting' },
      { title: 'VDS Hosting', path: '/vds-hosting' },
      { title: 'Dedicated Servers', path: '/dedicated-servers' },
    ],
  }));
};

// ── Helper: Generate competitor comparison pages ─────────────────────────
const generateComparisonPage = (competitor, competitorDisplayName) => ({
  slug: `xitenodes-vs-${competitor}`,
  category: 'comparison',
  title: `XiteNodes vs ${competitorDisplayName} — Honest Comparison | XiteNodes`,
  metaDescription: `Compare XiteNodes vs ${competitorDisplayName} for game server & VPS hosting in India. See pricing, features, performance, and support differences side by side.`,
  h1: `XiteNodes vs ${competitorDisplayName}`,
  heroDescription: `Looking for the best hosting provider? Compare XiteNodes and ${competitorDisplayName} head-to-head on pricing, performance, Indian server locations, DDoS protection, and customer support.`,
  ctaLink: '/game-servers',
  ctaText: 'Try XiteNodes Free',
  colorScheme: 'blue',
  heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  features: [
    'Indian Datacenters (Mumbai & Kolkata)',
    'Starting at ₹40/mo',
    'UPI & Indian Payment Support',
    'Enterprise DDoS Protection',
    '24/7 Indian Support Team',
    'Free Server Migration',
  ],
  comparisonData: {
    competitor: competitorDisplayName,
    rows: [
      { feature: 'Indian Servers', xitenodes: '✅ Mumbai & Kolkata', competitor: competitorDisplayName === 'Hostinger' || competitorDisplayName === 'GoDaddy' ? '✅ Limited' : '❌ No Indian servers' },
      { feature: 'Starting Price', xitenodes: '₹40/mo', competitor: 'Varies' },
      { feature: 'DDoS Protection', xitenodes: '✅ Up to 192Tbps', competitor: '⚠️ Basic or paid addon' },
      { feature: 'UPI Payments', xitenodes: '✅ Full support', competitor: competitorDisplayName === 'Hostinger' || competitorDisplayName === 'GoDaddy' ? '✅ Yes' : '❌ No' },
      { feature: 'Game Server Hosting', xitenodes: '✅ 20+ games', competitor: competitorDisplayName === 'PebbleHost' || competitorDisplayName === 'Shockbyte' ? '✅ Yes' : '❌ No' },
      { feature: '24/7 Support', xitenodes: '✅ Indian team', competitor: '✅ Global team' },
    ],
  },
  faqs: [
    { q: `Is XiteNodes better than ${competitorDisplayName}?`, a: `For Indian users, XiteNodes offers significant advantages: local servers with sub-10ms ping, UPI payment support, INR pricing, and a dedicated Indian support team. ${competitorDisplayName} may have more global reach, but for India-focused hosting, XiteNodes is the clear winner.` },
    { q: `Can I migrate from ${competitorDisplayName} to XiteNodes?`, a: `Yes! We offer free migration assistance. Our support team will help you move your servers, websites, or VPS from ${competitorDisplayName} to XiteNodes with zero downtime.` },
    { q: `How does pricing compare?`, a: `XiteNodes plans start at ₹40/mo in INR with no international transaction fees. We offer transparent pricing with DDoS protection and backups included — no hidden add-ons.` },
  ],
  relatedPages: [
    { title: 'Competitor Comparison', path: '/competitor-comparison' },
    { title: 'Game Servers', path: '/game-servers' },
    { title: 'VPS Hosting', path: '/vps-hosting' },
  ],
});

// ── Helper: Generate dedicated server pages ──────────────────────────────
const generateDedicatedPages = () => {
  const variants = [
    { slug: 'dedicated-server-hosting-india', title: 'Dedicated Server Hosting India', h1: 'Dedicated Server Hosting in India', desc: 'Bare-metal dedicated servers in Indian datacenters. Full hardware isolation, custom configurations, and 99.99% uptime. Enterprise-grade hosting for demanding workloads.' },
    { slug: 'dedicated-server-india', title: 'Dedicated Server India', h1: 'Dedicated Servers in India — Full Control', desc: 'Get a dedicated server in India with complete hardware isolation. No shared resources, no noisy neighbors. Perfect for gaming communities, enterprises, and high-traffic applications.' },
    { slug: 'dedicated-server-price', title: 'Dedicated Server Price India', h1: 'Dedicated Server Pricing in India', desc: 'Compare dedicated server prices in India. Custom configurations with Intel Xeon and AMD EPYC processors. Transparent pricing with no setup fees.' },
    { slug: 'dedicated-server-free-trial', title: 'Dedicated Server Free Trial', h1: 'Free Dedicated Server Trial — Test Full Power', desc: 'Try a dedicated server free before you commit. Test our enterprise hardware, network speed, and DDoS protection. No credit card required.' },
    { slug: 'dedicated-server-server-hosting-india', title: 'Dedicated Server Hosting Provider India', h1: 'Best Dedicated Server Provider in India', desc: 'India\'s leading dedicated server provider. Custom-built servers with Intel Xeon & AMD EPYC processors. Mumbai & Kolkata datacenters with enterprise DDoS protection.' },
    { slug: 'dedicated-server-under-100-rs', title: 'Affordable Dedicated Server India', h1: 'Affordable Dedicated Servers in India', desc: 'Budget-friendly dedicated servers in India for growing businesses and communities. Get bare-metal performance without breaking the bank.' },
    { slug: 'dedicated-server-vs-vps-hosting', title: 'Dedicated Server vs VPS', h1: 'Dedicated Server vs VPS — Which to Choose?', desc: 'Compare dedicated servers vs VPS hosting. Understand the differences in performance, cost, scalability, and when to choose each option for your project.' },
    { slug: 'dedicated-server-vs-cloud-hosting', title: 'Dedicated vs Cloud Hosting', h1: 'Dedicated Server vs Cloud Hosting in India', desc: 'Dedicated server vs cloud hosting comparison. Learn which option is best for your workload, budget, and scaling requirements in the Indian market.' },
  ];

  return variants.map(v => ({
    ...v,
    category: 'dedicated',
    title: `${v.title} | XiteNodes`,
    metaDescription: v.desc,
    heroDescription: v.desc,
    ctaLink: '/dedicated-servers',
    ctaText: 'View Dedicated Plans',
    colorScheme: 'orange',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    features: [
      'Full Hardware Isolation',
      'Custom Configurations',
      'Enterprise DDoS Protection',
      'Mumbai & Kolkata Datacenters',
      '99.99% Uptime SLA',
      'Dedicated Support Engineer',
    ],
    faqs: [
      { q: 'What is a dedicated server?', a: 'A dedicated server gives you an entire physical server exclusively for your use. Unlike VPS, you don\'t share CPU, RAM, or storage with anyone else.' },
      { q: 'Who needs a dedicated server?', a: 'Dedicated servers are ideal for large gaming communities, enterprises with high traffic, applications requiring consistent performance, and businesses with compliance requirements.' },
      { q: 'How long does provisioning take?', a: 'Standard dedicated servers are provisioned within 24-48 hours. Custom configurations may take 3-5 business days depending on component availability.' },
    ],
    relatedPages: [
      { title: 'Dedicated Servers', path: '/dedicated-servers' },
      { title: 'VPS Hosting', path: '/vps-hosting' },
      { title: 'VDS Hosting', path: '/vds-hosting' },
    ],
  }));
};

// ── Misc standalone pages ────────────────────────────────────────────────
const miscPages = [
  {
    slug: 'game-hosting-provider',
    category: 'game-server',
    title: 'Best Game Hosting Provider India | XiteNodes',
    metaDescription: 'XiteNodes — India\'s #1 game server hosting provider. Host Minecraft, Rust, Palworld, and 20+ games with low ping Indian servers. Starting at ₹40/mo.',
    h1: 'India\'s Best Game Hosting Provider',
    heroDescription: 'Host any game server in India with ultra-low ping. We support 20+ games with one-click setup, automatic backups, and enterprise DDoS protection.',
    ctaLink: '/game-servers',
    ctaText: 'Browse All Games',
    colorScheme: 'purple',
    heroImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    features: ['20+ Supported Games', 'One-Click Installer', 'Mod & Plugin Support', 'DDoS Protection', 'Automatic Backups', 'Indian Servers'],
    faqs: [
      { q: 'What games do you support?', a: 'We support 20+ games including Minecraft, Rust, Palworld, Terraria, Valheim, ARK, CS2, FiveM, and many more. Each game has optimized server configurations.' },
      { q: 'Can I switch between games?', a: 'Yes! You can change your game server type anytime from the control panel. Your server resources remain the same.' },
      { q: 'Do you offer game server management?', a: 'Yes, our control panel makes it easy to manage your server. You can install mods, manage players, configure settings, and monitor performance all from one dashboard.' },
    ],
    relatedPages: [
      { title: 'Game Servers', path: '/game-servers' },
      { title: 'Minecraft Hosting', path: '/minecraft-hosting' },
      { title: 'VPS Hosting', path: '/vps-hosting' },
    ],
  },
  {
    slug: 'best-game-server-hosting-under-100-rs',
    category: 'game-server',
    title: 'Best Game Server Under ₹100 India | XiteNodes',
    metaDescription: 'Get game server hosting under ₹100/mo in India. Budget-friendly Minecraft, Rust, and game servers with DDoS protection. Perfect for small groups.',
    h1: 'Game Server Hosting Under ₹100/mo',
    heroDescription: 'Start your gaming server for under ₹100/mo. Budget plans perfect for small friend groups, with full mod support and DDoS protection included.',
    ctaLink: '/game-servers',
    ctaText: 'See Budget Plans',
    colorScheme: 'green',
    heroImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    features: ['Plans from ₹40/mo', 'Full Mod Support', 'DDoS Protection Included', 'NVMe Storage', 'Indian Servers', 'Instant Setup'],
    faqs: [
      { q: 'What can I host for under ₹100?', a: 'Our budget plans support Minecraft (2-5 players), small Terraria servers, and other lightweight games. Perfect for playing with close friends.' },
      { q: 'Is DDoS protection included?', a: 'Yes! Even our cheapest plans include DDoS protection at no extra cost.' },
      { q: 'Can I upgrade later?', a: 'Absolutely! Upgrade anytime with prorated billing. Your data is preserved during upgrades.' },
    ],
    relatedPages: [
      { title: 'Game Servers', path: '/game-servers' },
      { title: 'Budget Minecraft', path: '/budget-minecraft-hosting' },
      { title: 'Cheap VPS', path: '/cheap-vps' },
    ],
  },
];


// ════════════════════════════════════════════════════════════════════════
// ASSEMBLE ALL PAGES
// ════════════════════════════════════════════════════════════════════════

const mcImage = 'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80';
const vpsImage = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80';
const gameImage = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80';

const allPages = [
  // ── Game Server Pages ──────────────────────────────────────────────
  ...generateGamePages('minecraft', 'Minecraft', '40', '/game-servers', 'green', mcImage),
  ...generateGamePages('hytale', 'Hytale', '150', '/game-servers', 'cyan', gameImage),
  ...generateGamePages('rust', 'Rust', '299', '/game-servers', 'red', gameImage),
  ...generateGamePages('palworld', 'Palworld', '299', '/game-servers', 'blue', gameImage),
  ...generateGamePages('terraria', 'Terraria', '99', '/game-servers', 'green', gameImage),
  ...generateGamePages('valheim', 'Valheim', '199', '/game-servers', 'teal', gameImage),
  ...generateGamePages('v-rising', 'V Rising', '299', '/game-servers', 'red', gameImage),
  ...generateGamePages('enshrouded', 'Enshrouded', '299', '/game-servers', 'amber', gameImage),
  ...generateGamePages('unturned', 'Unturned', '99', '/game-servers', 'green', gameImage),
  ...generateGamePages('satisfactory', 'Satisfactory', '299', '/game-servers', 'orange', gameImage),
  ...generateGamePages('space-engineers', 'Space Engineers', '299', '/game-servers', 'blue', gameImage),
  ...generateGamePages('starbound', 'Starbound', '99', '/game-servers', 'purple', gameImage),
  ...generateGamePages('dayz', 'DayZ', '299', '/game-servers', 'gray', gameImage),
  ...generateGamePages('fivem', 'FiveM', '299', '/game-servers', 'orange', gameImage),
  ...generateGamePages('gta-v', 'GTA V', '299', '/game-servers', 'green', gameImage),
  ...generateGamePages('left-4-dead-2', 'Left 4 Dead 2', '199', '/game-servers', 'red', gameImage),
  ...generateGamePages('counter-strike-2', 'Counter-Strike 2', '199', '/game-servers', 'yellow', gameImage),
  ...generateGamePages('core-keeper', 'Core Keeper', '199', '/game-servers', 'amber', gameImage),
  ...generateGamePages('ark-survival-evolved', 'ARK Survival Evolved', '299', '/game-servers', 'green', gameImage),
  ...generateGamePages('project-zomboid', 'Project Zomboid', '199', '/game-servers', 'gray', gameImage),

  // ── VPS Pages ──────────────────────────────────────────────────────
  ...generateVpsPages('budget-vps', 'Budget', '600', '/vps-hosting', 'amber', vpsImage),
  ...generateVpsPages('normal-vps', 'Standard', '699', '/vps-hosting', 'blue', vpsImage),
  ...generateVpsPages('high-performance-vps', 'High Performance', '999', '/vps-hosting', 'purple', vpsImage),
  ...generateVpsPages('cloud-vps', 'Cloud', '699', '/vps-hosting', 'cyan', vpsImage),
  ...generateVpsPages('game-vps', 'Game', '699', '/vps-hosting', 'green', vpsImage),
  ...generateVpsPages('linux-vps', 'Linux', '600', '/vps-hosting', 'orange', vpsImage),
  ...generateVpsPages('windows-vps', 'Windows', '699', '/vps-hosting', 'blue', vpsImage),
  ...generateVpsPages('ryzen-vps', 'Ryzen', '999', '/vps-hosting', 'red', vpsImage),
  ...generateVpsPages('epyc-turin-vps', 'EPYC Turin', '999', '/vps-hosting', 'orange', vpsImage),
  ...generateVpsPages('intel-platinum-vps', 'Intel Platinum', '999', '/vps-hosting', 'blue', vpsImage),
  ...generateVpsPages('storage-vps', 'Storage', '699', '/vps-hosting', 'teal', vpsImage),
  ...generateVpsPages('offshore-vps', 'Offshore', '999', '/vps-hosting', 'gray', vpsImage),
  ...generateVpsPages('amd-epyc-vps', 'AMD EPYC', '699', '/vps-hosting', 'red', vpsImage),

  // ── Dedicated Server Pages ─────────────────────────────────────────
  ...generateDedicatedPages(),

  // ── Competitor Comparison Pages ────────────────────────────────────
  generateComparisonPage('hostinger', 'Hostinger'),
  generateComparisonPage('godaddy', 'GoDaddy'),
  generateComparisonPage('digitalocean', 'DigitalOcean'),
  generateComparisonPage('aws', 'AWS'),
  generateComparisonPage('bluehost', 'Bluehost'),
  generateComparisonPage('linode', 'Linode'),
  generateComparisonPage('vultr', 'Vultr'),
  generateComparisonPage('bigrock', 'BigRock'),
  generateComparisonPage('pebblehost', 'PebbleHost'),
  generateComparisonPage('shockbyte', 'Shockbyte'),
  generateComparisonPage('aternos', 'Aternos'),
  generateComparisonPage('minefort', 'Minefort'),
  generateComparisonPage('scalacube', 'ScalaCube'),
  generateComparisonPage('minekeep', 'MineKeep'),
  generateComparisonPage('gbnodes', 'GBNodes'),

  // ── Miscellaneous Pages ────────────────────────────────────────────
  ...miscPages,
];

// Build a lookup map by slug for O(1) access
export const seoPageMap = {};
allPages.forEach(page => {
  seoPageMap[page.slug] = page;
});

export const allSeoPages = allPages;
export default seoPageMap;
