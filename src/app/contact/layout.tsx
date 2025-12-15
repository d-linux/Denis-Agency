import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Denis Koumbou - Web Developer",
  description: "Get in touch with Denis Koumbou for web development quotes and inquiries. Send a message to discuss your project.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}