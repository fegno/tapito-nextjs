"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Container from "@/components/Container";
import { useRouter } from "next/navigation";
import bg from "@/public/assets/images/home-bg.png";
import pause from "@/public/assets/images/pause.svg";
import { ArrowRightIcon } from "lucide-animated";

const slides = [
  { src: "/videos/ai.webm", title: "AI-Powered Predictive Analysis" },
  {
    src: "/videos/business-intellegence.mp4",
    title: "Real-Time Business Intelligence",
  },
  { src: "/videos/growth-simulator.mp4", title: "Advanced Growth Simulator" },
  { src: "/videos/mob-ai.webm", title: "Mobile-First Customer Engagement" },
  { src: "/videos/dashboard-flow.mp4", title: "Unified Command Center" },
];

export default function Hero() {
  const router = useRouter();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[currentVideoIndex];
  const isMobileVideo =
    currentSlide?.src.includes("ai") || currentSlide?.src.includes("mob-ai");

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src={bg.src}
          className="w-full h-full object-cover"
          alt="Background"
        />
      </div>
      <Container className="relative z-10">
        <div className="flex justify-between items-center overflow-hidden gap-12 min-h-screen">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left max-w-[609px] w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 px-[14px] py-[8px] rounded-full border border-[#BFBFBF] flex items-center gap-2"
            >
              <span className="text-[16px] font-normal text-[#AFAFAF] uppercase tracking-wide leading-normal">
                THE FUTURE OF RETAIL AI
              </span>
            </motion.div>

            <h1 className="text-[58px] font-bold leading-[75px] text-white font-satoshi">
              Turn Your Retail Data Into Revenue
              <br />
              <span className="pb-2 px-1 inline-block bg-clip-text text-transparent bg-[linear-gradient(90deg,#09358C_0%,#FFFFFF_100%)]">
                {" "}
                Automatically{" "}
              </span>
            </h1>

            <p className="text-xl lg:text-[18px] xl:text-[20px] 4xl:text-[22px] mb-[60px] leading-relaxed font-normal text-[#BEBEBE]">
              AI-powered analytics, real-time insights, and fully automated
              customer engagement —built to grow your revenue without manual
              effort.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-1.5 sm:px-2 md:px-[2px]">
              <button
                className="btn-premium flex items-center gap-2 text-lg px-10 py-5 w-full sm:w-auto justify-center font-normal"
                onClick={() => router.push("/contact")}
              >
                Book a Demo
                <ArrowRightIcon color="#017DC0C4" size={20} />
              </button>
              <button className="px-8 py-3.5 rounded-full flex items-center gap-3 group text-lg w-full sm:w-auto justify-center transition-all bg-none border-1 border-[#017DC0C4] font-normal text-white text-[20px]">
                <div className="w-10 h-10 rounded-full gradient-bg-anim flex items-center justify-center text-white transition-all shadow-lg shadow-blue-500/10">
                  <img
                    src={pause.src}
                    className="fill-current ml-1"
                    alt="Play Icon"
                  />
                </div>
                See How It Works
              </button>
            </div>
          </motion.div>

          {/* Right Column: Video Slider */}
          <div className="relative lg:block hidden w-full self-center h-screen">
            <div className="relative w-full h-full mx-auto flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentVideoIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                  className={`absolute inset-0 flex flex-col ${isMobileVideo ? "justify-end" : "justify-center"} items-center`}
                >
                  <div
                    className={`relative w-full ${isMobileVideo ? "2xl:h-[68%] 3xl:h-[70%] 4xl:h-[80%] " : "h-full"} overflow-hidden flex items-center justify-center`}
                  >
                    {/* Floating Title */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className={`absolute top-0 3xl:top-22 4xl:top-30 left-0 z-20 ${isMobileVideo ? "left-1/2 -translate-x-1/2" : "left-0"}`}
                    >
                      <h2 className="text-white text-sm font-semibold tracking-widest uppercase bg-white/5 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10 shadow-2xl whitespace-nowrap">
                        {currentSlide.title}
                      </h2>
                    </motion.div>

                    <video
                      key={currentSlide.src}
                      src={currentSlide.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className={`max-w-full max-h-full object-contain drop-shadow-2xl 4xl:pt-20 ${isMobileVideo ? "origin-bottom" : ""}`}
                    />
                    <div className="absolute inset-0 via-transparent to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
