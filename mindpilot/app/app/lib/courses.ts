import type { Course, CourseEnrollment, CourseLesson } from "./types";

const aiLiteracyLessons: CourseLesson[] = [
  {
    id: "ai-01",
    number: 1,
    title: "Демистификация",
    concept: "AI не магия: он ищет закономерности и строит вероятный ответ.",
    metricFocus: "Понимание AI",
    status: "completed",
    estimatedMinutes: "12-18 минут"
  },
  {
    id: "ai-02",
    number: 2,
    title: "Анатомия ошибки",
    concept: "Уверенный тон AI не доказывает, что ответ верный.",
    metricFocus: "Проверка",
    status: "active",
    estimatedMinutes: "15-20 минут"
  },
  {
    id: "ai-03",
    number: 3,
    title: "Knowledge Cutoff",
    concept: "AI может не знать свежие события без поиска и источников.",
    metricFocus: "Понимание AI",
    status: "locked",
    estimatedMinutes: "12-18 минут"
  },
  {
    id: "ai-04",
    number: 4,
    title: "Уверенно, но неверно",
    concept: "Оператор отделяет уверенность ответа от доказательств.",
    metricFocus: "Критичность",
    status: "locked",
    estimatedMinutes: "15-20 минут"
  },
  {
    id: "ai-05",
    number: 5,
    title: "Состояния оператора",
    concept: "Пассажир, скептик и оператор: как меняется роль ребёнка.",
    metricFocus: "Автономность",
    status: "locked",
    estimatedMinutes: "15-20 минут"
  },
  {
    id: "ai-06",
    number: 6,
    title: "Анатомия промпта",
    concept: "Роль, задача, контекст и формат делают запрос управляемым.",
    metricFocus: "Промпты",
    status: "locked",
    estimatedMinutes: "15-20 минут"
  },
  {
    id: "ai-07",
    number: 7,
    title: "Мусор на входе",
    concept: "Плохой вопрос почти всегда рождает слабый ответ.",
    metricFocus: "Промпты",
    status: "locked",
    estimatedMinutes: "12-18 минут"
  },
  {
    id: "ai-08",
    number: 8,
    title: "Пошаговое мышление",
    concept: "Сложную задачу нужно разбить на понятные шаги.",
    metricFocus: "Промпты",
    status: "locked",
    estimatedMinutes: "15-20 минут"
  },
  {
    id: "ai-09",
    number: 9,
    title: "Метод «Докажи мне»",
    concept: "После важного ответа оператор спрашивает: откуда это известно?",
    metricFocus: "Проверка",
    status: "locked",
    estimatedMinutes: "15-20 минут"
  },
  {
    id: "ai-10",
    number: 10,
    title: "Факт против мнения",
    concept: "Факт можно проверить, мнение нужно распознать.",
    metricFocus: "Критичность",
    status: "locked",
    estimatedMinutes: "12-18 минут"
  },
  {
    id: "ai-11",
    number: 11,
    title: "Перекрёстная проверка",
    concept: "Один источник редко достаточен для важного вывода.",
    metricFocus: "Проверка",
    status: "locked",
    estimatedMinutes: "15-20 минут"
  },
  {
    id: "ai-12",
    number: 12,
    title: "Скорость обнаружения",
    concept: "Оператор быстро замечает места, где AI может ошибиться.",
    metricFocus: "Ошибки",
    status: "locked",
    estimatedMinutes: "10-15 минут"
  },
  {
    id: "ai-13",
    number: 13,
    title: "AI как инструмент",
    concept: "AI помогает думать, но не должен заменять решение ребёнка.",
    metricFocus: "Автономность",
    status: "locked",
    estimatedMinutes: "15-20 минут"
  },
  {
    id: "ai-14",
    number: 14,
    title: "Что нельзя отдавать AI",
    concept: "Личные данные, ценности, школьную работу и финальное решение нельзя отдавать вслепую.",
    metricFocus: "Безопасность",
    status: "locked",
    estimatedMinutes: "15-20 минут"
  },
  {
    id: "ai-15",
    number: 15,
    title: "Кодекс оператора",
    concept: "Ребёнок пишет свои правила работы с AI собственными словами.",
    metricFocus: "Все 6 метрик",
    status: "locked",
    estimatedMinutes: "18-25 минут"
  }
];

