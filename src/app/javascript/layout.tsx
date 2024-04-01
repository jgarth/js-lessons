import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lesson",
  description: "Javascript lesson",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen text-xl">
      {children}
    </div>
  );
}
