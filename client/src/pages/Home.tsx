import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Skills />
      <Education />
    </Layout>
  );
}
