import type { Metadata } from "next";
import {
  operatorProfile,
  parentAccount,
  safetyAlerts,
  weeklySummary
} from "../../lib/mockData";

export const metadata: Metadata = {
  title: "Parent Dashboard | MindPilot",
  description: "Родительский dashboard MindPilot."
};

export default function ParentDashboardPage() {
  const openSafetyAlerts = safetyAlerts.filter((alert) => alert.status !== "resolved");

  return (
    <main className="appPage academyLitePage">
      <nav className="appNav lightNav">
        <a href="/" className="brand">
          MindPilot Parent
        </a>
        <div>
          <a href="/operator/login">Operator Login</a>
          <a href="/parent-consent">Consent</a>
          <a href="/privacy">Privacy</a>
        </div>
      </nav>

      <section className="adminHeader lightHeader">
        <p className="academyKicker">Parent dashboard</p>
        <h1>Прогресс без лишнего контроля.</h1>
        <p>
          Родитель видит направление роста, недельные summaries, статус согласия и safety-сигналы.
          Полный чат ребёнка не показывается по умолчанию: мы защищаем самостоятельность и доверие.
        </p>
      </section>

      <section className="dashboardSplit">
        <div className="flowPanel lightPanel">
          <h2>Профиль оператора</h2>
          <div className="profileRows">
            <div>
              <span>Псевдоним</span>
              <strong>{operatorProfile.displayName}</strong>
            </div>
            <div>
              <span>Возрастная ветка</span>
              <strong>{operatorProfile.ageBranch}</strong>
            </div>
            <div>
              <span>Ранг</span>
              <strong>{operatorProfile.rank}</strong>
            </div>
            <div>
              <span>Consent</span>
              <strong>{parentAccount.consentStatus}</strong>
            </div>
            <div>
              <span>Billing</span>
              <strong>{parentAccount.billingStatus}</strong>
            </div>
          </div>
        </div>

        <div className="flowPanel lightPanel">
          <h2>Что мы поняли о ребёнке</h2>
          <p className="summaryText">{operatorProfile.adminProfile.headline}</p>
          <div className="softNotice">{operatorProfile.parentInsight.supportNote}</div>
        </div>
      </section>

      <section className="dashboardSplit">
        <div className="flowPanel lightPanel">
          <h2>Weekly summary</h2>
          <p className="summaryText">{weeklySummary.mainInsight}</p>
          <div className="profileRows">
            <div>
              <span>Миссий завершено</span>
              <strong>{weeklySummary.completedMissions}</strong>
            </div>
            <div>
              <span>Рост</span>
              <strong>{weeklySummary.metricGrowth}</strong>
            </div>
          </div>
          <div className="softNotice">{weeklySummary.parentPrompt}</div>
        </div>

        <div className="flowPanel lightPanel">
          <h2>Safety</h2>
          <div className="alertRows">
            {openSafetyAlerts.map((alert) => (
              <div key={alert.id}>
                <span>{alert.severity}</span>
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
