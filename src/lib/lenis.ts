"use client";

import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function setLenisInstance(instance: Lenis | null) {
  lenisInstance = instance;
}

/** Smooth-scrolls to a selector/element via the active Lenis instance, falling back to native scroll. */
export function scrollToTarget(target: string | HTMLElement, offset = -80) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset, duration: 1.3 });
    return;
  }
  const el = typeof target === "string" ? document.querySelector(target) : target;
  el?.scrollIntoView({ behavior: "smooth" });
}
