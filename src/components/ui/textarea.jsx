import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex min-h-[120px] w-full rounded-lg border border-input bg-background px-3 py-2.5 text-[15px] ring-offset-background",
      "placeholder:text-muted-foreground/70 transition-shadow duration-200 hover:border-ring/60",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "aria-[invalid=true]:border-destructive aria-[invalid=true]:focus-visible:ring-destructive",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
export { Textarea };
