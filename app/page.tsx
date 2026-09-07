import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import BusinessPanel from "@/components/BusinessPanel";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";
import {
  businessVerticals,
  philosophyStatements,
  presenceMarkets,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Introduction */}
      <section className="bg-parchment">
        <div className="container-edit py-24 md:py-32">
          <SectionHeading
            eyebrow="INDOMARU GROUP"
            title="One Group. Multiple Industries."
            body="INDOMARU is a privately held business group focused on identifying opportunities, developing businesses and building long-term partnerships across international markets. Based in Dubai and connected globally, our activities span maritime commerce, digital assets and travel technology."
          />
          <div className="rule mt-16" />
        </div>
      </section>

      {/* Business Verticals */}
      <section className="bg-parchment">
        <div className="container-edit pb-8">
          <SectionHeading
            eyebrow="OUR BUSINESSES"
            title="Our Businesses"
            body="We operate across industries where international networks, technology and market access create meaningful opportunities."
          />
        </div>
        <div className="container-edit">
          {businessVerticals.map((vertical, i) => (
            <BusinessPanel
              key={vertical.index}
              vertical={vertical}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </section>

      {/* Selected Business: Trateria */}
      <section className="bg-parchment">
        <div className="container-edit py-24 md:py-32">
          <p className="text-xs tracking-wide2 uppercase text-navy/70 mb-10">
            SELECTED BUSINESS
          </p>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1800&auto=format&fit=crop"
                alt="Traveler exploring a destination, representing the Trateria platform"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <div>
              <Reveal>
                <p className="text-xs tracking-wide2 uppercase text-navy/70 mb-4">
                  TRAVEL PLATFORM
                </p>
              </Reveal>
              <Reveal delay={1}>
                <h3 className="font-display text-3xl md:text-4xl text-ink leading-tight">
                  Global Tours & Activities Marketplace
                </h3>
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-5 text-base md:text-lg text-charcoal/80 leading-relaxed">
                  Trateria is a global travel platform connecting travelers
                  with tours, attractions and destination experiences
                  sourced from local suppliers around the world.
                </p>
                <p className="mt-4 text-sm md:text-base text-charcoal/65 leading-relaxed">
                  Built around global distribution and competitive pricing,
                  Trateria enables travelers to discover and book
                  experiences across international destinations.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <a
                  href="https://www.trateria.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block text-sm text-ink border-b border-ink/40 pb-1 hover:border-ink transition-colors duration-300 ease-editorial"
                >
                  Visit Trateria →
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-ink">
        <div className="container-edit py-24 md:py-32">
          <Reveal>
            <p className="text-xs tracking-wide2 uppercase text-silver mb-6">
              OUR APPROACH
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-parchment text-3xl md:text-5xl max-w-3xl leading-tight">
              We don&apos;t limit ourselves to one industry.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-mist text-base md:text-lg leading-relaxed">
              INDOMARU identifies opportunities where international
              networks, technology, operational experience and local market
              knowledge can create meaningful businesses. Rather than
              following a single-sector model, we build and support
              ventures where we believe our capabilities can generate
              long-term value.
            </p>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-3 gap-12 md:gap-10">
            {philosophyStatements.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) as 0 | 1 | 2}>
                <div className="border-t border-parchment/15 pt-6">
                  <h3 className="font-display text-xl text-parchment mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-mist leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="bg-parchment">
        <div className="container-edit py-24 md:py-32">
          <SectionHeading
            title="Connected Across Markets."
            body="Headquartered in Dubai, INDOMARU operates through an international network of businesses, partners and relationships connecting the Middle East, Asia and global markets."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {presenceMarkets.map((market, i) => (
              <Reveal key={market.name} delay={(i % 3) as 0 | 1 | 2}>
                <div className="border-t border-ink/15 pt-6">
                  <p className="font-display text-2xl text-ink">
                    {market.name}
                  </p>
                  <p className="text-sm text-charcoal/60 mt-1">
                    {market.note}
                  </p>
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
