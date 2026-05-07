import type { Metadata } from "next";
import {
  missions,
  operatorProfile,
  parentAccount,
  safetyAlerts,
  weeklySummary
} from "../../../lib/mockData";

export const metadata: Metadata = {
  title: "Operator Detail | MindPilot Admin",
  description: "Полная карточка ребёнка-оператора в админке MindPilot."
};

export default function AdminOperatorDetailPage() {
  const activeMission = missions.find((mission) => mission.status === "active");

  return (
    <main className="appPage academyLitePage">
      <nav className="appNav lightNav">
        <a href="/admin/operators" className="brand">
          Operator Detail
        </a>
        <div>
          <a href="/admin/operators">Operators</a>
          <a href="/admin/safety">Safety</a>
          <a href="/admin/tasks">Tasks</a>
        </div>
      </nav>

      <section className="adminHeader lightHeader">
        <p className="academyKicker">Admin child profile</p>
        <h1>{operatorProfile.displayName}</h1>
        <p>
          Это рабочая “картина ребёнка” для админа: как начать первый урок, каким тоном общаться,
          что мотивирует, где возможны риски и какие данные пришли от родителя и MindScan.
        </p>
      </section>

      <section className="adminChildLayout">
        <article className="flowPanel lightPanel childPortraitCard">
          <span className="baseBadge">Карта подхода</span>
          <h2>{operatorProfile.adminProfile.headline}</h2>
          <p>{operatorProfile.adminProfile.approach}</p>
          <div className="portraitMeta">
            <div>
              <span>Возраст</span>
              <strong>{operatorProfile.age}</strong>
            </div>
            <div>
              <span>Ветка</span>
              <strong>{operatorProfile.ageBranch}</strong>
            </div>
            <div>
              <span>Миссия</span>
              <strong>{activeMission?.title}</strong>
            </div>
            <div>
              <span>Подписка</span>
              <strong>{parentAccount.billingStatus}</strong>
            </div>
          </div>
        </article>

        <article className="flowPanel lightPanel">
          <h2>Первый урок</h2>
          <div className="adminProfileList">
            {operatorProfile.adminProfile.firstSessionPlan.map((step, index) => (
              <div key={step}>
                <span>Шаг {index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="flowPanel lightPanel">
          <h2>Взгляд родителя</h2>
          <div className="adminProfileList">
            <div>
              <span>Как учится</span>
              <p>{operatorProfile.parentInsight.learningStyle}</p>
            </div>
            <div>
              <span>Что мотивирует</span>
              <p>{operatorProfile.parentInsight.motivation}</p>
            </div>
            <div>
              <span>Где осторожно</span>
              <p>{operatorProfile.parentInsight.frustrationSignal}</p>
            </div>
            <div>
              <span>Цель родителя</span>
              <p>{operatorProfile.parentInsight.parentGoal}</p>
            </div>
          </div>
        </article>

        <article className="flowPanel lightPanel">
          <h2>MindScan ребёнка</h2>
          <div className="adminProfileList">
            <div>
              <span>Опыт с AI</span>
              <p>{operatorProfile.mindScan.confidenceWithAi}</p>
            </div>
            <div>
              <span>Темп</span>
              <p>{operatorProfile.mindScan.preferredPace}</p>
            </div>
            <div>
              <span>Формат</span>
              <p>{operatorProfile.mindScan.challengeStyle}</p>
            </div>
            <div>
              <span>Тон</span>
              <p>{operatorProfile.mindScan.communicationStyle}</p>
            </div>
          </div>
        </article>

        <article className="flowPanel lightPanel">
          <h2>Мотиваторы и риски</h2>
          <div className="tagCloud">
            {operatorProfile.adminProfile.motivators.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="riskList">
            {operatorProfile.adminProfile.risks.map((risk) => (
              <p key={risk}>{risk}</p>
            ))}
          </div>
        </article>

        <article className="flowPanel lightPanel">
          <h2>Метрики и safety</h2>
          <div className="metricTiles">
            {operatorProfile.metrics.map((metric) => (
              <div key={metric.id}>
                <span>{metric.label}</span>
                <strong>{metric.value}/5</strong>
              </div>
            ))}
          </div>
          <div className="alertRows compactAlerts">
            {safetyAlerts.map((alert) => (
              <div key={alert.id}>
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
      </section>

      <section className="flowPanel lightPanel adminSessionNote">
        <h2>Последний summary</h2>
        <p>{weeklySummary.mainInsight}</p>
        <div className="softNotice">{weeklySummary.parentPrompt}</div>
      </section>
    </main>
  );
}
