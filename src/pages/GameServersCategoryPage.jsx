
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Zap, Info, Diamond, Cpu as CpuIcon, Gem, AlertTriangle } from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';
import PlanCard from '@/components/game-servers/PlanCard';
// ExtremePlanBuilder is removed as 'extreme' is no longer a builder category
import { locations as gameServerLocations, generatePlansForCategory, categorySpecificDetails as gameCategorySpecificDetails } from '@/components/game-servers/planData';


const GameServersCategoryPage = () => {
  let { category } = useParams();
  if (category === 'extreme') category = 'extreme-series'; // Map old slug to new if necessary

  const [selectedLocation, setSelectedLocation] = React.useState(gameServerLocations[0].id); 
  
  const details = gameCategorySpecificDetails[category];
  
  let plans = [];
  if (details) { // isBuilder check is removed as Extreme Series is no longer a builder
    plans = generatePlansForCategory(category);
  }


  if (!details) {
    return <div className="text-center py-20 text-white">Category not found. <Link to="/game-servers" className="text-pink-400 hover:underline">Go back</Link></div>;
  }

  const IconComponent = details.icon;

  return (
    <div className="min-h-screen pt-32 pb-16 relative overflow-hidden">
      <Helmet>
        <title>{`${details?.name || 'Game Servers'} Hosting India | XiteNodes`}</title>
        <meta name="description" content={`${details?.name || 'Game server'} hosting in India with low ping, DDoS protection, and instant setup. NVMe SSDs and 24/7 support from XiteNodes.`} />
        <link rel="canonical" href={`https://xitenodes.com/game-servers/${category}`} />
        <meta property="og:title" content={`${details?.name || 'Game Servers'} Hosting India | XiteNodes`} />
        <meta property="og:description" content={`${details?.name || 'Game server'} hosting in India with low ping, DDoS protection, and instant setup.`} />
        <meta property="og:url" content={`https://xitenodes.com/game-servers/${category}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${details?.name || 'Game Servers'} Hosting India | XiteNodes`} />
      </Helmet>
      <AnimatedParticles count={category === 'extreme-series' ? 40 : 25} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <IconComponent className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 ${details.highlightColor}`} />
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-${details.color}-400 via-${details.color}-500 to-${details.color}-600`}>
            {details.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            {details.description}
          </p>
          <p className="mt-2 text-sm text-gray-500">All plans include our standard high-performance hardware and network infrastructure.</p>

        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y:20 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 flex justify-center"
          >
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-[280px] bg-slate-800/70 border-slate-700 text-white focus:ring-pink-500">
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700 text-white">
                {gameServerLocations.map(loc => (
                  <SelectItem key={loc.id} value={loc.id} className="focus:bg-slate-700 hover:bg-slate-700/50">
                    {loc.name} ({loc.display})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>

        <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {plans.map(plan => (
              <PlanCard 
                key={plan.name} 
                plan={plan} 
                selectedLocation={selectedLocation} 
                categoryName="game-servers"
                subCategoryName={category} 
                details={details}
              />
            ))}
          </motion.div>
        <motion.div
         initial={{ opacity: 0, y:30 }}
         animate={{ opacity: 1, y:0 }}
         transition={{ duration: 0.5, delay: (plans ? plans.length * 0.1 + 0.3 : 0.3) }}
         className="mt-16 text-center"
        >
          <Button variant="outline" asChild className={`border-${details.color}-500 text-${details.color}-400 hover:bg-${details.color}-500 hover:text-white transition-colors py-3 px-6 text-base`}>
            <Link to="/game-servers">
              <Zap className="w-4 h-4 mr-2" /> View Other Game Server Series
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default GameServersCategoryPage;