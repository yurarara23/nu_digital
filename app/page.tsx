import AboutSection from "@/components/home/AboutSection";
import BlogSection from "@/components/home/BlogSection";
import HeroSlider from "@/components/home/HeroSlider";
import JoinSection from "@/components/home/JoinSection";
import ProjectSection from "@/components/home/ProjectSection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSlider />

      <section id="blog">
        <BlogSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="project">
        <ProjectSection />
      </section>

      <section id="join">
        <JoinSection />
      </section>
    </main>
  );
}
