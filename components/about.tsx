import { GraduationCap, Heart, Target } from "lucide-react";

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
    <section id="about" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                About Lumin
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Lumin is your trusted partner in navigating the challenging
                journey of law school at Delhi University. We understand the
                unique pressures that come with LL.B. semester exams, and
                we&apos;ve built a platform specifically designed to address
                them.
              </p>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Our mission is simple: to illuminate your path to academic
                success. Through carefully curated resources, expert guidance,
                and a supportive learning environment, we help you transform
                exam anxiety into confident preparation.
              </p>
            </div>

            {/* Values */}
            <div className="flex flex-col gap-8">
              {values.map((value) => (
                <div key={value.name} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {value.name}
                    </h3>
                    <p className="mt-1 text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
