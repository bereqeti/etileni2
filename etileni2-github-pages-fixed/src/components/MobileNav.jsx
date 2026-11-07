import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BUSINESS, SOCIALS } from "@/data";
import { Icon, SocialIcon } from "./Icons";
import { cn } from "@/lib/utils";

const LINKS = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/pricing", "Pricing"],
  ["/locations", "Locations"],
  ["/about", "About"],
  ["/reviews", "Reviews"],
  ["/contact", "Contact"],
];

/** Full screen sheet. Rows are 56px so they are comfortable to tap. */
export default function MobileNav({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[90] lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!open}
    >
      <div
        className={cn("absolute inset-0 bg-foreground/50 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0")}
        onClick={onClose}
      />
      <nav
        className={cn(
          "absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-background shadow-2xl",
          "transition-[transform,visibility] duration-300 ease-brand",
          open ? "visible translate-x-0" : "invisible translate-x-full"
        )}
        aria-label="Main"
      >
        <div className="flex items-center justify-between px-5 py-4">
          <img src="/logo.png" alt="Etileni 2" width="600" height="187" className="h-8 w-auto" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-2">
          {LINKS.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  "flex h-14 items-center justify-between rounded-xl px-4 font-display text-[17px] font-bold tracking-tight",
                  "transition-colors duration-200",
                  isActive ? "grad-primary text-white" : "text-foreground active:bg-secondary"
                )
              }
            >
              {label}
              <Icon name="arrow" size={18} strokeWidth={2.2} />
            </NavLink>
          ))}
        </div>

        <div className="border-t px-5 py-5">
          <a href={BUSINESS.phoneHref} className="flex h-14 items-center justify-center gap-2.5 rounded-xl grad-primary font-display text-[17px] font-bold text-white">
            <Icon name="phone" size={19} strokeWidth={1.9} />
            {BUSINESS.phone}
          </a>
          <div className="mt-4 flex items-center justify-center gap-3">
            {SOCIALS.map(([k, label, href]) => (
              <a key={k} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
                <SocialIcon name={k} size={18} />
              </a>
            ))}
          </div>
          <p className="mt-4 text-center text-[12.5px] text-muted-foreground">
            Mon to Fri until 20:00 · Sat 09:00 to 17:00
          </p>
        </div>
      </nav>
    </div>
  );
}
