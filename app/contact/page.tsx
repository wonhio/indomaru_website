import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "For partnerships, commercial opportunities and strategic collaborations, connect with INDOMARU.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink pt-40 pb-24 md:pt-52 md:pb-32">
        <div className="container-edit">
          <Reveal>
            <h1 className="font-display text-parchment text-4xl md:text-6xl max-w-3xl leading-[1.05]">
              Let&apos;s Build Across Borders.
            </h1>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-8 max-w-xl text-mist text-base md:text-lg leading-relaxed">
              For partnerships, commercial opportunities and strategic
              collaborations, connect with INDOMARU.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-parchment">
        <div className="container-edit py-24 md:py-32">
          <div className="grid md:grid-cols-[1fr_1.3fr] gap-16">
            <Reveal>
              <p className="text-xs tracking-wide2 uppercase text-navy/70 mb-8">
  REACH US
</p>
<ul className="space-y-3 text-sm text-charcoal/70">
                <li>General Enquiries</li>
                <li>Business Partnerships</li>
                <li>Maritime</li>
                <li>Digital Assets</li>
                <li>Travel</li>
              </ul>
            </Reveal>

            <Reveal delay={1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
