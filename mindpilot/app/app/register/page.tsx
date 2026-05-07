import type { Metadata } from "next";
import { cookies } from "next/headers";
import { LanguageToggle } from "../_components/LanguageToggle";
import { fallbackLanguage, languageCookieName, type Language } from "../lib/language";
import { operatorProfile } from "../lib/mockData";

export const metadata: Metadata = {
  title: "Register | MindPilot",
  description: "MindPilot parent registration and first operator profile."
};

const registerCopy = {
  ru: {
    dir: "ltr",
    brandSubtitle: "AI Operator System",
    nav: { login: "Вход", consent: "Согласие родителя" },
    kicker: "Регистрация родителя",
    title: "Перед первой миссией нужно понять оператора.",
    text:
      "Родитель видит ребёнка со стороны: что мотивирует, где он быстро сдаётся, как реагирует на ошибки. Эти ответы не являются диагнозом. Они помогают наставнику начать мягче и точнее.",
    steps: ["1. Аккаунт родителя", "2. Взгляд родителя", "3. MindScan оператора", "4. Карта подхода в админке"],
    form: {
      email: "Email родителя",
      operatorName: "Псевдоним оператора",
      age: "Возраст оператора",
      learningStyle: "Как оператор лучше всего входит в новое?",
      obstacle: "Что обычно мешает ему учиться?",
      goal: "Что вы хотите, чтобы MindPilot развил в первую очередь?",
      consent: "Я родитель или законный опекун и принимаю Parent Consent.",
      submit: "Создать профиль и перейти к MindScan"
    },
    learningOptions: {
      practice: "Через практику и примеры",
      story: "Через историю и объяснение",
      competition: "Через вызов и соревнование с собой",
      calm: "Через спокойный пошаговый разбор"
    },
    obstacleOptions: {
      school_pressure: "Ощущение, что его проверяют как в школе",
      too_long: "Слишком длинные объяснения",
      too_easy: "Слишком лёгкие задания",
      fear_error: "Страх ошибиться"
    },
    defaultGoal: "Чтобы оператор использовал AI как инструмент, а не как замену мышления."
  },
  he: {
    dir: "rtl",
    brandSubtitle: "AI Operator System",
    nav: { login: "כניסה", consent: "הסכמת הורה" },
    kicker: "יצירת חשבון הורה",
    title: "לפני המשימה הראשונה צריך להבין את המפעיל.",
    text:
      "ההורה רואה את הילד מבחוץ: מה מניע אותו, איפה הוא מוותר מהר ואיך הוא מגיב לטעויות. אלה לא אבחונים. התשובות עוזרות למנטור להתחיל בצורה מדויקת ועדינה יותר.",
    steps: ["1. חשבון הורה", "2. מבט ההורה", "3. MindScan למפעיל", "4. מפת גישה באדמין"],
    form: {
      email: "Email של ההורה",
      operatorName: "שם מפעיל",
      age: "גיל המפעיל",
      learningStyle: "איך המפעיל נכנס הכי טוב לדבר חדש?",
      obstacle: "מה בדרך כלל מפריע לו ללמוד?",
      goal: "מה תרצו ש-MindPilot יפתח קודם?",
      consent: "אני הורה או אפוטרופוס חוקי ומאשר את Parent Consent.",
      submit: "יצירת פרופיל ומעבר ל-MindScan"
    },
    learningOptions: {
      practice: "דרך תרגול ודוגמאות",
      story: "דרך סיפור והסבר",
      competition: "דרך אתגר ותחרות מול עצמו",
      calm: "דרך פירוק רגוע שלב-שלב"
    },
    obstacleOptions: {
      school_pressure: "תחושה שבודקים אותו כמו בבית ספר",
      too_long: "הסברים ארוכים מדי",
      too_easy: "משימות קלות מדי",
      fear_error: "פחד לטעות"
    },
    defaultGoal: "שהמפעיל ישתמש ב-AI ככלי, ולא כתחליף לחשיבה שלו."
  },
  en: {
    dir: "ltr",
    brandSubtitle: "AI Operator System",
    nav: { login: "Log in", consent: "Parent consent" },
    kicker: "Parent Registration",
    title: "Before the first mission, we need to understand the operator.",
    text:
      "A parent sees the child from the side: what motivates them, where they give up quickly, and how they react to mistakes. These answers are not a diagnosis. They help the mentor start softer and more precisely.",
    steps: ["1. Parent account", "2. Parent view", "3. Operator MindScan", "4. Approach map in admin"],
    form: {
      email: "Parent email",
      operatorName: "Operator nickname",
      age: "Operator age",
      learningStyle: "How does the operator enter something new best?",
      obstacle: "What usually gets in the way of learning?",
      goal: "What should MindPilot develop first?",
      consent: "I am the parent or legal guardian and accept Parent Consent.",
      submit: "Create profile and go to MindScan"
    },
    learningOptions: {
      practice: "Through practice and examples",
      story: "Through story and explanation",
      competition: "Through challenge and self-competition",
      calm: "Through calm step-by-step breakdown"
    },
    obstacleOptions: {
      school_pressure: "Feeling tested like at school",
      too_long: "Explanations are too long",
      too_easy: "Tasks are too easy",
      fear_error: "Fear of making mistakes"
    },
    defaultGoal: "So the operator uses AI as a tool, not as a replacement for their thinking."
  }
} satisfies Record<Language, { dir: "ltr" | "rtl"; [key: string]: any }>;

