import type { Metadata } from "next";
import { cookies } from "next/headers";
import { LanguageToggle } from "../_components/LanguageToggle";
import { SmartLoginForm } from "../_components/SmartLoginForm";
import { fallbackLanguage, languageCookieName, type Language } from "../lib/language";

export const metadata: Metadata = {
  title: "Login | MindPilot",
  description: "Unified MindPilot login."
};

const loginCopy = {
  ru: {
    dir: "ltr",
    brandSubtitle: "AI Operator System",
    nav: { register: "Регистрация" },
    kicker: "Единый вход",
    title: "Логин и пароль. Роль определяет система.",
    text:
      "Родитель, оператор и админ не выбирают роль вручную. После входа MindPilot проверяет аккаунт и открывает правильную зону: родительский dashboard, базу оператора или админ-контроль.",
    chips: ["меньше ошибок входа", "нет email ребёнка", "админ отделён правами"]
  },
  he: {
    dir: "rtl",
    brandSubtitle: "AI Operator System",
    nav: { register: "הרשמה" },
    kicker: "כניסה אחידה",
    title: "שם משתמש וסיסמה. המערכת מזהה את התפקיד.",
    text:
      "הורה, מפעיל ואדמין לא בוחרים תפקיד ידנית. אחרי הכניסה MindPilot בודק את החשבון ופותח את האזור הנכון: dashboard להורה, בסיס מפעיל או בקרת אדמין.",
    chips: ["פחות טעויות כניסה", "אין email לילד", "אדמין מופרד בהרשאות"]
  },
  en: {
    dir: "ltr",
    brandSubtitle: "AI Operator System",
    nav: { register: "Sign up" },
    kicker: "Unified Login",
    title: "Login and password. MindPilot detects the role.",
    text:
      "Parents, operators, and admins do not choose roles manually. After login, MindPilot checks the account and opens the correct zone: parent dashboard, operator base, or admin control.",
    chips: ["fewer login errors", "no child email", "admin has separate rights"]
  }
} satisfies Record<Language, { dir: "ltr" | "rtl"; [key: string]: any }>;

async function getPageLanguage(): Promise<Language> {
  const cookieStore = await cookies();
  return fallbackLanguage(cookieStore.get(languageCookieName)?.value, "en");
}

export default async function LoginPage() {
  const language = await getPageLanguage();
  const t = loginCopy[language];

  return (
    <main className="academyAuthPage" dir={t.dir} lang={language}>
      <nav className="academyNav">
        <a href="/" className="academyBrand">
          <span>MindPilot</span>
          <b>{t.brandSubtitle}</b>
        </a>
        <div className="academyNavControls">
          <a href="/register">{t.nav.register}</a>
          <LanguageToggle current={language} />
        </div>
      </nav>

      <section className="academyAuthShell unifiedLoginShell">
        <div className="academyAuthIntro">
          <p className="academyKicker">{t.kicker}</p>
          <h1>{t.title}</h1>
          <p>{t.text}</p>
          <div className="academySteps">
            {t.chips.map((chip: string) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
        </div>

        <SmartLoginForm language={language} />
      </section>
    </main>
  );
}
