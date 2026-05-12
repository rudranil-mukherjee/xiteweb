
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Server, Cpu, HardDrive, Zap, Shield, Globe, Router as RouterIcon } from 'lucide-react';

const GlobalInfrastructure = () => {
  const locations = [
    { country: 'India', cities: ['Noida', 'Mumbai', 'Bangalore', 'Chennai'], flag: '🇮🇳', image: 'https://images.unsplash.com/photo-1587613865769-9607cb004f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { country: 'Singapore', cities: ['Singapore'], flag: '🇸🇬', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { country: 'Japan', cities: ['Tokyo', 'Osaka'], flag: '🇯🇵', image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { country: 'Germany', cities: ['Frankfurt', 'Nuremberg'], flag: '🇩🇪', image: 'https://images.unsplash.com/photo-1522771749429-66507514f3a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { country: 'United States', cities: ['Dallas', 'Los Angeles', 'New York'], flag: '🇺🇸', image: 'https://images.unsplash.com/photo-1500930287499-9de628f91a66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { country: 'United Kingdom', cities: ['London'], flag: '🇬🇧', image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { country: 'Australia', cities: ['Sydney'], flag: '🇦🇺', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { country: 'Canada', cities: ['Montreal'], flag: '🇨🇦', image: 'https://images.unsplash.com/photo-1503047957650-d60c101069e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { country: 'Netherlands', cities: ['Amsterdam'], flag: '🇳🇱', image: 'https://images.unsplash.com/photo-1584804918044-07008d0150aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
  ];

  const hardwareSpecs = [
    { icon: Cpu, title: "AMD Ryzen 9 9950x 5.2 Ghz", description: "Latest generation processors for maximum performance.", gradient: "from-pink-500 to-purple-600", image: 'https://images.unsplash.com/photo-1591799264318-3204e5830515?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { icon: Cpu, title: "AMD Epyc Millan, Geona, Truin", description: "Latest generation processors for maximum performance.", gradient: "from-pink-500 to-purple-600", image: 'https://images.unsplash.com/photo-1591799264318-3204e5830515?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { icon: Cpu, title: "Intel Xeon v4 Scalable", description: "Latest generation processors for maximum performance.", gradient: "from-pink-500 to-purple-600", image: 'https://images.unsplash.com/photo-1591799264318-3204e5830515?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { icon: HardDrive, title: "NVMe SSD Storage", description: "Blazing fast storage for instant data access and low latency.", gradient: "from-cyan-500 to-blue-600", image: 'https://images.unsplash.com/photo-1544890225-2fde04a04d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { icon: Zap, title: "High-Speed Network", description: "Redundant, low-latency network ensuring optimal connectivity.", gradient: "from-green-500 to-teal-600", image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { icon: Shield, title: "Advanced DDoS Protection", description: "Robust security measures to protect against attacks.", gradient: "from-red-500 to-orange-600", image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
  ];

  const simpleLocationCards = [
    { name: "Noida, India", description: "Primary APAC Hub, Extensive Peering", icon: MapPin, color: "pink" },
    { name: "Frankfurt, Germany", description: "Central Europe, DE-CIX Access", icon: MapPin, color: "purple" },
    { name: "Mumbai, India", description: "Primary APAC Hub, Extensive Peering", icon: MapPin, color: "cyan" },
    { name: "Singapore", description: "Key SEA Gateway, High Connectivity", icon: MapPin, color: "blue" },
    { name: "Kolkata, India", description: "Edge Location, Direct Peer Noida", icon: MapPin, color: "brown" },
    { name: "Bangalore, India", description: "Edge Location, Direct Peer Mumbai", icon: MapPin, color: "blue" },
    { name: "Japan", description: "Edge Location, Direct Peer Singapore", icon: MapPin, color: "yellow" },
    { name: "AnyCasted", description: "Peering and Cloudflare Route Transit", icon: MapPin, color: "orange" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-16 md:py-24 bg-slate-900/50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img-replace src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Abstract network background" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <Globe className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500">
              Our Global Infrastructure
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            XiteNodes operates a state-of-the-art global network, strategically located to provide low latency and high performance worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {locations.slice(0,6).map((loc, index) => ( // Show first 6 for brevity
            <motion.div
              key={loc.country}
              className="relative rounded-xl overflow-hidden shadow-2xl group transform transition-all duration-300 hover:scale-105"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <img-replace src={loc.image} alt={`${loc.country} datacenter location`} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {loc.flag} {loc.country}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {loc.cities.map(city => (
                    <span key={city} className="text-xs bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {simpleLocationCards.map((loc, index) => (
            <motion.div
              key={loc.name}
              className={`p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/60 hover:border-${loc.color}-500/70 transition-all duration-300 group hover:-translate-y-1`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <loc.icon className={`w-8 h-8 mb-3 text-${loc.color}-400 group-hover:text-${loc.color}-300 transition-colors`} />
              <h4 className={`text-lg font-semibold text-${loc.color}-300 mb-1 group-hover:text-${loc.color}-200 transition-colors`}>{loc.name}</h4>
              <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">{loc.description}</p>
            </motion.div>
          ))}
        </div>


        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-12 md:mb-16"
        >
          <Server className="w-12 h-12 mx-auto mb-4 text-pink-400" />
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Powered by Cutting-Edge Hardware
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {hardwareSpecs.map((spec, index) => (
            <motion.div
              key={spec.title}
              className={`relative p-8 rounded-xl shadow-xl overflow-hidden border border-slate-700/50 bg-slate-800/40 backdrop-blur-md group`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index + locations.length}
            >
              <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${spec.gradient} opacity-10 blur-xl group-hover:opacity-20 group-hover:scale-125 transition-all duration-500 ease-out`}></div>
              <div className="relative z-10 flex items-start space-x-6">
                <div className={`p-4 rounded-lg bg-gradient-to-br ${spec.gradient} shadow-lg`}>
                  <spec.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">{spec.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{spec.description}</p>
                </div>
              </div>
              <img-replace src={spec.image} alt={spec.title} className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:opacity-10 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalInfrastructure;
