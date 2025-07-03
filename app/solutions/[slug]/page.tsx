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
  Clock,
  DollarSign,
  Users,
  Star,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { solutionsData } from "@/lib/data/solutions";

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const solution = solutionsData[params.slug as keyof typeof solutionsData];

  if (!solution) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-emerald-100 text-emerald-800">
                {solution.category}
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                {solution.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {solution.fullDescription}
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-emerald-500 mr-2" />
                  <span className="text-sm text-gray-600">
                    From ${solution.pricing.starting.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-sm text-gray-600">
                    {solution.timeline}
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-purple-500 mr-2" />
                  <span className="text-sm text-gray-600">Strategic Team</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  <Link href="/contact">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/pricing">View Investment</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl p-8">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt={solution.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Solution Components
              </h2>
              <div className="space-y-4">
                {solution.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Business Benefits
              </h2>
              <div className="space-y-4">
                {solution.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Star className="h-6 w-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Technologies & Frameworks
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {solution.technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Implementation Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solution.process.map((step, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {step.description}
                  </CardDescription>
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
            Transformation Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solution.caseStudies.map((caseStudy, index) => (
              <Card key={index} className="overflow-hidden">
                <Image
                  src={caseStudy.image || "/placeholder.svg"}
                  alt={caseStudy.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-xl">{caseStudy.title}</CardTitle>
                  <CardDescription className="text-emerald-600 font-medium">
                    {caseStudy.client}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Results:</h4>
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
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

      {/* Investment */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Investment Levels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Foundation</CardTitle>
                <div className="text-3xl font-bold text-gray-900">
                  ${solution.pricing.starting.toLocaleString()}
                </div>
                <CardDescription>Essential transformation</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-2 border-emerald-500">
              <CardHeader>
                <Badge className="mb-2 bg-emerald-500">Recommended</Badge>
                <CardTitle className="text-lg">Comprehensive</CardTitle>
                <div className="text-3xl font-bold text-gray-900">
                  ${solution.pricing.typical.toLocaleString()}
                </div>
                <CardDescription>Complete transformation</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Enterprise</CardTitle>
                <div className="text-3xl font-bold text-gray-900">
                  ${solution.pricing.enterprise.toLocaleString()}
                </div>
                <CardDescription>Full-scale transformation</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {solution.faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Let's discuss your {solution.title.toLowerCase()} strategy and
            create a roadmap for success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-emerald-600 hover:bg-gray-100"
            >
              <Link href="/contact">Schedule Strategy Session</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
            >
              <Link href="/pricing">Get Investment Proposal</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