const codexInventorLessons: CourseLesson[] = [
  {
    id: "codex-01",
    number: 1,
    title: "Ты теперь изобретатель",
    concept: "Ребёнок выбирает идею проекта и формулирует первый результат.",
    metricFocus: "Автономность",
    status: "locked",
    estimatedMinutes: "20-30 минут"
  },
  {
    id: "codex-02",
    number: 2,
    title: "Codex как помощник",
    concept: "Codex читает проект, объясняет код и помогает исправлять ошибки.",
    metricFocus: "Промпты",
    status: "locked",
    estimatedMinutes: "20-30 минут"
  },
  {
    id: "codex-03",
    number: 3,
    title: "Файлы проекта",
    concept: "Папки, файлы и локальный просмотр становятся понятной картой.",
    metricFocus: "Понимание системы",
    status: "locked",
    estimatedMinutes: "20-30 минут"
  },
  {
    id: "codex-04",
    number: 4,
    title: "GitHub с нуля",
    concept: "Ребёнок сохраняет проект и понимает историю изменений.",
    metricFocus: "Автономность",
    status: "locked",
    estimatedMinutes: "25-35 минут"
  },
  {
    id: "codex-05",
    number: 5,
    title: "Vercel и публикация",
    concept: "Проект открывается по ссылке только после локальной проверки.",
    metricFocus: "Проверка",
    status: "locked",
    estimatedMinutes: "25-35 минут"
  },
  {
    id: "codex-06",
    number: 6,
    title: "Финальный проект",
    concept: "Готовая работа: GitHub, локальная проверка, публикация и объяснение.",
    metricFocus: "Все 6 метрик",
    status: "locked",
    estimatedMinutes: "30-45 минут"
  }
];

export const courses: Course[] = [
  {
    id: "mindpilot-30-day-ai-literacy",
    order: 1,
    slug: "mindpilot-30-day-ai-literacy",
    title: "MindPilot 30-Day AI Literacy",
    subtitle: "Базовый курс: понять AI, управлять промптами, проверять ответы и не отдавать мышление.",
    audience: ["operator", "parent", "admin"],
    status: "active",
    durationDays: 30,
    promise: "За 30 дней ребёнок переходит от пассивного пользователя к оператору AI.",
    childPitch: "Ты учишься ловить ошибки AI, задавать сильные вопросы и управлять инструментом.",
    parentPitch:
      "Родитель получает понятный прогресс по навыкам без чтения личных диалогов ребёнка.",
    sourceFolder: "courses/mindpilot-30-day-ai-literacy",
    metrics: ["Понимание AI", "Критичность", "Промпты", "Проверка", "Ошибки", "Автономность"],
    lessons: aiLiteracyLessons
  },
  {
    id: "codex-inventor-kids",
    order: 2,
    slug: "codex-inventor-kids",
    title: "Codex Inventor Kids",
    subtitle: "Следующий курс: ребёнок строит простой проект с Codex, GitHub и локальной проверкой.",
    audience: ["operator", "parent", "admin"],
    status: "locked",
    durationDays: 12,
    requiredCourseId: "mindpilot-30-day-ai-literacy",
    promise: "После базовой AI-грамотности ребёнок начинает создавать реальные проекты.",
    childPitch: "Ты не просто спрашиваешь AI. Ты собираешь проект, проверяешь его и можешь показать результат.",
    parentPitch:
      "Практический курс открывается после базовой подготовки, чтобы ребёнок понимал границы AI.",
    sourceFolder: "courses/codex-inventor-kids",
    metrics: ["Промпты", "Проверка", "Автономность", "Понимание системы"],
    lessons: codexInventorLessons
  }
];

export const courseEnrollments: CourseEnrollment[] = [
  {
    operatorId: "operator_alpha",
    courseId: "mindpilot-30-day-ai-literacy",
    status: "active",
    completedLessons: 1,
    activeLessonNumber: 2,
    streakDays: 5
  },
  {
    operatorId: "operator_alpha",
    courseId: "codex-inventor-kids",
    status: "locked",
    completedLessons: 0,
    activeLessonNumber: 1,
    streakDays: 0
  }
];

export function getCourseById(courseId: string) {
  return courses.find((course) => course.id === courseId);
}

export function getActiveEnrollment(operatorId: string) {
  return courseEnrollments.find(
    (enrollment) => enrollment.operatorId === operatorId && enrollment.status === "active"
  );
}
