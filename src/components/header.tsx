"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 bg-white py-6 z-10">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          <span className="text-neutral-900">Techno</span>
          <span className="text-blue-600">Skills</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-6 text-sm text-neutral-700 sm:flex">
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

        {/* Mobile button */}
        <button
          type="button"
          className="sm:hidden rounded-xl border border-neutral-300 px-3 py-2 text-sm hover:border-neutral-400"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav
          id="mobile-nav"
          className="mt-4 rounded-2xl border border-neutral-200 p-3 sm:hidden"
        >
          <ul className="flex flex-col">
            {nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={[
                      "block rounded-xl px-4 py-3 text-sm",
                      isActive
                        ? "bg-neutral-900 text-white"
                        : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
