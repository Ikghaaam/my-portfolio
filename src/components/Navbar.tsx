import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { languageOptions, useLang } from "@/lib/i18n";

function LanguageMenu() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = languageOptions.find((o) => o.code === lang) ?? languageOptions[0]!;

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t("nav.language")}
        aria-expanded={open}
        className="glass-panel flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold text-foreground/85 transition-colors duration-300 hover:text-foreground"
      >
        <span className="text-base leading-none">{active.flag}</span>
        <span className="hidden sm:inline">{active.label}</span>
        <span aria-hidden className="text-[0.6rem] opacity-70">
          ▾
        </span>
      </button>

      {open ? (
        <div className="glass-panel absolute end-0 mt-2 w-44 overflow-hidden rounded-2xl p-1 shadow-lift">
          {languageOptions.map((o) => (
            <button
              key={o.code}
              type="button"
              onClick={() => {
                setLang(o.code);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-start text-sm transition-colors duration-200 hover:bg-foreground/10 ${
                o.code === lang ? "text-signal" : "text-foreground/80"
              }`}
            >
              <span className="text-base leading-none">{o.flag}</span>
              {o.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function Navbar() {
  const { t } = useLang();

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-3">
        <Link
          to="/"
          className="hidden shrink-0 text-sm font-semibold tracking-tight text-foreground/90 transition-colors hover:text-foreground lg:block"
        >
          Guenna<span className="text-signal">.</span>
        </Link>

        <nav className="glass-panel mx-auto flex items-center gap-1 rounded-full p-1.5">
          <Link
            to="/"
            hash="about"
            className="rounded-full px-3.5 py-2 text-xs font-semibold text-foreground/70 transition-colors duration-300 hover:bg-foreground/10 hover:text-foreground sm:px-5 sm:text-sm"
          >
            {t("nav.about")}
          </Link>
          <Link
            to="/projects"
            activeProps={{ className: "bg-foreground/12 text-foreground" }}
            className="rounded-full px-3.5 py-2 text-xs font-semibold text-foreground/70 transition-colors duration-300 hover:bg-foreground/10 hover:text-foreground sm:px-5 sm:text-sm"
          >
            {t("nav.projects")}
          </Link>
          <Link
            to="/contact"
            activeProps={{ className: "bg-foreground/12 text-foreground" }}
            className="rounded-full px-3.5 py-2 text-xs font-semibold text-foreground/70 transition-colors duration-300 hover:bg-foreground/10 hover:text-foreground sm:px-5 sm:text-sm"
          >
            {t("nav.contact")}
          </Link>
        </nav>

        <div className="shrink-0">
          <LanguageMenu />
        </div>
      </div>
    </header>
  );
}
