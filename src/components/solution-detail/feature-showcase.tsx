"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Bell, 
  Heart, 
  Share2, 
  MessageSquare, 
  Mail, 
  Zap,
  Users,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Package,
  TrendingUp,
  BarChart,
  Sofa,
  Lamp,
  Palette,
  Layout,
  Smartphone,
  Headphones,
  ShieldCheck,
  Watch,
  ShoppingBasket,
  Utensils,
  Apple,
  Milk,
  Shirt,
  ShoppingBag,
  Sparkles,
  Star,
  Stethoscope,
  Smile,
  HeartPulse,
  Gem,
  Crown,
  Gift,
  Calendar,
  Coffee,
  Pizza,
  Sandwich,
  Cake,
  ShoppingCart,
  MousePointer2,
  RefreshCcw,
  Target
} from "lucide-react";
import Container from "@/components/Container";
import { cn } from "@/lib/utils";

export type ShowcaseItem = {
  id: string;
  icon: any;
  title: string;
  description: string;
  visual: string;
};

const defaultShowcaseItems: ShowcaseItem[] = [
  {
    id: "product-intelligence",
    icon: BarChart,
    title: "Intelligent Product Demand & Performance",
    description: "Gain a competitive edge with AI that continuously tracks product demand and performance, ensuring you always stock what your customers are searching for next.",
    visual: "product-intelligence"
  },
  {
    id: "loyalty",
    icon: Heart,
    title: "Create Deeper Customer Loyalty Through Personalized Experiences",
    description: "Build lasting relationships by delivering tailored content and offers based on real-time customer behavior and preferences.",
    visual: "loyalty"
  },
  {
    id: "upsell",
    icon: Share2,
    title: "Unlock Upsell Opportunities With Cross-Channel Marketing",
    description: "Maximize revenue per customer by identifying perfect moments for upgrades and complementary products across all touchpoints.",
    visual: "upsell"
  }
];

