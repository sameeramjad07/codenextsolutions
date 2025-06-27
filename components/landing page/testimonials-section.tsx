import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechStart Inc.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "CodeNextSolutions transformed our outdated system into a modern, scalable platform. Their expertise in cloud architecture and attention to detail exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, HealthTech Solutions",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "Working with CodeNextSolutions was a game-changer for our healthcare platform. They delivered a HIPAA-compliant solution that our users love, on time and within budget.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "VP of Engineering, FinanceFlow",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    content:
      "The team's deep understanding of fintech regulations and security requirements made them the perfect partner for our digital transformation. Highly recommended!",
    rating: 5,
  },
];

const trustLogos = [
  {
    name: "TechStart",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "HealthTech",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "FinanceFlow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "EduPlatform",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "LogiTech",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about working with CodeNextSolutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-blue-200 mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <p className="text-gray-600 mb-8 font-medium">
            Trusted by leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {trustLogos.map((company, index) => (
              <Image
                key={index}
                src={company.logo || "/placeholder.svg"}
                alt={company.name}
                width={120}
                height={40}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
