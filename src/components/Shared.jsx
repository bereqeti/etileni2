import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Icon, PlayIcon } from "./Icons";

export function Eyebrow({ onDeep, className, children }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[.16em]",
      onDeep ? "text-accent" : "text-primary", className)}>
      <span className="h-2 w-2 shrink-0 rounded-full grad-green" />
      {children}
    </span>
  );
}

export function SectionHead({ eyebrow, title, onDeep, className, children }) {
  return (
    <div className={cn("max-w-[62ch] rv", className)}>
      <Eyebrow onDeep={onDeep}>{eyebrow}</Eyebrow>
      <h2 className={cn("mt-3.5 font-display text-[clamp(28px,3.8vw,42px)] font-extrabold leading-[1.1] tracking-tight",
        onDeep && "text-white")}>{title}</h2>
      {children && (
        <p className={cn("mt-4 text-[16.5px] leading-relaxed", onDeep ? "text-[#9CC3C4]" : "text-muted-foreground")}>
          {children}
        </p>
      )}
    </div>
  );
}

export function IconDisc({ name, green, className, size = 26 }) {
  return (
    <span className={cn("flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white",
      green ? "grad-green" : "grad-primary", className)}>
      <Icon name={name} size={size} />
    </span>
  );
}

const RATIOS = { "16x9": "aspect-video", "4x3": "aspect-[4/3]", "3x4": "aspect-[3/4]", "21x9": "aspect-[21/9]" };

/**
 * Boxed media slot. Drop an <img> or <video> in place of the mark and keep the wrapper classes.
 * `label` and `note` at the call sites are the shot brief and are not rendered.
 */
export function Media({ ratio = "16x9", video, className }) {
  return (
    <div className={cn("grad-deep relative grid place-items-center overflow-hidden rounded-2xl p-6 text-center", RATIOS[ratio], className)}>
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white/70">
        {video ? <PlayIcon /> : <Icon name="image" size={26} />}
      </span>
    </div>
  );
}

/** Static brand-colored full-bleed background. No video is required. */
export function MediaBg() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="grad-deep absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#08222A]/95 via-[#08222A]/80 to-[#08222A]/45" />
    </div>
  );
}

/** Adds the .in class to .rv elements as they scroll into view. */
export function useReveal(dep) {
  const done = useRef(false);
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".rv:not(.in)"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const sibs = Array.from(e.target.parentNode.children).filter((n) => n.classList.contains("rv"));
          e.target.style.transitionDelay = Math.min(Math.max(0, sibs.indexOf(e.target)) * 70, 350) + "ms";
          e.target.classList.add("in");
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );
    els.forEach((e) => io.observe(e));
    done.current = true;
    return () => io.disconnect();
  }, [dep]);
}
