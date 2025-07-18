"use client";

import { useState } from "react";
import { MessageCircle, Mail, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-3 z-50">
      {/* Contact Options */}
      <div
        className={`mb-4 space-y-3 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* WhatsApp */}
        <Link
          href="https://wa.me/923325804606"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 group"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-sm font-medium">WhatsApp</span>
        </Link>

        {/* Email */}
        <Link
          href="mailto:stivemartin741@gmail.com"
          className="flex items-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 group"
        >
          <Mail className="h-5 w-5" />
          <span className="text-sm font-medium">Email</span>
        </Link>

        {/* Phone
        <Link
          href="tel:+15551234567"
          className="flex items-center space-x-3 bg-purple-500 hover:bg-purple-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 group"
        >
          <Phone className="h-5 w-5" />
          <span className="text-sm font-medium">Call</span>
        </Link> */}
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={toggleMenu}
        className={`relative w-14 h-14 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
          isOpen
            ? "bg-red-500 hover:bg-red-600"
            : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        }`}
      >
        <div
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          ) : (
            <MessageCircle className="h-6 w-6 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          )}
        </div>
      </button>

      {/* Pulse Animation Ring */}
      {!isOpen && (
        <div className="absolute inset-0 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-ping opacity-20 pointer-events-none" />
      )}
    </div>
  );
}
