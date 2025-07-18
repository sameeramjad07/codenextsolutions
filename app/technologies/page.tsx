import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Server,
  Smartphone,
  Cloud,
  Database,
  Brain,
  Globe,
  Zap,
  Shield,
  TrendingUp,
  Star,
} from "lucide-react";

const iconMap = {
  "Frontend Technologies": Code2,
  "Backend Technologies": Server,
  "Mobile Technologies": Smartphone,
  "Cloud Platforms": Cloud,
  Databases: Database,
  "AI/ML Technologies": Brain,
};

const colorMap = {
  "Frontend Technologies": {
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: "text-blue-600",
    badge: "bg-blue-100 text-blue-800",
    gradient: "from-blue-500 to-cyan-500",
  },
  "Backend Technologies": {
    bg: "bg-green-50",
    border: "border-green-200",
    icon: "text-green-600",
    badge: "bg-green-100 text-green-800",
    gradient: "from-green-500 to-emerald-500",
  },
  "Mobile Technologies": {
    bg: "bg-purple-50",
    border: "border-purple-200",
    icon: "text-purple-600",
    badge: "bg-purple-100 text-purple-800",
    gradient: "from-purple-500 to-pink-500",
  },
  "Cloud Platforms": {
    bg: "bg-orange-50",
    border: "border-orange-200",
    icon: "text-orange-600",
    badge: "bg-orange-100 text-orange-800",
    gradient: "from-orange-500 to-red-500",
  },
  Databases: {
    bg: "bg-red-50",
    border: "border-red-200",
    icon: "text-red-600",
    badge: "bg-red-100 text-red-800",
    gradient: "from-red-500 to-pink-500",
  },
  "AI/ML Technologies": {
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    icon: "text-indigo-600",
    badge: "bg-indigo-100 text-indigo-800",
    gradient: "from-indigo-500 to-purple-500",
  },
};

const technologiesData = {
  "Frontend Technologies": [
    {
      name: "React.js",
      description: "Modern JavaScript library for building user interfaces",
    },
    {
      name: "Vue.js",
      description: "Progressive framework for building user interfaces",
    },
    {
      name: "Angular",
      description: "Platform for building mobile and desktop web applications",
    },
    {
      name: "Next.js",
      description: "React framework for production-grade applications",
    },
    {
      name: "TypeScript",
      description:
        "Typed superset of JavaScript that compiles to plain JavaScript",
    },
    {
      name: "JavaScript",
      description: "High-level programming language for web development",
    },
  ],
  "Backend Technologies": [
    {
      name: ".NET",
      description: "Free, cross-platform framework for building modern apps",
    },
    {
      name: "Node.js",
      description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
    },
    {
      name: "Python",
      description: "High-level programming language for rapid development",
    },
    {
      name: "Java",
      description:
        "Object-oriented programming language for enterprise applications",
    },
    {
      name: "PHP",
      description: "Server-side scripting language for web development",
    },
    {
      name: "Ruby on Rails",
      description: "Web application framework written in Ruby",
    },
  ],
  "Mobile Technologies": [
    {
      name: "React Native",
      description: "Framework for building native mobile apps using React",
    },
    {
      name: "Flutter",
      description: "UI toolkit for building natively compiled applications",
    },
    {
      name: "Swift",
      description: "Programming language for iOS and macOS development",
    },
    {
      name: "Kotlin",
      description: "Modern programming language for Android development",
    },
    {
      name: "Xamarin",
      description: "Cross-platform mobile development framework",
    },
    {
      name: "Ionic",
      description: "Cross-platform mobile app development framework",
    },
  ],
  "Cloud Platforms": [
    {
      name: "Amazon Web Services",
      description: "Comprehensive cloud computing platform",
    },
    {
      name: "Microsoft Azure",
      description: "Cloud computing service for building and deploying apps",
    },
    {
      name: "Google Cloud Platform",
      description: "Suite of cloud computing services",
    },
    {
      name: "Digital Ocean",
      description: "Cloud infrastructure provider for developers",
    },
    {
      name: "Heroku",
      description: "Platform as a service for deploying applications",
    },
    {
      name: "Vercel",
      description: "Platform for frontend frameworks and static sites",
    },
  ],
  Databases: [
    {
      name: "PostgreSQL",
      description: "Advanced open source relational database",
    },
    {
      name: "MongoDB",
      description: "Document-oriented NoSQL database program",
    },
    {
      name: "MySQL",
      description: "Open-source relational database management system",
    },
    { name: "Redis", description: "In-memory data structure store and cache" },
    {
      name: "Elasticsearch",
      description: "Distributed search and analytics engine",
    },
    {
      name: "Firebase",
      description: "Platform for mobile and web application development",
    },
  ],
  "AI/ML Technologies": [
    {
      name: "TensorFlow",
      description: "Open source machine learning framework",
    },
    {
      name: "PyTorch",
      description: "Machine learning library for Python applications",
    },
    {
      name: "Scikit-learn",
      description: "Machine learning library for Python",
    },
    {
      name: "OpenAI",
      description: "Artificial intelligence research and deployment",
    },
    {
      name: "Hugging Face",
      description: "Platform for machine learning models",
    },
    {
      name: "Computer Vision",
      description:
        "Field of AI that trains computers to interpret visual information",
    },
  ],
};

