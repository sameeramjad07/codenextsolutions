import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Users,
  Clock,
  MessageSquare,
  Award,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Senior developers and designers with 5+ years of industry experience",
  },
  {
    icon: Zap,
    title: "Agile Workflow",
    description:
      "Fast, iterative development process with regular updates and feedback",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "Clear, honest communication throughout every stage of your project",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Committed to meeting deadlines without compromising on quality",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Rigorous testing and quality control processes for every deliverable",
  },
  {
    icon: CheckCircle,
    title: "Post-Launch Support",
    description: "Ongoing maintenance and support to ensure your success",
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose CodeNextSolutions?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We're not just another software development company. We're your
              strategic technology partner, committed to turning your vision
              into reality with cutting-edge solutions and exceptional service.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team combines technical expertise with business acumen to
              deliver solutions that don't just work—they drive results. From
              startups to enterprises, we've helped companies across industries
              achieve their digital transformation goals.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">On-Time Delivery</div>
              </div>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
