"use client";

import { useState, useEffect } from "react";
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
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Award,
  Users,
  Globe,
  Heart,
  Lightbulb,
  Shield,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/lib/data/company";

export default function AboutPage() {
  const [counters, setCounters] = useState(
    companyData.stats.metrics.reduce((acc, metric) => {
      acc[metric.label] = 0;
      return acc;
    }, {} as Record<string, number>)
  );

  useEffect(() => {
    const animateCounters = () => {
      companyData.stats.metrics.forEach((metric) => {
        const target = Number.parseInt(metric.number.replace(/[^0-9]/g, ""));
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
              [metric.label]: Math.floor(current),
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

    const statsSection = document.getElementById("stats-section");
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  const iconMap = {
    Lightbulb,
    Award,
    Users,
    Shield,
    Globe,
    Heart,
    MapPin,
    Mail,
    Phone,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-48 pb-16 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">
                Since {companyData.hero.foundedYear}
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                {companyData.hero.title}
              </h1>
              <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 font-semibold mb-6">
                {companyData.hero.subtitle}
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {companyData.hero.description}
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-sm text-gray-600">
                    {companyData.hero.headquarters}
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-emerald-500 mr-2" />
                  <span className="text-sm text-gray-600">
                    {companyData.hero.employees} Team Members
                  </span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-purple-500 mr-2" />
                  <span className="text-sm text-gray-600">Global Reach</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link href="/contact">
                    Work With Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl p-8">
                <Image
                  src={companyData.hero.image || "/placeholder.svg"}
                  alt="CodeNextSolutions Team"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {companyData.mission.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              {companyData.mission.description}
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              <strong>Our Vision:</strong> {companyData.mission.vision}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyData.mission.values.map((value, index) => {
              const IconComponent = iconMap[value.icon as keyof typeof iconMap];
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {IconComponent && (
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      )}
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats with Parallax Effect */}
      <section
        id="stats-section"
        className="py-16 bg-gradient-to-r from-blue-600 to-emerald-600 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            {companyData.stats.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyData.stats.metrics.map((metric, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl sm:text-5xl font-bold mb-2">
                  {metric.number.includes("+") ||
                  metric.number.includes("%") ||
                  metric.number.includes("/")
                    ? metric.number
                    : `${counters[metric.label]}${metric.number.replace(
                        /[0-9]/g,
                        ""
                      )}`}
                </div>
                <div className="text-xl font-semibold mb-2">{metric.label}</div>
                <div className="text-blue-100">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {companyData.team.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {companyData.team.description}
            </p>
          </div>

          <div className="grid grid-cols-1">
            {companyData.team.members.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  {/* <div className="flex justify-center space-x-3">
                    <Link
                      href={member.linkedin}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link
                      href={member.twitter}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </Link>
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      {/* <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {companyData.locations.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {companyData.locations.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyData.locations.offices.map((office, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow duration-300 ${
                  office.isHeadquarters ? "border-2 border-blue-500" : ""
                }`}
              >
                <CardHeader>
                  {office.isHeadquarters && (
                    <Badge className="mb-2 bg-blue-500 w-fit">
                      Headquarters
                    </Badge>
                  )}
                  <CardTitle className="text-xl flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                    {office.city}, {office.country}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400 mt-1" />
                    <span className="text-sm text-gray-600">
                      {office.address}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {office.phone}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {office.email}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Culture */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {companyData.culture.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {companyData.culture.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyData.culture.highlights.map((highlight, index) => {
              const IconComponent =
                iconMap[highlight.icon as keyof typeof iconMap];
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {IconComponent && (
                        <IconComponent className="w-8 h-8 text-emerald-600" />
                      )}
                    </div>
                    <CardTitle className="text-lg">{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {highlight.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      {/* <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {companyData.certifications.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyData.certifications.items.map((cert, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.name}
                    width={200}
                    height={100}
                    className="mx-auto mb-4"
                  />
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {cert.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
