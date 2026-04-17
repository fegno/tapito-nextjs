"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import { MapPin, Globe, ArrowUpRight } from "lucide-react";

export default function AboutPresence() {
  return (
    <section className="py-24 bg-[#fafbfc] relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#05a0ec]/10 text-[#05a0ec] text-[11px] font-bold uppercase tracking-widest mb-6">
                    Global Network
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
                    Rooted in Kochi, <br /> Scaling Globally.
                </h2>
                <p className="text-lg text-slate-500 font-medium mb-10 leading-relaxed">
                    While our heart and headquarters are located in the vibrant city of Kochi, Kerala, our impact is felt across the globe. We bridge world-class AI technology with local retail expertise.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                            <MapPin className="text-[#09358c]" size={24} />
                        </div>
                        <h4 className="text-xl font-black text-slate-900 mb-2">Headquarters</h4>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">
                            Fegno Technologies, Kochi, Kerala, India
                        </p>
                        <a href="https://www.fegno.com" target="_blank" className="inline-flex items-center gap-2 mt-4 text-[#05a0ec] font-bold text-sm hover:underline">
                            www.fegno.com <ArrowUpRight size={14} />
                        </a>
                    </div>
                    
                    <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm">
                        <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mb-6">
                            <Globe className="text-[#05a0ec]" size={24} />
                        </div>
                        <h4 className="text-xl font-black text-slate-900 mb-2">Global Presence</h4>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">
                            Strategic locations across USA, Europe, and Middle East.
                        </p>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2 relative">
                <div className="w-full aspect-[4/3] bg-slate-200 rounded-[3rem] overflow-hidden grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 shadow-2xl">
                    {/* Simplified world map visual using CSS gradients/masking */}
                    <div className="w-full h-full bg-[#09358c] relative">
                         <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
                         <div className="absolute inset-0 flex items-center justify-center">
                            <MapPin className="text-white animate-bounce" size={48} />
                            <div className="absolute top-[60%] left-[55%] text-white text-[10px] font-black uppercase tracking-widest bg-black/20 backdrop-blur-md px-3 py-1 rounded-full">
                                KOCHI
                            </div>
                         </div>
                         {/* Animated connection circles */}
                         <motion.div 
                            animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-white/50 rounded-full"
                         />
                         <motion.div 
                            animate={{ scale: [1, 3], opacity: [0.3, 0] }}
                            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/30 rounded-full"
                         />
                    </div>
                </div>
            </div>
        </div>
      </Container>
    </section>
  );
}
