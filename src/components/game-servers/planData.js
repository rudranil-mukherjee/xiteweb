import { Diamond, Zap, Gem } from 'lucide-react';

export const locations = [
  { id: 'india', name: 'India', priceModifier: 1.0, fixedPrice: 0, display: 'Standard Price' },
  { id: 'singapore', name: 'Singapore', priceModifier: 1.05, fixedPrice: 0, display: '+5%' },
  { id: 'germany', name: 'Germany', priceModifier: 0.90, fixedPrice: 0, display: '-10%' },
  { id: 'us', name: 'US', priceModifier: 0.93, fixedPrice: 0, display: '-7%' },
];

const budgetPlansData = [
  { name: "Noob Plan", cpuName: "Intel Xeon v2", ramSpeed: "2133MHz", ramAmount: "2GB", cpuPercentage: "100%", disk: "8GB NVMe", ports: "1", database: "0", backups: "2", bandwidth: "Unmetered Fair Usage", basePrice: 40, buyNowUrl: "https://billing.xitenodes.com/store/minecraft-budget-plans/noob-plan"},
  { name: "Grinding Plan", cpuName: "Intel Xeon v2", ramSpeed: "2133MHz", ramAmount: "4GB", cpuPercentage: "200%", disk: "12GB NVMe", ports: "2", database: "3", backups: "4", bandwidth: "Unmetered Fair Usage", basePrice: 99, buyNowUrl: "https://billing.xitenodes.com/store/minecraft-budget-plans/grinding-plan"},
  { name: "Normal Plan", cpuName: "Intel Xeon v4/ARM", ramSpeed: "2133MHz", ramAmount: "6GB", cpuPercentage: "250%", disk: "15GB NVMe", ports: "3", database: "4", backups: "6", bandwidth: "Unmetered Fair Usage", basePrice: 199, buyNowUrl: "https://billing.xitenodes.com/store/minecraft-budget-plans/normal-plan"},
  { name: "Pro Plan", cpuName: "Intel Xeon v4/ARM", ramSpeed: "2133MHz", ramAmount: "8GB", cpuPercentage: "300%", disk: "22GB NVMe", ports: "4", database: "6", backups: "8", bandwidth: "Unmetered Fair Usage", basePrice: 299, buyNowUrl: "https://billing.xitenodes.com/store/minecraft-budget-plans/pro-plan"},
  { name: "Meteor Plan", cpuName: "Intel Xeon v4/ARM", ramSpeed: "2133MHz", ramAmount: "10GB", cpuPercentage: "325%", disk: "20GB NVMe", ports: "4", database: "6", backups: "8", bandwidth: "Unmetered Fair Usage", basePrice: 349, buyNowUrl: "https://billing.xitenodes.com/store/minecraft-budget-plans/meteor-plan"},
  { name: "Hacker Plan" , cpuName: "Intel Xeon v4/ARM", ramSpeed: "2133MHz", ramAmount: "12GB", cpuPercentage: "350%", disk: "25GB NVMe", ports: "4", database: "6", backups: "8", bandwidth: "Unmetered Fair Usage", basePrice: 499, buyNowUrl: "https://billing.xitenodes.com/store/minecraft-budget-plans/hacker-plan" },
  { name: "God Plan", cpuName: "Intel Xeon v4/ARM", ramSpeed: "2133MHz", ramAmount: "16GB", cpuPercentage: "400%", disk: "30GB NVMe", ports: "8", database: "10", backups: "16", bandwidth: "Unmetered Fair Usage", basePrice: 669.00, buyNowUrl: "https://billing.xitenodes.com/store/minecraft-budget-plans/god-plan" },
];

