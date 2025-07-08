import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Globe,
  Smartphone,
  Brain,
  Cloud,
  Palette,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Tailored software solutions built from the ground up to meet your unique business requirements and scale with your growth.",
    href: "/services/custom-software-development",
  },
  {
    icon: Globe,
    title: "Web & Mobile App Development",
    description:
      "Modern, responsive web applications and native mobile apps that deliver exceptional user experiences across all platforms.",
    href: "/services/cross-platform",
  },
  {
    icon: Brain,
    title: "AI & Data Solutions",
    description:
      "Harness the power of artificial intelligence and machine learning to unlock insights and automate complex processes.",
    href: "/services/artificial-intelligence",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Services",
    description:
      "Scalable cloud infrastructure and streamlined deployment pipelines that ensure reliability and performance.",
    href: "/services/devops",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with your users in mind, creating engaging digital experiences.",
    href: "/services/ux-design",
  },
  {
    icon: Smartphone,
    title: "Digital Transformation",
    description:
      "Complete digital transformation strategies that modernize your business processes and drive innovation.",
    href: "/solutions/business-process-automation",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive software development services to help
            businesses innovate, scale, and stay ahead in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button
                    asChild
                    variant="ghost"
                    className="p-0 h-auto text-blue-600 hover:text-blue-700"
                  >
                    <Link href={service.href} className="flex items-center">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
