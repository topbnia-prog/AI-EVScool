import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operator Dashboard | MindPilot",
  description: "Локальный dashboard оператора MindPilot."
};

const metrics = [
  ["Понимание AI", "3"],
  ["Критическое мышление", "2"],
  ["Проверка фактов", "3"],
  ["Самостоятельность", "4"]
];

const missions = [
  ["01", "AI не магия", "Завершена"],
  ["02", "Поймай уверенную ошибку", "Активна"],
  ["03", "Собери команду", "Закрыта"]
];

export default function OperatorDashboardPage() {
  return (
    <main className="appPage">
      <nav className="appNav">
        <a href="/" className="brand">
          MindPilot
        </a>
        <div>
          <a href="/operator/mission/1">Миссия</a>
          <a href="/admin/safety">Safety</a>
        </div>
      </nav>

      <section className="operatorGrid">
        <div className="operatorHero">
          <p className="eyebrow">Operator cockpit</p>
          <h1>Профиль оператора</h1>
          <p>
            Сегодня цель простая: не получить ответ от AI, а проверить систему
            и принять решение самому.
          </p>
          <a className="wideButton" href="/operator/mission/1">
            Продолжить миссию
          </a>
        </div>

        <aside className="statusStack">
          <div className="miniPanel">
            <span>Streak</span>
            <strong>4 дня</strong>
          </div>
          <div className="miniPanel">
            <span>Ранг</span>
            <strong>Навигатор</strong>
          </div>
          <div className="miniPanel">
            <span>Сегодня</span>
            <strong>1 / 2 миссии</strong>
          </div>
        </aside>
      </section>

      <section className="dashboardSplit">
        <div className="flowPanel">
          <h2>Метрики роста</h2>
          <div className="metricTiles">
            {metrics.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}/5</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="flowPanel">
          <h2>Путь миссий</h2>
          <div className="missionRows">
            {missions.map(([id, title, status]) => (
              <a href="/operator/mission/1" key={id}>
                <span>Миссия {id}</span>
                <strong>{title}</strong>
                <em>{status}</em>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
