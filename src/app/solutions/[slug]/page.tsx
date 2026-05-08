"use client";

import { useParams } from "next/navigation";
import { 
  TrendingUp,
  Search,
  ShieldAlert,
  BarChart3,
  Zap,
  Smartphone,
  LayoutDashboard,
  Users,
  Target,
  Rocket,
  Brain,
  MessageSquareDashed,
  Award,
  DollarSign,
} from "lucide-react";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import ClientStrip from "@/components/ClientStrip";
import { FeatureShowcase } from "@/components/solution-detail/feature-showcase";
import { IntegrationSection } from "@/components/solutions/IntegrationSection";
import { SolutionTestimonials } from "@/components/solutions/SolutionTestimonials";
import Capabilities from "@/components/solution-detail/core-capabilities";
import StrategicAdvantage from "@/components/solution-detail/strategic-advantage";
import Challenges from "@/components/solution-detail/challenges";
import CTASection from "@/components/CTA-card";
import { FAQ } from "@/components/solutions/FAQ";
import { motion, AnimatePresence } from "framer-motion";
import BuildingMaterial from "@/components/solution-detail/building-material";
import HomeFurnishing from "@/components/solution-detail/home-furnishing";
import aisales from '@/public/assets/images/ai-slaes.png';
import predictiveprofit from '@/public/assets/images/predictive.png';
import empoyeeincentives from '@/public/assets/images/Staff-Incentive.png';
import strategicmirror from '@/public/assets/images/StrategicBusinessMirror.png';
import marketingcost from '@/public/assets/images/MarketingCostOptimization.png';
import staffconversion from '@/public/assets/images/Automated-Conversion.png';

