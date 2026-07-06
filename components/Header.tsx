"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Phones", href: "#showcase" },
  { label: "Our Brands", href: "#brands" },
  { label: "Tiken Tika Pay", href: "#easy-payments" },
  { label: "Why Us", href: "#why-abans" },
];

// No confirmed contact destination was supplied — update this once the
// business team provides the real contact page or in-page section.
const CONTACT_HREF = "#";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-black/5 bg-white">
      <nav className="mx-auto grid h-16 max-w-7xl grid-cols-2 items-center px-6 sm:px-10 lg:grid-cols-[1fr_auto_1fr]">
        <a href="#top" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Abans Smartphones"
            width={300}
            height={132}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-ink/70 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden justify-end lg:flex">
          <a
            href={CONTACT_HREF}
            className="cursor-pointer rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary-dark"
          >
            Contact Us
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="cursor-pointer justify-self-end p-2 text-ink lg:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-black/5 bg-white px-6 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-medium text-ink/80 transition-colors hover:bg-black/5 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CONTACT_HREF}
              onClick={() => setMenuOpen(false)}
              className="mt-2 cursor-pointer rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary-dark"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
