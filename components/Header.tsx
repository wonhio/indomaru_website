"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { primaryNav, siteConfig } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-editorial ${
        scrolled || menuOpen
          ? "bg-ink/95 backdrop-blur-sm border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-edit flex items-center justify-between h-20">
        <Link
          href="/"
          className="font-display text-lg tracking-wide text-parchment"
          onClick={() => setMenuOpen(false)}
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-mist hover:text-parchment transition-colors duration-300 ease-editorial"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm text-parchment border border-parchment/40 px-5 py-2.5 hover:bg-parchment hover:text-ink transition-colors duration-300 ease-editorial"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`block h-px w-6 bg-parchment transition-transform duration-300 ease-editorial ${
              menuOpen ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-parchment transition-transform duration-300 ease-editorial ${
              menuOpen ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 top-20 bg-ink transition-opacity duration-400 ease-editorial ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="container-edit flex flex-col gap-8 pt-14">
          {primaryNav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl text-parchment"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-block w-fit text-sm text-ink bg-parchment px-6 py-3"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
