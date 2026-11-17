export interface MetricItem {
  value: string
  label: string
  detail: string
  source: string
}

export interface SkillItem {
  name: string
  category: 'languages' | 'frontend' | 'backend' | 'cloud' | 'performance' | 'databases' | 'automation'
  level: string
  highlight?: boolean
}

export interface CaseStudy {
  id: string
  title: string
  client: string
  role: string
  summary: string
  challenge: string
  solution: string
  impact: string[]
  stack: string[]
  period: string
}

export interface ExperienceItem {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
  stack: string[]
}

export const portfolioData = {
  personal: {
    name: 'Arfan Citra Wibowo',
    firstName: 'Arfan Citra',
    lastName: 'Wibowo',
    initials: 'ACW',
    title: 'Full Stack Developer',
    subtitle: 'Full Stack Developer',
    location: 'Bandung, Indonesia',
    experienceYears: '7+',
    email: 'arfancitraw@gmail.com',
    status: 'Available for new opportunities',
    speechBubble: 'Thinking in clean architecture ⚡',
    shortBio: 'I build high-performance web applications, decoupled architectures, and scalable cloud systems you can inspect.',
    summary:
      'Full Stack Developer with 7+ years of experience architecting high-performance web applications, decoupled cloud systems, and scalable backend APIs. Proven track record leading legacy monolith migrations to modern Nuxt 3 architectures, achieving 90+ Lighthouse scores with sub-second Core Web Vitals, and designing fault-tolerant asynchronous cloud pipelines.',
    socials: {
      github: 'https://github.com/arfancitraw',
      linkedin: 'https://linkedin.com/in/arfancitraw',
      behance: 'https://behance.net/arfanwibowo'
    }
  },

  keyMetrics: [
    {
      value: '20-30 -> 90+',
      label: 'Core Web Vitals & Lighthouse',
      detail: 'Elevated mobile and desktop performance across high-traffic storefronts',
      source: 'Google Lighthouse & SpeedCurve audits'
    },
    {
      value: '7.0s -> 2.0s',
      label: 'Largest Contentful Paint (LCP)',
      detail: 'Reduced LCP by over 70% with SSR optimization and edge caching',
      source: 'SpeedCurve Core Web Vitals diagnostics'
    },
    {
      value: '-40%',
      label: 'Database Query Load',
      detail: 'Reduced primary database pressure via Valkey/Redis query caching and decoupled API architecture',
      source: 'AWS CloudWatch metrics'
    },
    {
      value: '99.8%',
      label: 'Enterprise System Uptime',
      detail: 'Maintained continuous operational availability for 50+ enterprise compliance and audit teams',
      source: 'Enterprise production logs'
    }
  ] as MetricItem[],

  skillCategories: [
    { id: 'all', label: 'All Competencies' },
    { id: 'frontend', label: 'Frontend & SSR' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'cloud', label: 'Cloud & Infrastructure' },
    { id: 'databases', label: 'Databases & Caching' },
    { id: 'performance', label: 'Systems & Performance' },
    { id: 'automation', label: 'AI & Automation' },
    { id: 'languages', label: 'Languages & Core' }
  ],

  skills: [
    { name: 'Nuxt 3', category: 'frontend', level: 'Production Architecture (SSR/SPA)', highlight: true },
    { name: 'Vue.js (Vue 3 / 2)', category: 'frontend', level: 'Composition API & State Architecture', highlight: true },
    { name: 'TypeScript', category: 'languages', level: 'Advanced Type Modeling', highlight: true },
    { name: 'JavaScript (ESNext)', category: 'languages', level: 'Modern Standards & Asynchronous Patterns' },
    { name: 'PHP 8.x', category: 'languages', level: 'Senior Specialist', highlight: true },
    { name: 'Laravel', category: 'backend', level: 'Enterprise API & Domain Architecture', highlight: true },
    { name: 'RESTful API Design', category: 'backend', level: 'Clean Architecture & Microservices', highlight: true },
    { name: 'Node.js', category: 'backend', level: 'Microservices & Background Workers' },
    { name: 'Core Web Vitals (LCP/CLS/INP)', category: 'performance', level: 'Diagnostic Auditing & Tuning', highlight: true },
    { name: 'SpeedCurve & Lighthouse Diagnostics', category: 'performance', level: 'Real User Monitoring (RUM)', highlight: true },
    { name: 'SSR & Hydration Optimization', category: 'performance', level: 'Code Splitting & Bundle Budgeting' },
    { name: 'AWS SQS (Queues)', category: 'cloud', level: 'High-Throughput Asynchronous Pipelines', highlight: true },
    { name: 'AWS (EC2, S3, Lambda, CloudFront)', category: 'cloud', level: 'Production Infrastructure & Edge CDN' },
    { name: 'AWS RDS & CloudWatch', category: 'cloud', level: 'Observability & Infrastructure Tuning' },
    { name: 'Docker & Containerization', category: 'cloud', level: 'Reproducible Deployments' },
    { name: 'CI/CD (GitHub Actions)', category: 'cloud', level: 'Automated Test & Release Pipelines' },
    { name: 'Redis / Valkey', category: 'databases', level: 'Distributed Cache & Session Store', highlight: true },
    { name: 'PostgreSQL', category: 'databases', level: 'Relational Schemas, Constraints & Indexes' },
    { name: 'MySQL', category: 'databases', level: 'Query Optimization & Replication' },
    { name: 'Vitest & PHPUnit', category: 'languages', level: 'Automated Testing & Modular Components' },
    { name: 'N8N Automation Workflows', category: 'automation', level: 'Event-Driven Workflow Automation', highlight: true },
    { name: 'Prompt & Context Engineering', category: 'automation', level: 'LLM Orchestration & Task Pipelines' },
    { name: 'Git & Agile Team Leadership', category: 'languages', level: 'Cross-Functional Squad Delivery' }
  ] as SkillItem[],

  caseStudies: [
    {
      id: 'legacy-monolith-decoupling',
      title: 'Decoupling Monolithic Architecture into PHP REST API and Nuxt 3 Storefront',
      client: 'Global Shop Direct (International Retail)',
      role: 'Lead Architect and Cross-Functional Squad Lead',
      period: 'Nov 2022 - Present',
      summary:
        'Led the structural modernization of an international e-commerce platform serving Australia and New Zealand. Directed a cross-functional squad of 2 software engineers, 1 QA specialist, and 1 business analyst through discovery, architectural design, and progressive production rollout.',
      challenge:
        'The legacy monolithic application suffered from slow initial render times, high database query contention during peak promotional events, and mobile Lighthouse scores stalled between 20 and 30.',
      solution:
        'Architected a decoupled system pairing an optimized PHP REST API with Nuxt 3 running Server-Side Rendering (SSR) and edge-cached static assets. Introduced Valkey/Redis for caching frequent catalog reads, established automated unit testing with Vitest and PHPUnit, and streamlined feature deployment cycles.',
      impact: [
        'Elevated Google Lighthouse Performance scores from 20-30 to 90+ across both Mobile and Desktop views',
        'Reduced Largest Contentful Paint (LCP) from 7.0 seconds down to 2.0 seconds via SpeedCurve diagnostics',
        'Completely eliminated visual jumps during catalog load, cutting Cumulative Layout Shift (CLS) from 0.2 down to 0.00',
        'Lowered Interaction to Next Paint (INP) from 900ms to 150ms',
        'Cut initial page load times by 40% and reduced AWS RDS database load by 40% via Redis/Valkey query caching',
        'Accelerated feature delivery cycles by 3x (from 2 weeks down to under 5 days)'
      ],
      stack: ['Nuxt 3', 'Vue.js', 'PHP', 'RESTful APIs', 'Valkey / Redis', 'AWS CloudFront', 'Vitest', 'SpeedCurve']
    },
    {
      id: 'asynchronous-streaming-pipeline',
      title: 'High-Throughput Asynchronous Order Processing and Real-Time Sales Streams',
      client: 'High-Volume Broadcast Commerce',
      role: 'Full Stack Engineer',
      period: '2023 - 2024',
      summary:
        'Architected real-time interactive sales components and an asynchronous checkout queue designed to absorb heavy transaction spikes during live promotional broadcasts.',
      challenge:
        'Live promotional broadcasts produced sudden, concentrated bursts of concurrent checkout transactions that overwhelmed synchronous payment processing and created database connection locks.',
      solution:
        'Engineered asynchronous transaction pipelines utilizing AWS SQS to buffer and decouple order submission from third-party payment gateways. Developed real-time customer sales chat components to support interactive viewer engagement.',
      impact: [
        'Completely eliminated checkout payment bottlenecks and database connection starvation during peak traffic spikes',
        'Drove a 30% increase in campaign conversion rate via interactive real-time sales modules',
        'Integrated multi-channel attribution and analytics tracking across LeadsRx, GA4, GTM, ABTasty, and Dotdigital'
      ],
      stack: ['AWS SQS', 'PHP', 'Vue.js', 'Nuxt 3', 'AWS Lambda', 'GA4', 'LeadsRx', 'ABTasty']
    },
    {
      id: 'enterprise-compliance-audit',
      title: 'Whistleblowing Compliance System (WBS) and Internal Audit Online (IAO)',
      client: 'Public Sector & Enterprise Organizations',
      role: 'Full Stack Co-Architect',
      period: 'Jan 2019 - Oct 2022',
      summary:
        'Co-architected high-security compliance systems and an enterprise internal audit platform supporting good corporate governance across major public sector organizations.',
      challenge:
        'Public institutions required strict anonymity, tamper-proof reporting logs, and high system availability for sensitive whistleblowing and corporate auditing workflows.',
      solution:
        'Constructed encrypted case management pipelines using Laravel and Vue.js with granular role-based access control, immutable audit trails, and automated reconciliation feeds connecting directly to enterprise ERP systems.',
      impact: [
        'Adopted by 8+ major public institutions for Good Corporate Governance (GCG) compliance',
        'Built Internal Audit Online (IAO) supporting audit operations for 50+ enterprise teams with 99.8% uptime',
        'Automated ERP financial reconciliation by integrating real-time payment feeds, reducing manual processing effort by 80%'
      ],
      stack: ['Laravel', 'Vue.js', 'PostgreSQL', 'MySQL', 'RESTful APIs', 'Docker']
    }
  ] as CaseStudy[],

  experiences: [
    {
      role: 'Full Stack Developer',
      company: 'Geekseat',
      location: 'Bandung, Indonesia',
      period: 'November 2022 - Present',
      bullets: [
        'Led the architectural migration of a legacy PHP monolith to a decoupled PHP API + Nuxt 3 (SSR/SPA) system, directing a squad of 2 engineers, 1 QA, and 1 BA: cutting page load by 40% and AWS RDS load by 40%.',
        'Engineered end-to-end performance and Core Web Vitals optimizations for international e-commerce platforms (AU/NZ), elevating Lighthouse scores from 20-30 to 90+ across Mobile and Desktop.',
        'Drastically reduced LCP (7.0s to 2.0s), CLS (0.2 to 0.0), and INP (900ms to 150ms) using SpeedCurve diagnostics.',
        'Enhanced SEO compliance to Google Webmaster standards, achieving a peak 98 SEO audit score across Google Lighthouse and SpeedCurve audits.',
        'Designed asynchronous order processing pipelines leveraging AWS SQS for offline transaction queues, eliminating bottlenecks during high-traffic sales events.',
        'Integrated a multi-channel tracking and personalization ecosystem including LeadsRx, GA4, GTM, ABTasty, Dotdigital, and Nosto.',
        'Developed live streaming sales modules with real-time interactive customer chat capabilities, driving a 30% increase in campaign conversion rates.',
        'Modernized development practices through modular component design and unit testing with Vitest and PHPUnit, accelerating feature delivery from 2 weeks to under 5 days.',
        'Streamlined operational workflows by building automated sequences using N8N, prompt engineering, and context-aware LLM pipelines.'
      ],
      stack: ['Nuxt 3', 'Vue.js', 'PHP', 'Laravel', 'AWS (SQS, EC2, S3, CloudFront)', 'Redis / Valkey', 'SpeedCurve', 'N8N']
    },
    {
      role: 'Web Developer / Full Stack Developer',
      company: 'PT PRAGMA INFORMATIKA',
      location: 'Bandung, Indonesia',
      period: 'January 2019 - October 2022',
      bullets: [
        'Developed 15+ full-stack web applications using Laravel, Vue.js, and MySQL / PostgreSQL for governmental bodies and enterprise clients.',
        'Co-architected Whistleblowing System (WBS) for Good Corporate Governance (GCG), adopted across 8+ public institutions to streamline anonymous compliance reporting.',
        'Built Internal Audit Online (IAO) platform from the ground up using Laravel, supporting audit workflows for 50+ enterprise teams with 99.8% system uptime.',
        'Automated ERP financial reconciliation by integrating real-time billing and payment feeds, reducing manual processing effort by 80%.'
      ],
      stack: ['PHP', 'Laravel', 'Vue.js', 'PostgreSQL', 'MySQL', 'JavaScript', 'RESTful APIs', 'Docker']
    }
  ] as ExperienceItem[]
}
