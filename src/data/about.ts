export const story = {
  // Set to '' to render the gradient placeholder, or a path under /public (e.g. '/images/about/story.jpg')
  image: '/images/about/story.png',
  imageAlt: 'The Lambda team in the early days',
};

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: '150+', label: 'Projects delivered' },
  { value: '50+', label: 'Happy clients' },
  { value: '8+', label: 'Years in business' },
  { value: '15+', label: 'Industry awards' },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    x?: string;
    linkedin?: string;
    dribbble?: string;
    github?: string;
  };
};

export const team: TeamMember[] = [
  {
    name: 'Christopher J. Earl',
    role: 'Founder & Software Engineer',
    bio: 'Full-stack engineer who founded Indigo Foundry after a career pivot proved the fastest way forward is sometimes building your own door. Now I build them for other people — clean code, clear communication, and no disappearing after launch.',
    image: '/images/team/chris.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/chris-j-earl',
      github: 'https://github.com/CJEarl-dev',
    },
  },
];

export type ValueIcon = 'sparkles' | 'eye' | 'handshake' | 'bar-chart';

export type Value = {
  title: string;
  icon: ValueIcon;
  description: string;
};

export const values: Value[] = [
  {
    title: 'Craft over hype',
    icon: 'sparkles',
    description:
      'We care more about building work we\u2019re proud of than chasing every new framework or trend.',
  },
  {
    title: 'Clear over clever',
    icon: 'bar-chart',
    description:
      'Clever design fails silently. Clear design \u2014 in words, layout, and code \u2014 keeps everyone on the same page.',
  },
  {
    title: 'Long-term partners',
    icon: 'handshake',
    description:
      'Most of our clients stay well beyond launch. We plan for the site after launch day \u2014 because that\u2019s when the real work begins.',
  },
  {
    title: 'Built for everyone',
    icon: 'eye',
    description:
      'We build for everyone, not just the majority. Accessibility isn\u2019t a compliance checkbox \u2014 it\u2019s baked into every decision from the start.',
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'We went from having no online presence to having a site that immediately conveys credibility and intentionality. The navigation is clean and user-friendly, and the site is actually converting inquiries — we\'ve had outreach from partner practices and school districts who specifically mentioned being impressed by the site.',
    name: 'Alicia',
    role: 'Founder, Speech For Yourself LLC',
    image: '',
  },
  {
    quote:
      'What I communicated was implemented without a hiccup or extra clarification. It\'s more targeted to my audience in a relatable, understandable way — less wordy and more digestible. The blog we added has especially been exciting because it gives us a way to reach our audience even more.',
    name: 'Carmen',
    role: 'Founder & Co-Owner, Oceanview Therapy',
    image: '',
  },
  {
    quote:
      'Chris was responsive to feedback, understood our clinical mission — not just the technical side — and built what we envisioned without unnecessary back-and-forth. He asked the right questions and made thoughtful recommendations. The process felt collaborative rather than transactional.',
    name: 'Alicia',
    role: 'Co-Owner, Oceanview Therapy',
    image: '',
  },
];

export type Logo = { name: string; src: string };

export const logos: Logo[] = [
  { name: 'Northwind', src: '/images/logos/northwind.svg' },
  { name: 'Mercato', src: '/images/logos/mercato.svg' },
  { name: 'Helio', src: '/images/logos/helio.svg' },
  { name: 'Orbit', src: '/images/logos/orbit.svg' },
  { name: 'Lumen', src: '/images/logos/lumen.svg' },
  { name: 'Field & Fern', src: '/images/logos/field-fern.svg' },
];