export const FeatureShowcase = ({ items = defaultShowcaseItems, industry = "building-materials" }: { items?: ShowcaseItem[], industry?: string }) => {
  const [activeTab, setActiveTab] = useState(0);

  // Safe index for desktop view when accordion is closed on mobile
  const safeIndex = activeTab >= 0 ? activeTab : 0;

  const renderVisual = (index: number) => {
    if (industry === "home-furnishing") {
      return index === 0 ? <HomeFurnishingProductVisual /> : index === 1 ? <HomeFurnishingLoyaltyVisual /> : <HomeFurnishingUpsellVisual />;
    }
    if (industry === "electronics") {
      return index === 0 ? <ElectronicsProductVisual /> : index === 1 ? <ElectronicsLoyaltyVisual /> : <ElectronicsUpsellVisual />;
    }
    if (industry === "supermarket") {
      return index === 0 ? <SupermarketProductVisual /> : index === 1 ? <SupermarketLoyaltyVisual /> : <SupermarketUpsellVisual />;
    }
    if (industry === "fashion") {
      return index === 0 ? <FashionProductVisual /> : index === 1 ? <FashionLoyaltyVisual /> : <FashionUpsellVisual />;
    }
    if (industry === "beauty-health") {
      return index === 0 ? <BeautyHealthProductVisual /> : index === 1 ? <BeautyHealthLoyaltyVisual /> : <BeautyHealthUpsellVisual />;
    }
    if (industry === "jewelry") {
      return index === 0 ? <JewelryProductVisual /> : index === 1 ? <JewelryLoyaltyVisual /> : <JewelryUpsellVisual />;
    }
    if (industry === "fb-retail") {
      return index === 0 ? <FBRetailProductVisual /> : index === 1 ? <FBRetailLoyaltyVisual /> : <FBRetailUpsellVisual />;
    }
    if (industry === "ecommerce") {
      return index === 0 ? <EcommerceProductVisual /> : index === 1 ? <EcommerceLoyaltyVisual /> : <EcommerceUpsellVisual />;
    }
    return index === 0 ? <ProductVisual /> : index === 1 ? <LoyaltyVisual /> : <UpsellVisual />;
  };

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <Container>
        {/* Desktop View: Side-by-Side with Hover */}
        <div className="hidden lg:flex flex-row items-center gap-8">
          {/* Left Column: Tabs */}
          <div className="lg:w-[50%] w-full space-y-4 lg:pr-12">
            {items.map((item, index) => (
              <div
                key={item.id}
                onMouseEnter={() => setActiveTab(index)}
                className={cn(
                  "w-full text-left p-6 lg:p-8 rounded-2xl flex items-center gap-6 transition-all duration-700 relative group cursor-pointer",
                  activeTab === index 
                    ? "bg-white shadow-[0_20px_40px_-10px_rgba(9,53,140,0.1)] scale-[1.02] z-10" 
                    : "opacity-60 hover:opacity-100 hover:bg-white/50"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500",
                  activeTab === index ? "bg-[#09358c] text-white shadow-lg shadow-blue-500/20" : "bg-white text-slate-400 group-hover:bg-[#09358c]/10 group-hover:text-[#09358c]"
                )}>
                  <item.icon size={22} className={activeTab === index ? "fill-current" : ""} />
                </div>
                <span className={cn(
                  "text-[19px] lg:text-[22px] 2xl:text-[24px] font-black leading-tight transition-colors duration-500 tracking-tight font-semibold",
                  activeTab === index ? "text-slate-900" : "text-slate-500"
                )}>
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column: Visual & Content */}
          <div className="lg:w-[55%] w-full h-[650px] bg-white rounded-[3rem] p-12 lg:p-16 flex flex-col justify-center shadow-[0_20px_80px_-20px_rgba(0,0,0,0.04)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col h-full"
              >
                {/* Visual Area */}
                <div className="relative flex-1 w-full overflow-hidden flex items-center justify-center mb-12">
                   {renderVisual(safeIndex)}
                </div>

                {/* Text Content */}
                <div className="max-w-xl">
                  <h3 className="text-[22px] lg:text-[26px] xl:text-[32px] font-semibold font-black text-slate-900 mb-6 leading-tight tracking-tighter">
                    {items[safeIndex].title}
                  </h3>
                  <p className="text-lg text-slate-800 font-medium leading-relaxed font-black opacity-60">
                    {items[safeIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile View: Accordion (Click and Open) */}
        <div className="lg:hidden flex flex-col gap-4">
          <div className="text-center mb-10">
            <span className="text-xs font-black tracking-[0.3em] uppercase text-[#09358c] mb-4 block">PLATFORM FEATURES</span>
            <h2 className="text-3xl font-black text-slate-900 leading-tight">Everything you need <br/> to grow</h2>
          </div>
          
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={item.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
                <button
                  onClick={() => setActiveTab(activeTab === index ? -1 : index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500",
                      activeTab === index ? "bg-[#09358c] text-white" : "bg-slate-50 text-slate-400"
                    )}>
                      <item.icon size={20} />
                    </div>
                    <span className={cn(
                      "text-lg font-black leading-tight tracking-tight",
                      activeTab === index ? "text-[#09358c]" : "text-slate-900"
                    )}>
                      {item.title}
                    </span>
                  </div>
                  <ChevronDown className={cn(
                    "text-slate-400 transition-transform duration-300",
                    activeTab === index ? "rotate-180 text-[#09358c]" : ""
                  )} size={20} />
                </button>

                <AnimatePresence>
                  {activeTab === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-8 space-y-8">
                        {/* Visual Area (Responsive for mobile) */}
                        <div className="h-[350px] bg-slate-50 rounded-2xl overflow-hidden flex items-center justify-center relative">
                          <div className="scale-75 md:scale-90 transform origin-center w-full h-full">
                            {renderVisual(index)}
                          </div>
                        </div>
                        
                        {/* Description */}
                        <div className="space-y-4">
                          <p className="text-base text-slate-600 font-medium leading-relaxed">
                            {item.description}
                          </p>
                          <button className="flex items-center gap-2 text-[#09358c] font-black text-xs uppercase tracking-widest py-2 hover:translate-x-1 transition-transform">
                            Learn More <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

/* Visual Components (Keep them local to the file for now) */

const ProductVisual = () => (
  <div className="w-full h-full relative flex flex-col items-center justify-center">
    <div className="absolute top-0 px-5 py-2.5 bg-slate-900 rounded-full border border-white/10 shadow-2xl z-20 flex items-center gap-4">
      <div className="flex gap-1.5">
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-blue-500" />
      </div>
      <span className="text-[9px] font-black text-white uppercase tracking-[0.3em] whitespace-nowrap">Live Analysis: Product Demand</span>
    </div>

    <div className="relative w-full max-w-[400px] h-[300px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 flex flex-col">
       <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600"><BarChart size={20} /></div>
             <span className="text-base font-black text-slate-900 tracking-tight">Top Sellers</span>
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Real-time</span>
       </div>

       <div className="space-y-6 flex-1">
          {[
            { label: "Premium Tiles", val: 85, color: "bg-blue-600" },
            { label: "Sanitaryware", val: 62, color: "bg-blue-400" },
            { label: "Electricals", val: 45, color: "bg-slate-200" }
          ].map((item, i) => (
            <div key={i} className="space-y-2">
               <div className="flex justify-between text-[11px] font-black text-slate-600 uppercase tracking-wider">
                  <span>{item.label}</span>
                  <span>{item.val}% Velocity</span>
               </div>
               <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.val}%` }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                    className={cn("h-full rounded-full", item.color)} 
                  />
               </div>
            </div>
          ))}
       </div>

       <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-blue-500" />
             <span className="text-[10px] font-bold text-slate-500">Inventory Optimized</span>
          </div>
          <TrendingUp size={16} className="text-blue-600" />
       </div>
    </div>
  </div>
);

const LoyaltyVisual = () => (
    <div className="w-full h-full flex items-center justify-center">
       <div className="relative w-48 h-48 flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl" 
          />
          <div className="relative z-10 text-center flex flex-col items-center">
             <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-blue-600 mb-4">
                <Heart size={30} className="fill-current" />
             </div>
             <div className="px-3 py-1 bg-slate-900 rounded-full text-white text-[9px] font-black uppercase tracking-widest mb-2">Sarah J.</div>
             <div className="flex gap-1">
                {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />)}
             </div>
          </div>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-5 -right-10 p-3 bg-white rounded-xl shadow-lg border border-slate-100">
             <span className="text-[10px] font-black text-[#09358c]">20% OFF READY</span>
          </motion.div>
       </div>
    </div>
);

const UpsellVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6">
       <div className="flex items-center gap-3">
          <div className="w-24 h-14 rounded-xl bg-slate-100 border border-slate-200 p-3" />
          <ArrowRight className="text-slate-300" size={16} />
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="w-32 h-20 rounded-xl bg-blue-50 border border-[#05a0ec] p-4 relative shadow-lg"
          >
             <div className="w-full h-8 bg-white rounded shadow-sm border border-blue-100 flex items-center justify-center">
                <span className="text-[8px] font-black text-[#09358c]">UPGRADE</span>
             </div>
             <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg"><CheckCircle2 size={10} /></div>
          </motion.div>
       </div>
       <div className="flex gap-2">
          <div className="px-3 py-1 bg-white rounded-full border border-slate-100 shadow-sm text-[8px] font-black text-slate-400">Push</div>
          <div className="px-3 py-1 bg-white rounded-full border border-slate-100 shadow-sm text-[8px] font-black text-slate-400">Email</div>
       </div>
    </div>
);

const HomeFurnishingProductVisual = () => (
  <div className="w-full h-full relative flex flex-col items-center justify-center">
    <div className="absolute top-0 px-5 py-2.5 bg-slate-900 rounded-full border border-white/10 shadow-2xl z-20 flex items-center gap-4">
      <div className="flex gap-1.5">
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-indigo-500" />
      </div>
      <span className="text-[9px] font-black text-white uppercase tracking-[0.3em] whitespace-nowrap">Live Analysis: Style Preference Momentum</span>
    </div>

    <div className="relative w-full max-w-[400px] h-[300px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 flex flex-col">
       <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600"><Sofa size={20} /></div>
             <span className="text-base font-black text-slate-900 tracking-tight">Trending Styles</span>
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Real-time</span>
       </div>

       <div className="space-y-6 flex-1">
          {[
            { label: "Modern Minimalist", val: 82, color: "bg-indigo-600" },
            { label: "Scandinavian", val: 68, color: "bg-indigo-400" },
            { label: "Industrial Decor", val: 51, color: "bg-slate-200" }
          ].map((item, i) => (
            <div key={i} className="space-y-2">
               <div className="flex justify-between text-[11px] font-black text-slate-600 uppercase tracking-wider">
                  <span>{item.label}</span>
                  <span>{item.val}% Demand</span>
               </div>
               <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.val}%` }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                    className={cn("h-full rounded-full", item.color)} 
                  />
               </div>
            </div>
          ))}
       </div>

       <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-indigo-500" />
             <span className="text-[10px] font-bold text-slate-500">Preference Synced</span>
          </div>
          <TrendingUp size={16} className="text-indigo-600" />
       </div>
    </div>
  </div>
);

const HomeFurnishingLoyaltyVisual = () => (
    <div className="w-full h-full flex items-center justify-center">
       <div className="relative w-48 h-48 flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-indigo-600/20 rounded-full blur-2xl" 
          />
          <div className="relative z-10 text-center flex flex-col items-center">
             <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-indigo-600 mb-4">
                <Layout size={30} className="fill-current" />
             </div>
             <div className="px-3 py-1 bg-slate-900 rounded-full text-white text-[9px] font-black uppercase tracking-widest mb-2">Room View: Emma K.</div>
             <div className="flex gap-1">
                {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-indigo-400" />)}
             </div>
          </div>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-5 -right-10 p-3 bg-white rounded-xl shadow-lg border border-slate-100">
             <span className="text-[10px] font-black text-indigo-900">CURATED FOR YOU</span>
          </motion.div>
       </div>
    </div>
);

const HomeFurnishingUpsellVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6">
       <div className="flex items-center gap-3">
          <div className="w-20 h-20 rounded-xl bg-slate-100 border border-slate-200 p-2 flex items-center justify-center">
             <Sofa size={32} className="text-slate-400" />
          </div>
          <ArrowRight className="text-slate-300" size={16} />
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="w-40 h-28 rounded-xl bg-indigo-50 border border-indigo-200 p-4 relative shadow-lg flex flex-col gap-2"
          >
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-indigo-600">
                   <Lamp size={18} />
                </div>
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-indigo-600">
                   <Palette size={18} />
                </div>
             </div>
             <div className="w-full h-8 bg-indigo-600 rounded shadow-sm flex items-center justify-center">
                <span className="text-[8px] font-black text-white">COMPLETE ROOM</span>
             </div>
             <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg"><CheckCircle2 size={10} /></div>
          </motion.div>
       </div>
       <div className="flex gap-2">
          <div className="px-3 py-1 bg-white rounded-full border border-slate-100 shadow-sm text-[8px] font-black text-slate-400">Bundle Offer Sent</div>
       </div>
    </div>
);

const ElectronicsProductVisual = () => (
  <div className="w-full h-full relative flex flex-col items-center justify-center">
    <div className="absolute top-0 px-5 py-2.5 bg-slate-900 rounded-full border border-white/10 shadow-2xl z-20 flex items-center gap-4">
      <div className="flex gap-1.5">
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-blue-500" />
      </div>
      <span className="text-[9px] font-black text-white uppercase tracking-[0.3em] whitespace-nowrap">Live Analysis: Upgrade & Demand Momentum</span>
    </div>

    <div className="relative w-full max-w-[400px] h-[300px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 flex flex-col">
       <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600"><Smartphone size={20} /></div>
             <span className="text-base font-black text-slate-900 tracking-tight">Tech Demand Trends</span>
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Real-time</span>
       </div>

       <div className="space-y-6 flex-1">
          {[
            { label: "5G Smartphones", val: 88, color: "bg-blue-600" },
            { label: "Wireless Audio", val: 74, color: "bg-blue-400" },
            { label: "Smart Watches", val: 62, color: "bg-slate-200" }
          ].map((item, i) => (
            <div key={i} className="space-y-2">
               <div className="flex justify-between text-[11px] font-black text-slate-600 uppercase tracking-wider">
                  <span>{item.label}</span>
                  <span>{item.val}% Momentum</span>
               </div>
               <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.val}%` }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                    className={cn("h-full rounded-full", item.color)} 
                  />
               </div>
            </div>
          ))}
       </div>

       <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-blue-500" />
             <span className="text-[10px] font-bold text-slate-500">Upgrade Cycles Synced</span>
          </div>
          <TrendingUp size={16} className="text-blue-600" />
       </div>
    </div>
  </div>
);

const ElectronicsLoyaltyVisual = () => (
    <div className="w-full h-full flex items-center justify-center">
       <div className="relative w-48 h-48 flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl" 
          />
          <div className="relative z-10 text-center flex flex-col items-center">
             <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-blue-600 mb-4">
                <Smartphone size={30} className="fill-current" />
             </div>
             <div className="px-3 py-1 bg-slate-900 rounded-full text-white text-[9px] font-black uppercase tracking-widest mb-2">Ecosystem View: Alex M.</div>
             <div className="flex gap-1">
                {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />)}
             </div>
          </div>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-5 -right-10 p-3 bg-white rounded-xl shadow-lg border border-slate-100">
             <span className="text-[10px] font-black text-blue-900">NEXT UPGRADE READY</span>
          </motion.div>
       </div>
    </div>
);

const ElectronicsUpsellVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6">
       <div className="flex items-center gap-3">
          <div className="w-20 h-20 rounded-xl bg-slate-100 border border-slate-200 p-2 flex items-center justify-center">
             <Smartphone size={32} className="text-slate-400" />
          </div>
          <ArrowRight className="text-slate-300" size={16} />
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="w-40 h-28 rounded-xl bg-blue-50 border border-blue-200 p-4 relative shadow-lg flex flex-col gap-2"
          >
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-blue-600">
                   <Headphones size={18} />
                </div>
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-blue-600">
                   <ShieldCheck size={18} />
                </div>
             </div>
             <div className="w-full h-8 bg-blue-600 rounded shadow-sm flex items-center justify-center">
                <span className="text-[8px] font-black text-white">ECOSYSTEM BUNDLE</span>
             </div>
             <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg"><CheckCircle2 size={10} /></div>
          </motion.div>
       </div>
       <div className="flex gap-2">
          <div className="px-3 py-1 bg-white rounded-full border border-slate-100 shadow-sm text-[8px] font-black text-slate-400">Warranty Activated</div>
       </div>
    </div>
);

const SupermarketProductVisual = () => (
  <div className="w-full h-full relative flex flex-col items-center justify-center">
    <div className="absolute top-0 px-5 py-2.5 bg-slate-900 rounded-full border border-white/10 shadow-2xl z-20 flex items-center gap-4">
      <div className="flex gap-1.5">
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-blue-500" />
      </div>
      <span className="text-[9px] font-black text-white uppercase tracking-[0.3em] whitespace-nowrap">Live Analysis: Basket Expansion Momentum</span>
    </div>

    <div className="relative w-full max-w-[400px] h-[300px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 flex flex-col">
       <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600"><ShoppingBasket size={20} /></div>
             <span className="text-base font-black text-slate-900 tracking-tight">Grocery Trends</span>
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Real-time</span>
       </div>

       <div className="space-y-6 flex-1">
          {[
            { label: "Fresh Produce", val: 85, color: "bg-blue-600" },
            { label: "Dairy & Eggs", val: 72, color: "bg-blue-400" },
            { label: "Household Care", val: 58, color: "bg-slate-200" }
          ].map((item, i) => (
            <div key={i} className="space-y-2">
               <div className="flex justify-between text-[11px] font-black text-slate-600 uppercase tracking-wider">
                  <span>{item.label}</span>
                  <span>{item.val}% Growth</span>
               </div>
               <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.val}%` }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                    className={cn("h-full rounded-full", item.color)} 
                  />
               </div>
            </div>
          ))}
       </div>

       <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-blue-500" />
             <span className="text-[10px] font-bold text-slate-500">Inventory Synced</span>
          </div>
          <TrendingUp size={16} className="text-blue-600" />
       </div>
    </div>
  </div>
);

const SupermarketLoyaltyVisual = () => (
    <div className="w-full h-full flex items-center justify-center">
       <div className="relative w-48 h-48 flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl" 
          />
          <div className="relative z-10 text-center flex flex-col items-center">
             <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-blue-600 mb-4">
                <Apple size={30} className="fill-current" />
             </div>
             <div className="px-3 py-1 bg-slate-900 rounded-full text-white text-[9px] font-black uppercase tracking-widest mb-2">Pantry View: Sarah L.</div>
             <div className="flex gap-1">
                {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />)}
             </div>
          </div>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-5 -right-10 p-3 bg-white rounded-xl shadow-lg border border-slate-100">
             <span className="text-[10px] font-black text-blue-900">REPLENISHMENT DUE</span>
          </motion.div>
       </div>
    </div>
);

const SupermarketUpsellVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6">
       <div className="flex items-center gap-3">
          <div className="w-20 h-20 rounded-xl bg-slate-100 border border-slate-200 p-2 flex items-center justify-center">
             <Milk size={32} className="text-slate-400" />
          </div>
          <ArrowRight className="text-slate-300" size={16} />
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="w-40 h-28 rounded-xl bg-blue-50 border border-blue-200 p-4 relative shadow-lg flex flex-col gap-2"
          >
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-blue-600">
                   <Apple size={18} />
                </div>
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-blue-600">
                   <Utensils size={18} />
                </div>
             </div>
             <div className="w-full h-8 bg-blue-600 rounded shadow-sm flex items-center justify-center">
                <span className="text-[8px] font-black text-white">COMPLETE BASKET</span>
             </div>
             <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg"><CheckCircle2 size={10} /></div>
          </motion.div>
       </div>
       <div className="flex gap-2">
          <div className="px-3 py-1 bg-white rounded-full border border-slate-100 shadow-sm text-[8px] font-black text-slate-400">Coupon Sent</div>
       </div>
    </div>
);

