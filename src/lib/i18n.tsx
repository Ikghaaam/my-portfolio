import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type LangCode = "en" | "ar" | "fr" | "de" | "nl";

export const languageOptions: { code: LangCode; label: string; flag: string; dir: "ltr" | "rtl" }[] =
  [
    { code: "en", label: "English", flag: "🇬🇧", dir: "ltr" },
    { code: "fr", label: "Français", flag: "🇫🇷", dir: "ltr" },
    { code: "ar", label: "العربية", flag: "🇲🇦", dir: "rtl" },
    { code: "de", label: "Deutsch", flag: "🇩🇪", dir: "ltr" },
    { code: "nl", label: "Nederlands", flag: "🇳🇱", dir: "ltr" },
  ];

type Dict = Record<string, string>;

const en: Dict = {
  "nav.about": "About Me",
  "nav.projects": "All Projects",
  "nav.contact": "Contact Me",
  "nav.language": "Language",

  "hero.eyebrow": "Portfolio · 2026",
  "hero.title": "Software Engineer · Full-Stack Web Developer",
  "hero.desc":
    "Building innovative digital products, web applications and software solutions.",
  "hero.scroll": "Scroll to explore",

  "about.eyebrow": "About",
  "about.lead":
    "Full-Stack Web Developer focused on building modern and innovative digital solutions.",
  "about.p1":
    "Information Systems Engineering graduate with a strong foundation in software development, web technologies and system design.",
  "about.p2":
    "Experienced in developing web applications, integrating APIs and collaborating with teams to turn ideas into reliable and user-friendly digital solutions.",

  "education.eyebrow": "Education",
  "experience.eyebrow": "Experience",

  "skills.eyebrow": "Capabilities",
  "skills.title":
    "A strong foundation in software development and information systems.",

  "projects.eyebrow": "Selected Projects",
  "projects.title":
    "A selection of web applications and digital solutions.",
  "projects.explore": "Explore more projects",
  "projects.allEyebrow": "All projects",
  "projects.allTitle": "Every project, in detail.",
  "projects.back": "Back to home",

  "achievements.eyebrow": "Achievements",
  "languages.eyebrow": "Languages",
  "certificates.eyebrow": "Certificates",
  "hobbies.eyebrow": "Beyond the screen",

  "contact.eyebrow": "Contact",
  "contact.title1": "Let's build something",
  "contact.title2": "exceptional.",
  "contact.email": "Email",
  "contact.phone": "Phone",
  "contact.based": "Based in",
  "contact.basedValue": "Morocco — available worldwide",
  "contact.formTitle": "Send me a message",
  "contact.name": "Your name",
  "contact.subject": "Subject",
  "contact.message": "Message",
  "contact.send": "Send message",
  "contact.sent": "Thank you — your message is ready to send.",
};


const fr: Dict = {
  "nav.about": "À propos",
  "nav.projects": "Tous les projets",
  "nav.contact": "Me contacter",
  "nav.language": "Langue",

  "hero.eyebrow": "Portfolio · 2026",
  "hero.title": "Ingénieure logiciel · Développeuse Web Full-Stack",
  "hero.desc":
    "Je conçois des produits numériques innovants, des applications web et des solutions logicielles modernes.",
  "hero.scroll": "Défilez pour explorer",

  "about.eyebrow": "À propos",
  "about.lead":
    "Développeuse Web Full-Stack spécialisée dans la création de solutions numériques modernes et innovantes.",
  "about.p1":
    "Diplômée en ingénierie des systèmes d'information, avec une solide base en développement logiciel, technologies web et conception de systèmes.",
  "about.p2":
    "Expérience dans le développement d'applications web, l'intégration d'API et la collaboration en équipe pour transformer des idées en solutions numériques fiables et intuitives.",

  "education.eyebrow": "Formation",
  "experience.eyebrow": "Expérience",

  "skills.eyebrow": "Compétences",
  "skills.title":
    "Une solide base en développement logiciel et en systèmes d'information.",

  "projects.eyebrow": "Projets sélectionnés",
  "projects.title":
    "Une sélection d'applications web et de solutions numériques.",
  "projects.explore": "Découvrir plus de projets",
  "projects.allEyebrow": "Tous les projets",
  "projects.allTitle": "Tous les projets, en détail.",
  "projects.back": "Retour à l'accueil",

  "achievements.eyebrow": "Réalisations",
  "languages.eyebrow": "Langues",
  "certificates.eyebrow": "Certificats",
  "hobbies.eyebrow": "Au-delà de l'écran",

  "contact.eyebrow": "Contact",
  "contact.title1": "Créons quelque chose",
  "contact.title2": "d'exceptionnel.",
  "contact.email": "E-mail",
  "contact.phone": "Téléphone",
  "contact.based": "Basée à",
  "contact.basedValue": "Maroc — disponible dans le monde entier",
  "contact.formTitle": "Envoyez-moi un message",
  "contact.name": "Votre nom",
  "contact.subject": "Sujet",
  "contact.message": "Message",
  "contact.send": "Envoyer le message",
  "contact.sent": "Merci — votre message est prêt à être envoyé.",
};

