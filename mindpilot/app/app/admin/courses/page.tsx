import type { Metadata } from "next";
import { courses } from "../../lib/courses";

export const metadata: Metadata = {
  title: "Admin Courses | MindPilot",
  description: "Админский контроль курсов MindPilot."
};

export default function AdminCoursesPage() {
  return (
    <main className="appPage academyLitePage">
      <nav className="appNav lightNav">
        <a href="/admin/safety" className="brand">
          MindPilot Admin
        </a>
        <div>
          <a href="/admin/operators">Operators</a>
          <a href="/admin/tasks">Tasks</a>
          <a href="/courses">Catalog</a>
        </div>
      </nav>

      <section className="adminHeader lightHeader">
        <p className="academyKicker">Course operations</p>
        <h1>Админ видит не только уроки, а состояние курса.</h1>
        <p>
          Здесь фиксируется источник курса, статус запуска, метрики, количество уроков и зависимость
          от предыдущей траектории. Это место для будущих QA, переводов, safety-review и публикации
          новых курсов.
        </p>
      </section>

      <section className="flowPanel lightPanel taskPagePanel">
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
    </main>
  );
}
