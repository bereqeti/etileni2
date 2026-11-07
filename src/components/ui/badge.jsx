import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "grad-primary text-primary-foreground",
        secondary: "bg-secondary text-primary",
        outline: "border border-input text-foreground",
        success: "grad-green text-white",
      },
    },
    defaultVariants: { variant: "secondary" },
  }
);

function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
export { Badge, badgeVariants };
