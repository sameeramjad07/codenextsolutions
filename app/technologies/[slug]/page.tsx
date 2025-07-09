import { notFound } from "next/navigation";
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
  Star,
  Code2,
  Zap,
  Shield,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { technologiesData } from "@/lib/data/technologies";

// Define the props type explicitly
type TechnologiesPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  // Assuming technologiesData keys are your slugs
  const slugs = Object.keys(technologiesData);

  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function TechnologyPage({
  params,
}: TechnologiesPageProps) {
  const { slug } = await params;
  const technology = technologiesData[slug as keyof typeof technologiesData];

  if (!technology) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-48 pb-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-800">
                {technology.category}
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                {technology.hero.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {technology.hero.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {technology.hero.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/portfolio">View Projects</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8">
                <Image
                  src={technology.hero.image || "/placeholder.svg"}
                  alt={technology.name}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose {technology.name}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technology.features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Star className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Use Cases & Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technology.useCases.map((useCase, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Code2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Perfect for:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.industries.map((industry, industryIndex) => (
                        <Badge
                          key={industryIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          <Link
                            href={`/industries/${industry}`}
                            className="hover:underline"
                          >
                            {industry
                              .replace(/-/g, " ")
                              .replace(/\b\w/g, (l) => l.toUpperCase())}
                          </Link>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits of Using {technology.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why {technology.name} is the right choice for your next
              project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "High Performance",
                description:
                  "Optimized for speed and efficiency in production environments",
                icon: Zap,
              },
              {
                title: "Scalability",
                description:
                  "Easily scales from small applications to enterprise-level systems",
                icon: ArrowRight,
              },
              {
                title: "Security",
                description:
                  "Built-in security features and best practices for safe development",
                icon: Shield,
              },
              {
                title: "Developer Experience",
                description:
                  "Excellent tooling and documentation for faster development",
                icon: Code2,
              },
              {
                title: "Community Support",
                description:
                  "Large, active community with extensive resources and libraries",
                icon: Star,
              },
              {
                title: "Future Proof",
                description:
                  "Regular updates and long-term support ensure longevity",
                icon: CheckCircle,
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-purple-600" />
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

      {/* Related Technologies & Services */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Related Services */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Related Services
              </h3>
              <div className="space-y-4">
                {technology.relatedServices.map((service, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow duration-300"
                  >
                    <CardContent className="p-4">
                      <Link
                        href={`/services/${service}`}
                        className="flex items-center justify-between group"
                      >
                        <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                          {service
                            .replace(/-/g, " ")
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </span>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Related Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Works Great With
              </h3>
              <div className="space-y-4">
                {technology.relatedTechnologies.map((tech, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow duration-300"
                  >
                    <CardContent className="p-4">
                      <Link
                        href={`/technologies/${tech}`}
                        className="flex items-center justify-between group"
                      >
                        <span className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                          {tech
                            .replace(/-/g, " ")
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </span>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Related Industries */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Popular Industries
              </h3>
              <div className="space-y-4">
                {technology.relatedIndustries.map((industry, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow duration-300"
                  >
                    <CardContent className="p-4">
                      <Link
                        href={`/industries/${industry}`}
                        className="flex items-center justify-between group"
                      >
                        <span className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">
                          {industry
                            .replace(/-/g, " ")
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </span>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build with {technology.name}?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's discuss your project requirements and leverage the power of{" "}
            {technology.name} for your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
