"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import {
  GrowthRadar3D,
  MentorCore3D,
  OperatorBase3D,
  SafetyCube3D
} from "./_components/MindPilot3D";
import {
  languageCookieName,
  languageMaxAgeSeconds,
  languageStorageKey,
  supportedLanguages,
  type Language
} from "./lib/language";

const copy = {
  ru: {
    dir: "ltr",
    title: "MindPilot | Think clearly. Command AI.",
    brandSubtitle: "AI Operator System",
    nav: { courses: "Курсы", login: "Вход", start: "Регистрация" },
    hero: {
      kicker: "Think clearly · Command AI · 10-16",
      title: "MindPilot учит управлять AI, а не зависеть от него.",
      text:
        "Это не школа AI и не курс промптов. MindPilot тренирует ясность мышления, проверку фактов, точные запросы и самостоятельные решения рядом с AI.",
      primary: "Регистрация",
      secondary: "Вход"
    },
    visual: {
      aria: "Визуальная база оператора MindPilot",
      nodes: ["AI", "ФАКТ", "ПРОМПТ", "ПОЧЕМУ", "ИСТОЧНИК"],
      signal: "база оператора",
      title: "Пульт управления",
      text: "MindScan, миссия дня, AI-наставник и карта роста собраны в одной системе.",
      zones: [
        { label: "MindScan", value: "профиль мышления", icon: "01" },
        { label: "Миссии", value: "6 базовых навыков", icon: "02" },
        { label: "Наставник", value: "только вопросы", icon: "03" },
        { label: "Safety", value: "контроль админа", icon: "04" }
      ],
      path: [
        { label: "Старт", detail: "AI не магия", status: "done" },
        { label: "Ошибка AI", detail: "Поймать уверенную ложь", status: "active" },
        { label: "Промпт", detail: "Собрать сильный запрос", status: "next" },
        { label: "Проверка", detail: "Доказать факт", status: "locked" }
      ]
    },
    courses: {
      kicker: "Система продукта",
      title: "Сначала база управления AI, потом новые траектории.",
      text:
        "Курсы встроены в проект как маршруты, версии контента, метрики и safety-review. Первый путь учит понимать AI, проверять факты и управлять промптами. Следующие траектории открываются после базовой AI-грамотности.",
      action: "Открыть каталог курсов",
      cards: [
        { label: "01", title: "AI Operator Basics", text: "Активная траектория: миссии, наставник, 6 метрик и дневной лимит." },
        { label: "02", title: "Codex Inventor Kids", text: "Следующий курс: создание реальных проектов после базовой подготовки." },
        { label: "QA", title: "Контроль системы", text: "Каждый курс имеет статус, источник, метрики, уроки и safety-review." }
      ]
    },
    operator: {
      kicker: "Что видит оператор",
      title: "Интерфейс должен ощущаться как личная база роста.",
      text:
        "Не огромный промо-сайт и не школьный журнал. Это рабочая зона оператора: куда зайти, что пройти, какой навык вырос и что спросить у наставника.",
      today: "Сегодня",
      mission: "Миссия 2 · Анатомия ошибки",
      open: "Открыть базу",
      status: "В процессе",
      cardTitle: "Поймать уверенную ошибку AI",
      cardText: "Оператор проверяет ответ, ищет источник и пишет вывод своими словами.",
      steps: "3 из 6 шагов",
      mentor: "Наставник",
      mentorText: "Что именно в ответе AI требует проверки?",
      metrics: [
        { label: "Проверка", value: "3/5", tone: "mint" },
        { label: "Критичность", value: "3/5", tone: "blue" },
        { label: "Промпты", value: "3/5", tone: "peach" },
        { label: "Автономность", value: "2/5", tone: "violet" }
      ],
      gallery: [
        { label: "Личная база", text: "Не экран школы, а место где оператор растёт." },
        { label: "Наставник", text: "AI ведёт вопросами и не делает работу за оператора." },
        { label: "Радар навыков", text: "Рост виден через метрики, а не оценки и давление." },
        { label: "Safety", text: "Админ видит сигналы риска до того, как это станет проблемой." }
      ],
      visuals: {
        base: {
          aria: "3D визуал личной базы оператора",
          main: "База",
          side: "XP",
          mission: "Миссия 2"
        },
        mentor: {
          aria: "3D визуал AI-наставника",
          questionOne: "Почему?",
          questionTwo: "Что проверил?"
        },
        radar: {
          aria: "3D визуал радара навыков",
          top: "Проверка",
          right: "Промпты",
          bottom: "Автономность"
        },
        safety: {
          aria: "3D визуал safety контроля",
          front: "Safety"
        }
      }
    },
    prelesson: {
      kicker: "Перед первой миссией",
      title: "Сначала мы понимаем оператора, потом начинаем маршрут.",
      text:
        "У каждого человека разный вход: одному нужен вызов, другому спокойный шаг за шагом, третьему примеры из игр или реальной работы. Поэтому первая точка системы — MindScan.",
      cards: [
        { label: "1", title: "Взгляд родителя", text: "Что мотивирует, где ребёнок быстро устаёт, чего родитель хочет от пилота." },
        { label: "2", title: "MindScan оператора", text: "Темп, интересы, опыт с AI, любимый формат задания и стиль подсказок." },
        { label: "3", title: "Pilot Profile", text: "Система фиксирует тон наставника, риски, мотиваторы и план первой миссии." }
      ]
    },
    audience: [
      {
        title: "Для родителя",
        text:
          "MindPilot не обещает магию и не заменяет школу. Он учит ребёнка безопасно пользоваться AI: проверять факты, замечать ошибки и не отдавать мышление инструменту.",
        points: ["родитель даёт согласие", "видны summaries", "есть safety-сигналы"]
      },
      {
        title: "Для оператора",
        text:
          "Это не урок с оценками. Это личная база: сегодня есть миссия, наставник задаёт вопросы, профиль показывает рост, а достижения открываются за реальные навыки.",
        points: ["миссии короткие", "нет публичных рейтингов", "AI-наставник не давит"]
      }
    ],
    principles: [
      { title: "Миссии вместо уроков", text: "Короткий зацеп, испытание, симуляция и рефлексия. Без оценок и школьного давления." },
      { title: "Наставник задаёт вопросы", text: "AI не пишет за ребёнка. Он помогает проверить мысль и найти следующий шаг." },
      { title: "Растёт личный профиль", text: "Оператор видит прогресс навыков, серию дней, достижения и текущий ранг." }
    ],
    parent: {
      kicker: "Что контролирует родитель",
      title: "Взрослая часть остаётся строгой: consent, безопасность, отчёты и платежи.",
      items: ["Родитель создаёт аккаунт", "Оператор входит без email", "Наставник не пишет домашку", "Админ видит safety-сигналы"]
    }
  },
  he: {
    dir: "rtl",
    title: "MindPilot | Think clearly. Command AI.",
    brandSubtitle: "AI Operator System",
    nav: { courses: "קורסים", login: "כניסה", start: "הרשמה" },
    hero: {
      kicker: "Think clearly · Command AI · גילאי 10-16",
      title: "MindPilot מלמד לנהל AI, לא להיות תלוי בו.",
      text:
        "זה לא בית ספר ל-AI ולא קורס פרומפטים. MindPilot מאמן חשיבה בהירה, בדיקת עובדות, בקשות מדויקות וקבלת החלטות עצמאית לצד AI.",
      primary: "הרשמה",
      secondary: "כניסה"
    },
    visual: {
      aria: "תצוגת בסיס המפעיל של MindPilot",
      nodes: ["AI", "עובדה", "פרומפט", "למה", "מקור"],
      signal: "בסיס מפעיל",
      title: "חדר בקרה",
      text: "MindScan, משימת היום, מנטור AI ומפת צמיחה נמצאים במערכת אחת.",
      zones: [
        { label: "MindScan", value: "פרופיל חשיבה", icon: "01" },
        { label: "משימות", value: "6 מיומנויות בסיס", icon: "02" },
        { label: "מנטור", value: "רק שאלות", icon: "03" },
        { label: "Safety", value: "בקרת admin", icon: "04" }
      ],
      path: [
        { label: "התחלה", detail: "AI אינו קסם", status: "done" },
        { label: "טעות AI", detail: "לתפוס שקר בטוח", status: "active" },
        { label: "פרומפט", detail: "לבנות בקשה חזקה", status: "next" },
        { label: "בדיקה", detail: "להוכיח עובדה", status: "locked" }
      ]
    },
    courses: {
      kicker: "מערכת מוצר",
      title: "קודם בסיס לניהול AI, אחר כך מסלולים חדשים.",
      text:
        "הקורסים בנויים כמסלולים עם גרסאות תוכן, מדדים ו-safety-review. המסלול הראשון מלמד להבין AI, לבדוק עובדות ולנהל פרומפטים. מסלולים נוספים נפתחים אחרי בסיס AI.",
      action: "פתיחת קטלוג הקורסים",
      cards: [
        { label: "01", title: "AI Operator Basics", text: "מסלול פעיל: משימות, מנטור, 6 מדדים ומגבלה יומית." },
        { label: "02", title: "Codex Inventor Kids", text: "הקורס הבא: בניית פרויקטים אמיתיים אחרי הכנה בסיסית." },
        { label: "QA", title: "בקרת מערכת", text: "לכל קורס יש סטטוס, מקור, מדדים, שיעורים ו-safety-review." }
      ]
    },
    operator: {
      kicker: "מה המפעיל רואה",
      title: "הממשק צריך להרגיש כמו בסיס צמיחה אישי.",
      text:
        "לא אתר פרומו ענק ולא יומן בית ספר. זה אזור עבודה למפעיל: לאן להיכנס, איזו משימה לעבור, איזה כישור צמח ומה לשאול את המנטור.",
      today: "היום",
      mission: "משימה 2 · אנטומיית הטעות",
      open: "פתיחת הבסיס",
      status: "בתהליך",
      cardTitle: "לתפוס טעות בטוחה של AI",
      cardText: "המפעיל בודק תשובה, מחפש מקור וכותב מסקנה במילים שלו.",
      steps: "3 מתוך 6 צעדים",
      mentor: "מנטור",
      mentorText: "מה בדיוק בתשובת ה-AI דורש בדיקה?",
      metrics: [
        { label: "בדיקה", value: "3/5", tone: "mint" },
        { label: "ביקורתיות", value: "3/5", tone: "blue" },
        { label: "פרומפטים", value: "3/5", tone: "peach" },
        { label: "עצמאות", value: "2/5", tone: "violet" }
      ],
      gallery: [
        { label: "בסיס אישי", text: "לא מסך בית ספר, אלא מקום שבו המפעיל גדל." },
        { label: "מנטור", text: "AI מוביל בשאלות ולא עושה את העבודה במקום המפעיל." },
        { label: "רדאר מיומנויות", text: "הצמיחה נראית דרך מדדים, לא דרך ציונים ולחץ." },
        { label: "Safety", text: "האדמין רואה אותות סיכון לפני שהם הופכים לבעיה." }
      ],
      visuals: {
        base: {
          aria: "תצוגת תלת-ממד של בסיס המפעיל",
          main: "בסיס",
          side: "XP",
          mission: "משימה 2"
        },
        mentor: {
          aria: "תצוגת תלת-ממד של מנטור AI",
          questionOne: "למה?",
          questionTwo: "מה בדקת?"
        },
        radar: {
          aria: "תצוגת תלת-ממד של רדאר מיומנויות",
          top: "בדיקה",
          right: "פרומפטים",
          bottom: "עצמאות"
        },
        safety: {
          aria: "תצוגת תלת-ממד של בקרת בטיחות",
          front: "בטיחות"
        }
      }
    },
    prelesson: {
      kicker: "לפני המשימה הראשונה",
      title: "קודם מבינים את המפעיל, אחר כך מתחילים מסלול.",
      text:
        "לכל אדם יש נקודת כניסה אחרת: אחד צריך אתגר, שני צריך צעד-צעד, ושלישי צריך דוגמאות ממשחקים או עבודה אמיתית. לכן נקודת הפתיחה היא MindScan.",
      cards: [
        { label: "1", title: "מבט ההורה", text: "מה מניע, איפה הילד מתעייף מהר ומה ההורה רוצה לבדוק בפיילוט." },
        { label: "2", title: "MindScan למפעיל", text: "קצב, תחומי עניין, ניסיון עם AI, פורמט משימות וסגנון רמזים." },
        { label: "3", title: "Pilot Profile", text: "המערכת שומרת טון מנטור, סיכונים, מניעים ותוכנית למשימה הראשונה." }
      ]
    },
    audience: [
      {
        title: "להורה",
        text:
          "MindPilot לא מבטיח קסם ולא מחליף בית ספר. הוא מלמד את הילד להשתמש ב-AI באופן בטוח: לבדוק עובדות, לזהות טעויות ולא למסור לכלי את החשיבה.",
        points: ["ההורה נותן הסכמה", "יש summaries", "יש אותות safety"]
      },
      {
        title: "למפעיל",
        text:
          "זה לא שיעור עם ציונים. זה בסיס אישי: יש משימה להיום, המנטור שואל שאלות, הפרופיל מראה צמיחה והישגים נפתחים לפי מיומנויות אמיתיות.",
        points: ["משימות קצרות", "אין דירוגים פומביים", "המנטור לא לוחץ"]
      }
    ],
    principles: [
      { title: "משימות במקום שיעורים", text: "פתיחה קצרה, אתגר, סימולציה ורפלקציה. בלי ציונים ובלי לחץ בית ספרי." },
      { title: "המנטור שואל שאלות", text: "AI לא כותב במקום הילד. הוא עוזר לבדוק מחשבה ולמצוא את הצעד הבא." },
      { title: "פרופיל אישי צומח", text: "המפעיל רואה התקדמות במיומנויות, רצף ימים, הישגים ודרגה נוכחית." }
    ],
    parent: {
      kicker: "מה ההורה שולט בו",
      title: "החלק המבוגר נשאר מדויק: consent, בטיחות, דוחות ותשלומים.",
      items: ["ההורה יוצר חשבון", "המפעיל נכנס בלי email", "המנטור לא כותב שיעורי בית", "האדמין רואה אותות safety"]
    }
  },
  en: {
    dir: "ltr",
    title: "MindPilot | Think clearly. Command AI.",
    brandSubtitle: "AI Operator System",
    nav: { courses: "Courses", login: "Log in", start: "Sign up" },
    hero: {
      kicker: "Think clearly · Command AI · ages 10-16",
      title: "MindPilot teaches people to command AI, not depend on it.",
      text:
        "This is not an AI school and not a prompt course. MindPilot trains clear thinking, fact verification, precise requests, and independent decisions with AI.",
      primary: "Sign up",
      secondary: "Log in"
    },
    visual: {
      aria: "MindPilot operator base visual",
      nodes: ["AI", "FACT", "PROMPT", "WHY", "SOURCE"],
      signal: "operator base",
      title: "Control Room",
      text: "MindScan, daily mission, AI mentor, and growth map live in one system.",
      zones: [
        { label: "MindScan", value: "thinking profile", icon: "01" },
        { label: "Missions", value: "6 core skills", icon: "02" },
        { label: "Mentor", value: "questions only", icon: "03" },
        { label: "Safety", value: "admin control", icon: "04" }
      ],
      path: [
        { label: "Start", detail: "AI is not magic", status: "done" },
        { label: "AI Error", detail: "Catch confident falsehood", status: "active" },
        { label: "Prompt", detail: "Build a strong request", status: "next" },
        { label: "Verify", detail: "Prove the fact", status: "locked" }
      ]
    },
    courses: {
      kicker: "Product System",
      title: "AI command basics first. New paths after.",
      text:
        "Courses are built as paths with content versions, metrics, and safety review. The first path teaches AI understanding, fact checking, and prompt control. Future paths open after core AI literacy.",
      action: "Open course catalog",
      cards: [
        { label: "01", title: "AI Operator Basics", text: "Active path: missions, mentor, 6 metrics, and daily limits." },
        { label: "02", title: "Codex Inventor Kids", text: "Next course: building real projects after core preparation." },
        { label: "QA", title: "System control", text: "Each course has status, source, metrics, lessons, and safety review." }
      ]
    },
    operator: {
      kicker: "Operator view",
      title: "The interface should feel like a personal growth base.",
      text:
        "Not a huge promo site and not a school diary. It is the operator workspace: where to go, what to complete, which skill grew, and what to ask the mentor.",
      today: "Today",
      mission: "Mission 2 · Anatomy of Error",
      open: "Open base",
      status: "In progress",
      cardTitle: "Catch a confident AI mistake",
      cardText: "The operator checks the answer, finds a source, and writes the conclusion in their own words.",
      steps: "3 of 6 steps",
      mentor: "Mentor",
      mentorText: "What exactly in the AI answer needs verification?",
      metrics: [
        { label: "Verification", value: "3/5", tone: "mint" },
        { label: "Critical thinking", value: "3/5", tone: "blue" },
        { label: "Prompts", value: "3/5", tone: "peach" },
        { label: "Autonomy", value: "2/5", tone: "violet" }
      ],
      gallery: [
        { label: "Personal base", text: "Not a school screen, but a place where the operator grows." },
        { label: "Mentor", text: "AI leads with questions and does not do the work for the operator." },
        { label: "Skill radar", text: "Growth is visible through metrics, not grades and pressure." },
        { label: "Safety", text: "Admin sees risk signals before they become a problem." }
      ],
      visuals: {
        base: {
          aria: "3D operator base visual",
          main: "Base",
          side: "XP",
          mission: "Mission 2"
        },
        mentor: {
          aria: "3D AI mentor visual",
          questionOne: "Why?",
          questionTwo: "What did you verify?"
        },
        radar: {
          aria: "3D skill radar visual",
          top: "Verify",
          right: "Prompts",
          bottom: "Autonomy"
        },
        safety: {
          aria: "3D safety control visual",
          front: "Safety"
        }
      }
    },
    prelesson: {
      kicker: "Before the first mission",
      title: "First we understand the operator. Then we start the path.",
      text:
        "Everyone enters differently: some need challenge, some need calm steps, and some need examples from games or real work. That is why the first system point is MindScan.",
      cards: [
        { label: "1", title: "Parent view", text: "What motivates the child, where they get tired, and what the parent wants to test." },
        { label: "2", title: "Operator MindScan", text: "Pace, interests, AI experience, preferred task format, and hint style." },
        { label: "3", title: "Pilot Profile", text: "The system records mentor tone, risks, motivators, and the first mission plan." }
      ]
    },
    audience: [
      {
        title: "For parents",
        text:
          "MindPilot does not promise magic and does not replace school. It teaches a child to use AI safely: verify facts, notice errors, and keep their own thinking.",
        points: ["parent consent", "summaries visible", "safety signals"]
      },
      {
        title: "For operators",
        text:
          "This is not a graded lesson. It is a personal base: today's mission, mentor questions, profile growth, and achievements unlocked by real skills.",
        points: ["short missions", "no public rankings", "mentor does not pressure"]
      }
    ],
    principles: [
      { title: "Missions instead of lessons", text: "Short hook, challenge, simulation, and reflection. No grades or school pressure." },
      { title: "The mentor asks questions", text: "AI does not write for the child. It helps check the thought and find the next step." },
      { title: "A personal profile grows", text: "The operator sees skill progress, streak, achievements, and current rank." }
    ],
    parent: {
      kicker: "Parent control",
      title: "The adult layer stays strict: consent, safety, reports, and billing.",
      items: ["Parent creates account", "Operator enters without email", "Mentor does not write homework", "Admin sees safety signals"]
    }
  }
} satisfies Record<Language, { dir: "ltr" | "rtl"; title: string; [key: string]: any }>;

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "ru";

  const stored = window.localStorage.getItem(languageStorageKey);
  if (supportedLanguages.includes(stored as Language)) return stored as Language;

  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const browserLanguage of browserLanguages) {
    const normalized = browserLanguage.toLowerCase().split("-")[0] as Language;
    if (supportedLanguages.includes(normalized)) return normalized;
  }

  return "en";
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("ru");
  const t = copy[language];

  useEffect(() => {
    setLanguage(getInitialLanguage());
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = t.dir;
    document.title = t.title;
    document.cookie = `${languageCookieName}=${language}; path=/; max-age=${languageMaxAgeSeconds}; samesite=lax`;
  }, [language, t.dir, t.title]);

  function chooseLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    window.localStorage.setItem(languageStorageKey, nextLanguage);
  }

  return (
    <main className="academyPage">
      <nav className="academyNav">
        <a href="/" className="academyBrand">
          <span>MindPilot</span>
          <b>{t.brandSubtitle}</b>
        </a>
        <div className="academyNavControls">
          <a href="/login">{t.nav.login}</a>
          <a href="/register" className="academyNavPrimary">
            {t.nav.start}
          </a>
          <div className="languageToggle" aria-label="Language">
            {supportedLanguages.map((item) => (
              <button
                className={item === language ? "active" : ""}
                key={item}
                type="button"
                onClick={() => chooseLanguage(item)}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section className="academyHero compactHero">
        <div className="academyHeroCopy">
          <p className="academyKicker">{t.hero.kicker}</p>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.text}</p>
          <div className="academyActions">
            <a href="/register">{t.hero.primary}</a>
            <a href="/login">{t.hero.secondary}</a>
          </div>
        </div>

        <div className="pilotBaseVisual" aria-label={t.visual.aria}>
          <div className="baseOrbit" aria-hidden="true">
            {t.visual.nodes.map((node, index) => (
              <span
                key={node}
                style={
                  {
                    "--node-index": index,
                    "--node-count": t.visual.nodes.length
                  } as CSSProperties
                }
              >
                {node}
              </span>
            ))}
          </div>

          <div className="pilotCoreCard">
            <span className="coreSignal">{t.visual.signal}</span>
            <strong>{t.visual.title}</strong>
            <p>{t.visual.text}</p>
            <div className="coreRings" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
          </div>

          <div className="baseZoneGrid">
            {t.visual.zones.map((zone) => (
              <div key={zone.label}>
                <span>{zone.icon}</span>
                <strong>{zone.label}</strong>
                <p>{zone.value}</p>
              </div>
            ))}
          </div>

          <div className="missionRail">
            {t.visual.path.map((item, index) => (
              <div
                className={`missionNode ${item.status}`}
                key={item.label}
                style={{ "--delay": `${index * 0.12}s` } as CSSProperties}
              >
                <i>{index + 1}</i>
                <span>
                  <b>{item.label}</b>
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="growthBaseSection">
        <div className="growthBaseIntro">
          <p className="academyKicker">{t.operator.kicker}</p>
          <h2>{t.operator.title}</h2>
          <p>{t.operator.text}</p>
        </div>

        <div className="growthBaseBoard">
          <div className="baseTopbar">
            <div>
              <span>{t.operator.today}</span>
              <strong>{t.operator.mission}</strong>
            </div>
            <span className="baseTopAction">{t.operator.open}</span>
          </div>

          <div className="baseMainCard">
            <span className="baseBadge">{t.operator.status}</span>
            <h3>{t.operator.cardTitle}</h3>
            <p>{t.operator.cardText}</p>
            <div className="baseProgress">
              <i>
                <b />
              </i>
              <span>{t.operator.steps}</span>
            </div>
          </div>

          <div className="baseMetricGrid">
            {t.operator.metrics.map((metric) => (
              <div className={`baseMetric ${metric.tone}`} key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>

          <div className="baseMentorNote">
            <span>{t.operator.mentor}</span>
            <p>{t.operator.mentorText}</p>
          </div>
        </div>

        <div className="growth3DGallery" aria-label="MindPilot visuals">
          <article className="growth3DCard primary">
            <OperatorBase3D {...t.operator.visuals.base} />
            <div>
              <span>{t.operator.gallery[0].label}</span>
              <strong>{t.operator.gallery[0].text}</strong>
            </div>
          </article>
          <article className="growth3DCard">
            <MentorCore3D {...t.operator.visuals.mentor} />
            <div>
              <span>{t.operator.gallery[1].label}</span>
              <strong>{t.operator.gallery[1].text}</strong>
            </div>
          </article>
          <article className="growth3DCard">
            <GrowthRadar3D {...t.operator.visuals.radar} />
            <div>
              <span>{t.operator.gallery[2].label}</span>
              <strong>{t.operator.gallery[2].text}</strong>
            </div>
          </article>
          <article className="growth3DCard">
            <SafetyCube3D {...t.operator.visuals.safety} />
            <div>
              <span>{t.operator.gallery[3].label}</span>
              <strong>{t.operator.gallery[3].text}</strong>
            </div>
          </article>
        </div>
      </section>

      <section className="preLessonSection">
        <div>
          <p className="academyKicker">{t.prelesson.kicker}</p>
          <h2>{t.prelesson.title}</h2>
          <p>{t.prelesson.text}</p>
        </div>
        <div className="preLessonCards">
          {t.prelesson.cards.map((card) => (
            <article key={card.title}>
              <span>{card.label}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="audienceSection">
        {t.audience.map((block) => (
          <article key={block.title}>
            <h2>{block.title}</h2>
            <p>{block.text}</p>
            <div>
              {block.points.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="academyPrinciples compactPrinciples">
        {t.principles.map((principle) => (
          <article key={principle.title}>
            <h2>{principle.title}</h2>
            <p>{principle.text}</p>
          </article>
        ))}
      </section>

      <section className="parentLayer compactParentLayer">
        <div>
          <p className="academyKicker">{t.parent.kicker}</p>
          <h2>{t.parent.title}</h2>
        </div>
        <div className="parentLayerGrid">
          {t.parent.items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <footer className="academyFooter">
        <p>MindPilot · Think clearly. Command AI.</p>
      </footer>
    </main>
  );
}
