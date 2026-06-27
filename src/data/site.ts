// Central site configuration — edit links, contact, and nav here.
export const site = {
  name: 'NAVER Ventures',
  tagline: 'Backing the founders building what comes next.',
  description:
    'NAVER Ventures is the corporate venture capital arm of NAVER Corp. We back the founders building AI, robotics, and fintech into the infrastructure of what comes next.',
  email: 'contact@naverventures.com',
  linkedin: 'https://www.linkedin.com/company/107492755',
};

// About / Team / Portfolio pages are temporarily hidden from the public site
// (their files are prefixed with "_" in src/pages so Astro skips the routes).
// Restore these entries — and rename the files back — to bring them online.
export const nav = [
  // { label: 'About', href: '/about' },
  // { label: 'Team', href: '/team' },
  // { label: 'Portfolio', href: '/portfolio' },
];

// Company description (NAVER Corp. positioning) — shared by the About and home pages.
export const company = {
  intro:
    'NAVER Ventures is the Corporate Venture Capital (CVC) arm of NAVER Corp., Korea’s No. 1 search engine and a leading big tech company. Established to lead NAVER’s global venture investment initiatives, we invest in Artificial Intelligence, Robotics, Fintech, and future-defining technologies.',
  partnership:
    'We build partnerships that empower visionary entrepreneurs to achieve global success while accelerating NAVER’s product roadmap through strategic synergy.',
};

// "At a glance" figures. Source: NAVER Corp. FY2025 Annual Report.
export const glance = {
  source: 'Source: NAVER Corp. FY2025 Annual Report.',
  stats: [
    { value: '$24B', label: 'Market Cap (FY2025)' },
    { value: '$8.2B', label: 'Revenue (FY2025)' },
    { value: '25M+', label: 'Daily Active Users' },
    { value: '89', label: 'Subsidiaries Worldwide' },
    { value: '200+', label: 'Services & Products' },
    { value: '20+', label: 'Global Offices' },
  ],
};

// Investment themes.
export const focusAreas = [
  {
    title: 'Artificial Intelligence',
    body: 'Foundation models, applied intelligence, and the infrastructure that brings them to production.',
  },
  {
    title: 'Robotics',
    body: 'Autonomous systems and intelligent hardware built for the physical world.',
  },
  {
    title: 'Fintech',
    body: 'The platforms and rails reshaping how money moves across borders.',
  },
  {
    title: 'Future-defining technology',
    body: 'Frontier bets — from new computing to climate — where breakthroughs compound for decades.',
  },
];
