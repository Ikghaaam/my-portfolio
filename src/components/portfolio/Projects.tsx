import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";
import { projects, type Project } from "./data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Github, ExternalLink, Sparkles, X, ChevronRight } from "lucide-react";

function ProjectModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const images = project.gallery && project.gallery.length > 0
    ? project.gallery
    : project.image
    ? [project.image]
    : [];

  const currentImage = images[activeImageIndex] || project.image;
  const isGithubPlaceholder = project.github === "GITHUB_URL";
  const githubHref = isGithubPlaceholder ? "https://github.com/Ikghaaam" : project.github;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[92vh] w-[94vw] max-w-4xl overflow-y-auto rounded-3xl border border-glass-border bg-background/95 p-6 backdrop-blur-2xl sm:p-10 shadow-lift">
        <DialogHeader className="text-left">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
              PROJECT {project.index}
            </span>
            <span className="rounded-full border border-signal/30 bg-signal/10 px-3 py-1 text-xs font-semibold text-signal">
              {project.type}
            </span>
          </div>
          <DialogTitle className="display-md mt-3 text-foreground">
            {project.name}
          </DialogTitle>
          <DialogDescription className="mt-2 text-base leading-relaxed text-muted-foreground">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        {/* Main Display Image */}
        {currentImage ? (
          <div className="relative mt-6 overflow-hidden rounded-2xl border border-border bg-black/40 shadow-lift">
            <img
              src={currentImage}
              alt={`${project.name} preview screenshot ${activeImageIndex + 1}`}
              className="w-full object-cover transition-opacity duration-300"
              loading="lazy"
            />
          </div>
        ) : null}

        {/* Gallery Screenshots Switcher */}
        {images.length > 1 ? (
          <div className="mt-5 space-y-3">
            <p className="eyebrow text-xs">Screenshots Gallery ({images.length})</p>
            <div className="flex flex-wrap gap-3 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`group relative overflow-hidden rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                    activeImageIndex === idx
                      ? "border-signal shadow-glow scale-[1.02]"
                      : "border-border opacity-60 hover:opacity-100 hover:border-signal/50"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${project.name} gallery thumbnail ${idx + 1}`}
                    className="h-16 w-24 object-cover sm:h-20 sm:w-32"
                  />
                  {activeImageIndex === idx ? (
                    <span className="absolute inset-0 bg-signal/10 pointer-events-none" />
                  ) : null}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {/* Project Metadata Grid */}
        <div className="mt-8 grid gap-6 border-t border-border pt-6 sm:grid-cols-3">
          <div>
            <p className="eyebrow mb-2">Project Type</p>
            <p className="text-sm font-medium text-foreground">{project.type}</p>
          </div>
          <div>
            <p className="eyebrow mb-2">Platform</p>
            <p className="text-sm font-medium text-foreground">{project.platform}</p>
          </div>
          <div>
            <p className="eyebrow mb-2">Technologies</p>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-glass px-2.5 py-1 text-xs font-mono text-foreground/90"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Actions Footer */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          {githubHref ? (
            <a
              href={githubHref}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2.5 rounded-full border border-border bg-glass px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-signal/50 hover:bg-glass/80 hover:shadow-glow"
            >
              <Github className="h-4 w-4 text-signal" />
              <span>GitHub Repository</span>
              {isGithubPlaceholder ? (
                <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                  GITHUB_URL
                </span>
              ) : (
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
              )}
            </a>
          ) : null}

          <DialogClose asChild>
            <button className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
              Close Details
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ProjectBlock({
  project,
  onOpenDetails,
}: {
  project: Project;
  onOpenDetails: (p: Project) => void;
}) {
  const isGithubPlaceholder = project.github === "GITHUB_URL";
  const githubHref = isGithubPlaceholder ? "https://github.com/Ikghaaam" : project.github;

  return (
    <article className="relative px-6 py-20 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs tracking-[0.32em] text-muted-foreground">
                  PROJECT {project.index}
                </span>
                <span className="rounded-full border border-border bg-glass px-3 py-1 text-xs font-semibold text-foreground/80">
                  {project.type}
                </span>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <h3 className="display-lg mt-4">{project.name}</h3>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {project.description}
              </p>
            </Reveal>
          </div>

          <Reveal delay={220} className="lg:col-span-4 lg:text-right">
            <div className="inline-flex flex-col items-start lg:items-end gap-2">
              <span className="eyebrow">Platform</span>
              <span className="text-sm font-mono text-foreground/90">{project.platform}</span>
            </div>
          </Reveal>
        </div>

        {/* ONE Main Cover Image */}
        {project.image ? (
          <Reveal delay={140} className="mt-12 lg:mt-16">
            <div
              onClick={() => onOpenDetails(project)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-border shadow-lift transition-all duration-500 hover:border-signal/40"
            >
              <img
                src={project.image}
                alt={`${project.name} cover`}
                loading="lazy"
                width={1600}
                height={1008}
                className="w-full transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              
              {/* Overlay Prompt */}
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 flex items-center gap-3">
                <span className="glass-panel inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:border-signal/50">
                  View Project Details &amp; Gallery <ChevronRight className="h-3.5 w-3.5 text-signal" />
                </span>
              </div>
            </div>
          </Reveal>
        ) : null}

        {/* Project Metadata & Actions Footer */}
        <div className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-3">
          <Reveal delay={60}>
            <p className="eyebrow mb-3">Project Type</p>
            <p className="text-sm text-foreground/85">{project.type}</p>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow mb-3">Technologies</p>
            <p className="text-sm font-mono text-foreground/85">{project.tech.join(" · ")}</p>
          </Reveal>

          <Reveal delay={180}>
            <p className="eyebrow mb-3">Actions</p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenDetails(project)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-signal transition-transform duration-300 hover:translate-x-1"
              >
                Project Details <span aria-hidden>→</span>
              </button>

              {githubHref ? (
                <a
                  href={githubHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

export function Projects({
  limit,
  showExplore = false,
  eyebrowKey = "projects.eyebrow",
  titleKey = "projects.title",
}: {
  limit?: number;
  showExplore?: boolean;
  eyebrowKey?: string;
  titleKey?: string;
}) {
  const { t } = useLang();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const list = typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="relative">
      <div className="px-6 pt-28 sm:px-10 lg:px-16 lg:pt-40">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow mb-6">{t(eyebrowKey)}</p>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="display-lg max-w-3xl text-balance">{t(titleKey)}</h2>
          </Reveal>
        </div>
      </div>

      {list.map((p) => (
        <ProjectBlock key={p.name} project={p} onOpenDetails={(proj) => setSelectedProject(proj)} />
      ))}

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

      {showExplore ? (
        <div className="px-6 pb-8 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <Link
                to="/projects"
                className="glass-panel inline-flex items-center gap-3 rounded-full px-8 py-5 text-sm font-semibold transition-all duration-500 hover:-translate-y-0.5 hover:border-signal/50 hover:shadow-glow"
              >
                {t("projects.explore")} <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      ) : null}
    </section>
  );
}
