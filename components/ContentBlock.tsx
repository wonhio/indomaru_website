import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function ContentBlock({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  reverse = false,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
}) {
  if (!image) {
    return (
      <Reveal className="max-w-2xl py-4">
        {eyebrow && (
          <p className="text-xs tracking-wide2 uppercase text-navy/70 mb-4">
            {eyebrow}
          </p>
        )}
        <h3 className="font-display text-2xl md:text-3xl text-ink mb-5">
          {title}
        </h3>
        <p className="text-base md:text-lg text-charcoal/80 leading-relaxed whitespace-pre-line">
          {body}
        </p>
      </Reveal>
    );
  }

  return (
    <div
      className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Reveal className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt ?? ""}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </Reveal>
      <Reveal delay={1}>
        {eyebrow && (
          <p className="text-xs tracking-wide2 uppercase text-navy/70 mb-4">
            {eyebrow}
          </p>
        )}
        <h3 className="font-display text-2xl md:text-3xl text-ink mb-5">
          {title}
        </h3>
        <p className="text-base md:text-lg text-charcoal/80 leading-relaxed whitespace-pre-line">
          {body}
        </p>
      </Reveal>
    </div>
  );
}
