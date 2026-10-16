import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollVideo } from "@/components/ScrollVideo";
import { Projects } from "@/components/portfolio/Projects";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";

const title = "All Projects — Guenna Ikram";
const description =
  "Developed and contributed to multiple web applications, combining full-stack development, modern frameworks, APIs, databases, and responsive user experiences.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { t } = useLang();

  return (
    <main className="relative">
      <ScrollVideo />
      <div className="relative z-10">
        <Projects eyebrowKey="projects.allEyebrow" titleKey="projects.allTitle" />
        <section className="px-6 pb-28 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <Link
                to="/"
                className="glass-panel inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold transition-all duration-500 hover:-translate-y-0.5 hover:border-signal/50 hover:shadow-glow"
              >
                <span aria-hidden>←</span> {t("projects.back")}
              </Link>
            </Reveal>
          </div>
        </section>
      </div>
    </main>
  );
}
