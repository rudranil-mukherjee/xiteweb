import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Copy, Check, Sparkles, Zap } from 'lucide-react';

const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [discount, setDiscount] = useState(20);

  const promoCode = 'NEWUSER31';

  useEffect(() => {
    // Generate random discount between 15 and 31
    const randomDiscount = Math.floor(Math.random() * (31 - 15 + 1)) + 15;
    setDiscount(randomDiscount);

    const timer = setTimeout(() => setIsOpen(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText(promoCode)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      })
      .catch(err => console.error('Failed to copy: ', err));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md p-6 md:p-8 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden">
        {/* New user gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-purple-400/10 to-indigo-400/15 pointer-events-none"></div>

        {/* Bokeh orbs */}
        <div className="absolute -top-20 -right-12 w-40 h-40 rounded-full blur-2xl" style={{ background: 'rgba(59, 130, 246, 0.25)' }} />
        <div className="absolute -bottom-20 -left-12 w-44 h-44 rounded-full blur-2xl" style={{ background: 'rgba(139, 92, 246, 0.2)' }} />
        <div className="absolute top-1/2 right-0 w-32 h-32 rounded-full blur-2xl" style={{ background: 'rgba(79, 70, 229, 0.15)' }} />

        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 text-gray-400 hover:text-white z-20"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Header */}
        <div className="relative z-10 text-center mb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/90">
            <Zap className="h-4 w-4 text-blue-400" />
            <span className="text-sm uppercase tracking-wide">Welcome Offer</span>
            <Sparkles className="h-4 w-4 text-yellow-300" />
          </div>
          <h3 className="mt-3 text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            Welcome to XiteNodes! 🚀
          </h3>
          <p className="mt-2 text-gray-300">
            Start your hosting journey with a special discount!
          </p>
        </div>

        {/* Offer Card */}
        <div className="relative z-10 rounded-xl border border-white/10 bg-white/5 p-5 md:p-6 overflow-hidden">
          <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full blur-2xl opacity-50 bg-gradient-to-br from-blue-500 to-indigo-500" />

          <div className="text-center">
            <p className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              {discount}% OFF
            </p>
            <p className="text-lg md:text-xl text-white font-semibold mt-2">
              On Your First Order
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Limited time offer for <span className="text-blue-400 font-medium">New Users</span>
            </p>
          </div>

          {/* Code pill */}
          <div className="mt-4 flex items-stretch justify-center rounded-md overflow-hidden border border-white/15 max-w-xs mx-auto">
            <div className="px-3 py-2.5 text-white/90 text-xs md:text-sm font-mono bg-blue-500/20">
              Code
            </div>
            <div className="px-4 py-2.5 bg-white/10 text-white font-mono text-sm md:text-base font-bold tracking-wider">
              {promoCode}
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="px-3 py-2.5 hover:bg-white/10 text-white bg-indigo-500/20"
              onClick={copyCode}
            >
              {copied ? (
                <span className="inline-flex items-center gap-1"><Check className="h-4 w-4 text-green-300" /> Copied</span>
              ) : (
                <span className="inline-flex items-center gap-1"><Copy className="h-4 w-4" /> Copy</span>
              )}
            </Button>
          </div>
        </div>

        {/* Footer */}
        <p className="relative z-10 mt-4 text-xs text-gray-400 text-center">
          Valid on all server products for new customers.
        </p>
      </div>
    </div>
  );
};

export default PromoPopup;
