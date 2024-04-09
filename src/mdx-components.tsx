import React from "react";
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import TaskPrompt from "@/app/ui/task_prompt";
import Recap from "@/app/ui/recap";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl my-6 [&:not(:first-child)]:mt-16">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl my-6">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl my-6">{children}</h3>
    ),
    ol: ({ children }) => (
      <ol className="list list-decimal ml-[26px] mb-6 space-y-2">{children}</ol>
    ),
    ul: ({ children }) => (
      <ol className="list list-disc ml-[26px] mb-6 space-y-2">{children}</ol>
    ),
    pre: ({ children }) => (
      <pre className="my-6">{children}</pre>
    ),
    strong: ({ children }) => (
      <strong className="font-medium">{children}</strong>
    ),
    a: ({ href, children }) => {
      const target = href.startsWith("#") ? "_self" : "_blank";

      return (
        <Link
          className="underline underline-offset-2"
          href={href}
          target={target}
        >
          {children}
        </Link>
      );
    },
    img: (props) => <Image alt={props.alt} {...(props as ImageProps)} />,
    Task: (props) => <TaskPrompt {...props} />,
    Recap: (props) => <Recap {...props} />,
    ...components,
  };
}
