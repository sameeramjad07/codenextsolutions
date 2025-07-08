"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Check, Calculator, Zap, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Startup",
    price: "$2,500",
    period: "per project",
    description:
      "Perfect for startups and small businesses looking to establish their digital presence",
    features: [
      "Basic web application",
      "Responsive design",
      "Up to 5 pages/screens",
      "Basic SEO optimization",
      "3 months support",
      "Source code included",
    ],
    popular: false,
    color: "blue",
  },
  {
    name: "Professional",
    price: "$7,500",
    period: "per project",
    description:
      "Ideal for growing businesses that need comprehensive digital solutions",
    features: [
      "Advanced web/mobile app",
      "Custom UI/UX design",
      "Up to 15 pages/screens",
      "Database integration",
      "API development",
      "6 months support",
      "Performance optimization",
      "Security implementation",
    ],
    popular: true,
    color: "emerald",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "quote",
    description:
      "Comprehensive solutions for large organizations with complex requirements",
    features: [
      "Full-scale application",
      "Advanced architecture",
      "Unlimited pages/screens",
      "Third-party integrations",
      "Advanced security",
      "12 months support",
      "Performance monitoring",
      "Dedicated project manager",
      "Training & documentation",
    ],
    popular: false,
    color: "purple",
  },
];

export default function PricingPage() {
  const [calculatorData, setCalculatorData] = useState({
    projectType: "",
    complexity: "medium",
    features: [] as string[],
    timeline: 12,
    teamSize: 3,
    platforms: [] as string[],
  });

  const [estimatedCost, setEstimatedCost] = useState(0);

  const calculateCost = () => {
    let baseCost = 0;

    // Base cost by project type
    switch (calculatorData.projectType) {
      case "web-app":
        baseCost = 15000;
        break;
      case "mobile-app":
        baseCost = 20000;
        break;
      case "custom-software":
        baseCost = 30000;
        break;
      case "ai-solution":
        baseCost = 40000;
        break;
      case "ecommerce":
        baseCost = 18000;
        break;
      default:
        baseCost = 15000;
    }

    // Complexity multiplier
    const complexityMultiplier =
      {
        simple: 0.7,
        medium: 1.0,
        complex: 1.5,
        enterprise: 2.0,
      }[calculatorData.complexity] || 1.0;

    // Features cost
    const featureCost = calculatorData.features.length * 2000;

    // Timeline adjustment
    const timelineMultiplier =
      calculatorData.timeline < 8
        ? 1.3
        : calculatorData.timeline > 16
        ? 0.9
        : 1.0;

    // Team size cost
    const teamCost = (calculatorData.teamSize - 1) * 5000;

    // Platform multiplier
    const platformMultiplier = calculatorData.platforms.length > 1 ? 1.2 : 1.0;

    const totalCost =
      (baseCost * complexityMultiplier + featureCost + teamCost) *
      timelineMultiplier *
      platformMultiplier;

    setEstimatedCost(Math.round(totalCost));
  };

  const toggleFeature = (feature: string) => {
    setCalculatorData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  const togglePlatform = (platform: string) => {
    setCalculatorData((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter((p) => p !== platform)
        : [...prev.platforms, platform],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-48 pb-16">
        <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Transparent Pricing for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              {" "}
              Every Project
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your project or use our cost calculator
            to get a personalized estimate
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-2 ${
                  plan.popular
                    ? "border-emerald-500 shadow-xl scale-105"
                    : "border-gray-200"
                } hover:shadow-lg transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-emerald-500 text-white px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-4 text-gray-600">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full ${
                      plan.popular
                        ? "bg-emerald-600 hover:bg-emerald-700"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Cost Calculator */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Project Cost Calculator
            </h2>
            <p className="text-xl text-gray-600">
              Get an instant estimate for your custom project
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center">
                  <Calculator className="h-6 w-6 mr-2 text-blue-600" />
                  Project Details
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 space-y-6">
                {/* Project Type */}
                <div>
                  <Label className="text-base font-medium">Project Type</Label>
                  <Select
                    value={calculatorData.projectType}
                    onValueChange={(value) =>
                      setCalculatorData((prev) => ({
                        ...prev,
                        projectType: value,
                      }))
                    }
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-app">Web Application</SelectItem>
                      <SelectItem value="mobile-app">
                        Mobile Application
                      </SelectItem>
                      <SelectItem value="custom-software">
                        Custom Software
                      </SelectItem>
                      <SelectItem value="ai-solution">
                        AI/ML Solution
                      </SelectItem>
                      <SelectItem value="ecommerce">
                        E-commerce Platform
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Complexity */}
                <div>
                  <Label className="text-base font-medium">
                    Project Complexity
                  </Label>
                  <Select
                    value={calculatorData.complexity}
                    onValueChange={(value) =>
                      setCalculatorData((prev) => ({
                        ...prev,
                        complexity: value,
                      }))
                    }
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="simple">
                        Simple (Basic functionality)
                      </SelectItem>
                      <SelectItem value="medium">
                        Medium (Standard features)
                      </SelectItem>
                      <SelectItem value="complex">
                        Complex (Advanced features)
                      </SelectItem>
                      <SelectItem value="enterprise">
                        Enterprise (Full-scale solution)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Timeline */}
                <div>
                  <Label className="text-base font-medium">
                    Timeline (weeks): {calculatorData.timeline}
                  </Label>
                  <Slider
                    value={[calculatorData.timeline]}
                    onValueChange={(value) =>
                      setCalculatorData((prev) => ({
                        ...prev,
                        timeline: value[0],
                      }))
                    }
                    max={24}
                    min={4}
                    step={2}
                    className="mt-4"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>4 weeks</span>
                    <span>24 weeks</span>
                  </div>
                </div>

                {/* Team Size */}
                <div>
                  <Label className="text-base font-medium">
                    Team Size: {calculatorData.teamSize} developers
                  </Label>
                  <Slider
                    value={[calculatorData.teamSize]}
                    onValueChange={(value) =>
                      setCalculatorData((prev) => ({
                        ...prev,
                        teamSize: value[0],
                      }))
                    }
                    max={8}
                    min={1}
                    step={1}
                    className="mt-4"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>1 developer</span>
                    <span>8 developers</span>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <Label className="text-base font-medium">
                    Additional Features
                  </Label>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    {[
                      "User Authentication",
                      "Payment Integration",
                      "Admin Dashboard",
                      "Real-time Features",
                      "Third-party APIs",
                      "Advanced Analytics",
                      "Multi-language",
                      "Push Notifications",
                    ].map((feature) => (
                      <button
                        key={feature}
                        onClick={() => toggleFeature(feature)}
                        className={`p-3 text-sm rounded-lg border transition-colors ${
                          calculatorData.features.includes(feature)
                            ? "bg-blue-50 border-blue-500 text-blue-700"
                            : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {feature}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Platforms */}
                <div>
                  <Label className="text-base font-medium">
                    Target Platforms
                  </Label>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    {["Web", "iOS", "Android", "Desktop"].map((platform) => (
                      <button
                        key={platform}
                        onClick={() => togglePlatform(platform)}
                        className={`p-3 text-sm rounded-lg border transition-colors ${
                          calculatorData.platforms.includes(platform)
                            ? "bg-emerald-50 border-emerald-500 text-emerald-700"
                            : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {platform}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={calculateCost}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  size="lg"
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Estimate
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-emerald-50">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center">
                  <Zap className="h-6 w-6 mr-2 text-emerald-600" />
                  Your Project Estimate
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                {estimatedCost > 0 ? (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-gray-900 mb-2">
                        ${estimatedCost.toLocaleString()}
                      </div>
                      <p className="text-gray-600">Estimated project cost</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Project Type</span>
                        <span className="font-medium capitalize">
                          {calculatorData.projectType.replace("-", " ")}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Complexity</span>
                        <span className="font-medium capitalize">
                          {calculatorData.complexity}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Timeline</span>
                        <span className="font-medium">
                          {calculatorData.timeline} weeks
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Team Size</span>
                        <span className="font-medium">
                          {calculatorData.teamSize} developers
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">
                          Additional Features
                        </span>
                        <span className="font-medium">
                          {calculatorData.features.length}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600">Platforms</span>
                        <span className="font-medium">
                          {calculatorData.platforms.length || 1}
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-sm text-gray-600 mb-3">
                        This estimate includes:
                      </p>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-emerald-500 mr-2" />
                          Project planning & analysis
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-emerald-500 mr-2" />
                          Design & development
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-emerald-500 mr-2" />
                          Testing & quality assurance
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-emerald-500 mr-2" />
                          Deployment & launch support
                        </li>
                      </ul>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-emerald-600 hover:bg-emerald-700"
                      size="lg"
                    >
                      <Link href="/contact">
                        Get Detailed Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calculator className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">
                      Fill out the form and click "Calculate Estimate" to see
                      your project cost
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {[
              {
                question: "How accurate are the cost estimates?",
                answer:
                  "Our calculator provides estimates based on industry standards and our experience. Final costs may vary based on specific requirements, but estimates are typically within 15-20% of the actual project cost.",
              },
              {
                question: "What's included in the project cost?",
                answer:
                  "All our projects include planning, design, development, testing, deployment, and initial support. Additional services like ongoing maintenance, training, or extended support are quoted separately.",
              },
              {
                question: "Do you offer fixed-price contracts?",
                answer:
                  "Yes, we offer both fixed-price and time-and-materials contracts. Fixed-price works best for well-defined projects, while T&M is better for projects with evolving requirements.",
              },
              {
                question: "What payment terms do you offer?",
                answer:
                  "We typically work with milestone-based payments: 30% upfront, 40% at mid-project milestone, and 30% upon completion. We're flexible and can discuss terms that work for your budget.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
