import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BusinessPanel from "@/components/BusinessPanel";
import CTASection from "@/components/CTASection";
import { businessVerticals } from "@/lib/site";

export const metadata: Metadata = {
  title: "Businesses",
  description:
    "Our businesses operate in different industries but share the same foundation: international networks, operational execution and the ability to connect markets.",
  alternates: { canonical: "/businesses" },
};

const anchors: Record<string, string> = {
  "01": "maritime",
  "02": "digital-assets",
  "03": "travel",
};

export default function BusinessesPage() {
  return (
    <>
      <section className="bg-ink pt-40 pb-24 md:pt-52 md:pb-32">
        <div className="container-edit">
          <Reveal>
            <h1 className="font-display text-parchment text-4xl md:text-6xl max-w-3xl leading-[1.05]">
              Businesses Built Around Opportunity.
            </h1>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-8 max-w-xl text-mist text-base md:text-lg leading-relaxed">
              Our businesses operate in different industries but share the
              same foundation: international networks, operational
              execution and the ability to connect markets.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-parchment">
        <div className="container-edit">
          {businessVerticals.map((vertical, i) => (
            <BusinessPanel
              key={vertical.index}
              vertical={vertical}
              reverse={i % 2 === 1}
              id={anchors[vertical.index]}
            />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
