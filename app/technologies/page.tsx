import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Code2,
  Server,
  Smartphone,
  Cloud,
  Brain,
} from "lucide-react";
import Link from "next/link";
import { technologiesList } from "@/lib/data/technologies";

const iconMap = {
  Code2,
  Server,
  Code: Code2,
  Cloud,
  Smartphone,
  Brain,
};

export default function TechnologiesPage() {
  const categories = [
    { name: "Frontend", color: "bg-blue-100 text-blue-800", count: 15 },
    { name: "Backend", color: "bg-green-100 text-green-800", count: 12 },
    { name: "Mobile", color: "bg-purple-100 text-purple-800", count: 8 },
    { name: "Cloud", color: "bg-orange-100 text-orange-800", count: 10 },
    { name: "Database", color: "bg-red-100 text-red-800", count: 6 },
    { name: "AI/ML", color: "bg-indigo-100 text-indigo-800", count: 7 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              Technology Stack
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Technologies We
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {" "}
                Master
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We leverage cutting-edge technologies and proven frameworks to
              build scalable, secure, and high-performance solutions that drive
              your business forward.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Code2 className="h-5 w-5 text-purple-500 mr-2" />
                50+ Technologies
              </div>
              <div className="flex items-center">
                <Server className="h-5 w-5 text-blue-500 mr-2" />
                Modern Stack
              </div>
              <div className="flex items-center">
                <Cloud className="h-5 w-5 text-green-500 mr-2" />
                Cloud Native
              </div>
              <div className="flex items-center">
                <Brain className="h-5 w-5 text-red-500 mr-2" />
                AI Powered
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Technology Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge className={category.color}>
                    {category.count} Technologies
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologiesList.map((technology, index) => {
              const IconComponent =
                iconMap[technology.icon as keyof typeof iconMap];
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                        {IconComponent && (
                          <IconComponent className="h-6 w-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
                        )}
                      </div>
                      <Badge variant="secondary">{technology.category}</Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {technology.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                      {technology.description}
                    </CardDescription>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                          Projects Completed
                        </span>
                        <span className="font-semibold text-gray-900">
                          {technology.projects}+
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Category</span>
                        <span className="font-semibold text-gray-900">
                          {technology.category}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-3">
                        Use Cases:
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Enterprise applications",
                          "Scalable web platforms",
                          "High-performance systems",
                        ].map((useCase, useCaseIndex) => (
                          <li
                            key={useCaseIndex}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-purple-600 hover:bg-purple-700"
                    >
                      <Link href={`/technologies/${technology.id}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Our Technology Stack */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
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
                icon: "Zap",
              },
              {
                title: "Scalability First",
                description:
                  "Built to handle growth from startup to enterprise scale seamlessly.",
                icon: "TrendingUp",
              },
              {
                title: "Security Focused",
                description:
                  "Enterprise-grade security features and best practices built-in.",
                icon: "Shield",
              },
              {
                title: "Future Proof",
                description:
                  "Technologies with strong community support and long-term viability.",
                icon: "Clock",
              },
              {
                title: "Developer Friendly",
                description:
                  "Modern development experience with excellent tooling and documentation.",
                icon: "Code2",
              },
              {
                title: "Cost Effective",
                description:
                  "Optimal balance of features, performance, and total cost of ownership.",
                icon: "DollarSign",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build with Modern Technologies?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's discuss your project requirements and choose the perfect
            technology stack for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
