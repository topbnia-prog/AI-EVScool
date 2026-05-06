import type { Metadata } from "next";
import { operatorProfile } from "../../lib/mockData";

export const metadata: Metadata = {
  title: "MindScan | MindPilot",
  description: "Первичная диагностика оператора MindPilot."
};

const interests = ["Игры", "Видео", "Код", "Спорт", "Дизайн", "Наука"];

export default function MindScanPage() {
  return (
    <main className="appPage">
      <nav className="appNav">
        <a href="/operator/dashboard" className="brand">
          MindPilot
        </a>
        <div>
          <a href="/operator/dashboard">Dashboard</a>
          <a href="/parent/dashboard">Parent</a>
        </div>
      </nav>

      <section className="flowHero">
        <p className="eyebrow">MindScan</p>
        <h1>Настроим маршрут оператора.</h1>
        <p>
          MindScan нужен не для оценки ребёнка. Он помогает подобрать язык,
          примеры и уровень открытости заданий.
        </p>
      </section>

      <section className="flowGrid">
        <form className="flowPanel">
          <label>
            Возрастная ветка
            <select defaultValue={operatorProfile.ageBranch}>
              <option value="junior">Junior 10-13</option>
              <option value="senior">Senior 14-16</option>
            </select>
          </label>
          <label>
            Опыт с AI
            <select defaultValue="sometimes">
              <option value="new">Почти не использовал</option>
              <option value="sometimes">Иногда использую</option>
              <option value="often">Использую часто</option>
            </select>
          </label>
          <label>
            Главная цель
            <input defaultValue={operatorProfile.learningGoal} />
          </label>
          <div className="choiceGrid">
            {interests.map((interest) => (
              <label className="choicePill" key={interest}>
                <input
                  defaultChecked={operatorProfile.interests.includes(interest.toLowerCase())}
                  type="checkbox"
                />
                <span>{interest}</span>
              </label>
            ))}
          </div>
          <a className="wideButton" href="/operator/dashboard">
            Сохранить MindScan
          </a>
        </form>

        <aside className="flowPanel">
          <h2>Что будет адаптироваться</h2>
          <div className="stepList">
            <div>
              <span>1</span>
              Примеры внутри миссий
            </div>
            <div>
              <span>2</span>
              Тон AI-наставника
            </div>
            <div>
              <span>3</span>
              Сложность испытаний
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
