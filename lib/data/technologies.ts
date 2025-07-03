export const technologiesData = {
  react: {
    id: "react",
    name: "React.js",
    category: "Frontend",
    description:
      "Build dynamic, interactive user interfaces with React.js - the most popular JavaScript library for modern web development.",
    hero: {
      title: "React.js Development Services",
      description:
        "Create fast, scalable, and maintainable web applications with React.js. Our expert developers leverage the power of React to build exceptional user experiences.",
      image: "/placeholder.svg?height=600&width=800",
      stats: [
        { number: "50+", label: "React Projects" },
        { number: "5+", label: "Years Experience" },
        { number: "100%", label: "Modern Standards" },
        { number: "99.9%", label: "Performance Score" },
      ],
    },
    features: [
      {
        title: "Component-Based Architecture",
        description:
          "Reusable components for faster development and easier maintenance",
      },
      {
        title: "Virtual DOM",
        description:
          "Optimized rendering for superior performance and user experience",
      },
      {
        title: "Rich Ecosystem",
        description: "Extensive library ecosystem and community support",
      },
      {
        title: "SEO Friendly",
        description:
          "Server-side rendering capabilities for better search engine optimization",
      },
    ],
    useCases: [
      {
        title: "Single Page Applications",
        description: "Dynamic SPAs with seamless user interactions",
        industries: ["finance", "healthcare", "ecommerce"],
      },
      {
        title: "E-commerce Platforms",
        description: "Interactive shopping experiences with real-time updates",
        industries: ["ecommerce", "retail"],
      },
      {
        title: "Dashboard Applications",
        description: "Data visualization and analytics dashboards",
        industries: ["finance", "manufacturing", "healthcare"],
      },
    ],
    relatedServices: [
      "web-development",
      "frontend-development",
      "ui-ux-design",
    ],
    relatedTechnologies: ["nextjs", "typescript", "nodejs"],
    relatedIndustries: ["finance", "healthcare", "ecommerce"],
    relatedSolutions: ["digital-transformation", "custom-development"],
  },
  nodejs: {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    description:
      "Build scalable server-side applications with Node.js - the runtime that brings JavaScript to the backend.",
    hero: {
      title: "Node.js Backend Development",
      description:
        "Leverage the power of JavaScript on the server with Node.js. Build fast, scalable network applications with our expert Node.js development services.",
      image: "/placeholder.svg?height=600&width=800",
      stats: [
        { number: "40+", label: "Node.js Projects" },
        { number: "6+", label: "Years Experience" },
        { number: "99.9%", label: "Uptime" },
        { number: "10x", label: "Faster Development" },
      ],
    },
    features: [
      {
        title: "High Performance",
        description: "Non-blocking I/O operations for superior performance",
      },
      {
        title: "Scalability",
        description: "Handle thousands of concurrent connections efficiently",
      },
      {
        title: "Rich Package Ecosystem",
        description: "Access to npm's vast library of packages and modules",
      },
      {
        title: "Real-time Applications",
        description: "Perfect for chat applications, gaming, and live updates",
      },
    ],
    useCases: [
      {
        title: "API Development",
        description: "RESTful and GraphQL APIs for web and mobile applications",
        industries: ["finance", "healthcare", "ecommerce"],
      },
      {
        title: "Real-time Applications",
        description: "Chat applications, live updates, and collaborative tools",
        industries: ["education", "healthcare", "finance"],
      },
      {
        title: "Microservices",
        description: "Scalable microservices architecture",
        industries: ["ecommerce", "finance", "manufacturing"],
      },
    ],
    relatedServices: [
      "backend-development",
      "api-development",
      "microservices",
    ],
    relatedTechnologies: ["react", "mongodb", "aws"],
    relatedIndustries: ["finance", "healthcare", "ecommerce"],
    relatedSolutions: ["digital-transformation", "cloud-migration"],
  },
  // Add more technologies...
};

export const technologiesList = [
  {
    id: "react",
    name: "React.js",
    category: "Frontend",
    description: "Modern JavaScript library for building user interfaces",
    icon: "Code2",
    projects: 50,
    color: "text-blue-600",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    description: "JavaScript runtime for scalable server-side applications",
    icon: "Server",
    projects: 40,
    color: "text-green-600",
  },
  {
    id: "python",
    name: "Python",
    category: "Backend",
    description: "Versatile programming language for web and AI development",
    icon: "Code",
    projects: 35,
    color: "text-yellow-600",
  },
  {
    id: "aws",
    name: "Amazon Web Services",
    category: "Cloud",
    description: "Comprehensive cloud computing platform",
    icon: "Cloud",
    projects: 30,
    color: "text-orange-600",
  },
  {
    id: "react-native",
    name: "React Native",
    category: "Mobile",
    description: "Cross-platform mobile app development framework",
    icon: "Smartphone",
    projects: 25,
    color: "text-purple-600",
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    category: "AI/ML",
    description: "Machine learning framework for AI applications",
    icon: "Brain",
    projects: 20,
    color: "text-red-600",
  },
];
