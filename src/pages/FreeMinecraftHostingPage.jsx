import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Zap,
  Shield,
  Clock,
  Users,
  Cpu,
  Globe,
  MapPin,
  Gamepad2,
  Check,
  Gift,
  Star,
  HardDrive,
  Wifi,
  Settings,
  Download,
  Upload,
  Server,
  Rocket,
  HeartHandshake,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  FileText,
  UserPlus,
  Crown
} from 'lucide-react';
import AnimatedParticles from '@/components/AnimatedParticles';

const FreeMinecraftHostingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('free');
  const [isSigningUp, setIsSigningUp] = useState(false);

  const freeFeatures = [
    { icon: Cpu, title: "16GB DDR4 RAM", description: "Premium memory for smooth gameplay" },
    { icon: Zap, title: "400% CPU Power", description: "High-performance processors" },
    { icon: MapPin, title: "India Locations", description: "Mumbai & Noida data centers" },
    { icon: HardDrive, title: "10GB SSD Storage", description: "Fast NVMe SSD storage" },
    { icon: Users, title: "Unlimited Players", description: "No player limit restrictions" },
    { icon: Settings, title: "Full Control Panel", description: "Easy server management" },
    { icon: Download, title: "Auto Backups", description: "Daily automatic backups" },
    { icon: Gamepad2, title: "Unlimited Plugins", description: "Install any plugins you want" },
    { icon: Globe, title: "Java & Bedrock", description: "Support for both editions" },
    { icon: Wifi, title: "99.9% Uptime", description: "Reliable server availability" },
    { icon: Clock, title: "24/7 Monitoring", description: "Continuous server monitoring" },
    { icon: Server, title: "Unlimited Mods", description: "No mod installation limits" }
  ];

  const comparisonPlans = [
    {
      name: "Free Plan",
      price: "FREE",
      period: "",
      popular: false,
      note: "Truly free",
      features: [
        "16GB RAM",
        "400% CPU",
        "10GB SSD Storage",
        "Unlimited Players",
        "No DDoS Protection",
        "Auto Backups",
        "Unlimited Plugins",
        "Unlimited Mods",
        "Community Support"
      ]
    },
    {
      name: "Budget Noob Plan",
      price: "₹45",
      period: "/month",
      popular: true,
      series: "Budget Series",
      purchaseLink: "https://billing.xitenodes.com/store/minecraft-budget-plans/noob-plan",
      features: [
        "2GB RAM",
        "100% CPU",
        "Intel Xeon v2",
        "20GB SSD Storage",
        "Unlimited Players",
        "Basic DDoS Protection",
        "Daily Backups",
        "Unlimited Plugins",
        "Unlimited Mods",
        "Email Support",
        "Custom Server JAR"
      ]
    },
    {
      name: "High Performance Normal",
      price: "₹529",
      period: "/month",
      popular: false,
      series: "High Performance Series",
      purchaseLink: "https://billing.xitenodes.com/store/high-performance-servers/normal-plan",
      features: [
        "6GB RAM",
        "250% CPU",
        "50GB NVMe SSD",
        "AMD EPYC 7763 / AMD Ryzen 5 9600",
        "Unlimited Players",
        "Advanced DDoS Protection",
        "Real-time Backups",
        "Unlimited Plugins",
        "Unlimited Mods",
        "24/7 Priority Support",
        "Multiple Databases",
        "FTP Access",
        "White-label Option"
      ]
    }
  ];

  const handleSignUp = () => {
    setIsSigningUp(true);
    // Redirect to the billing URL for free server
    setTimeout(() => {
      window.open('https://panel.xitenodes.xyz/', '_blank');
      setIsSigningUp(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      <Helmet>
        <title>Free Minecraft Hosting - 16GB RAM, 400% CPU | XiteNodes</title>
        <meta name="description" content="Get truly free Minecraft hosting with 16GB RAM and 400% CPU power. No credit card required. No charges at all. Perfect for small communities. Start your free server instantly!" />
        <meta name="keywords" content="Free Minecraft Hosting, Free Minecraft Server, India Minecraft Hosting, XiteNodes Free Plan" />
        <meta property="og:title" content="Free Minecraft Hosting - 16GB RAM, 400% CPU | XiteNodes" />
        <meta property="og:description" content="Get truly free Minecraft hosting with 16GB RAM and 400% CPU power. No credit card required. No charges at all. Perfect for small communities. Start your free server instantly!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.xitenodes.com/free-minecraft-hosting" />
      </Helmet>

      <AnimatedParticles count={30} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full px-6 py-3 mb-6">
              <Gift className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-400 font-semibold">100% TRULY FREE - NO CHARGES</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-300 bg-clip-text text-transparent">
                Free Minecraft
              </span>
              <br />
              <span className="text-white">Hosting</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Start your Minecraft journey with our truly free hosting plan.
              <span className="text-green-400 font-semibold"> 16GB RAM, 400% CPU power, unlimited players and plugins</span> -
              completely free with no hidden charges.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button
                onClick={handleSignUp}
                disabled={isSigningUp}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isSigningUp ? (
                  <>
                    <RotateCcw className="w-6 h-6 mr-2 animate-spin" />
                    Creating Your Server...
                  </>
                ) : (
                  <>
                    <Rocket className="w-6 h-6 mr-2" />
                    Get Your Free Server Now
                  </>
                )}
              </Button>

              <div className="flex items-center text-gray-400">
                <Check className="w-5 h-5 text-green-400 mr-2" />
                <span>No credit card required</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">16GB</div>
                <div className="text-gray-400">DDR4 RAM</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">400%</div>
                <div className="text-gray-400">CPU Power</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">∞</div>
                <div className="text-gray-400">Players</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">∞</div>
                <div className="text-gray-400">Plugins</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything You Need to Start
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our free plan includes all the essential features to run your Minecraft server successfully
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freeFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/80 transition-all duration-300 hover:border-green-500/30"
              >
                <div className="flex items-start">
                  <div className="p-3 bg-green-500/20 rounded-lg mr-4 flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Server Mockup */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Professional Server Management
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get access to our intuitive control panel with all the tools you need to manage your Minecraft server effectively.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">One-click server start/stop/restart</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Real-time performance monitoring</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">File manager with FTP access</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Automatic backup management</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Plugin installation & management</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700/50 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-sm">XiteNodes Control Panel</div>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">Server Status</span>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-green-400 text-sm">Online</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <Play className="w-4 h-4 mr-1" />
                        Start
                      </Button>
                      <Button size="sm" variant="outline">
                        <Pause className="w-4 h-4 mr-1" />
                        Stop
                      </Button>
                      <Button size="sm" variant="outline">
                        <RotateCcw className="w-4 h-4 mr-1" />
                        Restart
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <div className="text-gray-400 text-sm">Players Online</div>
                      <div className="text-white font-semibold">8/20</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <div className="text-gray-400 text-sm">RAM Usage</div>
                      <div className="text-white font-semibold">6.2/16 GB</div>
                    </div>
                  </div>

                  <div className="bg-slate-700/50 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">CPU Usage</span>
                      <span className="text-white text-sm">67%</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2 mt-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: '67%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Start Free, Upgrade When Ready
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Begin with our free plan and seamlessly upgrade as your community grows
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {comparisonPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-slate-800/60 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${plan.popular
                  ? 'border-purple-500/50 shadow-purple-500/20 shadow-2xl'
                  : index === 0
                    ? 'border-green-500/50 shadow-green-500/20 shadow-2xl'
                    : 'border-slate-700/50'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-500 text-white font-bold px-4 py-2 rounded-full text-sm flex items-center">
                      <Crown className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                {index === 0 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-500 text-black font-bold px-4 py-2 rounded-full text-sm flex items-center">
                      <Gift className="w-4 h-4 mr-1" />
                      Free Forever
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-1">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {index === 0 ? (
                  <Button
                    onClick={handleSignUp}
                    className="w-full py-3 font-semibold transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
                  >
                    Get Started Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={() => window.open(plan.purchaseLink, '_blank')}
                    className={`w-full py-3 font-semibold transition-all duration-300 ${plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                      }`}
                  >
                    Upgrade Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about our free Minecraft hosting
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Is it really 100% free?</h3>
              <p className="text-gray-300">Yes! Our free plan is truly free with absolutely no charges. We believe everyone should have access to quality Minecraft hosting, and we sustain the free tier through our premium plans.</p>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Is there really no player limit?</h3>
              <p className="text-gray-300">Correct! Unlike most free hosting services, we don't impose player limits. Your server performance will depend on your server optimization and the 16GB RAM allocation.</p>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Can I install unlimited plugins and mods?</h3>
              <p className="text-gray-300">Absolutely! There are no restrictions on plugin or mod installations. You have full control over your server configuration, just like our premium plans.</p>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Do I get DDoS protection on the free plan?</h3>
              <p className="text-gray-300">No, the free plan doesn't include DDoS protection. For DDoS protection, you can upgrade to our Budget Starter plan (₹199/month) or higher plans.</p>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">How do I upgrade to Budget or High Performance series?</h3>
              <p className="text-gray-300">Upgrading is seamless! From your control panel, you can upgrade to Budget Starter (₹199/month) or High Performance Pro (₹599/month) without losing any data.</p>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">What support do I get with the free plan?</h3>
              <p className="text-gray-300">Free plan users receive community support through forums and documentation. For priority email and 24/7 support, consider upgrading to our paid plans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of players who have already started their Minecraft servers with XiteNodes.
              Your free server is just one click away!
            </p>

            <Button
              onClick={handleSignUp}
              disabled={isSigningUp}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-10 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {isSigningUp ? (
                <>
                  <RotateCcw className="w-6 h-6 mr-2 animate-spin" />
                  Setting Up Your Server...
                </>
              ) : (
                <>
                  <Rocket className="w-6 h-6 mr-2" />
                  Create Your Free Server
                </>
              )}
            </Button>

            <div className="flex items-center justify-center mt-6 text-gray-400">
              <HeartHandshake className="w-5 h-5 mr-2" />
              <span>Trusted by 10,000+ Minecraft communities</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeMinecraftHostingPage;
