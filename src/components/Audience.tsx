"use client";

import AnimatedLucideIcon from "./AnimatedLucideIcon";
import { motion } from "framer-motion";
import Container from "./Container";
import { cn } from "@/lib/utils";

const industries = [
  { icon: "Building2", name: "Retail Chains", desc: "Consolidate data across 100+ locations." },
  { icon: "ShoppingCart", name: "Supermarkets", desc: "Optimize inventory and basket value." },
  { icon: "Shirt", name: "Fashion & Apparel", desc: "Trend forecasting and loyalty tracking." },
  { icon: "Utensils", name: "F&B Chains", desc: "Time-of-day analytics and menu optimization." },
  { icon: "Laptop", name: "Electronics", desc: "Track high-value item lifecycles." },
  { icon: "Sparkles", name: "Beauty & Wellness", desc: "Personalized replenishment reminders." },
];

export default function Audience() {
  return (
    <section className="bg-slate-950 py-[80px] lg:py-[120px] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,_rgba(37,99,235,0.15),transparent_70%)]" />
      
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6"
          >
            <AnimatedLucideIcon name="Target" size={14} />
            TARGET AUDIENCE
          </motion.div>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Designed for Every <br /> <span className="text-blue-500">Retail Model.</span>
          </h3>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Whether you run a luxury flagship or a national supermarket chain, Tapito scales with your ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            { icon: "Building2", name: "Retail Chains", desc: "Consolidate data across 100+ locations.", color: "from-orange-500 to-amber-500", img: "/ai-sales-intelligence.png" },
            { icon: "ShoppingCart", name: "Supermarkets", desc: "Optimize inventory and basket value.", color: "from-purple-500 to-indigo-500", img: "/automated-engagement.png" },
            { icon: "Shirt", name: "Fashion & Apparel", desc: "Trend forecasting and loyalty tracking.", color: "from-pink-500 to-rose-500", img: "/retail_customer_analytics_digital_overlay_1775651982487.png" },
            { icon: "Utensils", name: "F&B Chains", desc: "Time-of-day analytics and menu optimization.", color: "from-emerald-500 to-teal-500", img: "/predictive_inventory_retail_ai_1775652149852.png" },
            { icon: "Laptop", name: "Electronics", desc: "Track high-value item lifecycles.", color: "from-blue-500 to-cyan-500", img: "/retail_ai_dashboard_premium_1775651628420.png" },
            { icon: "Sparkles", name: "Beauty & Wellness", desc: "Personalized replenishment reminders.", color: "from-violet-500 to-fuchsia-500", img: "/predictive_inventory_retail_ai_1775652149852.png" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group h-[320px] lg:h-[380px] rounded-[2.5rem] p-px overflow-hidden cursor-pointer"
            >
              {/* Animated Glowing Border */}
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-100 transition-opacity duration-500", item.color)} />
              
              {/* Outer Glow */}
              <div className={cn("absolute inset-0 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500", item.color.replace('from-', 'bg-'))} />

              {/* Main Card Content */}
              <div className="relative h-full w-full bg-slate-950 rounded-[2.5rem] overflow-hidden p-8 flex flex-col justify-between">
                {/* Background Image (Subtle) */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                   <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover opacity-20 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                </div>

                <div className="relative z-10">
                  <div className={cn("w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500")}>
                    <AnimatedLucideIcon name={item.icon} size={28} />
                  </div>
                </div>

                <div className="relative z-10">
                  <h4 className="text-2xl font-black text-white mb-3 tracking-tight">{item.name}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.a
            href="/solutions"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-full bg-white text-slate-950 font-black text-sm uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-blue-500 hover:text-white transition-all shadow-xl shadow-white/5"
          >
            Explore Solutions
            <AnimatedLucideIcon name="ArrowRight" size={16} />
          </motion.a>
        </div>
      </Container>
    </section>
  );
}

