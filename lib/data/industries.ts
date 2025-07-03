export const industriesData = {
  healthcare: {
    id: "healthcare",
    title: "Healthcare Technology Solutions",
    subtitle: "Transforming Healthcare Through Innovation",
    description:
      "We develop HIPAA-compliant healthcare solutions that improve patient outcomes, streamline operations, and enhance the overall healthcare experience.",
    hero: {
      title: "Revolutionizing Healthcare with Technology",
      description:
        "From telemedicine platforms to AI-powered diagnostics, we create healthcare solutions that save lives and improve patient care.",
      image: "/placeholder.svg?height=600&width=800",
      stats: [
        { number: "50K+", label: "Patients Served" },
        { number: "15+", label: "Healthcare Projects" },
        { number: "100%", label: "HIPAA Compliant" },
        { number: "99.9%", label: "Uptime" },
      ],
    },
    challenges: [
      {
        title: "Patient Data Security",
        description:
          "Ensuring HIPAA compliance and protecting sensitive patient information",
        solution: "End-to-end encryption and secure cloud infrastructure",
      },
      {
        title: "System Integration",
        description:
          "Connecting disparate healthcare systems and legacy infrastructure",
        solution: "Custom APIs and middleware for seamless data exchange",
      },
      {
        title: "Regulatory Compliance",
        description: "Meeting strict healthcare regulations and standards",
        solution: "Built-in compliance features and regular security audits",
      },
    ],
    solutions: [
      {
        title: "Telemedicine Platforms",
        description: "Remote consultation and patient monitoring solutions",
        services: [
          "custom-software-development",
          "web-development",
          "mobile-app-development",
        ],
        technologies: ["React", "Node.js", "WebRTC", "AWS"],
      },
      {
        title: "Electronic Health Records",
        description: "Comprehensive patient data management systems",
        services: ["custom-software-development", "cloud-devops"],
        technologies: ["Vue.js", "PostgreSQL", "Docker"],
      },
      {
        title: "Medical Device Integration",
        description: "IoT solutions for medical equipment and monitoring",
        services: ["ai-ml-solutions", "custom-software-development"],
        technologies: ["Python", "IoT", "TensorFlow"],
      },
    ],
    caseStudies: [
      {
        title: "Telemedicine Platform",
        client: "MedTech Solutions",
        description: "HIPAA-compliant platform serving 50,000+ patients",
        results: [
          "40% reduction in wait times",
          "99.9% uptime",
          "50K+ consultations",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
    relatedServices: [
      "custom-software-development",
      "ai-ml-solutions",
      "cloud-devops",
    ],
    relatedTechnologies: ["react", "nodejs", "aws", "tensorflow"],
    relatedSolutions: ["digital-transformation", "it-consulting"],
  },
  finance: {
    id: "finance",
    title: "Financial Technology Solutions",
    subtitle: "Secure & Scalable FinTech Innovation",
    description:
      "We build secure, compliant financial technology solutions that enable digital transformation in banking, payments, and investment management.",
    hero: {
      title: "Powering the Future of Finance",
      description:
        "From trading platforms to payment systems, we create financial solutions that are secure, scalable, and compliant.",
      image: "/placeholder.svg?height=600&width=800",
      stats: [
        { number: "$2M+", label: "Daily Trading Volume" },
        { number: "12+", label: "FinTech Projects" },
        { number: "100%", label: "Security Compliant" },
        { number: "99.99%", label: "Transaction Accuracy" },
      ],
    },
    challenges: [
      {
        title: "Regulatory Compliance",
        description:
          "Meeting strict financial regulations and compliance requirements",
        solution: "Built-in compliance features and automated reporting",
      },
      {
        title: "Security & Fraud Prevention",
        description: "Protecting against cyber threats and financial fraud",
        solution: "Multi-layer security and AI-powered fraud detection",
      },
      {
        title: "Real-time Processing",
        description: "Handling high-volume transactions with minimal latency",
        solution: "Optimized architecture and cloud-native solutions",
      },
    ],
    solutions: [
      {
        title: "Trading Platforms",
        description: "Real-time trading systems with advanced analytics",
        services: ["custom-software-development", "web-development"],
        technologies: ["Vue.js", "Python", "PostgreSQL"],
      },
      {
        title: "Payment Systems",
        description: "Secure payment processing and digital wallets",
        services: ["mobile-app-development", "api-development"],
        technologies: ["React Native", "Node.js", "Stripe"],
      },
      {
        title: "Risk Management",
        description: "AI-powered risk assessment and compliance monitoring",
        services: ["ai-ml-solutions", "data-analytics"],
        technologies: ["Python", "TensorFlow", "Redis"],
      },
    ],
    caseStudies: [
      {
        title: "Trading Platform",
        client: "InvestPro",
        description: "Real-time trading platform with advanced analytics",
        results: [
          "$2M+ daily volume",
          "Sub-second execution",
          "500% user growth",
        ],
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
    relatedServices: [
      "custom-software-development",
      "ai-ml-solutions",
      "web-development",
    ],
    relatedTechnologies: ["python", "nodejs", "postgresql", "redis"],
    relatedSolutions: ["digital-transformation", "security-consulting"],
  },
  // Add more industries...
};

export const industriesList = [
  {
    id: "healthcare",
    name: "Healthcare",
    description: "HIPAA-compliant solutions for modern healthcare delivery",
    icon: "Heart",
    projects: 15,
    color: "text-emerald-600",
  },
  {
    id: "finance",
    name: "Finance & FinTech",
    description: "Secure financial technology and banking solutions",
    icon: "DollarSign",
    projects: 12,
    color: "text-blue-600",
  },
  {
    id: "ecommerce",
    name: "E-commerce & Retail",
    description: "Scalable online retail and marketplace platforms",
    icon: "ShoppingCart",
    projects: 18,
    color: "text-purple-600",
  },
  {
    id: "education",
    name: "Education & EdTech",
    description: "Interactive learning and educational technology",
    icon: "BookOpen",
    projects: 10,
    color: "text-orange-600",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & IoT",
    description: "Industrial automation and smart manufacturing",
    icon: "Factory",
    projects: 8,
    color: "text-gray-600",
  },
  {
    id: "logistics",
    name: "Transportation & Logistics",
    description: "Supply chain and logistics optimization solutions",
    icon: "Truck",
    projects: 6,
    color: "text-green-600",
  },
];
