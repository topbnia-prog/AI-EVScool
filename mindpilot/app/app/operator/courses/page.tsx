import type { Metadata } from "next";
import { courses, courseEnrollments, getActiveEnrollment, getCourseById } from "../../lib/courses";
import { operatorProfile } from "../../lib/mockData";

export const metadata: Metadata = {
  title: "Курсы оператора | MindPilot",
  description: "Личная траектория курсов оператора MindPilot."
};

export default function OperatorCoursesPage() {
  const activeEnrollment = getActiveEnrollment(operatorProfile.id);
  const activeCourse = activeEnrollment ? getCourseById(activeEnrollment.courseId) : courses[0];

  return (
    <main className="operatorScreenPage">
      <nav className="systemNav">
        <a href="/operator/dashboard" className="brand">
          MindPilot
        </a>
        <div>
          <a href="/operator/dashboard">База</a>
          <a href="/operator/mission/2">Миссия</a>
          <a href="/operator/profile">Профиль</a>
        </div>
      </nav>

      <section className="operatorScreenShell courseOperatorShell">
        <div className="screenSideCopy">
          <p className="eyebrow">Course map</p>
          <h1>Траектория оператора</h1>
          <p>
            Курсы открываются последовательно. Сейчас активна базовая AI-грамотность: ребёнок
            учится проверять AI, управлять запросами и не отдавать инструменту своё мышление.
          </p>
          <div className="profileRows">
            <div>
              <span>Активный курс</span>
              <strong>{activeCourse?.title}</strong>
            </div>
            <div>
              <span>Прогресс</span>
              <strong>
                {activeEnrollment?.completedLessons ?? 0} / {activeCourse?.lessons.length ?? 0}
              </strong>
            </div>
          </div>
        </div>

        <div className="operatorCoursePanel">
          {courseEnrollments.map((enrollment) => {
            const course = getCourseById(enrollment.courseId);

            if (!course) {
              return null;
            }

            return (
              <article className={`operatorCourseCard ${enrollment.status}`} key={course.id}>
                <div className="operatorCourseHeader">
                  <span>Курс {course.order}</span>
                  <strong>{course.title}</strong>
                  <p>{course.childPitch}</p>
                </div>
                <div className="courseProgressBar">
                  <i style={{ width: `${(enrollment.completedLessons / course.lessons.length) * 100}%` }} />
                </div>
                <div className="lessonPath">
                  {course.lessons.map((lesson) => (
                    <a
                      className={lesson.status}
                      href={lesson.status === "active" ? "/operator/mission/2" : "/operator/courses"}
                      key={lesson.id}
                    >
                      <span>{lesson.number}</span>
                      <strong>{lesson.title}</strong>
                      <small>{lesson.metricFocus}</small>
                    </a>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
