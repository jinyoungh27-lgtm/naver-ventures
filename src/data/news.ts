// Newsroom items — coverage, investment announcements, recognition, and events.
// Only publicly released items belong here. Items still in review, unreceived
// from a producer, or pre-closing/confidential must stay out until they are live.
//
// Sorted newest-first and grouped by year at render time, so order here does
// not matter. `category` is not shown on the page today; it is kept because it
// mirrors the newsroom tracker and makes filter tabs a one-line change later.
export type Category = 'Investments' | 'In the News' | 'Recognition' | 'Events';

export type NewsItem = {
  title: string;
  outlet: string;
  date: string; // 'YYYY-MM-DD'
  url: string;
  category: Category;
};

export const news: NewsItem[] = [
  {
    title: 'NaverVentures × TheVentures — Tech × Consumer Night',
    outlet: 'NAVER Ventures',
    date: '2026-08-04',
    url: 'https://www.linkedin.com/posts/naver-ventures_naverventures-theventures-techxconsumer-activity-7491343392623423488-YkeO',
    category: 'Events',
  },
  {
    title: 'We raised $100M to build Video Superintelligence',
    outlet: 'TwelveLabs',
    date: '2026-07-01',
    url: 'https://www.twelvelabs.io/blog/twelvelabs-series-b-100m',
    category: 'Investments',
  },
  {
    title: 'Yong-Jung Park named to the GCV Powerlist 2026',
    outlet: 'Global Corporate Venturing',
    date: '2026-06-24',
    url: 'https://globalventuring.com/intelligence/2026-gcv-powerlist',
    category: 'Recognition',
  },
  {
    title: '“美 진출 K스타트업에 \'길잡이 VC\' 될 것”',
    outlet: '매일경제',
    date: '2026-06-24',
    url: 'https://n.news.naver.com/mnews/article/009/0005698363?sid=105',
    category: 'In the News',
  },
  {
    title: 'Enhans Secures Investment from Naver Ventures to Expand Global Reach',
    outlet: 'Seoul Economic Daily',
    date: '2026-04-20',
    url: 'https://en.sedaily.com/technology/2026/04/20/enhans-secures-investment-from-naver-ventures-to-expand',
    category: 'Investments',
  },
  {
    title:
      "Where's the Money: why Korea's US$2 trillion private wealth is flowing from Seoul to Silicon Valley",
    outlet: 'Tatler Asia',
    date: '2025-12-08',
    url: 'https://www.tatlerasia.com/power-purpose/wealth/wheres-the-money-namsun-kim-naver',
    category: 'In the News',
  },
  {
    title: "Artificial intelligence is a long-term secular trend: Naver's president of investments",
    outlet: 'CNBC',
    date: '2025-10-03',
    url: 'https://www.cnbc.com/video/2025/10/03/artificial-intelligence-is-a-long-term-secular-trend-naver.html',
    category: 'In the News',
  },
  {
    title: 'AI innovation and global expansion fuel next phase of growth',
    outlet: 'CNA',
    date: '2025-10-03',
    url: 'https://www.channelnewsasia.com/watch/ai-innovation-and-global-expansion-fuel-next-phase-growth-5383181',
    category: 'In the News',
  },
  {
    title: "Naver's Kim On Tie-Up Talks With Dunamu",
    outlet: 'Bloomberg',
    date: '2025-10-02',
    url: 'https://www.bloomberg.com/news/videos/2025-10-02/naver-s-kim-on-tie-up-talks-with-dunamu',
    category: 'In the News',
  },
];
