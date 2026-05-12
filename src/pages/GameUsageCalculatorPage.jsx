import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label} from "@/components/ui/label";
import { Calculator, Zap, Sparkles, AlertTriangle, Cpu, Server, HardDrive, Brain, Package, Diamond, Gem, Users, HelpCircle, Layers, Settings2, CheckCircle, Info } from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';
import PlanCard from '@/components/game-servers/PlanCard';
import { generatePlansForCategory, categorySpecificDetails, locations as gameServerLocations } from '@/components/game-servers/planData';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const CalculatorInputSection = ({ title, children, titleColor = "text-purple-400" }) => (
  <div className="mb-6">
    <Label className={`text-md font-medium ${titleColor} mb-2 block hero-description-font`}>{title}</Label>
    {children}
  </div>
);

const RamBreakdownItem = ({ label, valueGB, color }) => (
  <div className={`flex justify-between items-center py-2.5 px-3.5 rounded-lg bg-${color}-500/10 border border-${color}-500/30 shadow-sm`}>
    <span className={`text-sm font-medium text-${color}-300 hero-description-font`}>{label}</span>
    <span className="text-sm font-bold text-white hero-description-font">{valueGB.toFixed(2)} GB</span>
  </div>
);

const CustomSlider = ({ id, label, value, min, max, step, onValueChange, color = "pink", thumbIcon: ThumbIcon, iconColor = "text-white" }) => {
  const SliderThumb = () => (
    <div className={`w-6 h-6 bg-${color}-500 rounded-full shadow-md flex items-center justify-center border-2 border-white`}>
      <ThumbIcon className={`w-3 h-3 ${iconColor}`} />
    </div>
  );
  return (
    <CalculatorInputSection title={`${label}: ${value}`} titleColor={`text-${color}-400`}>
      <Slider
        id={id}
        defaultValue={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={(val) => onValueChange(val[0])}
        className={`my-3 [&>span:first-child]:h-2.5 [&>span:first-child>span]:bg-${color}-500 [&>span:last-child]:bg-transparent [&>span:last-child]:h-6 [&>span:last-child]:w-6 [&>span:last-child]:flex [&>span:last-child]:items-center [&>span:last-child]:justify-center [&>span:last-child]:border-0`}
        thumbChildren={<SliderThumb />}
      />
    </CalculatorInputSection>
  );
};


const baseMinecraftJavaLogic = {
  baseRamGB: 1.8,
  ramPerPlayerGB: 0.145,
  isModHeavy: true,
  pluginModRamValues: { smp: 0.5, low: 1.0, medium: 2.0, high: 3.5, very_high: 5.0, extreme: 7.0 } 
};

const baseMinecraftBedrockLogic = {
  baseRamGB: 0.9,
  ramPerPlayerGB: 0.07,
  isModHeavy: true,
  pluginModRamValues: { smp: 0.25, low: 0.5, medium: 1.0, high: 1.75, very_high: 2.5, extreme: 3.5 }
};

const fiveMArkLogic = {
  isModHeavy: true,
  pluginModRamValues: { smp: 1, low: 1.5, medium: 3, high: 4.5, very_high: 8, extreme: 10 }
};


const gameTypes = [
  { id: 'minecraft_java', name: 'Minecraft Java', ...baseMinecraftJavaLogic, icon: Package },
  { id: 'minecraft_bedrock', name: 'Minecraft Bedrock', ...baseMinecraftBedrockLogic, icon: Package },
  { id: 'fivem', name: 'FiveM', baseRamGB: baseMinecraftJavaLogic.baseRamGB * 1.5, ramPerPlayerGB: baseMinecraftJavaLogic.ramPerPlayerGB * 1.5, ...fiveMArkLogic, icon: Server },
  { id: 'ark', name: 'ARK: Survival Evolved', baseRamGB: baseMinecraftJavaLogic.baseRamGB * 1.65, ramPerPlayerGB: baseMinecraftJavaLogic.ramPerPlayerGB * 1.65, ...fiveMArkLogic, icon: Brain },
  { id: 'terraria', name: 'Terraria', ...baseMinecraftBedrockLogic, icon: HardDrive },
  { id: 'valheim', name: 'Valheim', ...baseMinecraftJavaLogic, icon: Cpu },
  { id: 'csgo_cs2', name: 'CS:GO / CS2', ...baseMinecraftJavaLogic, icon: Settings2 },
  { id: 'other', name: 'Other Game', ...baseMinecraftJavaLogic, icon: HelpCircle },
];

const pluginModComplexities = [
  { id: 'smp', name: 'SMP (Simple)' }, { id: 'low', name: 'Low' },
  { id: 'medium', name: 'Medium' }, { id: 'high', name: 'High' },
  { id: 'very_high', name: 'Very High' }, { id: 'extreme', name: 'Extreme' },
];

const worldComplexities = [
  { id: 'low', name: 'Low (Flat, Skyblock)', ramPerWorldGB: 0.15 }, { id: 'medium', name: 'Medium (Normal Overworld)', ramPerWorldGB: 0.35 },
  { id: 'high', name: 'High (Custom Gens)', ramPerWorldGB: 0.6 }, { id: 'very_high', name: 'Very High (Dynamic Gen)', ramPerWorldGB: 1.2 },
];

const performanceBuffers = [
  { id: 'none', name: 'None (0%)', percentage: 0 }, { id: '15', name: '+15%', percentage: 15 },
  { id: '25', name: '+25%', percentage: 25 },
];

const planFilterCategories = [
  { id: 'all', name: 'Show All', color: 'gray', icon: Sparkles }, { id: 'budget', name: 'Budget', color: 'green', icon: Diamond },
  { id: 'premium', name: 'Premium', color: 'purple', icon: Zap }, { id: 'extreme-series', name: 'Extreme Series', color: 'pink', icon: Gem },
];

const GameUsageCalculatorPage = () => {
  const [selectedGameType, setSelectedGameType] = useState(gameTypes[0].id);
  const [playerCount, setPlayerCount] = useState(10);
  const [pluginModComplexity, setPluginModComplexity] = useState(pluginModComplexities[2].id); 
  const [worldCount, setWorldCount] = useState(3);
  const [selectedWorldComplexity, setSelectedWorldComplexity] = useState(worldComplexities[1].id); 
  const [selectedPerformanceBuffer, setSelectedPerformanceBuffer] = useState(performanceBuffers[1].id); 
  
  const [calculatedRamBreakdown, setCalculatedRamBreakdown] = useState({
    baseGame: 0, players: 0, pluginsMods: 0, worlds: 0, buffer: 0, total: 0
  });
  const [recommendedPlans, setRecommendedPlans] = useState({ budget: [], premium: [], 'extreme-series': [] });
  const [showResults, setShowResults] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(gameServerLocations[0].id);
  const [selectedPlanFilter, setSelectedPlanFilter] = useState('all');

  useEffect(() => {
    const game = gameTypes.find(g => g.id === selectedGameType);
    const worldComplexityData = worldComplexities.find(wc => wc.id === selectedWorldComplexity);
    const bufferData = performanceBuffers.find(b => b.id === selectedPerformanceBuffer);

    if (!game || !worldComplexityData || !bufferData) return;

    const baseRam = game.baseRamGB;
    const playerRam = playerCount * game.ramPerPlayerGB;
    
    let pluginRamValue = 0;
    if (game.isModHeavy) {
      const complexityValue = game.pluginModRamValues[pluginModComplexity];
      pluginRamValue = complexityValue;
    }

    const worldRamValue = worldCount * worldComplexityData.ramPerWorldGB;
    const rawTotalRam = baseRam + playerRam + pluginRamValue + worldRamValue;
    const bufferAmount = rawTotalRam * (bufferData.percentage / 100);
    const finalRam = rawTotalRam + bufferAmount;

    setCalculatedRamBreakdown({
      baseGame: baseRam, players: playerRam, pluginsMods: pluginRamValue,
      worlds: worldRamValue, buffer: bufferAmount, total: parseFloat(finalRam.toFixed(1)) 
    });
  }, [selectedGameType, playerCount, pluginModComplexity, worldCount, selectedWorldComplexity, selectedPerformanceBuffer]);

  const handleGeneratePlans = () => {
    const requiredRamGB = calculatedRamBreakdown.total;
    let newRecommendedPlans = { budget: [], premium: [], 'extreme-series': [] };

    planFilterCategories.filter(cat => cat.id !== 'all').forEach(catInfo => {
      const categoryId = catInfo.id;
      const allCategoryPlans = generatePlansForCategory(categoryId).map(p => ({ ...p, categoryId: categoryId, ramGB: parseFloat(p.ramAmount) }));
      
      const suitablePlans = allCategoryPlans
        .filter(plan => plan.ramGB >= requiredRamGB)
        .sort((a, b) => a.ramGB - b.ramGB);

      if (suitablePlans.length > 0) {
        const bestPlan = suitablePlans[0];
        newRecommendedPlans[categoryId].push(bestPlan);

        if (categoryId === 'extreme-series') {
          const bestPlanIndex = allCategoryPlans.findIndex(p => p.name === bestPlan.name);
          if (bestPlanIndex > 0) {
            newRecommendedPlans[categoryId].unshift(allCategoryPlans[bestPlanIndex - 1]);
          }
        } else {
          const nextPlanIndex = allCategoryPlans.findIndex(p => p.name === bestPlan.name) + 1;
          if (nextPlanIndex < allCategoryPlans.length) {
            newRecommendedPlans[categoryId].push(allCategoryPlans[nextPlanIndex]);
          }
        }
      }
    });
    setRecommendedPlans(newRecommendedPlans);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 relative overflow-hidden">
      <Helmet>
        <title>Game Server Usage Calculator | Find Your Plan - XiteNodes</title>
        <meta name="description" content="Calculate the perfect game server plan for your needs. Enter your game, player count, and mods to get a personalized hosting recommendation from XiteNodes." />
        <link rel="canonical" href="https://xitenodes.com/game-servers/usage-calculator" />
        <meta property="og:title" content="Game Server Usage Calculator | Find Your Plan - XiteNodes" />
        <meta property="og:description" content="Calculate the perfect game server plan for your needs based on game, players, and mods." />
        <meta property="og:url" content="https://xitenodes.com/game-servers/usage-calculator" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Game Server Usage Calculator | Find Your Plan - XiteNodes" />
        <meta name="twitter:description" content="Calculate the perfect game server plan based on game, player count, and mods." />
      </Helmet>
      <AnimatedParticles count={25} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }} className="text-center mb-10"
        >
          <Calculator className="w-16 h-16 mx-auto mb-4 text-blue-400" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 hero-title-font bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
            Game Server RAM Calculator
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto hero-description-font">
            Fine-tune your server specs and find the perfect XiteNodes plan.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <motion.div 
            className="lg:col-span-8 p-6 md:p-8 rounded-2xl bg-slate-800/70 border border-slate-700/50 backdrop-blur-lg shadow-2xl"
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mb-6">
              <CalculatorInputSection title="Game Type" titleColor="text-purple-400">
                <Select value={selectedGameType} onValueChange={setSelectedGameType}>
                  <SelectTrigger className="w-full bg-slate-700/80 border-slate-600 text-white focus:ring-purple-500"><SelectValue /></SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700 text-white">
                    {gameTypes.map(game => <SelectItem key={game.id} value={game.id} className="focus:bg-slate-700 hover:bg-slate-700/50">{game.name}</SelectItem>)}
                  </SelectContent>
                </Select>
                {selectedGameType === 'other' && <p className="text-xs text-amber-400 mt-1 flex items-center"><AlertTriangle className="w-3 h-3 mr-1"/>For 'Other', consider a <Link to="/vps-hosting" className="text-purple-400 hover:underline">VPS plan</Link>.</p>}
              </CalculatorInputSection>
              <CalculatorInputSection title="Plugin/Mod Complexity" titleColor="text-cyan-400">
                <Select value={pluginModComplexity} onValueChange={setPluginModComplexity}>
                  <SelectTrigger className="w-full bg-slate-700/80 border-slate-600 text-white focus:ring-cyan-500"><SelectValue /></SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700 text-white">
                    {pluginModComplexities.map(level => <SelectItem key={level.id} value={level.id} className="focus:bg-slate-700 hover:bg-slate-700/50">{level.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              </CalculatorInputSection>
            </div>
            
            <CustomSlider id="player-slider" label="Player Count" value={playerCount} min={1} max={1000} step={1} onValueChange={setPlayerCount} color="pink" thumbIcon={Users} />

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mb-6">
              <CustomSlider id="world-count-slider" label="World Count" value={worldCount} min={1} max={100} step={1} onValueChange={setWorldCount} color="teal" thumbIcon={Layers} />
              <CalculatorInputSection title="World Complexity" titleColor="text-green-400">
                <Select value={selectedWorldComplexity} onValueChange={setSelectedWorldComplexity}>
                  <SelectTrigger className="w-full bg-slate-700/80 border-slate-600 text-white focus:ring-green-500"><SelectValue /></SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700 text-white">
                    {worldComplexities.map(level => <SelectItem key={level.id} value={level.id} className="focus:bg-slate-700 hover:bg-slate-700/50">{level.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              </CalculatorInputSection>
            </div>
            
            <CalculatorInputSection title="Performance Buffer" titleColor="text-orange-400">
              <div className="grid grid-cols-3 gap-2">
                {performanceBuffers.map(buffer => (
                  <Button
                    key={buffer.id} variant={selectedPerformanceBuffer === buffer.id ? "default" : "outline"}
                    onClick={() => setSelectedPerformanceBuffer(buffer.id)}
                    className={cn("w-full py-3 text-sm font-medium transition-all duration-200 flex items-center justify-center",
                      selectedPerformanceBuffer === buffer.id 
                        ? "bg-orange-500 hover:bg-orange-600 text-white border-orange-500 shadow-lg shadow-orange-500/30"
                        : "border-slate-600 text-gray-300 hover:bg-slate-700 hover:border-orange-500 hover:text-orange-300"
                    )}
                  >
                    {selectedPerformanceBuffer === buffer.id && <CheckCircle className="w-4 h-4 mr-2" />}
                    {buffer.name}
                  </Button>
                ))}
              </div>
            </CalculatorInputSection>

            <CalculatorInputSection title="Filter Plans By Category" titleColor="text-blue-400">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {planFilterCategories.map(cat => {
                  const Icon = cat.icon;
                  return (
                    <Button
                      key={cat.id} variant={selectedPlanFilter === cat.id ? 'default' : 'outline'}
                      onClick={() => setSelectedPlanFilter(cat.id)}
                      className={`w-full py-3 text-sm font-medium transition-all duration-200 group
                        ${selectedPlanFilter === cat.id 
                          ? `bg-${cat.color}-500 hover:bg-${cat.color}-600 text-white border-${cat.color}-500 shadow-lg shadow-${cat.color}-500/30` 
                          : `border-slate-600 text-gray-300 hover:bg-slate-700 hover:border-${cat.color}-500 hover:text-${cat.color}-300`}
                      `}
                    >
                      <Icon className={`w-4 h-4 mr-2 group-hover:text-${cat.color}-400 ${selectedPlanFilter === cat.id ? 'text-white' : `text-${cat.color}-400` } transition-colors`} />
                      {cat.name}
                    </Button>
                  );
                })}
              </div>
            </CalculatorInputSection>
          </motion.div>

          <motion.div 
            className="lg:col-span-4 p-6 md:p-8 rounded-2xl bg-slate-800/60 border border-slate-700/50 backdrop-blur-md shadow-xl sticky top-28"
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-5 text-center hero-title-font">Live RAM Breakdown</h3>
            <div className="space-y-2.5 mb-5">
              <RamBreakdownItem label="Base Game RAM" valueGB={calculatedRamBreakdown.baseGame} color="purple" />
              <RamBreakdownItem label="Player RAM" valueGB={calculatedRamBreakdown.players} color="pink" />
              <RamBreakdownItem label="Plugin/Mod RAM" valueGB={calculatedRamBreakdown.pluginsMods} color="cyan" />
              <RamBreakdownItem label="World RAM" valueGB={calculatedRamBreakdown.worlds} color="teal" />
              <RamBreakdownItem label="Performance Buffer" valueGB={calculatedRamBreakdown.buffer} color="orange" />
            </div>
            <hr className="my-5 border-slate-600/70" />
            <div className="flex justify-between items-center py-3.5 px-4 rounded-lg bg-gradient-to-r from-yellow-500 to-amber-600 shadow-lg">
              <span className="text-lg font-semibold text-white hero-description-font">Total Estimated RAM</span>
              <span className="text-2xl font-extrabold text-white hero-title-font">{calculatedRamBreakdown.total.toFixed(1)} GB</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-10 text-center" initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button 
            onClick={handleGeneratePlans} size="lg" 
            className="px-12 py-7 text-xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-xl hover:shadow-green-500/40 transform hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-6 h-6 mr-3" /> Generate Recommended Plans
          </Button>
        </motion.div>

        <AnimatePresence>
        {showResults && (
          <motion.div 
            className="mt-16" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h2 className="text-3xl font-bold text-center mb-4 text-white hero-title-font">Recommended Plans</h2>
            <p className="text-center text-gray-400 mb-4 hero-description-font">Based on your estimated <strong className="text-yellow-400">{calculatedRamBreakdown.total.toFixed(1)} GB</strong> RAM requirement.</p>
            <div className="flex justify-center mb-8">
              <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm flex items-center gap-2">
                <Info className="w-4 h-4" />
                <span>Premium & Extreme Series plans consume less RAM than Budget Series.</span>
              </div>
            </div>
            <div className="mb-10 flex justify-center">
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-[280px] bg-slate-800/70 border-slate-700 text-white focus:ring-blue-500">
                  <SelectValue placeholder="Select Location for Pricing" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-white">
                  {gameServerLocations.map(loc => (
                    <SelectItem key={loc.id} value={loc.id} className="focus:bg-slate-700 hover:bg-slate-700/50">
                      {loc.name} ({loc.display})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {Object.entries(recommendedPlans).map(([categoryId, plans]) => {
                if (selectedPlanFilter !== 'all' && selectedPlanFilter !== categoryId) return null;
                const categoryDetails = categorySpecificDetails[categoryId];
                if (!categoryDetails) return null;
                if (plans.length === 0 && selectedPlanFilter !== 'all') {
                   return (
                    <div key={categoryId} className={`p-6 rounded-xl bg-slate-800/50 border border-${categoryDetails.color}-500/50 backdrop-blur-sm text-center`}>
                      <h3 className={`text-2xl font-semibold mb-3 text-${categoryDetails.color}-400 hero-title-font`}>{categoryDetails.title}</h3>
                      <AlertTriangle className={`w-10 h-10 mx-auto mb-3 text-amber-400`} />
                      <p className="text-amber-400 text-sm hero-description-font">No suitable plans in this category for your estimated RAM.</p>
                      {categoryId !== 'extreme-series' && <p className="text-xs text-gray-400 mt-2 hero-description-font">Consider a higher tier or <Link to="/contact-sales" className="text-blue-400 hover:underline">contact us</Link>.</p>}
                      {categoryId === 'extreme-series' && <p className="text-xs text-gray-400 mt-2 hero-description-font">Your needs are high! Consider a <Link to="/vps-hosting" className="text-blue-400 hover:underline">VPS plan</Link> or <Link to="/contact-sales" className="text-blue-400 hover:underline">contact us</Link>.</p>}
                    </div>
                  );
                }
                if (plans.length === 0 && selectedPlanFilter === 'all') return null;
                return (
                  <div key={categoryId} className="space-y-6">
                    <h3 className={`text-2xl font-bold text-center mb-4 text-${categoryDetails.color}-400 hero-title-font`}>{categoryDetails.title}</h3>
                    {plans.map(plan => (
                      <PlanCard 
                        key={`${plan.name}-${plan.categoryId}`} plan={plan} selectedLocation={selectedLocation}
                        categoryName="game-servers" subCategoryName={plan.categoryId} details={categoryDetails}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
            {Object.values(recommendedPlans).every(arr => arr.length === 0) && selectedPlanFilter === 'all' && (
                 <motion.p 
                    className="text-center text-xl text-amber-400 py-10 bg-slate-800/50 rounded-lg mt-8 hero-description-font"
                    initial={{opacity: 0}} animate={{opacity: 1}}
                  >
                    <AlertTriangle className="w-8 h-8 mx-auto mb-3"/>
                    No plans across any category match your high RAM requirements. You might need a custom solution. Please <Link to="/contact-sales" className="text-blue-400 hover:underline">contact sales</Link> for assistance or consider our <Link to="/vps-hosting" className="text-blue-400 hover:underline">VPS options</Link>.
                  </motion.p>
            )}
            <motion.div className="mt-12 text-center">
              <Button variant="outline" onClick={() => setShowResults(false)} className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 text-base">
                Adjust Configuration & Recalculate
              </Button>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GameUsageCalculatorPage;