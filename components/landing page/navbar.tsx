"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Code2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const servicesData = {
  "Software Development": [
    "Custom Software Development",
    "Enterprise Software Solutions",
    "Software Modernization",
    "Legacy System Migration",
    "API Development & Integration",
    "Microservices Architecture",
  ],
  "Web Development": [
    "Frontend Development",
    "Backend Development",
    "Full-Stack Development",
    "Progressive Web Apps",
    "E-commerce Development",
    "CMS Development",
  ],
  "Mobile App Development": [
    "iOS App Development",
    "Android App Development",
    "Cross-Platform Development",
    "React Native Development",
    "Flutter Development",
    "Mobile App Testing",
  ],
  "AI & Data Solutions": [
    "Machine Learning",
    "Artificial Intelligence",
    "Data Analytics",
    "Big Data Solutions",
    "Computer Vision",
    "Natural Language Processing",
  ],
  "Cloud & DevOps": [
    "Cloud Migration",
    "AWS Solutions",
    "Azure Solutions",
    "Google Cloud Platform",
    "DevOps Implementation",
    "Infrastructure as Code",
  ],
  "UI/UX Design": [
    "User Experience Design",
    "User Interface Design",
    "Design Systems",
    "Prototyping",
    "Usability Testing",
    "Brand Identity",
  ],
};

const industriesData = {
  Healthcare: [
    "Healthcare Providers",
    "Medical Devices & Diagnostics",
    "Medical Laboratories",
    "Biotech & Pharma",
    "Healthcare Payers",
    "Telemedicine Solutions",
  ],
  Finance: [
    "Financial Services",
    "Banking Solutions",
    "Insurance Technology",
    "Investment Platforms",
    "FinTech Solutions",
    "Payment Systems",
  ],
  "E-commerce & Retail": [
    "E-commerce Platforms",
    "Retail Management",
    "Inventory Systems",
    "Point of Sale",
    "Supply Chain",
    "Customer Analytics",
  ],
  Education: [
    "Learning Management Systems",
    "Educational Apps",
    "Student Information Systems",
    "Online Course Platforms",
    "Assessment Tools",
    "Virtual Classrooms",
  ],
  Manufacturing: [
    "Industrial IoT",
    "Manufacturing Execution",
    "Quality Management",
    "Supply Chain Management",
    "Predictive Maintenance",
    "Automation Systems",
  ],
  "Other Industries": [
    "Transportation & Logistics",
    "Real Estate Technology",
    "Travel & Hospitality",
    "Energy & Utilities",
    "Government Solutions",
    "Non-Profit Organizations",
  ],
};

const solutionsData = {
  "Digital Transformation": [
    "Business Process Automation",
    "Digital Strategy Consulting",
    "Technology Roadmapping",
    "Change Management",
    "Digital Innovation",
    "Workflow Optimization",
  ],
  "IT Consulting": [
    "Technology Assessment",
    "Architecture Design",
    "IT Strategy Planning",
    "System Integration",
    "Performance Optimization",
    "Security Consulting",
  ],
  "Managed Services": [
    "Application Maintenance",
    "Infrastructure Management",
    "24/7 Support Services",
    "Monitoring & Analytics",
    "Backup & Recovery",
    "Security Management",
  ],
};

const technologiesData = {
  "Frontend Technologies": [
    "React.js",
    "Vue.js",
    "Angular",
    "Next.js",
    "TypeScript",
    "JavaScript",
  ],
  "Backend Technologies": [
    ".NET",
    "Node.js",
    "Python",
    "Java",
    "PHP",
    "Ruby on Rails",
  ],
  "Mobile Technologies": [
    "React Native",
    "Flutter",
    "Swift",
    "Kotlin",
    "Xamarin",
    "Ionic",
  ],
  "Cloud Platforms": [
    "Amazon Web Services",
    "Microsoft Azure",
    "Google Cloud Platform",
    "Digital Ocean",
    "Heroku",
    "Vercel",
  ],
  Databases: [
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Redis",
    "Elasticsearch",
    "Firebase",
  ],
  "AI/ML Technologies": [
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "OpenAI",
    "Hugging Face",
    "Computer Vision",
  ],
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
  }: {
    title: string;
    data: Record<string, string[]>;
    columns?: number;
  }) => (
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

          <div
            className={`grid grid-cols-1 md:grid-cols-${columns} gap-8 mb-8`}
          >
            {Object.entries(data).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-semibold text-gray-900 mb-4 text-lg border-b border-gray-200 pb-2">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item}>
                      <Link
                        href={`/${title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}/${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="text-gray-600 hover:text-blue-600 transition-colors text-sm block py-1"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-medium text-gray-900 mb-4">
              Find exactly what you need:
            </h3>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Search services, technologies, or solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
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

            <MegaDropdown title="Services" data={servicesData} columns={3} />
            <MegaDropdown
              title="Industries"
              data={industriesData}
              columns={3}
            />
            <MegaDropdown title="Solutions" data={solutionsData} columns={3} />
            <MegaDropdown
              title="Technologies"
              data={technologiesData}
              columns={3}
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
