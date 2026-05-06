import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Миссия оператора | MindPilot",
  description: "Экран прохождения миссии с AI-наставником."
};

const steps = ["Зацеп", "Концепт", "Визуал", "Испытание", "Симуляция", "Рефлексия"];

export default function MissionPage() {
  return (
    <main className="appPage">
      <nav className="appNav">
        <a href="/operator/dashboard" className="brand">
          MindPilot
        </a>
        <div>
          <a href="/operator/dashboard">Dashboard</a>
          <a href="/parent/signup">Parent</a>
        </div>
      </nav>

      <section className="missionLayout">
        <article className="missionMain">
          <p className="eyebrow">Миссия 02</p>
          <h1>Поймай уверенную ошибку</h1>
          <p>
            AI может звучать уверенно даже тогда, когда ошибается. Оператор не
            спорит с уверенностью. Оператор проверяет.
          </p>

          <div className="stepRail">
            {steps.map((step, index) => (
              <span className={index === 3 ? "active" : ""} key={step}>
                {step}
              </span>
            ))}
          </div>

          <div className="challengeBox">
            <h2>Испытание</h2>
            <p>
              Спроси AI о факте, который мог измениться недавно. Затем найди
              внешний источник и запиши, что именно требует проверки.
            </p>
            <textarea placeholder="Мой вывод: AI ответил уверенно, но я проверил..." />
            <a className="wideButton" href="/operator/dashboard">
              Сохранить рефлексию
            </a>
          </div>
        </article>

        <aside className="mentorPanel">
          <div className="mentorHeader">
            <span>AI-наставник</span>
            <strong>Только вопросы</strong>
          </div>
          <div className="chatBubble mentor">
            Что в ответе AI звучит как факт, а что пока только выглядит
            уверенно?
          </div>
          <div className="chatBubble operator">
            Он назвал точную дату, но не дал источник.
          </div>
          <div className="chatBubble mentor">
            Хорошо замечено. Какой один внешний источник ты выберешь для
            проверки?
          </div>
          <div className="mentorInput">Ответ оператора будет здесь...</div>
        </aside>
      </section>
    </main>
  );
}
