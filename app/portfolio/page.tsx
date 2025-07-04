"use client";

import { useState, useEffect, useRef } from "react";
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
  ExternalLink,
  Star,
  CheckCircle,
  Users,
  TrendingUp,
  Award,
  Heart,
  DollarSign,
  ShoppingCart,
  BookOpen,
  Truck,
  Factory,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { portfolioData } from "@/lib/data/portfolio";

const iconMap = {
  Heart,
  DollarSign,
  ShoppingCart,
  BookOpen,
  Truck,
  Factory,
  Star,
  Users,
  TrendingUp,
  Award,
};

export default function PortfolioPage() {
  const [activeProject, setActiveProject] = useState(0);
  const [counters, setCounters] = useState(
    portfolioData.hero.stats.reduce((acc, stat) => {
      acc[stat.label] = 0;
      return acc;
    }, {} as Record<string, number>)
  );
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateCounters = () => {
      portfolioData.hero.stats.forEach((stat) => {
        const target = Number.parseInt(stat.number.replace(/[^0-9]/g, ""));
        if (target) {
          let current = 0;
          const increment = target / 100;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            setCounters((prev) => ({
              ...prev,
              [stat.label]: Math.floor(current),
            }));
          }, 20);
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    const heroSection = document.getElementById("hero-stats");
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineItems = timelineRef.current.querySelectorAll(
        "[data-timeline-item]"
      );
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemTop = rect.top + window.scrollY;

        if (
          scrollPosition >= itemTop &&
          scrollPosition < itemTop + rect.height
        ) {
          setActiveProject(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
          style={{
            transform: `translateY(${
              typeof window !== "undefined" ? window.scrollY * 0.5 : 0
            }px)`,
          }}
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/20 rounded-full animate-bounce" />
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-indigo-400/20 rounded-full animate-ping" />
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-pink-400/20 rounded-full animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            {portfolioData.hero.title}
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-8 text-blue-200 animate-fade-in-up">
            {portfolioData.hero.subtitle}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-up">
            {portfolioData.hero.description}
          </p>

          {/* Animated Stats */}
          <div
            id="hero-stats"
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          >
            {portfolioData.hero.stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl sm:text-5xl font-bold mb-2">
                  {stat.number.includes("+") || stat.number.includes("%")
                    ? stat.number
                    : `${counters[stat.label]}${stat.number.replace(
                        /[0-9]/g,
                        ""
                      )}`}
                </div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>

          <Button
            asChild
            size="lg"
            className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg animate-fade-in-up"
          >
            <Link href="#timeline">
              Explore Our Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industries We Transform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From healthcare to fintech, we've delivered innovative solutions
              across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.categories.map((category, index) => {
              const IconComponent =
                iconMap[category.icon as keyof typeof iconMap];
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {IconComponent && (
                        <IconComponent
                          className={`w-8 h-8 ${category.color}`}
                        />
                      )}
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      {category.count}
                    </div>
                    <div className="text-sm text-gray-600">
                      Projects Completed
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-white" ref={timelineRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {portfolioData.timeline.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {portfolioData.timeline.subtitle}
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />

            {portfolioData.timeline.projects.map((project, index) => (
              <div
                key={index}
                data-timeline-item
                className={`relative mb-20 ${
                  index % 2 === 0
                    ? "text-right pr-1/2 mr-8"
                    : "text-left pl-1/2 ml-8"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute top-8 w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-500 ${
                    activeProject === index
                      ? `bg-gradient-to-r ${project.theme.primary} scale-125`
                      : "bg-gray-400 scale-100"
                  } ${index % 2 === 0 ? "-right-11" : "-left-11"}`}
                />

                {/* Year Badge */}
                <div
                  className={`inline-block mb-4 ${
                    index % 2 === 0 ? "mr-8" : "ml-8"
                  } px-4 py-2 bg-gradient-to-r ${
                    project.theme.primary
                  } text-white rounded-full font-bold text-lg shadow-lg`}
                >
                  {project.year}
                </div>

                {/* Project Card */}
                <Card
                  className={`transition-all duration-500 hover:shadow-2xl ${
                    activeProject === index
                      ? "shadow-xl scale-105"
                      : "shadow-lg"
                  } ${index % 2 === 0 ? "mr-8" : "ml-8"} overflow-hidden`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div
                      className={`${
                        index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="relative h-64 lg:h-full">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${project.theme.primary} opacity-20`}
                        />
                      </div>
                    </div>

                    <div
                      className={`p-8 ${
                        index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Badge
                          className={`${project.theme.secondary} ${project.theme.accent} border-0`}
                        >
                          {project.category}
                        </Badge>
                        <Badge variant="outline">{project.client}</Badge>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Key Results:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.results.map((result, resultIndex) => (
                            <div
                              key={resultIndex}
                              className="flex items-center"
                            >
                              <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                              <span className="text-sm text-gray-600">
                                {result}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button
                        asChild
                        className={`bg-gradient-to-r ${project.theme.primary} hover:opacity-90 text-white`}
                      >
                        <Link href={`/portfolio/${project.id}`}>
                          View Case Study
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {portfolioData.technologies.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {portfolioData.technologies.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.technologies.categories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} className={category.color}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from the leaders who trusted us with their digital
              transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioData.testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <CardTitle className="text-lg">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription>
                        {testimonial.role} • {testimonial.company}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {portfolioData.cta.title}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {portfolioData.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Link href={portfolioData.cta.primaryButton.href}>
                {portfolioData.cta.primaryButton.text}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href={portfolioData.cta.secondaryButton.href}>
                {portfolioData.cta.secondaryButton.text}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
