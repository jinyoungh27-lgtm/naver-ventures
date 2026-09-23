// Team roster. Each card shows a headshot, name, and title, and links out to
// that person's LinkedIn. Bios are deliberately omitted for now — the card is
// the whole profile. If we add bio pages later, extend this type.
//
// Photos live in /public/team/ and are served locally — never hotlinked from
// media.licdn.com. All are 800x800 except yj-park.jpg, which is 400x400; the
// cards crop to 3:4, so a larger square is always the safer source. A member
// without a photo falls back to initials, so the page still renders cleanly.
//
// Order matters — the grid renders in the order listed here.
export type Member = {
  name: string;
  role: string;
  photo?: string;
  linkedin?: string;
};

export const team: Member[] = [
  {
    name: 'Namsun Kim',
    role: 'Managing Partner',
    photo: '/team/namsun-kim.jpg',
    linkedin: 'https://www.linkedin.com/in/namsun-kim-8a3a882',
  },
  {
    name: 'Yong Jung Park',
    role: 'General Partner',
    photo: '/team/yj-park.jpg',
    linkedin: 'https://www.linkedin.com/in/yjpark7/',
  },
  {
    name: 'Tony Kim',
    role: 'Principal Investor',
    photo: '/team/tony-kim.jpg',
    linkedin: 'https://www.linkedin.com/in/tony-s-kim-118709b2/',
  },
  {
    name: 'Konhyung Kim',
    role: 'Principal Investor',
    photo: '/team/konhyung-kim.jpg',
    linkedin: 'https://www.linkedin.com/in/konhyung-kim/',
  },
  {
    name: 'Jinyoung Hwang',
    role: 'Associate',
    photo: '/team/jinyoung-hwang.jpg',
    linkedin: 'https://www.linkedin.com/in/jinyh/',
  },
];
