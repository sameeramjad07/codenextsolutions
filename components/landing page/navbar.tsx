"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { navbarData } from "@/lib/data/navbar";

const { services, industries, solutions, technologies } = navbarData;

type NavItem = {
  name: string;
  href: string;
};

type NestedNavCategory = {
  name: string;
  href: string;
  items: NavItem[];
};

type MegaDropdownProps = {
  title: string;
  data:
    | Record<string, NestedNavCategory> // services, industries, solutions
    | Record<string, NavItem[]>; // technologies
  columns?: number;
  isTechnologies?: boolean;
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const MegaDropdown = ({
    title,
    data,
    columns = 3,
    isTechnologies = false,
  }: MegaDropdownProps) => (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
          <span>{title}</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </DialogTrigger>
      <DialogTitle className="sr-only">{title} Menu</DialogTitle>
      <DialogContent className="w-full max-w-full sm:max-w-3xl lg:max-w-5xl xl:max-w-6xl max-h-[80vh] overflow-y-auto p-0">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          </div>

          {isTechnologies ? (
            <div
              className={`grid grid-cols-1 md:grid-cols-${columns} gap-8 mb-8`}
            >
              {Object.entries(data).map(([category, items]) => (
                <div key={category}>
                  <h3 className="font-semibold text-gray-900 mb-4 text-lg border-b border-gray-200 pb-2">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {items.map((item: NavItem) => (
                      <li key={item.name}>
                        <DialogClose asChild>
                          <Link
                            href={item.href}
                            className="text-gray-600 hover:text-blue-600 transition-colors text-sm block py-1"
                          >
                            {item.name}
                          </Link>
                        </DialogClose>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div
              className={`grid grid-cols-1 md:grid-cols-${columns} gap-8 mb-8`}
            >
              {Object.entries(data).map(([category, categoryData]) => (
                <DialogClose asChild key={category}>
                  <Link href={categoryData.href}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-900">
                          {category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {categoryData.items.map((item: NavItem) => (
                            <li
                              key={item.name}
                              className="text-gray-600 text-sm"
                            >
                              {item.name}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </Link>
                </DialogClose>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">
              CodeNextSolutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </Link>

            <MegaDropdown title="Services" data={services} columns={3} />
            <MegaDropdown title="Industries" data={industries} columns={3} />
            <MegaDropdown title="Solutions" data={solutions} columns={3} />
            <MegaDropdown
              title="Technologies"
              data={technologies}
              columns={3}
              isTechnologies={true}
            />

            <Link
              href="/portfolio"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Portfolio
            </Link>

            <Link
              href="/pricing"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Pricing
            </Link>

            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4 max-h-96 overflow-y-auto">
            <div className="space-y-4">
              <Link
                href="/about"
                className="block text-gray-700 hover:text-blue-600 px-4 py-2"
              >
                About
              </Link>
              <Link
                href="/services"
                className="block text-gray-700 hover:text-blue-600 px-4 py-2"
              >
                Services
              </Link>
              <Link
                href="/industries"
                className="block text-gray-700 hover:text-blue-600 px-4 py-2"
              >
                Industries
              </Link>
              <Link
                href="/solutions"
                className="block text-gray-700 hover:text-blue-600 px-4 py-2"
              >
                Solutions
              </Link>
              <Link
                href="/technologies"
                className="block text-gray-700 hover:text-blue-600 px-4 py-2"
              >
                Technologies
              </Link>
              <Link
                href="/portfolio"
                className="block text-gray-700 hover:text-blue-600 px-4 py-2"
              >
                Portfolio
              </Link>
              <Link
                href="/pricing"
                className="block text-gray-700 hover:text-blue-600 px-4 py-2"
              >
                Pricing
              </Link>
              <div className="px-4">
                <Button
                  asChild
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <Link href="/contact">Contact us</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
