import { Date } from "@/components/date";
import { GoBackButton } from "@/components/go-back-button";
import { Heading } from "@/components/heading";
import { Typography } from "@/components/typography";
import type { HTMLAttributes, ReactNode } from "react";

export const components = {
  h1({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
    const slug = getSlug(children);
    return (
      <Heading {...props} id={slug} level="h1" className="my-3">
        <a href={`#${slug}`}>{children}</a>
      </Heading>
    );
  },

  h2({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
    const slug = getSlug(children);
    return (
      <Heading {...props} id={slug} level="h2" className="mt-8 mb-3">
        <a href={`#${slug}`}>{children}</a>
      </Heading>
    );
  },

  h3({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
    const slug = getSlug(children);
    return (
      <Heading {...props} id={slug} level="h3">
        <a href={`#${slug}`}>{children}</a>
      </Heading>
    );
  },
  h4({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
    const slug = getSlug(children);
    return (
      <Heading {...props} id={slug} level="h4">
        <a href={`#${slug}`}>{children}</a>
      </Heading>
    );
  },
  h5({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
    const slug = getSlug(children);
    return (
      <Heading {...props} id={slug} level="h5" className="mt-4 mb-2">
        <a href={`#${slug}`}>{children}</a>
      </Heading>
    );
  },
  h6({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
    const slug = getSlug(children);
    return (
      <Heading {...props} id={slug} level="h6">
        <a href={`#${slug}`}>{children}</a>
      </Heading>
    );
  },
  p({ children, ...props }: HTMLAttributes<HTMLParagraphElement>) {
    return (
      <Typography size="16" className="text-justify" {...props}>
        {children}
      </Typography>
    );
  },
  ul({ children, ...props }: HTMLAttributes<HTMLUListElement>) {
    return (
      <ul {...props} className="list-disc list-inside my-2">
        {children}
      </ul>
    );
  },
  ol({ children, ...props }: HTMLAttributes<HTMLOListElement>) {
    return (
      <ol className="list-decimal list-inside" {...props}>
        {children}
      </ol>
    );
  },
  li({ children, ...props }: HTMLAttributes<HTMLLIElement>) {
    return (
      <Typography as="li" size="16" {...props}>
        {children}
      </Typography>
    );
  },
  a({ children, ...props }: HTMLAttributes<HTMLAnchorElement>) {
    const slug = getSlug(children);
    return (
      <a {...props} href={`#${slug}`}>
        {children}
      </a>
    );
  },
  Date,
  GoBackButton,
};

const getSlug = (children: ReactNode) => {
  return typeof children === "string"
    ? children.toLowerCase().replace(/\s/g, "-")
    : "";
};
