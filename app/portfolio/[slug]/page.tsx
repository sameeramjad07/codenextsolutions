import { notFound } from "next/navigation";
import { projects } from "@/lib/data/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  ExternalLink,
  Calendar,
  User,
  Layers,
  Zap,
  Target,
  TrendingUp,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Define the props type explicitly
type PortfolioPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  // Assuming industriesData keys are your slugs
  const slugs = Object.keys(projects);

  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function ProjectCaseStudy({ params }: PortfolioPageProps) {
  // Await the params to resolve the Promise
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className={`pt-24 pb-16 relative min-h-[80vh] flex items-center justify-center overflow-hidden`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.1%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-10 w-24 h-24 bg-white/10 rounded-full blur-lg animate-bounce"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Badge
              className={`bg-white border border-slate-400 px-6 py-2 text-lg font-medium mb-6 backdrop-blur-sm ${project.theme.accent}`}
            >
              {project.category}
            </Badge>
          </div>

          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${project.theme.accent}`}
          >
            {project.title}
          </h1>

          <p
            className={`text-xl sm:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed ${project.theme.DescriptionAccent}`}
          >
            {project.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className={`${project.theme.accent} bg-white hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-300`}
            >
              <Link href="/contact">
                Start Your Project
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className={`border-2 ${project.theme.accent} hover:bg-gray-100 hover:text-gray-900 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-transparent transition-all duration-300`}
            >
              <Link href="#details">View Details</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="border-b sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            asChild
            variant="ghost"
            className="text-gray-600 hover:text-blue-600 hover:bg-blue-50"
          >
            <Link href="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
      </div>

      {/* Project Overview Cards */}
      <section id="details" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-6 text-center">
                <User className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Client</h3>
                <p className="text-gray-600">{project.client}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Year</h3>
                <p className="text-gray-600">{project.year}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="p-6 text-center">
                <Layers className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Category</h3>
                <Badge
                  className={`${project.theme.secondary} ${project.theme.accent} border-0`}
                >
                  {project.category}
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardContent className="p-6 text-center">
                <Zap className="h-8 w-8 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Status</h3>
                <Badge className="bg-green-100 text-green-800 border-0">
                  Completed
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Project Image */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div className="relative h-96 lg:h-[500px]">
                  <Image
                    src={project.image || "/project.png?height=500&width=800"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.theme.primary} opacity-20`}
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/90">{project.client}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg overflow-hidden rounded-lg relative bg-white">
                <div
                  className={`absolute top-0 left-0 right-0 h-16 bg-gradient-to-r ${project.theme.primary} text-white z-0 rounded-t-lg`}
                />
                <div className="relative z-10 pl-4 text-white">
                  <div className="text-xl font-bold flex items-center">
                    <Target className="mr-2 h-5 w-5" />
                    Challenge
                  </div>
                </div>
                <CardContent className="p-6 pt-2 relative z-10 bg-white">
                  <p className="text-gray-600 leading-relaxed">
                    {project.challenge}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg overflow-hidden rounded-lg relative bg-white">
                {/* Gradient Top Layer */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-green-500 to-teal-600 z-0 rounded-t-lg" />
                {/* Card Content Over Gradient */}
                <div className="relative z-10 pl-4 text-white">
                  <div className="text-xl font-bold flex items-center">
                    <Zap className="mr-2 h-5 w-5" />
                    Solution
                  </div>
                </div>

                <CardContent className="p-6 pt-2 relative z-10 bg-white">
                  <p className="text-gray-600 leading-relaxed">
                    {project.solution}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg overflow-hidden rounded-lg relative bg-white">
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-purple-500 to-pink-600 text-white z-0 rounded-t-lg" />
                <div className="relative z-10 pl-4 text-white">
                  <div className="text-xl font-bold flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Impact
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {project.impact}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies and Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technologies and innovative features that power this
              solution
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technologies */}
            <Card className="border-0 shadow-xl overflow-hidden rounded-lg relative bg-white">
              {/* Gradient Top Bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-16 bg-gradient-to-r ${project.theme.primary} z-0 rounded-t-lg`}
              />

              {/* Title Over Gradient */}
              <div className="relative z-10 pl-4 text-white">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Layers className="mr-3 h-6 w-6" />
                  Technologies Used
                </CardTitle>
              </div>

              {/* Content */}
              <CardContent className="p-8 pt-2 relative z-10 bg-white">
                <div className="grid grid-cols-2 gap-4">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div
                        className={`w-3 h-3 rounded-full ${project.theme.secondary} mr-3`}
                      />
                      <span className="font-medium text-gray-800">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="border-0 shadow-xl overflow-hidden rounded-lg relative bg-white">
              {/* Gradient Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-green-500 to-teal-600 z-0 rounded-t-lg" />

              {/* Title Over Gradient */}
              <div className="relative z-10 pl-4 text-white">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <CheckCircle className="mr-3 h-6 w-6" />
                  Key Features
                </CardTitle>
              </div>

              {/* Content */}
              <CardContent className="p-8 pt-2 relative z-10 bg-white">
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start group">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0 group-hover:text-green-600 transition-colors" />
                      <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Measurable Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The impact and success metrics that demonstrate the project's
              value
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.results.map((result, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${project.theme.primary} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">
                    {result}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`py-20 bg-gradient-to-r ${project.theme.primary} relative overflow-hidden`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.2%3E%3Cpath d=M30 30l15-15v30l-15-15zm-15 0l15 15v-30l-15 15z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's create something extraordinary together. Our team is ready to
            bring your vision to life with cutting-edge technology and
            innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Link href="/contact">
                Start Your Project
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 bg-transparent"
            >
              <Link href="/portfolio">View More Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
