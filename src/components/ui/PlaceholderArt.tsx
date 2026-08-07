import { ImageIcon, type LucideIcon } from "lucide-react";
import clsx from "clsx";

interface PlaceholderArtProps {
  label?: string;
  icon?: LucideIcon;
  className?: string;
}

/** Stylized stand-in shown whenever a real image hasn't been provided yet — never a fabricated photo. */
export function PlaceholderArt({
  label = "Image coming soon",
  icon: Icon = ImageIcon,
  className,
}: PlaceholderArtProps) {
  return (
    <div
      className={clsx(
        "noise-bg glass relative flex flex-col items-center justify-center gap-3 overflow-hidden text-muted",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-accent-2/15" />
      <Icon className="relative h-10 w-10" strokeWidth={1.25} aria-hidden="true" />
      <span className="relative text-xs uppercase tracking-[0.25em]">{label}</span>
    </div>
  );
}
