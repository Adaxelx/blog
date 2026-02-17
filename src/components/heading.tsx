import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const heading = cva("text-foreground antialiased", {
  variants: {
    level: {
      h1: "text-3xl font-bold leading-tight sm:text-4xl sm:leading-12 md:text-[40px]",
      h2: "text-2xl font-semibold leading-tight sm:text-3xl sm:leading-10 md:text-[32px]",
      h3: "text-xl font-semibold leading-tight sm:text-2xl sm:leading-9 md:text-[28px]",
      h4: "text-lg font-semibold leading-tight sm:text-xl sm:leading-8 md:text-[24px]",
      h5: "text-base font-medium leading-tight sm:text-lg sm:leading-7 md:text-[20px]",
      h6: "text-sm font-medium leading-tight sm:text-base sm:leading-6 md:text-[16px]",
    },
    variant: {
      primary: "text-primary",
      secondary: "text-secondary",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    level: "h3",
    variant: "primary",
    align: "left",
  },
});

export type HeadingVariants = VariantProps<typeof heading>;

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  HeadingVariants & {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  };

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as, level, variant, align, className, ...props }, ref) => {
    const Component = as ?? level ?? "h3";

    return (
      <Component
        ref={ref}
        className={cn(heading({ level, variant, align }), className)}
        {...props}
      />
    );
  },
);

Heading.displayName = "Heading";
