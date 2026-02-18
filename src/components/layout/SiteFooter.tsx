import Link from "next/link";

const NAV_LINKS = [
  { href: "/uk-run", label: "UK Run" },
  { href: "/journal", label: "Journal" },
  { href: "/press", label: "Press" },
  { href: "/support", label: "Support" },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy py-12 text-soft-white">
      <div className="mx-auto flex max-w-[var(--spacing-site-max)] flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <p className="font-display text-sm">Rafe Colman-Chadwick</p>

        <nav className="flex gap-6" aria-label="Footer navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-meta text-xs text-soft-white/60 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="font-meta text-xs text-soft-white/40">
          &copy; {new Date().getFullYear()} Rafe Colman-Chadwick. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
