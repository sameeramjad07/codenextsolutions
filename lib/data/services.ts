export const servicesData = {
  "custom-software-development": {
    id: "custom-software-development",
    title: "Custom Software Development",
    shortDescription:
      "Tailored software solutions built from the ground up to meet your unique business requirements",
    fullDescription:
      "We create bespoke software solutions that perfectly align with your business processes, goals, and vision. Our custom development approach ensures scalability, security, and performance while delivering exactly what your organization needs.",
    icon: "Code2",
    category: "Development",
    pricing: {
      starting: 15000,
      typical: 45000,
      enterprise: 150000,
    },
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
      {
        question: "Can you integrate with our existing systems?",
        answer:
          "Absolutely. We specialize in creating solutions that seamlessly integrate with your current technology stack and business processes.",
      },
      {
        question: "What ongoing support do you provide?",
        answer:
          "We offer various support packages including bug fixes, updates, performance monitoring, and feature enhancements.",
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
      {
        title: "Financial Trading Platform",
        client: "InvestPro",
        description: "Real-time trading platform with advanced analytics",
        results: [
          "Sub-second trade execution",
          "500% increase in user engagement",
          "$2M+ daily trading volume",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  "web-development": {
    id: "web-development",
    title: "Web Development",
    shortDescription:
      "Modern, responsive web applications that deliver exceptional user experiences",
    fullDescription:
      "We build cutting-edge web applications using the latest technologies and frameworks. From simple websites to complex web platforms, we ensure your digital presence is fast, secure, and user-friendly.",
    icon: "Globe",
    category: "Development",
    pricing: {
      starting: 8000,
      typical: 25000,
      enterprise: 80000,
    },
    timeline: "6-16 weeks",
    technologies: [
      "React",
      "Next.js",
      "Vue.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    features: [
      "Responsive design",
      "Progressive Web Apps",
      "SEO optimization",
      "Performance optimization",
      "Cross-browser compatibility",
      "Content management systems",
      "E-commerce integration",
      "Analytics implementation",
    ],
    benefits: [
      "Enhanced online presence",
      "Improved user engagement",
      "Better search engine rankings",
      "Mobile-first approach",
      "Fast loading times",
      "Scalable architecture",
    ],
    process: [
      {
        step: 1,
        title: "Planning & Strategy",
        description:
          "Define goals, target audience, and technical requirements",
      },
      {
        step: 2,
        title: "Design & Prototyping",
        description: "Create wireframes, mockups, and interactive prototypes",
      },
      {
        step: 3,
        title: "Development",
        description: "Build responsive, performant web applications",
      },
      {
        step: 4,
        title: "Testing",
        description: "Cross-browser testing, performance optimization, and QA",
      },
      {
        step: 5,
        title: "Launch",
        description: "Deploy to production with monitoring and analytics",
      },
      {
        step: 6,
        title: "Optimization",
        description: "Ongoing performance monitoring and improvements",
      },
    ],
    faqs: [
      {
        question: "Do you build responsive websites?",
        answer:
          "Yes, all our websites are built with a mobile-first approach and are fully responsive across all devices.",
      },
      {
        question: "Can you help with SEO?",
        answer:
          "Absolutely. We implement SEO best practices including technical SEO, page speed optimization, and structured data.",
      },
      {
        question: "Do you provide hosting services?",
        answer:
          "We can help you choose and set up hosting solutions, though we recommend cloud platforms like Vercel, AWS, or Azure for optimal performance.",
      },
      {
        question: "How do you ensure website security?",
        answer:
          "We implement security best practices including HTTPS, secure authentication, data encryption, and regular security audits.",
      },
    ],
    caseStudies: [
      {
        title: "E-commerce Platform",
        client: "RetailMax",
        description: "Multi-vendor e-commerce platform with advanced features",
        results: [
          "300% increase in online sales",
          "50% reduction in cart abandonment",
          "99.9% uptime",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Educational Portal",
        client: "EduTech Academy",
        description: "Learning management system for online education",
        results: [
          "10,000+ active students",
          "95% user satisfaction",
          "40% improvement in completion rates",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  "mobile-app-development": {
    id: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription:
      "Native and cross-platform mobile applications for iOS and Android",
    fullDescription:
      "We develop high-performance mobile applications that provide seamless user experiences across iOS and Android platforms. Whether you need a native app or cross-platform solution, we deliver apps that users love.",
    icon: "Smartphone",
    category: "Development",
    pricing: {
      starting: 12000,
      typical: 35000,
      enterprise: 120000,
    },
    timeline: "10-20 weeks",
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "Redux",
    ],
    features: [
      "Native iOS & Android development",
      "Cross-platform solutions",
      "Push notifications",
      "Offline functionality",
      "App store optimization",
      "Analytics integration",
      "Payment gateway integration",
      "Social media integration",
    ],
    benefits: [
      "Reach mobile-first audience",
      "Enhanced user engagement",
      "Push notification capabilities",
      "Offline accessibility",
      "App store presence",
      "Native device features",
    ],
    process: [
      {
        step: 1,
        title: "Concept & Strategy",
        description:
          "Define app concept, target audience, and platform strategy",
      },
      {
        step: 2,
        title: "UI/UX Design",
        description: "Create intuitive and engaging mobile interfaces",
      },
      {
        step: 3,
        title: "Development",
        description: "Build native or cross-platform mobile applications",
      },
      {
        step: 4,
        title: "Testing",
        description:
          "Device testing, performance optimization, and user testing",
      },
      {
        step: 5,
        title: "App Store Submission",
        description: "Prepare and submit apps to iOS App Store and Google Play",
      },
      {
        step: 6,
        title: "Maintenance",
        description: "Regular updates, bug fixes, and feature enhancements",
      },
    ],
    faqs: [
      {
        question: "Should I choose native or cross-platform development?",
        answer:
          "It depends on your requirements. Native offers best performance and platform-specific features, while cross-platform reduces development time and cost.",
      },
      {
        question: "How long does app store approval take?",
        answer:
          "iOS App Store typically takes 1-7 days, while Google Play Store usually approves within 1-3 days. We handle the entire submission process.",
      },
      {
        question: "Do you provide app maintenance?",
        answer:
          "Yes, we offer ongoing maintenance including updates for new OS versions, bug fixes, and feature enhancements.",
      },
      {
        question: "Can you integrate with existing systems?",
        answer:
          "Absolutely. We can integrate your mobile app with existing APIs, databases, and third-party services.",
      },
    ],
    caseStudies: [
      {
        title: "Fitness Tracking App",
        client: "FitLife Pro",
        description: "Comprehensive fitness and nutrition tracking application",
        results: [
          "100,000+ downloads",
          "4.8 app store rating",
          "60% daily active users",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Delivery Management App",
        client: "QuickDeliver",
        description: "Real-time delivery tracking and management system",
        results: [
          "50% faster delivery times",
          "95% customer satisfaction",
          "30% cost reduction",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  "ai-ml-solutions": {
    id: "ai-ml-solutions",
    title: "AI & Machine Learning Solutions",
    shortDescription:
      "Harness the power of artificial intelligence to automate and optimize your business",
    fullDescription:
      "We develop cutting-edge AI and machine learning solutions that transform your business operations. From predictive analytics to computer vision, we help you leverage AI to gain competitive advantages and drive innovation.",
    icon: "Brain",
    category: "AI/ML",
    pricing: {
      starting: 25000,
      typical: 75000,
      enterprise: 250000,
    },
    timeline: "12-28 weeks",
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "OpenAI",
      "AWS SageMaker",
      "Scikit-learn",
    ],
    features: [
      "Machine learning models",
      "Natural language processing",
      "Computer vision",
      "Predictive analytics",
      "Recommendation systems",
      "Chatbots & virtual assistants",
      "Data pipeline automation",
      "Model deployment & monitoring",
    ],
    benefits: [
      "Automated decision making",
      "Improved operational efficiency",
      "Predictive insights",
      "Enhanced customer experience",
      "Cost reduction through automation",
      "Competitive advantage",
    ],
    process: [
      {
        step: 1,
        title: "Data Assessment",
        description: "Evaluate data quality, availability, and AI readiness",
      },
      {
        step: 2,
        title: "Model Development",
        description: "Design and train machine learning models",
      },
      {
        step: 3,
        title: "Validation & Testing",
        description: "Validate model accuracy and performance",
      },
      {
        step: 4,
        title: "Integration",
        description: "Integrate AI models into existing systems",
      },
      {
        step: 5,
        title: "Deployment",
        description: "Deploy models to production with monitoring",
      },
      {
        step: 6,
        title: "Optimization",
        description: "Continuous model improvement and retraining",
      },
    ],
    faqs: [
      {
        question: "Do I need large amounts of data for AI solutions?",
        answer:
          "Not always. We can work with various data sizes and use techniques like transfer learning and data augmentation when needed.",
      },
      {
        question: "How accurate are AI predictions?",
        answer:
          "Accuracy depends on data quality and use case. We typically achieve 85-95% accuracy for most business applications.",
      },
      {
        question: "Can AI integrate with our existing systems?",
        answer:
          "Yes, we design AI solutions to seamlessly integrate with your current technology stack through APIs and data pipelines.",
      },
      {
        question: "How do you ensure AI model reliability?",
        answer:
          "We implement robust testing, validation, monitoring, and continuous improvement processes to ensure reliable AI performance.",
      },
    ],
    caseStudies: [
      {
        title: "Predictive Maintenance System",
        client: "ManufactureTech",
        description:
          "AI-powered predictive maintenance for industrial equipment",
        results: [
          "40% reduction in downtime",
          "30% cost savings",
          "95% prediction accuracy",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Customer Service Chatbot",
        client: "ServicePro",
        description: "Intelligent chatbot for customer support automation",
        results: [
          "70% reduction in support tickets",
          "24/7 availability",
          "90% customer satisfaction",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  "cloud-devops": {
    id: "cloud-devops",
    title: "Cloud & DevOps Services",
    shortDescription:
      "Scalable cloud infrastructure and streamlined deployment pipelines",
    fullDescription:
      "We help organizations migrate to the cloud and implement DevOps practices that ensure reliability, scalability, and rapid deployment. Our cloud solutions reduce costs while improving performance and security.",
    icon: "Cloud",
    category: "Infrastructure",
    pricing: {
      starting: 10000,
      typical: 30000,
      enterprise: 100000,
    },
    timeline: "6-18 weeks",
    technologies: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
    features: [
      "Cloud migration",
      "Infrastructure as code",
      "CI/CD pipelines",
      "Container orchestration",
      "Monitoring & logging",
      "Security implementation",
      "Cost optimization",
      "Disaster recovery",
    ],
    benefits: [
      "Reduced infrastructure costs",
      "Improved scalability",
      "Enhanced security",
      "Faster deployment cycles",
      "Better reliability",
      "Global accessibility",
    ],
    process: [
      {
        step: 1,
        title: "Assessment",
        description: "Evaluate current infrastructure and cloud readiness",
      },
      {
        step: 2,
        title: "Strategy & Planning",
        description: "Design cloud architecture and migration strategy",
      },
      {
        step: 3,
        title: "Migration",
        description: "Migrate applications and data to cloud platforms",
      },
      {
        step: 4,
        title: "DevOps Implementation",
        description: "Set up CI/CD pipelines and automation",
      },
      {
        step: 5,
        title: "Monitoring",
        description: "Implement monitoring, logging, and alerting",
      },
      {
        step: 6,
        title: "Optimization",
        description: "Continuous optimization for performance and cost",
      },
    ],
    faqs: [
      {
        question: "Which cloud platform should I choose?",
        answer:
          "We help you choose based on your specific needs, existing technology, budget, and compliance requirements. AWS, Azure, and GCP all have unique strengths.",
      },
      {
        question: "How much can I save by moving to the cloud?",
        answer:
          "Most organizations see 20-50% cost reduction, though savings depend on current infrastructure and optimization strategies.",
      },
      {
        question: "Is cloud migration risky?",
        answer:
          "We minimize risks through careful planning, phased migration, and comprehensive testing. We ensure zero downtime during critical migrations.",
      },
      {
        question: "Do you provide ongoing cloud management?",
        answer:
          "Yes, we offer managed cloud services including monitoring, optimization, security updates, and 24/7 support.",
      },
    ],
    caseStudies: [
      {
        title: "Enterprise Cloud Migration",
        client: "GlobalCorp",
        description: "Complete migration of legacy systems to AWS cloud",
        results: [
          "45% cost reduction",
          "99.99% uptime",
          "3x faster deployments",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "DevOps Transformation",
        client: "TechStartup",
        description: "Implementation of CI/CD pipelines and automation",
        results: [
          "10x faster deployments",
          "90% reduction in bugs",
          "50% faster time-to-market",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  "ui-ux-design": {
    id: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription:
      "Beautiful, intuitive interfaces that create engaging user experiences",
    fullDescription:
      "We create user-centered designs that not only look beautiful but also provide intuitive and engaging experiences. Our design process focuses on understanding your users and creating interfaces that drive conversions and satisfaction.",
    icon: "Palette",
    category: "Design",
    pricing: {
      starting: 5000,
      typical: 15000,
      enterprise: 50000,
    },
    timeline: "4-12 weeks",
    technologies: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Principle",
      "InVision",
      "Framer",
    ],
    features: [
      "User research & analysis",
      "Wireframing & prototyping",
      "Visual design",
      "Interaction design",
      "Usability testing",
      "Design systems",
      "Responsive design",
      "Accessibility compliance",
    ],
    benefits: [
      "Improved user satisfaction",
      "Higher conversion rates",
      "Reduced development costs",
      "Better brand perception",
      "Increased user engagement",
      "Competitive advantage",
    ],
    process: [
      {
        step: 1,
        title: "Research",
        description:
          "User research, competitor analysis, and requirements gathering",
      },
      {
        step: 2,
        title: "Strategy",
        description: "Define user personas, user journeys, and design strategy",
      },
      {
        step: 3,
        title: "Wireframing",
        description:
          "Create low-fidelity wireframes and information architecture",
      },
      {
        step: 4,
        title: "Visual Design",
        description: "Develop high-fidelity designs and visual identity",
      },
      {
        step: 5,
        title: "Prototyping",
        description: "Create interactive prototypes for testing",
      },
      {
        step: 6,
        title: "Testing & Iteration",
        description: "User testing and design refinement",
      },
    ],
    faqs: [
      {
        question: "Do you conduct user research?",
        answer:
          "Yes, we conduct comprehensive user research including interviews, surveys, and usability testing to inform our design decisions.",
      },
      {
        question: "Can you redesign our existing application?",
        answer:
          "Absolutely. We specialize in redesigning existing applications to improve user experience and modernize interfaces.",
      },
      {
        question: "Do you create design systems?",
        answer:
          "Yes, we create comprehensive design systems that ensure consistency across all your digital products and streamline future development.",
      },
      {
        question: "How do you ensure accessibility?",
        answer:
          "We follow WCAG guidelines and conduct accessibility audits to ensure our designs are usable by people with disabilities.",
      },
    ],
    caseStudies: [
      {
        title: "Banking App Redesign",
        client: "SecureBank",
        description: "Complete redesign of mobile banking application",
        results: [
          "40% increase in user engagement",
          "60% reduction in support calls",
          "4.9 app store rating",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "E-learning Platform",
        client: "LearnOnline",
        description: "User experience design for online learning platform",
        results: [
          "50% improvement in course completion",
          "35% increase in user retention",
          "25% boost in revenue",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
};

export const serviceCategories = [
  {
    id: "development",
    name: "Development",
    description: "Custom software and application development services",
    icon: "Code2",
    services: [
      "custom-software-development",
      "web-development",
      "mobile-app-development",
    ],
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    description: "Artificial intelligence and machine learning solutions",
    icon: "Brain",
    services: ["ai-ml-solutions"],
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    description: "Cloud and DevOps infrastructure services",
    icon: "Cloud",
    services: ["cloud-devops"],
  },
  {
    id: "design",
    name: "Design",
    description: "User experience and interface design services",
    icon: "Palette",
    services: ["ui-ux-design"],
  },
];