const solutionDetails: Record<string, any> = {
  "building-materials": {
    title: "Building Materials",
    description: "Turn Every Material Purchase Into Multiple Revenue Opportunities. Tapito helps building material businesses understand what customers are really trying to achieve, not just what they buy today.",
    howWeHelp: [
      { 
        title: "AI Sales Intelligence Engine", 
        desc: "Tapito continuously analyzes purchase behavior, journey patterns, and product combinations to identify connected opportunities that sales teams often overlook.", 
        image: aisales.src,
        icon: Brain
      },
      { 
        title: "Predictive Opportunity Logic", 
        desc: "When a customer purchases one product, Tapito predicts what they are likely need to purchase next across categories like plumbing, tiles, and electricals.", 
        image:predictiveprofit.src,
        icon: Zap
      },
      { 
        title: "Automated Conversion & Engagement", 
        desc: "Automatically helps your business recommend, engage, and convert customers through smart follow-up reminders and automated campaigns.", 
        image: staffconversion.src,
        icon: MessageSquareDashed
      },
      { 
        title: "Sales Incentive Engine", 
        desc: "Motivate your sales force by providing real-time visibility into earned incentives and cross-category performance achievements.", 
        image:empoyeeincentives.src,
        icon: Award
      },
      { 
        title: "Strategic Business Mirror", 
        desc: "Tapito acts as a mirror to your business, delivering deep behavioral insights and tailored recommendations for continuous success.", 
        image: strategicmirror.src,
        icon: LayoutDashboard
      },
      { 
        title: "Marketing Cost Optimization", 
        desc: "Eliminate wasteful spend by identifying high-conversion customers and automating highly targeted project-based campaigns.", 
        image:marketingcost.src,
        icon: DollarSign
      }
    ],
    challenges: [
      { title: "Missed Cross-Selling", desc: "Sales teams often only sell what is directly asked for, missing out on tiles, paints, or electricals for the same project.", icon: ShieldAlert },
      { title: "Limited Customer Visibility", desc: "No intelligent system connecting customer intent with future purchasing needs leads to revenue leakage across categories.", icon: BarChart3 },
      { title: "Unoptimized Marketing Spend", desc: "Traditional marketing wastes money targeting the wrong audience without identifying high-conversion customers.", icon: Rocket }
    ],
    features: [
      { title: "Smart Cross-Selling Logic", desc: "Capture revenue opportunities that sales staff unintentionally miss during daily operations with automatic triggers for tiles, paints, and more.", icon: Zap },
      { title: "Employee Incentive Intelligence", desc: "Motivate teams by showing incentives earned, cross-category performance, and product-wise achievements in real-time.", icon: Award },
      { title: "Revenue Opportunity Detection", desc: "Highlights hidden revenue opportunities by continuously monitoring customer behavior and suggesting actions to increase revenue.", icon: TrendingUp }
    ],
    faqs: [
      { question: "How does Tapito identify connected purchase opportunities?", answer: "Using AI-powered behavioral intelligence, Tapito identifies patterns across categories like plumbing, tiles, electricals, paints, hardware, and interiors to predict what a customer will need next for their project." },
      { question: "How does it help reduce marketing costs?", answer: "By identifying high-conversion customers and automating targeted campaigns based on buying intent, Tapito eliminates unnecessary promotions and ensures relevant offers reach the right customers." },
      { question: "What can Tapito automate for our business?", answer: "It generates product recommendations, personalized offers, customer follow-up reminders, and automated engagement campaigns via WhatsApp, SMS, and Calls." },
      { question: "How does it motivate sales teams?", answer: "Tapito shows staff their earned incentives and revenue contribution in real-time, encouraging them to recommend additional products and capture more opportunities." }
    ],
    impacts: [
      { value: "35%", label: "Increase in Average Order Value" },
      { value: "42%", label: "Improvement in Cross-Category Sales" },
      { value: "30%", label: "Reduction in Marketing Costs" }
    ]
  },
  "fashion": {
    title: "Fashion Retail",
    description: "Improve trend-based selling by syncing localized inventory with high-conversion viral social trends.",
    howWeHelp: [
      { 
        title: "Predict Trend Surges", 
        desc: "Analyze social signals and velocity to identify 'viral' items before they stock out in-store.", 
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
        icon: TrendingUp
      },
      { 
        title: "Localized Stock Logic", 
        desc: "Shift inventory between locations dynamically based on local fashion adoption and weather patterns.", 
        image: "/assets/images/solutions/fashion-localized-stock.png",
        icon: LayoutDashboard
      },
      { 
        title: "Personalized Stylists", 
        desc: "Increase conversion by pairing items based on aesthetic visual compatibility logic.", 
        image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop",
        icon: Users
      }
    ],
    challenges: [
      { title: "Inventory Aging", desc: "Seasonal collections going stagnant due to slow feedback loops from the storefront.", icon: Search },
      { title: "Trend Disconnect", desc: "Social media trends moving faster than your supply chain can react.", icon: ShieldAlert },
      { title: "Siloed Stock", desc: "Inability to move stock between physical locations based on local demand surges.", icon: BarChart3 }
    ],
    features: [
      { title: "Trend-Sync Engine", desc: "AI that monitors social velocity and flags inventory for priority promotion.", icon: Zap },
      { title: "Localized Drops", desc: "Dynamic logistics logic that suggests stock movements based on viral geo-zones.", icon: LayoutDashboard },
      { title: "Virtual Stylist", desc: "Web-based AI that pair products based on visual trend data for high-conversion upsells.", icon: Users }
    ],
    faqs: [
      { question: "How does the trend-sync engine work?", answer: "Our AI monitors social media engagement and search volume for specific styles. When a trend is detected, it cross-references your inventory and suggests priority restocks or promotions for matching items." },
      { question: "Can we automate stock transfers between stores?", answer: "Absolutely. Tapito's localized drops logic identifies stores with high demand for specific categories and automates transfer requests from lower-velocity locations." },
      { question: "Does it help with seasonal clearance?", answer: "Yes, by identifying slow-moving items early, Tapito suggests localized flash sales and visual styling pairings to clear seasonal stock before markdowns become necessary." },
      { question: "Does it support international inventory management?", answer: "Yes, Tapito handles multi-currency and multi-regional stock logic, helping you balance inventory across international borders based on regional style velocity." },
      { question: "How does it handle size and color variations?", answer: "Our AI analyzes trend data at the SKU level, so you know exactly which sizes and colors are trending in specific locations, preventing local stockouts." }
    ],
    impacts: [
      { value: "3.5x", label: "Faster Inventory Turnover" },
      { value: "22%", label: "Average Order Value Increase" },
      { value: "12%", label: "Reduction in End-of-Season Markdown" }
    ]
  },
  "home-furnishing": {
    title: "Home Furnishing",
    description: "Maximize every showroom visit by turning single item interest into complete room transformations. Tapito helps you sell the lifestyle, not just the furniture.",
    howWeHelp: [
      { 
        title: "AI Aesthetic Pairing Engine", 
        desc: "Tapito analyzes visual styles and product compatibility to identify complete room setup opportunities that customers often overlook.", 
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200",
        icon: Brain
      },
      { 
        title: "Predictive Lifestyle Logic", 
        desc: "When a customer buys a sofa, Tapito predicts the matching rugs, teapoys, and lighting they'll need to complete the space.", 
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200",
        icon: Zap
      },
      { 
        title: "Automated Lookbook Engagement", 
        desc: "Automatically send AI-curated room lookbooks and personalized decor offers via WhatsApp to keep customers inspired.", 
        image: "https://images.unsplash.com/photo-1616489953149-755e37829219?auto=format&fit=crop&q=80&w=1200",
        icon: MessageSquareDashed
      },
      { 
        title: "Designer Incentive Engine", 
        desc: "Empower your showroom staff by showing real-time earnings from cross-category sales and lifestyle bundle achievements.", 
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200",
        icon: Award
      },
      { 
        title: "Strategic Inventory Mirror", 
        desc: "Gain deep visibility into which lifestyle trends are driving revenue and optimize your collection accordingly.", 
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        icon: LayoutDashboard
      },
      { 
        title: "Marketing ROI Optimization", 
        desc: "Eliminate wasteful ad spend by identifying high-intent project buyers and automating targeted lifestyle campaigns.", 
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
        icon: DollarSign
      }
    ],
    challenges: [
      { title: "The 'Sofa-Only' Trap", desc: "Sales teams often sell only what is requested, leaving teapoys, mats, and lighting revenue on the table.", icon: ShieldAlert },
      { title: "Missing Room-View Data", desc: "Inability to connect customer purchases with their overall room-completion journey leads to missed upsells.", icon: BarChart3 },
      { title: "Low Lifestyle Bundling", desc: "Generic marketing fails to inspire customers to complete their interior projects, slowing down inventory turnover.", icon: Rocket }
    ],
    features: [
      { title: "Lifestyle Cross-Sell Logic", desc: "Capture revenue opportunities by automatically suggesting matching accessories like teapoys and rugs for every primary furniture sale.", icon: Zap },
      { title: "Staff Performance Insights", desc: "Motivate teams with real-time visibility into their contribution to lifestyle bundle growth and earned commissions.", icon: Award },
      { title: "Aesthetic Intent Detection", desc: "Identify high-potential interior projects early by monitoring customer behavior and suggesting relevant style pairings.", icon: TrendingUp }
    ],
    faqs: [
      { question: "How does Tapito suggest matching decor?", answer: "Our AI analyzes visual style data and purchase patterns to predict which teapoys, rugs, and lighting fixtures best complement a customer's primary furniture selection." },
      { question: "Can we automate room-completion offers?", answer: "Yes. Tapito triggers personalized lookbooks and offers via WhatsApp or SMS based on the aesthetic profile of the items a customer has already purchased." },
      { question: "How does it help our showroom staff?", answer: "It provides floor teams with real-time cross-selling prompts and visual pairing suggestions, making it easier to convince customers to buy a complete set." },
      { question: "Does it support project-based tracking?", answer: "Absolutely. Tapito tracks a customer's journey across multiple showroom visits, ensuring you stay relevant as they furnish their home phase by phase." }
    ],
    impacts: [
      { value: "40%", label: "Increase in Lifestyle Bundling" },
      { value: "28%", label: "Growth in Average Order Value" },
      { value: "35%", label: "Improvement in Sales Efficiency" }
    ]
  },
  "electronics": {
    title: "Electronics",
    description: "Optimize upsell and warranties with intelligent product pairing and automated lifecycle management.",
    howWeHelp: [
      { 
        title: "Attachment Rate Growth", 
        desc: "Automatically suggest the most relevant warranties and accessories during the 'hot' purchase window.", 
        image: "https://images.unsplash.com/photo-1468436139062-f60a71c5c892?q=80&w=1200&auto=format&fit=crop",
        icon: Target
      },
      { 
        title: "Predictive Upgrade Cycles", 
        desc: "Identify exactly when a customer's tech becomes 'dated' and target them with high-converting trade-in offers.", 
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
        icon: Zap
      },
      { 
        title: "Service Automation", 
        desc: "Deploy AI chatbots to handle technical field support and warranty verification instantly.", 
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
        icon: Smartphone
      }
    ],
    challenges: [
      { title: "Low Attachment Rates", desc: "Missing out on profitable warranty and accessory sales at the point of purchase.", icon: Search },
      { title: "Lifecycle Blindspots", desc: "No visibility into when your customers are ready for their next tech upgrade.", icon: ShieldAlert },
      { title: "Complex Returns", desc: "High costs associated with warranty claims and technical support requests.", icon: BarChart3 }
    ],
    features: [
      { title: "Bespoke Warrenty Engine", desc: "Offer dynamic, AI-priced warranties based on individual customer risk profiles.", icon: Zap },
      { title: "Tech-Upgrade Triggers", desc: "Automatically notify customers when they are eligible for trade-ins or upgrades.", icon: Smartphone },
      { title: "Smart Accessory Bot", desc: "Real-time upsell logic that pairs tech products with the highest-converting accessories.", icon: LayoutDashboard }
    ],
    faqs: [
      { question: "How do you calculate upgrade triggers?", answer: "We analyze a product's release cycle alongside the customer's purchase date and usage patterns. We then trigger trade-in offers just as their device enters the 'secondary value' sweet spot." },
      { question: "Is the warranty pricing dynamic?", answer: "Yes, our engine can adjust warranty pricing in real-time based on the item type, purchase location, and customer loyalty history to maximize conversion." },
      { question: "Can it handle complex technical support?", answer: "Tapito's service AI uses trained technical documentation to guide users through troubleshooting, reducing support costs by up to 30%." },
      { question: "Can we use it for post-purchase technical support?", answer: "Absolutely. Tapito can automate technical guide delivery and troubleshooting steps via WhatsApp or Email based on the specific SKU purchased." },
      { question: "Does it help with trade-in programs?", answer: "Yes, it calculates fair market value for used devices in real-time and automates the trade-in credit process to encourage immediate upgrades." }
    ],
    impacts: [
      { value: "40%", label: "Uplift in Warranty Attachment" },
      { value: "18%", label: "Increase in Tech Upgrade Frequency" },
      { value: "30%", label: "Reduction in Customer Support Tickets" }
    ]
  }
};

