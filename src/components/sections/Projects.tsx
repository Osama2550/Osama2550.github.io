"use client";

import { useState } from "react";
import { projects } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

export function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const revealRef = useScrollReveal<HTMLDivElement>({
    selector: "[data-reveal]",
    stagger: 0.12,
    y: 40,
  });
  const selected = projects.find((project) => project.id === selectedId) ?? null;

  return (
    <section id="projects" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've Built"
          description="A look at what I've shipped, with the tech behind each one."
          align="center"
        />

        <div ref={revealRef} className="mt-16 grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} data-reveal>
              <ProjectCard project={project} onOpen={setSelectedId} />
            </div>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelectedId(null)} />}
    </section>
  );
}
