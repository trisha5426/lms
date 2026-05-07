import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  ArrowLeft,
  PlayCircle,
  FileText,
  BookOpen,
  Clock,
  Users,
  CheckCircle,
  Download,
  Lock,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Law of Evidence (LB-201) | Lumin",
  description:
    "Master the rules of evidence, admissibility, and examination of witnesses. Comprehensive study materials for Delhi University LL.B. students.",
};

const courseData = {
  title: "Law of Evidence",
  code: "LB-201",
  semester: "2nd Semester",
  image: "/images/courses/law-of-evidence.jpg",
  description:
    "Master the rules of evidence, admissibility, and examination of witnesses. This comprehensive course covers the Indian Evidence Act, 1872, and prepares you thoroughly for your semester examinations.",
  instructor: "Faculty of Law, DU",
  duration: "Full Semester",
  students: "50+",
  lectures: 12,
  resources: 25,
};

const syllabus = [
  {
    unit: 1,
    title: "Introduction to Evidence",
    topics: [
      "Definition and meaning of Evidence",
      "Facts in issue and relevant facts",
      "Doctrine of Res Gestae",
      "Admissions and Confessions",
    ],
  },
  {
    unit: 2,
    title: "Relevancy of Facts",
    topics: [
      "Relevancy vs Admissibility",
      "Facts which need not be proved",
      "Judicial Notice",
      "Estoppel",
    ],
  },
  {
    unit: 3,
    title: "Oral and Documentary Evidence",
    topics: [
      "Oral evidence - when relevant",
      "Documentary evidence",
      "Primary and Secondary evidence",
      "Proof of documents",
    ],
  },
  {
    unit: 4,
    title: "Examination of Witnesses",
    topics: [
      "Examination-in-chief",
      "Cross-examination",
      "Re-examination",
      "Leading questions",
    ],
  },
  {
    unit: 5,
    title: "Burden of Proof",
    topics: [
      "General rules as to burden of proof",
      "Presumptions",
      "May presume, shall presume, conclusive proof",
      "Accomplice evidence",
    ],
  },
];

const videoLectures = [
  {
    id: 1,
    title: "Introduction to Indian Evidence Act, 1872",
    duration: "45 min",
    locked: false,
  },
  {
    id: 2,
    title: "Facts in Issue and Relevant Facts",
    duration: "52 min",
    locked: false,
  },
  {
    id: 3,
    title: "Doctrine of Res Gestae Explained",
    duration: "38 min",
    locked: true,
  },
  {
    id: 4,
    title: "Admissions vs Confessions",
    duration: "48 min",
    locked: true,
  },
  {
    id: 5,
    title: "Oral Evidence - Section 59-60",
    duration: "42 min",
    locked: true,
  },
  {
    id: 6,
    title: "Documentary Evidence Deep Dive",
    duration: "55 min",
    locked: true,
  },
];

const studyMaterials = [
  {
    id: 1,
    title: "Previous Year Questions (2019-2024)",
    type: "PDF",
    locked: false,
  },
  {
    id: 2,
    title: "Case Summaries - Evidence Law",
    type: "PDF",
    locked: false,
  },
  {
    id: 3,
    title: "Sample Answers - Unit 1 & 2",
    type: "PDF",
    locked: true,
  },
  {
    id: 4,
    title: "Lecture Notes - Complete Syllabus",
    type: "PDF",
    locked: true,
  },
  {
    id: 5,
    title: "Important Sections Quick Reference",
    type: "PDF",
    locked: true,
  },
];

export default function LawOfEvidencePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-secondary border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-4 lg:px-8">
            <Link
              href="/#courses"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Courses
            </Link>
          </div>
        </div>

        {/* Course Hero */}
        <section className="bg-secondary py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              {/* Course Info */}
              <div>
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full mb-4">
                  {courseData.code}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  {courseData.title}
                </h1>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {courseData.description}
                </p>

                {/* Course Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {courseData.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {courseData.students} Students
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PlayCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {courseData.lectures} Lectures
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {courseData.resources} Resources
                    </span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Enroll Now
                    <CheckCircle className="h-4 w-4" />
                  </Link>
                  <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border bg-background text-foreground font-medium rounded-lg hover:bg-muted transition-colors">
                    <PlayCircle className="h-4 w-4" />
                    Watch Preview
                  </button>
                </div>
              </div>

              {/* Course Thumbnail */}
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={courseData.image}
                  alt={courseData.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform">
                    <PlayCircle className="h-8 w-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Syllabus */}
                <div className="bg-card rounded-xl border border-border p-6">
                  <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Course Syllabus
                  </h2>
                  <div className="space-y-4">
                    {syllabus.map((unit) => (
                      <div
                        key={unit.unit}
                        className="border border-border rounded-lg overflow-hidden"
                      >
                        <div className="bg-secondary px-4 py-3 flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-semibold">
                            {unit.unit}
                          </span>
                          <h3 className="font-semibold text-foreground">
                            {unit.title}
                          </h3>
                        </div>
                        <ul className="p-4 space-y-2">
                          {unit.topics.map((topic, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Video Lectures */}
                <div className="bg-card rounded-xl border border-border p-6">
                  <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <PlayCircle className="h-5 w-5 text-primary" />
                    Video Lectures
                  </h2>
                  <div className="space-y-3">
                    {videoLectures.map((lecture) => (
                      <div
                        key={lecture.id}
                        className={`flex items-center justify-between p-4 rounded-lg border ${
                          lecture.locked
                            ? "border-border bg-muted/50"
                            : "border-primary/30 bg-primary/5"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                              lecture.locked
                                ? "bg-muted text-muted-foreground"
                                : "bg-primary text-primary-foreground"
                            }`}
                          >
                            {lecture.locked ? (
                              <Lock className="h-4 w-4" />
                            ) : (
                              <PlayCircle className="h-4 w-4" />
                            )}
                          </div>
                          <div>
                            <p
                              className={`font-medium ${
                                lecture.locked
                                  ? "text-muted-foreground"
                                  : "text-foreground"
                              }`}
                            >
                              {lecture.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {lecture.duration}
                            </p>
                          </div>
                        </div>
                        {!lecture.locked && (
                          <button className="text-sm font-medium text-primary hover:underline">
                            Watch
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Study Materials */}
                <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
                  <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Study Materials
                  </h2>
                  <div className="space-y-3">
                    {studyMaterials.map((material) => (
                      <div
                        key={material.id}
                        className={`flex items-center justify-between p-3 rounded-lg border ${
                          material.locked
                            ? "border-border bg-muted/50"
                            : "border-primary/30 bg-primary/5"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                              material.locked
                                ? "bg-muted text-muted-foreground"
                                : "bg-primary text-primary-foreground"
                            }`}
                          >
                            {material.locked ? (
                              <Lock className="h-3.5 w-3.5" />
                            ) : (
                              <FileText className="h-3.5 w-3.5" />
                            )}
                          </div>
                          <div>
                            <p
                              className={`text-sm font-medium ${
                                material.locked
                                  ? "text-muted-foreground"
                                  : "text-foreground"
                              }`}
                            >
                              {material.title}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {material.type}
                            </p>
                          </div>
                        </div>
                        {!material.locked && (
                          <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors">
                            <Download className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Unlock CTA */}
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-foreground font-medium mb-2">
                      Unlock all materials
                    </p>
                    <p className="text-xs text-muted-foreground mb-4">
                      Get access to all video lectures, notes, and study resources.
                    </p>
                    <Link
                      href="/signup"
                      className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Sign Up to Unlock
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
