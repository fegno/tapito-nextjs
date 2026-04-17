"use client";

import { useLayoutEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollStack.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem = ({ children, itemClassName = '' }: ScrollStackItemProps) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
}

const ScrollStack = ({
  children,
  className = '',
  itemScale = 0.05,
  itemStackDistance = 20,
}: ScrollStackProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.scroll-stack-card');
      
      cards.forEach((card, index) => {
        // Only trigger for cards after the first one
        if (index > 0) {
          gsap.to(cards.slice(0, index), {
            scale: (i) => 1 - (index - i) * itemScale,
            y: (i) => -(index - i) * itemStackDistance,
            opacity: (i) => 1 - (index - i) * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
            }
          });
        }

        // Make each card sticky as it hits the stack position
        ScrollTrigger.create({
          trigger: card,
          start: `top 15%`,
          endTrigger: containerRef.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
          scrub: true,
        });
      });
    }, containerRef);

    return () => context.revert();
  }, [itemScale, itemStackDistance]);

  return (
    <div className={`scroll-stack-container ${className}`.trim()} ref={containerRef}>
      <div className="scroll-stack-inner">
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;
