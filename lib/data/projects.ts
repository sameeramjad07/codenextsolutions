export const projects = {
  "digital-signage-system": {
    id: "digital-signage-system",
    year: "2025",
    title: "Digital Signage System",
    client: "Signage Solutions",
    category: "Technology",
    description:
      "A sophisticated digital signage system designed to streamline content management across multiple screens in retail, hospitality, corporate, and public environments. The solution integrates an Android TV app for seamless content display with a React-based web admin panel for centralized control, enabling real-time synchronization, dynamic scheduling, and comprehensive monitoring of multimedia content across thousands of display units.",
    challenge:
      "Businesses in retail and hospitality struggled with outdated signage systems that lacked real-time control, scalability, and detailed reporting, leading to inefficient content updates and poor audience engagement.",
    solution:
      "We developed a robust platform combining an Android TV app with a user-friendly web admin panel. The system leverages Node.js and MongoDB for a scalable backend, with WebSocket for real-time APIs to ensure instant synchronization. Features include a drag-and-drop playlist editor, dynamic scheduling, and real-time device monitoring, all designed for easy deployment in distributed environments.",
    impact:
      "The system revolutionized content management, enabling clients to deploy and manage thousands of screens with 99.9% uptime, reduce content update times by 50%, and generate detailed compliance reports, significantly enhancing audience engagement and operational efficiency.",
    image: "/project.png?height=600&width=800",
    technologies: ["Android", "React", "Node.js", "MongoDB", "WebSocket"],
    results: [
      "Scales to 1000+ screens seamlessly",
      "99.9% uptime with real-time synchronization",
      "50% faster content updates",
      "Comprehensive compliance reporting",
    ],
    theme: {
      primary: "from-blue-500 to-cyan-600",
      secondary: "bg-blue-50",
      accent: "text-blue-500",
      DescriptionAccent: "text-blue-400",
    },
    features: [
      "Remote screen control via intuitive admin dashboard",
      "Drag-and-drop multimedia playlist management",
      "Dynamic scheduling with recurring and one-time options",
      "Real-time monitoring of screen online/offline status",
      "Detailed playback activity and history reports",
    ],
  },
  "house1-platform": {
    id: "house1-platform",
    year: "2024",
    title: "House1 Platform",
    client: "House1 Realty",
    category: "Real Estate",
    description:
      "House1 is a next-generation real estate platform that modernizes property transactions by offering multi-mode listings for long-term rentals, direct sales, and Airbnb-style short-term stays. Integrated blockchain-based smart agreements ensure secure, transparent, and tamper-proof contracts, while Stripe-powered payments and user dashboards provide a seamless experience for property owners and buyers.",
    challenge:
      "Traditional real estate transactions often involve complex, fraud-prone processes requiring third-party intermediaries, leading to delays and increased costs for users.",
    solution:
      "We built House1 using React for a dynamic frontend, Node.js and MongoDB for a robust backend, and blockchain smart contracts for secure agreements. The platform supports multi-mode listings, document management, and real-time status tracking, with Stripe integration for seamless payments, eliminating the need for third-party legal handling.",
    impact:
      "House1 transformed real estate transactions by eliminating contract fraud through blockchain, reducing agreement processing time by 80%, and supporting over 500 active listings, empowering users with a transparent and efficient platform.",
    image: "/project.png?height=600&width=800",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Blockchain"],
    results: [
      "100% fraud-free contracts via blockchain",
      "80% faster agreement processing",
      "500+ active property listings",
      "Seamless payment integration with Stripe",
    ],
    theme: {
      primary: "from-green-500 to-teal-600",
      secondary: "bg-green-50",
      accent: "text-green-500",
      DescriptionAccent: "text-green-400",
    },
    features: [
      "Multi-mode property listings (rent, sale, short-term)",
      "Blockchain-based smart agreements for secure contracts",
      "Property document upload and management",
      "Stripe-powered secure payment processing",
      "Real-time user dashboards for status tracking",
    ],
  },
  "galax-art-platform": {
    id: "galax-art-platform",
    year: "2023",
    title: "Galax Art Platform",
    client: "Galax Art",
    category: "E-commerce",
    description:
      "Galax Art is a cutting-edge digital marketplace connecting artists, collectors, and buyers worldwide to showcase, sell, and purchase digital artwork. The platform supports diverse art formats with features like artist portfolios, secure transactions, and licensing options, all powered by a modern tech stack and cloud storage for instant downloads.",
    challenge:
      "Digital artists lacked a dedicated platform to monetize their work globally, with secure ownership records and flexible licensing options, while buyers faced challenges finding high-quality digital art without physical shipping constraints.",
    solution:
      "We developed Galax Art using React for an engaging frontend, Node.js and MongoDB for a scalable backend, and Stripe for secure payments. AWS S3 integration enables instant artwork downloads, while features like category-based discovery and licensing options cater to both artists and buyers, fostering a vibrant global marketplace.",
    impact:
      "Galax Art empowered over 10,000 artists to monetize their work, achieved a 90% transaction success rate, and provided instant access to digital art, revolutionizing the digital art market with a focus on accessibility and security.",
    image: "/project.png?height=600&width=800",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS S3"],
    results: [
      "10,000+ artworks listed by artists",
      "90% transaction success rate",
      "Global reach for digital artists",
      "Instant artwork downloads via cloud storage",
    ],
    theme: {
      primary: "from-purple-500 to-pink-600",
      secondary: "bg-purple-50",
      accent: "text-purple-500",
      DescriptionAccent: "text-purple-400",
    },
    features: [
      "Artist profiles with gallery portfolios",
      "Secure purchase and digital download system",
      "Category-based artwork discovery (e.g., abstract, realism, 3D)",
      "Wishlist and favorites functionality for buyers",
      "Flexible licensing options for commercial and personal use",
    ],
  },
  "molto-vino-app": {
    id: "molto-vino-app",
    year: "2022",
    title: "Molto Vino App",
    client: "Molto Vino",
    category: "Hospitality",
    description:
      "Molto Vino is an innovative self-service restaurant mobile app that transforms the dining experience by allowing users to browse, order, and pour wine using smart machines, all managed through their phones. Integrated with a React and Angular-based admin panel, the app includes FaciliKey smart entry and a membership club, delivering unparalleled convenience in hospitality.",
    challenge:
      "Restaurants faced high labor costs and inefficiencies in wine service, while customers desired a more autonomous and engaging dining experience without staff dependency.",
    solution:
      "We built Molto Vino using Flutter for a cross-platform mobile app, with React and Angular for a robust admin panel, powered by Node.js and MongoDB. Features include smart drink pouring via driver’s license scanning, FaciliKey door entry, and auto-billing, with admin tools for order management, inventory tracking, and push notifications.",
    impact:
      "Molto Vino reduced staff involvement by 50%, processed over 1,000 monthly orders with 99% payment accuracy, and enhanced customer satisfaction through a seamless, tech-driven dining experience.",
    image: "/project.png?height=600&width=800",
    technologies: ["Flutter", "React", "Angular", "Node.js", "MongoDB"],
    results: [
      "50% reduction in staff involvement",
      "1,000+ monthly orders processed",
      "99% payment accuracy with auto-billing",
      "Enhanced customer experience via smart features",
    ],
    theme: {
      primary: "from-red-700 to-red-900",
      secondary: "bg-rose-50",
      accent: "text-red-700",
      DescriptionAccent: "text-red-500",
    },
    features: [
      "Browse and order wine via mobile app",
      "Smart drink pouring with driver’s license scanning",
      "FaciliKey smart entry for restaurant access",
      "Membership club with 2 free bottles monthly",
      "Admin panel for order, inventory, and notification management",
    ],
  },
  "3d-football-coach": {
    id: "3d-football-coach",
    year: "2025",
    title: "3D Football Coach",
    client: "FootballTech Innovations",
    category: "Sports Technology",
    description:
      "An innovative web-based platform designed for football coaches and players to streamline team management, enhance player development, and provide access to a comprehensive library of 3D training materials. The solution integrates a React.js frontend with a Node.js backend, leveraging MongoDB for data management and Cloud Storage for video hosting, enabling seamless performance tracking, camp discovery, and custom training design for clubs, academies, and individual players.",
    challenge:
      "Football coaches and players faced challenges in managing team performance, accessing high-quality training resources, and discovering local camps, often relying on fragmented tools that lacked integration, scalability, and engaging content delivery.",
    solution:
      "We developed a unified platform with a React.js frontend and Node.js (Express.js) backend, utilizing MongoDB for efficient data handling and Cloud Storage for a library of over 1,000 3D training videos. Key features include player performance dashboards, a nearby camp locator with real-time details, a freemium 3D video library, and a custom training designer for coaches. JWT-based authentication and REST APIs ensure secure and seamless integration, supporting scalability for thousands of users.",
    impact:
      "3D Football Coach transformed football training by enabling coaches to track player progress 40% faster, increasing camp registrations by 30%, and providing scalable access to premium training content with 99.9% uptime, inspiring the next generation of football talent.",
    image: "/project.png?height=600&width=800",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloud Storage",
      "JWT",
      "REST APIs",
    ],
    results: [
      "Supports 1000+ 3D training videos",
      "99.9% platform uptime",
      "40% faster player progress tracking",
      "30% increase in camp registrations",
    ],
    theme: {
      primary: "from-green-500 to-teal-600",
      secondary: "bg-green-50",
      accent: "text-green-500",
      DescriptionAccent: "text-green-400",
    },
    features: [
      "Player performance tracking with intuitive dashboards",
      "Nearby football camp locator with real-time registration",
      "Freemium 3D training video library with 1000+ drills",
      "Custom training designer for creating and sharing drills",
      "Membership system for premium content access",
    ],
  },
};
