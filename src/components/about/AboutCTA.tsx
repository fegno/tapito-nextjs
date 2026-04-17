"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import { ArrowRight, Calculator, PieChart, Sparkles } from "lucide-react";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container>
        <div className="relative rounded-[4rem] bg-gradient-to-br from-[#09358c] via-[#05a0ec] to-[#06dcc3] p-10 md:p-20 overflow-hidden shadow-2xl">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="text-white">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-widest mb-8">
                        <Sparkles size={14} /> Ready to Transform?
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-[1]">
                        Unlock Your <br /> Growth Potential
                    </h2>
                    <p className="text-lg text-white/80 font-medium mb-10 leading-relaxed max-w-lg">
                        Join hundreds of retail brands that are scaling with zero manual effort. See the difference AI can make in your revenue.
                    </p>
                    <div className="flex flex-wrap gap-6">
                        <Link href="/contact" className="px-8 py-4 bg-white text-[#09358c] font-black rounded-2xl hover:scale-105 transition-transform flex items-center gap-3 shadow-xl">
                            Book a Live Demo <ArrowRight size={20} />
                        </Link>
                        <button className="px-8 py-4 bg-black/20 backdrop-blur-md text-white border border-white/20 font-black rounded-2xl hover:bg-white/30 transition-all flex items-center gap-3">
                            Launch Product Tour
                        </button>
                    </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-[3rem] p-10 border border-white/20 shadow-2xl">
                    <div className="flex items-center gap-4 mb-8 text-white">
                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center">
                            <Calculator className="text-[#09358c]" size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-black">ROI Calculator</h3>
                            <p className="text-sm text-white/60 font-medium">Estimate your revenue uplift</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between text-xs font-black text-white/80 uppercase tracking-widest mb-3">
                                <span>Monthly Sessions</span>
                                <span>500k</span>
                            </div>
                            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full w-[70%] bg-emerald-400" />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs font-black text-white/80 uppercase tracking-widest mb-3">
                                <span>Current Conv. Rate</span>
                                <span>2.4%</span>
                            </div>
                            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full w-[40%] bg-sky-400" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 pt-10 border-t border-white/10 text-center">
                        <div className="text-[10px] font-bold text-white/60 uppercase tracking-[0.25em] mb-2">Estimated Annual Uplift</div>
                        <div className="text-5xl font-black text-white tracking-tighter">$1.2M+</div>
                        <p className="text-sm text-emerald-400 font-bold mt-2">Based on current industry metrics</p>
                    </div>
                </div>
            </div>
        </div>
      </Container>
    </section>
  );
}
