import type { Metadata } from "next";
import { AdminShell } from "../../_components/AdminShell";
import { courses } from "../../lib/courses";

export const metadata: Metadata = {
  title: "Admin Courses | MindPilot",
  description: "Админский контроль курсов MindPilot."
};

export default function AdminCoursesPage() {
  return (
    <AdminShell
      eyebrow="Course operations"
      title="Курсы должны проходить QA до публикации"
      description="Админ видит источник курса, статус запуска, метрики, количество уроков, зависимость от предыдущей траектории и готовность к safety-review."
    >
      <section className="adminPanel">
        <div className="adminPanelHeader">
          <div>
            <span>Course registry</span>
            <strong>Каталог и готовность</strong>
          </div>
          <a href="/courses">Public catalog</a>
        </div>
        <div className="adminCourseRows">
          {courses.map((course) => (
            <article key={course.id}>
              <span>
                {course.status} · {course.sourceFolder}
              </span>
              <strong>{course.title}</strong>
              <p>{course.promise}</p>
              <div className="tagCloud">
                {course.metrics.map((metric) => (
                  <span key={metric}>{metric}</span>
                ))}
              </div>
              <div className="courseMetaGrid compact">
                <div>
                  <span>Уроков</span>
                  <strong>{course.lessons.length}</strong>
                </div>
                <div>
                  <span>Дней</span>
                  <strong>{course.durationDays}</strong>
                </div>
                <div>
                  <span>Зависимость</span>
                  <strong>{course.requiredCourseId ?? "нет"}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AdminShell>
  );
}
