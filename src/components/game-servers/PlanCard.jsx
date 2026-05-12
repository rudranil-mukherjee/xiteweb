import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Cpu, Server as RamIcon, HardDrive as StorageIcon, Wifi, ShieldCheck, Database, ServerOff as ServerIconLucide, Users, CheckCircle, ShoppingCart, Tag, MapPin, Clock, Layers3, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { locations as gameServerLocations } from '@/components/game-servers/planData';

const PlanCard = ({ plan, selectedLocation, categoryName, subCategoryName, details, disableOrdering = false }) => {
  const locationData = gameServerLocations.find(loc => loc.id === selectedLocation);
  const priceModifier = locationData?.priceModifier || 1.0;
  const fixedPriceAdjustment = locationData?.fixedPrice || 0;
  
  const basePrice = plan.basePrice; 
  const offerPrice = Math.round(basePrice * priceModifier + fixedPriceAdjustment); 
  
  // Use plan's custom buyNowUrl if available, otherwise fallback to default URL pattern
  const checkoutUrl = plan.buyNowUrl || `https://billing.xitenodes.com/store/${subCategoryName}`;

  const coreSpecs = [
    { label: "Storage", value: plan.disk, icon: StorageIcon },
    { label: "Bandwidth", value: plan.bandwidth, icon: Wifi },
    { label: "Port", value: plan.ports, icon: ServerIconLucide },
    { label: "Database", value: plan.database, icon: Database },
    { label: "Backup", value: plan.backups, icon: CheckCircle },
  ];
  
  if (plan.splits) {
    coreSpecs.push({ label: "Server Splits", value: plan.splits, icon: Layers3 });
  }

  const includedFeatures = [
    { text: "Basic DDoS Protection" },
    { text: "Control Panel" },
    { text: "Fast Support" },
    { text: "Locations: India, SG, DE, US" },
    { text: "99.9% Uptime" },
  ];

  const cardColor = details.color || 'purple';

  return (
    <motion.div
      className={`relative flex flex-col rounded-2xl border-2 border-${cardColor}-600/50 group transition-all duration-300 ease-out overflow-hidden bg-slate-800/70 backdrop-blur-lg shadow-lg hover:shadow-${cardColor}-500/30 hover:border-${cardColor}-500`}
      variants={{ hidden: { opacity: 0, y: 50, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1 } }}
      whileHover={{ y: -6, scale:1.01 }}
    >

      <div className="p-6 flex-grow">
        <div className="flex items-center justify-between mb-3">
          <h3 className={`text-2xl font-bold text-${cardColor}-300`}>{plan.name}</h3>
          {plan.logo && (
            <img  src={plan.logo} alt={`${plan.name} logo`} className="w-10 h-10 object-contain" src="https://images.unsplash.com/photo-1679127344268-af5c59a9def1" />
          )}
        </div>
        
        <div className={`mb-4 p-3 rounded-lg bg-${cardColor}-500/10 border border-${cardColor}-500/20`}>
            <div className="flex items-center text-sm">
                <Cpu className={`w-5 h-5 mr-2 text-${cardColor}-400 flex-shrink-0`} />
                <span className="text-gray-300 font-medium">{plan.cpuName}</span>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-5">
            <div className={`p-3 rounded-lg bg-slate-700/60 border border-slate-600/50 text-center`}>
                <p className={`text-2xl font-semibold text-${cardColor}-300`}>{plan.ramAmount}</p>
                <p className="text-xs text-gray-400">RAM ({plan.ramSpeed})</p>
            </div>
            <div className={`p-3 rounded-lg bg-slate-700/60 border border-slate-600/50 text-center`}>
                <p className={`text-2xl font-semibold text-${cardColor}-300`}>{plan.cpuPercentage}</p>
                <p className="text-xs text-gray-400">CPU</p>
            </div>
        </div>
        
        <div className="space-y-2.5 mb-5">
          {coreSpecs.map(spec => (
            <div key={spec.label} className="flex items-center text-sm">
              <spec.icon className={`w-4 h-4 mr-2.5 text-${cardColor}-400 flex-shrink-0`} />
              <span className="text-gray-400">{spec.label}:&nbsp;</span>
              <span className="font-medium text-white">{spec.value}</span>
            </div>
          ))}
        </div>

        <hr className="border-slate-600/70 my-4" />

        <div className="space-y-2">
          {includedFeatures.map(feat => (
            <div key={feat.text} className="flex items-center text-xs">
              <CheckCircle className={`w-3.5 h-3.5 mr-2 text-green-400 flex-shrink-0`} />
              <span className="text-gray-300">{feat.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 mt-auto border-t border-slate-600/70 bg-slate-800/90">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className={`text-xs line-through text-gray-500`}>₹{Math.round(basePrice * 1.2)}</span> 
            <p className={`text-3xl font-extrabold text-${cardColor}-300`}>₹{offerPrice}</p>
            <p className="text-xs text-gray-400 -mt-1">+GST /month</p>
          </div>
          <div className={`bg-${cardColor}-500 text-white text-xs font-bold px-3 py-1 rounded-md shadow-md -rotate-6 transform`}>
            OFFER
          </div>
        </div>
        <Button 
          disabled={disableOrdering}
          onClick={!disableOrdering ? () => window.open(checkoutUrl, '_blank') : undefined}
          className={`${disableOrdering ? 'bg-gray-600 text-gray-300 cursor-not-allowed opacity-80' : `bg-gradient-to-r from-${cardColor}-500 to-${cardColor}-600 hover:brightness-110 text-white`} w-full font-semibold shadow-lg group-hover:scale-105 transition-transform duration-200 py-3`}
        >
          {disableOrdering ? (
            <>Temporarily Unavailable <AlertTriangle className="ml-2 h-4 w-4" /></>
          ) : (
            <>Buy Now <ShoppingCart className="ml-2 h-4 w-4" /></>
          )}
        </Button>
      </div>
    </motion.div>
  );
};

export default PlanCard;