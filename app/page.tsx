import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Courses } from "@/components/courses";
import { About } from "@/components/about";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Courses />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
