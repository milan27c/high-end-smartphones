import { featuredProducts } from "@/lib/products";
import ProductRow from "./ProductRow";
import Reveal from "./Reveal";

export default function ProductsSection() {
  return (
    <section id="showcase" className="relative bg-[#F5F5F7] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="text-center sm:text-left">
          <Reveal variant="up">
            <h2 className="text-[32px] font-bold leading-[1.08] tracking-tight text-ink sm:text-[62px]">
              Every flagship.
              <br />
              <span className="text-gradient-animate-light">One easy plan.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-5">
          {featuredProducts.map((product, i) => (
            <ProductRow key={product.slug} product={product} index={i} />
          ))}
        </div>

        <p className="mt-10 text-center text-[11px] leading-relaxed text-muted">
          Prices and specifications shown are indicative for the base
          configuration and will be confirmed on the final spec sheet. *Terms
          &amp; conditions apply.
        </p>
      </div>
    </section>
  );
}
