import Image from "next/image";
import type { Project } from "@/types/profile";
import { TiltCard } from "@/components/ui/TiltCard";
import { publicAsset } from "@/lib/publicAsset";
import { buttonStyles } from "@/components/ui/buttonStyles";
import { ExternalLink } from "lucide-react";

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (id: string) => void;
}) {
  return (
    <TiltCard
      className="glass group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl"
      onClick={() => onOpen(project.id)}
    >
      <div className="relative aspect-video overflow-hidden">
        {project.image ? (
          <Image
            src={publicAsset(project.image)}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/15 via-background-elevated to-accent-2/15 text-5xl transition-transform duration-500 group-hover:scale-110">
            <span aria-hidden="true">{project.emoji}</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-xl font-semibold text-foreground">{project.title}</h3>
        <p className="line-clamp-3 text-sm text-muted">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        {project.playStoreUrl && (
          <a
            href={project.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className={buttonStyles("primary", "mt-3 w-fit")}
          >
            <ExternalLink size={16} /> Google Play / Download
          </a>
        )}
      </div>
    </TiltCard>
  );
}