const premiumPlansData = [
  { name: "Normal Plan", cpuName: "Intel Xeon 8168 / AMD EPYC 4.2 GHz", ramSpeed: "2600MHz", ramAmount: "6GB", cpuPercentage: "250%", disk: "15GB NVMe", ports: "3", database: "4", backups: "6", bandwidth: "Unmetered Fair Usage", basePrice: 399, buyNowUrl: "https://billing.xitenodes.com/store/high-performance-servers/normal-plan"},
  { name: "Pro Plan", cpuName: "Intel Xeon 8168 / AMD EPYC 4.2 GHz", ramSpeed: "2600MHz", ramAmount: "8GB", cpuPercentage: "300%", disk: "22GB NVMe", ports: "4", database: "6", backups: "8", bandwidth: "Unmetered Fair Usage", basePrice: 499, buyNowUrl: "https://billing.xitenodes.com/store/high-performance-servers/pro-plan"},
  { name: "Meteor Plan", cpuName: "Intel Xeon 8168 / AMD EPYC 4.2 GHz", ramSpeed: "2600MHz", ramAmount: "10GB", cpuPercentage: "325%", disk: "20GB NVMe", ports: "4", database: "6", backups: "8", bandwidth: "Unmetered Fair Usage", basePrice: 599, buyNowUrl: "https://billing.xitenodes.com/store/high-performance-servers/meteor-plan"},
  { name: "Hacker Plan" , cpuName: "Intel Xeon 8168 / AMD EPYC 4.2 GHz", ramSpeed: "2600MHz", ramAmount: "12GB", cpuPercentage: "350%", disk: "25GB NVMe", ports: "4", database: "6", backups: "8", bandwidth: "Unmetered Fair Usage", basePrice: 659, buyNowUrl: "https://billing.xitenodes.com/store/high-performance-servers/hacker-plan"},
  { name: "God Plan", cpuName: "Intel Xeon 8168 / AMD EPYC 4.2 GHz", ramSpeed: "2600MHz", ramAmount: "16GB", cpuPercentage: "400%", disk: "30GB NVMe", ports: "8", database: "10", backups: "16", bandwidth: "Unmetered Fair Usage", basePrice: 899, buyNowUrl: "https://billing.xitenodes.com/store/high-performance-servers/god-plan"},
];

const networkPlansData = [
  { name: "12GB Network Server", splits:"3", cpuName: "AMD EPYC 4.2 GHz", ramSpeed: "2600MHz", ramAmount: "12GB", cpuPercentage: "350%", disk: "25GB NVMe", ports: "4", database: "6", backups: "8", bandwidth: "Unmetered Fair Usage", basePrice: 699, buyNowUrl: "https://billing.xitenodes.com/store/minecraft-network-servers/12gb-network-server"},
  { name: "16GB Network Server", splits:"4", cpuName: "AMD EPYC 4.2 GHz", ramSpeed: "2600MHz", ramAmount: "16GB", cpuPercentage: "400%", disk: "30GB NVMe", ports: "8", database: "10", backups: "16", bandwidth: "Unmetered Fair Usage", basePrice: 1299, buyNowUrl: "https://billing.xitenodes.com/store/minecraft-network-servers/16gb-network"},
  { name: "20GB Network Server", splits:"5", cpuName: "AMD EPYC 4.2 GHz", ramSpeed: "2600MHz", ramAmount: "20GB", cpuPercentage: "450%", disk: "30GB NVMe", ports: "8", database: "10", backups: "16", bandwidth: "Unmetered Fair Usage", basePrice: 1399, buyNowUrl: "https://billing.xitenodes.com/store/minecraft-network-servers/20gb-network-server"},
  { name: "24GB Network Server", splits:"6",  cpuName: "AMD EPYC 4.2 GHz", ramSpeed: "2600MHz", ramAmount: "24GB", cpuPercentage: "500%", disk: "30GB NVMe", ports: "8", database: "10", backups: "16", bandwidth: "Unmetered Fair Usage", basePrice: 1699, buyNowUrl: "https://billing.xitenodes.com/store/minecraft-network-servers/24gb-network-server"},
  { name: "32GB Network Server", splits:"8", cpuName: "AMD EPYC 4.2 GHz", ramSpeed: "2600MHz", ramAmount: "32GB", cpuPercentage: "600%", disk: "30GB NVMe", ports: "8", database: "10", backups: "16", bandwidth: "Unmetered Fair Usage", basePrice: 1799, buyNowUrl: "https://billing.xitenodes.com/store/minecraft-network-servers/32gb"},
];

