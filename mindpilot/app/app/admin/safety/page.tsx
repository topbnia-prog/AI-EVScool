import type { Metadata } from "next";
import { safetyAlerts } from "../../lib/mockData";

export const metadata: Metadata = {
  title: "Admin Safety | MindPilot",
  description: "Админская safety-панель MindPilot."
};

export default function AdminSafetyPage() {
  return (
    <main className="appPage">
      <nav className="appNav">
        <a href="/" className="brand">
          MindPilot Admin
        </a>
        <div>
          <a href="/admin/tasks">Tasks</a>
          <a href="/admin/operators">Operators</a>
          <a href="/operator/dashboard">Operator</a>
        </div>
      </nav>

      <section className="adminHeader">
        <p className="eyebrow">Safety controls</p>
        <h1>Очередь безопасности</h1>
        <p>
          Перед реальным запуском с детьми здесь должны жить safety-alerts,
          QA-события наставника и ручные решения админа.
        </p>
      </section>

      <section className="adminGrid">
        <div className="flowPanel">
          <h2>Сигналы</h2>
          <div className="alertRows">
            {safetyAlerts.map((alert) => (
              <div key={alert.id}>
                <span>{alert.id} · {alert.severity}</span>
                <strong>{alert.category}</strong>
                <p>{alert.summary}</p>
                <em>{alert.status}</em>
              </div>
            ))}
          </div>
        </div>

        <aside className="flowPanel">
          <h2>Guardrails до запуска</h2>
          <ul className="adminChecks">
            <li>System prompt versioning</li>
            <li>Safety classifier before and after AI response</li>
            <li>90-day chat retention job</li>
            <li>Parent notification protocol</li>
            <li>Admin resolution notes</li>
          </ul>
        </aside>
      </section>
    </main>
  );
}
