import { createElement, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  variant?: "fade-up" | "fade" | "fade-left" | "fade-right" | "scale";
  once?: boolean;
};

/**
 * Scroll-reveal wrapper — currently disabled.
 * Renders children directly without animation.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className,
}: RevealProps) {
  return createElement(Tag, { className }, children);
}
