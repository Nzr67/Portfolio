import {Mail, User, Zap, } from 'lucide-react';

import {
  client_1,
  client_2,
  client_3,
  client_4,
  databaseIcon,
  discord,
  dribble,
  dribbleIcon,
  dribbleLight,
  facebook,
  figmaIcon,
  fiverrIcon,
  framerIcon,
  githubIcon,
  graphicDesignIcon,
  graphicDesignIconLight,
  instagramIcon,
  instagramIconLight,
  linkedInIcon,
  linkedInIconLight,
  nextJsIcon,
  pinterest,
  pixelworksLogo,
  pixelworksLogoLight,
  project_1,
  project_2,
  project_3,
  project_4,
  pythonIcon,
  seoOptIcon,
  seoOptIconLight,
  slackIcon,
  snapchat,
  spotify,
  tailwindIcon,
  typeScriptIcon,
  viteIcon,
  vortexLogo,
  vortexLogoLight,
  webDesignIcon,
  webDesignIconLight,
  webDevIcon,
  webDevIconLight,
  webflowIcon,
  XLogo,
  XLogoLight,
} from '@/app/assets/assets';
import type {
  counterListsType,
  FAQ,
  FollowerData,
  myExperienceTypes,
  myServicesPlansTypes,
  myServicesTypes,
  myShowCasesTypes,
  myStackTypes,
  socialBrandsTypes,
  testimonialsTypes,
} from '@/types';
import type { socialListsTypes } from '@/types';
import type { pagesListsType } from '@/types';

export const pagesLists: pagesListsType[] = [
  {
    id: 1,
    title: 'Home',
    href: '/',
    icon: <User />,
  },
  {
    id: 2,
    title: 'Services',
    href: '/services',
    icon: <Zap />,
  },
  {
    id: 3,
    title: 'Contact',
    href: '/contact',
    icon: <Mail />,
  },
];

export const socialLists: socialListsTypes[] = [
  {
    id: 1,
    title: 'Instagram',
    icon: instagramIcon,
    link: 'https://www.instagram.com/a_nazar31?igsh=MXdzNXp1d2V1NW5rdg%3D%3D',
  },
  {
    id: 2,
    title: 'Github',
    icon: githubIcon,
    link: 'https://github.com/Nzr67',
  },
  {
    id: 3,
    title: 'Fiverr',
    icon: fiverrIcon,
    link: 'https://www.fiverr.com/nazar_abd',
  },
];

export const socialBrands: socialBrandsTypes[] = [
  {
    id: 1,
    name: 'Discord',
    link: 'https://discord.com',
    icon: discord,
    lightIcon: discord,
  },
  {
    id: 2,
    name: 'Dribbble',
    link: 'https://dribbble.com',
    icon: dribble,
    lightIcon: dribble,
  },
  {
    id: 3,
    name: 'Facebook',
    link: 'https://facebook.com',
    icon: facebook,
    lightIcon: facebook,
  },
  {
    id: 4,
    name: 'Pinterest',
    link: 'https://pinterest.com',
    icon: pinterest,
    lightIcon: pinterest,
  },
  {
    id: 5,
    name: 'SnapChat',
    link: 'https://snapchat.com',
    icon: snapchat,
    lightIcon: snapchat,
  },
  {
    id: 6,
    name: 'Spotify',
    link: 'https://open.spotify.com',
    icon: spotify,
    lightIcon: spotify,
  },
];

export const counterLists: counterListsType[] = [
  {
    id: 1,
    title: 'Compromises on Speed',
    value: 0,
  },
  {
    id: 2,
    title: 'Years in Tech & Operations',
    value: 2,
  },
  {
    id: 3,
    title: 'Clean Code Architecture',
    value: '100%',
  },
  {
    id: 4,
    title: 'Core Creative Services',
    value: 4,
  },
];

export const myExperience: myExperienceTypes[] = [
  {
    id: 1,
    year: 'May 2024 - Present',
    title: 'Front Desk & Operations Officer',
    company: 'Cerridwen Spiritual Healing Academy',
    label: 'Tech Firm',
    description:
      'Managed front-of-house operations, client relations, and administrative systems. I optimized internal communication workflows to eliminate bottlenecks, developing strong user-empathy and problem-solving skills that now guide how I design user-centric software interfaces.',
    link: 'vortex.com',
    logo: vortexLogo,
    logoLight: vortexLogoLight,
  },
  {
    id: 2,
    year: 'Jan 2026 - Present',
    title: 'Information Technology Student',
    company: 'Institute of Technology, University of Moratuwa',
    label: 'Education',
    description:
      'Applying rigorous IT coursework in data structures and database fundamentals to hands-on development. I build responsive frontend interfaces using React and Vite with a focus on efficient state management, while leveraging Python to write automation scripts and handle backend data logic.',
    link: 'pixelworks.io',
    logo: pixelworksLogo,
    logoLight: pixelworksLogoLight,
  },
  {
    id: 3,
    year: 'Early 2026 - Present',
    title: 'Freelance Web Developer',
    company: 'Independent / Freelance',
    label: 'Tech Start-up',
    description:
      'Developing custom, high-performance web applications and digital solutions for small businesses and independent professionals. I manage the full project lifecycle from initial requirements gathering and UI design to building scalable frontend architectures with React/Next.js and handling production deployment.',
    link: 'fiverr.com',
    logo: fiverrIcon,
    logoLight: fiverrIcon,
  },
];

