import type { Metadata } from "next";
import { mentorMessages, mentorScenarios, missions } from "../../../lib/mockData";

export const metadata: Metadata = {
  title: "Миссия оператора | MindPilot",
  description: "Экран прохождения миссии с AI-наставником."
};

export default function MissionPage() {
  const mission = missions.find((item) => item.status === "active") ?? missions[0];
  const activeStep = mission.steps.find((step) => step.id === "challenge") ?? mission.steps[0];

  return (
    <main className="appPage">
      <nav className="appNav">
        <a href="/operator/dashboard" className="brand">
          MindPilot
        </a>
        <div>
          <a href="/operator/dashboard">Dashboard</a>
          <a href="/parent/dashboard">Parent</a>
          <a href="/admin/safety">Safety</a>
        </div>
      </nav>

      <section className="missionLayout">
        <article className="missionMain">
          <p className="eyebrow">Миссия {String(mission.number).padStart(2, "0")}</p>
          <h1>{mission.title}</h1>
          <p>{mission.concept}</p>

          <div className="stepRail">
            {mission.steps.map((step) => (
              <span className={step.id === activeStep.id ? "active" : ""} key={step.id}>
                {step.label}
              </span>
            ))}
          </div>

          <div className="challengeBox">
            <h2>{activeStep.title}</h2>
            <p>{activeStep.body}</p>
            <textarea placeholder="Мой вывод: AI ответил уверенно, но я проверил..." />
            <a className="wideButton" href="/operator/dashboard">
              Сохранить рефлексию
            </a>
          </div>

          <div className="guardrailGrid">
            {mentorScenarios.map((scenario) => (
              <div key={scenario.intent}>
                <span>{scenario.label}</span>
                <strong>{scenario.trigger}</strong>
                <p>{scenario.response}</p>
              </div>
            ))}
          </div>
        </article>

        <aside className="mentorPanel">
          <div className="mentorHeader">
            <span>AI-наставник</span>
            <strong>Только вопросы</strong>
          </div>
          {mentorMessages.map((message, index) => (
            <div className={`chatBubble ${message.role}`} key={`${message.role}-${index}`}>
              {message.text}
            </div>
          ))}
          <div className="mentorInput">Ответ оператора будет здесь...</div>
        </aside>
      </section>
    </main>
  );
}
