import Reveal from "@/components/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  body,
  tone = "light",
  align = "left",
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <Reveal>
          <p
            className={`text-xs tracking-wide2 uppercase mb-4 ${
              isDark ? "text-silver" : "text-navy/70"
            }`}
          >
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={1}>
        <h2
          className={`font-display text-3xl md:text-5xl leading-[1.1] ${
            isDark ? "text-parchment" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {body && (
        <Reveal delay={2}>
          <p
            className={`mt-6 text-base md:text-lg leading-relaxed ${
              isDark ? "text-mist" : "text-charcoal/80"
            }`}
          >
            {body}
          </p>
        </Reveal>
      )}
    </div>
  );
}