const FashionProductVisual = () => (
  <div className="w-full h-full relative flex flex-col items-center justify-center">
    <div className="absolute top-0 px-5 py-2.5 bg-slate-900 rounded-full border border-white/10 shadow-2xl z-20 flex items-center gap-4">
      <div className="flex gap-1.5">
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-blue-500" />
      </div>
      <span className="text-[9px] font-black text-white uppercase tracking-[0.3em] whitespace-nowrap">Live Analysis: Style Preference Momentum</span>
    </div>

    <div className="relative w-full max-w-[400px] h-[300px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 flex flex-col">
       <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600"><Shirt size={20} /></div>
             <span className="text-base font-black text-slate-900 tracking-tight">Trending Styles</span>
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Real-time</span>
       </div>

       <div className="space-y-6 flex-1">
          {[
            { label: "Casual Chic", val: 82, color: "bg-blue-600" },
            { label: "Ethnic Festive", val: 68, color: "bg-blue-400" },
            { label: "Boho Summer", val: 51, color: "bg-slate-200" }
          ].map((item, i) => (
            <div key={i} className="space-y-2">
               <div className="flex justify-between text-[11px] font-black text-slate-600 uppercase tracking-wider">
                  <span>{item.label}</span>
                  <span>{item.val}% Affinity</span>
               </div>
               <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.val}%` }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                    className={cn("h-full rounded-full", item.color)} 
                  />
               </div>
            </div>
          ))}
       </div>

       <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-blue-500" />
             <span className="text-[10px] font-bold text-slate-500">Preferences Synced</span>
          </div>
          <TrendingUp size={16} className="text-blue-600" />
       </div>
    </div>
  </div>
);

const FashionLoyaltyVisual = () => (
    <div className="w-full h-full flex items-center justify-center">
       <div className="relative w-48 h-48 flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl" 
          />
          <div className="relative z-10 text-center flex flex-col items-center">
             <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-blue-600 mb-4">
                <Sparkles size={30} className="fill-current" />
             </div>
             <div className="px-3 py-1 bg-slate-900 rounded-full text-white text-[9px] font-black uppercase tracking-widest mb-2">Style View: Chloe J.</div>
             <div className="flex gap-1">
                {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />)}
             </div>
          </div>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-5 -right-10 p-3 bg-white rounded-xl shadow-lg border border-slate-100">
             <span className="text-[10px] font-black text-blue-900">NEW LOOK READY</span>
          </motion.div>
       </div>
    </div>
);

const FashionUpsellVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6">
       <div className="flex items-center gap-3">
          <div className="w-20 h-20 rounded-xl bg-slate-100 border border-slate-200 p-2 flex items-center justify-center">
             <Shirt size={32} className="text-slate-400" />
          </div>
          <ArrowRight className="text-slate-300" size={16} />
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="w-40 h-28 rounded-xl bg-blue-50 border border-blue-200 p-4 relative shadow-lg flex flex-col gap-2"
          >
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-blue-600">
                   <ShoppingBag size={18} />
                </div>
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-blue-600">
                   <Star size={18} />
                </div>
             </div>
             <div className="w-full h-8 bg-blue-600 rounded shadow-sm flex items-center justify-center">
                <span className="text-[8px] font-black text-white">COMPLETE OUTFIT</span>
             </div>
             <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg"><CheckCircle2 size={10} /></div>
          </motion.div>
       </div>
       <div className="flex gap-2">
          <div className="px-3 py-1 bg-white rounded-full border border-slate-100 shadow-sm text-[8px] font-black text-slate-400">Pairing Sent</div>
       </div>
    </div>
);

const BeautyHealthProductVisual = () => (
  <div className="w-full h-full relative flex flex-col items-center justify-center">
    <div className="absolute top-0 px-5 py-2.5 bg-slate-900 rounded-full border border-white/10 shadow-2xl z-20 flex items-center gap-4">
      <div className="flex gap-1.5">
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-blue-500" />
      </div>
      <span className="text-[9px] font-black text-white uppercase tracking-[0.3em] whitespace-nowrap">Live Analysis: Wellness Momentum</span>
    </div>

    <div className="relative w-full max-w-[400px] h-[300px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 flex flex-col">
       <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600"><HeartPulse size={20} /></div>
             <span className="text-base font-black text-slate-900 tracking-tight">Care Categories</span>
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Real-time</span>
       </div>

       <div className="space-y-6 flex-1">
          {[
            { label: "Skincare Core", val: 88, color: "bg-blue-600" },
            { label: "Fitness Momentum", val: 81, color: "bg-blue-500" },
            { label: "Wellness Support", val: 74, color: "bg-blue-400" },
            { label: "Pharmacy Cycle", val: 59, color: "bg-slate-200" }
          ].map((item, i) => (
            <div key={i} className="space-y-2">
               <div className="flex justify-between text-[11px] font-black text-slate-600 uppercase tracking-wider">
                  <span>{item.label}</span>
                  <span>{item.val}% Momentum</span>
               </div>
               <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.val}%` }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                    className={cn("h-full rounded-full", item.color)} 
                  />
               </div>
            </div>
          ))}
       </div>

       <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-blue-500" />
             <span className="text-[10px] font-bold text-slate-500">Care Cycles Synced</span>
          </div>
          <TrendingUp size={16} className="text-blue-600" />
       </div>
    </div>
  </div>
);

