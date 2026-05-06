import type { Metadata } from "next";
import { missions, operatorProfile } from "../../lib/mockData";

export const metadata: Metadata = {
  title: "Operator Dashboard | MindPilot",
  description: "Локальный dashboard оператора MindPilot."
};

export default function OperatorDashboardPage() {
  const activeMission = missions.find((mission) => mission.status === "active") ?? missions[0];

  return (
    <main className="appPage">
      <nav className="appNav">
        <a href="/" className="brand">
          MindPilot
        </a>
        <div>
          <a href="/operator/mindscan">MindScan</a>
          <a href={`/operator/mission/${activeMission.id}`}>Миссия</a>
          <a href="/admin/safety">Safety</a>
        </div>
      </nav>

      <section className="operatorGrid">
        <div className="operatorHero">
          <p className="eyebrow">Operator cockpit</p>
          <h1>{operatorProfile.displayName}</h1>
          <p>
            Сегодня цель простая: не получить ответ от AI, а проверить систему
            и принять решение самому.
          </p>
          <a className="wideButton" href={`/operator/mission/${activeMission.id}`}>
            Продолжить миссию
          </a>
        </div>

        <aside className="statusStack">
          <div className="miniPanel">
            <span>Streak</span>
            <strong>{operatorProfile.streakCurrent} дня</strong>
          </div>
          <div className="miniPanel">
            <span>Ранг</span>
            <strong>{operatorProfile.rank}</strong>
          </div>
          <div className="miniPanel">
            <span>Сегодня</span>
            <strong>
              {operatorProfile.missionsCompletedToday} / {operatorProfile.dailyMissionLimit} миссии
            </strong>
          </div>
        </aside>
      </section>

      <section className="dashboardSplit">
        <div className="flowPanel">
          <h2>Метрики роста</h2>
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
          <h2>Путь миссий</h2>
          <div className="missionRows">
            {missions.map((mission) => (
              <a href={`/operator/mission/${mission.id}`} key={mission.id}>
                <span>Миссия {String(mission.number).padStart(2, "0")}</span>
                <strong>{mission.title}</strong>
                <em>{mission.status}</em>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
