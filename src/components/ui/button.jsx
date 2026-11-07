import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 ease-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "grad-primary text-primary-foreground shadow-[0_6px_18px_rgba(83,175,171,.28)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(83,175,171,.4)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background text-primary hover:-translate-y-0.5 hover:border-ring hover:shadow-[0_8px_20px_rgba(83,175,171,.28)]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "text-muted-foreground hover:bg-secondary hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        onDeep: "bg-white text-brand-deep hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,.28)]",
        outlineOnDeep:
          "border border-white/35 bg-white/10 text-white backdrop-blur hover:-translate-y-0.5 hover:border-white hover:bg-white/20",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-[13px]",
        lg: "h-[52px] px-7 text-[15px]",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild, ...props }, ref) => (
  <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
));
Button.displayName = "Button";
export { Button };