const BeautyHealthLoyaltyVisual = () => (
    <div className="w-full h-full flex items-center justify-center">
       <div className="relative w-48 h-48 flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl" 
          />
          <div className="relative z-10 text-center flex flex-col items-center">
             <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-blue-600 mb-4">
                <Smile size={30} className="fill-current" />
             </div>
             <div className="px-3 py-1 bg-slate-900 rounded-full text-white text-[9px] font-black uppercase tracking-widest mb-2">Care Profile: Emily S.</div>
             <div className="flex gap-1">
                {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />)}
             </div>
          </div>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-5 -right-10 p-3 bg-white rounded-xl shadow-lg border border-slate-100">
             <span className="text-[10px] font-black text-blue-900">REFILL REMINDER</span>
          </motion.div>
       </div>
    </div>
);

const BeautyHealthUpsellVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6">
       <div className="flex items-center gap-3">
          <div className="w-20 h-20 rounded-xl bg-slate-100 border border-slate-200 p-2 flex items-center justify-center">
             <Stethoscope size={32} className="text-slate-400" />
          </div>
          <ArrowRight className="text-slate-300" size={16} />
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="w-40 h-28 rounded-xl bg-blue-50 border border-blue-200 p-4 relative shadow-lg flex flex-col gap-2"
          >
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-blue-600">
                   <Sparkles size={18} />
                </div>
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-blue-600">
                   <Heart size={18} />
                </div>
             </div>
             <div className="w-full h-8 bg-blue-600 rounded shadow-sm flex items-center justify-center">
                <span className="text-[8px] font-black text-white">WELLNESS BUNDLE</span>
             </div>
             <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg"><CheckCircle2 size={10} /></div>
          </motion.div>
       </div>
       <div className="flex gap-2">
          <div className="px-3 py-1 bg-white rounded-full border border-slate-100 shadow-sm text-[8px] font-black text-slate-400">Care Plan Sent</div>
       </div>
    </div>
);

