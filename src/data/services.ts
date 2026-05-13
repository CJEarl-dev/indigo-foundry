export type Service = {
  slug: string;
  title: string;
  icon: string;
  short: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: 'web-design',
    title: 'Web Design',
    icon: 'layout',
    short: 'Beautiful, conversion-focused websites tailored to your brand.',
    description:
      'We craft visual experiences that balance aesthetics with usability, guiding visitors toward meaningful actions while staying true to your identity.',
    features: [
      'Wireframes & prototypes',
      'Responsive layouts',
      'Design systems',
      'Accessibility audits',
    ],
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    icon: 'code',
    short: 'Fast, scalable websites built with modern frameworks.',
    description:
      'From landing pages to complex web apps, we deliver clean codebases that load fast, scale gracefully, and are a joy for your team to maintain.',
    features: [
      'Astro, Next.js, and headless CMS',
      'E-commerce integrations',
      'Performance optimization',
      'API & backend development',
    ],
  },
  {
    slug: 'seo-analytics',
    title: 'SEO & Analytics',
    icon: 'search',
    short: 'Rank higher, measure what matters, and grow organically.',
    description:
      'We combine technical SEO, content strategy, and analytics so you always know which channels drive revenue — and which to stop spending on.',
    features: [
      'Technical SEO audits',
      'Keyword & content strategy',
      'GA4 & Looker dashboards',
      'Conversion rate optimization',
    ],
  },
  {
    slug: 'branding-identity',
    title: 'Branding & Identity',
    icon: 'palette',
    short: 'Distinctive brand systems that people remember.',
    description:
      'Logos, typography, voice, and guidelines — we build cohesive brand systems that scale from business cards to billboards without losing character.',
    features: [
      'Logo & visual identity',
      'Brand guidelines',
      'Naming & messaging',
      'Print & collateral design',
    ],
  },
  {
    slug: 'content-strategy',
    title: 'Content Strategy',
    icon: 'file-text',
    short: 'Words and stories that connect with the right audience.',
    description:
      'We help you plan, create, and publish content that answers real questions, builds trust, and moves prospects from curiosity to conversion.',
    features: [
      'Editorial calendars',
      'Long-form articles & case studies',
      'Email & newsletter strategy',
      'Copywriting for web & ads',
    ],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: 'figma',
    short: 'Interfaces that feel intuitive from the first click.',
    description:
      'Through research, prototyping, and usability testing we design digital products that reduce friction and make users return willingly.',
    features: [
      'User research & personas',
      'Interaction design',
      'Usability testing',
      'Design system handoff',
    ],
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We dig into your business, audience, and goals to define what success looks like before writing a single line of code.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We translate strategy into wireframes, moodboards, and high-fidelity designs you can review and shape with us.',
  },
  {
    number: '03',
    title: 'Develop',
    description:
      'Our engineers build fast, accessible, and search-friendly sites on top of the design — with weekly progress demos.',
  },
  {
    number: '04',
    title: 'Launch',
    description:
      'We QA, migrate, and launch your project, then stick around to measure results and iterate on what works.',
  },
];
