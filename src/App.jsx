import React, { useState, useEffect } from 'react';
import Intercom from '@intercom/messenger-js-sdk';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import HomePage from '@/pages/HomePage';
import Footer from '@/components/Footer';
import ScrollIndicator from '@/components/ScrollIndicator';
import CookieConsent from '@/components/CookieConsent';
import BackToTopButton from '@/components/BackToTopButton';
import { Toaster } from '@/components/ui/toaster';
import PromoPopup from '@/components/PromoPopup';
import PlaceholderPage from '@/pages/PlaceholderPage';
import ContactSalesPage from '@/pages/ContactSalesPage';
import TermsOfServicePage from '@/pages/TermsOfServicePage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import RefundPolicyPage from '@/pages/RefundPolicyPage';
import SLAPage from '@/pages/SLAPage';
import ResellerTosPage from '@/pages/ResellerTosPage';
import DataDeletionPage from '@/pages/DataDeletionPage';

import GameServersLandingPage from '@/pages/GameServersLandingPage';
import GameServersCategoryPage from '@/pages/GameServersCategoryPage';
import GameUsageCalculatorPage from '@/pages/GameUsageCalculatorPage';
import WebHostingPage from '@/pages/WebHostingPage';
import ResellerWebHostingPage from '@/pages/ResellerWebHostingPage';
import AboutUsPage from '@/pages/AboutUsPage';
import InfrastructurePage from '@/pages/InfrastructurePage';
import VpsHostingPage from '@/pages/VpsHostingPage';
import VdsHostingPage from '@/pages/VdsHostingPage';
import DedicatedServersPage from '@/pages/DedicatedServersPage';
import FlashSalesPage from '@/pages/FlashSalesPage';
import DdosProtectionLandingPage from '@/pages/DdosProtectionLandingPage';
import DdosProtectionCategoryPage from '@/pages/DdosProtectionCategoryPage';
import IpPoolsPage from '@/pages/IpPoolsPage';
import DatacenterPage from '@/pages/DatacenterPage';
import CloudBotHostingPage from '@/pages/CloudBotHostingPage';
import CloudGamingPage from '@/pages/CloudGamingPage';
import GameDevelopmentCloudPage from '@/pages/GameDevelopmentCloudPage';
import MinecraftHostingIndiaPage from '@/pages/MinecraftHostingIndiaPage';
import CompetitorComparisonPage from '@/pages/CompetitorComparisonPage';
import LordCloudComparisonPage from '@/pages/LordCloudComparisonPage';
import Top10HostingsPage from '@/pages/Top10HostingsPage';
import FreeMinecraftHostingPage from '@/pages/FreeMinecraftHostingPage';
import LoginRedirect from '@/pages/LoginRedirect';

import MinecraftHostingGlobalPage from '@/pages/MinecraftHostingGlobalPage';
import MinecraftHostingBudgetPage from '@/pages/MinecraftHostingBudgetPage';
import VpsIndiaPage from '@/pages/VpsIndiaPage';
import VpsCheapPage from '@/pages/VpsCheapPage';
import BlogBestMinecraft2026 from '@/pages/blog/BlogBestMinecraft2026';
import BlogBestVps2026 from '@/pages/blog/BlogBestVps2026';
import BlogAffordableVps2026 from '@/pages/blog/BlogAffordableVps2026';
import BlogAffordableMinecraft2026 from '@/pages/blog/BlogAffordableMinecraft2026';

import BlogListingPage from '@/pages/BlogListingPage';
// Benchmark Replications
import BlogEpycVpsBenchmarks from '@/pages/blog/BlogEpycVpsBenchmarks';
import BlogBudgetVpsDocker from '@/pages/blog/BlogBudgetVpsDocker';
import BlogUnmeteredBandwidth from '@/pages/blog/BlogUnmeteredBandwidth';
// Hytale Replications
import BlogHytaleGuide from '@/pages/blog/BlogHytaleGuide';
import BlogHytaleItems from '@/pages/blog/BlogHytaleItems';
import BlogHytaleHosting from '@/pages/blog/BlogHytaleHosting';
// Minecraft Replications
import BlogModdedMinecraftGuide from '@/pages/blog/BlogModdedMinecraftGuide';
import BlogMinecraftCommands from '@/pages/blog/BlogMinecraftCommands';
import BlogCrackedMinecraft from '@/pages/blog/BlogCrackedMinecraft';

