import Link from "next/link";
import { siteConfig } from "@/lib/site";

const footerColumns = [
  {
    heading: "Company",
    links: [
      { label: "Our Group", href: "/group" },
      { label: "Businesses", href: "/businesses" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Businesses",
    links: [
      { label: "Maritime", href: "/businesses#maritime" },
      { label: "Digital Assets", href: "/businesses#digital-assets" },
      { label: "Travel", href: "/businesses#travel" },
    ],
  },
  {
    heading: "Platforms",
    links: [
      { label: "Trateria", href: "https://www.trateria.com", external: true },
      { label: "Xerovan", href: "https://www.xerovan.com", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-parchment">
      <div className="container-edit py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-2">
            <p className="font-display text-xl mb-3">{siteConfig.name}</p>
            <p className="text-sm text-mist max-w-xs leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading}>
              <p className="text-sm text-silver mb-4">{col.heading}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-mist hover:text-parchment transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-mist hover:text-parchment transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rule my-12" />

        <div className="flex flex-col md:flex-row justify-between gap-3 text-xs text-mist">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
