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
import { ArrowRight, AlertTriangle, Lightbulb, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { industriesData } from "@/lib/data/industries";

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industriesData[params.slug as keyof typeof industriesData];

  if (!industry) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">
                Industry Focus
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                {industry.title}
              </h1>
              <h2 className="text-2xl text-blue-600 font-semibold mb-6">
                {industry.subtitle}
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {industry.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {industry.hero.stats.map((stat, index) => (
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
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link href="/contact">
                    Get Industry Solutions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/portfolio">View Case Studies</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl p-8">
                <Image
                  src={industry.hero.image || "/placeholder.svg"}
                  alt={industry.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Industry Challenges We Solve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industry.challenges.map((challenge, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl">{challenge.title}</CardTitle>
                  <CardDescription>{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start">
                    <Lightbulb className="h-5 w-5 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Our Solution:
                      </h4>
                      <p className="text-gray-600">{challenge.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Solutions for {industry.title.split(" ")[0]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industry.solutions.map((solution, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Related Services:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.services.map((service, serviceIndex) => (
                          <Badge
                            key={serviceIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            <Link
                              href={`/services/${service}`}
                              className="hover:underline"
                            >
                              {service
                                .replace(/-/g, " ")
                                .replace(/\b\w/g, (l) => l.toUpperCase())}
                            </Link>
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            <Link
                              href={`/technologies/${tech.toLowerCase()}`}
                              className="hover:underline"
                            >
                              {tech}
                            </Link>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industry.caseStudies.map((caseStudy, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={caseStudy.image || "/placeholder.svg"}
                  alt={caseStudy.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-xl">{caseStudy.title}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {caseStudy.client}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Key Results:</h4>
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-emerald-500 mr-2" />
                        <span className="text-sm text-gray-600">{result}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services & Technologies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Related Services */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Related Services
              </h3>
              <div className="space-y-4">
                {industry.relatedServices.map((service, index) => (
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
                Key Technologies
              </h3>
              <div className="space-y-4">
                {industry.relatedTechnologies.map((tech, index) => (
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

            {/* Related Solutions */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Strategic Solutions
              </h3>
              <div className="space-y-4">
                {industry.relatedSolutions.map((solution, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow duration-300"
                  >
                    <CardContent className="p-4">
                      <Link
                        href={`/solutions/${solution}`}
                        className="flex items-center justify-between group"
                      >
                        <span className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">
                          {solution
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your {industry.title.split(" ")[0]} Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your specific challenges and create industry-tailored
            solutions that drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Link href="/contact">Get Industry Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/portfolio">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