export const myStack: myStackTypes[] = [
  {
    id: 1,
    category: 'Frontend Development',
    title: 'React & Next.js',
    description: 'Building dynamic, responsive user interfaces with modern frontend frameworks and libraries',
    logo: nextJsIcon,
    lightLogo: nextJsIcon,
    link: 'https://www.nextjs.org',
  },
  {
    id: 2,
    category: 'Frontend Development',
    title: 'Figma',
    description: 'Designing intuitive and visually appealing user interfaces with collaborative design tools',
    logo: figmaIcon,
    lightLogo: figmaIcon,
    link: 'https://www.figma.com',
  },
  {
    id: 3,
    category: 'Frontend Development',
    title: 'JavaScript & TypeScript',
    description: 'Writing clean, efficient, and maintainable code with strong typing and modern JavaScript features',
    logo: typeScriptIcon,
    lightLogo: typeScriptIcon,
    link: 'https://www.typescriptlang.org',
  },
  {
    id: 4,
    category: 'Frontend Development',
    title: 'SCSS & Tailwind CSS',
    description: 'Creating visually appealing and responsive designs with modern CSS frameworks and pre-processors',
    logo: tailwindIcon,
    lightLogo: tailwindIcon,
    link: 'https://www.tailwindcss.com',
  },
  {
    id: 5,
    category: 'Frontend Development',
    title: 'Vite',
    description: 'Utilizing ultra-fast development server tools for seamless frontend bundling and optimization',
    logo: viteIcon,
    lightLogo: viteIcon,
    link: 'https://www.vitejs.dev',
  },
  {
    id: 6,
    category: 'Backend Development',
    title: 'Python',
    description: 'Writing efficient and scalable code for backend development and automation',
    logo: pythonIcon,
    lightLogo: pythonIcon,
    link: 'https://www.python.org',
  },
  {
    id: 7,
    category: 'Backend Development',
    title: 'Databases & Systems',
    description: 'Learning and implementing structural database principles, schema designs, and data integrations.',
    logo: databaseIcon,
    lightLogo: databaseIcon,
    link: 'https://www.postgresql.org',
  },
  {
    id: 8,
    category: 'Tools',
    title: 'Git & GitHub',
    description: 'Version control and collaboration using Git and GitHub for efficient code management',
    logo: githubIcon,
    lightLogo: githubIcon,
    link: 'https://www.github.com',
  }
];

export const myServices: myServicesTypes[] = [
  {
    id: 1,
    title: 'UI/UX Design',
    description: 'Crafting visually captivating and user-friendly websites for online success.',
    icon: webDesignIcon,
    lightIcon: webDesignIconLight,
    link: '/services',
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Bringing ideas to life with robust and scalable web solutions.',
    icon: webDevIcon,
    lightIcon: webDevIconLight,
    link: '/services',
  },
  {
    id: 3,
    title: 'Graphic Design',
    description: 'Creating visually stunning designs that captivate and engage audiences.',
    icon: graphicDesignIcon,
    lightIcon: graphicDesignIconLight,
    link: '/services',
  },
];

export const myShowCases: myShowCasesTypes[] = [
  {
    id: 1,
    title: 'Devcraft',
    description: 'Showcasing expertise, passion, and innovation in the realm of development.',
    link: 'vortex.com',
    type: 'Portfolio',
    theme: 'Dark',
    pages: 4,
    image: project_1,
  },
  {
    id: 2,
    title: 'Zenith Gym',
    description: 'Empowering fitness enthusiasts with an immersive online experience.',
    link: 'zenith.com',
    type: 'Fitness',
    theme: 'Light',
    pages: 5,
    image: project_2,
  },
  {
    id: 3,
    title: 'Novus Agency',
    description: 'Transforming ideas into digital realities with creativity and expertise.',
    link: 'novus.com',
    type: 'Business',
    theme: 'Dark',
    pages: 6,
    image: project_3,
  },
  {
    id: 4,
    title: 'Apex Agency',
    description:
      'Setting the pinnacle of digital excellence with cutting-edge solutions and creativity.',
    link: 'apex.com',
    type: 'Business',
    theme: 'Light',
    pages: 6,
    image: project_4,
  },
];

