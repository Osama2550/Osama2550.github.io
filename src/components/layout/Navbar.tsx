"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks, personal } from "@/data/profile";
import { useActiveSection } from "@/lib/hooks/useActiveSection";
import { scrollToTarget } from "@/lib/lenis";
import { publicAsset } from "@/lib/publicAsset";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ids = useMemo(() => navLinks.map((link) => link.href.replace("#", "")), []);
  const activeId = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavigate = (href: string) => {
    setMenuOpen(false);
    scrollToTarget(href);
  };

  const firstName = personal.name.split(" ")[0];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "glass" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <button
          onClick={() => handleNavigate("#home")}
          aria-label="Go to home"
          className="flex items-center gap-2"
        >
          {personal.logo ? (
            <Image
              src={publicAsset(personal.logo)}
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover"
              priority
            />
          ) : (
            <span className="font-display text-lg font-semibold tracking-tight text-foreground">
              {firstName}
              <span className="text-accent-2">.</span>
            </span>
          )}
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = id === activeId;
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavigate(link.href)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-white/5" />
                  )}
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full glass md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-6">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = id === activeId;
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavigate(link.href)}
                  className={`w-full rounded-xl px-4 py-3 text-left text-base font-medium transition-colors ${
                    isActive ? "bg-white/5 text-foreground" : "text-muted"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
