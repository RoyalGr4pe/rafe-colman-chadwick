import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  heroImage?: string;
}

export function Hero({ heroImage }: HeroProps) {
  return (
    <section className="relative flex h-screen items-end">
      {heroImage ? (
        <Image
          src={heroImage}
          alt="Rafe Colman-Chadwick running"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0 bg-navy" />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[var(--spacing-site-max)] px-6 pb-20">
        <h1 className="mb-4 font-display text-4xl font-semibold text-soft-white md:text-6xl lg:text-7xl">
          Rafe Colman-Chadwick
        </h1>
        <p className="mb-8 max-w-xl font-body text-lg leading-relaxed text-soft-white/80">
          Ultra-endurance runner. Charity fundraiser. Filmmaker. Running the
          length of Britain for those who need it most.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/support"
            className="inline-flex items-center justify-center rounded-sm bg-gold px-6 py-3 font-meta text-sm font-semibold text-navy transition-colors hover:bg-gold/90"
          >
            Support the Mission
          </Link>
          <Link
            href="/uk-run"
            className="inline-flex items-center justify-center rounded-sm border border-soft-white/30 px-6 py-3 font-meta text-sm font-semibold text-soft-white transition-colors hover:border-soft-white/60"
          >
            Follow the Run
          </Link>
          <Link
            href="#documentary"
            className="inline-flex items-center justify-center px-6 py-3 font-meta text-sm text-soft-white/70 underline underline-offset-4 transition-colors hover:text-soft-white"
          >
            Watch the Journey
          </Link>
        </div>
      </div>
    </section>
  );
}