const JewelryProductVisual = () => (
  <div className="w-full h-full relative flex flex-col items-center justify-center">
    <div className="absolute top-0 px-5 py-2.5 bg-slate-900 rounded-full border border-white/10 shadow-2xl z-20 flex items-center gap-4">
      <div className="flex gap-1.5">
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-blue-500" />
      </div>
      <span className="text-[9px] font-black text-white uppercase tracking-[0.3em] whitespace-nowrap">Live Analysis: Design Affinity</span>
    </div>

    <div className="relative w-full max-w-[400px] h-[300px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 flex flex-col">
       <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600"><Gem size={20} /></div>
             <span className="text-base font-black text-slate-900 tracking-tight">Luxury Collections</span>
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Real-time</span>
       </div>

       <div className="space-y-6 flex-1">
          {[
            { label: "Bridal Premium", val: 92, color: "bg-blue-600" },
            { label: "Diamond Daily", val: 78, color: "bg-blue-400" },
            { label: "Festival Gold", val: 64, color: "bg-slate-200" }
          ].map((item, i) => (
            <div key={i} className="space-y-2">
               <div className="flex justify-between text-[11px] font-black text-slate-600 uppercase tracking-wider">
                  <span>{item.label}</span>
                  <span>{item.val}% Intent</span>
               </div>
               <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.val}%` }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                    className={cn("h-full rounded-full", item.color)} 
                  />
               </div>
            </div>
          ))}
       </div>

       <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-blue-500" />
             <span className="text-[10px] font-bold text-slate-500">Lifecycle Synced</span>
          </div>
          <TrendingUp size={16} className="text-blue-600" />
       </div>
    </div>
  </div>
);

const JewelryLoyaltyVisual = () => (
    <div className="w-full h-full flex items-center justify-center">
       <div className="relative w-48 h-48 flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl" 
          />
          <div className="relative z-10 text-center flex flex-col items-center">
             <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-blue-600 mb-4">
                <Crown size={30} className="fill-current" />
             </div>
             <div className="px-3 py-1 bg-slate-900 rounded-full text-white text-[9px] font-black uppercase tracking-widest mb-2">Relationship: Sarah M.</div>
             <div className="flex gap-1">
                {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />)}
             </div>
          </div>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-5 -right-10 p-3 bg-white rounded-xl shadow-lg border border-slate-100">
             <span className="text-[10px] font-black text-blue-900">ANNIVERSARY ALERT</span>
          </motion.div>
       </div>
    </div>
);

const JewelryUpsellVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6">
       <div className="flex items-center gap-3">
          <div className="w-20 h-20 rounded-xl bg-slate-100 border border-slate-200 p-2 flex items-center justify-center">
             <Gem size={32} className="text-slate-400" />
          </div>
          <ArrowRight className="text-slate-300" size={16} />
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="w-40 h-28 rounded-xl bg-blue-50 border border-blue-200 p-4 relative shadow-lg flex flex-col gap-2"
          >
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-blue-600">
                   <Star size={18} />
                </div>
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-blue-600">
                   <Gift size={18} />
                </div>
             </div>
             <div className="w-full h-8 bg-blue-600 rounded shadow-sm flex items-center justify-center">
                <span className="text-[8px] font-black text-white">LUXURY MATCH</span>
             </div>
             <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg"><CheckCircle2 size={10} /></div>
          </motion.div>
       </div>
       <div className="flex gap-2">
          <div className="px-3 py-1 bg-white rounded-full border border-slate-100 shadow-sm text-[8px] font-black text-slate-400">Match Sent</div>
       </div>
    </div>
);

const FBRetailProductVisual = () => (
  <div className="w-full h-full relative flex flex-col items-center justify-center">
    <div className="absolute top-0 px-5 py-2.5 bg-slate-900 rounded-full border border-white/10 shadow-2xl z-20 flex items-center gap-4">
      <div className="flex gap-1.5">
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-blue-500" />
      </div>
      <span className="text-[9px] font-black text-white uppercase tracking-[0.3em] whitespace-nowrap">Live Analysis: Taste Affinity</span>
    </div>

    <div className="relative w-full max-w-[400px] h-[300px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 flex flex-col">
       <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600"><Coffee size={20} /></div>
             <span className="text-base font-black text-slate-900 tracking-tight">F&B Categories</span>
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Real-time</span>
       </div>

       <div className="space-y-6 flex-1">
          {[
            { label: "Morning Brew", val: 89, color: "bg-blue-600" },
            { label: "Artisan Bakery", val: 76, color: "bg-blue-400" },
            { label: "Healthy Bowls", val: 58, color: "bg-slate-200" }
          ].map((item, i) => (
            <div key={i} className="space-y-2">
               <div className="flex justify-between text-[11px] font-black text-slate-600 uppercase tracking-wider">
                  <span>{item.label}</span>
                  <span>{item.val}% Momentum</span>
               </div>
               <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.val}%` }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                    className={cn("h-full rounded-full", item.color)} 
                  />
               </div>
            </div>
          ))}
       </div>

       <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-blue-500" />
             <span className="text-[10px] font-bold text-slate-500">Peak Demand Synced</span>
          </div>
          <TrendingUp size={16} className="text-blue-600" />
       </div>
    </div>
  </div>
);

