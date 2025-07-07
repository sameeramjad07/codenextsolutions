"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Calendar,
  Users,
  Zap,
  Shield,
  Award,
  Globe,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Get In Touch
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Let's Build Something
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                {" "}
                Amazing Together
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your business with cutting-edge technology?
              We're here to help you every step of the way. Get in touch and
              let's discuss your project.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 text-blue-500 mr-2" />
                Free Consultation
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-emerald-500 mr-2" />
                24h Response Time
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-purple-500 mr-2" />
                NDA Available
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-orange-500 mr-2" />
                Expert Team
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Send className="h-6 w-6 mr-3 text-blue-600" />
                    Tell Us About Your Project
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24
                    hours with a detailed proposal.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Thank You!
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Your message has been sent successfully. We'll get back
                        to you within 24 hours.
                      </p>
                      <Badge className="bg-emerald-100 text-emerald-800">
                        Message Sent
                      </Badge>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                            placeholder="John Doe"
                            required
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            placeholder="john@company.com"
                            required
                            className="mt-2"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            type="text"
                            value={formData.company}
                            onChange={(e) =>
                              handleInputChange("company", e.target.value)
                            }
                            placeholder="Your Company"
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                            placeholder="+1 (555) 123-4567"
                            className="mt-2"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="service">Service Interested In *</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            handleInputChange("service", value)
                          }
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="custom-software">
                              Custom Software Development
                            </SelectItem>
                            <SelectItem value="web-development">
                              Web Development
                            </SelectItem>
                            <SelectItem value="mobile-development">
                              Mobile App Development
                            </SelectItem>
                            <SelectItem value="ai-ml">
                              AI & Machine Learning
                            </SelectItem>
                            <SelectItem value="cloud-devops">
                              Cloud & DevOps
                            </SelectItem>
                            <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                            <SelectItem value="digital-transformation">
                              Digital Transformation
                            </SelectItem>
                            <SelectItem value="consulting">
                              IT Consulting
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="budget">Project Budget</Label>
                          <Select
                            value={formData.budget}
                            onValueChange={(value) =>
                              handleInputChange("budget", value)
                            }
                          >
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-10k">
                                Under $10,000
                              </SelectItem>
                              <SelectItem value="10k-25k">
                                $10,000 - $25,000
                              </SelectItem>
                              <SelectItem value="25k-50k">
                                $25,000 - $50,000
                              </SelectItem>
                              <SelectItem value="50k-100k">
                                $50,000 - $100,000
                              </SelectItem>
                              <SelectItem value="100k-250k">
                                $100,000 - $250,000
                              </SelectItem>
                              <SelectItem value="250k-plus">
                                $250,000+
                              </SelectItem>
                              <SelectItem value="discuss">
                                Let's Discuss
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="timeline">Project Timeline</Label>
                          <Select
                            value={formData.timeline}
                            onValueChange={(value) =>
                              handleInputChange("timeline", value)
                            }
                          >
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="asap">ASAP</SelectItem>
                              <SelectItem value="1-3-months">
                                1-3 months
                              </SelectItem>
                              <SelectItem value="3-6-months">
                                3-6 months
                              </SelectItem>
                              <SelectItem value="6-12-months">
                                6-12 months
                              </SelectItem>
                              <SelectItem value="12-plus-months">
                                12+ months
                              </SelectItem>
                              <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Project Description *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange("message", e.target.value)
                          }
                          placeholder="Tell us about your project, goals, and any specific requirements..."
                          rows={6}
                          required
                          className="mt-2"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl">Get In Touch</CardTitle>
                  <CardDescription>
                    Multiple ways to reach our team
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Email Us</h4>
                      <p className="text-gray-600">
                        hello@codenextsolutions.com
                      </p>
                      <p className="text-sm text-gray-500">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Call Us</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500">
                        Mon-Fri, 9AM-6PM PST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Visit Us</h4>
                      <p className="text-gray-600">San Francisco, CA</p>
                      <p className="text-sm text-gray-500">
                        By appointment only
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Schedule a Call
                      </h4>
                      <p className="text-gray-600">Book a free consultation</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2 bg-transparent"
                      >
                        Schedule Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">
                      Expert Team of 50+ Developers
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-700">Fast Turnaround Times</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">
                      Enterprise-Grade Security
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">
                      100+ Successful Projects
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-red-600" />
                    <span className="text-gray-700">Global Client Base</span>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl">Follow Us</CardTitle>
                  <CardDescription>
                    Stay updated with our latest work
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-blue-600" />
                    </Link>
                    <Link
                      href="#"
                      className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center hover:bg-sky-200 transition-colors"
                    >
                      <Twitter className="h-5 w-5 text-sky-600" />
                    </Link>
                    <Link
                      href="#"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <Github className="h-5 w-5 text-gray-600" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                How quickly can you start my project?
              </h3>
              <p className="text-gray-600 text-sm">
                We can typically start new projects within 1-2 weeks after
                finalizing requirements and contracts.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Do you provide ongoing support?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes, we offer comprehensive support and maintenance packages for
                all our projects.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                What's your development process?
              </h3>
              <p className="text-gray-600 text-sm">
                We follow agile methodologies with regular updates, testing, and
                client feedback throughout development.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Do you work with international clients?
              </h3>
              <p className="text-gray-600 text-sm">
                We work with clients worldwide and have experience with
                different time zones and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
