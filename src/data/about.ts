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
    name: 'Alex Rivera',
    role: 'Founder & Creative Director',
    bio: 'Obsessed with clean typography, sharp brand systems, and the occasional typography rabbit hole.',
    image: '/images/team/alex-rivera.png',
    social: {
      x: 'https://x.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Jordan Lee',
    role: 'Lead Engineer',
    bio: 'Turns design files into fast, accessible web experiences — with a soft spot for Astro and edge rendering.',
    image: '/images/team/jordan-lee.png',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Sam Chen',
    role: 'Strategy & SEO',
    bio: 'Data-driven marketer who reads server logs for fun. Has probably audited your competitors already.',
    image: '/images/team/sam-chen.png',
    social: {
      x: 'https://x.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Morgan Diaz',
    role: 'Product Designer',
    bio: 'Prototype-first designer who believes the best interface is the one you don\u2019t notice.',
    image: '/images/team/morgan-diaz.png',
    social: {
      dribbble: 'https://dribbble.com',
      linkedin: 'https://linkedin.com',
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
      'We care more about shipping work we\u2019re proud of than chasing every new framework or trend that flies by.',
  },
  {
    title: 'Clear over clever',
    icon: 'eye',
    description:
      'Clever design fails silently. Clear design — in words, layout, and code — keeps teams and users aligned.',
  },
  {
    title: 'Long-term partners',
    icon: 'handshake',
    description:
      'Most of our clients stay with us for years. We plan for the site after launch, not just for launch day.',
  },
  {
    title: 'Measure everything',
    icon: 'bar-chart',
    description:
      'Opinions are cheap; data is honest. We instrument every project so decisions are grounded in reality.',
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
      'Lambda rebuilt our marketing site in six weeks and doubled our qualified demo requests within the first quarter. Easily the best agency we\u2019ve worked with.',
    name: 'Priya Shah',
    role: 'VP of Marketing, Northwind SaaS',
    image: '/images/team/testimonial-1.jpg',
  },
  {
    quote:
      'The team treated our brand like it was their own. The system they delivered has held up across three product launches without a single redesign.',
    name: 'Daniel Osei',
    role: 'Founder, Mercato Foods',
    image: '/images/team/testimonial-2.jpg',
  },
  {
    quote:
      'From the discovery workshop to launch day, communication was clear and the delivery was on time. Our Lighthouse scores went from the 60s to consistent 98s.',
    name: 'Laura Benítez',
    role: 'Head of Digital, Helio Energy',
    image: '/images/team/testimonial-3.jpg',
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
