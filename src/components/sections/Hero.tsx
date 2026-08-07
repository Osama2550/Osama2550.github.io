"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { personal } from "@/data/profile";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { useIsLowPower } from "@/lib/hooks/useIsLowPower";
import { scrollToTarget } from "@/lib/lenis";
import { buttonStyles } from "@/components/ui/buttonStyles";

const HeroScene = dynamic(
  () => import("@/components/3d/HeroScene").then((mod) => mod.HeroScene),
  { ssr: false }
);

export function Hero() {
  const reducedMotion = useReducedMotion();
  const lowPower = useIsLowPower();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current || reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from("[data-hero-eyebrow]", { opacity: 0, y: 20, duration: 0.7 })
        .from("[data-hero-name]", { opacity: 0, y: 40, duration: 0.9 }, "-=0.45")
        .from("[data-hero-tagline]", { opacity: 0, y: 20, duration: 0.7 }, "-=0.55")
        .from("[data-hero-cta]", { opacity: 0, y: 20, duration: 0.6 }, "-=0.45")
        .from("[data-hero-scroll]", { opacity: 0, duration: 0.6 }, "-=0.2");
    }, rootRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="home"
      ref={rootRef}
      className="noise-bg relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <HeroScene reducedMotion={reducedMotion} lowPower={lowPower} />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 md:px-10">
        <p
          data-hero-eyebrow
          className="text-xs uppercase tracking-[0.35em] text-accent-2 sm:text-sm"
        >
          {personal.role}
        </p>
        <h1
          data-hero-name
          className="font-display text-5xl font-bold leading-[1.05] text-foreground sm:text-7xl md:text-8xl"
        >
          {personal.name}
        </h1>
        <p data-hero-tagline className="max-w-xl text-base text-muted sm:text-lg">
          {personal.bio[0]}
        </p>

        <div data-hero-cta className="mt-2 flex flex-wrap items-center gap-4">
          <button
            onClick={() => scrollToTarget("#projects")}
            className={buttonStyles("primary")}
          >
            Explore My Work
          </button>
          <button onClick={() => scrollToTarget("#contact")} className={buttonStyles("ghost")}>
            Get in Touch
          </button>
        </div>
      </div>

      <button
        data-hero-scroll
        onClick={() => scrollToTarget("#about")}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 grid -translate-x-1/2 place-items-center gap-2 text-muted transition-colors hover:text-accent-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className={reducedMotion ? "" : "animate-bounce"} size={18} />
      </button>
    </section>
  );
}