const FBRetailLoyaltyVisual = () => (
    <div className="w-full h-full flex items-center justify-center">
       <div className="relative w-48 h-48 flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl" 
          />
          <div className="relative z-10 text-center flex flex-col items-center">
             <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-blue-600 mb-4">
                <Smile size={30} className="fill-current" />
             </div>
             <div className="px-3 py-1 bg-slate-900 rounded-full text-white text-[9px] font-black uppercase tracking-widest mb-2">Palate: James R.</div>
             <div className="flex gap-1">
                {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />)}
             </div>
          </div>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-5 -right-10 p-3 bg-white rounded-xl shadow-lg border border-slate-100">
             <span className="text-[10px] font-black text-blue-900">REWARD READY</span>
          </motion.div>
       </div>
    </div>
);

const FBRetailUpsellVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6">
       <div className="flex items-center gap-3">
          <div className="w-20 h-20 rounded-xl bg-slate-100 border border-slate-200 p-2 flex items-center justify-center">
             <Pizza size={32} className="text-slate-400" />
          </div>
          <ArrowRight className="text-slate-300" size={16} />
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="w-40 h-28 rounded-xl bg-blue-50 border border-blue-200 p-4 relative shadow-lg flex flex-col gap-2"
          >
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-blue-600">
                   <Cake size={18} />
                </div>
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-blue-600">
                   <Sandwich size={18} />
                </div>
             </div>
             <div className="w-full h-8 bg-blue-600 rounded shadow-sm flex items-center justify-center">
                <span className="text-[8px] font-black text-white">COMBO UPGRADE</span>
             </div>
             <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg"><CheckCircle2 size={10} /></div>
          </motion.div>
       </div>
       <div className="flex gap-2">
          <div className="px-3 py-1 bg-white rounded-full border border-slate-100 shadow-sm text-[8px] font-black text-slate-400">Combo Sent</div>
       </div>
    </div>
);

