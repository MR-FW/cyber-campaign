"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/domains", label: "Domains" },
  { href: "/threats", label: "Threats" },
  { href: "/practices", label: "Practices" },
  { href: "/emerging", label: "Emerging" },
  { href: "/training", label: "Training" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#0a0908]/90 border-b border-stone-700/50 backdrop-blur-sm">
      <div className="flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-semibold tracking-tight text-stone-100 hover:text-amber-400 transition-colors"
        >
          <span className="text-amber-500">🔒</span>
          <span className="hidden sm:inline">Cyber Campaign</span>
        </Link>

        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-3 py-2.5 text-sm text-stone-400 hover:text-stone-100 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/quiz"
            className="inline-block px-4 py-2 text-sm font-medium text-[#0a0908] bg-amber-500 hover:bg-amber-400 transition-colors"
          >
            📝 Quiz
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2 text-stone-400 hover:text-stone-100 transition-colors rounded"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className={`h-0.5 w-5 bg-current transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-0.5 w-5 bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-current transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-all duration-200 ${mobileOpen ? "max-h-80" : "max-h-0"}`}
      >
        <nav className="flex flex-col gap-0 border-t border-stone-700/50 bg-[#0a0908] px-4 py-3">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-sm text-stone-400 hover:text-stone-100 transition-colors border-b border-stone-800 last:border-0"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/quiz"
            onClick={() => setMobileOpen(false)}
            className="my-3 py-3 text-center text-sm font-medium text-[#0a0908] bg-amber-500 hover:bg-amber-400 transition-colors"
          >
            📝 Quiz
          </Link>
        </nav>
      </div>
    </header>
  );
}
