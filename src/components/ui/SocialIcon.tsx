import { Mail, MapPin, type LucideIcon } from "lucide-react";
import { GitHubGlyph, LinkedInGlyph, InstagramGlyph } from "@/components/ui/BrandIcons";
import type { SocialLink } from "@/types/profile";

const LUCIDE_ICON_MAP: Partial<Record<SocialLink["icon"], LucideIcon>> = {
  mail: Mail,
  "map-pin": MapPin,
};

const GLYPH_MAP: Partial<Record<SocialLink["icon"], (props: { className?: string }) => React.JSX.Element>> = {
  github: GitHubGlyph,
  linkedin: LinkedInGlyph,
  instagram: InstagramGlyph,
};

export function SocialIcon({
  icon,
  className,
}: {
  icon: SocialLink["icon"];
  className?: string;
}) {
  const Glyph = GLYPH_MAP[icon];
  if (Glyph) return <Glyph className={className} />;

  const Icon = LUCIDE_ICON_MAP[icon];
  if (!Icon) return null;
  return <Icon className={className} aria-hidden="true" />;
}
