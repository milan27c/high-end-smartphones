// Product data for the Abans "Go Premium, Pay Easy" high-end phones campaign.
// Sourced from the campaign spec sheet (screenshot, 2026-07-06).
// See CLAUDE.md > "Product data" for known gaps and assumptions.

export type Product = {
  slug: string;
  brand: string;
  model: string;
  /** Normal / MRP price in LKR. Null = not yet announced ("TBA"). */
  normalPrice: number | null;
  /** Special / campaign price in LKR, if different from normalPrice. */
  specialPrice?: number | null;
  colours?: string[];
  specs: string[];
  /** Whether the campaign brief asked for this model to be shown. */
  featured: boolean;
  /** True for models the brief requires but the spec sheet has no data for. */
  comingSoon?: boolean;
  /** Accent color used for the CSS phone mockup + badges. */
  accent: string;
};

export const TENURE_OPTIONS = [3, 6, 9, 12, 18, 24] as const;
export const DOWN_PAYMENT_OPTIONS = [0, 10, 20, 30] as const;

export const products: Product[] = [
  {
    slug: "moto-g57",
    brand: "Motorola",
    model: "G57",
    normalPrice: 82999,
    colours: [],
    specs: [
      "5G",
      "Qualcomm Snapdragon 6s Gen 4",
      "IP64 rated",
      "Corning Gorilla Glass 7i",
      "50MP Sony LYTIA 600 camera",
      "8GB + 128GB",
    ],
    featured: true,
    accent: "#4B5FD9",
  },
  {
    slug: "vivo-v70fe",
    brand: "vivo",
    model: "V70FE",
    normalPrice: 189990,
    specs: [
      "5G",
      "200MP Ultra Clear camera",
      "7000mAh battery, 90W flash charge",
      "IP68/69 dust & water resistance",
    ],
    featured: true,
    accent: "#0A66FF",
  },
  {
    slug: "vivo-x300-pro",
    brand: "vivo",
    model: "X300 Pro",
    normalPrice: 459990,
    specs: [
      "5G",
      "ZEISS gimbal-grade main camera",
      "200MP ZEISS APO telephoto camera",
    ],
    featured: false,
    accent: "#0A66FF",
  },
  {
    slug: "xiaomi-17t",
    brand: "Xiaomi",
    model: "17T",
    normalPrice: 224999,
    specs: [
      "5G",
      "6500mAh battery, 22.5W reverse charge",
      "Corning Gorilla Glass 7i",
    ],
    featured: true,
    accent: "#FF6900",
  },
  {
    slug: "redmi-note-15-pro-plus",
    brand: "Xiaomi",
    model: "Redmi Note 15 Pro+",
    normalPrice: 139999,
    specs: [
      "5G",
      "6500mAh battery, 100W HyperCharge",
      "200MP ultimate-clarity camera",
      "Snapdragon 7s Gen 4",
    ],
    featured: true,
    accent: "#FF6900",
  },
  {
    slug: "oppo-reno-15f",
    brand: "Oppo",
    model: "Reno 15F",
    normalPrice: 180990,
    specs: [
      "5G",
      "50MP ultra wide selfie camera",
      "AI Portrait Glow",
      "7000mAh large battery",
    ],
    featured: false,
    accent: "#1AA05A",
  },
  {
    slug: "oppo-reno-16f",
    brand: "Oppo",
    model: "Reno 16F",
    normalPrice: null,
    specs: ["5G", "50MP ultra wide selfie camera", "HoloVerse 3D technology"],
    featured: true,
    accent: "#1AA05A",
  },
  {
    slug: "realme-c85",
    brand: "realme",
    model: "C85",
    normalPrice: 79990,
    specs: [
      "7000mAh Titan battery",
      "IP69 Pro water resistance",
      "144Hz 1200nit ultra bright display",
    ],
    featured: true,
    accent: "#FFC900",
  },
  {
    slug: "infinix-note-60",
    brand: "Infinix",
    model: "Note 60",
    normalPrice: 139999,
    specs: [
      "6500mAh battery, 45W charge",
      "50MP main camera",
      "MediaTek Dimensity 7400 Ultimate",
    ],
    featured: true,
    accent: "#00B2A9",
  },
  {
    slug: "infinix-note-60-pro",
    brand: "Infinix",
    model: "Note 60 Pro",
    normalPrice: 149999,
    specs: [
      "5G",
      "Corning Gorilla Glass 7i",
      "Qualcomm Snapdragon 7s Gen 4",
    ],
    featured: true,
    accent: "#00B2A9",
  },
];

/** Only the models the campaign brief asked to showcase, in brief order. */
export const featuredProducts = products.filter((p) => p.featured);

export function formatLKR(amount: number | null | undefined): string {
  if (amount == null) return "TBA";
  return `Rs. ${amount.toLocaleString("en-LK")}`;
}

export type InstalmentBreakdown = {
  price: number;
  downPaymentPct: number;
  downPaymentAmount: number;
  financedAmount: number;
  tenureMonths: number;
  monthlyInstalment: number;
};

/**
 * Indicative, 0%-interest instalment calculation.
 * The source spec sheet has no Special Price / Down Payment / Monthly
 * Instalment figures for any model, so this is a placeholder formula for
 * the initial design — swap in real finance-partner APR/tenure rules
 * once the business team supplies them (see CLAUDE.md).
 */
export function calcInstalment(
  product: Product,
  tenureMonths: number,
  downPaymentPct: number
): InstalmentBreakdown | null {
  const price = product.specialPrice ?? product.normalPrice;
  if (price == null) return null;

  const downPaymentAmount = Math.round((price * downPaymentPct) / 100);
  const financedAmount = price - downPaymentAmount;
  const monthlyInstalment = Math.ceil(financedAmount / tenureMonths);

  return {
    price,
    downPaymentPct,
    downPaymentAmount,
    financedAmount,
    tenureMonths,
    monthlyInstalment,
  };
}
