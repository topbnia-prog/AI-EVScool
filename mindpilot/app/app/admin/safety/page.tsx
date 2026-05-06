import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Safety | MindPilot",
  description: "Админская safety-панель MindPilot."
};

const alerts = [
  ["A-102", "Homework boundary", "Нужна проверка refusal flow", "Low"],
  ["A-103", "Out of context", "Наставник вернул оператора к миссии", "Info"],
  ["A-104", "Sensitive topic", "Требует ручной проверки перед запуском", "High"]
];

export default function AdminSafetyPage() {
  return (
    <main className="appPage">
      <nav className="appNav">
        <a href="/" className="brand">
          MindPilot Admin
        </a>
        <div>
          <a href="/admin/tasks">Tasks</a>
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
            {alerts.map(([id, type, note, severity]) => (
              <div key={id}>
                <span>{id}</span>
                <strong>{type}</strong>
                <p>{note}</p>
                <em>{severity}</em>
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
