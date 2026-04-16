"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import mapBg from "@/public/assets/images/contact/map-bg-without-dot.svg";
import BorderGlow from "@/components/BorderGlow";

const OFFICES = [
  { city: "San Francisco",    flag: "🇺🇸", address: "680 California St, Suite 1200, San Francisco, CA 94104, USA" },
  { city: "New York",         flag: "🇺🇸", address: "43 Manhasset Ave, Brooklyn, New York - 11211" },
  { city: "Boston",           flag: "🇺🇸", address: "Office #251, 829 Main Street, Ste. 200, Charlestown, Boston, MA 02129, USA" },
  { city: "Bengaluru",        flag: "🇮🇳", address: "1st Floor, #32, Salarpuria Tower II, Koramangala, Bangalore - 560034, India" },
  { city: "New Delhi",        flag: "🇮🇳", address: "Platina Tower, Mehrauli-Gurgaon Rd, Sector 28, Gurugram, Haryana 122002" },
  { city: "Toronto",          flag: "🇨🇦", address: "Suite 2605, 1228 Lakeshore Boulevard West, Toronto, ON M4E 1B1, Canada" },
  { city: "London",           flag: "🇬🇧", address: "2 Waterhouse Square, 138-142 Holborn, London, EC1N 2SW, United Kingdom" },
  { city: "Berlin",           flag: "🇩🇪", address: "Kurfürstendamm 11, 10719, Berlin, Germany" },
  { city: "São Paulo",        flag: "🇧🇷", address: "R. Purpurina, 400 - Vila Madalena, São Paulo - SP, 05433-000, Brazil" },
  { city: "Singapore",        flag: "🇸🇬", address: "Floor 21, WeWork 9 Battery Rd, Singapore 049910" },
  { city: "Kuala Lumpur",     flag: "🇲🇾", address: "WeWork HQ Plaza Lot 10.17, Seksyen 57, Jln Sultan Ismail, 50250 Kuala Lumpur" },
  { city: "Bangkok",          flag: "🇹🇭", address: "WeWork, T-One Building, 8 Sukhumvit 40 Alley, Phra Khanong, Bangkok 10110" },
  { city: "Jakarta",          flag: "🇮🇩", address: "25th Floor, Revenue Tower, SCBD, Jl. Jend. Sudirman No.52-53, Jakarta 12190" },
  { city: "Ho Chi Minh City", flag: "🇻🇳", address: "WeWork 18, Town Central, 1 Đoàn Văn Bơ, Phường 12, Quận 4, Hồ Chí Minh" },
  { city: "Dubai",            flag: "🇦🇪", address: "Media One Hotel, Floor 7, Media II Tower, Al Falak Street, Dubai" },
  { city: "Sydney",           flag: "🇦🇺", address: "100 Harris Street, Pyrmont, Sydney NSW 2009, Australia" },
];

const MAP_DOTS = [
  { city: "San Francisco",    x: 140, y: 195 },
  { city: "New York",         x: 235, y: 190 },
  { city: "Boston",           x: 250, y: 175 },
  { city: "Toronto",          x: 220, y: 165 },
  { city: "London",           x: 475, y: 155 },
  { city: "Berlin",           x: 515, y: 165 },
  { city: "São Paulo",        x: 340, y: 395 },
  { city: "Dubai",            x: 645, y: 255 },
  { city: "Bengaluru",        x: 742, y: 300 },
  { city: "New Delhi",        x: 735, y: 245 },
  { city: "Singapore",        x: 815, y: 335 },
  { city: "Kuala Lumpur",     x: 810, y: 345 },
  { city: "Bangkok",          x: 800, y: 315 },
  { city: "Jakarta",          x: 825, y: 375 },
  { city: "Ho Chi Minh City", x: 810, y: 325 },
  { city: "Sydney",           x: 915, y: 445 },
];

export default function WorldPresence() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  return (
    <>
      {/* Section header */}
      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-200/60 bg-blue-50/80 mb-6">
            <MapPin size={13} className="text-[#05a0ec]" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#09358c]">
              Global Presence
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">
            Presence Around the World
          </h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            Get in touch with us for any queries. We are happy to help you!
          </p>
        </motion.div>
      </div>

      {/* Map */}
      <div className="relative mb-32 px-4">
        <div className="relative aspect-[2/1] w-full max-w-5xl mx-auto">
          {/* Map background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full relative">
              <Image src={mapBg} alt="Presence Around the World" fill className="object-contain" priority />
            </div>
          </div>

          {/* SVG overlay */}
          <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full z-10 overflow-visible">
            <defs>
              <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#05a0ec" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#05a0ec" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#09358c" />
                <stop offset="100%" stopColor="#05a0ec" />
              </linearGradient>
            </defs>

            {/* Subtle animated connection lines */}
            {MAP_DOTS.slice(0, 6).map((loc, i) => (
              <motion.line
                key={`line-${i}`}
                x1={loc.x} y1={loc.y}
                x2={MAP_DOTS[(i + 5) % MAP_DOTS.length].x}
                y2={MAP_DOTS[(i + 5) % MAP_DOTS.length].y}
                stroke="url(#lineGrad)"
                strokeWidth="0.6"
                strokeDasharray="5 7"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.25 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: i * 0.2 }}
              />
            ))}

            {/* Dots */}
            {MAP_DOTS.map((loc, i) => (
              <motion.g
                key={i}
                className="cursor-pointer group/dot"
                onHoverStart={() => setHoveredCity(loc.city)}
                onHoverEnd={() => setHoveredCity(null)}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 300 }}
              >
                {/* Pulse ring */}
                <motion.circle
                  cx={loc.x} cy={loc.y} r="12"
                  fill="url(#dotGlow)"
                  animate={{ r: [8, 18, 8], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.25 }}
                />

                {/* Main dot */}
                <motion.circle
                  cx={loc.x} cy={loc.y} r="5"
                  className="fill-[#05a0ec] stroke-white stroke-[2]"
                  whileHover={{ scale: 1.8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />

                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredCity === loc.city && (
                    <foreignObject
                      x={loc.x - 60} y={loc.y - 46}
                      width="120" height="40"
                      className="pointer-events-none overflow-visible"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.85 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.85 }}
                        transition={{ duration: 0.18 }}
                        className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest py-1.5 px-3 rounded-lg text-center shadow-xl border border-slate-700 whitespace-nowrap"
                      >
                        {loc.city}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-slate-900" />
                      </motion.div>
                    </foreignObject>
                  )}
                </AnimatePresence>
              </motion.g>
            ))}
          </svg>
        </div>
      </div>

      {/* Office cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {OFFICES.map((office, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-[1.5rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_32px_64px_-16px_rgba(9,53,140,0.12)] transition-all duration-500 overflow-hidden"
            >
              <BorderGlow 
                colorFrom="#09358c" 
                colorTo="#05a0ec" 
                duration={5} 
                size={180} 
                borderRadius="1.5rem" 
                borderWidth={1.5}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-sky-50/0 group-hover:from-blue-50/60 group-hover:to-sky-50/40 transition-all duration-500 rounded-[1.5rem]" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl">{office.flag}</span>
                <h4 className="text-xl font-black text-slate-900 group-hover:text-[#05a0ec] transition-colors uppercase tracking-tight">
                  {office.city}
                </h4>
              </div>
              <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
                {office.address}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
