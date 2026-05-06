import {
  achievements,
  mentorMessages,
  missions,
  operatorProfile
} from "../lib/mockData";

type PhoneScreen = "dashboard" | "mission" | "mentor" | "profile";

const tabs = [
  { id: "dashboard", label: "База", href: "/operator/dashboard" },
  { id: "mission", label: "Миссии", href: "/operator/mission/2" },
  { id: "mentor", label: "Наставник", href: "/operator/mentor" },
  { id: "profile", label: "Профиль", href: "/operator/profile" }
] satisfies { id: PhoneScreen; label: string; href: string }[];

const achievementIcons: Record<string, string> = {
  brain: "AI",
  energy: "XP",
  rocket: "GO",
  search: "OK",
  shield: "SH",
  target: "01"
};

function PhoneFrame({
  screen,
  children
}: {
  screen: PhoneScreen;
  children: React.ReactNode;
}) {
  return (
    <div className="phoneFrame gamePhone">
      <div className="phoneTop">
        <div />
      </div>
      <div className="phoneContent">{children}</div>
      <nav className="phoneTabs" aria-label="Operator navigation">
        {tabs.map((tab) => (
          <a className={screen === tab.id ? "active" : ""} href={tab.href} key={tab.id}>
            <span />
            {tab.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

export function DashboardPhone() {
  return (
    <PhoneFrame screen="dashboard">
      <div className="phoneStatus">
        <span className="operatorBadge">{operatorProfile.rank}</span>
        <strong>{operatorProfile.streakCurrent * 68} XP</strong>
      </div>

      <section className="phoneBlock streakQuest">
        <h2>Серия дней</h2>
        <div className="streakGrid">
          {["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"].map((day, index) => (
            <div className={index < 5 ? "done" : ""} key={day}>
              <i />
              {day}
            </div>
          ))}
        </div>
      </section>

      <section className="phoneBlock">
        <h2>Карта миссий</h2>
        <div className="phoneMissionList">
          {missions.map((mission) => (
            <a className={mission.status} href={`/operator/mission/${mission.id}`} key={mission.id}>
              <span>Миссия {mission.number}</span>
              <strong>{mission.title}</strong>
              <p>{mission.concept}</p>
              <em>
                {mission.status === "completed"
                  ? "Пройдена"
                  : mission.status === "active"
                    ? "В процессе"
                    : "Заперта"}
              </em>
              <i />
            </a>
          ))}
        </div>
      </section>
    </PhoneFrame>
  );
}

export function MissionPhone() {
  const mission = missions[1];
  const step = mission.steps[0];

  return (
    <PhoneFrame screen="mission">
      <div className="missionProgress">
        {mission.steps.map((missionStep, index) => (
          <i className={index < 2 ? "done" : ""} key={missionStep.id} />
        ))}
      </div>

      <p className="phoneStepLabel">{step.label}</p>
      <h1 className="phoneTitle">{mission.title}</h1>
      <p className="phoneMentorLabel">AI-наставник</p>

      <div className="missionPrompt">
        {step.body.split(". ").map((line) => (
          <p key={line}>{line.trim()}</p>
        ))}
      </div>

      <a className="phonePrimary" href="/operator/mentor">
        Я готов - дальше
      </a>
    </PhoneFrame>
  );
}

export function MentorPhone() {
  return (
    <PhoneFrame screen="mentor">
      <p className="phoneStepLabel">Миссия 2 · шаг 3 из 6</p>
      <div className="phoneChat">
        {mentorMessages.map((message, index) => (
          <div className={`phoneBubble ${message.role}`} key={`${message.role}-${index}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="phoneComposer">
        <span>Напиши наставнику...</span>
        <button type="button">→</button>
      </div>
    </PhoneFrame>
  );
}

export function ProfilePhone() {
  const points = operatorProfile.metrics
    .map((metric, index) => {
      const angle = (Math.PI * 2 * index) / operatorProfile.metrics.length - Math.PI / 2;
      const radius = 28 + metric.value * 7;
      const x = 50 + Math.cos(angle) * radius;
      const y = 50 + Math.sin(angle) * radius;
      return `${x},${y}`;
    })
    .join(" ");

  const previousPoints = operatorProfile.metrics
    .map((metric, index) => {
      const angle = (Math.PI * 2 * index) / operatorProfile.metrics.length - Math.PI / 2;
      const radius = 22 + metric.previous * 7;
      const x = 50 + Math.cos(angle) * radius;
      const y = 50 + Math.sin(angle) * radius;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <PhoneFrame screen="profile">
      <header className="profileHeader">
        <div className="avatar">OP</div>
        <div>
          <h1>{operatorProfile.displayName}</h1>
          <p>
            {operatorProfile.rank} · {operatorProfile.streakCurrent * 68} XP ·{" "}
            {operatorProfile.streakCurrent} дней
          </p>
        </div>
      </header>

      <section className="phoneBlock">
        <h2>Метрики оператора</h2>
        <div className="radarWrap">
          <svg viewBox="0 0 100 100" role="img" aria-label="Метрики оператора">
            <polygon className="radarGrid" points="50,8 86,29 86,71 50,92 14,71 14,29" />
            <polygon className="radarGrid soft" points="50,22 74,36 74,64 50,78 26,64 26,36" />
            <polygon className="radarPrevious" points={previousPoints} />
            <polygon className="radarCurrent" points={points} />
          </svg>
        </div>
      </section>

      <section className="phoneBlock">
        <h2>Достижения</h2>
        <div className="achievementGrid">
          {achievements.map((achievement) => (
            <div className={achievement.unlocked ? "unlocked" : ""} key={achievement.id}>
              <span>{achievementIcons[achievement.icon] ?? "XP"}</span>
              <strong>{achievement.title}</strong>
            </div>
          ))}
        </div>
      </section>
    </PhoneFrame>
  );
}
