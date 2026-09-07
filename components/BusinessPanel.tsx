import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { BusinessVertical } from "@/lib/site";

export default function BusinessPanel({
  vertical,
  reverse = false,
  id,
}: {
  vertical: BusinessVertical;
  reverse?: boolean;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center py-16 md:py-24 border-t border-charcoal/10 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Reveal className="relative aspect-[4/5] md:aspect-[4/3] w-full overflow-hidden">
        <Image
          src={vertical.image}
          alt={vertical.imageAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </Reveal>

      <div>
        <Reveal>
          <p className="text-xs tracking-wide2 uppercase text-navy/70 mb-4">
            {vertical.index} / {vertical.label}
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h3 className="font-display text-3xl md:text-4xl text-ink leading-tight">
            {vertical.title}
          </h3>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-5 text-base md:text-lg text-charcoal/80 leading-relaxed">
            {vertical.description}
          </p>
          <p className="mt-4 text-sm md:text-base text-charcoal/65 leading-relaxed">
            {vertical.detail}
          </p>
        </Reveal>
        <Reveal delay={3}>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {vertical.capabilities.map((cap) => (
              <li key={cap} className="text-sm text-charcoal/70">
                {cap}
              </li>
            ))}
          </ul>
          <Link
            href={vertical.ctaHref}
            className="mt-8 inline-block text-sm text-ink border-b border-ink/40 pb-1 hover:border-ink transition-colors duration-300 ease-editorial"
          >
            {vertical.ctaLabel}
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
