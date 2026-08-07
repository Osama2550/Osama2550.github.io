"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lightbox } from "@/components/ui/Lightbox";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

const TILE_HEIGHTS = ["h-56", "h-72", "h-64", "h-80"];

export function Gallery() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const revealRef = useScrollReveal<HTMLDivElement>({
    selector: "[data-reveal]",
    stagger: 0.08,
    y: 30,
  });
  const active = projects.find((project) => project.id === activeId) ?? null;

  return (
    <section id="gallery" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Gallery"
          title="Visual Snapshots"
          description="A closer look at the work — add real screenshots any time via the data file."
          align="center"
        />

        <div ref={revealRef} className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {projects.map((project, i) => (
            <button
              key={project.id}
              data-reveal
              onClick={() => setActiveId(project.id)}
              className={`group relative mb-5 block w-full overflow-hidden rounded-2xl ${TILE_HEIGHTS[i % TILE_HEIGHTS.length]}`}
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="glass flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/15 via-background-elevated to-accent-2/15 text-6xl transition-transform duration-500 group-hover:scale-105">
                  <span aria-hidden="true">{project.emoji}</span>
                </div>
              )}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-sm font-medium text-white">{project.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <Lightbox title={active.title} onClose={() => setActiveId(null)}>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
            {active.image ? (
              <Image src={active.image} alt={active.title} fill className="object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/15 via-background-elevated to-accent-2/15 text-8xl">
                <span aria-hidden="true">{active.emoji}</span>
              </div>
            )}
          </div>
          <p className="mt-4 text-center font-display text-lg text-foreground">{active.title}</p>
        </Lightbox>
      )}
    </section>
  );
}
