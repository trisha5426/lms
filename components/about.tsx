import { GraduationCap, Heart, Target, Sparkles } from "lucide-react";

const values = [
  {
    name: "Academic Excellence",
    description:
      "We provide top-tier education in an accessible format, ensuring that learning is both enriching and enjoyable.",
    icon: GraduationCap,
  },
  {
    name: "Student-Focused",
    description:
      "Our dedicated instructors are deeply committed to empowering students to thrive academically and achieve their goals.",
    icon: Heart,
  },
  {
    name: "Exam-Specific Approach",
    description:
      "Every resource is tailored specifically for Delhi University LL.B. semester exams, maximizing your preparation efficiency.",
    icon: Target,
  },
];

export function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              About Us
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Your Trusted Partner in Law School Success
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Lumin is your trusted partner in navigating the challenging
              journey of law school at Delhi University. We understand the
              unique pressures that come with LL.B. semester exams, and
              we&apos;ve built a platform specifically designed to address them.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our mission is simple: to illuminate your path to academic
              success. Through carefully curated resources, expert guidance,
              and a supportive learning environment, we help you transform
              exam anxiety into confident preparation.
            </p>
            
            {/* Mission statement */}
            <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
              <div className="flex items-start gap-3">
                <Sparkles className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Our Promise</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We provide top-tier education in an accessible format, ensuring 
                    that learning is both enriching and enjoyable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="flex flex-col gap-6">
            {values.map((value, index) => (
              <div
                key={value.name}
                className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-primary">
                      0{index + 1}
                    </span>
                    <h3 className="text-base font-semibold text-foreground">
                      {value.name}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
