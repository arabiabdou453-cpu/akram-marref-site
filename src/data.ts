export interface Project {
  id: string;
  title: string;
  tags: string[];
  image: string;
  detailImage?: string;
  link: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export interface Metric {
  value: string;
  targetNumber: number;
  suffix: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface Client {
  name: string;
  year: string;
  link: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

export interface Award {
  title: string;
  count: string;
  description: string;
}

export interface BlogPost {
  category: string;
  date: string;
  title: string;
  link: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const META_ITEMS = [
  { label: 'LOCATION', value: 'LONDON, UK' },
  { label: 'FIELD', value: 'DESIGN & DEVELOPMENT' },
  { label: 'APPROACH', value: 'LESS BUT BETTER' },
  { label: 'CLIENTS', value: 'STARTUPS & CREATIVE BRANDS' }
] as const;

export const METRICS: Metric[] = [
  {
    value: '50+',
    targetNumber: 50,
    suffix: '+',
    title: 'PROJECTS',
    description: 'WEBSITES DESIGNED & BUILT FOR STARTUPS, AGENCIES, AND BRANDS WORLDWIDE.'
  },
  {
    value: '6+',
    targetNumber: 6,
    suffix: '+',
    title: 'YEARS EXPERIENCE',
    description: 'REFINING PROCESS, CLARITY, AND PERFORMANCE-DRIVEN DESIGN.'
  },
  {
    value: '100%',
    targetNumber: 100,
    suffix: '%',
    title: 'CLIENT SATISFACTION',
    description: 'LONG-TERM RELATIONSHIPS, STRONG COMMUNICATION, AND CLEAR DELIVERY.'
  },
  {
    value: '5.0',
    targetNumber: 5.0,
    suffix: '+',
    title: 'AVG RATING',
    description: 'TRUSTED BY FOUNDERS, CREATIVES & TEAMS ACROSS DIFFERENT INDUSTRIES.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'sienna',
    title: 'SIENNA',
    tags: ['WEB DESIGN', 'BRANDING', 'FRAMER DEVELOPMENT'],
    image: '/assets/asset_7.png',
    detailImage: '/assets/asset_22.jpg',
    link: '#works'
  },
  {
    id: 'glidex',
    title: 'GLIDEX',
    tags: ['WEB DESIGN', 'BRANDING', 'SEO'],
    image: '/assets/asset_8.png',
    detailImage: '/assets/asset_23.png',
    link: '#works'
  },
  {
    id: 'veon',
    title: 'VEON',
    tags: ['E-COMMERCE', 'UIUX DESIGN', 'SHOPIFY', 'FRAMER DEVELOPMENT'],
    image: '/assets/asset_9.png',
    detailImage: '/assets/asset_24.png',
    link: '#works'
  },
  {
    id: 'zayla',
    title: 'ZAYLA',
    tags: ['WEB DEVELOPMENT', 'CONTENT CREATION'],
    image: '/assets/asset_10.png',
    detailImage: '/assets/asset_25.png',
    link: '#works'
  },
  {
    id: 'destello',
    title: 'DESTELLO',
    tags: ['UIUX DESIGN', 'BRANDING', 'FRAMER DEVELOPMENT', 'AI AUTOMATION'],
    image: '/assets/asset_11.png',
    detailImage: '/assets/asset_26.png',
    link: '#works'
  }
];

export const SERVICES: Service[] = [
  {
    number: '01/',
    title: 'BRAND IDENTITY & VISUAL SYSTEMS',
    description: 'I SHAPE THE CORE VISUALS OF A BRAND, FROM LOGOTYPES AND TYPOGRAPHY TO PALETTES AND SYSTEMS — ENSURING THE BRAND FEELS MEMORABLE, AND UNMISTAKABLY DISTINCT.',
    tags: ['LIFESTYLE', 'CREATIVE STUDIOS', 'FASHION'],
    image: '/assets/asset_14.webp'
  },
  {
    number: '02/',
    title: 'WEBSITE DESIGN & DEVELOPMENT',
    description: 'I DESIGN AND DEVELOP RESPONSIVE, HIGH-PERFORMING WEBSITES FOCUSED ON CLARITY, USABILITY, AND SEAMLESS INTERACTION. BUILT TO LOOK REFINED AND WORK BEAUTIFULLY ACROSS ALL DEVICES.',
    tags: ['FIGMA', 'FRAMER', 'REACT', 'NEXT.JS', 'TAILWIND'],
    image: '/assets/asset_15.webp'
  },
  {
    number: '03/',
    title: 'CREATIVE DIRECTION & CONTENT AESTHETIC',
    description: 'I GUIDE VISUAL STORYTELLING THROUGH PHOTOGRAPHY, VIDEO MOOD, AND BRAND EXPRESSION — ENSURING EVERY PIECE OF CONTENT FEELS CONSISTENT & INTENTIONAL.',
    tags: ['HOTELS & RESORTS', 'PRODUCT BRANDS', 'EDITORIAL', 'TRAVEL'],
    image: '/assets/asset_16.png'
  },
  {
    number: '04/',
    title: 'UX/UI FOR DIGITAL PRODUCTS',
    description: 'I DESIGN INTERFACES THAT FEEL INTUITIVE AND VISUALLY CLEAR — BALANCING AESTHETICS WITH USABILITY TO CREATE EXPERIENCES THAT ARE SMOOTH, FUNCTIONAL, AND SCALABLE.',
    tags: ['STARTUPS', 'APPS', 'PLATFORMS', 'DASHBOARDS'],
    image: '/assets/asset_17.webp'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: '"Elian understood the direction instantly. The final result felt refined, balanced, and aligned with exactly how we wanted to present ourselves."',
    author: 'OLIVIA BENNETT',
    role: 'DIRECTOR, AESTHA STUDIO',
    avatar: '/assets/asset_20.jpg'
  },
  {
    quote: '"Working with Elian elevated our product launch completely. The precision in design and the speed of delivery blew our team away."',
    author: 'MARCUS VANCE',
    role: 'CO-FOUNDER, LUNARIS',
    avatar: '/assets/asset_20.jpg'
  },
  {
    quote: '"The attention to typography, spacing, and micro-interactions gave our brand the exact high-end credibility we needed."',
    author: 'ELENA ROSTOVA',
    role: 'HEAD OF BRAND, HAVEN & CO',
    avatar: '/assets/asset_20.jpg'
  }
];

export const CLIENTS: Client[] = [
  { name: 'LUNARIS STUDIO', year: '2025/', link: '#' },
  { name: 'VERDEN HEALTH', year: '2025/', link: '#' },
  { name: 'ALTROVE LABS', year: '2024/', link: '#' },
  { name: 'HAVEN & CO.', year: '2024/', link: '#' },
  { name: 'SOLVRA SYSTEMS', year: '2023/', link: '#' },
  { name: 'NORTHMERE CAPITAL', year: '2022/', link: '#' },
  { name: 'ECHION MEDIA', year: '2021/', link: '#' },
  { name: 'ARDEN SUPPLY HOUSE', year: '2020/', link: '#' }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01/',
    title: 'DISCOVERY & INSIGHT',
    description: 'I START BY UNDERSTANDING YOUR WORLD — YOUR AUDIENCE, YOUR GOALS, AND THE CHALLENGES BEHIND THEM.'
  },
  {
    number: '02/',
    title: 'STRUCTURE & STRATEGY',
    description: 'USER FLOWS, CONTENT DIRECTION, AND THE OVERALL FRAMEWORK. THIS IS WHERE IDEAS TAKE SHAPE.'
  },
  {
    number: '03/',
    title: 'DESIGN & BUILD',
    description: 'I EXPLORE VISUALS AND LAYOUTS THAT ELEVATE YOUR BRAND WHILE STAYING ALIGNED WITH YOUR GOALS.'
  },
  {
    number: '04/',
    title: 'REFINE & FINALIZE',
    description: 'THIS FINAL PHASE ENSURES YOUR PROJECT FEELS COHESIVE, INTUITIVE, AND READY FOR REAL-WORLD USE.'
  }
];

export const AWARDS: Award[] = [
  {
    title: 'Awwwards',
    count: '3×',
    description: 'RECOGNIZED ON THE AWWWARDS PLATFORM A MILESTONE THAT CELEBRATES BOTH DIRECTION AND TECHNICAL EXECUTION.'
  },
  {
    title: 'CSSDA',
    count: '9×',
    description: 'FEATURED ON CSS DESIGN AWARDS WITH BEST INNOVATION, BEST CREATIVITY, BEST ANIMATION, AND MULTIPLE DEVELOPER AWARDS.'
  },
  {
    title: 'Framer Gallery',
    count: '8×',
    description: 'I EARNED A SPOT IN THE FRAMER GALLERY TWICE AND RECEIVED THE FRAMER EXPERT BADGE, SHOWCASING HIGH-QUALITY EXECUTION.'
  },
  {
    title: 'Behance',
    count: '3×',
    description: 'AWARDED ACROSS BEHANCE WITH BADGES IN FIGMA, ADOBE ILLUSTRATOR, UI/UX, AND MULTIPLE CASE STUDY FEATURES.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    category: 'DESIGN STRATEGY',
    date: 'NOV 18, 2025',
    title: 'Designing With Intent: Why Clarity Beats Complexity',
    link: '#blogs'
  },
  {
    category: 'FRAMER DEVELOPMENT',
    date: 'NOV 18, 2025',
    title: 'Why Framer Makes the Workflow Effortless',
    link: '#blogs'
  },
  {
    category: 'UI PRINCIPLES',
    date: 'NOV 18, 2025',
    title: 'How Visual Hierarchy Shapes User Decisions',
    link: '#blogs'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How does the project typically start?',
    answer: 'We begin with an in-depth discovery call to understand your brand goals, target audience, and key project milestones before moving into structure and wireframes.'
  },
  {
    question: 'How long does a project usually take?',
    answer: 'Typical projects take between 2 to 4 weeks depending on the scope, number of pages, custom interactive components, and feedback speed.'
  },
  {
    question: 'What if I don’t have branding yet?',
    answer: 'I offer complete brand identity and visual systems design, establishing the typography, color systems, and visual guidelines prior to building the website.'
  },
  {
    question: 'Do you offer ongoing support after the project?',
    answer: 'Yes, every project includes 30 days of post-launch warranty and support, along with optional ongoing design retainer packages.'
  },
  {
    question: 'Will the website be responsive for all devices?',
    answer: 'Absolutely. Every layout is crafted specifically for mobile, tablet, laptop, and ultra-wide screens with fluid responsive typography and touch-optimized interactions.'
  },
  {
    question: 'Can you work with content I already have?',
    answer: 'Yes, we can organize, refine, and structure your existing copy and media assets to fit cleanly into the new modern layout.'
  },
  {
    question: 'What about SEO?',
    answer: 'All sites are built with strict semantic HTML, clean meta tags, OpenGraph data, lightning-fast performance, and automated sitemaps for optimal search ranking.'
  },
  {
    question: 'What’s your pricing structure?',
    answer: 'I work with fixed project rates based on deliverables and timeline, ensuring transparent budgeting with no surprise fees.'
  }
];
