import Image from "next/image";
import Reveal from "./Reveal";

const pillars = [
  {
    title: "Affordability",
    description:
      "Split any flagship into 3, 6, 12 or 24 easy monthly instalments with Tiken Tika Pay, so high-end no longer means a high upfront cost.",
  },
  {
    title: "Premium Selection",
    description:
      "A curated, top-tier lineup from the brands you trust, with every model chosen for genuine flagship-grade performance.",
  },
  {
    title: "Value Proposition",
    description:
      "Standout cameras, batteries and displays paired with real lifestyle benefits, premium features made financially accessible.",
  },
];

// Documented plan is Tiken Tika Pay; card/BNPL options are shown generically
// until the business team confirms the exact finance-partner list.
const methods = [
  "Abans Tiken Tika Pay",
  "Bank card instalment plans",
  "Buy Now, Pay Later",
];

export default function EasyPayments() {
  return (
    <section
      id="easy-payments"
      className="relative overflow-hidden bg-[#121214] py-24 text-white sm:py-32"
    >
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mx-auto max-w-3xl text-center sm:mx-0 sm:text-left">
          <Reveal variant="up">
            <h2 className="text-[32px] font-bold leading-[1.08] tracking-tight sm:whitespace-nowrap sm:text-[62px]">
              Go Premium.{" "}
              <span className="text-gradient-animate">Pay Easy.</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <p className="mt-6 text-base leading-relaxed text-white/60 sm:text-lg">
              Tiken Tika Pay turns a big price tag into small, manageable
              monthly payments, so affordability never means settling for
              less phone.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1.8fr_1fr] lg:items-center lg:gap-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-12">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} variant="up" delay={140 + i * 90}>
                <div className="border-t border-white/10 pt-6 text-center sm:text-left">
                  <span className="mb-3 hidden h-2 w-2 rounded-full bg-primary-light sm:block" />
                  <h3 className="text-lg font-semibold">{pillar.title}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-white/55">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="fade" delay={200}>
            <div className="relative mx-auto w-full max-w-[230px] overflow-hidden rounded-3xl p-[2px]">
              <div
                className="animate-spark-spin absolute left-1/2 top-1/2 h-[220%] w-[220%]"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, #ffffff 322deg, var(--color-primary-light) 338deg, transparent 356deg)",
                }}
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[1.4rem] bg-ink">
                <div className="relative aspect-square w-full overflow-hidden rounded-[1.4rem]">
                  <Image
                    src="/images/tikentika.jpg"
                    alt="Abans Tiken Tika Pay"
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 16vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal variant="up" delay={460}>
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
            {methods.map((m) => (
              <span
                key={m}
                className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/75"
              >
                {m}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
