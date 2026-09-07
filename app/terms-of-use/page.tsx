import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Use",
  alternates: { canonical: "/terms-of-use" },
  robots: { index: false, follow: true },
};

export default function TermsOfUsePage() {
  return (
    <section className="bg-parchment pt-40 pb-24 md:pt-52 md:pb-32">
      <div className="container-edit max-w-2xl">
        <Reveal>
          <h1 className="font-display text-3xl md:text-4xl text-ink mb-8">
            Terms of Use
          </h1>
          <p className="text-base text-charcoal/80 leading-relaxed">
            This page will outline the terms governing use of this
            website. Full terms content to be provided by INDOMARU and
            published here prior to launch.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
