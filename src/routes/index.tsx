import { createFileRoute } from "@tanstack/react-router";
import { ScrollVideo } from "@/components/ScrollVideo";
import { About, Education, Experience, Hero, Skills } from "@/components/portfolio/Sections";
import { Projects } from "@/components/portfolio/Projects";
import {
  Achievements,
  Certificates,
  Contact,
  Hobbies,
  Languages,
} from "@/components/portfolio/Closing";

const title = "Guenna Ikram — AI Expert & Senior Flutter Developer";
const description =
  "Portfolio of Guenna Ikram: AI Expert, Senior Flutter & Full-Stack Developer and Project Manager building mobile apps, websites and AI-powered products.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <ScrollVideo />
      <div className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects limit={4} showExplore />
        <Achievements />
        <Languages />
        <Certificates />
        <Hobbies />
        <Contact />
      </div>
    </main>
  );
}
