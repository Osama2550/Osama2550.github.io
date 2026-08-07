import type {
  ExperienceEntry,
  NavLink,
  PersonalInfo,
  Project,
  SkillCategory,
} from "@/types/profile";

/**
 * Single source of truth for all site content.
 * Update values here — no UI component needs to change.
 * Leave `profileImage` / project `image` fields undefined to keep the
 * generated placeholder art; see /public/assets/README.md for how to
 * drop in real files.
 */

export const personal: PersonalInfo = {
  name: "Osama Ahmed Abdalla Rahma",
  role: "Technology Enthusiast • Android Developer • Cybersecurity Learner",
  tagline: "Learn. Build. Improve.",
  bio: [
    "Passionate about technology, software development, and cybersecurity. I build practical digital solutions, explore emerging technologies, and continuously learn through hands-on projects and real-world challenges.",
  ],
  location: "Qatar",
  email: "www.osam255@gmail.com",
  socials: [
    {
      label: "GitHub",
      url: "https://github.com/Osama2550",
      icon: "github",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/osama-ahamed-269612343/",
      icon: "linkedin",
    },
    {
      label: "Instagram",
      url: "https://instagram.com/osama255.bdllh",
      icon: "instagram",
    },
  ],
  profileImage: undefined,
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Mobile Development",
    icon: "smartphone",
    skills: [{ name: "Android App Development", icon: "smartphone" }],
  },
  {
    category: "Web & AI Development",
    icon: "globe",
    skills: [
      { name: "AI-Powered Web Development", icon: "sparkles" },
      { name: "Software Development", icon: "code-2" },
    ],
  },
  {
    category: "Backend & Cloud",
    icon: "cloud",
    skills: [
      { name: "Firebase & Cloud Integration", icon: "flame" },
      { name: "Database Management", icon: "database" },
    ],
  },
  {
    category: "Security & Systems",
    icon: "shield",
    skills: [
      { name: "Cybersecurity Fundamentals", icon: "shield-check" },
      { name: "Linux & Networking", icon: "terminal" },
    ],
  },
  {
    category: "Mindset",
    icon: "brain",
    skills: [
      { name: "Problem Solving", icon: "puzzle" },
      { name: "Continuous Learning", icon: "rocket" },
    ],
  },
];

export const experience: ExperienceEntry[] = [
  {
    id: "android-developer",
    title: "Android Developer | Personal Projects",
    period: "2025 – Present",
    points: [
      "Designed and developed Android applications using Java and modern Android technologies.",
      "Built applications with Firebase integration, databases, authentication, cloud storage, and notifications.",
      "Developed practical solutions with focus on performance, user experience, and clean architecture.",
      "Tested, debugged, and optimized applications across different Android devices.",
    ],
  },
  {
    id: "ai-web-development",
    title: "AI & Web Development",
    period: "2025 – Present",
    points: [
      "Creating modern websites and digital solutions using AI-powered development tools.",
      "Exploring AI integration to improve productivity, automation, and user experiences.",
      "Designing responsive and interactive web interfaces.",
    ],
  },
  {
    id: "technology-systems",
    title: "Technology & Systems Development",
    period: "Ongoing",
    points: [
      "Hands-on experience with software development, networking, Linux environments, and cybersecurity fundamentals.",
      "Continuously building technical skills through real-world projects and self-learning.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "personal-finance-manager",
    title: "Personal Finance Manager",
    emoji: "📱",
    description:
      "A smart financial management application designed to help users track income, expenses, budgets, and personal financial activities with an easy-to-use interface.",
    technologies: ["Java", "Android", "SQLite / Room Database", "Material Design"],
  },
  {
    id: "time-capsule-memories",
    title: "Time Capsule Memories",
    emoji: "⏳",
    description:
      "A digital memory preservation application that allows users to create time capsules containing text, images, audio, and videos to be opened at a future date.",
    technologies: [
      "Android",
      "Java",
      "Firebase Authentication",
      "Firestore",
      "Firebase Storage",
      "Cloud Messaging",
    ],
  },
  {
    id: "clothing-marketplace-website",
    title: "Clothing Marketplace Website",
    emoji: "🛒",
    description:
      "A modern online marketplace platform for browsing and showcasing clothing products with a user-friendly shopping experience.",
    technologies: ["Web Development", "AI Tools", "Responsive Design"],
  },
  {
    id: "other-applications-experiments",
    title: "Other Applications & Experiments",
    emoji: "🚀",
    description:
      "Developed and explored various applications and technical projects focused on mobile development, automation, user experience improvement, and modern technologies.",
    technologies: ["Mobile Development", "Automation", "UX Improvement"],
  },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];
