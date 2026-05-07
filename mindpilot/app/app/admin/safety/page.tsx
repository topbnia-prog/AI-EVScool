import type { Metadata } from "next";
import { AdminShell } from "../../_components/AdminShell";
import { safetyAlerts } from "../../lib/mockData";

export const metadata: Metadata = {
  title: "Admin Safety | MindPilot",
  description: "Safety-панель MindPilot."
};

export default function AdminSafetyPage() {
  return (
    <AdminShell
      eyebrow="Safety center"
      title="Очередь безопасности"
      description="Safety Center хранит события, категории риска, следующий шаг админа, parent notification flag и будущие resolution notes."
    >
      <section className="adminCommandGrid">
        <article className="adminPanel adminWidePanel">
          <div className="adminPanelHeader">
            <div>
              <span>Safety queue</span>
              <strong>Сигналы</strong>
            </div>
            <a href="/admin/mentor">Mentor tests</a>
          </div>
          <div className="alertRows adminSafetyRows">
            {safetyAlerts.map((alert) => (
              <div className={alert.severity} key={alert.id}>
                <span>
                  {alert.id} · {alert.severity}
                </span>
                <strong>{alert.category}</strong>
                <p>{alert.summary}</p>
                <em>{alert.status}</em>
              </div>
            ))}
          </div>
        </article>

        <aside className="adminPanel">
          <div className="adminPanelHeader">
            <div>
              <span>Guardrails</span>
              <strong>До запуска с детьми</strong>
            </div>
          </div>
          <ul className="adminChecks">
            <li>System prompt versioning</li>
            <li>Safety classifier before and after AI response</li>
            <li>90-day chat retention job</li>
            <li>Parent notification protocol</li>
            <li>Admin resolution notes</li>
          </ul>
        </aside>
      </section>
    </AdminShell>
  );
}
