"use client";

import { motion } from "framer-motion";
import AnimatedLucideIcon from "./AnimatedLucideIcon";
import Link from "next/link";
import Container from "./Container";
import OverViewCard from "./overview-card";

export default function Overview() {
  return (
    <section className="relative section-padding bg-slate-50 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] 2xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100  text-xs font-bold uppercase tracking-widest text-[#09358c]">
              <AnimatedLucideIcon name="BarChart3" size={14} color="#09358c" />
              PLATFORM OVERVIEW
            </div>
            <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-black text-slate-900 leading-tight">
              One Unified <br />
              <span className="text-[#09358c]">Retail Intelligence Engine</span>
            </h2>
            <p className="text-[16px] xl:text-xl text-slate-500 leading-relaxed max-w-xl">
              Connect every retail system into a centralized AI Retail Platform that transforms raw data into actionable business decisions.
            </p>
            <div>
              <Link
                href="/integrations"
                className="inline-flex items-center gap-4 bg-[#09358c] text-white px-8 py-4 rounded-full font-medium text-sm uppercase tracking-[0.15em] hover:bg-[#0a3faa] transition-all shadow-xl shadow-blue-900/20 hover:shadow-2xl hover:shadow-blue-900/30 group active:scale-95"
              >
                <span>Explore More</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#09358c] transition-all duration-300">
                  <AnimatedLucideIcon name="ArrowRight" size={14} />
                </div>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex"
          >
            <OverViewCard />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

