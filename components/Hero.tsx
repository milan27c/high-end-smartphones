import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white pt-16 sm:bg-ink">
      {/* Mobile: full campaign poster, sized to its own aspect ratio so nothing is cropped */}
      <div className="relative w-full aspect-[941/1672] sm:hidden">
        <Image
          src="/images/heromobile.png"
          alt="Abans Go Premium, Pay Easy campaign banner"
          fill
          priority
          className="object-contain"
          sizes="100vw"
        />
      </div>

      {/* Desktop: viewport-height cropped hero photo */}
      <div className="relative hidden h-[86vh] w-full sm:block">
        <Image
          src="/images/hero.jpeg"
          alt="Abans high-end smartphone lineup"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <p className="bg-[#f5f5f7] px-6 py-2.5 text-center text-[11px] tracking-wide text-muted">
        *Terms &amp; conditions apply. Payment plans subject to approval by Abans
        and the relevant finance partner.
      </p>
    </section>
  );
}
