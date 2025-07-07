// Complete services data for all navbar items
export const servicesData = {
  // Software Development
  "custom-software-development": {
    id: "custom-software-development",
    title: "Custom Software Development",
    shortDescription:
      "Tailored software solutions built from the ground up to meet your unique business requirements",
    fullDescription:
      "We create bespoke software solutions that perfectly align with your business processes, goals, and vision. Our custom development approach ensures scalability, security, and performance while delivering exactly what your organization needs.",
    icon: "Code2",
    category: "Development",
    pricing: { starting: 15000, typical: 45000, enterprise: 150000 },
    timeline: "8-24 weeks",
    technologies: ["React", "Node.js", "Python", "PostgreSQL", "AWS", "Docker"],
    features: [
      "Custom architecture design",
      "Scalable infrastructure",
      "API development",
      "Database design",
      "Security implementation",
      "Performance optimization",
      "Testing & QA",
      "Deployment & maintenance",
    ],
    benefits: [
      "Perfect fit for your business needs",
      "Competitive advantage through unique features",
      "Full ownership of source code",
      "Scalable architecture for future growth",
      "Enhanced security and compliance",
      "Improved operational efficiency",
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Analysis",
        description:
          "We analyze your requirements, business processes, and technical needs",
      },
      {
        step: 2,
        title: "Architecture Design",
        description: "Create detailed technical architecture and system design",
      },
      {
        step: 3,
        title: "Development",
        description:
          "Agile development with regular updates and feedback cycles",
      },
      {
        step: 4,
        title: "Testing & QA",
        description:
          "Comprehensive testing including unit, integration, and user acceptance testing",
      },
      {
        step: 5,
        title: "Deployment",
        description:
          "Secure deployment with monitoring and performance optimization",
      },
      {
        step: 6,
        title: "Support",
        description: "Ongoing maintenance, updates, and technical support",
      },
    ],
    faqs: [
      {
        question: "How long does custom software development take?",
        answer:
          "Timeline varies based on complexity, but typically ranges from 8-24 weeks. We provide detailed project timelines during the planning phase.",
      },
      {
        question: "Do I own the source code?",
        answer:
          "Yes, you retain full ownership of all source code and intellectual property developed for your project.",
      },
    ],
    caseStudies: [
      {
        title: "Healthcare Management System",
        client: "MedTech Solutions",
        description:
          "HIPAA-compliant patient management system serving 50,000+ patients",
        results: [
          "40% reduction in administrative time",
          "99.9% uptime",
          "HIPAA compliance achieved",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "enterprise-software-solutions": {
    id: "enterprise-software-solutions",
    title: "Enterprise Software Solutions",
    shortDescription:
      "Scalable enterprise-grade software solutions for large organizations",
    fullDescription:
      "We develop robust, scalable enterprise software solutions that streamline operations, enhance productivity, and drive digital transformation across large organizations.",
    icon: "Building",
    category: "Development",
    pricing: { starting: 50000, typical: 150000, enterprise: 500000 },
    timeline: "16-40 weeks",
    technologies: [
      "Java",
      ".NET",
      "PostgreSQL",
      "Kubernetes",
      "Azure",
      "Microservices",
    ],
    features: [
      "Enterprise architecture",
      "Scalable infrastructure",
      "Integration capabilities",
      "Security compliance",
      "Performance optimization",
      "24/7 support",
    ],
    benefits: [
      "Improved efficiency",
      "Cost reduction",
      "Better compliance",
      "Enhanced security",
      "Scalable growth",
      "Competitive advantage",
    ],
    process: [
      {
        step: 1,
        title: "Enterprise Assessment",
        description: "Analyze current systems and requirements",
      },
      {
        step: 2,
        title: "Architecture Design",
        description: "Design scalable enterprise architecture",
      },
      {
        step: 3,
        title: "Development",
        description: "Build enterprise-grade solutions",
      },
      {
        step: 4,
        title: "Integration",
        description: "Integrate with existing systems",
      },
      {
        step: 5,
        title: "Deployment",
        description: "Deploy with zero downtime",
      },
      { step: 6, title: "Support", description: "Ongoing enterprise support" },
    ],
    faqs: [
      {
        question: "How long does enterprise software development take?",
        answer:
          "Enterprise projects typically take 16-40 weeks depending on complexity and scope.",
      },
      {
        question: "Do you provide ongoing support?",
        answer:
          "Yes, we offer comprehensive 24/7 support and maintenance packages.",
      },
    ],
    caseStudies: [
      {
        title: "Enterprise ERP System",
        client: "GlobalCorp",
        description: "Complete ERP solution for 10,000+ users",
        results: ["50% efficiency gain", "99.9% uptime", "$2M cost savings"],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "software-modernization": {
    id: "software-modernization",
    title: "Software Modernization",
    shortDescription:
      "Transform legacy systems into modern, efficient applications",
    fullDescription:
      "Modernize your legacy software systems with cutting-edge technologies, improved performance, and enhanced user experiences while maintaining business continuity.",
    icon: "RefreshCw",
    category: "Development",
    pricing: { starting: 25000, typical: 75000, enterprise: 200000 },
    timeline: "12-28 weeks",
    technologies: [
      "React",
      "Node.js",
      "Cloud",
      "Microservices",
      "API",
      "Docker",
    ],
    features: [
      "Legacy system analysis",
      "Modern architecture design",
      "Data migration",
      "Performance optimization",
      "Security enhancement",
      "User experience improvement",
    ],
    benefits: [
      "Improved performance",
      "Enhanced security",
      "Better user experience",
      "Reduced maintenance costs",
      "Increased scalability",
      "Modern technology stack",
    ],
    process: [
      {
        step: 1,
        title: "Legacy Assessment",
        description:
          "Analyze existing systems and identify modernization opportunities",
      },
      {
        step: 2,
        title: "Modernization Strategy",
        description: "Create comprehensive modernization roadmap",
      },
      {
        step: 3,
        title: "Architecture Redesign",
        description: "Design modern, scalable architecture",
      },
      {
        step: 4,
        title: "Incremental Migration",
        description: "Gradual migration with minimal disruption",
      },
      {
        step: 5,
        title: "Testing & Validation",
        description: "Comprehensive testing and validation",
      },
      {
        step: 6,
        title: "Go-Live Support",
        description: "Support during transition and beyond",
      },
    ],
    faqs: [
      {
        question: "How do you ensure minimal disruption?",
        answer:
          "We use incremental migration strategies and maintain parallel systems during transition.",
      },
      {
        question: "Can you modernize any legacy system?",
        answer:
          "Yes, we have experience modernizing systems built on various legacy technologies.",
      },
    ],
    caseStudies: [
      {
        title: "Banking System Modernization",
        client: "SecureBank",
        description: "Modernized 20-year-old banking system",
        results: [
          "10x performance improvement",
          "Zero downtime migration",
          "Enhanced security",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "legacy-system-migration": {
    id: "legacy-system-migration",
    title: "Legacy System Migration",
    shortDescription:
      "Seamless migration from legacy systems to modern platforms",
    fullDescription:
      "Migrate your legacy systems to modern platforms with zero data loss and minimal downtime, ensuring business continuity throughout the process.",
    icon: "ArrowRight",
    category: "Development",
    pricing: { starting: 20000, typical: 60000, enterprise: 150000 },
    timeline: "10-24 weeks",
    technologies: [
      "Cloud Platforms",
      "Modern Databases",
      "APIs",
      "Microservices",
      "Docker",
      "Kubernetes",
    ],
    features: [
      "Data migration",
      "System integration",
      "Performance optimization",
      "Security enhancement",
      "User training",
      "24/7 support",
    ],
    benefits: [
      "Reduced operational costs",
      "Improved performance",
      "Enhanced security",
      "Better scalability",
      "Modern user experience",
      "Future-proof technology",
    ],
    process: [
      {
        step: 1,
        title: "Migration Planning",
        description: "Comprehensive migration strategy and planning",
      },
      {
        step: 2,
        title: "Data Assessment",
        description: "Analyze and prepare data for migration",
      },
      {
        step: 3,
        title: "System Setup",
        description: "Setup new modern infrastructure",
      },
      {
        step: 4,
        title: "Data Migration",
        description: "Secure data migration with validation",
      },
      {
        step: 5,
        title: "Testing",
        description: "Comprehensive testing and validation",
      },
      {
        step: 6,
        title: "Go-Live",
        description: "Smooth transition to new system",
      },
    ],
    faqs: [
      {
        question: "How do you ensure data integrity?",
        answer:
          "We use multiple validation checkpoints and backup strategies to ensure 100% data integrity.",
      },
      {
        question: "What if issues arise during migration?",
        answer:
          "We have rollback procedures and 24/7 support to handle any issues immediately.",
      },
    ],
    caseStudies: [
      {
        title: "ERP Migration",
        client: "ManufacturingCorp",
        description: "Migrated legacy ERP to cloud-based solution",
        results: [
          "Zero data loss",
          "50% cost reduction",
          "3x performance improvement",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "api-development-integration": {
    id: "api-development-integration",
    title: "API Development & Integration",
    shortDescription:
      "Custom API development and third-party system integrations",
    fullDescription:
      "Build robust APIs and integrate with third-party systems to create seamless data flow and enhanced functionality across your digital ecosystem.",
    icon: "Link",
    category: "Development",
    pricing: { starting: 8000, typical: 25000, enterprise: 75000 },
    timeline: "6-16 weeks",
    technologies: ["REST", "GraphQL", "Node.js", "Python", "JSON", "OAuth"],
    features: [
      "RESTful API development",
      "GraphQL APIs",
      "Third-party integrations",
      "API documentation",
      "Security implementation",
      "Rate limiting",
      "Monitoring & analytics",
      "Version management",
    ],
    benefits: [
      "Seamless data exchange",
      "Enhanced functionality",
      "Improved efficiency",
      "Better user experience",
      "Scalable architecture",
      "Future-proof integrations",
    ],
    process: [
      {
        step: 1,
        title: "API Planning",
        description: "Define API requirements and specifications",
      },
      {
        step: 2,
        title: "Design & Architecture",
        description: "Design API structure and endpoints",
      },
      {
        step: 3,
        title: "Development",
        description: "Build and implement APIs",
      },
      {
        step: 4,
        title: "Integration",
        description: "Integrate with existing systems",
      },
      { step: 5, title: "Testing", description: "Comprehensive API testing" },
      {
        step: 6,
        title: "Documentation",
        description: "Complete API documentation and support",
      },
    ],
    faqs: [
      {
        question: "What types of APIs do you develop?",
        answer:
          "We develop REST APIs, GraphQL APIs, and custom APIs based on your specific requirements.",
      },
      {
        question: "Can you integrate with any third-party system?",
        answer:
          "Yes, we have experience integrating with various third-party systems and APIs.",
      },
    ],
    caseStudies: [
      {
        title: "Payment Gateway Integration",
        client: "E-commerce Plus",
        description: "Integrated multiple payment gateways",
        results: [
          "40+ payment methods",
          "99.9% uptime",
          "Reduced transaction time",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "microservices-architecture": {
    id: "microservices-architecture",
    title: "Microservices Architecture",
    shortDescription:
      "Scalable microservices architecture for modern applications",
    fullDescription:
      "Design and implement microservices architecture that enables scalability, maintainability, and independent deployment of application components.",
    icon: "Grid",
    category: "Development",
    pricing: { starting: 30000, typical: 80000, enterprise: 200000 },
    timeline: "14-32 weeks",
    technologies: [
      "Docker",
      "Kubernetes",
      "Node.js",
      "Python",
      "MongoDB",
      "Redis",
    ],
    features: [
      "Service decomposition",
      "Container orchestration",
      "API gateway",
      "Service discovery",
      "Load balancing",
      "Monitoring & logging",
      "Security implementation",
      "CI/CD pipelines",
    ],
    benefits: [
      "Independent scaling",
      "Technology diversity",
      "Fault isolation",
      "Faster deployment",
      "Team autonomy",
      "Better maintainability",
    ],
    process: [
      {
        step: 1,
        title: "Architecture Assessment",
        description: "Analyze current architecture and requirements",
      },
      {
        step: 2,
        title: "Service Design",
        description: "Design microservices structure and boundaries",
      },
      {
        step: 3,
        title: "Implementation",
        description: "Develop individual microservices",
      },
      {
        step: 4,
        title: "Integration",
        description: "Integrate services and implement communication",
      },
      {
        step: 5,
        title: "Deployment",
        description: "Deploy with container orchestration",
      },
      {
        step: 6,
        title: "Monitoring",
        description: "Implement monitoring and maintenance",
      },
    ],
    faqs: [
      {
        question: "When should I consider microservices?",
        answer:
          "Microservices are ideal for complex applications that need independent scaling and deployment.",
      },
      {
        question: "How do you handle data consistency?",
        answer:
          "We implement patterns like event sourcing and CQRS to maintain data consistency across services.",
      },
    ],
    caseStudies: [
      {
        title: "E-commerce Microservices",
        client: "RetailTech",
        description: "Decomposed monolith into 15 microservices",
        results: [
          "5x faster deployments",
          "Independent scaling",
          "99.9% availability",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  // Web Development Services
  "frontend-development": {
    id: "frontend-development",
    title: "Frontend Development",
    shortDescription:
      "Modern, responsive frontend applications with exceptional user experiences",
    fullDescription:
      "Create stunning, responsive frontend applications using the latest technologies and frameworks that deliver exceptional user experiences across all devices.",
    icon: "Monitor",
    category: "Development",
    pricing: { starting: 10000, typical: 30000, enterprise: 80000 },
    timeline: "8-20 weeks",
    technologies: [
      "React",
      "Vue.js",
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
    ],
    features: [
      "Responsive design",
      "Modern UI/UX",
      "Performance optimization",
      "Cross-browser compatibility",
      "Accessibility compliance",
      "SEO optimization",
      "Progressive Web Apps",
      "Component libraries",
    ],
    benefits: [
      "Enhanced user experience",
      "Mobile-first approach",
      "Fast loading times",
      "Better engagement",
      "Improved conversions",
      "Modern design",
    ],
    process: [
      {
        step: 1,
        title: "Design Analysis",
        description: "Analyze designs and requirements",
      },
      {
        step: 2,
        title: "Technology Selection",
        description: "Choose optimal frontend technologies",
      },
      {
        step: 3,
        title: "Development",
        description: "Build responsive frontend components",
      },
      {
        step: 4,
        title: "Integration",
        description: "Integrate with backend APIs",
      },
      {
        step: 5,
        title: "Testing",
        description: "Cross-browser and device testing",
      },
      {
        step: 6,
        title: "Optimization",
        description: "Performance and SEO optimization",
      },
    ],
    faqs: [
      {
        question: "Which frontend framework is best?",
        answer:
          "The choice depends on your project requirements. We'll recommend the best framework for your needs.",
      },
      {
        question: "Do you ensure mobile responsiveness?",
        answer:
          "Yes, all our frontend applications are built with a mobile-first approach.",
      },
    ],
    caseStudies: [
      {
        title: "React Dashboard",
        client: "DataCorp",
        description: "Complex data visualization dashboard",
        results: [
          "50% faster load times",
          "95% user satisfaction",
          "Mobile responsive",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "backend-development": {
    id: "backend-development",
    title: "Backend Development",
    shortDescription: "Robust, scalable backend systems and APIs",
    fullDescription:
      "Build powerful backend systems and APIs that handle your business logic, data processing, and integrations with security, performance, and scalability in mind.",
    icon: "Server",
    category: "Development",
    pricing: { starting: 12000, typical: 35000, enterprise: 90000 },
    timeline: "10-24 weeks",
    technologies: [
      "Node.js",
      "Python",
      "Java",
      ".NET",
      "PostgreSQL",
      "MongoDB",
    ],
    features: [
      "RESTful APIs",
      "Database design",
      "Authentication & authorization",
      "Data processing",
      "Third-party integrations",
      "Performance optimization",
      "Security implementation",
      "Scalable architecture",
    ],
    benefits: [
      "Reliable performance",
      "Secure data handling",
      "Scalable infrastructure",
      "Efficient processing",
      "Seamless integrations",
      "Future-proof design",
    ],
    process: [
      {
        step: 1,
        title: "Requirements Analysis",
        description: "Analyze backend requirements and data flow",
      },
      {
        step: 2,
        title: "Architecture Design",
        description: "Design scalable backend architecture",
      },
      {
        step: 3,
        title: "Database Design",
        description: "Design efficient database schema",
      },
      {
        step: 4,
        title: "API Development",
        description: "Build robust APIs and services",
      },
      {
        step: 5,
        title: "Testing",
        description: "Comprehensive backend testing",
      },
      {
        step: 6,
        title: "Deployment",
        description: "Deploy with monitoring and scaling",
      },
    ],
    faqs: [
      {
        question: "Which backend technology should I choose?",
        answer:
          "We'll recommend the best technology based on your project requirements, scalability needs, and team expertise.",
      },
      {
        question: "How do you ensure API security?",
        answer:
          "We implement authentication, authorization, rate limiting, and other security best practices.",
      },
    ],
    caseStudies: [
      {
        title: "Scalable API Platform",
        client: "TechStartup",
        description: "High-performance API serving 1M+ requests/day",
        results: ["Sub-100ms response time", "99.99% uptime", "Auto-scaling"],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "fullstack-development": {
    id: "full-stack-development",
    title: "Full-Stack Development",
    shortDescription: "Complete end-to-end web application development",
    fullDescription:
      "Comprehensive full-stack development services covering both frontend and backend, delivering complete web applications with seamless integration.",
    icon: "Layers",
    category: "Development",
    pricing: { starting: 18000, typical: 50000, enterprise: 150000 },
    timeline: "12-30 weeks",
    technologies: [
      "React",
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "TypeScript",
      "AWS",
    ],
    features: [
      "Frontend & backend development",
      "Database design",
      "API development",
      "User authentication",
      "Payment integration",
      "Admin dashboards",
      "Real-time features",
      "Deployment & hosting",
    ],
    benefits: [
      "Complete solution",
      "Consistent architecture",
      "Faster development",
      "Single point of contact",
      "Integrated testing",
      "Unified deployment",
    ],
    process: [
      {
        step: 1,
        title: "Project Planning",
        description: "Plan full-stack architecture and requirements",
      },
      {
        step: 2,
        title: "Backend Development",
        description: "Build APIs and database systems",
      },
      {
        step: 3,
        title: "Frontend Development",
        description: "Create user interfaces and experiences",
      },
      {
        step: 4,
        title: "Integration",
        description: "Integrate frontend and backend systems",
      },
      {
        step: 5,
        title: "Testing",
        description: "End-to-end testing and quality assurance",
      },
      {
        step: 6,
        title: "Deployment",
        description: "Deploy complete application with monitoring",
      },
    ],
    faqs: [
      {
        question: "What's included in full-stack development?",
        answer:
          "Complete frontend, backend, database, APIs, and deployment - everything needed for a complete web application.",
      },
      {
        question: "Can you work with existing systems?",
        answer:
          "Yes, we can integrate with existing systems or build new applications from scratch.",
      },
    ],
    caseStudies: [
      {
        title: "SaaS Platform",
        client: "BusinessTech",
        description: "Complete SaaS platform with 10,000+ users",
        results: [
          "Multi-tenant architecture",
          "Real-time features",
          "99.9% uptime",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "progressive-web-apps": {
    id: "progressive-web-apps",
    title: "Progressive Web Apps",
    shortDescription:
      "Fast, reliable, and engaging web applications with app-like experiences",
    fullDescription:
      "Develop Progressive Web Apps (PWAs) that combine the best of web and mobile apps, offering fast, reliable, and engaging experiences across devices with offline capabilities.",
    icon: "Globe",
    category: "Development",
    pricing: { starting: 12000, typical: 35000, enterprise: 100000 },
    timeline: "10-22 weeks",
    technologies: [
      "React",
      "Service Workers",
      "WebAssembly",
      "PWA APIs",
      "TypeScript",
      "Next.js",
    ],
    features: [
      "Offline functionality",
      "Push notifications",
      "App-like experience",
      "Responsive design",
      "Fast loading",
      "SEO optimization",
      "Cross-platform compatibility",
      "Installable on devices",
    ],
    benefits: [
      "Improved user engagement",
      "Offline access",
      "Lower development costs",
      "Cross-platform support",
      "Fast performance",
      "Reduced bounce rates",
    ],
    process: [
      {
        step: 1,
        title: "Requirements Analysis",
        description: "Define PWA features and requirements",
      },
      {
        step: 2,
        title: "UI/UX Design",
        description: "Design responsive, app-like interfaces",
      },
      {
        step: 3,
        title: "Service Worker Implementation",
        description: "Build offline capabilities and caching",
      },
      {
        step: 4,
        title: "Development",
        description: "Develop PWA with modern frameworks",
      },
      {
        step: 5,
        title: "Testing",
        description: "Test across devices and network conditions",
      },
      {
        step: 6,
        title: "Deployment",
        description: "Deploy with performance optimization",
      },
    ],
    faqs: [
      {
        question: "What makes a PWA different from a regular website?",
        answer:
          "PWAs offer app-like features like offline access, push notifications, and home screen installation.",
      },
      {
        question: "Do PWAs work on all devices?",
        answer:
          "Yes, PWAs are designed to work across all modern browsers and devices.",
      },
    ],
    caseStudies: [
      {
        title: "Retail PWA",
        client: "ShopEasy",
        description: "Progressive Web App for online retail",
        results: [
          "60% increase in mobile conversions",
          "Offline shopping capability",
          "4.7 user rating",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "ecommerce-development": {
    id: "ecommerce-development",
    title: "E-commerce Development",
    shortDescription: "Custom e-commerce solutions for online retail success",
    fullDescription:
      "Build powerful, scalable e-commerce platforms with seamless payment integrations, product management, and personalized shopping experiences to drive sales and customer satisfaction.",
    icon: "ShoppingCart",
    category: "Development",
    pricing: { starting: 15000, typical: 40000, enterprise: 120000 },
    timeline: "12-28 weeks",
    technologies: [
      "Shopify",
      "WooCommerce",
      "Magento",
      "React",
      "Node.js",
      "Stripe",
    ],
    features: [
      "Custom storefront design",
      "Payment gateway integration",
      "Product catalog management",
      "Shopping cart functionality",
      "Order management",
      "Customer accounts",
      "SEO optimization",
      "Analytics dashboard",
    ],
    benefits: [
      "Increased sales",
      "Improved customer experience",
      "Scalable platform",
      "Secure transactions",
      "Easy management",
      "Higher conversions",
    ],
    process: [
      {
        step: 1,
        title: "Store Planning",
        description: "Define e-commerce requirements and features",
      },
      {
        step: 2,
        title: "Design",
        description: "Create user-friendly storefront designs",
      },
      {
        step: 3,
        title: "Development",
        description: "Build e-commerce platform and integrations",
      },
      {
        step: 4,
        title: "Integration",
        description: "Integrate payment and shipping systems",
      },
      {
        step: 5,
        title: "Testing",
        description: "Test functionality and user experience",
      },
      {
        step: 6,
        title: "Launch",
        description: "Deploy and optimize for performance",
      },
    ],
    faqs: [
      {
        question: "Can you integrate multiple payment gateways?",
        answer:
          "Yes, we support integrations with major payment gateways like Stripe, PayPal, and more.",
      },
      {
        question: "Do you provide post-launch support?",
        answer:
          "Yes, we offer ongoing maintenance and support for your e-commerce platform.",
      },
    ],
    caseStudies: [
      {
        title: "Online Marketplace",
        client: "RetailWorld",
        description: "Multi-vendor e-commerce platform",
        results: [
          "100K+ monthly transactions",
          "99.9% uptime",
          "20% sales increase",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "cms-development": {
    id: "cms-development",
    title: "CMS Development",
    shortDescription:
      "Custom content management systems for easy content updates",
    fullDescription:
      "Develop tailored content management systems that empower your team to manage and update content efficiently while maintaining flexibility and scalability.",
    icon: "FileText",
    category: "Development",
    pricing: { starting: 10000, typical: 30000, enterprise: 80000 },
    timeline: "8-20 weeks",
    technologies: [
      "WordPress",
      "Drupal",
      "Strapi",
      "React",
      "Node.js",
      "MongoDB",
    ],
    features: [
      "Custom CMS development",
      "User-friendly interface",
      "Content workflows",
      "Multi-user support",
      "SEO optimization",
      "Content versioning",
      "Media management",
      "API integrations",
    ],
    benefits: [
      "Easy content management",
      "Scalable architecture",
      "Team collaboration",
      "SEO-friendly content",
      "Reduced maintenance",
      "Custom workflows",
    ],
    process: [
      {
        step: 1,
        title: "Requirements Gathering",
        description: "Analyze content management needs",
      },
      {
        step: 2,
        title: "CMS Design",
        description: "Design custom CMS architecture",
      },
      {
        step: 3,
        title: "Development",
        description: "Build CMS with user-friendly interface",
      },
      {
        step: 4,
        title: "Integration",
        description: "Integrate with existing systems and APIs",
      },
      {
        step: 5,
        title: "Testing",
        description: "Test functionality and usability",
      },
      {
        step: 6,
        title: "Training",
        description: "Provide training and support for your team",
      },
    ],
    faqs: [
      {
        question: "Can you customize existing CMS platforms?",
        answer:
          "Yes, we can customize platforms like WordPress, Drupal, or build custom CMS solutions.",
      },
      {
        question: "Is training provided for the CMS?",
        answer:
          "Yes, we provide comprehensive training and documentation for your team.",
      },
    ],
    caseStudies: [
      {
        title: "Corporate CMS",
        client: "MediaGroup",
        description: "Custom CMS for multi-site content management",
        results: [
          "50% faster content updates",
          "99% uptime",
          "Multi-user support",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  // Mobile App Development Services
  "ios-development": {
    id: "ios-app-development",
    title: "iOS App Development",
    shortDescription: "Native iOS applications for iPhone and iPad",
    fullDescription:
      "Develop high-quality native iOS applications that leverage the full power of Apple's ecosystem, delivering exceptional user experiences on iPhone and iPad.",
    icon: "Smartphone",
    category: "Mobile",
    pricing: { starting: 15000, typical: 40000, enterprise: 120000 },
    timeline: "12-24 weeks",
    technologies: [
      "Swift",
      "SwiftUI",
      "Xcode",
      "Core Data",
      "CloudKit",
      "iOS SDK",
    ],
    features: [
      "Native iOS development",
      "App Store optimization",
      "Push notifications",
      "In-app purchases",
      "Core Data integration",
      "CloudKit sync",
      "Biometric authentication",
      "Apple Pay integration",
    ],
    benefits: [
      "Native performance",
      "iOS-specific features",
      "App Store presence",
      "Apple ecosystem integration",
      "Premium user experience",
      "High security",
    ],
    process: [
      {
        step: 1,
        title: "App Planning",
        description: "Define app requirements and iOS-specific features",
      },
      {
        step: 2,
        title: "UI/UX Design",
        description: "Design following Apple's Human Interface Guidelines",
      },
      {
        step: 3,
        title: "Development",
        description: "Native iOS development with Swift",
      },
      {
        step: 4,
        title: "Testing",
        description: "Device testing and iOS-specific testing",
      },
      {
        step: 5,
        title: "App Store Submission",
        description: "Prepare and submit to App Store",
      },
      {
        step: 6,
        title: "Maintenance",
        description: "Updates and ongoing support",
      },
    ],
    faqs: [
      {
        question: "How long does App Store approval take?",
        answer:
          "App Store review typically takes 1-7 days. We handle the entire submission process.",
      },
      {
        question: "Do you support all iOS devices?",
        answer:
          "Yes, we develop apps that work across iPhone, iPad, and other iOS devices.",
      },
    ],
    caseStudies: [
      {
        title: "Health & Fitness App",
        client: "WellnessTech",
        description: "iOS health tracking app with HealthKit integration",
        results: [
          "100K+ downloads",
          "4.8 App Store rating",
          "HealthKit integration",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "android-development": {
    id: "android-app-development",
    title: "Android App Development",
    shortDescription: "Native Android applications for smartphones and tablets",
    fullDescription:
      "Create high-performance native Android applications optimized for the diverse Android ecosystem, delivering seamless user experiences across various devices.",
    icon: "Smartphone",
    category: "Mobile",
    pricing: { starting: 15000, typical: 40000, enterprise: 120000 },
    timeline: "12-24 weeks",
    technologies: [
      "Kotlin",
      "Java",
      "Android Studio",
      "Room",
      "Firebase",
      "Android SDK",
    ],
    features: [
      "Native Android development",
      "Google Play optimization",
      "Push notifications",
      "In-app purchases",
      "Room database integration",
      "Firebase integration",
      "Material Design compliance",
      "Google Pay integration",
    ],
    benefits: [
      "Native performance",
      "Android-specific features",
      "Google Play presence",
      "Wide device compatibility",
      "Enhanced user experience",
      "Robust security",
    ],
    process: [
      {
        step: 1,
        title: "App Planning",
        description: "Define app requirements and Android-specific features",
      },
      {
        step: 2,
        title: "UI/UX Design",
        description: "Design following Material Design guidelines",
      },
      {
        step: 3,
        title: "Development",
        description: "Native Android development with Kotlin or Java",
      },
      {
        step: 4,
        title: "Testing",
        description: "Device and emulator testing for Android compatibility",
      },
      {
        step: 5,
        title: "Play Store Submission",
        description: "Prepare and submit to Google Play Store",
      },
      {
        step: 6,
        title: "Maintenance",
        description: "Provide updates and ongoing support",
      },
    ],
    faqs: [
      {
        question: "How long does Google Play approval take?",
        answer:
          "Google Play review typically takes 1-7 days. We manage the entire submission process.",
      },
      {
        question: "Do you support all Android devices?",
        answer:
          "Yes, we ensure compatibility across a wide range of Android devices and versions.",
      },
    ],
    caseStudies: [
      {
        title: "E-commerce Mobile App",
        client: "ShopNow",
        description: "Android shopping app with real-time inventory",
        results: [
          "200K+ downloads",
          "4.7 Play Store rating",
          "Firebase integration",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "cross-platform": {
    id: "cross-platform",
    title: "Cross-Platform Development",
    shortDescription: "Single codebase for both iOS and Android apps",
    fullDescription:
      "Develop cross-platform mobile applications using frameworks like React Native or Flutter, enabling a single codebase to deliver native-like experiences on both iOS and Android.",
    icon: "Smartphone",
    category: "Mobile",
    pricing: { starting: 12000, typical: 35000, enterprise: 100000 },
    timeline: "10-22 weeks",
    technologies: [
      "React Native",
      "Flutter",
      "Dart",
      "TypeScript",
      "Firebase",
      "GraphQL",
    ],
    features: [
      "Single codebase",
      "Native-like performance",
      "Cross-platform compatibility",
      "App Store and Play Store submission",
      "Push notifications",
      "API integrations",
      "UI consistency",
      "Performance optimization",
    ],
    benefits: [
      "Faster development",
      "Cost-effective",
      "Consistent user experience",
      "Easier maintenance",
      "Broad device support",
      "Reduced time-to-market",
    ],
    process: [
      {
        step: 1,
        title: "Requirement Analysis",
        description: "Define app requirements for both platforms",
      },
      {
        step: 2,
        title: "Framework Selection",
        description: "Choose optimal cross-platform framework",
      },
      {
        step: 3,
        title: "UI/UX Design",
        description: "Design consistent UI for iOS and Android",
      },
      {
        step: 4,
        title: "Development",
        description: "Build app with cross-platform framework",
      },
      {
        step: 5,
        title: "Testing",
        description: "Test on both iOS and Android devices",
      },
      {
        step: 6,
        title: "Deployment",
        description: "Submit to App Store and Google Play",
      },
    ],
    faqs: [
      {
        question: "Is cross-platform as good as native?",
        answer:
          "Cross-platform apps offer near-native performance with faster development and lower costs.",
      },
      {
        question: "Which framework do you recommend?",
        answer:
          "We recommend React Native or Flutter based on your project needs and team expertise.",
      },
    ],
    caseStudies: [
      {
        title: "Social Media App",
        client: "ConnectSphere",
        description: "Cross-platform social networking app",
        results: [
          "150K+ downloads",
          "Consistent UI across platforms",
          "50% faster development",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "react-native": {
    id: "react-native",
    title: "React Native Development",
    shortDescription: "Cross-platform apps using React Native framework",
    fullDescription:
      "Build high-performance cross-platform mobile apps with React Native, leveraging a single JavaScript codebase to deliver native-like experiences on iOS and Android.",
    icon: "Smartphone",
    category: "Mobile",
    pricing: { starting: 12000, typical: 35000, enterprise: 100000 },
    timeline: "10-22 weeks",
    technologies: [
      "React Native",
      "JavaScript",
      "TypeScript",
      "Redux",
      "Firebase",
      "GraphQL",
    ],
    features: [
      "Single codebase",
      "Native components",
      "Hot reloading",
      "App Store and Play Store support",
      "Push notifications",
      "API integrations",
      "Reusable components",
      "Performance optimization",
    ],
    benefits: [
      "Faster development",
      "Cost-effective",
      "Native-like performance",
      "Easy updates",
      "Wide device support",
      "Developer productivity",
    ],
    process: [
      {
        step: 1,
        title: "Project Planning",
        description: "Define app requirements and features",
      },
      {
        step: 2,
        title: "UI/UX Design",
        description: "Design consistent UI for both platforms",
      },
      {
        step: 3,
        title: "Development",
        description: "Build app using React Native",
      },
      {
        step: 4,
        title: "Integration",
        description: "Integrate APIs and third-party services",
      },
      {
        step: 5,
        title: "Testing",
        description: "Test on iOS and Android devices",
      },
      {
        step: 6,
        title: "Deployment",
        description: "Submit to App Store and Google Play",
      },
    ],
    faqs: [
      {
        question: "How does React Native compare to native development?",
        answer:
          "React Native offers faster development and lower costs while maintaining near-native performance.",
      },
      {
        question: "Can you integrate native modules?",
        answer:
          "Yes, we can integrate native modules for platform-specific features when needed.",
      },
    ],
    caseStudies: [
      {
        title: "Fitness Tracking App",
        client: "FitLife",
        description: "Cross-platform fitness app with React Native",
        results: [
          "100K+ downloads",
          "4.8 rating",
          "50% development time saved",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "flutter-development": {
    id: "flutter-development",
    title: "Flutter Development",
    shortDescription: "Cross-platform apps using Flutter framework",
    fullDescription:
      "Develop visually stunning cross-platform mobile apps with Flutter, using a single Dart codebase to deliver high-performance, native-like experiences on iOS and Android.",
    icon: "Smartphone",
    category: "Mobile",
    pricing: { starting: 12000, typical: 35000, enterprise: 100000 },
    timeline: "10-22 weeks",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "GraphQL",
      "Provider",
      "Bloc",
    ],
    features: [
      "Single codebase",
      "Custom widgets",
      "Fast rendering",
      "App Store and Play Store support",
      "Push notifications",
      "API integrations",
      "Rich animations",
      "High performance",
    ],
    benefits: [
      "Fast development",
      "Cost-effective",
      "Beautiful UI",
      "Native performance",
      "Cross-platform support",
      "Easy maintenance",
    ],
    process: [
      {
        step: 1,
        title: "Project Planning",
        description: "Define app requirements and features",
      },
      {
        step: 2,
        title: "UI/UX Design",
        description: "Design visually appealing UI with Flutter widgets",
      },
      {
        step: 3,
        title: "Development",
        description: "Build app using Flutter and Dart",
      },
      {
        step: 4,
        title: "Integration",
        description: "Integrate APIs and services",
      },
      {
        step: 5,
        title: "Testing",
        description: "Test on iOS and Android devices",
      },
      {
        step: 6,
        title: "Deployment",
        description: "Submit to App Store and Google Play",
      },
    ],
    faqs: [
      {
        question: "Why choose Flutter for app development?",
        answer:
          "Flutter offers fast development, beautiful UI, and high performance across platforms.",
      },
      {
        question: "Can Flutter apps have custom designs?",
        answer:
          "Yes, Flutter's widget system allows for highly customizable and visually appealing designs.",
      },
    ],
    caseStudies: [
      {
        title: "Event Management App",
        client: "EventPro",
        description: "Cross-platform event app with Flutter",
        results: ["120K+ downloads", "4.9 rating", "Rich UI animations"],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "mobile-testing": {
    id: "mobile-testing",
    title: "Mobile App Testing",
    shortDescription: "Comprehensive testing for mobile app reliability",
    fullDescription:
      "Ensure your mobile apps are reliable, performant, and bug-free with our comprehensive testing services across iOS and Android platforms.",
    icon: "CheckCircle",
    category: "Mobile",
    pricing: { starting: 8000, typical: 20000, enterprise: 60000 },
    timeline: "6-16 weeks",
    technologies: [
      "Appium",
      "Selenium",
      "XCUITest",
      "Espresso",
      "Firebase Test Lab",
      "BrowserStack",
    ],
    features: [
      "Functional testing",
      "Performance testing",
      "Usability testing",
      "Compatibility testing",
      "Security testing",
      "Automation testing",
      "Device testing",
      "Regression testing",
    ],
    benefits: [
      "Bug-free apps",
      "Improved performance",
      "Better user experience",
      "Device compatibility",
      "Enhanced security",
      "Faster release cycles",
    ],
    process: [
      {
        step: 1,
        title: "Test Planning",
        description: "Define testing scope and strategy",
      },
      {
        step: 2,
        title: "Test Case Design",
        description: "Create detailed test cases for all scenarios",
      },
      {
        step: 3,
        title: "Test Execution",
        description: "Run manual and automated tests",
      },
      {
        step: 4,
        title: "Device Testing",
        description: "Test on real devices and emulators",
      },
      {
        step: 5,
        title: "Reporting",
        description: "Provide detailed test reports and bug fixes",
      },
      {
        step: 6,
        title: "Validation",
        description: "Validate fixes and ensure quality",
      },
    ],
    faqs: [
      {
        question: "What devices do you test on?",
        answer:
          "We test on a wide range of real devices and emulators for iOS and Android.",
      },
      {
        question: "Do you provide automated testing?",
        answer:
          "Yes, we offer both manual and automated testing using tools like Appium and Selenium.",
      },
    ],
    caseStudies: [
      {
        title: "Mobile Banking App Testing",
        client: "BankSecure",
        description: "Comprehensive testing for mobile banking app",
        results: [
          "99% bug-free release",
          "100% device compatibility",
          "Secure transactions",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  // AI & Data Solutions
  "machine-learning": {
    id: "machine-learning",
    title: "Machine Learning",
    shortDescription: "Intelligent solutions powered by machine learning",
    fullDescription:
      "Leverage machine learning to build intelligent systems that learn from data, make predictions, and automate complex tasks to drive business value.",
    icon: "Brain",
    category: "AI & Data",
    pricing: { starting: 20000, typical: 60000, enterprise: 200000 },
    timeline: "12-30 weeks",
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "AWS SageMaker",
    ],
    features: [
      "Predictive modeling",
      "Data preprocessing",
      "Model training",
      "Hyperparameter tuning",
      "Model deployment",
      "Performance monitoring",
      "Feature engineering",
      "Explainable AI",
    ],
    benefits: [
      "Data-driven insights",
      "Automated decision-making",
      "Improved efficiency",
      "Predictive capabilities",
      "Scalable models",
      "Competitive advantage",
    ],
    process: [
      {
        step: 1,
        title: "Data Analysis",
        description: "Analyze data and define ML objectives",
      },
      {
        step: 2,
        title: "Data Preparation",
        description: "Clean and preprocess data for modeling",
      },
      {
        step: 3,
        title: "Model Development",
        description: "Build and train ML models",
      },
      {
        step: 4,
        title: "Model Validation",
        description: "Validate model accuracy and performance",
      },
      {
        step: 5,
        title: "Deployment",
        description: "Deploy models to production environments",
      },
      {
        step: 6,
        title: "Monitoring",
        description: "Monitor and optimize model performance",
      },
    ],
    faqs: [
      {
        question: "What types of ML models do you build?",
        answer:
          "We build supervised, unsupervised, and reinforcement learning models tailored to your needs.",
      },
      {
        question: "How much data is needed for ML?",
        answer:
          "The data requirement depends on the use case; we assess and optimize based on available data.",
      },
    ],
    caseStudies: [
      {
        title: "Predictive Maintenance System",
        client: "IndustryTech",
        description: "ML-based system for equipment failure prediction",
        results: [
          "30% reduction in downtime",
          "95% prediction accuracy",
          "Cost savings",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "artificial-intelligence": {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    shortDescription: "Advanced AI solutions for business transformation",
    fullDescription:
      "Implement cutting-edge AI solutions, including machine learning, deep learning, and cognitive computing, to automate processes and enhance business intelligence.",
    icon: "CircuitBoard",
    category: "AI & Data",
    pricing: { starting: 25000, typical: 75000, enterprise: 250000 },
    timeline: "14-36 weeks",
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "AWS AI Services",
      "Google AI",
    ],
    features: [
      "Deep learning models",
      "AI automation",
      "Cognitive services",
      "Model deployment",
      "AI integration",
      "Performance monitoring",
      "Explainable AI",
      "Scalable architecture",
    ],
    benefits: [
      "Automated workflows",
      "Enhanced decision-making",
      "Improved efficiency",
      "Scalable AI solutions",
      "Competitive edge",
      "Data-driven innovation",
    ],
    process: [
      {
        step: 1,
        title: "AI Strategy",
        description: "Define AI objectives and use cases",
      },
      {
        step: 2,
        title: "Data Preparation",
        description: "Prepare and preprocess data for AI",
      },
      {
        step: 3,
        title: "Model Development",
        description: "Build and train AI models",
      },
      {
        step: 4,
        title: "Integration",
        description: "Integrate AI into existing systems",
      },
      {
        step: 5,
        title: "Testing",
        description: "Test and validate AI performance",
      },
      {
        step: 6,
        title: "Deployment",
        description: "Deploy and monitor AI solutions",
      },
    ],
    faqs: [
      {
        question: "What industries benefit from AI?",
        answer:
          "AI benefits industries like healthcare, finance, retail, manufacturing, and more.",
      },
      {
        question: "Do you provide AI model maintenance?",
        answer:
          "Yes, we offer ongoing monitoring and optimization for AI models.",
      },
    ],
    caseStudies: [
      {
        title: "AI Chatbot",
        client: "CustomerCare",
        description: "AI-powered chatbot for customer support",
        results: [
          "80% automated responses",
          "24/7 support",
          "90% customer satisfaction",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "data-analytics": {
    id: "data-analytics",
    title: "Data Analytics",
    shortDescription: "Actionable insights from advanced data analytics",
    fullDescription:
      "Unlock actionable insights with advanced data analytics, leveraging data visualization, statistical analysis, and predictive modeling to drive informed decision-making.",
    icon: "BarChart2",
    category: "AI & Data",
    pricing: { starting: 15000, typical: 40000, enterprise: 120000 },
    timeline: "8-24 weeks",
    technologies: ["Python", "R", "Tableau", "Power BI", "SQL", "Apache Spark"],
    features: [
      "Data visualization",
      "Predictive analytics",
      "Dashboards & reporting",
      "Data cleansing",
      "Statistical analysis",
      "Real-time analytics",
      "ETL pipelines",
      "Data warehousing",
    ],
    benefits: [
      "Data-driven decisions",
      "Improved efficiency",
      "Actionable insights",
      "Real-time reporting",
      "Scalable analytics",
      "Competitive advantage",
    ],
    process: [
      {
        step: 1,
        title: "Data Assessment",
        description: "Assess data sources and analytics goals",
      },
      {
        step: 2,
        title: "Data Preparation",
        description: "Clean and preprocess data for analysis",
      },
      {
        step: 3,
        title: "Analytics Design",
        description: "Design analytics models and dashboards",
      },
      {
        step: 4,
        title: "Implementation",
        description: "Build analytics pipelines and visualizations",
      },
      {
        step: 5,
        title: "Testing",
        description: "Validate analytics accuracy and performance",
      },
      {
        step: 6,
        title: "Deployment",
        description: "Deploy analytics solutions with training",
      },
    ],
    faqs: [
      {
        question: "What types of data can you analyze?",
        answer:
          "We can analyze structured, unstructured, and semi-structured data from various sources.",
      },
      {
        question: "Do you provide real-time analytics?",
        answer:
          "Yes, we build real-time analytics solutions for dynamic insights.",
      },
    ],
    caseStudies: [
      {
        title: "Sales Analytics Dashboard",
        client: "RetailPro",
        description: "Real-time sales analytics dashboard",
        results: [
          "20% sales increase",
          "Real-time insights",
          "99% data accuracy",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "big-data": {
    id: "big-data",
    title: "Big Data Solutions",
    shortDescription: "Scalable solutions for massive data processing",
    fullDescription:
      "Harness the power of big data with scalable solutions for processing, storing, and analyzing large datasets to uncover valuable insights and drive innovation.",
    icon: "Database",
    category: "AI & Data",
    pricing: { starting: 30000, typical: 80000, enterprise: 250000 },
    timeline: "16-40 weeks",
    technologies: [
      "Hadoop",
      "Spark",
      "Kafka",
      "Snowflake",
      "AWS Redshift",
      "Google BigQuery",
    ],
    features: [
      "Data lakes",
      "ETL pipelines",
      "Distributed processing",
      "Real-time streaming",
      "Data warehousing",
      "Scalable storage",
      "Analytics integration",
      "Security compliance",
    ],
    benefits: [
      "Handle massive datasets",
      "Real-time insights",
      "Scalable infrastructure",
      "Cost-effective storage",
      "Data-driven decisions",
      "Improved performance",
    ],
    process: [
      {
        step: 1,
        title: "Data Strategy",
        description: "Define big data goals and architecture",
      },
      {
        step: 2,
        title: "Data Ingestion",
        description: "Set up data ingestion pipelines",
      },
      {
        step: 3,
        title: "Infrastructure Setup",
        description: "Build scalable big data infrastructure",
      },
      {
        step: 4,
        title: "Processing",
        description: "Implement distributed processing systems",
      },
      {
        step: 5,
        title: "Testing",
        description: "Validate data integrity and performance",
      },
      {
        step: 6,
        title: "Deployment",
        description: "Deploy and optimize big data solutions",
      },
    ],
    faqs: [
      {
        question: "What qualifies as big data?",
        answer:
          "Big data refers to large, complex datasets that require advanced processing tools.",
      },
      {
        question: "Can you integrate big data with existing systems?",
        answer:
          "Yes, we ensure seamless integration with your existing data infrastructure.",
      },
    ],
    caseStudies: [
      {
        title: "IoT Data Platform",
        client: "SmartTech",
        description: "Big data platform for IoT device analytics",
        results: [
          "1B+ data points processed",
          "99.9% uptime",
          "Real-time analytics",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "computer-vision": {
    id: "computer-vision",
    title: "Computer Vision",
    shortDescription: "Advanced image and video analysis solutions",
    fullDescription:
      "Implement computer vision solutions to analyze, interpret, and extract insights from images and videos, enabling automation and enhanced decision-making.",
    icon: "Eye",
    category: "AI & Data",
    pricing: { starting: 20000, typical: 60000, enterprise: 180000 },
    timeline: "12-28 weeks",
    technologies: [
      "OpenCV",
      "TensorFlow",
      "PyTorch",
      "YOLO",
      "AWS Rekognition",
      "Google Vision",
    ],
    features: [
      "Image recognition",
      "Object detection",
      "Facial recognition",
      "Video analytics",
      "OCR processing",
      "Real-time processing",
      "Model deployment",
      "API integration",
    ],
    benefits: [
      "Automated visual analysis",
      "Enhanced accuracy",
      "Real-time insights",
      "Scalable solutions",
      "Improved efficiency",
      "Innovative applications",
    ],
    process: [
      {
        step: 1,
        title: "Vision Requirements",
        description: "Define computer vision objectives",
      },
      {
        step: 2,
        title: "Data Preparation",
        description: "Prepare image and video datasets",
      },
      {
        step: 3,
        title: "Model Development",
        description: "Build and train vision models",
      },
      {
        step: 4,
        title: "Integration",
        description: "Integrate vision models with systems",
      },
      {
        step: 5,
        title: "Testing",
        description: "Validate model accuracy and performance",
      },
      {
        step: 6,
        title: "Deployment",
        description: "Deploy and monitor vision solutions",
      },
    ],
    faqs: [
      {
        question: "What are common computer vision applications?",
        answer:
          "Applications include facial recognition, object detection, OCR, and video analytics.",
      },
      {
        question: "Do you provide real-time vision processing?",
        answer:
          "Yes, we build solutions for real-time image and video analysis.",
      },
    ],
    caseStudies: [
      {
        title: "Retail Vision System",
        client: "StoreSmart",
        description: "Computer vision for inventory tracking",
        results: [
          "95% detection accuracy",
          "50% faster inventory",
          "Real-time monitoring",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  nlp: {
    id: "nlp",
    title: "Natural Language Processing",
    shortDescription: "Intelligent text and speech processing solutions",
    fullDescription:
      "Leverage natural language processing to analyze and understand text and speech, enabling chatbots, sentiment analysis, and automated text processing.",
    icon: "MessageSquare",
    category: "AI & Data",
    pricing: { starting: 20000, typical: 60000, enterprise: 180000 },
    timeline: "12-28 weeks",
    technologies: [
      "Python",
      "NLTK",
      "SpaCy",
      "BERT",
      "AWS Comprehend",
      "Google NLP",
    ],
    features: [
      "Text analysis",
      "Sentiment analysis",
      "Chatbot development",
      "Speech recognition",
      "Text summarization",
      "Entity recognition",
      "Language translation",
      "API integration",
    ],
    benefits: [
      "Automated text processing",
      "Improved customer support",
      "Actionable insights",
      "Scalable solutions",
      "Multilingual support",
      "Enhanced engagement",
    ],
    process: [
      {
        step: 1,
        title: "NLP Objectives",
        description: "Define NLP goals and use cases",
      },
      {
        step: 2,
        title: "Data Preparation",
        description: "Prepare text and speech datasets",
      },
      {
        step: 3,
        title: "Model Development",
        description: "Build and train NLP models",
      },
      {
        step: 4,
        title: "Integration",
        description: "Integrate NLP models with systems",
      },
      {
        step: 5,
        title: "Testing",
        description: "Validate NLP accuracy and performance",
      },
      {
        step: 6,
        title: "Deployment",
        description: "Deploy and monitor NLP solutions",
      },
    ],
    faqs: [
      {
        question: "What are common NLP applications?",
        answer:
          "Applications include chatbots, sentiment analysis, text summarization, and translation.",
      },
      {
        question: "Can NLP handle multiple languages?",
        answer: "Yes, we build NLP solutions with multilingual support.",
      },
    ],
    caseStudies: [
      {
        title: "Customer Support Chatbot",
        client: "ServicePro",
        description: "NLP-powered chatbot for customer queries",
        results: [
          "85% automated responses",
          "24/7 support",
          "90% satisfaction rate",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  // Cloud & DevOps
  "cloud-migration": {
    id: "cloud-migration",
    title: "Cloud Migration",
    shortDescription: "Seamless migration to cloud platforms",
    fullDescription:
      "Migrate your applications and infrastructure to the cloud with minimal downtime, ensuring scalability, security, and cost-efficiency.",
    icon: "Cloud",
    category: "Cloud & DevOps",
    pricing: { starting: 20000, typical: 60000, enterprise: 180000 },
    timeline: "12-28 weeks",
    technologies: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
    features: [
      "Cloud assessment",
      "Migration strategy",
      "Data migration",
      "Application migration",
      "Security configuration",
      "Performance optimization",
      "Cost management",
      "24/7 support",
    ],
    benefits: [
      "Scalable infrastructure",
      "Cost savings",
      "Enhanced security",
      "High availability",
      "Improved performance",
      "Future-proof architecture",
    ],
    process: [
      {
        step: 1,
        title: "Cloud Assessment",
        description: "Assess current infrastructure and cloud needs",
      },
      {
        step: 2,
        title: "Migration Planning",
        description: "Design comprehensive migration strategy",
      },
      {
        step: 3,
        title: "Infrastructure Setup",
        description: "Set up cloud infrastructure",
      },
      {
        step: 4,
        title: "Migration Execution",
        description: "Migrate data and applications",
      },
      {
        step: 5,
        title: "Testing",
        description: "Validate cloud performance and functionality",
      },
      {
        step: 6,
        title: "Optimization",
        description: "Optimize cloud costs and performance",
      },
    ],
    faqs: [
      {
        question: "How do you ensure minimal downtime?",
        answer:
          "We use phased migrations and parallel systems to minimize disruptions.",
      },
      {
        question: "Which cloud platform is best?",
        answer:
          "We recommend AWS, Azure, or Google Cloud based on your specific needs.",
      },
    ],
    caseStudies: [
      {
        title: "Enterprise Cloud Migration",
        client: "GlobalTech",
        description: "Migrated 50+ applications to AWS",
        results: ["Zero downtime", "40% cost savings", "99.9% availability"],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "aws-solutions": {
    id: "aws-solutions",
    title: "AWS Solutions",
    shortDescription: "Tailored solutions on Amazon Web Services",
    fullDescription:
      "Build, deploy, and manage scalable, secure, and cost-effective solutions using Amazon Web Services (AWS) to meet your business needs.",
    icon: "Cloud",
    category: "Cloud & DevOps",
    pricing: { starting: 20000, typical: 60000, enterprise: 200000 },
    timeline: "12-30 weeks",
    technologies: [
      "AWS EC2",
      "AWS Lambda",
      "S3",
      "RDS",
      "Elastic Kubernetes Service",
      "CloudFormation",
    ],
    features: [
      "Scalable infrastructure",
      "Serverless computing",
      "Storage solutions",
      "Database management",
      "Security compliance",
      "Cost optimization",
      "High availability",
      "Monitoring & analytics",
    ],
    benefits: [
      "Flexible scalability",
      "Cost-effective",
      "Robust security",
      "Global reach",
      "High reliability",
      "Fast deployment",
    ],
    process: [
      {
        step: 1,
        title: "AWS Assessment",
        description: "Assess AWS requirements and architecture",
      },
      {
        step: 2,
        title: "Solution Design",
        description: "Design AWS-based architecture",
      },
      {
        step: 3,
        title: "Implementation",
        description: "Build and configure AWS services",
      },
      {
        step: 4,
        title: "Integration",
        description: "Integrate with existing systems",
      },
      {
        step: 5,
        title: "Testing",
        description: "Validate AWS solution performance",
      },
      {
        step: 6,
        title: "Optimization",
        description: "Optimize costs and performance",
      },
    ],
    faqs: [
      {
        question: "What AWS services do you use?",
        answer:
          "We leverage EC2, Lambda, S3, RDS, and more based on your needs.",
      },
      {
        question: "How do you manage AWS costs?",
        answer:
          "We use cost optimization tools and strategies to minimize expenses.",
      },
    ],
    caseStudies: [
      {
        title: "AWS SaaS Platform",
        client: "CloudApp",
        description: "Scalable SaaS platform on AWS",
        results: ["99.99% uptime", "50% cost reduction", "Global deployment"],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "azure-solutions": {
    id: "azure-solutions",
    title: "Azure Solutions",
    shortDescription: "Custom solutions on Microsoft Azure",
    fullDescription:
      "Design and deploy scalable, secure, and efficient solutions using Microsoft Azure, tailored to your business requirements and integrated with existing systems.",
    icon: "Cloud",
    category: "Cloud & DevOps",
    pricing: { starting: 20000, typical: 60000, enterprise: 200000 },
    timeline: "12-30 weeks",
    technologies: [
      "Azure VMs",
      "Azure Functions",
      "Blob Storage",
      "Azure SQL",
      "AKS",
      "Azure DevOps",
    ],
    features: [
      "Scalable compute",
      "Serverless architecture",
      "Storage solutions",
      "Database management",
      "Security compliance",
      "Cost management",
      "High availability",
      "Monitoring & analytics",
    ],
    benefits: [
      "Seamless scalability",
      "Cost efficiency",
      "Enterprise-grade security",
      "Global availability",
      "Reliable performance",
      "Fast deployment",
    ],
    process: [
      {
        step: 1,
        title: "Azure Assessment",
        description: "Assess Azure requirements and architecture",
      },
      {
        step: 2,
        title: "Solution Design",
        description: "Design Azure-based architecture",
      },
      {
        step: 3,
        title: "Implementation",
        description: "Build and configure Azure services",
      },
      {
        step: 4,
        title: "Integration",
        description: "Integrate with existing systems",
      },
      {
        step: 5,
        title: "Testing",
        description: "Validate Azure solution performance",
      },
      {
        step: 6,
        title: "Optimization",
        description: "Optimize costs and performance",
      },
    ],
    faqs: [
      {
        question: "What Azure services do you use?",
        answer:
          "We use Azure VMs, Functions, Blob Storage, SQL, AKS, and more based on your needs.",
      },
      {
        question: "Can you integrate Azure with on-premises systems?",
        answer: "Yes, we ensure seamless integration with hybrid environments.",
      },
    ],
    caseStudies: [
      {
        title: "Azure ERP System",
        client: "EnterpriseTech",
        description: "Scalable ERP solution on Azure",
        results: ["99.9% uptime", "40% cost savings", "Global access"],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "gcp-solutions": {
    id: "gcp-solutions",
    title: "Google Cloud Platform Solutions",
    shortDescription: "Innovative solutions on Google Cloud Platform",
    fullDescription:
      "Leverage Google Cloud Platform (GCP) to build scalable, secure, and innovative solutions that harness Google's powerful infrastructure and AI capabilities.",
    icon: "Cloud",
    category: "Cloud & DevOps",
    pricing: { starting: 20000, typical: 60000, enterprise: 200000 },
    timeline: "12-30 weeks",
    technologies: [
      "GCP Compute Engine",
      "Cloud Functions",
      "Cloud Storage",
      "BigQuery",
      "GKE",
      "Cloud Build",
    ],
    features: [
      "Scalable compute",
      "Serverless functions",
      "Storage solutions",
      "Data analytics",
      "Kubernetes orchestration",
      "Security compliance",
      "Cost optimization",
      "AI integration",
    ],
    benefits: [
      "High scalability",
      "Cost-effective",
      "Advanced AI capabilities",
      "Global infrastructure",
      "Reliable performance",
      "Fast deployment",
    ],
    process: [
      {
        step: 1,
        title: "GCP Assessment",
        description: "Assess GCP requirements and architecture",
      },
      {
        step: 2,
        title: "Solution Design",
        description: "Design GCP-based architecture",
      },
      {
        step: 3,
        title: "Implementation",
        description: "Build and configure GCP services",
      },
      {
        step: 4,
        title: "Integration",
        description: "Integrate with existing systems",
      },
      {
        step: 5,
        title: "Testing",
        description: "Validate GCP solution performance",
      },
      {
        step: 6,
        title: "Optimization",
        description: "Optimize costs and performance",
      },
    ],
    faqs: [
      {
        question: "What makes GCP different?",
        answer:
          "GCP offers advanced AI, analytics, and a global infrastructure for innovative solutions.",
      },
      {
        question: "Do you support GCP AI services?",
        answer:
          "Yes, we integrate GCP's AI and machine learning services for advanced functionality.",
      },
    ],
    caseStudies: [
      {
        title: "GCP Analytics Platform",
        client: "DataInsight",
        description: "BigQuery-based analytics platform",
        results: ["99.9% uptime", "Real-time analytics", "50% cost savings"],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  devops: {
    id: "devops",
    title: "DevOps Implementation",
    shortDescription: "Streamlined DevOps practices for faster delivery",
    fullDescription:
      "Implement DevOps practices to streamline development, deployment, and operations, enabling faster delivery, improved collaboration, and reliable software releases.",
    icon: "GitBranch",
    category: "Cloud & DevOps",
    pricing: { starting: 15000, typical: 40000, enterprise: 120000 },
    timeline: "10-24 weeks",
    technologies: [
      "Jenkins",
      "GitLab",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Ansible",
    ],
    features: [
      "CI/CD pipelines",
      "Container orchestration",
      "Infrastructure automation",
      "Monitoring & logging",
      "Automated testing",
      "Version control",
      "Release management",
      "Collaboration tools",
    ],
    benefits: [
      "Faster releases",
      "Improved collaboration",
      "Reliable deployments",
      "Scalable infrastructure",
      "Reduced downtime",
      "Enhanced quality",
    ],
    process: [
      {
        step: 1,
        title: "DevOps Assessment",
        description: "Assess current processes and DevOps needs",
      },
      {
        step: 2,
        title: "Pipeline Design",
        description: "Design CI/CD pipelines and automation",
      },
      {
        step: 3,
        title: "Implementation",
        description: "Set up DevOps tools and infrastructure",
      },
      {
        step: 4,
        title: "Integration",
        description: "Integrate with development and operations",
      },
      {
        step: 5,
        title: "Testing",
        description: "Validate pipelines and automation",
      },
      {
        step: 6,
        title: "Training",
        description: "Train teams on DevOps practices",
      },
    ],
    faqs: [
      {
        question: "What tools do you use for DevOps?",
        answer:
          "We use Jenkins, GitLab, Docker, Kubernetes, and more based on your needs.",
      },
      {
        question: "How does DevOps improve delivery?",
        answer:
          "DevOps automates and streamlines processes for faster, reliable releases.",
      },
    ],
    caseStudies: [
      {
        title: "DevOps Transformation",
        client: "TechFlow",
        description: "Implemented CI/CD for 20+ applications",
        results: [
          "5x faster deployments",
          "99.9% reliability",
          "Team collaboration",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "infrastructure-as-code": {
    id: "infrastructure-as-code",
    title: "Infrastructure as Code",
    shortDescription: "Automated infrastructure management with code",
    fullDescription:
      "Manage and provision infrastructure through code using tools like Terraform and Ansible, ensuring consistency, scalability, and repeatability.",
    icon: "Code",
    category: "Cloud & DevOps",
    pricing: { starting: 15000, typical: 40000, enterprise: 120000 },
    timeline: "10-24 weeks",
    technologies: [
      "Terraform",
      "Ansible",
      "AWS CloudFormation",
      "Azure ARM",
      "Pulumi",
      "Docker",
    ],
    features: [
      "Infrastructure automation",
      "Version-controlled configs",
      "Scalable deployments",
      "Cloud-agnostic setups",
      "Configuration management",
      "Resource provisioning",
      "Security compliance",
      "Cost optimization",
    ],
    benefits: [
      "Consistent environments",
      "Faster provisioning",
      "Reduced errors",
      "Scalable infrastructure",
      "Version control",
      "Cost efficiency",
    ],
    process: [
      {
        step: 1,
        title: "IaC Assessment",
        description: "Assess infrastructure and automation needs",
      },
      {
        step: 2,
        title: "IaC Design",
        description: "Design infrastructure code and templates",
      },
      {
        step: 3,
        title: "Implementation",
        description: "Write and test IaC scripts",
      },
      {
        step: 4,
        title: "Deployment",
        description: "Provision infrastructure using IaC",
      },
      {
        step: 5,
        title: "Validation",
        description: "Validate infrastructure functionality",
      },
      {
        step: 6,
        title: "Maintenance",
        description: "Manage and update IaC scripts",
      },
    ],
    faqs: [
      {
        question: "What is Infrastructure as Code?",
        answer:
          "IaC is managing infrastructure through code for automation and consistency.",
      },
      {
        question: "Which IaC tools do you use?",
        answer:
          "We use Terraform, Ansible, CloudFormation, and others based on your needs.",
      },
    ],
    caseStudies: [
      {
        title: "Cloud IaC Setup",
        client: "InfraTech",
        description: "Automated AWS infrastructure with Terraform",
        results: [
          "50% faster provisioning",
          "99.9% consistency",
          "Cost optimized",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  // UI/UX Design
  "ux-design": {
    id: "ux-design",
    title: "User Experience Design",
    shortDescription: "User-centered designs for intuitive experiences",
    fullDescription:
      "Create intuitive, user-centered experiences through research, wireframing, and iterative design to ensure seamless and engaging interactions.",
    icon: "Users",
    category: "Design",
    pricing: { starting: 8000, typical: 25000, enterprise: 75000 },
    timeline: "6-16 weeks",
    technologies: [
      "Figma",
      "Sketch",
      "Adobe XD",
      "InVision",
      "Miro",
      "UserTesting",
    ],
    features: [
      "User research",
      "Wireframing",
      "Prototyping",
      "User flows",
      "Usability testing",
      "Interaction design",
      "Accessibility compliance",
      "Iterative design",
    ],
    benefits: [
      "Intuitive interfaces",
      "Higher user satisfaction",
      "Improved engagement",
      "Reduced user errors",
      "Better conversions",
      "Accessible design",
    ],
    process: [
      {
        step: 1,
        title: "User Research",
        description: "Conduct user interviews and research",
      },
      {
        step: 2,
        title: "Wireframing",
        description: "Create wireframes and user flows",
      },
      {
        step: 3,
        title: "Prototyping",
        description: "Build interactive prototypes",
      },
      {
        step: 4,
        title: "Testing",
        description: "Conduct usability testing with users",
      },
      {
        step: 5,
        title: "Iteration",
        description: "Refine designs based on feedback",
      },
      {
        step: 6,
        title: "Handoff",
        description: "Deliver design assets to developers",
      },
    ],
    faqs: [
      {
        question: "How do you ensure user-friendly designs?",
        answer:
          "We conduct user research and iterative testing to optimize UX.",
      },
      {
        question: "Do you design for accessibility?",
        answer: "Yes, we ensure designs meet WCAG accessibility standards.",
      },
    ],
    caseStudies: [
      {
        title: "SaaS UX Redesign",
        client: "AppFlow",
        description: "Redesigned UX for SaaS platform",
        results: [
          "40% user engagement increase",
          "95% satisfaction",
          "Accessible design",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "ui-design": {
    id: "ui-design",
    title: "User Interface Design",
    shortDescription: "Visually appealing and functional UI designs",
    fullDescription:
      "Design visually appealing and functional user interfaces that align with your brand and enhance user interactions across platforms.",
    icon: "Layout",
    category: "Design",
    pricing: { starting: 8000, typical: 25000, enterprise: 75000 },
    timeline: "6-16 weeks",
    technologies: ["Figma", "Sketch", "Adobe XD", "InVision", "Zeplin", "Miro"],
    features: [
      "Visual design",
      "Brand consistency",
      "Responsive layouts",
      "Design systems",
      "Interactive elements",
      "Style guides",
      "Asset creation",
      "Developer handoff",
    ],
    benefits: [
      "Attractive interfaces",
      "Brand alignment",
      "Enhanced usability",
      "Consistent design",
      "Improved engagement",
      "Streamlined development",
    ],
    process: [
      {
        step: 1,
        title: "Brand Analysis",
        description: "Analyze brand guidelines and UI requirements",
      },
      {
        step: 2,
        title: "Wireframe Integration",
        description: "Integrate UI with wireframes and prototypes",
      },
      {
        step: 3,
        title: "Visual Design",
        description: "Create high-fidelity UI designs",
      },
      {
        step: 4,
        title: "Feedback",
        description: "Gather feedback and iterate designs",
      },
      {
        step: 5,
        title: "Asset Creation",
        description: "Prepare design assets for development",
      },
      {
        step: 6,
        title: "Handoff",
        description: "Deliver UI assets and style guides to developers",
      },
    ],
    faqs: [
      {
        question: "How do you ensure brand consistency?",
        answer:
          "We align UI designs with your brand guidelines and create style guides for consistency.",
      },
      {
        question: "Can you design for multiple platforms?",
        answer:
          "Yes, we create responsive UI designs for web, mobile, and other platforms.",
      },
    ],
    caseStudies: [
      {
        title: "E-commerce UI Design",
        client: "ShopTrend",
        description: "Modern UI for e-commerce platform",
        results: [
          "50% engagement increase",
          "Consistent brand look",
          "95% user satisfaction",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "design-systems": {
    id: "design-systems",
    title: "Design Systems",
    shortDescription: "Scalable and consistent design systems for your brand",
    fullDescription:
      "Build comprehensive design systems that ensure consistency, scalability, and efficiency in UI/UX design across your digital products.",
    icon: "Box",
    category: "Design",
    pricing: { starting: 10000, typical: 30000, enterprise: 90000 },
    timeline: "8-20 weeks",
    technologies: [
      "Figma",
      "Sketch",
      "Storybook",
      "ZeroHeight",
      "Adobe XD",
      "Zeplin",
    ],
    features: [
      "Component libraries",
      "Style guides",
      "Pattern libraries",
      "Design tokens",
      "UI documentation",
      "Version control",
      "Team collaboration",
      "Developer handoff",
    ],
    benefits: [
      "Consistent design",
      "Faster development",
      "Scalable UI",
      "Reduced design debt",
      "Team efficiency",
      "Brand coherence",
    ],
    process: [
      {
        step: 1,
        title: "Design Audit",
        description: "Assess existing designs and brand guidelines",
      },
      {
        step: 2,
        title: "Component Planning",
        description: "Plan design system components and patterns",
      },
      {
        step: 3,
        title: "System Development",
        description: "Build design system with reusable components",
      },
      {
        step: 4,
        title: "Documentation",
        description: "Create comprehensive UI documentation",
      },
      {
        step: 5,
        title: "Testing",
        description: "Validate system usability and consistency",
      },
      {
        step: 6,
        title: "Maintenance",
        description: "Provide ongoing updates and support",
      },
    ],
    faqs: [
      {
        question: "What is a design system?",
        answer:
          "A design system is a collection of reusable components and guidelines for consistent UI/UX.",
      },
      {
        question: "How does a design system help development?",
        answer:
          "It streamlines design and development with reusable, consistent components.",
      },
    ],
    caseStudies: [
      {
        title: "Enterprise Design System",
        client: "CorpDesign",
        description: "Comprehensive design system for 10+ products",
        results: [
          "60% faster UI development",
          "Consistent branding",
          "Team alignment",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  prototyping: {
    id: "prototyping",
    title: "Prototyping",
    shortDescription: "Interactive prototypes for rapid validation",
    fullDescription:
      "Create interactive prototypes to validate ideas, test usability, and refine user experiences before full-scale development, saving time and resources.",
    icon: "MousePointer",
    category: "Design",
    pricing: { starting: 5000, typical: 15000, enterprise: 50000 },
    timeline: "4-12 weeks",
    technologies: [
      "Figma",
      "Adobe XD",
      "InVision",
      "Proto.io",
      "Marvel",
      "Axure",
    ],
    features: [
      "Interactive prototypes",
      "User flow mapping",
      "Click-through demos",
      "Responsive designs",
      "Stakeholder feedback",
      "Usability testing",
      "Design iteration",
      "Developer handoff",
    ],
    benefits: [
      "Rapid validation",
      "Reduced development costs",
      "Improved usability",
      "Stakeholder alignment",
      "Faster iterations",
      "Clear requirements",
    ],
    process: [
      {
        step: 1,
        title: "Concept Gathering",
        description: "Understand project goals and requirements",
      },
      {
        step: 2,
        title: "Wireframing",
        description: "Create low-fidelity wireframes",
      },
      {
        step: 3,
        title: "Prototype Development",
        description: "Build interactive high-fidelity prototypes",
      },
      {
        step: 4,
        title: "Testing",
        description: "Conduct usability testing with stakeholders",
      },
      {
        step: 5,
        title: "Iteration",
        description: "Refine prototypes based on feedback",
      },
      {
        step: 6,
        title: "Handoff",
        description: "Deliver prototypes and assets to developers",
      },
    ],
    faqs: [
      {
        question: "How long does prototyping take?",
        answer:
          "Prototyping typically takes 4-12 weeks, depending on complexity and feedback cycles.",
      },
      {
        question: "Can prototypes be used for user testing?",
        answer:
          "Yes, our prototypes are interactive and designed for usability testing.",
      },
    ],
    caseStudies: [
      {
        title: "Mobile App Prototype",
        client: "AppStart",
        description: "Interactive prototype for mobile app",
        results: [
          "80% faster validation",
          "95% stakeholder approval",
          "Clear UX path",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "usability-testing": {
    id: "usability-testing",
    title: "Usability Testing",
    shortDescription: "Validate designs with real user testing",
    fullDescription:
      "Conduct thorough usability testing to validate designs, identify pain points, and ensure intuitive user experiences for your digital products.",
    icon: "UserCheck",
    category: "Design",
    pricing: { starting: 5000, typical: 15000, enterprise: 50000 },
    timeline: "4-12 weeks",
    technologies: [
      "UserTesting",
      "Lookback",
      "Hotjar",
      "Figma",
      "Google Analytics",
      "SurveyMonkey",
    ],
    features: [
      "User testing sessions",
      "Heatmaps & analytics",
      "Feedback collection",
      "Usability metrics",
      "A/B testing",
      "Remote testing",
      "In-person testing",
      "Actionable insights",
    ],
    benefits: [
      "Improved usability",
      "Higher user satisfaction",
      "Reduced user errors",
      "Data-driven design",
      "Better engagement",
      "Optimized conversions",
    ],
    process: [
      {
        step: 1,
        title: "Test Planning",
        description: "Define testing goals and user profiles",
      },
      {
        step: 2,
        title: "Test Design",
        description: "Create test scenarios and tasks",
      },
      {
        step: 3,
        title: "User Recruitment",
        description: "Recruit target users for testing",
      },
      {
        step: 4,
        title: "Testing",
        description: "Conduct usability testing sessions",
      },
      {
        step: 5,
        title: "Analysis",
        description: "Analyze results and identify issues",
      },
      {
        step: 6,
        title: "Recommendations",
        description: "Provide actionable design improvements",
      },
    ],
    faqs: [
      {
        question: "How many users are needed for testing?",
        answer:
          "Typically 5-10 users per round, but we customize based on project needs.",
      },
      {
        question: "Do you conduct remote usability testing?",
        answer:
          "Yes, we offer both remote and in-person usability testing options.",
      },
    ],
    caseStudies: [
      {
        title: "Website Usability Testing",
        client: "WebCorp",
        description: "Usability testing for corporate website",
        results: [
          "30% usability improvement",
          "90% user satisfaction",
          "Reduced bounce rate",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },

  "brand-identity": {
    id: "brand-identity",
    title: "Brand Identity",
    shortDescription: "Create a cohesive and memorable brand identity",
    fullDescription:
      "Develop a strong, cohesive brand identity with logos, color schemes, typography, and guidelines to ensure consistent and impactful brand presence.",
    icon: "Palette",
    category: "Design",
    pricing: { starting: 5000, typical: 15000, enterprise: 50000 },
    timeline: "4-12 weeks",
    technologies: [
      "Adobe Illustrator",
      "Figma",
      "Canva",
      "Photoshop",
      "Brand Guidelines Tools",
    ],
    features: [
      "Logo design",
      "Color palette creation",
      "Typography selection",
      "Brand guidelines",
      "Visual assets",
      "Style guides",
      "Brand collateral",
      "Digital & print assets",
    ],
    benefits: [
      "Memorable brand",
      "Consistent identity",
      "Increased recognition",
      "Professional look",
      "Unified marketing",
      "Customer trust",
    ],
    process: [
      {
        step: 1,
        title: "Brand Discovery",
        description: "Understand brand vision and values",
      },
      {
        step: 2,
        title: "Concept Development",
        description: "Create initial brand concepts",
      },
      {
        step: 3,
        title: "Design Creation",
        description: "Design logos, colors, and typography",
      },
      {
        step: 4,
        title: "Feedback",
        description: "Gather feedback and refine designs",
      },
      {
        step: 5,
        title: "Guidelines",
        description: "Develop comprehensive brand guidelines",
      },
      {
        step: 6,
        title: "Delivery",
        description: "Deliver brand assets and guidelines",
      },
    ],
    faqs: [
      {
        question: "What is included in brand identity?",
        answer:
          "Logos, color palettes, typography, and guidelines for consistent brand use.",
      },
      {
        question: "Can you update an existing brand?",
        answer:
          "Yes, we can refresh or completely overhaul existing brand identities.",
      },
    ],
    caseStudies: [
      {
        title: "Startup Brand Identity",
        client: "NewVenture",
        description: "Complete brand identity for startup",
        results: [
          "90% brand recognition",
          "Cohesive visuals",
          "Increased trust",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
};
