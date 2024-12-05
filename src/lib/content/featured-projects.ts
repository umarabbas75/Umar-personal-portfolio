import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "Some of the projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Holo',
      description: 'A platform to help get best loan for your home - used in Australia',
      tasks:
        `As a Front-End Lead, I spearheaded this project, creating a scalable and maintainable architecture. we implementing a comprehensive and user-friendly loan management system.`,
      url: 'https://www.holo.com.au/',
      privateUrl : 'http://homeloans.showmysite.com.au/',
      videoDemoLink : 'https://www.loom.com/share/175ce2a196f64edfabbcc16946221abb',
      img: '/holo-ss.png',
      tags: [
        'React 18 with vite',
        'TypeScript',
        'TailwindCSS',
        'Redux Toolkit',
        'React query',
        'React hook form',
        'hooks Pattern',
      ],
    },
    {
      id: getId(),
      name: 'Happy Buyers Club (HBC)',
      description:
        'Happy Buyers Club (HBC) is a data-rich, AI-led, online home buyer’s resource.',
      tasks:
        'As a lead, I developed this project by planning, communicating with the client, gathering feedback, implementing UI & pages, added GSAP animations and integrating real-time data fetching.',
      // url: 'https://www.loom.com/share/04b3fa51862a40219c44fb87cc4c3c46',
      img: '/hbc-1.png',
      tags: ['Reactjs', 'TypeScript', 'TailwindCSS', 'ShadCN', 'React Query', 'React Hooks Pattern' ],
      videoDemoLink : 'https://www.loom.com/share/04b3fa51862a40219c44fb87cc4c3c46',
    },
    {
      id: getId(),
      name: 'iClerk',
      description: 'An AI-Powered Leads Generation Platform.',
      tasks:
        'I strategically planned project milestones, led a cross-functional team, established a design system, developed the website, and integrated Stripe payments with secure authentication.',
      url: 'https://www.iclerk.io/',
      img: '/iclerk-ss.png',
      privateUrl : 'https://v2.iclerk.io/',
      tags: ['NextJs', 'Stripe', 'Redux Toolkit', 'Material UI'],
      videoDemoLink : 'https://www.loom.com/share/86feb96e03ff47e8a8160abde1285cc9',
      codeDemoLink : 'https://www.loom.com/share/6cf144988aac4da9af5f69fc55df2eb1',
    },
    {
      id: getId(),
      name: 'Link up partner',
      description: 'Linkup Partner is a B2B user-friendly platform that creates a link for consulting firms and IT market players, therefore making it very flexible.',
      tasks: 'Implemented Role Based Management System , Integrated chat room between Consulting firms, Used Server Rendering using Nextjs, created custom hooks for business logic and used redux for global state management.',
      url: 'https://linkuppartner.com/',
      img: '/linkuppartner.png',
      tags: ['NextJs', 'Redux', 'TailwindCSS', 'React Hooks Pattern'],
    },
  ],
};

export default featuredProjectsSection;
