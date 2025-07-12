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
  Eye,
  Code,
  Lightbulb,
  Award,
  Globe,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Define the props type explicitly
type PortfolioPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = Object.keys(projects);
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function ProjectCaseStudy({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-white">
        {/* Animated Background */}
        {/* <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-[slide_20s_linear_infinite]"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div> */}

        {/* Navigation */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <Button
            asChild
            variant="ghost"
            className="text-black/80 hover:text-black hover:bg-black/10"
          >
            <Link href="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <Badge className="bg-black/10 text-black border-black/20 px-4 py-2 text-sm font-medium mb-6 backdrop-blur-sm">
                {project.category}
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                {project.title}
              </h1>

              <p className="text-xl text-black/80 mb-8 leading-relaxed">
                {project.description}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">
                    {project.year}
                  </div>
                  <div className="text-sm text-black/60">Year</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">
                    {project.technologies.length}+
                  </div>
                  <div className="text-sm text-black/60">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">
                    {project.features.length}
                  </div>
                  <div className="text-sm text-black/60">Features</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-black hover:bg-gray-100 px-8 py-3 bg-transparent"
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
                  className="text-black hover:bg-gray-100 px-8 py-3 bg-transparent"
                >
                  <Link href="#gallery">
                    <Eye className="mr-2 h-5 w-5" />
                    View Gallery
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={project.image || "/placeholder.svg?height=600&width=800"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {project.client}
                      </h3>
                      <p className="text-white/80">
                        {project.category} Solution
                      </p>
                    </div>
                    <Badge className="bg-green-500 text-white">Live</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <User className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Client</h3>
                <p className="text-gray-600">{project.client}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Year</h3>
                <p className="text-gray-600">{project.year}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Layers className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Category</h3>
                <Badge className="bg-purple-100 text-purple-800">
                  {project.category}
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Globe className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Status</h3>
                <Badge className="bg-green-100 text-green-800">
                  Live & Active
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Project Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive look at the challenges, solutions, and impact of
              this project
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Challenge */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <Target className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 ml-4">
                    Challenge
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {project.challenge}
                </p>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Lightbulb className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 ml-4">
                    Solution
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {project.solution}
                </p>
              </CardContent>
            </Card>

            {/* Impact */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 ml-4">
                    Impact
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {project.impact}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Project Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visual showcase of the project's interface, features, and user
              experience
            </p>
          </div>

          {/* Main Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* {
            project.gallery?.map((image, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <div className="relative aspect-video">
                  <Image
                    src={image.url || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        className="bg-white text-gray-900 hover:bg-gray-100"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {image.title}
                  </h3>
                  <p className="text-sm text-gray-600">{image.description}</p>
                </CardContent>
              </Card>
            )) || (s
            )} */}
            {/* // Fallback gallery if no gallery data exists */}
            <>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src="/project.png?height=400&width=600"
                    alt="Dashboard View"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Dashboard Overview
                  </h3>
                  <p className="text-sm text-gray-600">
                    Main dashboard interface with key metrics
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src="/project.png?height=400&width=600"
                    alt="Mobile View"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Mobile Experience
                  </h3>
                  <p className="text-sm text-gray-600">
                    Responsive design optimized for mobile devices
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src="/project.png?height=400&width=600"
                    alt="Admin Panel"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Admin Panel
                  </h3>
                  <p className="text-sm text-gray-600">
                    Comprehensive admin interface for management
                  </p>
                </CardContent>
              </Card>
            </>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced technologies and innovative features powering this
              solution
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technologies */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Code className="mr-3 h-6 w-6 text-blue-600" />
                  Technologies Used
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <span className="font-medium text-gray-800">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Zap className="mr-3 h-6 w-6 text-green-600" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover:bg-green-200 transition-colors">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
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

      {/* Results & Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Measurable Results
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quantifiable impact and success metrics that demonstrate project
              value
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.results.map((result, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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
    </div>
  );
}
