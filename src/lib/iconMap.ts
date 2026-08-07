import {
  Smartphone,
  Globe,
  Sparkles,
  Code2,
  Cloud,
  Flame,
  Database,
  Shield,
  ShieldCheck,
  Terminal,
  Brain,
  Puzzle,
  Rocket,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  smartphone: Smartphone,
  globe: Globe,
  sparkles: Sparkles,
  "code-2": Code2,
  cloud: Cloud,
  flame: Flame,
  database: Database,
  shield: Shield,
  "shield-check": ShieldCheck,
  terminal: Terminal,
  brain: Brain,
  puzzle: Puzzle,
  rocket: Rocket,
};

export function getIcon(name: string): LucideIcon {
  return ICONS[name] ?? Sparkles;
}
