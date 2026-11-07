import * as React from "react";
import { cn } from "@/lib/utils";

const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full grad-primary font-display text-sm font-bold text-white",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = "AvatarFallback";
export { AvatarFallback };
