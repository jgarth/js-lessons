import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Take2 Starter",
  description: "Take 2 Starter Curriculum",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen max-w-xl lg:max-w-3xl mx-auto">
      {children}
    </div>
  );
}
