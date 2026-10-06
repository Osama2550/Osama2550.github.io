"use client";

import Image from "next/image";
import { User } from "lucide-react";
import { personal, projects, skillCategories } from "@/data/profile";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import { PlaceholderArt } from "@/components/ui/PlaceholderArt";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { publicAsset } from "@/lib/publicAsset";

const totalSkills = skillCategories.reduce((sum, group) => sum + group.skills.length, 0);

const stats = [
  { label: "Projects Built", value: `${projects.length}+` },
  { label: "Core Skills", value: `${totalSkills}+` },
  { label: "Based In", value: personal.location },
];

export function About() {
  const revealRef = useScrollReveal<HTMLDivElement>({
    selector: "[data-reveal]",
    y: 30,
    stagger: 0.15,
  });

  return (
    <section id="about" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_1.1fr] md:items-center">
        <div className="relative mx-auto w-full max-w-sm md:mx-0">
          {personal.profileImage ? (
            <Image
              src={publicAsset(personal.profileImage)}
              alt={personal.name}
              width={640}
              height={800}
              className="aspect-[4/5] w-full rounded-3xl object-cover"
            />
          ) : (
            <PlaceholderArt
              icon={User}
              label="Add your photo"
              className="aspect-[4/5] w-full rounded-3xl"
            />
          )}
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/20 to-accent-2/20 blur-2xl" />
        </div>

        <div ref={revealRef} className="flex flex-col gap-8">
          <div data-reveal>
            <SectionHeading eyebrow="About Me" title="Who I Am" />
          </div>

          {personal.bio.map((paragraph, i) => (
            <p key={i} data-reveal className="text-lg leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}

          <p data-reveal className="font-display text-2xl font-semibold text-gradient">
            {personal.tagline}
          </p>

          <div data-reveal className="grid grid-cols-3 gap-4 border-t border-border pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs uppercase tracking-wide text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
