import rehypeMdxImportMedia from "rehype-mdx-import-media";
import rehypeHighlight from "rehype-highlight";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeMdxImportMedia, rehypeHighlight],
  },
});

export default withMDX(nextConfig);
