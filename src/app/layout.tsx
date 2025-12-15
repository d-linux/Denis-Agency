
import type { Metadata } from "next";
import Header from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Techno Skills | Web Developer",
  description: "Modern Portfolio Website Built with Next.js.",
  openGraph: {
    title: "Techno Skills | Web Developer",
    description: "Modern Portfolio Website Built with Next.js.",
    url: "https://denis-agency.vercel.app", // Replace with your actual URL
    siteName: "Techno Skills",
    images: [
      {
        url: "/og-image.jpg", // Add an og-image.jpg in public/
        width: 1200,
        height: 630,
        alt: "Techno Skills - Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techno Skills | Web Developer",
    description: "Modern Portfolio Website Built with Next.js.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900 antialiased leading-relaxed">
        <div className="mx-auto max-w-5xl px-6">
          <Header />

          <main className="py-16">{children}</main>

          <footer className="border-t py-8 text-sm text-neutral-600">
            © {new Date().getFullYear()} Techno Skills. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
