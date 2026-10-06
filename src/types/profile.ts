export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "instagram" | "mail" | "map-pin";
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  location: string;
  email: string;
  socials: SocialLink[];
  /** Path under /public, e.g. "/assets/images/profile/profile.jpg". Leave undefined to show placeholder art. */
  profileImage?: string;
  /** Path under /public to a brand mark shown in the nav. Leave undefined to fall back to initials/text. */
  logo?: string;
  resumeUrl?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: {
    name: string;
    icon: string;
  }[];
}

export interface ExperienceEntry {
  id: string;
  title: string;
  period: string;
  points: string[];
}

export interface Project {
  id: string;
  title: string;
  emoji: string;
  description: string;
  technologies: string[];
  features?: string[];
  /** Path under /public. Leave undefined to show placeholder art. */
  image?: string;
  gallery?: string[];
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  playStoreUrl?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
