import type { Metadata } from "next";
import { MentorPhone } from "../../_components/OperatorPhone";
import { mentorScenarios } from "../../lib/mockData";

export const metadata: Metadata = {
  title: "AI-наставник | MindPilot",
  description: "Экран AI-наставника MindPilot."
};

export default function OperatorMentorPage() {
  return (
    <main className="operatorScreenPage">
      <nav className="systemNav">
        <a href="/operator/dashboard" className="brand">
          MindPilot
        </a>
        <div>
          <a href="/operator/dashboard">База</a>
          <a href="/operator/mission/2">Миссия</a>
          <a href="/operator/profile">Профиль</a>
        </div>
      </nav>

      <section className="operatorScreenShell">
        <div className="screenSideCopy">
          <p className="eyebrow">AI mentor</p>
          <h1>Наставник не даёт готовые ответы.</h1>
          <p>
            Он задаёт вопросы, удерживает контекст миссии, отказывает в списывании
            и останавливает поток при safety-темах.
          </p>
          <div className="guardrailGrid">
            {mentorScenarios.map((scenario) => (
              <div key={scenario.intent}>
                <span>{scenario.label}</span>
                <strong>{scenario.trigger}</strong>
                <p>{scenario.response}</p>
              </div>
            ))}
          </div>
        </div>
        <MentorPhone />
      </section>
    </main>
  );
}
