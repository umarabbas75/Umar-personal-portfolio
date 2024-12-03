import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from `/containers/About.tsx`
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'ReactJs',
      'NextJs',
      'ReactNative',
      'TailwindCSS - ShadCN - MUI - AntD - Chakra UI ',
      'Typescript',
      'Redux-Jotai-Zustand',
      'ExpressJs',
      'NestJs',
      'Prisma',
      'GSAP',
      'Framer Motion',
    ],
  },
  img: '/umar-pic.png',
};
