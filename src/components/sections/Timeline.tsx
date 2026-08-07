"use client";

import { useEffect, useRef } from "react";
import { experience } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (!reducedMotion && lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              end: "bottom 60%",
              scrub: 0.6,
            },
          }
        );
      }

      const items = gsap.utils.toArray<HTMLElement>("[data-timeline-item]");
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: reducedMotion ? 0 : -24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          }
        );
      });
    }, section);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === section) trigger.kill();
      });
    };
  }, [reducedMotion]);

  return (
    <section id="experience" ref={sectionRef} className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Experience" title="How I Got Here" align="center" />

        <div className="relative mt-16 pl-12">
          <div className="absolute left-5 top-0 h-full w-px bg-border" aria-hidden="true" />
          <div
            ref={lineRef}
            className="absolute left-5 top-0 h-full w-px origin-top bg-gradient-to-b from-accent to-accent-2"
            aria-hidden="true"
          />

          <ol className="flex flex-col gap-14">
            {experience.map((entry) => (
              <li key={entry.id} data-timeline-item className="relative">
                <span
                  className="absolute -left-9 top-1 grid h-4 w-4 place-items-center rounded-full border-2 border-accent-2 bg-background"
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
                </span>
                <p className="text-xs uppercase tracking-[0.25em] text-accent-2">
                  {entry.period}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                  {entry.title}
                </h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {entry.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
