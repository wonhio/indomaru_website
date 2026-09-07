import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CTASection() {
  return (
    <section className="bg-ink">
      <div className="container-edit py-24 md:py-32">
        <Reveal>
          <p className="text-xs tracking-wide2 uppercase text-silver mb-6">
            PARTNERSHIPS
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-parchment text-3xl md:text-5xl max-w-3xl leading-tight">
            Opportunity starts with a conversation.
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-6 max-w-xl text-mist text-base md:text-lg leading-relaxed">
            We work with entrepreneurs, operators and businesses around the
            world. If you see an opportunity to work together, we&apos;d
            like to hear from you.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <Link
            href="/contact"
            className="mt-10 inline-block text-sm text-ink bg-parchment px-7 py-3.5 hover:bg-silver transition-colors duration-300 ease-editorial"
          >
            Contact INDOMARU
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
