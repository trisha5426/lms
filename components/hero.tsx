import Link from "next/link";
import { ArrowRight, Play, Users, BookOpen, Award } from "lucide-react";

const stats = [
  { label: "Active Students", value: "10,000+", icon: Users },
  { label: "Video Lectures", value: "500+", icon: Play },
  { label: "Study Resources", value: "1,200+", icon: BookOpen },
  { label: "Success Rate", value: "95%", icon: Award },
];

export function Hero() {
  return (
    <section id="home" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="flex flex-col">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Delhi University LL.B. Exam Prep
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Ace Your{" "}
              <span className="text-primary">Law Exams</span>{" "}
              with Confidence
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl">
              We simplify exam preparation for LL.B. students at Delhi University. 
              Access interactive video lectures, previous year papers, concise case 
              summaries, and expert sample answers — all in one platform.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:gap-3"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                <Play className="h-4 w-4" />
                See How It Works
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-xs font-medium"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p>
                <span className="font-semibold text-foreground">10,000+</span> students 
                already learning
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
