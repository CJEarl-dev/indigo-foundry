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
    slug: 'custom-website-development',
    title: 'Custom Website Development',
    icon: 'code',
    short: 'Built for your goals, designed around your audience.',
    description:
      'Every site we build starts with a conversation about your goals. We develop websites that reflect your brand, serve your audience, and hold up over time.',
    features: [
      'Custom design & development',
      'Mobile-responsive layouts',
      'Accessibility built in',
      'Performance optimized',
    ],
  },
  {
    slug: 'website-redesign',
    title: 'Website Redesign & Modernization',
    icon: 'layout',
    short: 'Structural improvement, not just a fresh coat of paint.',
    description:
      'If your site was built years ago and no longer reflects who you are or what you do, we rebuild it from the ground up — faster, more accessible, and easier to maintain.',
    features: [
      'Content audit & restructure',
      'Modern tech stack',
      'Accessibility remediation',
      'Improved performance',
    ],
  },
  {
    slug: 'landing-pages',
    title: 'Landing Page Development',
    icon: 'file-text',
    short: 'Focused pages built to convert.',
    description:
      'Scoped, fast, and effective. Landing pages are ideal for campaigns, product launches, or any moment when you need a single page to do serious work.',
    features: [
      'Clear calls to action',
      'Form & lead capture integration',
      'Fast turnaround',
      'Analytics ready',
    ],
  },
  {
    slug: 'maintenance-support',
    title: 'Maintenance & Support',
    icon: 'search',
    short: 'Ongoing support so you can focus on your mission.',
    description:
      'Ongoing support and maintenance to keep your site secure, current, and working — so you don\'t have to think about it.',
    features: [
      'Content updates',
      'Security & dependency updates',
      'Minor feature additions',
      'Regular health checks',
    ],
  },
  {
    slug: 'accessibility-audits',
    title: 'Accessibility Audits & Remediation',
    icon: 'palette',
    short: 'Make your site work for everyone.',
    description:
      'We audit your site against WCAG 2.2 AA standards, identify barriers, and fix them — with clear recommendations you can act on and build from.',
    features: [
    'WCAG 2.2 AA audit',
    'Accessibility fixes & remediation',
    'Lighthouse & WAVE testing',
    'Practical recommendations',
],
  },
  {
    slug: 'copywriting-content',
    title: 'Copywriting & Content',
    icon: 'figma',
    short: 'Words that sound like you — and work for your audience.',
    description:
      'Clear, purposeful copy for websites, landing pages, and key content. We work from your voice and your goals to write content that communicates without clutter.',
    features: [
      'Website copy',
      'Landing page copy',
      'Brand voice development',
      'Content editing & refinement',
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
      'We dig into your goals, your audience, and what success actually looks like — before a single line of code is written.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We turn strategy into something you can see and react to — layouts, visuals, and structure you can review and shape with us.',
  },
  {
    number: '03',
    title: 'Develop',
    description:
      'We build fast, accessible, and search-friendly sites — with regular progress check-ins so you\'re never left wondering where things stand.',
  },
  {
    number: '04',
    title: 'Launch',
    description:
      'We test, migrate, and launch your project — then stay available to address anything that comes up after it goes live.',
  },
];
