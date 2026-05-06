import type { Metadata } from "next";
import { DashboardPhone } from "../../_components/OperatorPhone";
import { missions, operatorProfile } from "../../lib/mockData";

export const metadata: Metadata = {
  title: "Operator Dashboard | MindPilot",
  description: "Dashboard оператора MindPilot."
};

export default function OperatorDashboardPage() {
  const activeMission = missions.find((mission) => mission.status === "active") ?? missions[0];

  return (
    <main className="operatorScreenPage">
      <nav className="systemNav">
        <a href="/" className="brand">
          MindPilot
        </a>
        <div>
          <a href="/operator/mission/2">Миссия</a>
          <a href="/operator/mentor">Наставник</a>
          <a href="/operator/profile">Профиль</a>
        </div>
      </nav>

      <section className="operatorScreenShell">
        <div className="screenSideCopy">
          <p className="eyebrow">Operator cockpit</p>
          <h1>База оператора</h1>
          <p>
            Здесь ребёнок видит серию дней, XP, ранг и траекторию миссий.
            Главная задача: продолжить активную миссию без давления и рейтингов.
          </p>
          <a className="wideButton" href={`/operator/mission/${activeMission.id}`}>
            Продолжить: {activeMission.title}
          </a>
          <div className="profileRows">
            <div>
              <span>Оператор</span>
              <strong>{operatorProfile.displayName}</strong>
            </div>
            <div>
              <span>Дневной лимит</span>
              <strong>
                {operatorProfile.missionsCompletedToday} / {operatorProfile.dailyMissionLimit}
              </strong>
            </div>
          </div>
        </div>
        <DashboardPhone />
      </section>
    </main>
  );
}
