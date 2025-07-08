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
  Users,
  Clock,
  Award,
} from "lucide-react";
import Link from "next/link";
import { solutionsData, solutionCategories } from "@/lib/data/solutions";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="pt-48 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
              Strategic Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Business
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                {" "}
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Strategic technology solutions that transform your business
              operations, enhance efficiency, and drive sustainable growth in
              the digital age.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                98% Success Rate
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-emerald-500 mr-2" />
                50+ Transformations
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-500 mr-2" />
                Proven Methodology
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-purple-500 mr-2" />
                Industry Recognition
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Solution Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {solutionCategories.map((category) => (
              <Card
                key={category.id}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600">
                    {category.solutions.length} Solutions
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(solutionsData).map((solution) => (
              <Card
                key={solution.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                      <div className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <Badge variant="secondary">{solution.category}</Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {solution.shortDescription}
                  </CardDescription>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Starting from
                      </span>
                      <span className="font-semibold text-gray-900">
                        ${solution.pricing.starting.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Timeline</span>
                      <span className="font-semibold text-gray-900">
                        {solution.timeline}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-2">
                      {solution.benefits.slice(0, 3).map((benefit, index) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                      {solution.benefits.length > 3 && (
                        <li className="text-sm text-gray-500">
                          +{solution.benefits.length - 3} more benefits
                        </li>
                      )}
                    </ul>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                  >
                    <Link href={`/solutions/${solution.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Solutions */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver strategic solutions that create lasting value and drive
              sustainable business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Strategic Approach",
                description:
                  "We align technology solutions with your business objectives for maximum impact and ROI.",
                icon: "Target",
              },
              {
                title: "Proven Methodology",
                description:
                  "Time-tested frameworks and best practices ensure successful solution implementation.",
                icon: "CheckCircle",
              },
              {
                title: "Change Management",
                description:
                  "Comprehensive change management support to ensure smooth adoption and user acceptance.",
                icon: "Users",
              },
              {
                title: "Measurable Results",
                description:
                  "Clear KPIs and metrics to track progress and demonstrate tangible business value.",
                icon: "BarChart",
              },
              {
                title: "Ongoing Support",
                description:
                  "Continuous optimization and support to ensure long-term success and value realization.",
                icon: "Headphones",
              },
              {
                title: "Industry Expertise",
                description:
                  "Deep domain knowledge across multiple industries and business functions.",
                icon: "Award",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 text-emerald-600" />
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
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Let's discuss your challenges and create a strategic solution that
            drives sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-emerald-600 hover:bg-gray-100"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
            >
              <Link href="/pricing">View Investment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
