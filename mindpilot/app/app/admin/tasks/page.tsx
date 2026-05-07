import type { Metadata } from "next";
import { AdminShell } from "../../_components/AdminShell";
import { adminTasks } from "../../lib/mockData";

export const metadata: Metadata = {
  title: "Admin Tasks | MindPilot",
  description: "Внутренние задачи MindPilot."
};

export default function AdminTasksPage() {
  return (
    <AdminShell
      eyebrow="Internal task system"
      title="Задачи проекта"
      description="Задачи держат юридические вопросы, методологию, safety, AI-наставника, курсы и UX в одном месте."
    >
      <section className="adminPanel">
        <div className="adminPanelHeader">
          <div>
            <span>Task queue</span>
            <strong>Что нужно не забыть</strong>
          </div>
          <a href="/admin">Command</a>
        </div>
        <div className="taskRows">
          {adminTasks.map((task) => (
            <div key={task.id}>
              <span>
                {task.id} · {task.priority} · {task.status}
              </span>
              <strong>{task.area}</strong>
              <p>{task.task}</p>
            </div>
          ))}
        </div>
      </section>
    </AdminShell>
  );
}