export const testimonials: testimonialsTypes[] = [
  {
    id: 1,
    name: 'Sarah Thompson',
    description:
      'I am thrilled with the website for my business. His ability to translate my vision into a visually stunning...',
    location: 'New York City, USA.',
    avatar: client_1,
  },
  {
    id: 2,
    name: 'John Anderson',
    description:
      'Working with Pragadesh was a game-changer for my online business. His web design skills are exceptional.',
    location: 'Sydney, Australia.',
    avatar: client_2,
  },
  {
    id: 3,
    name: 'Mark Davis',
    description:
      'Pragadesh’s creativity and technical expertise transformed our website into a visually stunning platform.',
    location: 'London, UK.',
    avatar: client_3,
  },
  {
    id: 4,
    name: 'Laura Adams',
    description:
      'Pragadesh is a artist when it comes to website. He transformed my outdated website into a modern masterpiece.',
    location: 'Madrid, Spain.',
    avatar: client_4,
  },
];

export const myServicesPlans: myServicesPlansTypes[] = [
  {
    id: 1,
    service: 'Web Design',
    description: [
      'UI/UX Wireframing',
      'Mobile-Responsive Layouts',
      'Typography & Color Systems',
    ],
    icon: webDesignIcon,
    lightIcon: webDesignIconLight,
  },
  {
    id: 2,
    service: 'Web Development',
    description: [
      'React & Next.js Framework Architecture',
      'Tailwind CSS / SCSS Engineering',
      'Production Deployment to Vercel',
    ],
    icon: webDevIcon,
    lightIcon: webDevIconLight,
  },
  {
    id: 3,
    service: 'Graphic Design',
    description: [
      'Social Media Brand Kits',
      'Marketing Graphics & Digital Banners',
      'Cohesive Visual Assets',
    ],
    icon: graphicDesignIcon,
    lightIcon: graphicDesignIconLight,
  },
  {
    id:4,
    service: 'SEO Optimization',
    description: [
      'Keyword Research & Analysis',
      'On-Page SEO Optimization',
      'Performance Monitoring & Reporting',
    ],
    icon: seoOptIcon,
    lightIcon: seoOptIconLight,
  }
];

export const faqData: FAQ[] = [
  {
    question: 'Can you work with clients remotely?',
    answer:
      'Yes, absolutely. I work with clients fully remotely. We can handle all communication, asset sharing, and design feedback through clear channels like email, WhatsApp, or brief virtual check-ins. This allows for a smooth, flexible workflow regardless of where you are located.',
  },
  {
    question: 'Will my website be mobile-friendly?',
    answer:
      "Yes, 100%. Every single website I design and build is mobile-first and fully responsive. It will look stunning and function perfectly across all devices, including smartphones, tablets, laptops, and large desktop screens",
  },
  {
    question: 'How long does it typically take to complete a project?',
    answer:
      "It generally takes between 2 to 4 weeks to deliver a complete, high-performance website. This timeline depends heavily on the project's complexity, the number of pages required, and how quickly you can provide text content, high-quality images, and design feedback.",
  },
  {
    question: 'Can you integrate third-party tools into my website?',
    answer:
      'Yes. I can seamlessly embed the specific third-party widgets and platforms your business depends on. This includes setting up automated appointment scheduling calendars (like Calendly or Acuity), linking your social media feeds, embedding interactive maps, or integrating contact forms.',
  },
  {
    question: 'Do you offer website maintenance?',
    answer:
      'Yes, I handle live deployment, custom domain routing, and technical optimization to ensure your site launches perfectly. Once the site is live, I can provide ongoing maintenance, software optimization updates, or content revisions depending on your needs.',
  },
  {
    question: 'How do you handle website revisions?',
    answer:
      'I value a collaborative design process. Before diving into code, I share design wireframes and structural mockups to ensure we align perfectly on the look and feel. Once development begins, I offer a set number of structured revision rounds at major milestones to fine-tune copy, imagery, and layout details.',
  },
  {
    question: 'What are your payment terms?',
    answer:
      'For most freelance projects, I follow a standard 50/50 payment split. A 50% upfront deposit is required to secure the project timeline and initiate the initial wireframes and asset collection. The remaining 50% balance is settled once the website is fully built, approved, and ready to be launched live on your custom domain.',
  },
];

export const followerData: FollowerData[] = [
  {
    platform: 'X',
    url: 'https://twitter.com/@abdul_nzr',
    icon: XLogo,
    lightIcon: XLogoLight,
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/a_nazar31?igsh=MXdzNXp1d2V1NW5rdg%3D%3D',
    icon: instagramIcon,
    lightIcon: instagramIconLight,
  },
  {
    platform: 'LinkedIn',
    url: 'www.linkedin.com/in/a-abdul-nazar',
    icon: linkedInIcon,
    lightIcon: linkedInIconLight,
  },
  {
    platform: 'Dribbble',
    url: 'https://dribbble.com/Nzr67/about?utm_source=Clipboard_%22clipboard_about%22&utm_campaign=%22Nzr67%22&utm_content=%22About%20Nzr67%22&utm_medium=Social_Share',
    icon: dribbleIcon,
    lightIcon: dribbleLight,
  },
];
