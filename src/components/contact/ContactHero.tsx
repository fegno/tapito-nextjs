"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Briefcase,
  Users,
  Megaphone,
  Globe,
  Clock,
  Zap,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactHero() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2.5 px-5 py-2 mb-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#09358c] bg-blue-50/80 backdrop-blur-xl rounded-full border border-blue-200/50 shadow-sm shadow-blue-100/50">
        <Sparkles size={13} className="text-[#05a0ec] animate-pulse" />
        Contact Us
      </div>

      {/* Headline with animated underline */}
      <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
        Get in touch with <br />
        <span className="relative inline-block">
          <span className="text-[#09358c]">our team</span>
          <motion.span
            className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-[#09358c] to-[#05a0ec]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
          />
        </span>
      </h1>

      <p className="text-xl text-slate-500 font-medium mb-10 leading-relaxed max-w-lg">
        Connect with us to explore how Tapito can help you elevate customer engagement,
        build stronger relationships, and drive business success.
      </p>

      {/* Stat pills */}
      <div className="flex flex-wrap gap-3 mb-12">
        {[
          { icon: Clock,  label: "Response in < 2 hrs",  color: "text-blue-500" },
          { icon: Globe,  label: "16 cities worldwide",   color: "text-sky-500" },
          { icon: Users,  label: "5,000+ retail brands",  color: "text-cyan-500" },
          { icon: Zap,    label: "24 / 7 support",        color: "text-emerald-500", live: true },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.08, type: "spring", stiffness: 220 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm text-[13px] font-semibold text-slate-600 hover:shadow-md transition-shadow duration-300"
          >
            <div className="relative">
              <s.icon size={13} className={s.color} />
              {s.live && (
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              )}
            </div>
            {s.label}
          </motion.div>
        ))}
      </div>

      {/* Reach out list */}
      <div className="space-y-8 mb-16">
        <h3 className="text-lg font-bold text-slate-800 uppercase tracking-widest">Reach out to us for:</h3>
        <div className="space-y-6">
          {[
            { icon: Globe,     text: "Platform details and personal demos", color: "text-blue-500",    bg: "bg-blue-50"    },
            { icon: Users,     text: "Partnerships",                        color: "text-sky-500",     bg: "bg-sky-50"     },
            { icon: Megaphone, text: "Press queries",                       color: "text-cyan-500",    bg: "bg-cyan-50"    },
            { icon: Briefcase, text: "Career opportunities",               color: "text-emerald-500", bg: "bg-emerald-50" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-5 group cursor-default"
            >
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[10deg] shadow-sm", item.bg, item.color)}>
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                >
                  <item.icon size={22} strokeWidth={2} />
                </motion.div>
              </div>
              <span className="text-lg font-semibold text-slate-600 group-hover:text-[#09358c] group-hover:translate-x-1 transition-all duration-300">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Email contacts */}
      <div className="pt-12 border-t border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { title: "Media & Press",  email: "press@tapito.ai",  icon: Mail },
            { title: "Other Queries",  email: "hello@tapito.ai",  icon: MessageSquare },
          ].map((c, i) => (
            <div key={i}>
              <h4 className="text-xl font-black text-slate-900 mb-4">{c.title}</h4>
              <p className="text-slate-500 font-medium leading-relaxed text-[15px]">
                Write to us at{" "}
                <a href={`mailto:${c.email}`} className="text-[#05a0ec] font-bold hover:underline">
                  {c.email}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
