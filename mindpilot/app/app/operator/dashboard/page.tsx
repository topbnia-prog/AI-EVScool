import type { Metadata } from "next";
import { cookies } from "next/headers";
import { GrowthRadar3D, MentorCore3D, OperatorBase3D } from "../../_components/MindPilot3D";
import { getActiveEnrollment, getCourseById } from "../../lib/courses";
import { languageCookieName, supportedLanguages, type Language } from "../../lib/language";
import { missions, operatorProfile } from "../../lib/mockData";

const dashboardCopy = {
  ru: {
    dir: "ltr",
    nav: { mission: "Миссия", courses: "Курсы", mentor: "Наставник", profile: "Профиль" },
    eyebrow: "Operator cockpit",
    title: "База оператора",
    text:
      "Здесь оператор видит серию дней, XP, ранг и траекторию миссий. Главная задача: продолжить активную миссию без давления и рейтингов.",
    continue: "Продолжить",
    course: "Курс",
    noCourse: "курс не назначен",
    operator: "Оператор",
    dailyLimit: "Дневной лимит",
    streakLabel: "Серия дней",
    streakValue: `${operatorProfile.streakCurrent} дней подряд`,
    streakText: "База показывает текущую миссию, XP и личный прогресс без рейтингов.",
    mentorLabel: "Наставник",
    mentorText: "Ведёт вопросами",
    metricsLabel: "Метрики",
    metricsText: "6 навыков роста",
    openCourses: "Открыть карту курсов",
    visuals: {
      base: { aria: "Визуал базы оператора", main: "База", side: "XP", mission: "Миссия 2" },
      mentor: { aria: "Визуал AI-наставника", questionOne: "Почему?", questionTwo: "Что проверил?" },
      radar: { aria: "Визуал радара навыков", top: "Проверка", right: "Промпты", bottom: "Автономность" }
    }
  },
  he: {
    dir: "rtl",
    nav: { mission: "משימה", courses: "קורסים", mentor: "מנטור", profile: "פרופיל" },
    eyebrow: "עמדת מפעיל",
    title: "בסיס המפעיל",
    text:
      "כאן המפעיל רואה רצף ימים, XP, דרגה ומסלול משימות. המטרה המרכזית: להמשיך את המשימה הפעילה בלי לחץ ובלי דירוגים.",
    continue: "להמשיך",
    course: "קורס",
    noCourse: "לא הוקצה קורס",
    operator: "מפעיל",
    dailyLimit: "מגבלה יומית",
    streakLabel: "רצף ימים",
    streakValue: `${operatorProfile.streakCurrent} ימים ברצף`,
    streakText: "הבסיס מציג את המשימה הנוכחית, XP והתקדמות אישית בלי דירוגים.",
    mentorLabel: "מנטור",
    mentorText: "מוביל בשאלות",
    metricsLabel: "מדדים",
    metricsText: "6 מיומנויות צמיחה",
    openCourses: "פתיחת מפת הקורסים",
    visuals: {
      base: { aria: "תצוגת בסיס המפעיל", main: "בסיס", side: "XP", mission: "משימה 2" },
      mentor: { aria: "תצוגת מנטור AI", questionOne: "למה?", questionTwo: "מה בדקת?" },
      radar: { aria: "תצוגת רדאר מיומנויות", top: "בדיקה", right: "פרומפטים", bottom: "עצמאות" }
    }
  },
  en: {
    dir: "ltr",
    nav: { mission: "Mission", courses: "Courses", mentor: "Mentor", profile: "Profile" },
    eyebrow: "Operator cockpit",
    title: "Operator base",
    text:
      "Here the operator sees streak, XP, rank, and the mission path. The main task is to continue the active mission without pressure or rankings.",
    continue: "Continue",
    course: "Course",
    noCourse: "course not assigned",
    operator: "Operator",
    dailyLimit: "Daily limit",
    streakLabel: "Day streak",
    streakValue: `${operatorProfile.streakCurrent} days in a row`,
    streakText: "The base shows the current mission, XP, and personal progress without rankings.",
    mentorLabel: "Mentor",
    mentorText: "Leads with questions",
    metricsLabel: "Metrics",
    metricsText: "6 growth skills",
    openCourses: "Open course map",
    visuals: {
      base: { aria: "Operator base visual", main: "Base", side: "XP", mission: "Mission 2" },
      mentor: { aria: "AI mentor visual", questionOne: "Why?", questionTwo: "What did you verify?" },
      radar: { aria: "Skill radar visual", top: "Verify", right: "Prompts", bottom: "Autonomy" }
    }
  }
} satisfies Record<Language, { dir: "ltr" | "rtl"; [key: string]: any }>;

export const metadata: Metadata = {
  title: "Operator Dashboard | MindPilot",
  description: "MindPilot operator dashboard."
};

async function getDashboardLanguage(): Promise<Language> {
  const cookieStore = await cookies();
  const cookieLanguage = cookieStore.get(languageCookieName)?.value as Language | undefined;
  return supportedLanguages.includes(cookieLanguage as Language) ? (cookieLanguage as Language) : "ru";
}

export default async function OperatorDashboardPage() {
  const language = await getDashboardLanguage();
  const t = dashboardCopy[language];
  const activeMission = missions.find((mission) => mission.status === "active") ?? missions[0];
  const activeEnrollment = getActiveEnrollment(operatorProfile.id);
  const activeCourse = activeEnrollment ? getCourseById(activeEnrollment.courseId) : undefined;

  return (
    <main className="operatorScreenPage" dir={t.dir} lang={language}>
      <nav className="systemNav">
        <a href="/" className="brand">
          MindPilot
        </a>
        <div>
          <a href="/operator/mission/2">{t.nav.mission}</a>
          <a href="/operator/courses">{t.nav.courses}</a>
          <a href="/operator/mentor">{t.nav.mentor}</a>
          <a href="/operator/profile">{t.nav.profile}</a>
        </div>
      </nav>

      <section className="operatorScreenShell">
        <div className="screenSideCopy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p>{t.text}</p>
          <a className="wideButton" href={`/operator/mission/${activeMission.id}`}>
            {t.continue}: {activeMission.number}
          </a>
          <div className="profileRows">
            <div>
              <span>{t.course}</span>
              <strong>{activeCourse?.title ?? t.noCourse}</strong>
            </div>
            <div>
              <span>{t.operator}</span>
              <strong>{operatorProfile.displayName}</strong>
            </div>
            <div>
              <span>{t.dailyLimit}</span>
              <strong>
                {operatorProfile.missionsCompletedToday} / {operatorProfile.dailyMissionLimit}
              </strong>
            </div>
          </div>
        </div>
        <div className="liquidOperatorBase">
          <article className="liquidHeroModule">
            <OperatorBase3D {...t.visuals.base} />
            <div>
              <span>{t.streakLabel}</span>
              <strong>{t.streakValue}</strong>
              <p>{t.streakText}</p>
            </div>
          </article>
          <div className="liquidModuleGrid">
            <article>
              <MentorCore3D {...t.visuals.mentor} />
              <span>{t.mentorLabel}</span>
              <strong>{t.mentorText}</strong>
            </article>
            <article>
              <GrowthRadar3D {...t.visuals.radar} />
              <span>{t.metricsLabel}</span>
              <strong>{t.metricsText}</strong>
            </article>
          </div>
          <a className="liquidPrimaryAction" href="/operator/courses">
            {t.openCourses}
          </a>
        </div>
      </section>
    </main>
  );
}
