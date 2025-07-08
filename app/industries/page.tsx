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
  TrendingUp,
  Users,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { industriesList } from "@/lib/data/industries";

const iconMap = {
  Heart: () => <div className="w-8 h-8 bg-emerald-500 rounded" />,
  DollarSign: () => <div className="w-8 h-8 bg-blue-500 rounded" />,
  ShoppingCart: () => <div className="w-8 h-8 bg-purple-500 rounded" />,
  BookOpen: () => <div className="w-8 h-8 bg-orange-500 rounded" />,
  Factory: () => <div className="w-8 h-8 bg-gray-500 rounded" />,
  Truck: () => <div className="w-8 h-8 bg-green-500 rounded" />,
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-48 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Industry Expertise
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Industries We
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                {" "}
                Transform
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We bring deep industry knowledge and technical expertise to solve
              complex challenges across diverse sectors, delivering solutions
              that drive real business value.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-emerald-500 mr-2" />
                15+ Industries Served
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-blue-500 mr-2" />
                200+ Successful Projects
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-purple-500 mr-2" />
                Compliance Certified
              </div>
              <div className="flex items-center">
                <Zap className="h-5 w-5 text-orange-500 mr-2" />
                Innovation Driven
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesList.map((industry, index) => {
              const IconComponent =
                iconMap[industry.icon as keyof typeof iconMap];
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                        {IconComponent && <IconComponent />}
                      </div>
                      <Badge variant="secondary">
                        {industry.projects} Projects
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {industry.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                      {industry.description}
                    </CardDescription>

                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-3">
                        Our Expertise:
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Custom software solutions",
                          "Regulatory compliance",
                          "Industry-specific integrations",
                        ].map((expertise, expertiseIndex) => (
                          <li
                            key={expertiseIndex}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                            {expertise}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      <Link href={`/industries/${industry.id}`}>
                        Explore Solutions
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

      {/* Why Choose Us for Your Industry */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us for Your Industry?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep industry knowledge with cutting-edge technology to
              deliver solutions that understand your unique challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Industry Expertise",
                description:
                  "Deep understanding of industry-specific challenges, regulations, and best practices.",
                icon: "Users",
              },
              {
                title: "Compliance Ready",
                description:
                  "Built-in compliance features for HIPAA, SOX, GDPR, and other industry standards.",
                icon: "Shield",
              },
              {
                title: "Scalable Solutions",
                description:
                  "Future-proof architectures that grow with your business and industry evolution.",
                icon: "TrendingUp",
              },
              {
                title: "Proven Track Record",
                description:
                  "200+ successful projects across diverse industries with measurable results.",
                icon: "Award",
              },
              {
                title: "Rapid Deployment",
                description:
                  "Agile methodology ensures faster time-to-market without compromising quality.",
                icon: "Zap",
              },
              {
                title: "Ongoing Support",
                description:
                  "24/7 support and maintenance to ensure your solutions run smoothly.",
                icon: "Headphones",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 text-blue-600" />
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your industry-specific challenges and create solutions
            that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
