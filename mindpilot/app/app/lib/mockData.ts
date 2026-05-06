import type {
  AdminTask,
  MentorMessage,
  MentorScenario,
  Mission,
  OperatorProfile,
  ParentAccount,
  SafetyAlert
} from "./types";

export const parentAccount: ParentAccount = {
  id: "parent_alpha",
  email: "parent@example.com",
  displayName: "Родитель Alpha",
  consentStatus: "accepted",
  billingStatus: "trial"
};

export const operatorProfile: OperatorProfile = {
  id: "operator_alpha",
  parentId: parentAccount.id,
  displayName: "Operator Alpha",
  age: 12,
  ageBranch: "junior",
  language: "ru",
  rank: "Навигатор",
  streakCurrent: 4,
  streakBest: 6,
  missionsCompletedToday: 1,
  dailyMissionLimit: 2,
  interests: ["игры", "технологии", "видео"],
  learningGoal: "Научиться проверять AI и не копировать ответы вслепую.",
  metrics: [
    { id: "ai_understanding", label: "Понимание AI", value: 3, previous: 2 },
    { id: "critical_thinking", label: "Критическое мышление", value: 2, previous: 1 },
    { id: "prompt_quality", label: "Качество промптов", value: 2, previous: 1 },
    { id: "verification", label: "Проверка фактов", value: 3, previous: 2 },
    { id: "error_detection", label: "Поиск ошибок", value: 2, previous: 1 },
    { id: "autonomy", label: "Самостоятельность", value: 4, previous: 3 }
  ]
};

export const missions: Mission[] = [
  {
    id: "1",
    number: 1,
    title: "AI не магия",
    concept: "AI предсказывает паттерны, а не знает истину как человек.",
    metricFocus: "Понимание AI",
    status: "completed",
    estimatedMinutes: "12-18 минут",
    steps: [
      {
        id: "hook",
        label: "Зацеп",
        title: "Что происходит внутри AI?",
        body: "Когда AI отвечает уверенно, он знает, думает или предсказывает следующий фрагмент?"
      },
      {
        id: "concept",
        label: "Концепт",
        title: "AI - инструмент прогнозирования",
        body: "AI ищет вероятный ответ по паттернам. Он может быть полезным и при этом ошибаться."
      },
      {
        id: "visual",
        label: "Визуал",
        title: "Пользователь против оператора",
        body: "Пользователь принимает ответ. Оператор спрашивает, проверяет, улучшает и решает."
      },
      {
        id: "challenge",
        label: "Испытание",
        title: "Проверь описание AI",
        body: "Спроси AI, что он такое, и отметь, признаёт ли он свои ограничения."
      },
      {
        id: "simulation",
        label: "Симуляция",
        title: "Уверенный ответ",
        body: "Если AI говорит, что знает почти всё, оператор должен проверить границы ответа."
      },
      {
        id: "reflection",
        label: "Рефлексия",
        title: "Твой вывод",
        body: "Напиши разницу между использовать AI и управлять AI."
      }
    ]
  },
  {
    id: "2",
    number: 2,
    title: "Поймай уверенную ошибку",
    concept: "Уверенный тон AI не является доказательством.",
    metricFocus: "Проверка фактов",
    status: "active",
    estimatedMinutes: "15-20 минут",
    steps: [
      {
        id: "hook",
        label: "Зацеп",
        title: "Ответ звучит идеально",
        body: "Что ты почувствуешь, если AI отвечает уверенно, но потом оказывается, что часть ответа придумана?"
      },
      {
        id: "concept",
        label: "Концепт",
        title: "Галлюцинация",
        body: "AI может создать правдоподобный, но неверный ответ. Проблема не только в ошибке, а в уверенности."
      },
      {
        id: "visual",
        label: "Визуал",
        title: "Уверенно не значит верно",
        body: "Сигналы риска: нет источника, слишком точные цифры, свежие события, неизвестные имена и даты."
      },
      {
        id: "challenge",
        label: "Испытание",
        title: "Найди, что требует проверки",
        body: "Спроси AI о свежем факте и найди внешний источник. Успех - не только поймать ошибку, но и найти место, где нужен источник."
      },
      {
        id: "simulation",
        label: "Симуляция",
        title: "AI говорит: я обновлён",
        body: "Оператор просит источник или проверяет во внешнем месте."
      },
      {
        id: "reflection",
        label: "Рефлексия",
        title: "Правило оператора",
        body: "Когда AI отвечает уверенно, я..."
      }
    ]
  },
  {
    id: "3",
    number: 3,
    title: "Собери команду",
    concept: "Сильный промпт содержит контекст, цель, ограничения и формат.",
    metricFocus: "Качество промптов",
    status: "locked",
    estimatedMinutes: "15-20 минут",
    steps: []
  }
];

