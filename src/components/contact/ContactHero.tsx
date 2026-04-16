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
      <div className="inline-flex items-center gap-2.5 px-5 py-2 mb-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-900 bg-gradient-to-r from-indigo-50/90 to-violet-50/90 backdrop-blur-xl rounded-full border border-indigo-200/50 shadow-sm shadow-indigo-100/50">
        <Sparkles size={13} className="text-indigo-500 animate-pulse" />
        Contact Us
      </div>

      {/* Headline with animated underline */}
      <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
        Get in touch with <br />
        <span className="relative inline-block">
          <span className="gradient-text">our team</span>
          <motion.span
            className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
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
          { icon: Clock,  label: "Response in < 2 hrs",  color: "text-indigo-500" },
          { icon: Globe,  label: "16 cities worldwide",   color: "text-violet-500" },
          { icon: Users,  label: "5,000+ retail brands",  color: "text-purple-500" },
          { icon: Zap,    label: "24 / 7 support",        color: "text-rose-500"   },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.08, type: "spring", stiffness: 220 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm text-[13px] font-semibold text-slate-600"
          >
            <s.icon size={13} className={s.color} />
            {s.label}
          </motion.div>
        ))}
      </div>

      {/* Reach out list */}
      <div className="space-y-8 mb-16">
        <h3 className="text-lg font-bold text-slate-800 uppercase tracking-widest">Reach out to us for:</h3>
        <div className="space-y-6">
          {[
            { icon: Globe,     text: "Platform details and personal demos", color: "text-rose-500",    bg: "bg-rose-50"    },
            { icon: Users,     text: "Partnerships",                        color: "text-purple-500",  bg: "bg-purple-50"  },
            { icon: Megaphone, text: "Press queries",                       color: "text-indigo-500",  bg: "bg-indigo-50"  },
            { icon: Briefcase, text: "Career opportunities",               color: "text-emerald-500", bg: "bg-emerald-50" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-5 group"
            >
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm", item.bg, item.color)}>
                <item.icon size={22} strokeWidth={2} />
              </div>
              <span className="text-lg font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
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
                <a href={`mailto:${c.email}`} className="text-indigo-600 font-bold hover:underline">
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
