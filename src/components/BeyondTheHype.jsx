import React from 'react';
import { Zap, Shield, Clock, DollarSign, Network, Server, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

const BeyondTheHype = () => {
  const comparisonData = [
    {
      feature: 'Ping to India',
      Others: { value: '80-200ms', status: 'bad', note: 'Singapore/US Servers' },
      xite: { value: '<25ms', status: 'good', note: 'Mumbai & Kolkata' }
    },
    {
      feature: 'DDoS Protection',
      Others: { value: 'Standard', status: 'warning', note: 'Generic filtering' },
      xite: { value: 'Game-Specific', status: 'good', note: 'MC protocol aware' }
    },
    {
      feature: 'Uptime SLA',
      Others: { value: 'Variable', status: 'bad', note: 'No guarantees' },
      xite: { value: '99.9%', status: 'good', note: 'Contractual SLA' }
    },
    {
      feature: 'Resource Model',
      Others: { value: 'Oversold', status: 'bad', note: 'Noisy neighbors' },
      xite: { value: 'Dedicated', status: 'good', note: 'Guaranteed resources' }
    },
    {
      feature: 'Value for ₹',
      Others: { value: 'Standard', status: 'warning', note: 'Pay for brand' },
      xite: { value: 'Best-in-Class', status: 'good', note: 'Pay for performance' }
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'good':
        return <CheckCircle2 className="w-5 h-5 text-green-400" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'bad':
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23818cf8' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-4 py-2 rounded-full text-sm mb-4 animate-pulse">
            ⚠️ THE TRUTH ABOUT "RYZEN HOSTING"
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Beyond the Hype:
            </span>
            <br />
            <span className="text-white">Engineered for Minecraft</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't pay for marketing buzzwords. Pay for what actually matters:
            <span className="text-orange-400 font-semibold"> raw, measurable performance</span>
            where your players are.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">

          {/* Ping vs Processor Reality */}
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-orange-500/20 rounded-xl mr-4">
                <Network className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">The "Ping vs. Processor" Reality</h3>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Here's what other hosts won't tell you: <span className="text-orange-400 font-semibold">a Ryzen 9 7950X is useless if the server is in Germany</span> and your players are in Delhi.
            </p>

            <div className="space-y-4">
              <div className="flex items-start p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                <XCircle className="w-6 h-6 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">The Overseas Ryzen Problem</h4>
                  <p className="text-gray-400 text-sm">150ms+ ping means block lag, hit registration delays, and frustrated players—regardless of CPU speed.</p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">The XiteNodes Advantage</h4>
                  <p className="text-gray-400 text-sm">
                    <span className="text-green-400 font-semibold">Low-latency peering in Mumbai & Kolkata</span> means &lt;25ms ping for 90% of Indian players. That's the difference between "smooth" and "unplayable."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Efficiency */}
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-500/20 rounded-xl mr-4">
                <Server className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Architecture Over Marketing</h3>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Our infrastructure—whether ARM or Enterprise Intel—is <span className="text-purple-400 font-semibold">optimized for stability, not spec sheets</span>.
            </p>

            <div className="space-y-4">
              <div className="flex items-start p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">"Ryzen" ≠ Performance Guarantee</h4>
                  <p className="text-gray-400 text-sm">Oversold nodes = 50 servers fighting for the same CPU. Your "Ryzen" allocation? It's shared with noisy neighbors running crypto miners.</p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Dedicated Resources, Zero Compromise</h4>
                  <p className="text-gray-400 text-sm">
                    Every XiteNodes server gets <span className="text-green-400 font-semibold">guaranteed, isolated resources</span>. Your RAM is YOUR RAM. Your CPU cores don't disappear at peak hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
              <p className="text-center text-lg font-semibold text-white">
                💡 Don't pay for hype. <span className="text-purple-400">Pay for raw performance.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
            The Real Comparison: <span className="text-orange-400">Ryzen Abroad</span> vs. <span className="text-green-400">XiteNodes India</span>
          </h3>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-4 text-gray-400 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4">
                    <div className="bg-red-500/10 rounded-lg px-4 py-2 border border-red-500/20">
                      <span className="text-red-400 font-bold">Standard "Ryzen" Host</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="bg-green-500/10 rounded-lg px-4 py-2 border border-green-500/20">
                      <span className="text-green-400 font-bold">XiteNodes India</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                    <td className="py-5 px-4">
                      <span className="text-white font-semibold">{row.feature}</span>
                    </td>
                    <td className="py-5 px-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {getStatusIcon(row.Others.status)}
                        <div>
                          <span className={`font-semibold ${row.Others.status === 'good' ? 'text-green-400' : row.Others.status === 'warning' ? 'text-yellow-400' : 'text-red-400'}`}>
                            {row.Others.value}
                          </span>
                          <p className="text-gray-500 text-xs mt-1">{row.Others.note}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-5 px-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {getStatusIcon(row.xite.status)}
                        <div>
                          <span className={`font-semibold ${row.xite.status === 'good' ? 'text-green-400' : row.xite.status === 'warning' ? 'text-yellow-400' : 'text-red-400'}`}>
                            {row.xite.value}
                          </span>
                          <p className="text-gray-500 text-xs mt-1">{row.xite.note}</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {comparisonData.map((row, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                <h4 className="text-white font-bold mb-3">{row.feature}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-500/10 rounded-lg p-3 border border-red-500/20">
                    <p className="text-gray-400 text-xs mb-1">Others</p>
                    <div className="flex items-center gap-1">
                      {getStatusIcon(row.Others.status)}
                      <span className={`font-semibold text-sm ${row.Others.status === 'good' ? 'text-green-400' : row.Others.status === 'warning' ? 'text-yellow-400' : 'text-red-400'}`}>
                        {row.Others.value}
                      </span>
                    </div>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                    <p className="text-gray-400 text-xs mb-1">XiteNodes</p>
                    <div className="flex items-center gap-1">
                      {getStatusIcon(row.xite.status)}
                      <span className="font-semibold text-sm text-green-400">{row.xite.value}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6 text-lg">
            Stop paying premium for overseas servers with flashy specs.
            <span className="text-white font-semibold"> Choose infrastructure built for Indian gamers.</span>
          </p>
          <a
            href="/game-servers"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/25"
          >
            <Zap className="w-5 h-5" />
            See Real Performance Plans
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeyondTheHype;