const defaultData = {
  title: "Vertical Growth",
  description: "Tapito transforms your industry-specific data into a strategic growth advantage with tailored AI logic.",
  howWeHelp: [
    { title: "Predictive Optimization", desc: "Anticipate market shifts and adjust your strategy in real-time.", image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200&auto=format&fit=crop", icon: TrendingUp },
    { title: "Operational Clarity", desc: "Remove the fog of raw data with actionable, business-ready insights.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop", icon: BarChart3 },
    { title: "Automated Execution", desc: "Let AI handle the execution of growth strategies without manual friction.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop", icon: Rocket }
  ],
  challenges: [
    { title: "Data Overload", desc: "Too much data, not enough actionable insights to move the needle.", icon: Search },
    { title: "Manual Processes", desc: "Reliance on slow, manual workflows in a high-speed market.", icon: ShieldAlert },
    { title: "Stagnant Growth", desc: "Plateaued revenue without clear visibility into the next opportunity.", icon: BarChart3 }
  ],
  features: [
    { title: "AI-Powered Insights", desc: "Our engine discovers hidden patterns in your data automatically.", icon: Zap },
    { title: "Automated Workflows", desc: "Let AI handle the repetitive tasks so your team can focus on strategy.", icon: Smartphone },
    { title: "Predictive Forecasting", desc: "See the future of your sales and inventory with high-precision models.", icon: LayoutDashboard }
  ],
  faqs: [
    { question: "How secure is my business data?", answer: "Data security is our top priority. Tapito uses enterprise-grade encryption and complies with international data protection standards (GDPR, SOC2) to ensure your competitive intelligence remains private." },
    { question: "How difficult is the onboarding process?", answer: "We provide a dedicated solutions architect to manage your onboarding. Our 'low-code' approach allows you to connect your data streams and see insights within 30 days." },
    { question: "Is Tapito scalable for small businesses?", answer: "Tapito's engine is designed to scale with your volume. Whether you have 5 stores or 5,000, our pricing and processing capacity adapt to your needs." },
    { question: "Is custom development required for integration?", answer: "Tapito is designed as a modular platform. While we offer deep custom integrations, our standard connectors allow most businesses to start seeing data insights with minimal dev effort." },
    { question: "What kind of support is included?", answer: "All partners receive a dedicated success manager and 24/7 technical support to ensure your AI engine is always performing at its peak." }
  ],
  impacts: [
    { value: "25%", label: "Average Revenue Increase" },
    { value: "40%", label: "Operational Cost Reduction" },
    { value: "3x", label: "Faster Decision Making" }
  ]
};

export default function SolutionDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = solutionDetails[slug] || defaultData;
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={slug}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="min-h-screen bg-white"
      >
        <SolutionsHero 
          badge="VERTICAL SOLUTION"
          titlePrimary={data.title}
          description={data.description}
        />
        <ClientStrip />
        <StrategicAdvantage data={data} />
        {slug === "building-materials" && <BuildingMaterial />}
        {slug === "home-furnishing" && <HomeFurnishing />}
        <Challenges data={data} />
        <Capabilities data={data} />
        <FeatureShowcase />
        <IntegrationSection />
        <SolutionTestimonials />
        <FAQ items={data.faqs} />
        <CTASection
          title="Ready to solve your challenges?"
          description="Join hundreds of retail giants who have transformed their data into a revenue engine with Tapito."
          badge="READY TO TRANSFORM?"
          image="/assets/images/about/ready-to-tranform.png"
          isAbout={false}
        />
      </motion.main>
    </AnimatePresence>
  );
}
