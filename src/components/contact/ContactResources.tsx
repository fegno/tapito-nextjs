"use client";

import { motion } from "framer-motion";
import {
  HelpCircle,
  Monitor,
  Briefcase,
  Users,
  ArrowRight,
  Send,
  Sparkles,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "@/components/Container";
import Particles from "@/components/Particles";

export default function ContactResources() {
  return (
    <section className="py-32 bg-slate-900 overflow-hidden relative">
      {/* Background layers */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"><Particles /></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(99,102,241,0.2)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/10 mb-5">
              <Sparkles size={12} className="text-indigo-400" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-indigo-300">Resources</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.05]">
              Everything you need<br />
              <span className="gradient-text">to grow with Tapito</span>
            </h2>
          </div>
          <p className="text-[15px] text-slate-400 font-medium max-w-xs leading-relaxed md:text-right">
            Discover the tools, demos, and community behind the world&apos;s fastest-growing retail AI platform.
          </p>
        </motion.div>

        {/* Asymmetric card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Featured card — Help Center */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.015 }}
            className="group lg:col-span-5 relative flex flex-col justify-between p-10 rounded-[1.25rem] bg-gradient-to-br from-indigo-600 to-violet-700 overflow-hidden min-h-[340px]"
          >
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-52 h-52 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-10 w-64 h-64 bg-black/20 rounded-full blur-3xl pointer-events-none" />
            {/* Grid texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 mb-8">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/80">01 — Featured</span>
              </div>
              <div className="w-14 h-14 rounded-[1rem] bg-white/15 border border-white/20 flex items-center justify-center mb-6 group-hover:bg-white/25 transition-colors duration-300">
                <HelpCircle size={26} className="text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-black text-white mb-3 tracking-tight">Help Center</h3>
              <p className="text-sm text-white/70 font-medium leading-relaxed max-w-xs">
                Get detailed documentation, guides, and real-time support for every Tapito feature.
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between mt-10">
              <span className="text-[11px] font-extrabold text-white/60 uppercase tracking-[0.2em]">Explore Now</span>
              <div className="w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-indigo-600 transition-all duration-300">
                <ArrowRight size={16} className="text-white group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all duration-300" />
              </div>
            </div>
          </motion.a>

          {/* Right 3 cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                num: "02",
                title: "Interactive Demo",
                desc: "Experience the full power of Tapito AI with our hands-on product walkthrough.",
                icon: Monitor,
                accent: "group-hover:bg-violet-600",
                glow: "group-hover:bg-violet-500/10",
                tag: "group-hover:border-violet-500/40 group-hover:text-violet-300",
              },
              {
                num: "03",
                title: "Careers",
                desc: "Join our mission to revolutionize retail with artificial intelligence.",
                icon: Briefcase,
                accent: "group-hover:bg-blue-600",
                glow: "group-hover:bg-blue-500/10",
                tag: "group-hover:border-blue-500/40 group-hover:text-blue-300",
              },
              {
                num: "04",
                title: "Growth Community",
                desc: "Connect with 5,000+ retail leaders and share proven growth strategies.",
                icon: Users,
                accent: "group-hover:bg-emerald-600",
                glow: "group-hover:bg-emerald-500/10",
                tag: "group-hover:border-emerald-500/40 group-hover:text-emerald-300",
              },
            ].map((r, i) => (
              <motion.a
                key={i}
                href="#"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.55 }}
                whileHover={{ y: -5 }}
                className={cn(
                  "group relative flex flex-col justify-between p-7 rounded-[1.25rem] border border-slate-700/80 bg-slate-800/40 overflow-hidden transition-all duration-400",
                  "hover:border-slate-600 hover:bg-slate-800/70"
                )}
              >
                {/* Corner ambient glow */}
                <div className={cn("absolute top-0 right-0 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500", r.glow)} />

                <div className="relative z-10">
                  {/* Number badge */}
                  <span className={cn(
                    "inline-block text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-500 border border-slate-700 px-2.5 py-1 rounded-full mb-6 transition-all duration-300",
                    r.tag
                  )}>
                    {r.num}
                  </span>

                  <div className={cn(
                    "w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400",
                    "group-hover:text-white group-hover:border-transparent transition-all duration-400 mb-5",
                    r.accent
                  )}>
                    <r.icon size={22} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-[17px] font-black text-white mb-2.5 tracking-tight leading-snug">
                    {r.title}
                  </h3>
                  <p className="text-[13px] text-slate-400 font-medium leading-relaxed">
                    {r.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-8 flex items-center gap-2 text-[11px] font-extrabold text-slate-500 uppercase tracking-[0.18em] group-hover:text-white transition-colors duration-300">
                  Explore
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1 duration-300" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 rounded-[1.25rem] border border-slate-700/60 bg-slate-800/30"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0">
              <Zap size={18} className="text-white" />
            </div>
            <p className="text-[15px] font-semibold text-slate-300">
              Not sure where to start?{" "}
              <span className="text-white font-bold">Our team is happy to guide you.</span>
            </p>
          </div>
          <a
            href="#"
            className="btn-premium inline-flex items-center gap-2 whitespace-nowrap px-7 py-3 text-[14px]"
          >
            <Send size={15} />
            Talk to an Expert
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
