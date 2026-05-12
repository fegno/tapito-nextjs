"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import { ArrowRight, Plus } from "lucide-react";
import AnimatedLucideIcon from "../AnimatedLucideIcon";
import { cn } from "@/lib/utils";

interface StrategicAdvantageProps {
  data: {
    title: string;
    howWeHelp: {
      title: string;
      desc: string;
      image: string;
      icon: any;
    }[];
  };
}

const StrategicAdvantage = ({ data }: StrategicAdvantageProps) => {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <Container>
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="flex justify-center mb-6">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-full border border-slate-100 shadow-sm"
          >
            <img src="/logo.svg" alt="Tapito" className="h-4 w-auto" />
            <div className="w-[1px] h-3 bg-slate-300" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#09358c]">
              Strategic Advantage
            </span>
          </motion.div>
        </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Which way we help <br /> the{" "}
            <span className="text-[#09358c]">{data.title}</span> vertical
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.howWeHelp.map((item: any, i: number) => {
            const themes = [
              { bg: "from-emerald-50/80", glow: "bg-emerald-400/20", icon: "bg-emerald-500" },
              { bg: "from-blue-50/80", glow: "bg-blue-400/20", icon: "bg-blue-500" },
              { bg: "from-purple-50/80", glow: "bg-purple-400/20", icon: "bg-purple-500" },
              { bg: "from-indigo-50/80", glow: "bg-indigo-400/20", icon: "bg-indigo-500" },
              { bg: "from-orange-50/80", glow: "bg-orange-400/20", icon: "bg-orange-500" },
              { bg: "from-teal-50/80", glow: "bg-teal-400/20", icon: "bg-teal-500" }
            ];
            const theme = themes[i % themes.length];
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className={cn(
                  "group relative h-[420px] rounded-[2.5rem] border-2 border-white p-10 cursor-pointer shadow-xl shadow-slate-200/40 flex flex-col transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden bg-gradient-to-br to-white",
                  theme.bg
                )}
              >
                {/* Reference-style Background Glow */}
                <div className={cn(
                  "absolute -bottom-24 -left-24 w-80 h-80 blur-[100px] rounded-full transition-opacity duration-700 opacity-60 group-hover:opacity-100",
                  theme.glow
                )} />
                
                {/* Top Row: Dual Icons & Action */}
                <div className="flex items-start justify-between mb-10 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg",
                      theme.icon
                    )}>
                      <AnimatedLucideIcon icon={item.icon} size={26} />
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-md border border-white flex items-center justify-center text-slate-400 shadow-sm group-hover:text-[#09358c] transition-colors">
                      <Plus size={22} />
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-slate-200/60 flex items-center justify-center text-slate-300 group-hover:border-[#09358c]/30 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#09358c] transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1">
                  <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed line-clamp-4">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Redirection Arrow */}
                <div className="relative z-10 flex justify-end">
                  <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-lg flex items-center justify-center text-slate-900 transition-all duration-500 group-hover:bg-[#09358c] group-hover:text-white group-hover:scale-110">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default StrategicAdvantage;
