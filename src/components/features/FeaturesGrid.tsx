"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "@/components/FeatureCard";
import Container from "@/components/Container";
import {
  BarChart3,
  BrainCircuit,
  LayoutDashboard,
  Mic,
  PlayCircle,
  Smartphone,
  Sparkles,
  TrendingUp,
  Zap
} from "lucide-react";
import campaign from "@/public/assets/images/features/campaign.png"
import dashboard from "@/public/assets/images/features/dashboard.png"
import revenue from "@/public/assets/images/features/revenue.png"
import smartAnalytics from "@/public/assets/images/features/smart-analytics.png"
import gpAnalysis from "@/public/assets/images/features/gp-analysis.png"
import aiAssistant from "@/public/assets/images/features/ai-assistant.png"

export const featuresData = [
  {
    title: "Business Intelligence Dashboard",
    description: "Comprehensive real-time reporting with raw data sync across all your retail outlets.",
    longDescription: "Our BI Dashboard transforms raw retail data into actionable strategy. It integrates directly with your existing POS, e-commerce, and inventory systems to provide a single, unified view of your entire retail performance. Designed for executives who need real-time business intelligence to drive growth across all locations.",
    icon: LayoutDashboard,
    slug: "business-intelligence",
    benefits: ["Real-time KPI tracking", "Multi-store synchronization", "Custom report builder", "Predictive maintenance alerts"],
    image: dashboard,
    stats: [
      { value: "360°", label: "Business Visibility" },
      { value: "Real-time", label: "Data Sync" },
      { value: "50+", label: "KPI Metrics" },
      { value: "Multi-branch", label: "Performance View" },
    ],
    howItWorks: [
      { step: "01", title: "Connect Your Data", description: "Tapito integrates with your POS, ERP, and inventory systems in minutes. No complex setup required." },
      { step: "02", title: "Auto-Build Your Dashboard", description: "The platform automatically structures your data into a unified, executive-ready view tailored to retail." },
      { step: "03", title: "Monitor & Act", description: "Track KPIs, spot anomalies, and drill into any data point instantly from one screen." },
    ],
    useCases: [
      { title: "Multi-Branch Retailer", description: "Compare store performance, identify top branches, and reallocate resources where growth potential is highest." },
      { title: "Category Managers", description: "Track which product categories are driving revenue and which ones are dragging margins down." },
      { title: "Executive Leaders", description: "Get a board-ready performance snapshot every morning without waiting for manual reports." },
    ],
    quote: { text: "What used to take our team 3 hours to compile, Tapito shows us in seconds.", author: "Head of Operations, Retail Chain" },
  },
  {
    title: "AI Smart Analytics Engine",
    description: "Your data starts thinking for you. Identify revenue drivers and customer risks automatically.",
    longDescription: "Harness the power of AI to detect patterns humans might miss. Tapito's Smart Analytics identifies your primary revenue drivers, detects customers at risk of churn, and provides AI-generated recommendations to steer your business toward constant profitability.",
    icon: BrainCircuit,
    slug: "smart-analytics",
    benefits: ["Business Health Score (out of 100)", "Revenue drivers identification", "Customer risk detection", "AI-generated recommendations"],
    image: smartAnalytics,
    stats: [
      { value: "/100", label: "Health Score" },
      { value: "AI", label: "Recommendations" },
      { value: "Proactive", label: "Risk Detection" },
      { value: "Auto", label: "Insight Generation" },
    ],
    howItWorks: [
      { step: "01", title: "Score Your Business", description: "Every day, Tapito calculates a Health Score out of 100 — combining sales, customer, and margin data." },
      { step: "02", title: "Surface Critical Signals", description: "AI scans millions of data points to identify accelerators (what's working) and risk factors (what to fix)." },
      { step: "03", title: "Act on Recommendations", description: "Receive prioritized, plain-language action items — no data science degree needed to understand them." },
    ],
    useCases: [
      { title: "Prevent Revenue Drops", description: "Catch declining trends 2–3 weeks before they impact your P&L, giving you time to course-correct." },
      { title: "Maximize High ROI Channels", description: "Identify which sales channels, categories, or campaigns are returning the highest profit." },
      { title: "Protect At-Risk Customers", description: "Get notified when valuable customers show signs of drift before they stop buying entirely." },
    ],
    quote: { text: "The Business Health Score gave us one number to rally our team around every week.", author: "CEO, Large Format Retail" },
  },
  {
    title: "Campaign Automation",
    description: "Set once. Run forever. Fully automated customer engagement that scales.",
    longDescription: "Stop manual marketing efforts. Tapito's Campaign Automation handles customer segmentation, offer creation, and multi-channel delivery across WhatsApp, SMS, and Email. Build workflows that trigger automatically based on real-time customer behavior and purchase history.",
    icon: Zap,
    slug: "campaign-automation",
    benefits: ["Auto customer segmentation", "Offer creation & targeting", "Multi-channel (WhatsApp, SMS, Email)", "Workflow automation engine"],
    image: campaign,
    stats: [
      { value: "3x", label: "Higher Engagement" },
      { value: "Zero", label: "Manual Effort" },
      { value: "WhatsApp + SMS + Email", label: "Channels" },
      { value: "Auto", label: "Customer Segmentation" },
    ],
    howItWorks: [
      { step: "01", title: "Define Segments", description: "Use AI-powered segmentation to group customers by behavior, spend, frequency, and lifecycle stage." },
      { step: "02", title: "Configure Workflows", description: "Set trigger-based rules: 'if customer hasn't purchased in 30 days, send a win-back offer via WhatsApp.'" },
      { step: "03", title: "Measure & Optimise", description: "Track open rates, conversions, and revenue attribution for every campaign, automatically." },
    ],
    useCases: [
      { title: "Win-Back Lapsed Customers", description: "Auto-trigger personalized offers to customers who haven't purchased in 30, 60, or 90 days." },
      { title: "Loyalty Tier Upsell", description: "Move silver-tier customers to gold by pushing targeted spend-threshold offers at the right moment." },
      { title: "Seasonal Campaigns", description: "Schedule festival and seasonal campaigns months in advance, with automatic delivery on the right day." },
    ],
    quote: { text: "We ran 18 campaigns last quarter without a single manual email. Tapito handled everything.", author: "Marketing Director, Supermarket Chain" },
  },
  {
    title: "Revenue Growth Insights",
    description: "Identify high-value opportunities, identify hidden opportunities in your sales funnel.",
    longDescription: "Pinpoint exactly where your revenue leakage is occurring with laser precision. The Revenue Growth module analyzes your entire sales funnel to identify hidden upsell and cross-sell opportunities. Provides the granularity needed to optimize pricing and maximize margins.",
    icon: TrendingUp,
    slug: "revenue-insights",
    benefits: ["Price optimization", "Bundle effectiveness", "Upsell opportunities", "Customer LTV mapping"],
    image: revenue,
    stats: [
      { value: "Daily", label: "Revenue Tracking" },
      { value: "Category", label: "Granularity" },
      { value: "Gap", label: "Detection Engine" },
      { value: "Incentive", label: "Optimization" },
    ],
    howItWorks: [
      { step: "01", title: "Map All Revenue Streams", description: "Connect every sales channel — in-store, online, B2B — for a complete, unified revenue picture." },
      { step: "02", title: "Identify Gaps & Leakages", description: "Find exactly where revenue is being lost — whether through pricing, stockouts, or customer churn." },
      { step: "03", title: "Optimize & Capture Growth", description: "Act on AI-suggested tactics to convert identified opportunities into actual revenue gains." },
    ],
    useCases: [
      { title: "Category-Level Profitability", description: "Know exactly which categories are making you money and which are consuming margin, at real-time granularity." },
      { title: "Channel Attribution", description: "Understand whether your online or physical stores are driving your best customers and highest margins." },
      { title: "Incentive Strategy", description: "Simulate how an incentive change on a category impacts overall revenue before committing to the change." },
    ],
    quote: { text: "We found $15,000 of monthly revenue leakage within the first week of using Tapito.", author: "CFO, Electronics Retail" },
  },
  {
    title: "Voice-Powered AI Command Center",
    description: "Command your retail empire hands-free with real-time voice and chat decisions.",
    longDescription: "Get Tapito in your pocket. Use natural language to ask operational queries and receive instant, decision-ready alerts anywhere.",
    icon: Smartphone,
    slug: "mobile-app",
    benefits: ["Voice command support", "Mobile-first dashboards", "Instant alert escalation", "Hands-free operations"],
    stats: [
      { value: "Voice", label: "Enabled" },
      { value: "Real-time", label: "Alerts" },
      { value: "Instant", label: "Answers" },
      { value: "Secure", label: "Encryption" },
    ],
    howItWorks: [
      { step: "01", title: "Ask Naturally", description: "Type or speak your query in plain language. 'What is my revenue today?' or 'Which category underperformed?'" },
      { step: "02", title: "AI Understands Context", description: "The NLP engine understands business context, synonyms, and follow-up questions — like talking to your best analyst." },
      { step: "03", title: "Get Decision Cards", description: "Receive prioritized, action-ready mobile cards with the data, the trend, and the suggested next move." },
    ],
    useCases: [
      { title: "Regional Managers", description: "Monitor all store performances effortlessly while traveling between locations using voice briefings." },
      { title: "Store Manager on the Floor", description: "Ask performance questions hands-free while walking the shop floor to stay present with the team." },
      { title: "Founders & Executives", description: "Get a complete business performance briefing during your morning commute using only your voice." },
    ],
    exampleQueries: [
      "What is my revenue this month?",
      "Which salesman is underperforming in cross-selling?",
      "How many multi-category orders did we close this week?",
      "Which branch has the best staff incentive ROI today?",
      "Show me the top 5 salesperson by category mix this quarter.",
    ],
    quote: { text: "I get a full business briefing every morning by just talking to my phone. It's like having a CFO in my pocket.", author: "Founder, Retail Group" },
  },
  {
    title: "Smart Scheme Generator",
    description: "AI-driven staff incentives. Turn single purchases into multi-category revenue.",
    longDescription: "Generate and simulate staff-level incentive schemes that automatically reward cross-selling across categories.",
    icon: Sparkles,
    slug: "scheme-generator",
    image: gpAnalysis,
    benefits: ["Cross-category incentives", "Staff performance bonuses", "Revenue leakage detection", "Margin-safe simulations"],
    stats: [
      { value: "1000s", label: "Simulations" },
      { value: "+12%", label: "Margin Lift" },
      { value: "Auto", label: "Incentive ROI" },
      { value: "Higher", label: "Staff Retention" },
    ],
    howItWorks: [
      { step: "01", title: "Define Constraints", description: "Input your target revenue goals and maximum allowable incentive budget." },
      { step: "02", title: "AI Computes Bonuses", description: "Tapito simulates historical staff elasticity to propose the best commission or bonus structures." },
      { step: "03", title: "Deploy to Staff", description: "Seamlessly push the highest-yielding incentive structures to your salesman phones via the Tapito Mobile App." },
    ],
    useCases: [
      { title: "Quarterly Performance Push", description: "Find the exact incentive percentage needed to motivate staff to move specific categories without sacrificing total profitability." },
      { title: "Cross-Sell Sprints", description: "Create limited-time staff bonuses that maximize overall ticket size while maintaining category margins." },
      { title: "Staff Retention Rewards", description: "Generate tiered commission models that keep your top-performing salesmen engaged and motivated." },
    ],
    quote: { text: "We used to guess our sale discounts. Now Tapito tells us exactly what will sell and profit.", author: "Head of Pricing, Apparel Brand" },
  },
  {
    title: "Real-Time Profitability Engine",
    description: "Stop scaling losses. Identify and block profit leaks while spend is active with live margin-protection intelligence.",
    longDescription: "Look forward, not backward. Tapito's Profitability Engine syncs live margins across branches and staff to alert you on margin erosion before it impacts your bottom line. Track Net Profit at the Category level with precision.",
    icon: BarChart3,
    slug: "profitability-engine",
    benefits: ["Real-time margin watch", "Staff-level GP tracking", "SKU profitability sync", "Erosion alerts"],
    stats: [
      { value: "95%+", label: "Forecast Accuracy" },
      { value: "Seasonal", label: "Models" },
      { value: "Scenario", label: "Simulation" },
      { value: "Margin", label: "Tracking" },
    ],
    howItWorks: [
      { step: "01", title: "Analyse Historical Patterns", description: "AI models train on your full sales history, seasonality curves, category performance, and promotional impact." },
      { step: "02", title: "Generate Weekly Forecasts", description: "Receive Category-level and Branch-level demand forecasts updated every week based on fresh data." },
      { step: "03", title: "Run What-If Scenarios", description: "Simulate the margin impact of a price change, new promotion, or supplier cost increase before committing." },
    ],
    useCases: [
      { title: "Financial Planning", description: "Forecast quarterly margins reliably to secure accurate budgeting and staffing." },
      { title: "Supplier Negotiations", description: "Anticipate volume requirements based on predictive models to negotiate better bulk rates." },
      { title: "Risk Mitigation", description: "Avoid over-ordering slow products by pre-identifying risk through future outlook modeling." },
    ],
    quote: { text: "We finally have visibility into where our bottom line is heading, not just where it has been.", author: "CFO, Home Furnishings" },
  },
  {
    title: "Growth Simulator",
    description: "Model customer growth carefully. Utilize AI to predict mounting changes and avert migrations.",
    longDescription: "Utilize your store's Digital Twin to model high-stakes decisions with extreme precision. Run complex growth probability scoring against your current customer base to predict migrations. The Growth Engine actively surfaces the root causes and specific growth levers to pull.",
    icon: PlayCircle,
    slug: "growth-simulator",
    benefits: ["Growth probability scoring", "Retention strategy modeling", "Customer sentiment analysis", "Win-back automation"],
    stats: [
      { value: "Digital", label: "Twin Modeling" },
      { value: "AI", label: "Strategy Advisor" },
      { value: "Auto", label: "Risk Detection" },
      { value: "Action", label: "Yield Simulation" },
    ],
    howItWorks: [
      { step: "01", title: "Detect Decline Signals", description: "The simulator continually monitors for early warning signs: declining frequency, shrinking basket sizes, fading categories." },
      { step: "02", title: "Run Scenarios", description: "Test hypothetical marketing plays or product launches against a simulated cohort to predict the yield." },
      { step: "03", title: "Get the Fix", description: "Alongside every insight is a plain-language recommended action. Not just the 'what' but the 'how'." },
    ],
    useCases: [
      { title: "Retailer Hitting a Plateau", description: "If revenue has stagnated, the Growth Simulator actively surfaces the root causes and specific growth levers to pull." },
      { title: "Pricing Adjustments", description: "Simulate how increasing prices by 5% affects customer churn probability before rolling it out." },
      { title: "New Market Entry", description: "Simulate growth potential in a new geography or segment using the recommendation model." },
    ],
    quote: { text: "The Growth Simulator helped us navigate a tough holiday season with absolute confidence.", author: "Director of Expansion, Fast Fashion" },
  }
];

export const FeaturesGrid = () => {
  return (
    <section id="features-grid" className="py-16 md:py-20 2xl:py-28 relative z-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-16 gap-8 lg:gap-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#09358c] ring-1 ring-[#09358c]/10 mb-5">
              Built for Retail Teams
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl 4xl:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-5">
              Features That Drive <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#09358c] via-[#09358c] to-[#05a0ec]"> Better Decisions</span>
            </h2>
            <p className="text-slate-600 text-base lg:text-lg font-medium leading-relaxed max-w-xl">
              From analytics to automation, each module is designed to help you act faster, improve margins, and scale your retail business with total confidence.
            </p>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-8 4xl:gap-12"
        >
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={feature.slug}
              title={feature.title}
              description={feature.description}
              benefits={feature.benefits}
              slug={feature.slug}
              icon={feature.icon}
              index={index}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export { featuresData as features };
