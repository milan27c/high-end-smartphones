// Product data for the Abans "Go Premium, Pay Easy" high-end phones campaign.
// Sourced from the campaign spec sheet (screenshot, 2026-07-06).
// See CLAUDE.md > "Product data" for known gaps and assumptions.

export type Colour = {
  name: string;
  /** Swatch hex. No official colour codes were supplied for these devices —
   * these are visual approximations of the named colours until the business
   * team provides exact brand hex values. */
  hex: string;
};

export type Product = {
  slug: string;
  brand: string;
  model: string;
  /** Normal / MRP price in LKR. Null = not yet announced ("TBA"). */
  normalPrice: number | null;
  /** Special / campaign price in LKR, if different from normalPrice. */
  specialPrice?: number | null;
  colours?: Colour[];
  /** Real front/back product photos, in `public/`. Falls back to the dummy
   * placeholder frames in DeviceShowcase when not set. */
  images?: string[];
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
    images: ["/images/products/1/front.png", "/images/products/1/back.png"],
    colours: [
      { name: "Corsair Dark Blue", hex: "#1E2A47" },
      { name: "Fluidity Light Blue", hex: "#8FC1E3" },
    ],
    specs: [
      "5G",
      "Qualcomm Snapdragon 6s Gen 4",
      "IP64 rated",
      "Corning Gorilla Glass 7i",
      "50MP Sony LYTIA 600 camera",
      "8GB + 128GB",
      "Military-grade durability with MIL-STD-810H",
      "6.72\" FHD+ 120Hz Display",
    ],
    featured: true,
    accent: "#4B5FD9",
  },
  {
    slug: "vivo-v70fe",
    brand: "vivo",
    model: "V70FE",
    normalPrice: 189990,
    images: ["/images/products/2/front.png", "/images/products/2/back.png"],
    colours: [
      { name: "Titanium Silver", hex: "#B8BCC0" },
      { name: "Ocean Blue", hex: "#1B4F72" },
    ],
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
    images: ["/images/products/3/front.png", "/images/products/3/back.png"],
    colours: [{ name: "Brown", hex: "#6B4226" }],
    specs: [
      "5G",
      "ZEISS gimbal-grade main camera",
      "200MP ZEISS APO telephoto camera",
      "AI-powered tools",
      "IP68 & IP69 Dust & Water resistance",
      "6510 mAh BlueVolt Battery, 90W FlashCharge",
    ],
    featured: true,
    accent: "#0A66FF",
  },
  {
    slug: "xiaomi-17t",
    brand: "Xiaomi",
    model: "17T",
    normalPrice: 224999,
    images: ["/images/products/4/front.png", "/images/products/4/back.png"],
    colours: [
      { name: "Violet", hex: "#6B4FA0" },
      { name: "Blue", hex: "#3B6FD4" },
      { name: "Opal White", hex: "#E9E6E0" },
      { name: "Black", hex: "#1A1A1A" },
    ],
    specs: [
      "5G",
      "6500mAh battery, 22.5W reverse charge",
      "Corning Gorilla Glass 7i",
      "MediaTek Dimensity 8500-Ultra",
      "6500mAh Silicon-carbon Battery, 67W HyperCharge",
      "Leica 5x Telephoto, up to 120x AI Ultra Zoom",
    ],
    featured: true,
    accent: "#FF6900",
  },
  {
    slug: "redmi-note-15-pro-plus",
    brand: "Redmi",
    model: "Note 15 Pro+",
    normalPrice: 179999,
    images: ["/images/products/5/front.png", "/images/products/5/back.png"],
    colours: [
      { name: "Black", hex: "#1A1A1A" },
      { name: "Mocha Brown", hex: "#7B5A45" },
      { name: "Glacier Blue", hex: "#A9C6D8" },
    ],
    specs: [
      "5G",
      "6500mAh battery, 100W HyperCharge",
      "200MP ultimate-clarity camera",
      "Snapdragon 7s Gen 4",
      "IP66/IP68/IP69/IP69K dust and water resistance",
      "Corning Gorilla Glass Victus 2",
    ],
    featured: true,
    accent: "#FF6900",
  },
  {
    slug: "oppo-reno-15f",
    brand: "Oppo",
    model: "Reno 15F",
    normalPrice: 180990,
    images: ["/images/products/6/front.png", "/images/products/6/back.png"],
    colours: [
      { name: "Twilight Blue", hex: "#2C3E67" },
      { name: "Aurora Blue", hex: "#4F86C6" },
    ],
    specs: [
      "5G",
      "50MP ultra wide selfie camera",
      "AI Portrait Glow",
      "7000mAh large battery",
    ],
    featured: true,
    accent: "#1AA05A",
  },
  {
    slug: "oppo-reno-16f",
    brand: "Oppo",
    model: "Reno 16F",
    normalPrice: null,
    images: ["/images/products/7/front.png", "/images/products/7/back.png"],
    colours: [
      { name: "Dream Purple", hex: "#8B6FB3" },
      { name: "Twilight Violet", hex: "#5B4B8A" },
      { name: "Pop White", hex: "#F5F5F5" },
    ],
    specs: [
      "5G",
      "50MP ultra wide selfie camera",
      "HoloVerse 3D technology",
      "IP69K Water and Dust Resistance",
      "Dual-View Video 2.0",
    ],
    featured: true,
    accent: "#1AA05A",
  },
  {
    slug: "realme-c85",
    brand: "realme",
    model: "C85",
    normalPrice: 79990,
    images: ["/images/products/8/front.png", "/images/products/8/back.png"],
    colours: [
      { name: "Kingfisher Blue", hex: "#137DC5" },
      { name: "Swan Black", hex: "#161616" },
    ],
    specs: [
      "7000mAh Titan battery",
      "IP69 Pro water resistance",
      "144Hz 1200nit ultra bright display",
      "Ultra AI partner",
    ],
    featured: true,
    accent: "#FFC900",
  },
  {
    slug: "infinix-note-60",
    brand: "Infinix",
    model: "Note 60",
    normalPrice: 139999,
    images: ["/images/products/9/front.png", "/images/products/9/back.png"],
    colours: [
      { name: "Black", hex: "#161616" },
      { name: "Mist Titanium", hex: "#B0AFA8" },
    ],
    specs: [
      "6500mAh battery, 45W charge",
      "50MP main camera",
      "MediaTek Dimensity 7400 Ultimate",
      "IP64 dust tight and water resistant",
    ],
    featured: true,
    accent: "#00B2A9",
  },
  {
    slug: "infinix-note-60-pro",
    brand: "Infinix",
    model: "Note 60 Pro",
    normalPrice: 149999,
    images: ["/images/products/10/front.png", "/images/products/10/back.png"],
    colours: [
      { name: "Orange", hex: "#E4772E" },
      { name: "Mocha Brown", hex: "#7B5A45" },
      { name: "Deep Ocean Blue", hex: "#1B3A5C" },
    ],
    specs: [
      "5G",
      "Corning Gorilla Glass 7i",
      "Qualcomm Snapdragon 7s Gen 4",
    ],
    featured: true,
    accent: "#00B2A9",
  },
  {
    slug: "itel-super-26-ultra",
    brand: "Itel",
    model: "Super 26 Ultra",
    normalPrice: 89999,
    images: ["/images/products/11/front.png", "/images/products/11/back.png"],
    colours: [
      { name: "Sapphire Blackblue", hex: "#1B2A4A" },
      { name: "Moonstone Silver", hex: "#C7CBCE" },
    ],
    specs: [
      "3D Curved Edge Display with 144Hz",
      "32 MP with Clear Night Selfie",
      "6000 mAh Large Battery",
      "IP65 Rain & Splash Protection",
      "NFC Touch Transfer",
    ],
    featured: true,
    accent: "#D6293E",
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
