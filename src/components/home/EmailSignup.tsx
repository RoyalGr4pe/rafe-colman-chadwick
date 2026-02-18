"use client";

import { useState } from "react";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, tag: "supporter" }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-[var(--spacing-site-max)] px-6">
        <div className="mx-auto max-w-md text-center">
          <h2 className="mb-3 font-display text-2xl font-semibold md:text-3xl">
            Stay Updated
          </h2>
          <p className="mb-6 font-body text-sm text-ink/60">
            Get journey updates, race reports, and behind-the-scenes stories
            delivered to your inbox.
          </p>

          {status === "success" ? (
            <p className="font-meta text-sm text-gold">
              Thank you — you&apos;re on the list.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-sm border border-ink/10 bg-white px-4 py-3 font-meta text-sm text-ink outline-none transition-colors focus:border-gold"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-sm bg-gold px-5 py-3 font-meta text-sm font-semibold text-navy transition-colors hover:bg-gold/90 disabled:opacity-60"
              >
                {status === "loading" ? "..." : "Subscribe"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-2 font-meta text-xs text-red-600">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
