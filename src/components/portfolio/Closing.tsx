import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";
import { achievements, certificates, contact, hobbies, languages } from "./data";

export function Achievements() {
  const { t } = useLang();

  return (
    <section id="achievements" className="relative px-6 py-28 sm:px-10 lg:px-16 lg:py-44">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-14">{t("achievements.eyebrow")}</p>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border [mask-image:linear-gradient(white,white)] sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal
              key={a.value + a.label}
              delay={i * 70}
              className="h-full w-full bg-background/40 backdrop-blur-xl transition-colors duration-500 hover:bg-glass/40"
            >
              <div className="h-full p-8 sm:p-10">
                <p className="display-md text-signal-gradient">{a.value}</p>
                <p className="mt-3 text-xs tracking-[0.28em] uppercase text-muted-foreground">
                  {a.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Languages() {
  const { t } = useLang();

  return (
    <section id="languages" className="relative px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-14">{t("languages.eyebrow")}</p>
        </Reveal>
        <ul className="space-y-8">
          {languages.map((l, i) => (
            <Reveal as="li" key={l.name} delay={i * 70}>
              <div className="flex items-baseline justify-between gap-6">
                <p className="text-xl font-semibold sm:text-2xl">{l.name}</p>
                <p className="text-sm text-muted-foreground">{l.level}</p>
              </div>
              <div className="mt-4 h-[2px] w-full overflow-hidden bg-border">
                <div
                  className="h-full origin-left bg-signal transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ width: `${l.value}%` }}
                />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Certificates() {
  const { t } = useLang();

  return (
    <section id="certificates" className="relative px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-14">{t("certificates.eyebrow")}</p>
        </Reveal>
        <ul className="divide-y divide-border border-y border-border">
          {certificates.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 50}>
              {c.href ? (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center justify-between gap-6 py-7 transition-colors duration-500 hover:bg-glass/60 sm:py-8"
                >
                  <span className="max-w-3xl text-base font-medium sm:text-lg">{c.title}</span>
                  <span
                    aria-hidden
                    className="shrink-0 text-signal transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              ) : (
                <div className="py-7 sm:py-8">
                  <span className="max-w-3xl text-base font-medium sm:text-lg">{c.title}</span>
                </div>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Hobbies() {
  const { t } = useLang();

  return (
    <section className="relative px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-10">{t("hobbies.eyebrow")}</p>
        </Reveal>
        <div className="flex flex-wrap gap-x-10 gap-y-4">
          {hobbies.map((h, i) => (
            <Reveal key={h} delay={i * 60}>
              <p className="text-lg font-medium text-foreground/65 sm:text-2xl">{h}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const { t } = useLang();
  const ctas = [
    { label: "Let's work together", href: `mailto:${contact.email}` },
    { label: "View GitHub", href: contact.github },
    { label: "LinkedIn", href: contact.linkedin },
  ];

  return (
    <section id="contact" className="relative px-6 pt-28 pb-20 sm:px-10 lg:px-16 lg:pt-44">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-8">{t("contact.eyebrow")}</p>
        </Reveal>
        <Reveal delay={90}>
          <h2 className="display-xl !text-[clamp(2.2rem,7vw,6rem)]">
            {t("contact.title1")}
            <br />
            <span className="text-signal-gradient">{t("contact.title2")}</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <Reveal delay={140}>
            <dl className="space-y-7">
              <div>
                <dt className="eyebrow mb-2">{t("contact.email")}</dt>
                <dd>
                  <a
                    href={`mailto:${contact.email}`}
                    dir="ltr"
                    style={{ unicodeBidi: "plaintext" }}
                    className="text-lg font-medium transition-colors hover:text-signal sm:text-xl"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow mb-2">{t("contact.phone")}</dt>
                <dd>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    dir="ltr"
                    style={{ unicodeBidi: "plaintext" }}
                    className="text-lg font-medium transition-colors hover:text-signal sm:text-xl"
                  >
                    {contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow mb-2">{t("contact.based")}</dt>
                <dd className="text-lg font-medium sm:text-xl">{t("contact.basedValue")}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={220}>
            <div className="flex flex-wrap gap-3">
              {ctas.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  target={cta.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer noopener"
                  className="glass-panel rounded-full px-7 py-4 text-sm font-semibold transition-all duration-500 hover:-translate-y-0.5 hover:border-signal/50 hover:shadow-glow"
                >
                  {cta.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <footer className="mt-24 flex flex-col gap-2 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>Guenna Ikram — Software Engineer &amp; Full-Stack Web Developer</p>
            <p>© {new Date().getFullYear()}</p>
          </footer>
        </Reveal>
      </div>
    </section>
  );
}