// New Game Content
import BlogPalworldTrend from '@/pages/blog/BlogPalworldTrend';
import BlogPalworldMods from '@/pages/blog/BlogPalworldMods';
import BlogEnshroudedGuide from '@/pages/blog/BlogEnshroudedGuide';
import BlogServerSecurity from '@/pages/blog/BlogServerSecurity';

// New Minecraft Hosting Articles
import BlogFreeHostingLimits from '@/pages/blog/BlogFreeHostingLimits';
import BlogModpackHosting from '@/pages/blog/BlogModpackHosting';
import BlogHostingIndiaReviews from '@/pages/blog/BlogHostingIndiaReviews';
import BlogLargePlayerHosting from '@/pages/blog/BlogLargePlayerHosting';

// VPS Core Topic Articles
import BlogKvmVsOpenvz from '@/pages/blog/BlogKvmVsOpenvz';
import BlogManagedVsUnmanaged from '@/pages/blog/BlogManagedVsUnmanaged';
import BlogVpsScalability from '@/pages/blog/BlogVpsScalability';
import BlogVpsEcommerce from '@/pages/blog/BlogVpsEcommerce';
import BlogVpsSecurity from '@/pages/blog/BlogVpsSecurity';
import BlogVpsPerformance from '@/pages/blog/BlogVpsPerformance';
import BlogVpsMigration from '@/pages/blog/BlogVpsMigration';
import BlogSharedToVps from '@/pages/blog/BlogSharedToVps';
import BlogVpsDisasterRecovery from '@/pages/blog/BlogVpsDisasterRecovery';

// Budget VPS Articles
import BlogCheapVpsHiddenCosts from '@/pages/blog/BlogCheapVpsHiddenCosts';
import BlogBestValueVps from '@/pages/blog/BlogBestValueVps';
import BlogBudgetVpsFeatures from '@/pages/blog/BlogBudgetVpsFeatures';
import BlogCloudVsTraditionalVps from '@/pages/blog/BlogCloudVsTraditionalVps';
import BlogCheapVpsOptimization from '@/pages/blog/BlogCheapVpsOptimization';

// IRCTC VPS Articles
import BlogIrctcIndianIp from '@/pages/blog/BlogIrctcIndianIp';
import BlogIrctcTatkalSpeed from '@/pages/blog/BlogIrctcTatkalSpeed';
import BlogIrctcWindowsSetup from '@/pages/blog/BlogIrctcWindowsSetup';
import BlogIrctcDedicatedIp from '@/pages/blog/BlogIrctcDedicatedIp';
import BlogIrctcVpsSecurity from '@/pages/blog/BlogIrctcVpsSecurity';
import BlogIrctcTroubleshooting from '@/pages/blog/BlogIrctcTroubleshooting';
import BlogIrctcDatacenter from '@/pages/blog/BlogIrctcDatacenter';
import BlogIrctcVpsOtherUses from '@/pages/blog/BlogIrctcVpsOtherUses';

// Indian VPS Articles
import BlogIndianVpsAdvantages from '@/pages/blog/BlogIndianVpsAdvantages';
import BlogLinuxVsWindowsIndia from '@/pages/blog/BlogLinuxVsWindowsIndia';
import BlogManagedVsUnmanagedIndia from '@/pages/blog/BlogManagedVsUnmanagedIndia';
import BlogIndianVpsPayments from '@/pages/blog/BlogIndianVpsPayments';
import BlogIndianVpsPricing from '@/pages/blog/BlogIndianVpsPricing';
import BlogIndianVpsSuccessStories from '@/pages/blog/BlogIndianVpsSuccessStories';

// Dedicated Server Articles
import BlogDedicatedServerUses from '@/pages/blog/BlogDedicatedServerUses';

// Sitemap Page
import SitemapPage from '@/pages/SitemapPage';

