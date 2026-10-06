"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X, ExternalLink } from "lucide-react";
import type { Project } from "@/types/profile";
import { buttonStyles } from "@/components/ui/buttonStyles";
import { GitHubGlyph } from "@/components/ui/BrandIcons";
import { publicAsset } from "@/lib/publicAsset";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="glass relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close project details"
          className="glass absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:text-foreground"
        >
          <X size={16} />
        </button>

        <div className="relative mb-6 aspect-video overflow-hidden rounded-2xl">
          {project.image ? (
            <Image src={publicAsset(project.image)} alt={project.title} fill className="object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/15 via-background-elevated to-accent-2/15 text-6xl">
              <span aria-hidden="true">{project.emoji}</span>
            </div>
          )}
        </div>

        <h3
          id="project-modal-title"
          className="font-display text-2xl font-bold text-foreground"
        >
          {project.title}
        </h3>
        <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

        {project.features && project.features.length > 0 && (
          <div className="mt-6">
            <h4 className="mb-2 text-xs uppercase tracking-widest text-accent-2">Features</h4>
            <ul className="flex list-disc flex-col gap-1 pl-5 text-sm text-muted">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6">
          <h4 className="mb-2 text-xs uppercase tracking-widest text-accent-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {(project.githubUrl || project.liveUrl || project.playStoreUrl) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles("ghost")}
              >
                <GitHubGlyph className="h-4 w-4" /> View Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles("primary")}
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
            {project.playStoreUrl && (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles("primary")}
              >
                <ExternalLink size={16} /> Google Play / Download
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
