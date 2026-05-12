import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ArrowRight, CheckCircle, Shield, Zap, Server, Globe, Headphones, Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedParticles from '@/components/AnimatedParticles';
import GenericHero from '@/components/GenericHero';
import PlaceholderPage from '@/pages/PlaceholderPage';
import { seoPageMap } from '@/data/seoLandingPageData';

const featureIcons = [Shield, Zap, Server, Globe, Headphones, Star];

// ── FAQ Accordion Item ──────────────────────────────────────────────────
const FaqItem = ({ question, answer, isOpen, onToggle }) => (
    <div className="border border-slate-700/50 rounded-xl overflow-hidden mb-3 bg-slate-800/40 backdrop-blur-sm">
        <button
            onClick={onToggle}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-700/30 transition-colors"
        >
            <span className="font-semibold text-gray-200 pr-4">{question}</span>
            {isOpen ? (
                <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
            ) : (
                <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
            )}
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                >
                    <p className="px-5 pb-5 text-gray-400 leading-relaxed">{answer}</p>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

// ── Comparison Table (for vs pages) ─────────────────────────────────────
const ComparisonTable = ({ data }) => (
    <div className="overflow-x-auto">
        <table className="w-full border-collapse">
            <thead>
                <tr>
                    <th className="text-left p-4 bg-slate-800/60 text-gray-300 font-semibold rounded-tl-xl">Feature</th>
                    <th className="text-center p-4 bg-purple-900/30 text-purple-400 font-bold">XiteNodes</th>
                    <th className="text-center p-4 bg-slate-800/60 text-gray-400 font-semibold rounded-tr-xl">{data.competitor}</th>
                </tr>
            </thead>
            <tbody>
                {data.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-slate-800/20' : 'bg-slate-800/40'}>
                        <td className="p-4 text-gray-300 font-medium">{row.feature}</td>
                        <td className="p-4 text-center text-green-400">{row.xitenodes}</td>
                        <td className="p-4 text-center text-gray-400">{row.competitor}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

// ── Color scheme mapping ────────────────────────────────────────────────
const colorSchemes = {
    purple: { title: 'text-purple-400', button: 'from-purple-500 to-blue-600', featureIcon: 'text-purple-400', accent: 'purple' },
    green: { title: 'text-green-400', button: 'from-green-500 to-emerald-600', featureIcon: 'text-green-400', accent: 'green' },
    blue: { title: 'text-blue-400', button: 'from-blue-500 to-indigo-600', featureIcon: 'text-blue-400', accent: 'blue' },
    red: { title: 'text-red-400', button: 'from-red-500 to-rose-600', featureIcon: 'text-red-400', accent: 'red' },
    amber: { title: 'text-amber-400', button: 'from-amber-500 to-orange-600', featureIcon: 'text-amber-400', accent: 'amber' },
    orange: { title: 'text-orange-400', button: 'from-orange-500 to-red-600', featureIcon: 'text-orange-400', accent: 'orange' },
    cyan: { title: 'text-cyan-400', button: 'from-cyan-500 to-blue-600', featureIcon: 'text-cyan-400', accent: 'cyan' },
    teal: { title: 'text-teal-400', button: 'from-teal-500 to-green-600', featureIcon: 'text-teal-400', accent: 'teal' },
    yellow: { title: 'text-yellow-400', button: 'from-yellow-500 to-amber-600', featureIcon: 'text-yellow-400', accent: 'yellow' },
    pink: { title: 'text-pink-400', button: 'from-pink-500 to-rose-600', featureIcon: 'text-pink-400', accent: 'pink' },
    gray: { title: 'text-gray-400', button: 'from-gray-500 to-slate-600', featureIcon: 'text-gray-400', accent: 'gray' },
};

// ── Main Component ──────────────────────────────────────────────────────
const SeoLandingPage = () => {
    const { slug } = useParams();
    const pageData = seoPageMap[slug];
    const [openFaq, setOpenFaq] = useState(null);

    // If slug doesn't exist in our data, show the 404 page
    if (!pageData) {
        return <PlaceholderPage title="Page Not Found" />;
    }

    const colors = colorSchemes[pageData.colorScheme] || colorSchemes.purple;

    const heroData = {
        title: pageData.h1,
        description: pageData.heroDescription,
        image: pageData.heroImage,
        browseLink: pageData.ctaLink,
        browseButtonText: pageData.ctaText,
        HeroIcon: ArrowRight,
        colorScheme: colors,
    };

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': pageData.category === 'comparison' ? 'WebPage' : 'Product',
        name: pageData.h1,
        description: pageData.metaDescription,
        url: `https://xitenodes.com/${pageData.slug}`,
        ...(pageData.category !== 'comparison' && {
            offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'INR',
                lowPrice: '40',
                highPrice: '28000',
                availability: 'https://schema.org/InStock',
            },
        }),
        provider: {
            '@type': 'Organization',
            name: 'XiteNodes',
            url: 'https://xitenodes.com',
        },
    };

    const faqStructuredData = pageData.faqs ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: pageData.faqs.map(faq => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
            },
        })),
    } : null;

    return (
        <div className="min-h-screen pb-16 relative overflow-hidden">
            <Helmet>
                <title>{pageData.title}</title>
                <meta name="description" content={pageData.metaDescription} />
                <link rel="canonical" href={`https://xitenodes.com/${pageData.slug}`} />
                <meta property="og:title" content={pageData.title} />
                <meta property="og:description" content={pageData.metaDescription} />
                <meta property="og:url" content={`https://xitenodes.com/${pageData.slug}`} />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
                {faqStructuredData && (
                    <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
                )}
            </Helmet>

            <AnimatedParticles count={25} />
            <GenericHero {...heroData} />

            {/* Features Section */}
            <section className="container mx-auto px-6 py-16 relative z-10">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-title-font">
                        Why Choose <span className={colors.title}>XiteNodes</span>?
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        India's most trusted hosting provider with enterprise-grade infrastructure and unmatched support.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {pageData.features.map((feature, index) => {
                        const IconComponent = featureIcons[index % featureIcons.length];
                        return (
                            <motion.div
                                key={index}
                                className="flex items-start gap-4 p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                            >
                                <div className={`p-2 rounded-lg bg-${colors.accent}-500/10 flex-shrink-0`}>
                                    <IconComponent className={`w-5 h-5 ${colors.featureIcon}`} />
                                </div>
                                <div>
                                    <p className="text-gray-200 font-medium">{feature}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Comparison Table (for vs pages) */}
            {pageData.comparisonData && (
                <section className="container mx-auto px-6 py-12 relative z-10">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center hero-title-font">
                            XiteNodes vs <span className={colors.title}>{pageData.comparisonData.competitor}</span>
                        </h2>
                        <div className="rounded-xl overflow-hidden border border-slate-700/50">
                            <ComparisonTable data={pageData.comparisonData} />
                        </div>
                    </motion.div>
                </section>
            )}

            {/* CTA Section */}
            <section className="container mx-auto px-6 py-12 relative z-10">
                <motion.div
                    className="max-w-3xl mx-auto text-center p-8 md:p-12 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-title-font">
                        Ready to <span className={colors.title}>Get Started</span>?
                    </h2>
                    <p className="text-gray-400 mb-8 text-lg">
                        Join thousands of Indian gamers and developers who trust XiteNodes for their hosting needs.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button
                            onClick={() => {
                                if (pageData.ctaLink.startsWith('/')) {
                                    window.location.href = pageData.ctaLink;
                                } else {
                                    window.open(pageData.ctaLink, '_blank');
                                }
                            }}
                            className={`bg-gradient-to-r ${colors.button} hover:brightness-110 text-white px-8 py-3 text-lg glow-effect-subtle`}
                        >
                            {pageData.ctaText} <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Link to="/contact-sales">
                            <Button variant="outline" className="border-slate-600 text-gray-300 hover:bg-slate-700/50 px-8 py-3 text-lg">
                                Contact Sales
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* FAQ Section */}
            {pageData.faqs && pageData.faqs.length > 0 && (
                <section className="container mx-auto px-6 py-12 relative z-10">
                    <motion.div
                        className="max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center hero-title-font">
                            Frequently Asked <span className={colors.title}>Questions</span>
                        </h2>
                        {pageData.faqs.map((faq, index) => (
                            <FaqItem
                                key={index}
                                question={faq.q}
                                answer={faq.a}
                                isOpen={openFaq === index}
                                onToggle={() => setOpenFaq(openFaq === index ? null : index)}
                            />
                        ))}
                    </motion.div>
                </section>
            )}

            {/* Related Pages / Internal Links */}
            {pageData.relatedPages && pageData.relatedPages.length > 0 && (
                <section className="container mx-auto px-6 py-12 relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-xl font-semibold text-gray-300 mb-4">Related Pages</h3>
                        <div className="flex flex-wrap gap-3">
                            {pageData.relatedPages.map((rp, i) => (
                                <Link
                                    key={i}
                                    to={rp.path}
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-gray-300 hover:text-purple-400 hover:border-purple-500/30 transition-all duration-200"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    {rp.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default SeoLandingPage;
