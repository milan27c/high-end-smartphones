import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/15 bg-primary py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left sm:px-10">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center">
          <Image
            src="/images/footerlogo.png"
            alt="Abans Smartphones"
            width={300}
            height={132}
            className="h-8 w-auto"
          />
          <p className="text-xs text-white/50">
            Go Premium, Pay Easy &mdash; powered by Tiken Tika Pay.
          </p>
        </div>
        <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()} Abans. Prices and offers subject
          to change without notice.
        </p>
      </div>
    </footer>
  );
}
