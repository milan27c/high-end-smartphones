import Reveal from "./Reveal";

const pillars = [
  {
    title: "Trusted retailer",
    description:
      "One of Sri Lanka's most established electronics retailers, with showrooms across the island.",
  },
  {
    title: "TRCSL Approved",
    description:
      "Every device in this lineup is officially TRCSL-approved for use in Sri Lanka, so premium always comes with full compliance and peace of mind.",
  },
  {
    title: "Flexible finance options",
    description:
      "Tiken Tika Pay is built around your budget — pick the tenure and down payment that works for you.",
  },
  {
    title: "Real, in-person support",
    description:
      "Walk into any Abans showroom to compare models, get advice, and complete your purchase.",
  },
];

export default function WhyAbans() {
  return (
    <section id="why-abans" className="bg-[#121214] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal variant="up">
            <h2 className="text-[32px] font-bold leading-[1.08] tracking-tight text-white sm:text-[62px]">
              Buy premium.
              <br />
              <span className="text-gradient-animate">Buy with confidence.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} variant="up" delay={i * 100}>
              <div className="h-full bg-[#121214] px-7 py-10 text-center transition-colors duration-300 hover:bg-white/5 sm:text-left">
                <h3 className="text-lg font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
