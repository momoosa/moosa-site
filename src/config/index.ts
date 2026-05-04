import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Mo Moosa — Senior iOS Developer",
  author: "Mo Moosa",
  description:
    "British/Belgian iOS Developer at Mediahuis based in Ghent, Belgium.",
  lang: "en",
  siteLogo: "/mo-small.jpg",
  navLinks: [
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/mo-moosa" }
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Mo Moosa",
    specialty: "Senior iOS Developer",
    summary:
      "British/Belgian iOS Developer at Mediahuis based in Ghent, Belgium.",
    email: "work@moosa.io",
  },
  experience: [
    {
      company: "Mediahuis",
      position: "Senior iOS Developer",
      startDate: "December 2025",
      endDate: "Present",
      summary: [
        "Implemented advanced memory management and code optimization techniques, resulting in a reduction in application load time by 40% and a decrease in crashes by 25%. This significantly improved user experience and increased user retention by 20%.",
        "I led a team of developers in building and integrating new features using Jetpack Android components such as LiveData and ViewModel. This enabled us to build scalable and maintainable applications, reducing the crash rate by 20% and speeding up the time to delivery of new features by 15%.",
        "Integrated Google Pay for in-app purchases, resulting in a 35% increase in mobile transaction revenue. Additionally, implemented Firebase Analytics to gain insights into user behavior, enabling data-driven optimizations and a 30% increase in user retention.",
      ],
    },
    {
      company: "Peanut",
      position: "Lead iOS Developer",
      startDate: "Aug 2022",
      endDate: "November 2025",
      summary: [
        "Assumed full ownership of the iOS app post-restructure, overseeing development, weekly releases, and ongoing product maintenance.",
        "Collaborated directly with product, design, and backend teams to scope, develop, and deliver features end-to-end.",
        "Led the migration from hard-to-test Storyboards to a modular, dependency-injectable code base with 30% SwiftUI code that is easier to maintain and write automated tests for.",
        "Implemented several A/B tested features to quickly learn and improve the product in the most efficient way possible.",
        "Addressed serious quality issues by increasing test coverage from 0% to 25% via a combination of UI, unit, and snapshot tests, leading to reduced bugs in production.",
        "Participated in product workshop sessions to better understand our users and contribute to the needs of the business.",
        "Successfully migrated StoreKit 1 to StoreKit 2 without regressions, improving maintainability and UX."
      ],
    }
  ],
  downloadCV: {
    filePath: "",
  },
  about: {
    description: `
      Seasoned Senior iOS Engineer with a first-class Computing BSc degree and 12 years of
experience in developing, optimising, and delivering high-quality iOS applications. Proficient in
leading process improvements, implementing A/B testing strategies, and enhancing user
engagement and conversion rates. Adept at collaborating with cross-functional teams to deliver
high-quality, user-centric solutions. Never settles and always believes there’s room for
improvement, passionate about all things mobile and delivering products - not just the code.
    `,
    image: "/alejandro-big.jpg",
  },
};

