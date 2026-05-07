import type { Metadata } from "next";
import { MissionLab3D } from "../../../_components/MindPilot3D";
import { mentorScenarios, missions } from "../../../lib/mockData";

export const metadata: Metadata = {
  title: "Миссия оператора | MindPilot",
  description: "Экран прохождения миссии с AI-наставником."
};

export default function MissionPage() {
  const mission = missions.find((item) => item.status === "active") ?? missions[0];

  return (
    <main className="operatorScreenPage">
      <nav className="systemNav">
        <a href="/operator/dashboard" className="brand">
          MindPilot
        </a>
        <div>
          <a href="/operator/dashboard">База</a>
          <a href="/operator/mentor">Наставник</a>
          <a href="/operator/profile">Профиль</a>
        </div>
      </nav>

      <section className="operatorScreenShell">
        <div className="screenSideCopy">
          <p className="eyebrow">Mission runner</p>
          <h1>{mission.title}</h1>
          <p>
            Экран миссии держит 6 шагов: зацеп, контент, визуал, испытание,
            симуляция и рефлексия. Следующий шаг открывается только после ответа.
          </p>
          <div className="guardrailGrid">
            {mentorScenarios.slice(0, 3).map((scenario) => (
              <div key={scenario.intent}>
                <span>{scenario.label}</span>
                <strong>{scenario.trigger}</strong>
                <p>{scenario.response}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="liquidMissionLab">
          <MissionLab3D />
          <div className="liquidMissionSteps">
            {mission.steps.map((step, index) => (
              <div className={index < 2 ? "done" : index === 2 ? "active" : ""} key={step.id}>
                <span>{index + 1}</span>
                <strong>{step.label}</strong>
              </div>
            ))}
          </div>
          <a className="liquidPrimaryAction" href="/operator/mentor">
            Продолжить с наставником
          </a>
        </div>
      </section>
    </main>
  );
}
