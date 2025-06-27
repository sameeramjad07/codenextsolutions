"use client";

import type React from "react";

import Link from "next/link";
import {
  Code2,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
  Send,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative">
        {/* Top section with CTA */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Start Your Next Project?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Join 200+ companies that trust us with their digital
                transformation
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Link href="/contact" className="flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center space-x-2 text-slate-400">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-sm">4.9/5 Client Rating</span>
              </div>
              <div className="text-slate-400 text-sm">
                200+ Projects Delivered
              </div>
              <div className="text-slate-400 text-sm">24/7 Support</div>
              <div className="text-slate-400 text-sm">5+ Years Experience</div>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Company info - spans 4 columns */}
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <Code2 className="h-10 w-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-blue-400/20 rounded-lg blur-xl group-hover:bg-blue-300/30 transition-all duration-300" />
                </div>
                <span className="text-2xl font-bold text-white">
                  CodeNextSolutions
                </span>
              </Link>

              <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                Transforming businesses through innovative software solutions.
                We're your strategic technology partner for digital
                transformation.
              </p>

              {/* Contact info with modern styling */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors duration-300">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                    hello@codenextsolutions.com
                  </span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-600/20 transition-colors duration-300">
                    <Phone className="h-5 w-5 text-emerald-400" />
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-purple-600/20 transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-purple-400" />
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                    San Francisco, CA
                  </span>
                </div>
              </div>

              {/* Social links with hover effects */}
              <div className="flex space-x-4 mt-8">
                {[
                  { icon: Linkedin, href: "#", color: "hover:bg-blue-600" },
                  { icon: Twitter, href: "#", color: "hover:bg-sky-500" },
                  { icon: Github, href: "#", color: "hover:bg-gray-600" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation links - spans 6 columns */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6 relative">
                  Services
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full" />
                </h3>
                <ul className="space-y-3">
                  {[
                    {
                      name: "Custom Software",
                      href: "/services/custom-software",
                    },
                    {
                      name: "Web Development",
                      href: "/services/web-development",
                    },
                    {
                      name: "Mobile Apps",
                      href: "/services/mobile-development",
                    },
                    { name: "AI/ML Solutions", href: "/services/ai-ml" },
                    { name: "Cloud/DevOps", href: "/services/cloud-devops" },
                    { name: "UI/UX Design", href: "/services/ui-ux" },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-slate-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6 relative">
                  Company
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full" />
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: "About Us", href: "/about" },
                    { name: "Our Team", href: "/about/team" },
                    { name: "Careers", href: "/about/careers" },
                    // { name: "Case Studies", href: "/case-studies" },
                    // { name: "Blog", href: "/blog" },
                    { name: "Portfolio", href: "/portfolio" },
                    { name: "Pricing", href: "/pricing" },
                    { name: "Contact", href: "/contact" },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-slate-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6 relative">
                  Industries
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: "Healthcare", href: "/industries/healthcare" },
                    { name: "Finance", href: "/industries/finance" },
                    { name: "E-commerce", href: "/industries/ecommerce" },
                    { name: "Education", href: "/industries/education" },
                    { name: "Logistics", href: "/industries/logistics" },
                    { name: "Startups", href: "/industries/startups" },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-slate-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter - spans 2 columns */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold text-white mb-6 relative">
                Stay Updated
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full" />
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Get the latest insights, tips, and updates delivered to your
                inbox.
              </p>

              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-blue-400 focus:ring-blue-400/20 pr-12"
                    required
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Mail className="h-4 w-4 text-slate-400" />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    <>
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      Subscribe
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>

              {/* Newsletter benefits */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-slate-400">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  <span>Weekly tech insights</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-400">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  <span>Industry trends</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-400">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                  <span>No spam, unsubscribe anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400 text-sm">
                © 2024 CodeNextSolutions. All rights reserved. Built with ❤️ in
                San Francisco.
              </p>
              <div className="flex space-x-6">
                {[
                  { name: "Privacy Policy", href: "/privacy" },
                  { name: "Terms of Service", href: "/terms" },
                  { name: "Cookie Policy", href: "/cookies" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
