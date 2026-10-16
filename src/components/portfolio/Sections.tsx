import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";
import { education, experience, skills } from "./data";

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end px-6 pt-28 pb-12 sm:px-10 lg:px-16 lg:pb-24">
      <div className="max-w-5xl">
        <Reveal delay={80}>
          <p className="eyebrow mb-6">{t("hero.eyebrow")}</p>
        </Reveal>
        <Reveal delay={160}>
          <h1 className="display-xl">
            Guenna
            <br />
            <span className="text-signal-gradient">Ikram</span>
          </h1>
        </Reveal>
        <Reveal delay={280}>
          <p className="mt-8 max-w-2xl text-balance text-lg font-medium leading-snug text-foreground/90 sm:text-xl lg:text-2xl">
            {t("hero.title")}
          </p>
        </Reveal>
        <Reveal delay={380}>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t("hero.desc")}
          </p>
        </Reveal>
      </div>

      <Reveal delay={520} className="mt-8 flex items-center gap-3 text-xs tracking-[0.28em] text-muted-foreground uppercase sm:mt-14">
        <span className="relative flex h-9 w-[1px] overflow-hidden bg-border">
          <span className="absolute inset-x-0 top-0 h-3 animate-[pulse_2.4s_ease-in-out_infinite] bg-signal" />
        </span>
        {t("hero.scroll")}
      </Reveal>
    </section>
  );
}

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="relative px-6 py-32 sm:px-10 lg:px-16 lg:py-48">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-10">{t("about.eyebrow")}</p>
        </Reveal>
        <Reveal delay={100}>
          <p className="display-lg max-w-4xl text-balance">
            {t("about.lead")}
          </p>
        </Reveal>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:mt-24 lg:gap-20">
          <Reveal delay={160}>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("about.p1")}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("about.p2")}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Education() {
  const { t } = useLang();

  return (
    <section id="education" className="relative px-6 py-28 sm:px-10 lg:px-16 lg:py-44">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-14">{t("education.eyebrow")}</p>
        </Reveal>
        <ol className="relative border-l border-border pl-6 sm:pl-10">
          {education.map((item, i) => (
            <Reveal as="li" key={item.degree} delay={i * 90} className="relative pb-14 last:pb-0">
              <span className="absolute -left-[27px] top-2 h-2 w-2 rounded-full bg-signal shadow-glow sm:-left-[43px]" />
              <p className="font-mono text-xs tracking-[0.2em] text-signal">{item.period}</p>
              <h3 className="mt-3 max-w-2xl text-xl font-semibold sm:text-2xl lg:text-3xl">
                {item.degree}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {item.school} — {item.place}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="relative px-6 py-28 sm:px-10 lg:px-16 lg:py-44">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-14">{t("experience.eyebrow")}</p>
        </Reveal>
        <div className="space-y-6">
          {experience.map((job, i) => (
            <Reveal key={job.company + job.role} delay={i * 70}>
              <article className="glass-panel group rounded-2xl p-7 transition-colors duration-500 hover:bg-glass/60 sm:p-10">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="display-md">
                    {job.company}
                    <span className="ml-3 block text-base font-medium text-muted-foreground sm:inline sm:text-lg">
                      {job.role}
                    </span>
                  </h3>
                  <p className="shrink-0 font-mono text-xs tracking-[0.16em] text-signal">
                    {job.period}
                  </p>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{job.place}</p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {p}
                    </li>
                  ))}
                </ul>
                {job.link ? (
                  <a
                    href={job.link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-signal transition-transform duration-300 hover:translate-x-1"
                  >
                    {job.link.label} <span aria-hidden>→</span>
                  </a>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="relative px-6 py-28 sm:px-10 lg:px-16 lg:py-44">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-6">{t("skills.eyebrow")}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display-lg mb-16 max-w-3xl text-balance">
            {t("skills.title")}
          </h2>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border [mask-image:linear-gradient(white,white)] sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal
              key={group.category}
              delay={i * 60}
              className="h-full w-full bg-background/40 backdrop-blur-xl transition-colors duration-500 hover:bg-glass/40"
            >
              <div className="group h-full p-7 sm:p-9">
                <h3 className="text-sm font-semibold tracking-[0.14em] uppercase text-signal">
                  {group.category}
                </h3>
                <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-base font-medium text-foreground/70 transition-colors duration-300 hover:text-foreground sm:text-lg"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
