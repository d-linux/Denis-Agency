
import type { Metadata } from "next";
import Header from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Denis Koumbou | Web Developer",
  description: "Modern Portfolio Website Built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        <div className="mx-auto max-w-5xl px-6">
          <Header />

          <main className="py-10">{children}</main>

          <footer className="border-t py-8 text-sm text-neutral-600">
            © {new Date().getFullYear()} Denis. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
