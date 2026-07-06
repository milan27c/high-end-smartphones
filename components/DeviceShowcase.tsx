"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Dummy stand-in photography (see CLAUDE.md > "Product imagery" — no
// individual device photos were supplied). Reused for every model until
// real per-device renders are provided; the two frames crossfade to give
// the showcase some life while everyone waits on the real assets.
const frames = ["/images/motog57-1.avif", "/images/motog57-2.webp"];

type DeviceShowcaseProps = {
  className?: string;
  /** Only crossfade between frames while true (e.g. the card is hovered). */
  playing?: boolean;
};

export default function DeviceShowcase({
  className = "",
  playing = false,
}: DeviceShowcaseProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % frames.length);
    }, 1400);
    return () => clearInterval(id);
  }, [playing]);

  return (
    <div
      className={`animate-float-soft relative ${className}`}
      aria-hidden="true"
    >
      {frames.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={i === 0}
          sizes="(min-width: 1024px) 260px, 60vw"
          className={`object-contain transition-opacity duration-1000 ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
