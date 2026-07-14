import Image from "next/image";
import { featuredProducts } from "@/lib/products";
import Reveal from "./Reveal";

// Xiaomi and Redmi are both the "Mi" brand under one shared logo, so they
// collapse to a single tile below.
const brandLogos: Record<string, string> = {
  Motorola: "/images/logos/motorola.png",
  vivo: "/images/logos/vivo.png",
  Xiaomi: "/images/logos/redmi.png",
  Redmi: "/images/logos/redmi.png",
  Oppo: "/images/logos/oppo.png",
  realme: "/images/logos/Realme-Logo.png",
  Infinix: "/images/logos/infinix.png",
  Itel: "/images/logos/itel.png",
};

const brandNames = Array.from(
  new Set(featuredProducts.map((p) => p.brand))
).filter((brand) => brand in brandLogos);

// One tile per distinct logo file, not per brand name.
const seenLogos = new Set<string>();
const brands = brandNames.filter((brand) => {
  const src = brandLogos[brand];
  if (seenLogos.has(src)) return false;
  seenLogos.add(src);
  return true;
});

export default function Intro() {
  return (
    <section id="brands" className="bg-white px-6 py-24 text-center sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal variant="up">
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-6xl">
            <span className="whitespace-nowrap">
              TRC-Approved, <span className="text-primary">High-End</span>{" "}
              phones,
            </span>
            <br />
            the plan you deserve.
          </h1>
        </Reveal>
        <Reveal variant="up" delay={80}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            TRC-approved, genuinely high-end devices from the brands you
            trust, walk into Abans, pick your favourite, and split it into
            easy monthly instalments with Tiken Tika Pay.
          </p>
        </Reveal>
      </div>

      <Reveal variant="up" delay={160}>
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {brands.map((brand) => (
            <div
              key={brand}
              className="group flex h-24 items-center justify-center rounded-2xl border border-black/[0.06] bg-[#F7F5F7] px-3 transition-colors duration-300 hover:border-primary/20 hover:bg-white hover:shadow-sm"
            >
              <div
                className={`relative w-full ${
                  brand === "Itel" ? "h-[44px]" : "h-[74px]"
                }`}
              >
                <Image
                  src={brandLogos[brand]}
                  alt={`${brand} logo`}
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
