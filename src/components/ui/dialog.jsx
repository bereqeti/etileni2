import * as React from "react";
import { cn } from "@/lib/utils";

export function Dialog({ open, onOpenChange, children }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onOpenChange(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-foreground/60 backdrop-blur-sm" onClick={() => onOpenChange(false)} />
      {children}
    </div>
  );
}

export function DialogContent({ className, children }) {
  return (
    <div className={cn("relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-2xl border bg-background p-6 shadow-lg sm:rounded-2xl", className)}>
      {children}
    </div>
  );
}
export function DialogHeader({ className, ...p }) { return <div className={cn("flex flex-col gap-2", className)} {...p} />; }
export function DialogTitle({ className, ...p }) { return <h2 className={cn("font-display text-xl font-bold tracking-tight", className)} {...p} />; }
export function DialogDescription({ className, ...p }) { return <p className={cn("text-sm leading-relaxed text-muted-foreground", className)} {...p} />; }
export function DialogFooter({ className, ...p }) { return <div className={cn("mt-6 flex flex-wrap gap-3", className)} {...p} />; }
