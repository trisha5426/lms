import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Unlimited access to all video lectures",
  "Complete previous year paper collection",
  "Expert-written case summaries",
  "Sample answers with explanations",
];

export function CTA() {
  return (
    <section className="bg-foreground py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl text-balance">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-background/70">
            Join thousands of Delhi University LL.B. students who are already
            preparing smarter with Lumin. Your academic success starts here.
          </p>
          
          {/* Benefits list */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-sm text-background/80"
              >
                <CheckCircle className="h-4 w-4 text-primary" />
                {benefit}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:gap-3"
            >
              Start Learning Today
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="text-sm text-background/50">
              No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
