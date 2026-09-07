import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "INDOMARU is a privately held business group headquartered in Dubai with business interests spanning maritime commerce, digital assets and travel technology.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink pt-40 pb-24 md:pt-52 md:pb-32">
        <div className="container-edit">
          <Reveal>
            <h1 className="font-display text-parchment text-4xl md:text-6xl max-w-3xl leading-[1.05]">
              Independent. International. Entrepreneurial.
            </h1>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-8 max-w-xl text-mist text-base md:text-lg leading-relaxed">
              INDOMARU is a privately held business group headquartered in
              Dubai with business interests spanning maritime commerce,
              digital assets and travel technology. Our activities have
              evolved through international partnerships, entrepreneurship
              and the development of businesses connecting markets across
              borders.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-parchment">
        <div className="container-edit py-24 md:py-32 space-y-20 md:space-y-28">
          <Reveal className="max-w-2xl">
            <p className="text-xs tracking-wide2 uppercase text-navy/70 mb-4">
              OUR PERSPECTIVE
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-5">
              Our Perspective
            </h2>
            <p className="text-base md:text-lg text-charcoal/80 leading-relaxed">
              Markets change. Technology evolves. Opportunities move across
              industries.
              <br />
              <br />
              Our approach is therefore intentionally flexible. We focus on
              understanding markets, establishing the right partnerships and
              building businesses around practical opportunities.
            </p>
          </Reveal>

                    <Reveal className="max-w-2xl">
            <p className="text-xs tracking-wide2 uppercase text-navy/70 mb-4">
              OUR BASES
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-5">
              Dubai, Seoul & Singapore
            </h2>
            <p className="text-base md:text-lg text-charcoal/80 leading-relaxed">
              INDOMARU operates from three international hubs — Dubai in
              the United Arab Emirates, Seoul in the Republic of Korea,
              and Singapore — giving us a strategic base between the
              Middle East, Asia and global markets, and supporting our
              international business activities and partnerships.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
