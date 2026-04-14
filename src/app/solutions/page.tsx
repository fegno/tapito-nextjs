"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Layers, Target, TrendingUp, Sparkles, Building2, Globe, Shield, Zap } from "lucide-react";
import Container from "@/components/Container";
import { cn } from "@/lib/utils";

const SOLUTION_SEGMENTS = [
  {
    icon: Layers,
    title: "Unified Retail Data Integration",
    subtitle: "Consolidate every data stream into a single source of truth.",
    description: "Break down data silos across POS, CRM, and eCommerce platforms. Tapito's engine ingests raw transaction data, customer behaviors, and inventory levels in real-time, providing a unified foundation for strategic decision-making.",
    features: ["Real-time POS Syncing", "Multi-store Data Consolidation", "Automatic Data Cleaning", "Identity Resolution"],
    image: "/assets/images/solution-data.png", // Hypothetical path
    color: "blue"
  },
  {
    icon: Sparkles,
    title: "AI-Driven Customer Intelligence",
    subtitle: "Predictive modeling that understands every customer journey.",
    description: "Move beyond basic reporting with Tapito’s deep learning models. Analyze RFM patterns, predict churn risks, and identify high-value customer segments before they even complete a purchase. Our AI doesn't just show 'what' happened—it tells you 'why'.",
    features: ["Advanced RFM Segmentation", "Churn Prediction Models", "Customer Lifetime Value (CLV)", "Behavioral Pattern Matching"],
    image: "/assets/images/solution-ai.png",
    color: "indigo"
  },
  {
    icon: Zap,
    title: "Automated Campaign Orchestration",
    subtitle: "Launch perfect campaigns at the perfect moment.",
    description: "Close the loop between insights and action. Tapito automatically triggers personalized marketing campaigns across email, SMS, and push notifications based on real-time triggers. Zero manual effort, maximum ROI focus.",
    features: ["Event-Driven Triggers", "Cross-Channel Automation", "A/B Testing & Optimization", "End-to-end ROI Attribution"],
    image: "/assets/images/solution-automation.png",
    color: "violet"
  }
];

const SolutionCard = ({ solution, index }: { solution: typeof SOLUTION_SEGMENTS[0], index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <section className="py-24 md:py-32 overflow-hidden border-b border-slate-50 last:border-0">
      <Container>
        <div className={cn(
          "flex flex-col lg:flex-row items-center gap-16 lg:gap-24",
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        )}>
          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: isEven ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center mb-8",
                solution.color === "blue" ? "bg-blue-50 text-blue-600" :
                solution.color === "indigo" ? "bg-indigo-50 text-indigo-600" : "bg-violet-50 text-violet-600"
              )}>
                <solution.icon size={28} />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                {solution.title}
              </h2>
              <p className="text-xl font-bold text-slate-400 mb-8 uppercase tracking-widest text-sm">
                {solution.subtitle}
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                {solution.description}
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {solution.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 font-bold text-sm tracking-tight">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-900 group">
                 Explore this solution <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
          
          {/* Visual Placeholder */}
          <div className="flex-1 w-full max-w-3xl">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative aspect-[4/3] rounded-[3rem] bg-gradient-to-br from-white to-slate-50 border border-slate-100 shadow-2xl overflow-hidden group"
             >
                {/* Abstract pattern mock */}
                <div className="absolute inset-0 bg-[#f8fafc]">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white rounded-3xl shadow-2xl p-8 transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-1">
                      <div className="w-full h-full bg-slate-50 rounded-xl overflow-hidden relative">
                         <div className="absolute top-4 left-4 right-4 flex gap-4">
                            <div className="w-1/3 h-2 bg-slate-100 rounded-full" />
                            <div className="w-1/4 h-2 bg-slate-100 rounded-full" />
                         </div>
                         <div className="absolute bottom-4 left-4 right-4 h-1/2 bg-white rounded-lg shadow-sm" />
                      </div>
                   </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
             </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-[#fcfcfd]">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.4]" />
        
        <Container>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 mb-8 text-[11px] font-bold uppercase tracking-[0.3em] text-blue-600 bg-blue-50/80 rounded-full border border-blue-100/50">
                Transformative Results
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.95]">
                Purpose-built tools for <br /> <span className="text-blue-600">modern retailers.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
                We empower retail teams with deep data integration, predictive customer intelligence, and zero-effort orchestration.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="bg-slate-950 text-white px-10 py-5 rounded-2xl font-black text-base uppercase tracking-widest shadow-2xl hover:bg-black transition-all">
                  Request a Solution Demo
                </button>
                <div className="flex -space-x-3">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white" />
                   ))}
                   <div className="pl-6 flex flex-col items-start justify-center">
                      <span className="text-xs font-black text-slate-900 tracking-tighter">Trusted by 500+</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none">Global Retailers</span>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Main Solution Segments */}
      <div className="bg-white">
        {SOLUTION_SEGMENTS.map((solution, index) => (
          <SolutionCard key={index} solution={solution} index={index} />
        ))}
      </div>

      {/* Trust & Scale Section */}
      <section className="py-32 bg-slate-950 text-white overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-blue-400 text-[11px] font-black uppercase tracking-[0.3em] mb-6 block">Enterprise Ready</span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">Built to scale with your ambition.</h2>
              <p className="text-slate-400 text-lg font-medium leading-relaxed mb-12">
                Whether you’re managing a single flagship or coordinates 2,000 global locations, Tapito provides the infrastructure needed to maintain a high-performance retail environment.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                 <div className="border-l-2 border-blue-500 pl-6">
                    <div className="text-3xl font-black mb-1">99.99%</div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Global Uptime</p>
                 </div>
                 <div className="border-l-2 border-indigo-500 pl-6">
                    <div className="text-3xl font-black mb-1">2.4M+</div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Real-time syncs/day</p>
                 </div>
              </div>
            </div>
            
            <div className="relative">
               <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
               <div className="relative p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl">
                  <div className="flex gap-4 mb-10">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="space-y-6">
                     {[1,2,3].map(i => (
                       <div key={i} className="h-4 bg-white/5 rounded-full w-full relative overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }} 
                            whileInView={{ width: "70%" }} 
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: i * 0.2 }}
                            className="absolute inset-y-0 left-0 bg-blue-500/40" 
                          />
                       </div>
                     ))}
                  </div>
                  <p className="mt-8 text-sm font-bold text-slate-500 uppercase tracking-widest text-center italic">Processing network intelligence...</p>
               </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-40 bg-[#fcfcfd]">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 tracking-tighter">Ready to redesign <br /> your retail future?</h2>
            <p className="text-xl text-slate-500 font-medium mb-12 max-w-2xl mx-auto">
              Schedule a personalized walkthrough of the Tapito platform and see how AI can transform your specific retail operation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <button className="w-full sm:w-auto bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-lg shadow-xl shadow-blue-600/30 hover:bg-blue-700 transition-all">
                  Book a Strategy Call
               </button>
               <button className="w-full sm:w-auto bg-white border border-slate-200 text-slate-900 px-12 py-6 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all">
                  Contact Sales
               </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Simple Footer Links */}
      <footer className="py-20 border-t border-slate-100 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-2xl font-black text-slate-950 tracking-tighter">Tapito</div>
            <div className="flex flex-wrap justify-center gap-8">
               {['Platform', 'Solutions', 'Pricing', 'Resources', 'Legal'].map(link => (
                 <a key={link} href="#" className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors">{link}</a>
               ))}
            </div>
            <div className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">© 2026 Tapito AI. Global Operations.</div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