const EcommerceProductVisual = () => (
  <div className="w-full h-full relative flex flex-col items-center justify-center">
    <div className="absolute top-0 px-5 py-2.5 bg-slate-900 rounded-full border border-white/10 shadow-2xl z-20 flex items-center gap-4">
      <div className="flex gap-1.5">
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-blue-500" />
      </div>
      <span className="text-[9px] font-black text-white uppercase tracking-[0.3em] whitespace-nowrap">Live Analysis: Shopping Intent</span>
    </div>

    <div className="relative w-full max-w-[400px] h-[300px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 flex flex-col">
       <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600"><MousePointer2 size={20} /></div>
             <span className="text-base font-black text-slate-900 tracking-tight">Intent Flux</span>
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Real-time</span>
       </div>

       <div className="space-y-6 flex-1">
          {[
            { label: "High-Intent Browsing", val: 94, color: "bg-blue-600" },
            { label: "Cart Add Rate", val: 82, color: "bg-blue-400" },
            { label: "Search Momentum", val: 67, color: "bg-slate-200" }
          ].map((item, i) => (
            <div key={i} className="space-y-2">
               <div className="flex justify-between text-[11px] font-black text-slate-600 uppercase tracking-wider">
                  <span>{item.label}</span>
                  <span>{item.val}% Value</span>
               </div>
               <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.val}%` }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                    className={cn("h-full rounded-full", item.color)} 
                  />
               </div>
            </div>
          ))}
       </div>

       <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-blue-500" />
             <span className="text-[10px] font-bold text-slate-500">Funnel Synced</span>
          </div>
          <TrendingUp size={16} className="text-blue-600" />
       </div>
    </div>
  </div>
);

const EcommerceLoyaltyVisual = () => (
    <div className="w-full h-full flex items-center justify-center">
       <div className="relative w-48 h-48 flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl" 
          />
          <div className="relative z-10 text-center flex flex-col items-center">
             <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-blue-600 mb-4">
                <ShoppingCart size={30} className="fill-current" />
             </div>
             <div className="px-3 py-1 bg-slate-900 rounded-full text-white text-[9px] font-black uppercase tracking-widest mb-2">Intent: Alex P.</div>
             <div className="flex gap-1">
                {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />)}
             </div>
          </div>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-5 -right-10 p-3 bg-white rounded-xl shadow-lg border border-slate-100">
             <span className="text-[10px] font-black text-blue-900">CART RECOVERY</span>
          </motion.div>
       </div>
    </div>
);

const EcommerceUpsellVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6">
       <div className="flex items-center gap-3">
          <div className="w-20 h-20 rounded-xl bg-slate-100 border border-slate-200 p-2 flex items-center justify-center">
             <Smartphone size={32} className="text-slate-400" />
          </div>
          <ArrowRight className="text-slate-300" size={16} />
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="w-40 h-28 rounded-xl bg-blue-50 border border-blue-200 p-4 relative shadow-lg flex flex-col gap-2"
          >
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-blue-600">
                   <Headphones size={18} />
                </div>
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-blue-600">
                   <Watch size={18} />
                </div>
             </div>
             <div className="w-full h-8 bg-blue-600 rounded shadow-sm flex items-center justify-center">
                <span className="text-[8px] font-black text-white">TECH BUNDLE</span>
             </div>
             <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg"><CheckCircle2 size={10} /></div>
          </motion.div>
       </div>
       <div className="flex gap-2">
          <div className="px-3 py-1 bg-white rounded-full border border-slate-100 shadow-sm text-[8px] font-black text-slate-400">Recovery Plan Sent</div>
       </div>
    </div>
);

export default FeatureShowcase;
