"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

const courses = [
  {
    id: "law-of-evidence",
    title: "Law of Evidence",
    code: "LB-201",
    image: "/images/courses/law-of-evidence.jpg",
    description: "Master the rules of evidence, admissibility, and examination of witnesses.",
  },
  {
    id: "family-law-2",
    title: "Family Law 2",
    code: "LB-202",
    image: "/images/courses/family-law-2.jpg",
    description: "Advanced concepts in matrimonial laws, succession, and guardianship.",
  },
  {
    id: "property-law",
    title: "Property Law",
    code: "LB-204",
    image: "/images/courses/property-law.jpg",
    description: "Comprehensive study of transfer of property, easements, and land laws.",
  },
  {
    id: "constitutional-law-2",
    title: "Constitutional Law - II",
    code: "LB-401",
    image: "/images/courses/constitutional-law-2.jpg",
    description: "In-depth analysis of fundamental rights, directive principles, and constitutional remedies.",
  },
  {
    id: "advocacy-ethics",
    title: "Advocacy Professional Ethics and Accountancy for Lawyers",
    code: "LB-601",
    image: "/images/courses/advocacy-ethics.jpg",
    description: "Professional conduct, ethics, and financial management for legal practitioners.",
  },
];

export function Courses() {
  return (
    <section id="courses" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Our Courses
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Delhi University LL.B. Courses
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive exam preparation materials for all your semester subjects
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-background rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Course Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {course.code}
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg leading-tight group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-5 line-clamp-2">
                  {course.description}
                </p>
                <Link
                  href={`/courses/${course.id}`}
                  className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Visit Course
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View All Courses
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