const ar: Dict = {
  "nav.about": "نبذة عني",
  "nav.projects": "كل المشاريع",
  "nav.contact": "اتصل بي",
  "nav.language": "اللغة",

  "hero.eyebrow": "أعمالي · 2026",
  "hero.title": "مهندسة برمجيات · مطورة ويب Full-Stack",
  "hero.desc":
    "أبني منتجات رقمية مبتكرة وتطبيقات ويب وحلولاً برمجية حديثة.",
  "hero.scroll": "مرر للاستكشاف",

  "about.eyebrow": "نبذة عني",
  "about.lead":
    "مطورة ويب Full-Stack متخصصة في بناء حلول رقمية حديثة ومبتكرة.",
  "about.p1":
    "خريجة هندسة نظم المعلومات، مع أساس قوي في تطوير البرمجيات وتقنيات الويب وتصميم الأنظمة.",
  "about.p2":
    "خبرة في تطوير تطبيقات الويب، وتكامل واجهات برمجة التطبيقات، والتعاون مع الفرق لتحويل الأفكار إلى حلول رقمية موثوقة وسهلة الاستخدام.",

  "education.eyebrow": "التعليم",
  "experience.eyebrow": "الخبرة",

  "skills.eyebrow": "القدرات",
  "skills.title":
    "أساس قوي في تطوير البرمجيات ونظم المعلومات.",

  "projects.eyebrow": "مشاريع مختارة",
  "projects.title":
    "مجموعة من تطبيقات الويب والحلول الرقمية.",
  "projects.explore": "استكشف المزيد من المشاريع",
  "projects.allEyebrow": "كل المشاريع",
  "projects.allTitle": "جميع المشاريع بالتفصيل.",
  "projects.back": "العودة إلى الرئيسية",

  "achievements.eyebrow": "الإنجازات",
  "languages.eyebrow": "اللغات",
  "certificates.eyebrow": "الشهادات",
  "hobbies.eyebrow": "خارج الشاشة",

  "contact.eyebrow": "تواصل",
  "contact.title1": "لنبنِ شيئاً",
  "contact.title2": "استثنائياً.",
  "contact.email": "البريد الإلكتروني",
  "contact.phone": "الهاتف",
  "contact.based": "الموقع",
  "contact.basedValue": "المغرب — متاحة للعمل عالمياً",
  "contact.formTitle": "أرسل لي رسالة",
  "contact.name": "اسمك",
  "contact.subject": "الموضوع",
  "contact.message": "الرسالة",
  "contact.send": "إرسال الرسالة",
  "contact.sent": "شكراً لك — رسالتك جاهزة للإرسال.",
};

const de: Dict = {
  "nav.about": "Über mich",
  "nav.projects": "Alle Projekte",
  "nav.contact": "Kontakt",
  "nav.language": "Sprache",

  "hero.eyebrow": "Portfolio · 2026",
  "hero.title": "Software Engineer · Full-Stack-Webentwicklerin",
  "hero.desc":
    "Ich entwickle innovative digitale Produkte, Webanwendungen und moderne Softwarelösungen.",
  "hero.scroll": "Scrollen zum Entdecken",

  "about.eyebrow": "Über mich",
  "about.lead":
    "Full-Stack-Webentwicklerin mit Fokus auf die Entwicklung moderner und innovativer digitaler Lösungen.",
  "about.p1":
    "Absolventin der Informationssystemtechnik mit fundierten Kenntnissen in Softwareentwicklung, Webtechnologien und Systemdesign.",
  "about.p2":
    "Erfahrung in der Entwicklung von Webanwendungen, der Integration von APIs und der Zusammenarbeit in Teams, um Ideen in zuverlässige und benutzerfreundliche digitale Lösungen umzusetzen.",

  "education.eyebrow": "Ausbildung",
  "experience.eyebrow": "Erfahrung",

  "skills.eyebrow": "Kompetenzen",
  "skills.title":
    "Eine solide Grundlage in Softwareentwicklung und Informationssystemen.",

  "projects.eyebrow": "Ausgewählte Projekte",
  "projects.title":
    "Eine Auswahl an Webanwendungen und digitalen Lösungen.",
  "projects.explore": "Weitere Projekte entdecken",
  "projects.allEyebrow": "Alle Projekte",
  "projects.allTitle": "Alle Projekte im Detail.",
  "projects.back": "Zurück zur Startseite",

  "achievements.eyebrow": "Erfolge",
  "languages.eyebrow": "Sprachen",
  "certificates.eyebrow": "Zertifikate",
  "hobbies.eyebrow": "Jenseits des Bildschirms",

  "contact.eyebrow": "Kontakt",
  "contact.title1": "Lass uns etwas",
  "contact.title2": "Außergewöhnliches schaffen.",
  "contact.email": "E-Mail",
  "contact.phone": "Telefon",
  "contact.based": "Standort",
  "contact.basedValue": "Marokko — weltweit verfügbar",
  "contact.formTitle": "Schreib mir eine Nachricht",
  "contact.name": "Ihr Name",
  "contact.subject": "Betreff",
  "contact.message": "Nachricht",
  "contact.send": "Nachricht senden",
  "contact.sent": "Danke — Ihre Nachricht ist bereit zum Senden.",
};

