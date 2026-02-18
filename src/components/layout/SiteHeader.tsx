"use client";

import { useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/uk-run", label: "UK Run" },
  { href: "/journal", label: "Journal" },
  { href: "/press", label: "Press" },
  { href: "/support", label: "Support" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-40 transition-colors duration-300 bg-navy/95 backdrop-blur-sm"
      )}
    >
          <div className="mx-auto flex max-w-(--spacing-site-max) items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-soft-white"
        >
          Rafe Colman-Chadwick
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-8 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-meta text-sm tracking-wide text-soft-white/80 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
          <Dialog.Trigger asChild>
            <button
              className="flex flex-col gap-1.5 md:hidden"
              aria-label="Open menu"
            >
              <span className="block h-0.5 w-6 bg-soft-white" />
              <span className="block h-0.5 w-6 bg-soft-white" />
              <span className="block h-0.5 w-6 bg-soft-white" />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-40 bg-navy/80 backdrop-blur-sm" />
            <Dialog.Content className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-navy">
              <VisuallyHidden.Root>
                <Dialog.Title>Navigation menu</Dialog.Title>
              </VisuallyHidden.Root>
              <Dialog.Close asChild>
                <button
                  className="absolute top-6 right-6 font-meta text-sm text-soft-white/80"
                  aria-label="Close menu"
                >
                  Close
                </button>
              </Dialog.Close>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-3xl text-soft-white transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
