import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Go Premium, Pay Easy | Abans High-End Phones",
  description:
    "Discover Abans' premium smartphone lineup and take it home the easy way with Tiken Tika Pay flexible instalment plans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
