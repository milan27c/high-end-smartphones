import Image from "next/image";
import { featuredProducts } from "@/lib/products";
import Reveal from "./Reveal";

// No dedicated Xiaomi mark was supplied — redmi.png stands in for the Xiaomi
// logo too until a proper asset is provided. Itel has no logo file yet
// either, so it's left out of this grid until one lands.
const brandLogos: Record<string, string> = {
  Motorola: "/images/logos/motorola.png",
  vivo: "/images/logos/vivo.png",
  Xiaomi: "/images/logos/redmi.png",
  Redmi: "/images/logos/redmi.png",
  Oppo: "/images/logos/oppo.png",
  realme: "/images/logos/Realme-Logo.png",
  Infinix: "/images/logos/infinix.png",
};

const brands = Array.from(
  new Set(featuredProducts.map((p) => p.brand))
).filter((brand) => brand in brandLogos);

export default function Intro() {
  return (
    <section id="brands" className="bg-white px-6 py-24 text-center sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal variant="up">
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-6xl">
            <span className="whitespace-nowrap">
              The <span className="text-primary">High-End</span> phones you
              want,
            </span>
            <br />
            the plan you deserve.
          </h1>
        </Reveal>
        <Reveal variant="up" delay={80}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Flagship-grade devices from the brands you trust, walk into Abans,
            pick your favourite, and split it into easy monthly instalments with
            Tiken Tika Pay.
          </p>
        </Reveal>

        <Reveal variant="up" delay={160}>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand) => (
              <div
                key={brand}
                className="group flex h-24 items-center justify-center rounded-2xl border border-black/[0.06] bg-[#F7F5F7] px-3 transition-colors duration-300 hover:border-primary/20 hover:bg-white hover:shadow-sm"
              >
                <div className="relative h-[74px] w-full">
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
      </div>
    </section>
  );
}
