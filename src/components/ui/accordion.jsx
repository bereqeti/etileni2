import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * shadcn accordion markup without the Radix dependency.
 * Swap for @radix-ui/react-accordion if you want keyboard roving focus.
 */
export function Accordion({ items, className }) {
  const [open, setOpen] = React.useState(-1);
  return (
    <div className={cn("w-full", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b last:border-b-0">
            <h3 className="flex">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex flex-1 items-center justify-between rounded-md py-5 text-left font-display text-[17px] font-bold transition-all duration-300 ease-brand hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.q}
                <svg
                  className={cn("h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ease-brand", isOpen && "rotate-180")}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </h3>
            <div className={cn("overflow-hidden transition-all duration-300 ease-brand", isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
              <div className="pb-5 pr-8 text-[15px] leading-relaxed text-muted-foreground">{item.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
