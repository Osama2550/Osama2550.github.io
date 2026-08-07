"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

interface ScrollRevealOptions {
  /** CSS selector (relative to the container) for elements to stagger-reveal. Defaults to direct children. */
  selector?: string;
  y?: number;
  stagger?: number;
  start?: string;
}

/** Fades + slides children upward as the container scrolls into view. No-op when reduced motion is on. */
export function useScrollReveal<T extends HTMLElement>(options: ScrollRevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const reducedMotion = useReducedMotion();
  const { selector, y = 40, stagger = 0.12, start = "top 80%" } = options;

  useEffect(() => {
    const container = ref.current;
    if (!container || reducedMotion) return;

    const targets = selector ? container.querySelectorAll(selector) : container.children;
    if (targets.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger,
          scrollTrigger: {
            trigger: container,
            start,
          },
        }
      );
    }, container);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) trigger.kill();
      });
    };
  }, [reducedMotion, selector, y, stagger, start]);

  return ref;
}