export default function TechnologiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-60 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
              Technology Stack
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Technologies We
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                {" "}
                Master
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              We leverage cutting-edge technologies and proven frameworks to
              build scalable, secure, and high-performance solutions that drive
              your business forward in the digital age.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">36+</div>
                <div className="text-sm text-gray-600">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">6</div>
                <div className="text-sm text-gray-600">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  200+
                </div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies by Category */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {Object.entries(technologiesData).map(
              ([category, technologies], categoryIndex) => {
                const IconComponent = iconMap[category as keyof typeof iconMap];
                const colors = colorMap[category as keyof typeof colorMap];

                return (
                  <div key={categoryIndex} className="relative">
                    {/* Category Header */}
                    <div className="text-center mb-12">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colors.bg} ${colors.border} border-2 mb-6`}
                      >
                        <IconComponent className={`h-8 w-8 ${colors.icon}`} />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {category}
                      </h2>
                      <div
                        className={`w-24 h-1 bg-gradient-to-r ${colors.gradient} rounded-full mx-auto`}
                      />
                    </div>

                    {/* Technologies Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {technologies.map((tech, techIndex) => (
                        <Card
                          key={techIndex}
                          className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2 ${colors.bg} ${colors.border} border`}
                        >
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between mb-3">
                              <Badge
                                className={`${colors.badge} text-xs font-medium`}
                              >
                                {category.split(" ")[0]}
                              </Badge>
                              <div
                                className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                              >
                                <div
                                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient}`}
                                />
                              </div>
                            </div>
                            <CardTitle
                              className={`text-lg font-semibold text-gray-900 group-hover:${colors.icon} transition-colors`}
                            >
                              {tech.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {tech.description}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* Why Our Technology Stack */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Our Technology Stack?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We carefully select technologies based on performance,
              scalability, security, and long-term viability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Performance Optimized",
                description:
                  "Technologies chosen for maximum performance and minimal resource consumption.",
                icon: Zap,
                color: "text-yellow-600",
                bg: "bg-yellow-50",
              },
              {
                title: "Scalability First",
                description:
                  "Built to handle growth from startup to enterprise scale seamlessly.",
                icon: TrendingUp,
                color: "text-green-600",
                bg: "bg-green-50",
              },
              {
                title: "Security Focused",
                description:
                  "Enterprise-grade security features and best practices built-in.",
                icon: Shield,
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                title: "Future Proof",
                description:
                  "Technologies with strong community support and long-term viability.",
                icon: Globe,
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
              {
                title: "Developer Friendly",
                description:
                  "Modern development experience with excellent tooling and documentation.",
                icon: Code2,
                color: "text-indigo-600",
                bg: "bg-indigo-50",
              },
              {
                title: "Proven Results",
                description:
                  "Battle-tested technologies with successful track records in production.",
                icon: Star,
                color: "text-orange-600",
                bg: "bg-orange-50",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1"
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 ${benefit.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Technology Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep expertise across the entire technology spectrum to deliver
              comprehensive solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Full-Stack Development",
                description: "End-to-end development from frontend to backend",
                icon: Code2,
                stats: "15+ Technologies",
              },
              {
                title: "Cloud Architecture",
                description: "Scalable cloud solutions and infrastructure",
                icon: Cloud,
                stats: "6+ Platforms",
              },
              {
                title: "Mobile Development",
                description: "Native and cross-platform mobile applications",
                icon: Smartphone,
                stats: "6+ Frameworks",
              },
              {
                title: "AI & Machine Learning",
                description: "Intelligent solutions and data analytics",
                icon: Brain,
                stats: "6+ AI Tools",
              },
            ].map((expertise, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <expertise.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {expertise.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {expertise.description}
                  </p>
                  <Badge className="bg-blue-100 text-blue-800">
                    {expertise.stats}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
