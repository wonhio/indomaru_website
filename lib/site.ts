export const siteConfig = {
  name: "INDOMARU",
  domain: "https://www.indomaru.com",
  tagline: "Building Businesses Across Borders.",
  description:
    "INDOMARU is a Dubai-based privately held business group operating across maritime, digital assets and global travel.",
  locationLabel: "DUBAI · SEOUL · SINGAPORE",
};

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Our Group", href: "/group" },
  { label: "Businesses", href: "/businesses" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type BusinessVertical = {
  index: string;
  label: string;
  title: string;
  description: string;
  detail: string;
  capabilities: string[];
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
};

export const businessVerticals: BusinessVertical[] = [
  {
    index: "01",
    label: "MARITIME",
    title: "Ship Brokerage",
    description:
      "Connecting shipowners, charterers, buyers, sellers and commercial partners across international maritime markets.",
    detail:
      "Our maritime activities focus on commercial introductions, vessel transactions, chartering opportunities and strategic relationships across the shipping ecosystem.",
    capabilities: [
      "Sale & Purchase",
      "Chartering Opportunities",
      "Commercial Introductions",
      "Maritime Business Development",
    ],
    ctaLabel: "Explore Maritime",
    ctaHref: "/businesses#maritime",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1800&auto=format&fit=crop",
    imageAlt: "Large commercial vessel moving through open water",
  },
  {
    index: "02",
    label: "DIGITAL ASSETS",
    title: "Crypto & Web3 Consulting",
    description:
      "Strategic advisory for businesses navigating digital assets, blockchain infrastructure and emerging Web3 opportunities.",
    detail:
      "We work with founders, operators and partners exploring practical applications of blockchain, digital payments, crypto infrastructure and next-generation financial technology.",
    capabilities: [
      "Digital Asset Strategy",
      "Web3 Product Advisory",
      "Market Entry",
      "Business Development",
      "Strategic Partnerships",
    ],
    ctaLabel: "Explore Digital Assets",
    ctaHref: "/businesses#digital-assets",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1800&auto=format&fit=crop",
    imageAlt: "Abstract architectural technology infrastructure",
  },
  {
    index: "03",
    label: "TRAVEL",
    title: "Travel Platforms & OTA",
    description:
      "Building and operating technology-driven platforms connecting travelers with experiences around the world.",
    detail:
      "Our travel businesses combine global supplier networks, digital distribution and technology to create scalable travel platforms serving customers across international markets.",
    capabilities: [
      "Online Travel Platforms",
      "Tours & Activities",
      "Global Supplier Distribution",
      "Travel Technology",
      "Destination Experiences",
    ],
    ctaLabel: "Explore Travel",
    ctaHref: "/businesses#travel",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1800&auto=format&fit=crop",
    imageAlt: "International city skyline representing global travel",
  },
];

export const philosophyStatements = [
  {
    title: "Global by Nature",
    body: "We operate across borders and build relationships with partners in multiple markets.",
  },
  {
    title: "Opportunity Driven",
    body: "We pursue businesses where market access, technology and execution create meaningful advantages.",
  },
  {
    title: "Built for the Long Term",
    body: "We focus on sustainable businesses, strong partnerships and long-term value creation.",
  },
];

export const presenceMarkets = [
  { name: "DUBAI", note: "Middle East Hub" },
  { name: "SEOUL", note: "Asia Network" },
  { name: "SINGAPORE", note: "South East Asia Hub" },
];

export const contactCategories = [
  "General Enquiries",
  "Business Partnerships",
  "Maritime",
  "Digital Assets",
  "Travel",
];
