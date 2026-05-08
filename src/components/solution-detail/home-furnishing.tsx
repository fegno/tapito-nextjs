"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Container from "@/components/Container";
import { CheckCircle2, Package, Home, PaintBucket, Lightbulb, Bath, Armchair, XCircle, Brain, Zap, MessageSquare, DollarSign, Layers, ShieldCheck, Repeat, UserCheck, BarChart, Users, Search, Target, Sofa, Lamp, Palette, Layout } from "lucide-react";
import AnimatedLucideIcon from "../AnimatedLucideIcon";
import { ActivityIcon } from "lucide-animated";

const HomeFurnishing = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Parallax transforms
  const y1 = useTransform(smoothProgress, [0, 1], [0, -100]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, 100]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.2], [0.9, 1]);

  const needs = [
    { icon: Layout, label: "Teapoys" },
    { icon: Palette, label: "Rugs & Mats" },
    { icon: Armchair, label: "Cushions" },
    { icon: Lamp, label: "Lighting" },
    { icon: Home, label: "Wall Decor" },
    { icon: Package, label: "Curtains" },
  ];

  const consequences = [
    "Incomplete lifestyle selling",
    "Single-category purchase leakage",
    "Missed interior project opportunities",
    "Weak customer 'room-view' data",
    "Traditional static inventory pushing",
    "Lower average order value (AOV)",
    "Fragile customer loyalty"
  ];

  return (
    <section ref={containerRef} className="overflow-hidden relative">
      {/* Dynamic Background Blobs */}
      <div className="bg-slate-900 py-[80px] xl:py-[100px] 2xl:py-[160px]">
        <motion.div 
          style={{ y: y1, opacity: 0.4 }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" 
        />
        <motion.div 
          style={{ y: y2, opacity: 0.3 }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full translate-x-1/4 translate-y-1/4" 
        />
      <Container>
        <motion.div style={{ opacity, scale }}>
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-xs font-black tracking-[0.3em] uppercase text-indigo-400 mb-6 block"
              >
                The Retail Gap
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                Why Home Furnishing <br /> <span className="text-indigo-500">Sales Stay Stagnant</span>
              </h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                Most customers walk in for a specific item like a sofa. Without intelligent prompts, sales teams fail to sell the complete lifestyle vision, leaving 60% of the potential project revenue on the table.
              </p>
              
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden group">
                 <div className="text-sm font-bold mb-3 text-indigo-500 uppercase tracking-widest">Furnishing Case Study</div>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  The "Sofa-Only" Purchase Trap
                </h4>
                <p className="text-slate-400 mb-8 font-medium">A customer buying a luxury sofa for their living room inherently needs:</p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                  {needs.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-2xl p-4 hover:bg-indigo-600/20 transition-all"
                    >
                      <AnimatedLucideIcon icon={item.icon} size={18} color="white" />
                      <span className="text-sm font-bold text-slate-300">{item.label}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-3">
                  <p className="text-rose-400 text-xs font-black uppercase tracking-widest mb-4">Without Tapito, this leads to:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {consequences.map((text, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-400 text-xs font-bold">
                        <AnimatedLucideIcon icon={XCircle} size={14} className="text-rose-500/50" /> {text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              style={{ y: y1 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 bg-white rounded-[3.5rem] p-10 lg:p-16 shadow-2xl shadow-indigo-950/40 overflow-hidden">
                 <div className="flex items-center gap-3 mb-10">
                    <div className="w-10 h-10 rounded-xl bg-indigo-900 flex items-center justify-center text-white font-black text-xl italic">T</div>
                    <span className="text-xl font-black text-slate-900 tracking-tight">Tapito Lifestyle Logic</span>
                 </div>

                 <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-6 leading-tight">
                   From Single Items to <br /> <span className="text-indigo-900">Curated Spaces</span>
                 </h3>

                 <p className="text-slate-600 mb-10 leading-relaxed font-medium">
                   Tapito uses AI to understand visual compatibility and project intent. When a sofa is sold, it automatically suggests the perfect teapoy and rug based on aesthetic data.
                 </p>

                 <ul className="space-y-6">
                   {[
                     "Automated Aesthetic Recommendations",
                     "Increases Lifestyle Bundle Sales",
                     "Predictive Room-Completion Triggers",
                     "Real-time Cross-Selling for Staff",
                     "Hyper-Personalized Decor Campaigns"
                   ].map((item, i) => (
                     <motion.li 
                       key={i} 
                       initial={{ opacity: 0, x: 20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ delay: i * 0.1 }}
                       className="flex items-start gap-4"
                     >
                       <div className="w-6 h-6 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0 mt-1">
                         <CheckCircle2 size={14} />
                       </div>
                       <span className="text-slate-700 font-bold">{item}</span>
                     </motion.li>
                   ))}
                 </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
        </Container>

        <Container>
        {/* AI Lifestyle Intelligence Engine Details */}
        <div className="mt-32 pt-32 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
             {/* Tapito Continuously Analyzes Card */}
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative p-10 lg:p-14 rounded-[2rem] border border-indigo-500/20 overflow-hidden group shadow-2xl shadow-indigo-500/5 min-h-[500px]"
             >
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-slate-950" />
                  <img 
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000" 
                    alt="Living Room Analyzes" 
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 via-transparent to-transparent" />
                </div>

                <div className="relative z-10">
                  {/* Top Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-500 mb-8 border border-indigo-500/20  transition-all duration-500">
                    <AnimatedLucideIcon icon={ActivityIcon} size={32} className="group-hover:text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-4">Tapito Vision Analytics</h3>
                  <div className="w-16 h-1 bg-indigo-600/50 rounded-full mb-10" />

                  <div className="space-y-6">
                    {[
                      "Home furnishing visual pairings",
                      "Lifestyle-based category logic",
                      "Customer interior design intent",
                      "Floor staff conversion velocity"
                    ].map((text, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4 text-slate-300 font-bold text-lg"
                      >
                        <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                           <AnimatedLucideIcon icon={CheckCircle2} size={16} color="white" />
                        </div>
                        {text}
                      </motion.div>
                    ))}
                  </div>
                </div>
             </motion.div>

             {/* And Automatically Generates Card */}
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative p-10 lg:p-14 rounded-[2rem] border border-pink-500/20 overflow-hidden group shadow-2xl shadow-pink-500/5 min-h-[500px]"
             >
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-slate-950" />
                  <img 
                    src="https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?auto=format&fit=crop&q=80&w=1000" 
                    alt="Interior Design Generates" 
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 via-transparent to-transparent" />
                </div>

                <div className="relative z-10">
                  {/* Top Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-pink-600/10 flex items-center justify-center text-pink-500 mb-8 border border-pink-500/20  transition-all duration-500">
                    <AnimatedLucideIcon icon={Zap} size={32} className="group-hover:text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-4">Automatically Recommends</h3>
                  <div className="w-24 h-1 bg-pink-600/50 rounded-full mb-10" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {[
                      "Perfect Teapoy matches",
                      "Visual rug compatibility",
                      "Coordinated cushion sets",
                      "Wall art pairings",
                      "Project-based decor offers",
                      "Lifestyle upgrade triggers",
                      "AI-curated room lookbooks",
                      "Incentive-driven cross-sales"
                    ].map((text, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-4 text-slate-300 font-bold text-[15px]"
                      >
                        <div className="w-6 h-6 rounded-full bg-pink-600 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(219,39,119,0.4)]">
                           <CheckCircle2 size={14} className="text-white" />
                        </div>
                        {text}
                      </motion.div>
                    ))}
                  </div>
                </div>
             </motion.div>
          </div>
        </div>
        </Container>
      </div>

      <div className="bg-indigo-50 py-[80px] xl:py-[100px] 2xl:py-[160px] relative">
        <Container>
        {/* Sales Performance Section */}
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
             {/* Left Content */}
             <motion.div 
               initial={{ opacity: 0, x: -30 }} 
               whileInView={{ opacity: 1, x: 0 }} 
               viewport={{ once: true }}
               className="bg-white rounded-[3.5rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl shadow-indigo-500/5 border border-white"
             >
                {/* Decorative ClipPath Background */}
                <div 
                  className="absolute top-0 right-0 w-[70%] h-full bg-indigo-50/50 pointer-events-none" 
                  style={{ clipPath: 'ellipse(100% 100% at 100% 50%)' }}
                />

                <div className="relative z-10">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                     Conversion Growth
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                    Maximize Every <br /> <span className="text-indigo-900">Showroom Visit</span>
                  </h2>
                  <p className="text-lg text-slate-500 leading-relaxed font-medium mb-12 max-w-xl">
                    Tapito transforms your sales floor into an intelligent advisory team. No more missed opportunities for teapoys, lighting, or rugs when a customer buys a sofa.
                  </p>
                  
                  <div className="space-y-5">
                    {[
                      "Linking big-ticket items with accessories",
                      "Automating project-based follow-ups",
                      "Real-time visual pairing for floor staff"
                    ].map((text, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4 text-slate-700 font-bold"
                      >
                         <div className="w-6 h-6 rounded-full border-2 border-indigo-600 flex items-center justify-center shrink-0">
                            <CheckCircle2 size={12} className="text-indigo-600 font-black" />
                         </div>
                         {text}
                      </motion.div>
                    ))}
                  </div>
                </div>
             </motion.div>

             {/* Right Content - Vertical Timeline */}
             <div className="relative pl-12 lg:pl-24">
                {/* Vertical Line with Flowing Animation */}
                <div className="absolute left-[23px] lg:left-[39px] top-3 bottom-8 w-[3px] bg-slate-200 rounded-full overflow-hidden">
                   <motion.div 
                     className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-indigo-400 to-transparent"
                     animate={{ y: ["-160px", "600px"] }}
                     transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "linear" 
                     }}
                   />
                </div>

                <div className="space-y-16 relative z-10">
                   {[
                     { title: "Identify Lifestyle Intent", desc: "Understand if they are furnishing a room or just buying a single replacement.", icon: Sofa },
                     { title: "Smart Teapoy Pairing", desc: "Suggest tables and mats that visually match the primary furniture selection.", icon: Layout },
                     { title: "Automate Room-View", desc: "Send personalized lookbooks of matching decor to their WhatsApp instantly.", icon: MessageSquare },
                     { title: "Measure Staff Upsell", desc: "Track which staff members are successfully selling the complete lifestyle.", icon: BarChart }
                   ].map((item, i) => (
                     <motion.div 
                       key={i}
                       initial={{ opacity: 0, x: 20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.1 }}
                       className="flex items-start gap-6 relative group"
                     >
                        {/* Branching Dot and Connector Line */}
                        <div className="absolute -left-[32px] lg:-left-[48px] top-6 lg:top-8 flex items-center">
                           <motion.div 
                             animate={{ 
                               scale: [1, 1.5, 1],
                               backgroundColor: ["#818cf8", "#4f46e5", "#818cf8"]
                             }}
                             transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                             className="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.5)]" 
                           />
                           <div className="w-4 lg:w-6 h-[2px] bg-gradient-to-r from-indigo-400 to-indigo-200" />
                        </div>

                        {/* Timeline Icon with Pulse */}
                        <motion.div 
                          animate={{ 
                            boxShadow: ["0 0 0px rgba(79, 70, 229, 0)", "0 0 20px rgba(79, 70, 229, 0.2)", "0 0 0px rgba(79, 70, 229, 0)"]
                          }}
                          transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
                          className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-500 relative z-20"
                        >
                           <AnimatedLucideIcon icon={item.icon} size={24} color="#312e81" />
                        </motion.div>
                        
                        <div className="pt-1 lg:pt-3">
                           <h4 className="text-xl font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{item.title}</h4>
                           <p className="text-slate-500 font-medium leading-relaxed max-w-sm">{item.desc}</p>
                        </div>
                     </motion.div>
                   ))}
                </div>
             </div>
          </div>
        </div>
        </Container>
      </div>

      <div className="bg-slate-900 py-[80px] xl:py-[100px] 2xl:py-[160px]">
        <Container>
        <div className="text-center">
        <motion.div style={{ opacity }}>
              <span className="text-xs font-black tracking-[0.3em] uppercase text-indigo-400 mb-6 block">The Result</span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-20">
                Lifestyle Impact
              </h2>
           </motion.div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Higher Average Basket", desc: "Every sofa sale becomes a living room project sale through AI curation.", icon: DollarSign },
                { title: "Visual Style Alignment", desc: "Tapito ensures suggested accessories match the visual aesthetic automatically.", icon: Layers },
                { title: "Improved Showroom ROI", desc: "Maximize the revenue potential of every walk-in customer with logic.", icon: Target },
                { title: "Deeper Customer Retention", desc: "Customers return to complete their room as Tapito triggers future needs.", icon: Repeat },
                { title: "Curated Style Recommendations", desc: "Automated lookbooks sent via WhatsApp for high-conversion engagement.", icon: UserCheck },
                { title: "Lower Customer Acquisition", desc: "Increase revenue from existing visitors instead of buying more ads.", icon: BarChart },
                { title: "Empowered Sales Staff", desc: "Equip floor teams with AI designers to help close complex bundle deals.", icon: Users },
                { title: "24/7 Lifestyle Engagement", desc: "Automated project follow-ups via WhatsApp, SMS and AI voice calls.", icon: MessageSquare },
                { title: "Style Performance Data", desc: "Understand which aesthetic trends are driving the most revenue.", icon: Search }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  className="group flex flex-col items-start gap-6 p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.02] transition-all text-left relative overflow-hidden"
                >
                   {/* Background Accent */}
                   <div className="absolute left-0 top-0 w-1 h-full bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                   
                   <div className="flex w-full justify-between items-start">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 flex items-center justify-center shrink-0">
                         <item.icon className="text-indigo-500 group-hover:scale-110 transition-transform" size={24} />
                      </div>
                   </div>
                   
                   <div>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors leading-tight">{item.title}</h4>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
        </Container>
      </div>
    </section>
  );
};

export default HomeFurnishing;
