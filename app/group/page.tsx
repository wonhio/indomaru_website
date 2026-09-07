import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Group",
  description:
    "INDOMARU brings together businesses and opportunities across industries through a shared focus on international markets, technology and strategic partnerships.",
  alternates: { canonical: "/group" },
};

const activities = [
  "Business development",
  "Venture building",
  "Strategic partnerships",
  "International market access",
  "Operating businesses",
  "Commercial opportunities",
];

export default function GroupPage() {
  return (
    <>
      <section className="bg-ink pt-40 pb-24 md:pt-52 md:pb-32">
        <div className="container-edit">
          <Reveal>
            <h1 className="font-display text-parchment text-4xl md:text-6xl max-w-3xl leading-[1.05]">
              A Business Group Built Across Borders.
            </h1>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-8 max-w-xl text-mist text-base md:text-lg leading-relaxed">
              INDOMARU brings together businesses and opportunities across
              industries through a shared focus on international markets,
              technology and strategic partnerships.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-parchment">
        <div className="container-edit py-24 md:py-32">
          <Reveal>
            <p className="text-xs tracking-wide2 uppercase text-navy/70 mb-6">
              WHAT {siteConfig.name} DOES
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 mt-4">
            {activities.map((item, i) => (
              <Reveal key={item} delay={(i % 3) as 0 | 1 | 2}>
                <div className="border-t border-ink/15 pt-5">
                  <p className="font-display text-xl text-ink">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
