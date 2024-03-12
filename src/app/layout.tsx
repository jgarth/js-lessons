import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lesson 1 - Functions",
  description: "Javascript: Functions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-900 text-white">
      <body className={`${inter.className} bg-gray-900`}>
        {children}
      </body>
    </html>
  );
}
