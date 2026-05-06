import type { Metadata } from "next";
import { missions, operators, safetyAlerts } from "../../lib/mockData";

export const metadata: Metadata = {
  title: "Admin Operators | MindPilot",
  description: "Список операторов в админке MindPilot."
};

export default function AdminOperatorsPage() {
  const activeMission = missions.find((mission) => mission.status === "active");

  return (
    <main className="appPage">
      <nav className="appNav">
        <a href="/admin/safety" className="brand">
          MindPilot Admin
        </a>
        <div>
          <a href="/admin/safety">Safety</a>
          <a href="/admin/tasks">Tasks</a>
          <a href="/parent/dashboard">Parent</a>
        </div>
      </nav>

      <section className="adminHeader">
        <p className="eyebrow">Operators</p>
        <h1>Операторы</h1>
        <p>
          Здесь админ видит прогресс, текущую миссию, safety-сигналы и статус
          подписки без публичных рейтингов.
        </p>
      </section>

      <section className="flowPanel taskPagePanel">
        <div className="operatorRows">
          {operators.map((operator) => (
            <a href={`/admin/operators/${operator.id}`} key={operator.id}>
              <span>{operator.age} лет · {operator.ageBranch}</span>
              <strong>{operator.displayName}</strong>
              <p>Текущая миссия: {activeMission?.title ?? "нет активной миссии"}</p>
              <em>Safety events: {safetyAlerts.length}</em>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
