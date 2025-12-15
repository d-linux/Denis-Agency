import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Techno Skills - Web Developer",
  description: "Get in touch with Techno Skills for web development quotes and inquiries. Send a message to discuss your project.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}