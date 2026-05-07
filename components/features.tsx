import { PlayCircle, FileText, BookOpen, PenTool, CheckCircle } from "lucide-react";

const features = [
  {
    name: "Interactive Video Lectures",
    description:
      "Exam-specific video lectures crafted by experienced law educators. Learn complex legal concepts at your own pace.",
    icon: PlayCircle,
    highlights: ["HD Quality Videos", "Expert Instructors", "Mobile Friendly"],
  },
  {
    name: "Previous Year Papers",
    description:
      "Comprehensive collection of previous year question papers to understand exam patterns and practice effectively.",
    icon: FileText,
    highlights: ["Year-wise Sorted", "Solved Examples", "Pattern Analysis"],
  },
  {
    name: "Case Summaries & Notes",
    description:
      "Concise case summaries and lecture notes that distill complex legal principles into easy-to-understand formats.",
    icon: BookOpen,
    highlights: ["Quick Revision", "Key Highlights", "Exam Focused"],
  },
  {
    name: "Sample Answers",
    description:
      "Expert-crafted sample answers to previous year exam questions, showing you exactly how to structure your responses.",
    icon: PenTool,
    highlights: ["Model Answers", "Scoring Tips", "Structure Guide"],
  },
];

export function Features() {
  return (
    <section id="features" className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Features
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything You Need to Excel
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Comprehensive resources designed specifically for Delhi University
            LL.B. semester exams.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="group relative rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {feature.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                        >
                          <CheckCircle className="h-3 w-3 text-primary" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
