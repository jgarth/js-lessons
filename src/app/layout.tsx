import type { Metadata } from "next";
import Image from 'next/image'
import './globals.css';
import logo from './logo.svg'

export const metadata: Metadata = {
  title: "Take2",
  description: "Take2 Curriculum Start Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-100 text-gray-900 text-lg">
      <body className={`bg-gray-100 text-gray-900`}>
        <nav className="fixed top-0 inset-x-0 h-24 bg-gradient-to-b from-gray-100 via-gray-100 to-transparent z-[1000]">
          <Image src={logo} alt="Take2 logo" width={200} className="py-2 px-4 h-12"/>
        </nav>
        <main className="mt-12 p-8 relative">
          {children}
        </main>
      </body>
    </html>
  );
}
