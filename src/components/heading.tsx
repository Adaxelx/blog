import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const heading = cva("text-gray-900 antialiased", {
  variants: {
    level: {
      h1: "text-[40px] leading-12 font-bold",
      h2: "text-[32px] leading-10 font-semibold",
      h3: "text-[28px] leading-9 font-semibold",
      h4: "text-[24px] leading-8 font-semibold",
      h5: "text-[20px] leading-7 font-medium",
      h6: "text-[16px] leading-6 font-medium",
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
