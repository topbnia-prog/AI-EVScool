import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Tasks | MindPilot",
  description: "Внутренние задачи MindPilot."
};

const tasks = [
  ["High", "Legal", "Проверить документы с адвокатом"],
  ["High", "AI Mentor", "Собрать тесты плохих запросов"],
  ["High", "Course", "Написать миссии 3-7 на иврите"],
  ["Medium", "UX", "Перенести prototype HUD в React без личных данных"]
];

export default function AdminTasksPage() {
  return (
    <main className="appPage">
      <nav className="appNav">
        <a href="/admin/safety" className="brand">
          MindPilot Admin
        </a>
        <div>
          <a href="/admin/safety">Safety</a>
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

      <section className="flowPanel">
        <div className="taskRows">
          {tasks.map(([priority, area, task]) => (
            <div key={task}>
              <span>{priority}</span>
              <strong>{area}</strong>
              <p>{task}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
