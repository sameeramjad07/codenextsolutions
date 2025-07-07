import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Animation */}
        <div className="relative mb-8 my-16">
          <div className="text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 leading-none">
            404
          </div>
          <div className="absolute inset-0 text-[200px] font-bold text-blue-100 leading-none animate-pulse">
            404
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Oops! The page you're looking for seems to have wandered off into the
          digital void.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4"
          >
            <Link href="/" className="flex items-center">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="px-8 py-4 bg-transparent"
          >
            <Link href="/contact" className="flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              Contact Support
            </Link>
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Maybe you were looking for:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/services"
              className="flex items-center p-4 rounded-lg hover:bg-blue-50 transition-colors group"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                <Search className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Our Services</div>
                <div className="text-sm text-gray-600">
                  Explore what we offer
                </div>
              </div>
            </Link>
            <Link
              href="/about"
              className="flex items-center p-4 rounded-lg hover:bg-emerald-50 transition-colors group"
            >
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-200 transition-colors">
                <Search className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">About Us</div>
                <div className="text-sm text-gray-600">Learn our story</div>
              </div>
            </Link>
            <Link
              href="/portfolio"
              className="flex items-center p-4 rounded-lg hover:bg-purple-50 transition-colors group"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors">
                <Search className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Portfolio</div>
                <div className="text-sm text-gray-600">View our work</div>
              </div>
            </Link>
            <Link
              href="/pricing"
              className="flex items-center p-4 rounded-lg hover:bg-orange-50 transition-colors group"
            >
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-orange-200 transition-colors">
                <Search className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Pricing</div>
                <div className="text-sm text-gray-600">Get cost estimates</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Fun Fact
        <div className="mt-8 text-sm text-gray-500">
          Fun fact: HTTP 404 errors were named after room 404 at CERN, where the
          original web servers were located.
        </div> */}
      </div>
    </div>
  );
}
