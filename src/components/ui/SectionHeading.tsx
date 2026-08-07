import clsx from "clsx";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={clsx("flex flex-col gap-3", align === "center" && "items-center text-center")}>
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-2">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && <p className="max-w-2xl text-muted">{description}</p>}
    </div>
  );
}
