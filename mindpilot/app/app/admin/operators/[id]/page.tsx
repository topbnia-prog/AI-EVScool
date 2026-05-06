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
  description: "Карточка оператора в админке MindPilot."
};

export default function AdminOperatorDetailPage() {
  const activeMission = missions.find((mission) => mission.status === "active");

  return (
    <main className="appPage">
      <nav className="appNav">
        <a href="/admin/operators" className="brand">
          Operator Detail
        </a>
        <div>
          <a href="/admin/operators">Operators</a>
          <a href="/admin/safety">Safety</a>
          <a href="/admin/tasks">Tasks</a>
        </div>
      </nav>

      <section className="adminHeader">
        <p className="eyebrow">Admin operator card</p>
        <h1>{operatorProfile.displayName}</h1>
        <p>
          Эта карточка показывает профиль, метрики, safety-события и админские
          заметки. Позже здесь появятся summaries последних сессий.
        </p>
      </section>

      <section className="dashboardSplit">
        <div className="flowPanel">
          <h2>Профиль</h2>
          <div className="profileRows">
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
        </div>

        <div className="flowPanel">
          <h2>Session summary</h2>
          <p className="summaryText">{weeklySummary.mainInsight}</p>
          <div className="softNotice">{weeklySummary.parentPrompt}</div>
        </div>
      </section>

      <section className="dashboardSplit">
        <div className="flowPanel">
          <h2>Метрики</h2>
          <div className="metricTiles">
            {operatorProfile.metrics.map((metric) => (
              <div key={metric.id}>
                <span>{metric.label}</span>
                <strong>{metric.value}/5</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="flowPanel">
          <h2>Safety events</h2>
          <div className="alertRows">
            {safetyAlerts.map((alert) => (
              <div key={alert.id}>
                <span>{alert.id} · {alert.severity}</span>
                <strong>{alert.category}</strong>
                <p>{alert.summary}</p>
                <em>{alert.status}</em>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
