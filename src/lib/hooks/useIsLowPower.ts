"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(max-width: 768px)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  const cores = navigator.hardwareConcurrency ?? 8;
  return window.matchMedia(QUERY).matches || cores <= 4;
}

function getServerSnapshot() {
  return false;
}

/** True on small screens or devices with few CPU cores — used to scale down 3D/particle density. */
export function useIsLowPower(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