const extremeSeriesPlansData = [
  { name: "Pro Plan", cpuName: "AMD RYZEN 9 9950x", ramSpeed: "5200MHz", ramAmount: "8GB", cpuPercentage: "300%", disk: "22GB NVMe", ports: "4", database: "6", backups: "8", bandwidth: "Unmetered Fair Usage", basePrice: 599, buyNowUrl: "https://billing.xitenodes.com/store/minecraft-luxury-plans/pro-plan"},
  { name: "Hacker Plan" , cpuName: "AMD RYZEN 9 9950x", ramSpeed: "5200MHz", ramAmount: "12GB", cpuPercentage: "350%", disk: "25GB NVMe", ports: "4", database: "6", backups: "8", bandwidth: "Unmetered Fair Usage", basePrice: 999, buyNowUrl: "https://billing.xitenodes.com/store/minecraft-luxury-plans/hacker-plan"},
  { name: "God Plan", cpuName: "AMD RYZEN 9 9950x", ramSpeed: "5200MHz", ramAmount: "16GB", cpuPercentage: "400%", disk: "30GB NVMe", ports: "8", database: "10", backups: "16", bandwidth: "Unmetered Fair Usage", basePrice: 1399, buyNowUrl: "https://billing.xitenodes.com/store/minecraft-luxury-plans/god-plan"},
];


export const generatePlansForCategory = (categoryName) => {
  if (categoryName === 'budget') {
    return budgetPlansData;
  } else if (categoryName === 'premium') {
    return premiumPlansData;
  } else if (categoryName === 'network-series') {
    return networkPlansData;
  } else if (categoryName === 'extreme-series') {
    return extremeSeriesPlansData.map(plan => ({ ...plan, cpuPercentage: "Unlimited*" }));
  }
  return []; 
};

export const categorySpecificDetails = {
  budget: {
    title: "Budget Series: The Overworld",
    description: "Affordable and reliable game hosting for starters and small communities. Get the best bang for your buck!",
    icon: Diamond,
    color: "green",
    bgGradient: "from-green-500/10 to-slate-900/10",
    borderColor: "border-green-500/50",
    highlightColor: "text-green-400",
    buttonGradient: "from-green-500 to-emerald-600",
  },
  premium: {
    title: "Premium Series: The Nether",
    description: "High-performance servers with enhanced features, perfect for growing communities and demanding games.",
    icon: Zap,
    color: "purple",
    bgGradient: "from-purple-500/10 to-slate-900/10",
    borderColor: "border-purple-500/50",
    highlightColor: "text-purple-400",
    buttonGradient: "from-purple-500 to-indigo-600",
  },
  'network-series': {
    title: "Network Series: The Connection",
    description: "High-performance servers optimized for networking applications and multiplayer games, featuring enhanced network capabilities.",
    icon: Zap,
    color: "blue",
    bgGradient: "from-blue-500/10 to-slate-900/10",
    borderColor: "border-blue-500/50",
    highlightColor: "text-blue-400",
    buttonGradient: "from-blue-500 to-indigo-600",
  },
  'extreme-series': {
    title: "Extreme Series: The End",
    description: "Top-tier performance with Unlimited CPU* and custom configurations for the ultimate gaming experience. *Fair Use Policy applies.",
    icon: Gem,
    color: "pink",
    bgGradient: "from-pink-500/10 to-slate-900/10",
    borderColor: "border-pink-500/50",
    highlightColor: "text-pink-400",
    buttonGradient: "from-pink-500 to-rose-600",
  }
};