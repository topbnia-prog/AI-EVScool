import type { Metadata } from "next";
import { missions, operators, safetyAlerts } from "../../lib/mockData";

export const metadata: Metadata = {
  title: "Admin Operators | MindPilot",
  description: "Список операторов и диагностических профилей в админке MindPilot."
};

export default function AdminOperatorsPage() {
  const activeMission = missions.find((mission) => mission.status === "active");

  return (
    <main className="appPage academyLitePage">
      <nav className="appNav lightNav">
        <a href="/admin/safety" className="brand">
          MindPilot Admin
        </a>
        <div>
          <a href="/admin/safety">Safety</a>
          <a href="/admin/tasks">Tasks</a>
          <a href="/parent/dashboard">Parent</a>
        </div>
      </nav>

      <section className="adminHeader lightHeader">
        <p className="academyKicker">Operators</p>
        <h1>Операторы и карта подхода</h1>
        <p>
          Здесь админ видит не только возраст и прогресс, а рабочую картину ребёнка: мотивацию,
          риски, стиль общения, текущую миссию и safety-события. Это нужно до первого урока и
          перед каждым ручным вмешательством.
        </p>
      </section>

      <section className="flowPanel lightPanel taskPagePanel">
        <div className="operatorRows adminOperatorRows">
          {operators.map((operator) => (
            <a href={`/admin/operators/${operator.id}`} key={operator.id}>
              <span>
                {operator.age} лет · {operator.ageBranch} · {operator.rank}
              </span>
              <strong>{operator.displayName}</strong>
              <p>{operator.adminProfile.headline}</p>
              <em>Текущая миссия: {activeMission?.title ?? "нет активной миссии"}</em>
              <small>Safety events: {safetyAlerts.length}</small>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
