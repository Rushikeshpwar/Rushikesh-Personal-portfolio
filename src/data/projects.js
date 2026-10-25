export const projects = [
  {
    id: 'whatsapp-clone-mern',
    name: 'WhatsApp-like Chat Application',
    tagline: 'Full-stack real-time messaging platform with instant chat, media sharing & presence indicators.',
    description:
      'Developed a responsive, real-time messaging application using the MERN stack and Socket.IO for low-latency communication. Implemented JWT authentication with OTP verification, image/media uploads via Cloudinary, online/offline presence tracking, and Zustand state management. Enhanced user experience with sound effects, responsive layouts, and Framer Motion animations.',
    image: '/whatsapp-clone.png',
    tags: ['MERN', 'React.js', 'Socket.IO', 'Node.js', 'MongoDB', 'Security'],
    tech: ['React 19', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT', 'Zustand', 'Tailwind CSS', 'Cloudinary'],
    github: 'https://github.com/Rushikeshpwar/WhatsApp-Clone-MERN',
    demo: null,
    detailPath: '/projects/whatsapp-clone-mern',
    overview:
      'The WhatsApp-like Chat Application is a production-style, real-time web communication platform designed to replicate modern messaging capabilities. Built on React 19 and Node.js, the app leverages Socket.IO bi-directional WebSocket connections to deliver sub-millisecond message delivery, instant typing feedback, and reliable online presence status.',
    architecture: [
      'Frontend: React 19 with Vite, Zustand for lightweight global state, Tailwind CSS, DaisyUI, and Framer Motion.',
      'Backend: Node.js and Express.js RESTful API handling authentication, user management, and conversation indexing.',
      'Real-Time Layer: Socket.IO WebSocket server managing client rooms, instant broadcasts, and status updates.',
      'Database: MongoDB with Mongoose ODM storing hashed credentials, conversation histories, and message metadata.',
      'Media Pipeline: Cloudinary CDN integration for fast, secure image upload and optimization.',
    ],
    features: [
      'Sub-millisecond real-time messaging using Socket.IO event emitters',
      'Dual authentication system with JWT token rotation and email OTP verification',
      'Cloudinary-powered image and media attachments with preview modal',
      'Real-time user presence indicators (online/offline tracking)',
      'Clean audio chime notifications on new message arrivals',
      'Fully responsive mobile-first UI with dark mode elegance',
    ],
  },
  {
    id: 'food-villa-react',
    name: 'Food Villa – Food Ordering Application',
    tagline: 'Interactive, mobile-first food browsing and ordering platform with centralized Redux state.',
    description:
      'Engineered a modern, responsive food ordering application featuring interactive restaurant search, menu categorization, and centralized shopping cart management powered by Redux. Connected with live RESTful APIs for dynamic menu data, implementing responsive mobile layouts and structured reusable components with Tailwind CSS.',
    image: '/food-villa.png',
    tags: ['React.js', 'Redux', 'Frontend', 'REST APIs', 'Tailwind CSS'],
    tech: ['React.js', 'Redux Toolkit', 'JavaScript (ES6+)', 'REST APIs', 'Tailwind CSS', 'Flexbox'],
    github: 'https://github.com/Rushikeshpwar/Food-Villa-Portfolio',
    demo: null,
    detailPath: '/projects/food-villa-react',
    overview:
      'Food Villa is an intuitive single-page food ordering experience modeled after modern delivery platforms. It emphasizes rapid state synchronization, fluid component re-rendering, and seamless restaurant catalog navigation across desktops, tablets, and smartphones.',
    architecture: [
      'State Management: Redux Toolkit store managing shopping cart items, quantities, and pricing calculations.',
      'UI Architecture: Modular functional components with custom hooks for data fetching and debounce search.',
      'Styling: Utility-first Tailwind CSS ensuring responsive layouts and sleek typography.',
    ],
    features: [
      'Live search filter and dietary category filters for fast restaurant exploration',
      'Persistent shopping cart with dynamic total price computation and item increments',
      'Shimmer UI skeleton placeholders for smooth asynchronous loading states',
      'Clean responsive navigation tailored for mobile, tablet, and desktop viewports',
    ],
  },
  {
    id: 'ai-hrms-edso',
    name: 'AI-Powered HR Management Platform',
    tagline: 'Enterprise-grade HRMS with fine-grained authorization, OpenFGA RBAC & Docker orchestration.',
    description:
      'Architected end-to-end full-stack capabilities for an enterprise AI-powered HR platform during software internship at Edso Services. Implemented secure REST APIs with JWT, OpenFGA fine-grained role-based access control, and ZITADEL identity federation across 5+ endpoints. Containerized services using Docker for smooth deployment pipelines.',
    image: null,
    tags: ['MERN', 'Node.js', 'Security', 'Docker', 'MongoDB'],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OpenFGA', 'ZITADEL', 'Docker', 'JWT', 'Jira'],
    github: 'https://github.com/Rushikeshpwar',
    demo: null,
    detailPath: '/projects/ai-hrms-edso',
    overview:
      'Engineered during an intensive 7-month software development internship at Edso Services Pvt. Ltd. This platform centralizes workforce analytics, role delegations, and employee workflows with enterprise-grade security standards.',
    architecture: [
      'Identity & Security: ZITADEL identity provider integrated with OpenFGA relationship-based access control.',
      'Backend Services: Express.js REST API layer handling HR records, employee onboarding, and document management.',
      'Database: Scalable MongoDB schemas with indexing on active employee tenures and departments.',
      'DevOps: Docker containers configured for local staging and repeatable CI/CD deployment runs.',
    ],
    features: [
      'Granular authorization engine with OpenFGA relationship tuples',
      'Stateless token-based security via JWT and OAuth2 federation',
      'Dockerized multi-container setup ensuring zero environment drift',
      'Agile delivery managed through Jira sprints and Bitbucket pull requests',
    ],
  },
  {
    id: 'news-app',
    name: 'News App – Live Headline Aggregator',
    tagline: 'Dynamic news portal delivering category-filtered breaking news with live RESTful feeds.',
    description:
      'Feature-packed news portal fetching real-time global headlines across technology, business, sports, and science. Implements responsive article cards, category switches, keyword search, and clean error fallbacks.',
    image: null,
    tags: ['React.js', 'REST APIs', 'Frontend'],
    tech: ['React.js', 'JavaScript', 'REST APIs', 'CSS3', 'Tailwind CSS'],
    github: 'https://github.com/Rushikeshpwar/News-App',
    demo: null,
    detailPath: '/projects/news-app',
    overview:
      'A sleek, responsive news dashboard designed to keep users up-to-date with breaking stories from worldwide publishers.',
    architecture: [
      'API Integration: Asynchronous HTTP fetch clients handling rate limits, error catches, and response parsing.',
      'State: Component state with memoized category filtering.',
    ],
    features: [
      'Instant categorization across Tech, Business, Science, and Sports',
      'Detailed read-more modal links to original publisher articles',
      'Optimized lightweight bundle for high performance',
    ],
  },
  {
    id: 'text-to-audio',
    name: 'Text-to-Audio Speech Synthesizer',
    tagline: 'Browser-based speech synthesis tool converting written text into realistic audio voices.',
    description:
      'Interactive voice generation web utility built on the modern Web Speech API. Enables users to input arbitrary text, adjust speech pitch, playback rate, and select from diverse multilingual system voices.',
    image: null,
    tags: ['JavaScript', 'Frontend'],
    tech: ['JavaScript (ES6+)', 'Web Speech API', 'HTML5', 'CSS3'],
    github: 'https://github.com/Rushikeshpwar/Text-to-Audio',
    demo: null,
    detailPath: '/projects/text-to-audio',
    overview:
      'An accessible, utility-first audio synthesizer allowing seamless vocalization of written content directly in the browser without external paid APIs.',
    architecture: [
      'Speech Synthesis API: Native window.speechSynthesis controller with event listeners for pause, resume, and completion.',
    ],
    features: [
      'Support for multiple system voice engines and accents',
      'Real-time sliders for speech pitch and rate manipulation',
      'Zero dependencies, lightning-fast execution',
    ],
  },
]
