import { personal } from "@/data/profile";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <p className="text-sm text-muted">
          © {year} {personal.name}. Built with intent.
        </p>

        <div className="flex items-center gap-3">
          {personal.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="grid h-10 w-10 place-items-center rounded-full glass text-muted transition-colors hover:text-accent-2"
            >
              <SocialIcon icon={social.icon} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
