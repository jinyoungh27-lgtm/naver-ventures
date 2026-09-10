// Portfolio companies NAVER Ventures backs.
// `logo` points to a file in /public/logos/. `description` is a short one-liner.
export type Company = {
  name: string;
  description: string;
  logo: string;
  url: string;
};

export const portfolio: Company[] = [
  {
    name: 'Twelve Labs',
    description: 'Video understanding foundation models',
    logo: '/logos/twelvelabs.png',
    url: 'https://www.twelvelabs.io',
  },
  {
    name: 'Anthropic',
    description: 'Frontier AI research and the Claude models',
    logo: '/logos/anthropic.png',
    url: 'https://www.anthropic.com',
  },
  {
    name: 'ElevenLabs',
    description: 'Lifelike AI voice and audio generation',
    logo: '/logos/elevenlabs.png',
    url: 'https://elevenlabs.io',
  },
  {
    name: 'Baobab Studios',
    description: 'Emmy-winning interactive animation studio',
    logo: '/logos/baobab.png',
    url: 'https://www.baobabstudios.com',
  },
  {
    name: 'Rain',
    description: 'Stablecoin-powered card issuing infrastructure',
    logo: '/logos/rain.png',
    url: 'https://www.rain.xyz',
  },
  {
    name: 'Enhans',
    description: 'Ontology-driven agentic AI for enterprises',
    logo: '/logos/enhans.png',
    url: 'https://www.enhans.ai',
  },
  {
    name: 'Vast Data',
    description: 'The data platform for the age of AI',
    logo: '/logos/vastdata.png',
    url: 'https://www.vastdata.com',
  },
  {
    name: 'Netomi',
    description: 'AI agents for customer experience',
    logo: '/logos/netomi.png',
    url: 'https://www.netomi.com',
  },
  {
    name: 'Suno',
    description: 'Generative AI for making music',
    logo: '/logos/suno.png',
    url: 'https://suno.com',
  },
  {
    name: 'Positron AI',
    description: 'Chips for AI acceleration',
    logo: '/logos/positron.png',
    url: 'https://www.positron.ai',
  },
];
