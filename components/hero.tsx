import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Delhi University LL.B. Exam Preparation
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Master Your Law Exams with Confidence
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground text-pretty">
            We simplify the exam preparation journey for LL.B. students at Delhi
            University. Interactive video lectures, previous year question
            papers, concise case summaries, and expert sample answers — all in
            one place.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
