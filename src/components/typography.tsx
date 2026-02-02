import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const typography = cva("text-gray-900 antialiased", {
  variants: {
    size: {
      "16": "text-[16px] leading-6",
      "15": "text-[15px] leading-5.5",
      "14": "text-[14px] leading-5",
      "13": "text-[13px] leading-4.5",
      "12": "text-[12px] leading-4",
      "11": "text-[11px] leading-3.5",
      "10": "text-[10px] leading-3",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    variant: {
      primary: "text-primary",
      secondary: "text-slate-600",
      tertiary: "text-slate-400",
    },
  },
  defaultVariants: {
    size: "14",
    weight: "regular",
    variant: "primary",
  },
});

export type TypographyVariants = VariantProps<typeof typography>;

type TypographyProps = React.HTMLAttributes<HTMLElement> &
  TypographyVariants & {
    as?: React.ElementType;
  };

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    { as: Component = "p", size, weight, variant, className, ...props },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(typography({ size, weight, variant }), className)}
        {...props}
      />
    );
  },
);

Typography.displayName = "Typography";