export const mentorMessages: MentorMessage[] = [
  {
    role: "mentor",
    intent: "mission_guidance",
    text: "Что в ответе AI звучит как факт, а что пока только выглядит уверенно?"
  },
  {
    role: "operator",
    text: "Он назвал точную дату, но не дал источник."
  },
  {
    role: "mentor",
    intent: "reflection_guidance",
    text: "Хорошо замечено. Какой один внешний источник ты выберешь для проверки?"
  }
];

export const mentorScenarios: MentorScenario[] = [
  {
    intent: "mission_guidance",
    label: "Подсказка по миссии",
    trigger: "Я не понимаю, что проверять.",
    response: "Посмотри на самый уверенный фрагмент ответа. Где там нужен источник?"
  },
  {
    intent: "reflection_guidance",
    label: "Рефлексия",
    trigger: "Скажи, что написать в выводе.",
    response: "Я не напишу вывод за тебя. Какая мысль у тебя уже появилась после проверки?"
  },
  {
    intent: "homework_boundary",
    label: "Граница домашнего задания",
    trigger: "Реши это задание за меня.",
    response: "Я не могу сделать школьное задание вместо тебя. Какую часть условия нужно разобрать сначала?"
  },
  {
    intent: "out_of_context_redirect",
    label: "Возврат в контекст",
    trigger: "Давай поговорим о другой теме.",
    response: "Это не часть текущей миссии. Какой следующий шаг проверки у нас сейчас?"
  },
  {
    intent: "safety_fallback",
    label: "Тревожная тема",
    trigger: "Мне небезопасно.",
    response: "Это слишком важно для обычной миссии. Поговори сейчас с ответственным взрослым рядом."
  }
];

export const weeklySummary = {
  completedMissions: 2,
  mainInsight: "Оператор начал отделять уверенность AI от доказательств.",
  metricGrowth: "Проверка фактов выросла с 2 до 3.",
  parentPrompt: "Спроси ребёнка: какой ответ AI на этой неделе он решил проверить сам?"
};

export const adminTasks: AdminTask[] = [
  {
    id: "T-101",
    priority: "High",
    area: "Legal",
    status: "Todo",
    task: "Отправить документы адвокату и записать ответы."
  },
  {
    id: "T-102",
    priority: "High",
    area: "AI Mentor",
    status: "Todo",
    task: "Собрать тесты плохих запросов: homework, safety, manipulation, out-of-context."
  },
  {
    id: "T-103",
    priority: "High",
    area: "Course",
    status: "Todo",
    task: "Написать миссии 3-7 на иврите перед payment testing."
  },
  {
    id: "T-104",
    priority: "Medium",
    area: "UX",
    status: "Doing",
    task: "Перенести HUD-прототип в React без личных данных."
  }
];

export const safetyAlerts: SafetyAlert[] = [
  {
    id: "A-102",
    operatorId: operatorProfile.id,
    severity: "low",
    category: "Homework boundary",
    summary: "Оператор попросил готовый ответ. Наставник должен отказать и помочь понять задачу.",
    status: "reviewing"
  },
  {
    id: "A-103",
    operatorId: operatorProfile.id,
    severity: "info",
    category: "Out of context",
    summary: "Наставник вернул оператора к текущей миссии.",
    status: "resolved"
  },
  {
    id: "A-104",
    operatorId: operatorProfile.id,
    severity: "high",
    category: "Sensitive topic",
    summary: "Тестовый сценарий для проверки safety fallback перед запуском с детьми.",
    status: "open"
  }
];

export const operators = [operatorProfile];
