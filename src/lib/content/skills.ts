import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'Frontend  ReactJs web development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building scalable and responsive web applications using React.js, Next.js, and TypeScript with tools like TailwindCSS and Material UI.',
        'Animations & Interactivity: Enhancing user experiences with smooth, engaging animations using GSAP.',
        'Enhancing performance through code splitting, lazy loading, and optimising rendering in React applications.',
      ],

     
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'jest', icon: 'vscode-icons:file-type-jest' },
        { name: 'React query', icon: 'logos:react-query' },

      ],
    },
    {
      id: getId(),
      title: 'React Native development',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Cross-Platform Applications: Developing high-performance mobile applications for both iOS and Android using React Native.',
        'Native Integrations: Integrating platform-specific features and third-party libraries to enhance mobile app functionality.',
        'Responsive UI: Building dynamic and adaptive user interfaces that ensure seamless experiences across various devices and screen sizes.',
      ],
      softwareSkills: [
        { name: 'React native', icon: 'logos:react' },
        { name: 'React query', icon: 'logos:react-query' },
      ],
    },
    {
      id: getId(),
      title: 'Backend development',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'API Development: Designing and integrating RESTful APIs to enable seamless communication between the frontend and backend',
        'Database Management:  Implementing and managing databases using Prisma with PostgreSQL or MongoDB for scalable and efficient data storage.',
        'Performance Optimisation: Enhancing backend performance through caching strategies, optimised queries, and load balancing.',
      ],
      softwareSkills: [
        { name: 'Node js', icon: 'logos:nodejs' },
        { name: 'Mongodb', icon: 'logos:mongodb' },
        { name: 'Nest js', icon: 'logos:nestjs' },
        { name: 'Postgres', icon: 'logos:postgresql' },
        { name: 'Prisma', icon: 'logos:prisma' },
      ],
    },
  ],
};
