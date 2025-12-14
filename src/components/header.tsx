"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];


export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between py-6">
      <Link href="/" className="font-semibold">
        Denis
      </Link>

      <nav className="flex gap-6 text-sm text-neutral-700">
        {nav.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={isActive ? "text-neutral-900" : "hover:text-neutral-900"}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
