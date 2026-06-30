import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  /** Animation variant */
  variant?: "fade-up" | "fade" | "fade-left" | "fade-right" | "scale";
  /** Repeat animation every time it enters the viewport */
  once?: boolean;
};

/**
 * Lightweight scroll-reveal wrapper using IntersectionObserver + Tailwind transitions.
 * Editorial-grade: subtle opacity + small translate, GPU-friendly.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  variant = "fade-up",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const initial = {
    "fade-up": "opacity-0 translate-y-6",
    "fade": "opacity-0",
    "fade-left": "opacity-0 -translate-x-6",
    "fade-right": "opacity-0 translate-x-6",
    "scale": "opacity-0 scale-[0.98]",
  }[variant];

  const shown = "opacity-100 translate-x-0 translate-y-0 scale-100";

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "will-change-[opacity,transform] transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        visible ? shown : initial,
        className,
      )}
    >
      {children}
    </Tag>
  );
}
