"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface Milestone {
  position: [number, number];
  label: string;
}

interface RouteMapProps {
  coordinates: [number, number][];
  currentPosition?: [number, number];
  milestones?: Milestone[];
  className?: string;
}

export function RouteMap({
  coordinates,
  currentPosition,
  milestones,
  className,
}: RouteMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || coordinates.length === 0) return;

    let map: L.Map;

    (async () => {
      const L = await import("leaflet");
      await import("leaflet/dist/leaflet.css");

      // Coordinates are [lng, lat] — Leaflet uses [lat, lng]
      const latLngs = coordinates.map(
        ([lng, lat]) => [lat, lng] as [number, number]
      );
      const center = latLngs[Math.floor(latLngs.length / 2)];

      map = L.map(containerRef.current!, {
        center,
        zoom: 5.5,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      mapRef.current = map;

      // Dark free tile layer (CartoDB Dark Matter — no API key needed)
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 19,
        }
      ).addTo(map);

      // Route polyline
      L.polyline(latLngs, {
        color: "#C9A227",
        weight: 3,
        opacity: 0.9,
      }).addTo(map);

      // Current position pulsing marker
      if (currentPosition) {
        const [lng, lat] = currentPosition;
        const pulseIcon = L.divIcon({
          className: "",
          html: `<div style="width:16px;height:16px;background:#C9A227;border-radius:50%;box-shadow:0 0 0 0 rgba(201,162,39,0.6);animation:pulse-ring 2s infinite"></div>`,
          iconSize: [16, 16],
          iconAnchor: [8, 8],
        });
        L.marker([lat, lng], { icon: pulseIcon }).addTo(map);
      }

      // Milestone markers
      milestones?.forEach((m) => {
        const [lng, lat] = m.position;
        const icon = L.divIcon({
          className: "",
          html: `<div style="width:10px;height:10px;background:#FAFAFA;border-radius:50%;border:2px solid #C9A227"></div>`,
          iconSize: [10, 10],
          iconAnchor: [5, 5],
        });
        L.marker([lat, lng], { icon }).bindPopup(m.label).addTo(map);
      });
    })();

    return () => {
      if (map) map.remove();
    };
  }, [coordinates, currentPosition, milestones]);

  return (
    <>
      <style>{`
        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(201,162,39,0.6); }
          70% { box-shadow: 0 0 0 12px rgba(201,162,39,0); }
          100% { box-shadow: 0 0 0 0 rgba(201,162,39,0); }
        }
      `}</style>
      <div
        ref={containerRef}
        className={cn("h-[400px] w-full md:h-[500px]", className)}
      />
    </>
  );
}
