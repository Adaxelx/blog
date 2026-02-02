import { Date } from "@/components/date";
import { Heading } from "@/components/heading";

export const components = {
  h1({ children, ...props }) {
    const slug = children.toLowerCase().replace(/\s/g, "-");
    return (
      <Heading {...props} id={slug} level="h1">
        <a href={`#${slug}`}>{children}</a>
      </Heading>
    );
  },

  Date,
};
