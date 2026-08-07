"use client";

import { useRef, type PointerEvent } from "react";
import clsx from "clsx";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

interface MagneticCardProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

/** Subtly nudges the card toward the cursor on hover. Disabled under reduced motion. */
export function MagneticCard({ children, className, strength = 16 }: MagneticCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || e.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * strength;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * strength;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={clsx("transition-transform duration-300 ease-out will-change-transform", className)}
    >
      {children}
    </div>
  );
}
