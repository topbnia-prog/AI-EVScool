import type { CSSProperties } from "react";
import { DashboardPhone, MentorPhone, MissionPhone, ProfilePhone } from "./_components/OperatorPhone";

const questCards = [
  {
    title: "Поймай ошибку AI",
    text: "Ребёнок учится замечать уверенные, но неверные ответы.",
    tag: "Проверка"
  },
  {
    title: "Собери сильный промпт",
    text: "Промпт становится инструментом управления, а не просьбой о готовом ответе.",
    tag: "Контроль"
  },
  {
    title: "Докажи, что это правда",
    text: "Наставник не даёт ответ, а ведёт вопросами к самостоятельной проверке.",
    tag: "Мышление"
  }
];

const mapNodes = [
  { label: "Старт", state: "done" },
  { label: "Ошибка AI", state: "active" },
  { label: "Промпт", state: "locked" },
  { label: "Проверка", state: "locked" },
  { label: "Финал", state: "locked" }
];

export default function Home() {
  return (
    <main className="gameSite">
      <nav className="gameNav">
        <a href="/" className="gameBrand">
          <span>MP</span>
          MindPilot
        </a>
        <div>
          <a href="/login">Вход</a>
          <a href="/register" className="navAction">
            Начать
          </a>
        </div>
      </nav>

      <section className="gameHero">
        <div className="gameHeroCopy">
          <p className="gameEyebrow">30-дневный курс для юных AI-операторов</p>
          <h1>AI больше не магия. Это игра, где ребёнок учится управлять.</h1>
          <p className="gameLead">
            MindPilot превращает AI-грамотность в миссии, ранги и испытания. Ребёнок не получает
            готовые ответы. Он учится проверять, задавать сильные вопросы и думать самостоятельно.
          </p>
          <div className="gameActions">
            <a href="/register">Создать аккаунт родителя</a>
            <a href="/operator/login">Войти как оператор</a>
          </div>
          <div className="miniStats" aria-label="MindPilot status">
            <span>
              <strong>2</strong>
              миссии в день максимум
            </span>
            <span>
              <strong>6</strong>
              метрик роста
            </span>
            <span>
              <strong>0</strong>
              публичных рейтингов
            </span>
          </div>
        </div>

        <div className="gameWorld" aria-label="Игровая карта MindPilot">
          <div className="skyTrack">
            <span className="tile tileOne">AI</span>
            <span className="tile tileTwo">?</span>
            <span className="tile tileThree">OK</span>
          </div>
          <div className="mentorCard">
            <div className="mentorFace">
              <span />
              <span />
            </div>
            <div>
              <strong>Наставник</strong>
              <p>Я не дам ответ. Я помогу тебе его проверить.</p>
            </div>
          </div>
          <div className="questMap">
            {mapNodes.map((node, index) => (
              <a
                className={`questNode ${node.state}`}
                href={node.state === "locked" ? "/operator/dashboard" : "/operator/mission/2"}
                key={node.label}
                style={{ "--delay": `${index * 0.18}s` } as CSSProperties}
              >
                <span>{index + 1}</span>
                {node.label}
              </a>
            ))}
          </div>
          <div className="xpBar">
            <span>Operator I</span>
            <i>
              <b />
            </i>
            <strong>340 XP</strong>
          </div>
        </div>
      </section>

      <section className="questSection">
        <div className="sectionHeader">
          <p className="gameEyebrow">Как ребёнок не бросает</p>
          <h2>Каждый урок ощущается как маленькое прохождение, а не как школа.</h2>
        </div>
        <div className="questCards">
          {questCards.map((card) => (
            <article key={card.title}>
              <span>{card.tag}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="operatorPreview">
        <div className="sectionHeader">
          <p className="gameEyebrow">Экраны оператора</p>
          <h2>База, миссия, наставник и профиль выглядят как часть одной игры.</h2>
        </div>
        <div className="previewTabs">
          <a href="/operator/dashboard">База</a>
          <a href="/operator/mission/2">Миссия</a>
          <a href="/operator/mentor">Наставник</a>
          <a href="/operator/profile">Профиль</a>
        </div>
        <div className="phoneGallery playfulGallery">
          <DashboardPhone />
          <MissionPhone />
          <MentorPhone />
          <ProfilePhone />
        </div>
      </section>

      <section className="parentPromise">
        <div>
          <p className="gameEyebrow">Для родителя</p>
          <h2>Безопасность, согласие и контроль остаются взрослыми. Интерфейс ребёнка остаётся живым.</h2>
        </div>
        <div className="promiseGrid">
          <span>Родитель создаёт аккаунт</span>
          <span>Ребёнок входит по коду и PIN</span>
          <span>Наставник задаёт вопросы, не пишет домашку</span>
          <span>Админ видит safety-сигналы</span>
        </div>
      </section>

      <footer className="gameFooter">
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
        <a href="/parent-consent">Parent Consent</a>
        <a href="/child-safety-policy">Child Safety Policy</a>
      </footer>
    </main>
  );
}
