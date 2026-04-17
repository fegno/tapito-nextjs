"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import { Mic, TrendingDown, TrendingUp, ShieldCheck, PieChart, PlayCircle } from "lucide-react";

export default function AboutDifferentiators() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-32">
            <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#09358c] text-[11px] font-bold uppercase tracking-widest mb-6">
                    Our Edge
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
                    Outperforming the <br /> Competition with AI
                </h2>
                <div className="space-y-6">
                    {[
                        { title: "Zero Manual Effort", desc: "Our platform automates the heavy lifting, allowing your team to focus on strategy.", icon: ShieldCheck },
                        { title: "Voice Query AI Assistant", desc: "Ask questions in natural language and get instant data-driven answers.", icon: Mic },
                        { title: "Growth Simulator", desc: "Predict the impact of your marketing campaigns before you launch them.", icon: TrendingUp }
                    ].map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex gap-5"
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                                <item.icon className="text-[#05a0ec]" size={20} />
                            </div>
                            <div>
                                <h4 className="text-lg font-black text-slate-900 mb-1">{item.title}</h4>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="lg:w-1/2 relative bg-slate-900 rounded-[3.5rem] p-10 overflow-hidden shadow-2xl">
                {/* Simulated Growth UI */}
                <div className="relative z-10">
                    <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-6">
                        <div className="text-white">
                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-1">Status</div>
                            <div className="text-lg font-black flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                Growth Simulator Active
                            </div>
                        </div>
                        <div className="px-4 py-1.5 rounded-lg bg-white/10 text-white text-[12px] font-black tracking-tight">
                            Live Forecast
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-10">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <div className="text-slate-400 text-xs font-bold uppercase mb-2">Revenue ROI</div>
                            <div className="text-3xl font-black text-white">+142%</div>
                            <div className="text-[10px] text-emerald-400 font-bold mt-1 flex items-center gap-1">
                                <TrendingUp size={10} /> Prediction
                            </div>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <div className="text-slate-400 text-xs font-bold uppercase mb-2">Health Score</div>
                            <div className="text-3xl font-black text-white">94/100</div>
                            <div className="text-[10px] text-sky-400 font-bold mt-1 flex items-center gap-1">
                                <ShieldCheck size={10} /> Optimized
                            </div>
                        </div>
                    </div>

                    {/* Simple chart visualization with motion */}
                    <div className="h-48 w-full flex items-end gap-3 px-4">
                        {[40, 60, 45, 80, 55, 95, 75, 100].map((h, i) => (
                            <motion.div 
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: i * 0.1 }}
                                className={`flex-1 rounded-t-lg bg-gradient-to-t ${i === 7 ? 'from-[#06dcc3] to-white' : 'from-blue-600/50 to-blue-400/20'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Glassy overlay for "Premium" feel */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#09358c]/20 to-transparent pointer-events-none" />
            </div>
        </div>

        {/* Client Logos / Proof Section */}
        <div className="pt-20 border-t border-slate-100">
            <div className="text-center mb-12">
                <p className="text-sm font-black text-slate-400 uppercase tracking-[0.3em]">Trusted by Global Retailers</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                {/* Placeholder logos - text based for simplicity but looking professional */}
                {['LUXE', 'ZEPHYR', 'APEX', 'NOVA', 'ELEVATE'].map((logo, i) => (
                    <div key={i} className="text-2xl font-black tracking-tighter text-slate-900">{logo}</div>
                ))}
            </div>
        </div>
      </Container>
    </section>
  );
}