const nl: Dict = {
  "nav.about": "Over mij",
  "nav.projects": "Alle projecten",
  "nav.contact": "Contact",
  "nav.language": "Taal",

  "hero.eyebrow": "Portfolio · 2026",
  "hero.title": "Software Engineer · Full-Stack Web Developer",
  "hero.desc":
    "Ik bouw innovatieve digitale producten, webapplicaties en moderne softwareoplossingen.",
  "hero.scroll": "Scroll om te ontdekken",

  "about.eyebrow": "Over mij",
  "about.lead":
    "Full-Stack Web Developer gericht op het bouwen van moderne en innovatieve digitale oplossingen.",
  "about.p1":
    "Afgestudeerd in Informatiesysteemengineering, met een sterke basis in softwareontwikkeling, webtechnologieën en systeemontwerp.",
  "about.p2":
    "Ervaring met het ontwikkelen van webapplicaties, het integreren van API's en het samenwerken in teams om ideeën om te zetten in betrouwbare en gebruiksvriendelijke digitale oplossingen.",

  "education.eyebrow": "Opleiding",
  "experience.eyebrow": "Ervaring",

  "skills.eyebrow": "Vaardigheden",
  "skills.title":
    "Een sterke basis in softwareontwikkeling en informatiesystemen.",

  "projects.eyebrow": "Geselecteerde projecten",
  "projects.title":
    "Een selectie van webapplicaties en digitale oplossingen.",
  "projects.explore": "Meer projecten bekijken",
  "projects.allEyebrow": "Alle projecten",
  "projects.allTitle": "Alle projecten in detail.",
  "projects.back": "Terug naar home",

  "achievements.eyebrow": "Prestaties",
  "languages.eyebrow": "Talen",
  "certificates.eyebrow": "Certificaten",
  "hobbies.eyebrow": "Buiten het scherm",

  "contact.eyebrow": "Contact",
  "contact.title1": "Laten we iets",
  "contact.title2": "uitzonderlijks creëren.",
  "contact.email": "E-mail",
  "contact.phone": "Telefoon",
  "contact.based": "Locatie",
  "contact.basedValue": "Marokko — wereldwijd beschikbaar",
  "contact.formTitle": "Stuur me een bericht",
  "contact.name": "Je naam",
  "contact.subject": "Onderwerp",
  "contact.message": "Bericht",
  "contact.send": "Bericht versturen",
  "contact.sent": "Bedankt — je bericht is klaar om te worden verzonden.",
};



const dictionaries: Record<LangCode, Dict> = { en, ar, fr, de, nl };

const LangContext = createContext<{
  lang: LangCode;
  setLang: (l: LangCode) => void;
  t: (key: string) => string;
}>({ lang: "en", setLang: () => {}, t: (k) => en[k] ?? k });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("lang") as LangCode | null;
    if (stored && stored in dictionaries) setLangState(stored);
  }, []);

  useEffect(() => {
    const option = languageOptions.find((o) => o.code === lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = option?.dir ?? "ltr";
  }, [lang]);

  const setLang = useCallback((l: LangCode) => {
    setLangState(l);
    window.localStorage.setItem("lang", l);
  }, []);

  const t = useCallback((key: string) => dictionaries[lang][key] ?? en[key] ?? key, [lang]);

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
