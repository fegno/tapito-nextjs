"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startFlipping();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const startFlipping = () => {
    intervalRef.current = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 3500); // Slightly faster
  };

  return (
    <div className="relative  h-[400px] w-[350px] md:h-[450px] md:w-[500px]">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-white h-[350px] w-[350px] md:h-[400px] md:w-[500px] rounded-[32px] p-6 shadow-2xl border border-blue-100 flex flex-col items-center justify-center overflow-hidden"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
              rotateX: index * -2,
              y: index * -10,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
          >
            {/* Top Label (Pill) - Tapito Brand Style */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 bg-[#09358c] border-x border-b border-blue-200/20 rounded-b-xl shadow-lg shadow-blue-900/10">
              <div className="w-2 h-2 rounded-full bg-[#06dcc3] shadow-[0_0_8px_#06dcc3]" />
              <span className="text-sm font-bold text-white tracking-wide">
                {card.name}
              </span>
            </div>
            
            <div className="w-full h-full mt-4">
              {card.content}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
