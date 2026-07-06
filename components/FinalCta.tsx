import Reveal from "./Reveal";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 sm:py-28">
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-black/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-10">
        <Reveal variant="up">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to go premium?
          </h2>
        </Reveal>
        <Reveal variant="up" delay={100}>
          <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
            Visit your nearest Abans showroom or explore the lineup online
            and pick your Tiken Tika Pay plan today.
          </p>
        </Reveal>
        <Reveal variant="up" delay={200}>
          <div className="mt-10 flex justify-center">
            <a
              href="https://www.abanssmartphones.com/products"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary transition-transform duration-300 hover:scale-[1.03]"
            >
              Browse phones
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
