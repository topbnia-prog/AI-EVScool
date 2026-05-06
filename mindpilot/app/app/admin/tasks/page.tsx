import type { Metadata } from "next";
import { adminTasks } from "../../lib/mockData";

export const metadata: Metadata = {
  title: "Admin Tasks | MindPilot",
  description: "Внутренние задачи MindPilot."
};

export default function AdminTasksPage() {
  return (
    <main className="appPage">
      <nav className="appNav">
        <a href="/admin/safety" className="brand">
          MindPilot Admin
        </a>
        <div>
          <a href="/admin/safety">Safety</a>
          <a href="/admin/operators">Operators</a>
          <a href="/">Site</a>
        </div>
      </nav>

      <section className="adminHeader">
        <p className="eyebrow">Internal task system</p>
        <h1>Задачи проекта</h1>
        <p>
          Позже это будет настоящая таблица `admin_tasks`. Сейчас это первый
          видимый каркас, чтобы ничего не терялось в переписке.
        </p>
      </section>

      <section className="flowPanel taskPagePanel">
        <div className="taskRows">
          {adminTasks.map((task) => (
            <div key={task.id}>
              <span>{task.priority} · {task.status}</span>
              <strong>{task.area}</strong>
              <p>{task.task}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
