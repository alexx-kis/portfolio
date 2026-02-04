import { basePath } from '@/constants/const';
import { SkillType } from '@/types/types';

export const SKILLS_CONCISE: SkillType[] = [
  {
    skillsGroupTitle: 'Technologies:',
    skillsItems: [
      {
        skillName: 'React',
        skillIcon: `${basePath}/img/icons/react-icon.svg`,
      },
      {
        skillName: 'TypeScript',
        skillIcon: `${basePath}/img/icons/ts-icon.svg`,
      },
      {
        skillName: 'SCSS Modules',
        skillIcon: `${basePath}/img/icons/scss-icon.svg`,
      },
      {
        skillName: 'Next.js',
        skillIcon: `${basePath}/img/icons/next-icon.svg`,
      },
    ],
  },
  {
    skillsGroupTitle: 'Libraries / Tools:',
    skillsItems: [
      {
        skillName: 'Redux Toolkit',
        skillIcon: `${basePath}/img/icons/rtk-icon.svg`,
      },
      {
        skillName: 'Git',
        skillIcon: `${basePath}/img/icons/git-icon.svg`,
      },
      {
        skillName: 'Figma',
        skillIcon: `${basePath}/img/icons/figma-icon.svg`,
      },
      {
        skillName: 'Adobe Photoshop',
        skillIcon: `${basePath}/img/icons/photoshop-icon.svg`,
      },
      {
        skillName: 'Adobe Illustrator',
        skillIcon: `${basePath}/img/icons/illustrator-icon.svg`,
      },
    ],
  },
  {
    skillsGroupTitle: 'Competencies:',
    skillsItems: [
      {
        skillName: 'Responsive Design',
        skillIcon: `${basePath}/img/icons/adaptive-icon.svg`,
      },
      {
        skillName: 'Semantic Markup',
        skillIcon: `${basePath}/img/icons/semantic-icon.svg`,
      },
      {
        skillName: 'Performance Optimization',
        skillIcon: `${basePath}/img/icons/optimization-icon.svg`,
      },
    ],
  },
  {
    skillsGroupTitle: 'Languages:',
    skillsItems: [
      {
        skillName: 'English (B2)',
        skillIcon: `${basePath}/img/icons/eng.svg`,
      },
      {
        skillName: 'Russian (Native)',
        skillIcon: `${basePath}/img/icons/rus.svg`,
      },
      {
        skillName: 'German (A2)',
        skillIcon: `${basePath}/img/icons/ger.svg`,
      },
    ],
  },
];

