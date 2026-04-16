import {
  BarChart3,
  BrainCircuit,
  LayoutDashboard,
  LucideIcon,
  Mic,
  PlayCircle,
  Smartphone,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

export type FeatureSlug =
  | "business-intelligence"
  | "smart-analytics"
  | "campaign-automation"
  | "revenue-insights"
  | "ai-assistant"
  | "mobile-app"
  | "scheme-generator"
  | "profitability-engine"
  | "growth-simulator";

export type FeatureLayoutType =
  | "executive-analytics"
  | "ai-pipeline"
  | "automation-workflow"
  | "opportunity-detection"
  | "conversational-ui"
  | "mobile-experience"
  | "offer-engine"
  | "forecast-panel"
  | "simulation-workspace";

export type FeatureMetric = {
  label: string;
  value: string;
  hint: string;
};

export type FeatureStep = {
  label: string;
  title: string;
  description: string;
};

export type FeatureCapability = {
  title: string;
  description: string;
};

export type FeatureImpact = {
  label: string;
  value: string;
  note: string;
};

export type FeatureDetail = {
  slug: FeatureSlug;
  title: string;
  icon: LucideIcon;
  eyebrow: string;
  heroHeadline: string;
  heroSubheadline: string;
  problem: string;
  insight: string;
  outcome: string;
  layoutType: FeatureLayoutType;
  heroMetrics: FeatureMetric[];
  flowSteps: FeatureStep[];
  capabilities: FeatureCapability[];
  impact: FeatureImpact[];
  differentiatorTitle: string;
  differentiatorBody: string;
  before: string[];
  after: string[];
};

export const featureDetails: Record<FeatureSlug, FeatureDetail> = {
  "business-intelligence": {
    slug: "business-intelligence",
    title: "Business Intelligence Dashboard",
    icon: LayoutDashboard,
    eyebrow: "Executive analytics workspace",
    heroHeadline: "Your Entire Business. One Screen.",
    heroSubheadline:
      "Give leaders a live command center for branch performance, category momentum, and revenue movement so decisions happen in the moment, not at month-end.",
    problem:
      "Retail leaders lose speed when branch, category, and revenue signals live in disconnected reports.",
    insight:
      "Tapito detects KPI drift, branch gaps, and category momentum from one synchronized data layer.",
    outcome:
      "Teams move from chasing updates to acting on a clear, executive-ready picture of the business.",
    layoutType: "executive-analytics",
    heroMetrics: [
      { label: "Network revenue", value: "Rs42.8L", hint: "+14.2% this month" },
      { label: "Live branches", value: "24", hint: "All outlets synced" },
      { label: "Margin watch", value: "18.5%", hint: "Top category holding" },
      { label: "Decision latency", value: "-80%", hint: "From report to action" },
    ],
    flowSteps: [
      {
        label: "01",
        title: "Sync every outlet",
        description: "POS, inventory, billing, and customer data land in one live operating layer.",
      },
      {
        label: "02",
        title: "Surface what matters",
        description: "Tapito highlights KPI shifts, top branches, weak stores, and category anomalies automatically.",
      },
      {
        label: "03",
        title: "Guide leadership action",
        description: "Managers drill into branch or category detail and respond before small drops become monthly misses.",
      },
    ],
    capabilities: [
      { title: "KPI tiles that stay live", description: "Revenue, margins, bills, and store throughput update like an operations command center." },
      { title: "Branch comparison grid", description: "See top-performing and underperforming locations side by side without exporting anything." },
      { title: "Category performance layers", description: "Track which categories are lifting growth and which ones are dragging margins." },
      { title: "Executive drill-down views", description: "Move from one-screen summary to branch-level details in seconds." },
    ],
    impact: [
      { label: "Faster reporting", value: "+300%", note: "Less waiting for manual consolidation" },
      { label: "Store response time", value: "-68%", note: "Action happens while the issue is still fresh" },
      { label: "Visibility coverage", value: "360deg", note: "Branch, SKU, and category in one view" },
    ],
    differentiatorTitle: "A retail decision room, not another passive dashboard.",
    differentiatorBody:
      "Traditional BI tools stop at reporting. Tapito is opinionated about what leaders should look at next, which branches need attention, and where profit movement is happening right now.",
    before: ["Manual analysis", "Delayed decisions", "Missed opportunities"],
    after: ["Instant insights", "Automated actions", "Predictable growth"],
  },
  "smart-analytics": {
    slug: "smart-analytics",
    title: "AI Smart Analytics Engine",
    icon: BrainCircuit,
    eyebrow: "AI thinking pipeline",
    heroHeadline: "Your Data Starts Thinking For You.",
    heroSubheadline:
      "Convert raw business signals into scored insights and next-best actions so your team spends less time reading charts and more time growing revenue.",
    problem:
      "Important patterns hide inside too much raw data for teams to catch consistently by hand.",
    insight:
      "Tapito scores anomalies, growth signals, churn risk, and margin movement across the entire retail engine.",
    outcome:
      "Teams get prioritized recommendations instead of dashboards full of unanswered questions.",
    layoutType: "ai-pipeline",
    heroMetrics: [
      { label: "Signals scanned", value: "12.4M", hint: "Daily retail events processed" },
      { label: "Insight confidence", value: "98.4%", hint: "AI scoring precision" },
      { label: "Analysis time", value: "-95%", hint: "From weeks to minutes" },
      { label: "Margin upside", value: "+12%", hint: "Average optimization lift" },
    ],
    flowSteps: [
      { label: "01", title: "Ingest the mess", description: "Sales, customer behavior, inventory shifts, and campaign data enter one scoring stream." },
      { label: "02", title: "Rank every signal", description: "AI identifies anomalies, revenue drivers, risk clusters, and likely next moves." },
      { label: "03", title: "Recommend action", description: "Tapito turns patterns into plain-language business recommendations your team can execute immediately." },
    ],
    capabilities: [
      { title: "Business health scoring", description: "A running pulse score makes it obvious when performance is strengthening or slipping." },
      { title: "Revenue driver detection", description: "See which categories, offers, or branches are actually moving profit." },
      { title: "Risk and anomaly alerts", description: "Catch strange drops, spikes, and margin leaks before they snowball." },
      { title: "Natural-language recommendations", description: "Insights arrive with suggested actions, not just charts and percentages." },
    ],
    impact: [
      { label: "Insight accuracy", value: "98%", note: "More confident operating decisions" },
      { label: "Manual analysis", value: "-95%", note: "Less spreadsheet hunting" },
      { label: "Profit readiness", value: "+12%", note: "Faster action on high-value signals" },
    ],
    differentiatorTitle: "Tapito translates analytics into action automatically.",
    differentiatorBody:
      "Where traditional analytics platforms leave interpretation to analysts, Tapito continuously explains what changed, why it matters, and which decision is worth making next.",
    before: ["Guesswork", "Reactive fixes", "Hidden losses"],
    after: ["Evidence-based strategy", "Proactive scaling", "Optimized margins"],
  },
  "campaign-automation": {
    slug: "campaign-automation",
    title: "Campaign Automation",
    icon: Zap,
    eyebrow: "Automation workflow builder",
    heroHeadline: "Set Campaigns Once. Let AI Run Them Forever.",
    heroSubheadline:
      "Build always-on customer journeys that segment, trigger, message, and optimize themselves around live customer intent.",
    problem:
      "Growth teams burn time on repetitive campaign setup and still miss the right moment to engage customers.",
    insight:
      "Tapito detects buying behavior, inactivity, offer sensitivity, and stock-aware targeting windows automatically.",
    outcome:
      "Retention, conversion, and reactivation improve without adding manual campaign load.",
    layoutType: "automation-workflow",
    heroMetrics: [
      { label: "Retention lift", value: "+40%", hint: "From automated journeys" },
      { label: "Campaign setup", value: "Zero", hint: "After workflow launch" },
      { label: "Channel blend", value: "3", hint: "WhatsApp, SMS, email" },
      { label: "Conversion gain", value: "2.5x", hint: "Behavior-led targeting" },
    ],
    flowSteps: [
      { label: "01", title: "Segment continuously", description: "Tapito groups customers by spend, frequency, recency, and loyalty risk in real time." },
      { label: "02", title: "Trigger at the right moment", description: "Automation launches when customers lapse, browse, convert, or hit a milestone." },
      { label: "03", title: "Optimize delivery", description: "The platform adjusts channel, offer, and timing to maximize response and revenue." },
    ],
    capabilities: [
      { title: "Dynamic customer segmentation", description: "Lists update themselves as customer behavior changes." },
      { title: "Stock-aware messaging", description: "Promote what is available and margin-safe right now." },
      { title: "Cross-channel orchestration", description: "Move from WhatsApp to SMS to email without rebuilding campaigns." },
      { title: "Offer optimization engine", description: "Tapito keeps testing which incentive actually converts each segment." },
    ],
    impact: [
      { label: "Campaign output", value: "24/7", note: "Always-on lifecycle engagement" },
      { label: "Manual workload", value: "-90%", note: "Teams focus on strategy, not sends" },
      { label: "Conversion", value: "2.5x", note: "Triggered personalization performs better" },
    ],
    differentiatorTitle: "Automation that understands revenue context, not just message timing.",
    differentiatorBody:
      "Tapito ties campaigns to margin, stock, and customer value so the automation engine does not just send more messages, it sends smarter ones that are safe for the business.",
    before: ["Manual blasts", "Generic offers", "Low engagement"],
    after: ["Automated flows", "Personalized value", "Higher LTV"],
  },
  "revenue-insights": {
    slug: "revenue-insights",
    title: "Revenue Growth Insights",
    icon: TrendingUp,
    eyebrow: "Opportunity detection dashboard",
    heroHeadline: "See Exactly Where Revenue Is Hiding.",
    heroSubheadline:
      "Expose pricing gaps, weak bundles, and margin leakage with a recommendation layer built to recover lost revenue fast.",
    problem:
      "Revenue leaks often stay invisible because teams only see totals, not where margin and mix are slipping underneath.",
    insight:
      "Tapito detects underpriced winners, weak attachment opportunities, leak points, and risk signals at SKU level.",
    outcome:
      "Teams recover revenue, lift average order value, and fix profit drains with precision.",
    layoutType: "opportunity-detection",
    heroMetrics: [
      { label: "Revenue recovered", value: "Rs12L+", hint: "Typical early opportunity capture" },
      { label: "AOV lift", value: "+18%", hint: "Bundle and mix optimization" },
      { label: "Leak alerts", value: "Realtime", hint: "SKU and channel watch" },
      { label: "Margin focus", value: "SKU-level", hint: "Not just category averages" },
    ],
    flowSteps: [
      { label: "01", title: "Map leak zones", description: "Tapito reviews pricing, bundle behavior, stockouts, and product mix at transaction depth." },
      { label: "02", title: "Detect hidden upside", description: "The system highlights where small adjustments can unlock immediate revenue or margin improvement." },
      { label: "03", title: "Recommend the move", description: "Leaders see exact actions like reprice, rebundle, replenish, or escalate by branch." },
    ],
    capabilities: [
      { title: "Revenue leak alerts", description: "Spot high-margin products losing traction before the month slips away." },
      { title: "Bundle opportunity signals", description: "Find products customers already want to buy together." },
      { title: "Price sensitivity guidance", description: "See where pricing changes are safe and where they are risky." },
      { title: "Risk heatmaps", description: "Branch, SKU, and channel signals show where revenue is most exposed." },
    ],
    impact: [
      { label: "Recovered revenue", value: "Rs12L+", note: "Capture hidden value already inside the business" },
      { label: "Order size", value: "+18%", note: "Smarter attachment and bundling" },
      { label: "Pricing speed", value: "Realtime", note: "Teams adjust faster with less debate" },
    ],
    differentiatorTitle: "Tapito goes past totals into decision-grade leak detection.",
    differentiatorBody:
      "Most dashboards tell you revenue was lower. Tapito shows whether the miss came from pricing, product mix, branch execution, or a missed bundle opportunity and what to do about it.",
    before: ["Profit leaks", "Wasted inventory", "Stagnant AOV"],
    after: ["Captured growth", "Optimized mix", "Maximized profit"],
  },
  "ai-assistant": {
    slug: "ai-assistant",
    title: "AI Assistant with Voice Commands",
    icon: Mic,
    eyebrow: "Conversational interface preview",
    heroHeadline: "Ask Your Business Anything.",
    heroSubheadline:
      "Turn everyday business questions into instant answers through voice and chat so insight reaches every manager, not just the analytics team.",
    problem:
      "Critical answers stay trapped behind dashboards, filters, and teams that know how to navigate them.",
    insight:
      "Tapito detects intent, business context, and follow-up meaning inside voice or chat questions.",
    outcome:
      "Anyone can access live business intelligence in seconds, even while moving through the store floor.",
    layoutType: "conversational-ui",
    heroMetrics: [
      { label: "Answer speed", value: "<2s", hint: "From question to insight" },
      { label: "Access reach", value: "100%", hint: "Data for every team role" },
      { label: "Briefings", value: "Daily", hint: "Executive summaries on demand" },
      { label: "Manual reports", value: "-90%", hint: "Less dependence on analysts" },
    ],
    flowSteps: [
      { label: "01", title: "Ask naturally", description: "Speak or type the same way you would ask an analyst or operations lead." },
      { label: "02", title: "Interpret business context", description: "Tapito understands retail language, time windows, and follow-up questions." },
      { label: "03", title: "Respond with action", description: "Answers include the metric, the change, and the suggested next move." },
    ],
    capabilities: [
      { title: "Voice-first data access", description: "Managers can query performance while walking the floor or traveling." },
      { title: "Multi-turn memory", description: "Follow-up questions stay in context so deeper analysis feels natural." },
      { title: "Retail-specific understanding", description: "Terms like GP, category mix, and markdowns make sense immediately." },
      { title: "Executive briefing mode", description: "Get a concise daily summary instead of opening five different reports." },
    ],
    impact: [
      { label: "Decision speed", value: "<2s", note: "Questions answered while teams are still in motion" },
      { label: "Data adoption", value: "+100%", note: "Broader access across the organization" },
      { label: "Reporting burden", value: "-90%", note: "Less time preparing ad hoc answers" },
    ],
    differentiatorTitle: "A retail-native assistant, not a generic chatbot pasted onto data.",
    differentiatorBody:
      "Tapito understands business terminology, remembers the previous question, and responds with operating context so answers feel like decisions, not database lookups.",
    before: ["Searching charts", "Exporting Excel", "Manual follow-ups"],
    after: ["Voice queries", "Instant answers", "Total mobility"],
  },
  "mobile-app": {
    slug: "mobile-app",
    title: "Mobile App for Real-Time Decisions",
    icon: Smartphone,
    eyebrow: "Phone-first experience",
    heroHeadline: "Your Business Insights. Anywhere.",
    heroSubheadline:
      "Put Tapito in every leader's pocket with mobile dashboards, push alerts, and one-tap decision cards built for fast-moving retail operations.",
    problem:
      "When leaders leave the desk, they often lose real-time visibility into what is happening across stores.",
    insight:
      "Tapito detects critical store events, performance swings, and action-worthy alerts and pushes them into a mobile command center instantly.",
    outcome:
      "Managers stay decisive on the move, with less lag between signal and response.",
    layoutType: "mobile-experience",
    heroMetrics: [
      { label: "Access window", value: "24/7", hint: "Insight from anywhere" },
      { label: "Alert speed", value: "Realtime", hint: "Critical changes hit the phone instantly" },
      { label: "Response time", value: "-60%", hint: "Faster action from the field" },
      { label: "Store coverage", value: "20+", hint: "Managed from one device" },
    ],
    flowSteps: [
      { label: "01", title: "Prioritize alerts", description: "Tapito filters the noise so the app only pushes signals worth acting on." },
      { label: "02", title: "Show the decision", description: "Each alert opens into a quick dashboard with context, trend, and recommended next step." },
      { label: "03", title: "Escalate instantly", description: "Managers forward, assign, or approve action from the same mobile screen." },
    ],
    capabilities: [
      { title: "Phone-first dashboards", description: "Core KPIs are designed for glanceable mobile reading, not squeezed desktop screens." },
      { title: "Push alert intelligence", description: "Only urgent revenue, stock, or performance shifts rise to the top." },
      { title: "Quick decision cards", description: "Approve offers, investigate drops, or escalate issues in one tap." },
      { title: "Branch switching", description: "Move between stores quickly without losing context." },
    ],
    impact: [
      { label: "Operational speed", value: "+30%", note: "Faster decisions outside the office" },
      { label: "Manager response", value: "-60%", note: "Less delay after alerts" },
      { label: "Visibility uptime", value: "24/7", note: "The business stays accessible" },
    ],
    differentiatorTitle: "Built as a command surface, not a small web dashboard.",
    differentiatorBody:
      "Tapito's mobile experience is designed around alerts and action cards, so leaders can actually operate the business from their phone instead of just viewing numbers.",
    before: ["Out-of-office blindness", "Phoned-in updates", "Delayed reactions"],
    after: ["Pocket command center", "Real-time alerts", "Agile leadership"],
  },
  "scheme-generator": {
    slug: "scheme-generator",
    title: "Smart Scheme Generator",
    icon: Sparkles,
    eyebrow: "Offer creation engine",
    heroHeadline: "Create Smarter Offers Automatically.",
    heroSubheadline:
      "Generate margin-safe promotional schemes with simulation-led recommendations that balance stock clearance, customer appeal, and profitability.",
    problem:
      "Discounts often move stock at the expense of margin because teams cannot test enough scenarios before launch.",
    insight:
      "Tapito detects the most likely high-yield offer structure by simulating discount depth, stock urgency, and customer response together.",
    outcome:
      "Promotions clear inventory faster without sacrificing the bottom line.",
    layoutType: "offer-engine",
    heroMetrics: [
      { label: "Scheme simulations", value: "1000s", hint: "Offer patterns tested rapidly" },
      { label: "Margin protection", value: "+15%", hint: "Compared to generic markdowns" },
      { label: "Clearance speed", value: "+45%", hint: "Dead stock moves sooner" },
      { label: "Planning time", value: "-70%", hint: "Faster launch cycles" },
    ],
    flowSteps: [
      { label: "01", title: "Set goals and constraints", description: "Define stock pressure, target clearance, and acceptable margin floor." },
      { label: "02", title: "Simulate offer paths", description: "Tapito models flat discounts, bundles, tiers, and BOGO-style schemes against your business reality." },
      { label: "03", title: "Deploy the safest winner", description: "The best-performing structure comes with rationale, confidence, and expected financial impact." },
    ],
    capabilities: [
      { title: "Discount simulation sliders", description: "Explore pricing depth and clearance targets visually before committing." },
      { title: "Scheme suggestions", description: "AI proposes structures that match customer behavior and stock urgency." },
      { title: "Margin-safe recommendations", description: "Every idea is pressure-tested against your profitability guardrails." },
      { title: "Launch-ready output", description: "Teams move from planning to deployment without rebuilding the offer." },
    ],
    impact: [
      { label: "Margin preserved", value: "+15%", note: "Smarter promos protect the bottom line" },
      { label: "Stock clearance", value: "+45%", note: "Slow-moving inventory exits faster" },
      { label: "Promo planning", value: "-70%", note: "Fewer cycles of guesswork" },
    ],
    differentiatorTitle: "Tapito optimizes the business outcome, not just the discount size.",
    differentiatorBody:
      "Instead of recommending a generic markdown, Tapito balances stock pressure, customer response, and margin exposure to generate a scheme that is actually worth running.",
    before: ["Random discounts", "Margin erosion", "Dead stock"],
    after: ["Simulated schemes", "Protected profit", "Optimal clearance"],
  },
  "profitability-engine": {
    slug: "profitability-engine",
    title: "Predictive Profitability Engine",
    icon: BarChart3,
    eyebrow: "Forecast intelligence panel",
    heroHeadline: "Predict Profit Before You Invest.",
    heroSubheadline:
      "Use forward-looking margin forecasts and scenario comparisons to plan inventory, pricing, and spend before profit risk shows up in the books.",
    problem:
      "Retail teams often discover profit pressure only after the month closes, when it is too late to change the outcome.",
    insight:
      "Tapito detects future margin risk by combining seasonality, cost movement, sales velocity, and scenario modeling.",
    outcome:
      "Leaders protect profitability earlier and invest with far more confidence.",
    layoutType: "forecast-panel",
    heroMetrics: [
      { label: "Forecast accuracy", value: "96%", hint: "Future-facing planning confidence" },
      { label: "Inventory holding", value: "-20%", hint: "Sharper forward planning" },
      { label: "Scenario depth", value: "Multi-path", hint: "Compare possible futures" },
      { label: "Planning quality", value: "+50%", hint: "More reliable decisions" },
    ],
    flowSteps: [
      { label: "01", title: "Learn historical behavior", description: "Tapito studies sales patterns, seasonality, promotions, and margin history." },
      { label: "02", title: "Model future states", description: "The engine compares likely futures under different prices, costs, and inventory positions." },
      { label: "03", title: "Flag profit risk early", description: "Leaders see the probable impact before they commit budget or buying decisions." },
    ],
    capabilities: [
      { title: "Future profit graphs", description: "Understand where net margin is heading before month-end surprises arrive." },
      { title: "Scenario comparison charts", description: "See how different strategies change likely outcomes side by side." },
      { title: "Margin predictors", description: "Track the variables most likely to pull profitability up or down." },
      { title: "Risk-first alerts", description: "Get warned when cost, volume, or mix threatens the target." },
    ],
    impact: [
      { label: "Forecast trust", value: "96%", note: "Stronger confidence in forward planning" },
      { label: "Holding cost", value: "-20%", note: "Less overbuying and dead stock risk" },
      { label: "Planning speed", value: "+50%", note: "Leaders decide earlier with more clarity" },
    ],
    differentiatorTitle: "A profitability system that looks forward, not just backward.",
    differentiatorBody:
      "Most tools explain what happened. Tapito helps teams understand which future path is healthiest, where margin is vulnerable, and which choice is most likely to protect profit.",
    before: ["Retroactive P&L", "Budget surprises", "Blind investing"],
    after: ["Future visibility", "Margin predictability", "Planned success"],
  },
  "growth-simulator": {
    slug: "growth-simulator",
    title: "Growth Simulator",
    icon: PlayCircle,
    eyebrow: "Interactive simulation workspace",
    heroHeadline: "Test Growth Before You Execute It.",
    heroSubheadline:
      "Explore what-if scenarios with a digital decision workspace that reveals how pricing, traffic, and category strategy could change future growth.",
    problem:
      "Big growth bets are risky when teams cannot see the likely tradeoffs before committing real budget and inventory.",
    insight:
      "Tapito detects the highest-impact growth levers by simulating pricing, traffic, category mix, and retention changes against your business model.",
    outcome:
      "Teams launch initiatives with evidence, not hope, and de-risk growth before rollout.",
    layoutType: "simulation-workspace",
    heroMetrics: [
      { label: "Growth ROI", value: "3x", hint: "Higher confidence in chosen bets" },
      { label: "Strategy risk", value: "-100%", hint: "Simulation before execution" },
      { label: "Decision speed", value: "+40%", hint: "Less debate, more testing" },
      { label: "Future paths", value: "Unlimited", hint: "What-if modeling on demand" },
    ],
    flowSteps: [
      { label: "01", title: "Adjust the levers", description: "Change price, traffic, category investment, retention tactics, or store mix." },
      { label: "02", title: "Run a future scenario", description: "Tapito projects likely revenue, profit, and churn impact from that move." },
      { label: "03", title: "Choose the strongest path", description: "Teams compare outcomes and launch the strategy with the best upside-to-risk ratio." },
    ],
    capabilities: [
      { title: "What-if sliders", description: "Play with key business levers in a live simulation canvas." },
      { title: "Scenario toggles", description: "Compare optimistic, conservative, and aggressive growth plays instantly." },
      { title: "Future projections", description: "See the likely revenue and profit path before you launch." },
      { title: "Lever recommendations", description: "Tapito points to the factors most likely to unlock efficient growth." },
    ],
    impact: [
      { label: "Launch confidence", value: "3x", note: "Growth bets are backed by evidence" },
      { label: "Execution speed", value: "+40%", note: "Simulate before internal debate drags on" },
      { label: "Strategy risk", value: "-100%", note: "Test before you commit" },
    ],
    differentiatorTitle: "An intelligent simulator that works from your business reality.",
    differentiatorBody:
      "Tapito does not rely on generic benchmarks. It models growth decisions against your own margin behavior, customer dynamics, and operating patterns so the simulation feels decision-grade.",
    before: ["Stagnant plateaus", "Risky gambles", "Unknown outcomes"],
    after: ["Proven levers", "De-risked growth", "Scale with certainty"],
  },
};

const aliasMap: Record<string, FeatureSlug> = {
  "business-intelligence-dashboard": "business-intelligence",
  "ai-smart-analytics-engine": "smart-analytics",
  "ai-assistant-voice": "ai-assistant",
  "mobile-app-real-time": "mobile-app",
  "smart-scheme-generator": "scheme-generator",
  "predictive-profitability-engine": "profitability-engine",
};

export const featureCatalog = Object.values(featureDetails);

export function resolveFeatureSlug(slug: string): FeatureSlug | null {
  if (slug in featureDetails) {
    return slug as FeatureSlug;
  }

  return aliasMap[slug] ?? null;
}

export function getFeatureDetail(slug: string): FeatureDetail | null {
  const resolvedSlug = resolveFeatureSlug(slug);
  return resolvedSlug ? featureDetails[resolvedSlug] : null;
}

export function getRelatedFeatureDetails(slug: string, count = 3): FeatureDetail[] {
  const resolvedSlug = resolveFeatureSlug(slug);

  return featureCatalog.filter((feature) => feature.slug !== resolvedSlug).slice(0, count);
}