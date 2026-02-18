import Image from "next/image";
import { cn } from "@/lib/utils";

interface MediaEmbedProps {
  type: "youtube" | "vimeo" | "image";
  src: string;
  caption?: string;
  aspectRatio?: string;
  className?: string;
}

export function MediaEmbed({
  type,
  src,
  caption,
  aspectRatio = "16/9",
  className,
}: MediaEmbedProps) {
  return (
    <figure className={cn("w-full", className)}>
      {type === "image" ? (
        <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio }}>
          <Image
            src={src}
            alt={caption ?? ""}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1280px"
          />
        </div>
      ) : (
        <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio }}>
          <iframe
            src={
              type === "youtube"
                ? `https://www.youtube-nocookie.com/embed/${src}`
                : `https://player.vimeo.com/video/${src}`
            }
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
            title={caption ?? "Embedded video"}
          />
        </div>
      )}
      {caption && (
        <figcaption className="mt-2 font-meta text-xs text-ink/50">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
