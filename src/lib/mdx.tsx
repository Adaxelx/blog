import { Date } from "@/components/date";
import { Heading } from "@/components/heading";
import type { HTMLAttributes } from "react";

export const components = {
  h1({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
    const slug =
      typeof children === "string"
        ? children.toLowerCase().replace(/\s/g, "-")
        : "";
    return (
      <Heading {...props} id={slug} level="h1">
        <a href={`#${slug}`}>{children}</a>
      </Heading>
    );
  },

  Date,
};
