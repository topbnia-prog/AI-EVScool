import type { Metadata } from "next";
import { AdminShell } from "../_components/AdminShell";
import {
  adminAttentionItems,
  adminAuditLogs,
  adminKpis,
  adminSystemActions,
  adminTasks,
  safetyAlerts
} from "../lib/mockData";

export const metadata: Metadata = {
  title: "Admin Command Center | MindPilot",
  description: "Главный экран администратора MindPilot."
};

export default function AdminCommandCenterPage() {
  const openSafety = safetyAlerts.filter((alert) => alert.status !== "resolved");
  const urgentTasks = adminTasks.filter((task) => task.priority === "High");

  return (
    <AdminShell
      eyebrow="Command center"
      title="Что требует внимания сейчас"
      description="Первый экран админа собирает безопасность, курс, наставника, родителей и задачи в одну рабочую очередь."
    >
      <section className="adminKpiGrid">
        {adminKpis.map((kpi) => (
          <article className={`adminKpiCard ${kpi.tone}`} key={kpi.label}>
            <span>{kpi.label}</span>
            <strong>{kpi.value}</strong>
            <p>{kpi.trend}</p>
          </article>
        ))}
      </section>

      <section className="adminCommandGrid">
        <article className="adminPanel adminWidePanel">
          <div className="adminPanelHeader">
            <div>
              <span>System actions</span>
              <strong>Управление системой</strong>
            </div>
            <a href="/admin/users">Users</a>
          </div>
          <div className="adminActionGrid">
            {adminSystemActions.map((action) => (
              <a className={action.tone} href={action.href} key={action.id}>
                <span>{action.id}</span>
                <strong>{action.title}</strong>
                <p>{action.description}</p>
              </a>
            ))}
          </div>
        </article>

        <article className="adminPanel adminWidePanel">
          <div className="adminPanelHeader">
            <div>
              <span>Attention queue</span>
              <strong>Приоритеты дня</strong>
            </div>
            <a href="/admin/tasks">Все задачи</a>
          </div>
          <div className="adminAttentionRows">
            {adminAttentionItems.map((item) => (
              <a href={item.href} key={item.id}>
                <span>
                  {item.priority} · {item.area} · {item.owner}
                </span>
                <strong>{item.title}</strong>
                <p>{item.detail}</p>
              </a>
            ))}
          </div>
        </article>

        <article className="adminPanel">
          <div className="adminPanelHeader">
            <div>
              <span>Safety</span>
              <strong>Открытые события</strong>
            </div>
            <a href="/admin/safety">{openSafety.length}</a>
          </div>
          <div className="adminMiniRows">
            {openSafety.map((alert) => (
              <a href="/admin/safety" key={alert.id}>
                <span>{alert.severity}</span>
                <strong>{alert.category}</strong>
                <p>{alert.summary}</p>
              </a>
            ))}
          </div>
        </article>

        <article className="adminPanel">
          <div className="adminPanelHeader">
            <div>
              <span>Operations</span>
              <strong>Срочные задачи</strong>
            </div>
            <a href="/admin/tasks">{urgentTasks.length}</a>
          </div>
          <div className="adminMiniRows">
            {urgentTasks.map((task) => (
              <a href="/admin/tasks" key={task.id}>
                <span>
                  {task.id} · {task.status}
                </span>
                <strong>{task.area}</strong>
                <p>{task.task}</p>
              </a>
            ))}
          </div>
        </article>

        <article className="adminPanel adminWidePanel">
          <div className="adminPanelHeader">
            <div>
              <span>Audit log</span>
              <strong>Последние действия</strong>
            </div>
            <a href="/admin/settings">Policy</a>
          </div>
          <div className="adminAuditRows">
            {adminAuditLogs.map((log) => (
              <div key={log.id}>
                <span>
                  {log.time} · {log.actor} · {log.severity}
                </span>
                <strong>{log.action}</strong>
                <p>{log.target}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </AdminShell>
  );
}
