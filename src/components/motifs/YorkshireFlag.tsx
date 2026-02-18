"use client";

import { useEffect, useRef, useState } from "react";

export function YorkshireFlag({ className }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 120 80"
      className={className}
      style={{
        animation: visible ? "yorkshire-sway 8s ease-in-out infinite" : "none",
      }}
      aria-label="Yorkshire flag"
      role="img"
    >
      <style>{`
        @keyframes yorkshire-sway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
      `}</style>
      {/* Navy background */}
      <rect width="120" height="80" fill="#0B1C2D" />
      {/* White Rose of Yorkshire (simplified) */}
      <g transform="translate(60,40)" fill="white">
        {[0, 72, 144, 216, 288].map((angle) => (
          <ellipse
            key={angle}
            cx="0"
            cy="-14"
            rx="6"
            ry="14"
            transform={`rotate(${angle})`}
          />
        ))}
        <circle cx="0" cy="0" r="5" fill="#C9A227" />
      </g>
    </svg>
  );
}
