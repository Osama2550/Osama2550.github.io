import clsx from "clsx";

export type ButtonVariant = "primary" | "ghost";

export function buttonStyles(variant: ButtonVariant = "primary", className?: string) {
  return clsx(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-offset-4",
    variant === "primary" &&
      "bg-gradient-to-r from-accent to-accent-2 text-black hover:opacity-90 hover:shadow-[0_0_40px_-8px_rgba(139,92,246,0.8)]",
    variant === "ghost" && "glass text-foreground hover:border-accent-2/50",
    className
  );
}
