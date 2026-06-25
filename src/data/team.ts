// Placeholder team data — replace names, roles, bios, and photo paths.
// Drop photos into /public/team/ and set `photo` to e.g. '/team/jane-doe.jpg'.
export type Member = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  linkedin?: string;
};

export const team: Member[] = [
  {
    name: 'Jisoo Han',
    role: 'Managing Partner',
    bio: 'Two decades investing across consumer internet and AI. Previously led platform product at a global tech company before turning to early-stage investing.',
  },
  {
    name: 'Daniel Park',
    role: 'General Partner',
    bio: 'Focuses on infrastructure, developer tools, and applied AI. Former founder of a venture-backed SaaS company acquired in 2019.',
  },
  {
    name: 'Mina Cho',
    role: 'Partner',
    bio: 'Invests in fintech and vertical software across APAC. Began her career in growth equity and operated as a COO at two startups.',
  },
  {
    name: 'Alex Rivera',
    role: 'Principal',
    bio: 'Sources and leads seed investments in frontier hardware and robotics. PhD in electrical engineering; holds several patents.',
  },
  {
    name: 'Yuna Seo',
    role: 'Principal',
    bio: 'Partners with founders on go-to-market and the first 50 hires. Previously built revenue teams at two hypergrowth startups.',
  },
  {
    name: 'Tomás Oliveira',
    role: 'Platform & Talent',
    bio: 'Leads portfolio support across recruiting, brand, and community. Connects founders with the operators who have done it before.',
  },
];
