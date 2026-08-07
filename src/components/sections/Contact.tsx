"use client";

import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { personal } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { MagneticCard } from "@/components/ui/MagneticCard";
import { buttonStyles } from "@/components/ui/buttonStyles";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

export function Contact() {
  const revealRef = useScrollReveal<HTMLDivElement>({
    selector: "[data-reveal]",
    stagger: 0.1,
    y: 30,
  });

  const contactCards = [
    {
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      icon: <Mail className="h-5 w-5 text-accent-2" strokeWidth={1.5} />,
    },
    {
      label: "Location",
      value: personal.location,
      href: undefined,
      icon: <MapPin className="h-5 w-5 text-accent-2" strokeWidth={1.5} />,
    },
    ...personal.socials.map((social) => ({
      label: social.label,
      value: social.url.replace(/^https?:\/\//, ""),
      href: social.url,
      icon: <SocialIcon icon={social.icon} className="h-5 w-5 text-accent-2" />,
    })),
  ];

  return (
    <section id="contact" className="noise-bg relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something"
          description="Open to opportunities, collaborations, and interesting conversations."
          align="center"
        />

        <div data-hero-cta className="mt-10 flex justify-center">
          <a href={`mailto:${personal.email}`} className={buttonStyles("primary")}>
            <Mail size={16} /> Say Hello
          </a>
        </div>

        <div
          ref={revealRef}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {contactCards.map((card) => {
            const content = (
              <div className="glass flex h-full items-center gap-4 rounded-2xl p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/30 to-accent-2/30">
                  {card.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-muted">{card.label}</p>
                  <p className="truncate text-sm font-medium text-foreground">{card.value}</p>
                </div>
                {card.href && (
                  <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted" strokeWidth={1.5} />
                )}
              </div>
            );

            return (
              <div key={card.label} data-reveal>
                <MagneticCard strength={8}>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </MagneticCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