export const SKILLS_EXPANDED: SkillType[] = [
  {
    skillsGroupTitle: 'Technologies:',
    skillsItems: [
      {
        skillName: 'React',
        skillIcon: `${basePath}/img/icons/react-icon.svg`,
        skillDescription:
          'React is my main tool for building complex user interfaces with reusable components and clear separation of concerns.',
      },
      {
        skillName: 'TypeScript',
        skillIcon: `${basePath}/img/icons/ts-icon.svg`,
        skillDescription:
          'I use TypeScript as my primary language to build scalable and maintainable applications, focusing on type safety and predictable architecture.',
      },
      {
        skillName: 'SCSS Modules',
        skillIcon: `${basePath}/img/icons/scss-icon.svg`,
        skillDescription:
          'I use SCSS Modules for component-based styling, keeping styles isolated, predictable, and easy to maintain.',
      },
      {
        skillName: 'Redux Toolkit',
        skillIcon: `${basePath}/img/icons/rtk-icon.svg`,
        skillDescription:
          'I actively use Redux Toolkit for global state management, including modal systems, async logic, and complex user flows.',
      },
      {
        skillName: 'Next.js',
        skillIcon: `${basePath}/img/icons/next-icon.svg`,
        skillDescription:
          'I build multi-page applications with Next.js using SSR and dynamic routing to improve performance, SEO, and overall user experience.',
      },
    ],
  },

  {
    skillsGroupTitle: 'UI & Animation:',
    skillsItems: [
      {
        skillName: 'GSAP',
        skillIcon: `${basePath}/img/icons/gsap-icon.svg`,
        skillDescription:
          'I use GSAP and ScrollTrigger to create smooth, performant animations that enhance UX without sacrificing performance.',
      },
      {
        skillName: 'Three.js',
        skillIcon: `${basePath}/img/icons/threejs-icon.svg`,
        skillDescription:
          'I use Three.js to build interactive 3D experiences and visual effects, including particle-based animations.',
      },
      {
        skillName: 'Splide.js',
        skillIcon: `${basePath}/img/icons/splide-icon.svg`,
        skillDescription: 'Splide.js allows me to create responsive, customizable sliders for showcasing content in an engaging way.'
      },
      {
        skillName: 'Swiper',
        skillIcon: `${basePath}/img/icons/swiper-icon.svg`,
        skillDescription: 'I implement Swiper to create touch-friendly sliders with a sleek user experience on both mobile and desktop.'
      },
      {
        skillName: 'Masonry',
        skillIcon: `${basePath}/img/icons/masonry-icon.svg`,
        skillDescription: 'Masonry is used to create grid layouts with dynamic item placement, making content presentation look more organic and responsive.'
      },
    ],
  },

  {
    skillsGroupTitle: 'Build Tools & Code Quality:',
    skillsItems: [
      {
        skillName: 'Vite',
        skillIcon: `${basePath}/img/icons/vite-icon.svg`,
        skillDescription:
          'Vite is my preferred build tool for React projects, providing fast development startup and efficient production builds.',
      },
      {
        skillName: 'ESLint',
        skillIcon: `${basePath}/img/icons/eslint-icon.svg`,
        skillDescription:
          'I use ESLint to maintain consistent code style and catch potential issues early during development.',
      },
    ],
  },

  {
    skillsGroupTitle: 'Version Control:',
    skillsItems: [
      {
        skillName: 'Git',
        skillIcon: `${basePath}/img/icons/git-icon.svg`,
        skillDescription:
          'I use Git for version control, confidently working with branches, commits, and collaborative workflows.',
      },
      {
        skillName: 'GitHub',
        skillIcon: `${basePath}/img/icons/github-icon.svg`,
        skillDescription:
          'I use GitHub to manage repositories, review changes, and collaborate within a team environment.',
      },
    ],
  },

  {
    skillsGroupTitle: 'Design & Collaboration:',
    skillsItems: [
      {
        skillName: 'Figma',
        skillIcon: `${basePath}/img/icons/figma-icon.svg`,
        skillDescription:
          'I work with Figma layouts daily, accurately translating designs into production-ready interfaces.',
      },
      {
        skillName: 'Adobe Photoshop',
        skillIcon: `${basePath}/img/icons/photoshop-icon.svg`,
        skillDescription:
          'I use Photoshop for preparing and optimizing graphic assets for web projects.',
      },
      {
        skillName: 'Adobe Illustrator',
        skillIcon: `${basePath}/img/icons/illustrator-icon.svg`,
        skillDescription:
          'I use Illustrator to work with vector graphics, icons, and logos when needed.',
      },
    ],
  },

  {
    skillsGroupTitle: 'Core Competencies:',
    skillsItems: [
      {
        skillName: 'Responsive Design',
        skillIcon: `${basePath}/img/icons/adaptive-icon.svg`,
        skillDescription:
          'I build interfaces that adapt smoothly to different screen sizes and devices.',
      },
      {
        skillName: 'API Integration',
        skillIcon: `${basePath}/img/icons/api-icon.svg`,
        skillDescription:
          'I integrate frontend applications with REST APIs, handling async data, loading states, and errors.',
      },
      {
        skillName: 'Performance Optimization',
        skillIcon: `${basePath}/img/icons/optimization-icon.svg`,
        skillDescription:
          'I pay attention to performance, optimizing rendering, animations, and data loading.',
      },
    ],
  },

  {
    skillsGroupTitle: 'Languages:',
    skillsItems: [
      {
        skillName: 'English (B2)',
        skillIcon: `${basePath}/img/icons/eng.svg`,
        skillDescription:
          'I can confidently read documentation, communicate with a team, and discuss technical topics in English.',
      },
      {
        skillName: 'Russian (Native)',
        skillIcon: `${basePath}/img/icons/rus.svg`,
        skillDescription:
          'Russian is my native language.',
      },
      {
        skillName: 'German (A2)',
        skillIcon: `${basePath}/img/icons/ger.svg`,
        skillDescription:
          'I have basic knowledge of German and continue improving it.',
      },
    ],
  },
];