
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Denis | Web Developer",
  description: "Modern websites and web apps built with Next.js.",
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
          <header className="flex items-center justify-between py-6">
            <div className="font-semibold">Denis Agency</div>
            <nav className="flex gap-6 text-sm text-neutral-700">
              <a href="/" className="hover:text-neutral-900">
                Home
              </a>
              <a href="/projects" className="hover:text-neutral-900">
                Projects
              </a>
              <a href="/services" className="hover:text-neutral-900">
                Services
              </a>
              <a href="/contact" className="hover:text-neutral-900">
                Contact
              </a>
            </nav>
          </header>

          <main className="py-10">{children}</main>

          <footer className="border-t py-8 text-sm text-neutral-600">
            © {new Date().getFullYear()} Denis. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
