import type { Metadata } from "next";
import { courses } from "../lib/courses";

export const metadata: Metadata = {
  title: "Курсы | MindPilot",
  description: "Каталог курсов MindPilot и порядок их прохождения."
};

export default function CoursesPage() {
  return (
    <main className="appPage academyLitePage">
      <nav className="appNav lightNav">
        <a href="/" className="brand">
          MindPilot Courses
        </a>
        <div>
          <a href="/login">Вход</a>
          <a href="/operator/courses">Для ребёнка</a>
          <a href="/admin/courses">Admin</a>
        </div>
      </nav>

      <section className="adminHeader lightHeader">
        <p className="academyKicker">Course system</p>
        <h1>Курсы встроены как траектория, а не как папка файлов.</h1>
        <p>
          Первый курс запускает базовую AI-грамотность на 30 дней. Следующие курсы добавляются в
          каталог и открываются по правилам прогресса: ребёнок видит только понятный следующий шаг,
          родитель видит смысл курса, админ видит готовность и источники.
        </p>
      </section>

      <section className="courseCatalog">
        {courses.map((course) => (
          <article className={`courseCard ${course.status}`} key={course.id}>
            <div>
              <span>Курс {course.order}</span>
              <strong>{course.title}</strong>
              <p>{course.subtitle}</p>
            </div>
            <div className="courseMetaGrid">
              <div>
                <span>Статус</span>
                <strong>{course.status}</strong>
              </div>
              <div>
                <span>Длительность</span>
                <strong>{course.durationDays} дней</strong>
              </div>
              <div>
                <span>Уроков в каталоге</span>
                <strong>{course.lessons.length}</strong>
              </div>
            </div>
            <div className="coursePromise">
              <p>{course.parentPitch}</p>
              <a href={course.status === "active" ? "/operator/courses" : "/register"}>
                {course.status === "active" ? "Открыть траекторию" : "Открыть после базы"}
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
