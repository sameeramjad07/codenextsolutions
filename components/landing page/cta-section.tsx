import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
          Let's discuss your project and explore how we can help you achieve
          your digital transformation goals. Get started with a free
          consultation today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
          >
            <Link href="/contact" className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Free Consultation
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
          >
            <Link href="/contact" className="flex items-center">
              <MessageCircle className="mr-2 h-5 w-5" />
              Start a Conversation
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-blue-100">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-2">Free</div>
            <div>Initial Consultation</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-2">24h</div>
            <div>Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-2">100%</div>
            <div>Satisfaction Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
}