// Dynamic SEO Landing Pages
import SeoLandingPage from '@/pages/SeoLandingPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  useEffect(() => {
    Intercom({
      app_id: 'ltdgk1fu',
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <ScrollIndicator />
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<Navigate to="/" replace />} />

              {/* Game Server Routes */}
              <Route path="/game-servers" element={<GameServersLandingPage />} />
              <Route path="/game-servers/:category" element={<GameServersCategoryPage />} />
              <Route path="/free-minecraft-hosting-india" element={<FreeMinecraftHostingPage />} />
              <Route path="/free-minecraft-hosting" element={<Navigate to="/free-minecraft-hosting-india" replace />} />
              <Route path="/minecraft-hosting-india" element={<MinecraftHostingIndiaPage />} />
              <Route path="/game-servers/usage-calculator" element={<GameUsageCalculatorPage />} />

              {/* VPS/Server Hosting Routes */}
              <Route path="/vps-hosting" element={<VpsHostingPage />} />
              <Route path="/vds-hosting" element={<VdsHostingPage />} />
              <Route path="/dedicated-servers" element={<DedicatedServersPage />} />
              <Route path="/flash-sales" element={<FlashSalesPage />} />

              {/* Cloud Services Routes */}
              <Route path="/cloud-bot-hosting" element={<CloudBotHostingPage />} />
              <Route path="/cloud-gaming" element={<CloudGamingPage />} />
              <Route path="/game-development-cloud" element={<GameDevelopmentCloudPage />} />

              {/* Infrastructure Routes */}
              <Route path="/ddos-protection" element={<DdosProtectionLandingPage />} />
              <Route path="/ddos-protection/:category" element={<DdosProtectionCategoryPage />} />
              <Route path="/ip-pools" element={<IpPoolsPage />} />
              <Route path="/datacenter-colocation" element={<DatacenterPage />} />
              <Route path="/infrastructure" element={<InfrastructurePage />} />

              {/* Web Hosting Routes */}
              <Route path="/web-hosting" element={<WebHostingPage />} />
              <Route path="/reseller-web-hosting" element={<ResellerWebHostingPage />} />

              {/* Company Pages */}
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/competitor-comparison" element={<CompetitorComparisonPage />} />
              <Route path="/lordcloud-comparison" element={<LordCloudComparisonPage />} />
              <Route path="/top-10-minecraft-hosting-india" element={<Top10HostingsPage />} />
              <Route path="/contact-sales" element={<ContactSalesPage />} />

              {/* Sitemap */}
              <Route path="/sitemap" element={<SitemapPage />} />

              {/* Legal Pages */}
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/refund-policy" element={<RefundPolicyPage />} />
              <Route path="/sla" element={<SLAPage />} />
              <Route path="/reseller-tos" element={<ResellerTosPage />} />
              <Route path="/data-deletion" element={<DataDeletionPage />} />

              {/* Auth Routes */}
              <Route path="/login-redirect" element={<LoginRedirect />} />



              {/* Dynamic SEO Landing Pages (keyword-targeted) */}
              <Route path="/:slug" element={<SeoLandingPage />} />

              {/* Catch-all route for 404 */}
              <Route path="*" element={<PlaceholderPage />} />

              {/* SEO Transactional Routes */}
              <Route path="/minecraft-hosting" element={<MinecraftHostingGlobalPage />} />
              <Route path="/budget-minecraft-hosting" element={<MinecraftHostingBudgetPage />} />
              <Route path="/vps-india" element={<VpsIndiaPage />} />
              <Route path="/cheap-vps" element={<VpsCheapPage />} />

              {/* SEO Blog Routes */}
              <Route path="/blog/best-minecraft-hosting-2026" element={<BlogBestMinecraft2026 />} />
              <Route path="/blog/best-indian-vps-2026" element={<BlogBestVps2026 />} />
              <Route path="/blog/affordable-vps-2026" element={<BlogAffordableVps2026 />} />
              <Route path="/blog/affordable-minecraft-hosting-2026" element={<BlogAffordableMinecraft2026 />} />

              {/* Competitor Blog Replication Routes */}
              <Route path="/blog" element={<BlogListingPage />} />

              <Route path="/blog/epyc-vps-india-benchmarks" element={<BlogEpycVpsBenchmarks />} />
              <Route path="/blog/budget-vps-docker-kubernetes" element={<BlogBudgetVpsDocker />} />
              <Route path="/blog/unmetered-bandwidth-vps-india" element={<BlogUnmeteredBandwidth />} />

              <Route path="/blog/hytale-beginners-guide-2026" element={<BlogHytaleGuide />} />
              <Route path="/blog/best-hytale-items-weapons-guide" element={<BlogHytaleItems />} />
              <Route path="/blog/hytale-server-hosting" element={<BlogHytaleHosting />} />

              <Route path="/blog/how-to-host-minecraft-modded-server-2026" element={<BlogModdedMinecraftGuide />} />
              <Route path="/blog/must-know-minecraft-server-commands-2026" element={<BlogMinecraftCommands />} />
              <Route path="/blog/is-cracked-minecraft-illegal" element={<BlogCrackedMinecraft />} />

              {/* New Game Content Routes */}
              <Route path="/blog/why-palworld-hosting-trending-2026" element={<BlogPalworldTrend />} />
              <Route path="/blog/top-5-palworld-mods-2026" element={<BlogPalworldMods />} />
              <Route path="/blog/setting-up-enshrouded-vps" element={<BlogEnshroudedGuide />} />
              <Route path="/blog/game-server-security-tips-2026" element={<BlogServerSecurity />} />

              {/* New Minecraft Hosting Articles */}
              <Route path="/blog/free-minecraft-hosting-247-limitations" element={<BlogFreeHostingLimits />} />
              <Route path="/blog/best-minecraft-hosting-modpacks" element={<BlogModpackHosting />} />
              <Route path="/blog/minecraft-hosting-india-reviews" element={<BlogHostingIndiaReviews />} />
              <Route path="/blog/minecraft-hosting-large-player-counts" element={<BlogLargePlayerHosting />} />

              {/* VPS Core Topic Articles */}
              <Route path="/blog/kvm-vs-openvz-vps-virtualization" element={<BlogKvmVsOpenvz />} />
              <Route path="/blog/managed-vs-unmanaged-vps-hosting" element={<BlogManagedVsUnmanaged />} />
              <Route path="/blog/vps-scalability-business-growth" element={<BlogVpsScalability />} />
              <Route path="/blog/vps-hosting-for-ecommerce" element={<BlogVpsEcommerce />} />
              <Route path="/blog/vps-security-features-protection" element={<BlogVpsSecurity />} />
              <Route path="/blog/vps-performance-cpu-ram-ssd" element={<BlogVpsPerformance />} />
              <Route path="/blog/migrate-website-to-vps-guide" element={<BlogVpsMigration />} />
              <Route path="/blog/shared-hosting-to-vps-upgrade" element={<BlogSharedToVps />} />
              <Route path="/blog/vps-disaster-recovery-backup" element={<BlogVpsDisasterRecovery />} />

              {/* Budget VPS Articles */}
              <Route path="/blog/cheap-vps-hidden-costs-exposed" element={<BlogCheapVpsHiddenCosts />} />
              <Route path="/blog/best-value-budget-vps-hosting" element={<BlogBestValueVps />} />
              <Route path="/blog/budget-vps-unexpected-features" element={<BlogBudgetVpsFeatures />} />
              <Route path="/blog/cloud-vs-traditional-vps-budget" element={<BlogCloudVsTraditionalVps />} />
              <Route path="/blog/optimize-cheap-vps-performance" element={<BlogCheapVpsOptimization />} />

              {/* IRCTC VPS Articles */}
              <Route path="/blog/irctc-vps-indian-ip-compliance" element={<BlogIrctcIndianIp />} />
              <Route path="/blog/irctc-tatkal-vps-speed-optimization" element={<BlogIrctcTatkalSpeed />} />
              <Route path="/blog/irctc-windows-vps-setup-autologin" element={<BlogIrctcWindowsSetup />} />
              <Route path="/blog/irctc-dedicated-ip-importance" element={<BlogIrctcDedicatedIp />} />
              <Route path="/blog/irctc-vps-security-tips" element={<BlogIrctcVpsSecurity />} />
              <Route path="/blog/irctc-vps-troubleshooting-errors" element={<BlogIrctcTroubleshooting />} />
              <Route path="/blog/irctc-vps-best-datacenter-india" element={<BlogIrctcDatacenter />} />
              <Route path="/blog/irctc-vps-alternative-uses" element={<BlogIrctcVpsOtherUses />} />

              {/* Indian VPS Articles */}
              <Route path="/blog/indian-vps-hosting-advantages" element={<BlogIndianVpsAdvantages />} />
              <Route path="/blog/linux-vs-windows-vps-india" element={<BlogLinuxVsWindowsIndia />} />
              <Route path="/blog/managed-vs-self-managed-vps-india" element={<BlogManagedVsUnmanagedIndia />} />
              <Route path="/blog/indian-vps-payment-methods" element={<BlogIndianVpsPayments />} />
              <Route path="/blog/indian-vps-tiered-pricing-explained" element={<BlogIndianVpsPricing />} />
              <Route path="/blog/indian-business-vps-success-stories" element={<BlogIndianVpsSuccessStories />} />

              {/* Dedicated Server Articles */}
              <Route path="/blog/dedicated-server-business-uses" element={<BlogDedicatedServerUses />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <BackToTopButton />
        <CookieConsent />
        <Toaster />
        <PromoPopup />
      </div>
    </Router>
  );
}

export default App;
