import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 hover:bg-slate-800 hover:text-slate-100 disabled:opacity-50 focus:ring-slate-400 disabled:pointer-events-none focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 data-[state=open]:bg-slate-800",
  {
    variants: {
      variant: {
        default:
          " hover:bg-slate-700 hover:text-slate-100 bg-slate-50 text-slate-900",
        destructive: "bg-red-500 text-white hover:bg-red-600 hover:bg-red-600",
        outline:
          "bg-transparent border border-slate-200 hover:bg-slate-100 border-slate-700 text-slate-100 hover:text-slate-900",
        subtle:
          " hover:bg-slate-200 bg-slate-700 text-red-100 hover:text-slate-800 ",
        ghost:
          "bg-transparent hover:bg-slate-100 hover:bg-slate-800 text-slate-100 hover:text-slate-100 data-[state=open]:bg-transparent data-[state=open]:bg-transparent",
        link: "bg-transparent bg-transparent underline-offset-4 hover:underline text-slate-900 text-slate-100 hover:bg-transparent hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
