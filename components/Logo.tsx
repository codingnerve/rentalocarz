import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

interface LogoProps {
  tone?: "dark" | "light";
  className?: string;
}

/** Official brand logo from uploaded brand mark. `tone="light"` is for dark backgrounds. */
export function Logo({ tone = "dark", className }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center transition-opacity hover:opacity-90 ${className || ""}`}
      aria-label={`${site.name} Home`}
    >
      <div className={tone === "light" ? "rounded-lg bg-white px-2 py-1 shadow-sm" : ""}>
        <Image
          src="/images/vehicles/Dynamic RentaloCarz Logo.png"
          alt={site.name}
          width={216}
          height={72}
          priority
          className="h-9 w-auto sm:h-11 object-contain"
        />
      </div>
    </Link>
  );
}
