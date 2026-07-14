import Image from "next/image";
import Reveal from "./Reveal";

export default function TrclBanner() {
  return (
    <section className="bg-[#F5F5F7] py-8 sm:py-10">
      <Reveal variant="fade">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
          <div className="relative aspect-[2172/724] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/trcl.png"
              alt="TRCL Approved Devices — Reliable, Verified, Ready for you"
              fill
              className="object-contain"
              sizes="(min-width: 1280px) 1280px, 100vw"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
