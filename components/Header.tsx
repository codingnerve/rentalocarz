"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/navigation";
import { site, telHref } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/Logo";

const PHONE_PATH =
  "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const tel = telHref();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu on navigation (state adjustment during render,
  // per react.dev "you might not need an effect") and lock scroll while open.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  // Focus trap: move focus into the menu on open, wrap Tab at the ends,
  // close on Escape, and restore focus to the toggle on close.
  useEffect(() => {
    if (!menuOpen) return;
    const menu = menuRef.current;
    const toggle = toggleRef.current;
    const focusables = () =>
      menu
        ? Array.from(menu.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"))
        : [];
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const items = [toggle, ...focusables()].filter((el): el is HTMLElement => el != null);
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      toggle?.focus();
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 shadow-sm shadow-ink/5">
      {/* Utility bar */}
      <div className="bg-ink text-on-ink">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-3 py-2 text-xs sm:px-6">
          <p className="hidden font-medium text-on-ink/80 sm:block">{site.topbarTagline}</p>
          <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-end">
            {site.email && (
              <a href={`mailto:${site.email}`} className="text-on-ink/80 transition-colors hover:text-white">
                {site.email}
              </a>
            )}
            {(site.phoneDisplay || tel) && (
              <a
                href={tel || `tel:${site.phone}`}
                onClick={() => trackEvent("call_clicked", { placement: "topbar" })}
                className="inline-flex items-center gap-1.5 font-bold text-white transition-colors hover:text-brand"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-brand" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={PHONE_PATH} />
                </svg>
                {site.phoneDisplay || site.phone}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-line bg-surface-raised">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-3 sm:px-6">
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
            {mainNav.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-5 text-sm font-semibold transition-colors hover:text-brand ${
                    active ? "text-brand" : "text-ink-soft"
                  }`}
                >
                  {link.label}
                  {active && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-brand" />}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            {tel && (
              <a
                href={tel}
                onClick={() => trackEvent("call_clicked", { placement: "header" })}
                className="text-right leading-tight"
              >
                <span className="block text-[10px] font-bold uppercase tracking-widest text-ink-muted">
                  Talk to a person
                </span>
                <span className="text-base font-extrabold text-ink">{site.phoneDisplay}</span>
              </a>
            )}
            <Button href="/contact#quote">Get a Quote</Button>
          </div>

          <button
            type="button"
            ref={toggleRef}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-line text-ink hover:bg-mint md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h10M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="absolute inset-x-0 top-full h-[calc(100dvh-100%)] overflow-y-auto bg-ink text-on-ink md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col px-4 py-6">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b border-white/10 py-4 text-2xl font-bold ${
                  pathname === link.href ? "text-brand" : "text-white"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              {tel && (
                <Button
                  href={tel}
                  variant="onBrand"
                  size="lg"
                  onClick={() => trackEvent("call_clicked", { placement: "mobile_menu" })}
                >
                  Call {site.phoneDisplay || "us"}
                </Button>
              )}
              <Button href="/contact#quote" size="lg" onClick={() => setMenuOpen(false)}>
                Get a Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
