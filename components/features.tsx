import { PlayCircle, FileText, BookOpen, PenTool } from "lucide-react";

const features = [
  {
    name: "Interactive Video Lectures",
    description:
      "Exam-specific video lectures crafted by experienced law educators to help you understand complex legal concepts with ease.",
    icon: PlayCircle,
  },
  {
    name: "Previous Year Papers",
    description:
      "Access a comprehensive collection of previous year question papers to understand exam patterns and practice effectively.",
    icon: FileText,
  },
  {
    name: "Case Summaries & Notes",
    description:
      "Concise case summaries and lecture notes that distill complex legal principles into easy-to-understand formats.",
    icon: BookOpen,
  },
  {
    name: "Sample Answers",
    description:
      "Expert-crafted sample answers to previous year exam questions, showing you exactly how to structure your responses.",
    icon: PenTool,
  },
];

export function Features() {
  return (
    <section id="features" className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything You Need to Excel
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Comprehensive resources designed specifically for Delhi University
            LL.B. semester exams.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative rounded-2xl border border-border bg-background p-8 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.name}
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
