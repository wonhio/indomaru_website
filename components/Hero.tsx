import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      <Image
        src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2400&auto=format&fit=crop"
        alt="Aerial view of a container port at dusk, representing global trade infrastructure"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
      <div className="absolute inset-0 bg-ink/20" />

      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="container-edit pb-20 md:pb-28">
          <p className="text-xs tracking-wide2 uppercase text-silver mb-6 animate-[fadeIn_1.1s_ease-editorial_0.2s_both]">
            {siteConfig.locationLabel}
          </p>

          <h1 className="font-display text-parchment text-[13vw] leading-[0.98] md:text-[6.5vw] md:leading-[0.98] max-w-5xl animate-[fadeIn_1.1s_ease-editorial_0.4s_both]">
            Building Businesses.
            <br />
            Connecting Markets.
          </h1>

          <p className="mt-8 max-w-xl text-base md:text-lg text-mist leading-relaxed animate-[fadeIn_1.1s_ease-editorial_0.6s_both]">
            From maritime trade to digital assets and global travel,
            INDOMARU builds and operates businesses across industries and
            borders.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5 animate-[fadeIn_1.1s_ease-editorial_0.8s_both]">
            <Link
              href="/businesses"
              className="text-sm text-ink bg-parchment px-7 py-3.5 hover:bg-silver transition-colors duration-300 ease-editorial"
            >
              Explore Our Businesses
            </Link>
            <Link
              href="/about"
              className="text-sm text-parchment border border-parchment/40 px-7 py-3.5 hover:border-parchment transition-colors duration-300 ease-editorial"
            >
              About INDOMARU
            </Link>
          </div>
        </div>

        <div className="hidden md:flex container-edit pb-8 items-center gap-3 text-mist text-xs">
          <span className="block w-8 h-px bg-mist/60" />
          Scroll
        </div>
      </div>
    </section>
  );
}