async function getPageLanguage(): Promise<Language> {
  const cookieStore = await cookies();
  return fallbackLanguage(cookieStore.get(languageCookieName)?.value, "en");
}

export default async function RegisterPage() {
  const language = await getPageLanguage();
  const t = registerCopy[language];

  return (
    <main className="academyAuthPage" dir={t.dir} lang={language}>
      <nav className="academyNav">
        <a href="/" className="academyBrand">
          <span>MindPilot</span>
          <b>{t.brandSubtitle}</b>
        </a>
        <div className="academyNavControls">
          <a href="/login">{t.nav.login}</a>
          <a href="/parent-consent">{t.nav.consent}</a>
          <LanguageToggle current={language} />
        </div>
      </nav>

      <section className="academyAuthShell parentSurveyShell">
        <div className="academyAuthIntro">
          <p className="academyKicker">{t.kicker}</p>
          <h1>{t.title}</h1>
          <p>{t.text}</p>
          <div className="academySteps">
            {t.steps.map((step: string) => (
              <span key={step}>{step}</span>
            ))}
          </div>
        </div>

        <form className="academyForm parentSurveyForm">
          <label>
            {t.form.email}
            <input placeholder="parent@example.com" type="email" />
          </label>
          <label>
            {t.form.operatorName}
            <input defaultValue={operatorProfile.displayName} />
          </label>
          <label>
            {t.form.age}
            <select defaultValue={operatorProfile.age}>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
            </select>
          </label>
          <label>
            {t.form.learningStyle}
            <select defaultValue="practice">
              {Object.entries(t.learningOptions).map(([value, label]) => (
                <option key={value} value={value}>
                  {label as string}
                </option>
              ))}
            </select>
          </label>
          <label>
            {t.form.obstacle}
            <select defaultValue="school_pressure">
              {Object.entries(t.obstacleOptions).map(([value, label]) => (
                <option key={value} value={value}>
                  {label as string}
                </option>
              ))}
            </select>
          </label>
          <label>
            {t.form.goal}
            <textarea defaultValue={t.defaultGoal} rows={3} />
          </label>
          <label className="academyCheck">
            <input type="checkbox" />
            <span>{t.form.consent}</span>
          </label>
          <a className="academySubmit" href="/operator/mindscan">
            {t.form.submit}
          </a>
        </form>
      </section>
    </main>
  );
}
