"use client";

import { skillCategories } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticCard } from "@/components/ui/MagneticCard";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import { getIcon } from "@/lib/iconMap";

export function Skills() {
  const revealRef = useScrollReveal<HTMLDivElement>({
    selector: "[data-reveal]",
    stagger: 0.1,
    y: 30,
  });

  return (
    <section id="skills" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="What I Work With"
          description="Grouped by the areas I actively build in."
          align="center"
        />

        <div ref={revealRef} className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((group) => {
            const GroupIcon = getIcon(group.icon);
            return (
              <div key={group.category} data-reveal>
                <MagneticCard className="group h-full" strength={10}>
                  <div className="glass h-full rounded-3xl p-6">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent/30 to-accent-2/30">
                        <GroupIcon className="h-5 w-5 text-accent-2" strokeWidth={1.5} />
                      </span>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {group.category}
                      </h3>
                    </div>
                    <ul className="flex flex-col gap-3">
                      {group.skills.map((skill) => {
                        const SkillIcon = getIcon(skill.icon);
                        return (
                          <li
                            key={skill.name}
                            className="flex items-center gap-3 rounded-xl border border-border/60 px-4 py-3 text-sm text-muted transition-colors duration-300 group-hover:border-accent-2/30"
                          >
                            <SkillIcon
                              className="h-4 w-4 shrink-0 text-accent"
                              strokeWidth={1.5}
                            />
                            {skill.name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </MagneticCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
