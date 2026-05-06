import type { Metadata } from "next";
import { ProfilePhone } from "../../_components/OperatorPhone";
import { achievements, operatorProfile } from "../../lib/mockData";

export const metadata: Metadata = {
  title: "Профиль оператора | MindPilot",
  description: "Профиль оператора с метриками и достижениями."
};

export default function OperatorProfilePage() {
  const unlocked = achievements.filter((achievement) => achievement.unlocked).length;

  return (
    <main className="operatorScreenPage">
      <nav className="systemNav">
        <a href="/operator/dashboard" className="brand">
          MindPilot
        </a>
        <div>
          <a href="/operator/dashboard">База</a>
          <a href="/operator/mission/2">Миссия</a>
          <a href="/operator/mentor">Наставник</a>
        </div>
      </nav>

      <section className="operatorScreenShell">
        <div className="screenSideCopy">
          <p className="eyebrow">Pilot profile</p>
          <h1>Профиль показывает рост, а не оценки.</h1>
          <p>
            Метрики сравнивают оператора с самим собой месяц назад. Достижения
            создают цель, но без публичного соревнования.
          </p>
          <div className="profileRows">
            <div>
              <span>Ранг</span>
              <strong>{operatorProfile.rank}</strong>
            </div>
            <div>
              <span>Достижения</span>
              <strong>{unlocked} / {achievements.length}</strong>
            </div>
            <div>
              <span>Лучшая серия</span>
              <strong>{operatorProfile.streakBest} дней</strong>
            </div>
          </div>
        </div>
        <ProfilePhone />
      </section>
    </main>
  );
}
