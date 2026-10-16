import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ScrollVideo } from "@/components/ScrollVideo";
import { Reveal } from "@/components/Reveal";
import { contact } from "@/components/portfolio/data";
import { useLang } from "@/lib/i18n";

const title = "Contact Guenna Ikram — AI & Flutter Developer";
const description =
  "Get in touch with Guenna Ikram for mobile app, web and AI projects. Send a message directly or reach out by email, phone, GitHub or LinkedIn.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwlkkklg";

function ContactPage() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const field =
    "w-full rounded-2xl border border-glass-border bg-glass px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-signal/60 focus:outline-none";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || "Portfolio enquiry",
          message: form.message,
        }),
      });

      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="relative">
      <ScrollVideo />
      <div className="relative z-10 px-6 pt-36 pb-24 sm:px-10 lg:px-16 lg:pt-48">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow mb-8">{t("contact.eyebrow")}</p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="display-xl !text-[clamp(2.2rem,7vw,6rem)]">
              {t("contact.title1")}
              <br />
              <span className="text-signal-gradient">{t("contact.title2")}</span>
            </h1>
          </Reveal>

          <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-2 lg:gap-20">
            <Reveal delay={140}>
              <form onSubmit={onSubmit} className="space-y-4">
                <p className="display-md mb-8">{t("contact.formTitle")}</p>
                <input
                  required
                  name="name"
                  className={field}
                  placeholder={t("contact.name")}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  required
                  type="email"
                  name="email"
                  className={field}
                  placeholder={t("contact.email")}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                  name="subject"
                  className={field}
                  placeholder={t("contact.subject")}
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />
                <textarea
                  required
                  name="message"
                  rows={6}
                  className={`${field} resize-none`}
                  placeholder={t("contact.message")}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="glass-panel w-full rounded-full px-8 py-5 text-sm font-semibold transition-all duration-500 hover:-translate-y-0.5 hover:border-signal/50 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? "..." : t("contact.send")}
                </button>
                {sent ? (
                  <p className="pt-2 text-sm text-signal">{t("contact.sent")}</p>
                ) : null}
                {error ? (
                  <p className="pt-2 text-sm text-red-500">
                    Une erreur est survenue. Merci de réessayer ou de m'écrire directement par email.
                  </p>
                ) : null}
              </form>
            </Reveal>

            <Reveal delay={220}>
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
                <div className="flex flex-wrap gap-3 pt-4">
                  {[
                    { label: "GitHub", href: contact.github },
                    { label: "LinkedIn", href: contact.linkedin },
                  ].map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="glass-panel rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-500 hover:-translate-y-0.5 hover:border-signal/50"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="mt-24 border-t border-border pt-8">
              <Link
                to="/"
                className="text-sm font-semibold text-signal transition-transform duration-300 hover:-translate-x-1 inline-flex items-center gap-2"
              >
                <span aria-hidden>←</span> {t("projects.back")}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}