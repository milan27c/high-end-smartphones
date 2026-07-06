"use client";

import { useMemo, useState } from "react";
import {
  TENURE_OPTIONS,
  calcInstalment,
  formatLKR,
  type Product,
} from "@/lib/products";
import DeviceShowcase from "./DeviceShowcase";
import Reveal from "./Reveal";

type ProductRowProps = {
  product: Product;
  index: number;
};

export default function ProductRow({ product, index }: ProductRowProps) {
  const [tenure, setTenure] = useState<number>(12);
  const [hovered, setHovered] = useState(false);

  // No down payment surfaced — indicative monthly is computed on full price.
  const breakdown = useMemo(
    () => calcInstalment(product, tenure, 0),
    [product, tenure]
  );

  const price = product.specialPrice ?? product.normalPrice;
  const priceKnown = price != null;

  return (
    <Reveal variant="up" delay={(index % 2) * 60} as="article" className="scroll-mt-24">
      <div
        id={product.slug}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative grid grid-cols-1 overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-[0_1px_3px_rgba(11,11,13,0.05)] transition-shadow duration-300 hover:shadow-[0_10px_24px_-14px_rgba(11,11,13,0.15)] lg:grid-cols-[400px_1fr]"
      >
        {/* Device visual */}
        <div className="relative flex min-h-[260px] items-center justify-center bg-white p-8">
          <DeviceShowcase
            playing={hovered}
            className="h-[264px] w-[264px] sm:h-[312px] sm:w-[312px]"
          />
        </div>

        {/* Vertical separator between image and text, 70% height, centered */}
        <div
          className="pointer-events-none absolute inset-y-[15%] left-[400px] hidden w-px bg-black/10 lg:block"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="flex flex-col gap-5 p-7 sm:p-9">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink">
                {product.brand}
              </span>
              <h3 className="mt-1 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {product.brand} {product.model}
              </h3>
            </div>
            <div className="flex-shrink-0 sm:text-right">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted">
                Price
              </p>
              {priceKnown ? (
                <p className="mt-1 text-xl font-bold text-ink sm:text-2xl">
                  {formatLKR(price)}
                </p>
              ) : (
                <span className="mt-1 inline-block rounded-full bg-ink/5 px-3 py-1 text-sm font-semibold text-muted">
                  Announcing soon
                </span>
              )}
            </div>
          </div>

          {product.specs.length > 0 && (
            <ul className="grid grid-cols-1 gap-2 border-y border-black/[0.07] py-4 sm:grid-cols-2 sm:gap-x-6">
              {product.specs.map((spec) => (
                <li
                  key={spec}
                  className="flex items-start gap-2 text-[13px] leading-snug text-ink"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black" />
                  {spec}
                </li>
              ))}
            </ul>
          )}

          {priceKnown && breakdown ? (
            <div className="flex flex-col items-center gap-5 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
              <div className="w-full sm:w-auto">
                <p className="text-[11px] font-medium uppercase tracking-wide text-ink">
                  <span className="sm:hidden">Choose tenure (months)</span>
                  <span className="hidden sm:inline">Choose tenure</span>
                </p>
                <div className="mt-2 flex w-full flex-nowrap items-center justify-between gap-1 rounded-full border border-black/[0.08] bg-white p-1 sm:inline-flex sm:w-auto sm:flex-wrap sm:justify-start">
                  {TENURE_OPTIONS.map((months) => (
                    <button
                      key={months}
                      type="button"
                      onClick={() => setTenure(months)}
                      aria-pressed={tenure === months}
                      className={`flex-1 cursor-pointer rounded-full px-2 py-1.5 text-[13px] font-semibold transition-colors duration-200 sm:flex-none sm:px-3.5 ${
                        tenure === months
                          ? "bg-ink text-white"
                          : "text-muted hover:text-ink"
                      }`}
                    >
                      <span className="sm:hidden">{months}</span>
                      <span className="hidden sm:inline">{months} mo</span>
                    </button>
                  ))}
                </div>

                <p className="mt-4 text-center text-[11px] font-medium uppercase tracking-wide text-muted sm:text-left">
                  Monthly instalment
                </p>
                <p className="mt-1 flex items-baseline justify-center gap-1.5 sm:justify-start">
                  <span className="text-xl font-bold text-primary sm:text-2xl">
                    {formatLKR(breakdown.monthlyInstalment)}
                  </span>
                  <span className="text-[13px] text-muted">/ mo</span>
                </p>
              </div>

              <button
                type="button"
                className="cursor-pointer rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary-dark"
              >
                Buy Now
              </button>
            </div>
          ) : (
            <div>
              <button
                type="button"
                className="cursor-pointer rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary-dark"
              >
                Notify me
              </button>
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}
