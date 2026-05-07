import type { Metadata } from "next";
import { AdminShell } from "../../_components/AdminShell";
import { getActiveEnrollment, getCourseById } from "../../lib/courses";
import { missions, operators, safetyAlerts } from "../../lib/mockData";

export const metadata: Metadata = {
  title: "Admin Operators | MindPilot",
  description: "Список операторов и диагностических профилей в админке MindPilot."
};

export default function AdminOperatorsPage() {
  const activeMission = missions.find((mission) => mission.status === "active");

  return (
    <AdminShell
      eyebrow="Operators CRM"
      title="Операторы и карта подхода"
      description="Админ видит возраст, курс, миссию, MindScan, родительский взгляд, метрики, риски и safety history."
    >
      <section className="adminPanel">
        <div className="adminPanelHeader">
          <div>
            <span>Operator list</span>
            <strong>Фильтры скоро: возраст, язык, курс, риск, активность</strong>
          </div>
          <a href="/admin/parents">Parents</a>
        </div>
        <div className="operatorRows adminOperatorRows">
          {operators.map((operator) => {
            const enrollment = getActiveEnrollment(operator.id);
            const course = enrollment ? getCourseById(enrollment.courseId) : undefined;

            return (
              <a href={`/admin/operators/${operator.id}`} key={operator.id}>
                <span>
                  {operator.age} лет · {operator.ageBranch} · {operator.rank}
                </span>
                <strong>{operator.displayName}</strong>
                <p>{operator.adminProfile.headline}</p>
                <em>Курс: {course?.title ?? "не назначен"}</em>
                <em>Текущая миссия: {activeMission?.title ?? "нет активной миссии"}</em>
                <small>Safety events: {safetyAlerts.length}</small>
              </a>
            );
          })}
        </div>
      </section>
    </AdminShell>
  );
}
