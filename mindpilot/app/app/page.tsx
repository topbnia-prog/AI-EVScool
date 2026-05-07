import type { CSSProperties } from "react";
import { DashboardPhone, MentorPhone, MissionPhone, ProfilePhone } from "./_components/OperatorPhone";

const missionPath = [
  { label: "Старт", detail: "AI без магии", status: "done" },
  { label: "Ошибка", detail: "Поймать галлюцинацию", status: "active" },
  { label: "Промпт", detail: "Управлять ответом", status: "next" },
  { label: "Проверка", detail: "Доказать факт", status: "locked" }
];

const principles = [
  {
    title: "Не урок, а миссия",
    text: "Короткий зацеп, испытание, симуляция и рефлексия. Ребёнок двигается как в игре."
  },
  {
    title: "Наставник не даёт ответы",
    text: "Он задаёт вопросы, помогает проверить мысль и не пишет домашние задания за ребёнка."
  },
  {
    title: "Растут навыки, не оценки",
    text: "В профиле видны метрики: проверка, критичность, промпты, автономность и понимание AI."
  }
];

export default function Home() {
  return (
    <main className="academyPage">
      <nav className="academyNav">
        <a href="/" className="academyBrand">
          <span>MindPilot</span>
          <b>AI Mission Academy</b>
        </a>
        <div>
          <a href="/login">Вход</a>
          <a href="/register" className="academyNavPrimary">
            Начать
          </a>
        </div>
      </nav>

      <section className="academyHero">
        <div className="academyHeroCopy">
          <p className="academyKicker">30 дней · дети 10-16 · родительский контроль</p>
          <h1>Ребёнок учится управлять AI через миссии, а не слушать лекции.</h1>
          <p>
            MindPilot превращает AI-грамотность в спокойную игровую систему: карта прогресса,
            ранги, достижения, AI-наставник и безопасные границы.
          </p>
          <div className="academyActions">
            <a href="/register">Создать аккаунт родителя</a>
            <a href="/operator/login">Войти как оператор</a>
          </div>
        </div>

        <div className="missionConsole" aria-label="Карта миссий MindPilot">
          <div className="consoleHeader">
            <span>Operator I</span>
            <strong>340 XP</strong>
          </div>
          <div className="missionOrbit">
            <span className="floatingToken tokenOne">AI</span>
            <span className="floatingToken tokenTwo">?</span>
            <span className="floatingToken tokenThree">OK</span>
          </div>
          <div className="mentorPanel">
            <div className="mentorAvatar">
              <span />
              <span />
            </div>
            <div>
              <strong>AI-наставник</strong>
              <p>Я не дам готовый ответ. Я помогу тебе проверить свою мысль.</p>
            </div>
          </div>
          <div className="pathList">
            {missionPath.map((item, index) => (
              <a
                className={`pathItem ${item.status}`}
                href={item.status === "locked" ? "/operator/dashboard" : "/operator/mission/2"}
                key={item.label}
                style={{ "--delay": `${index * 0.14}s` } as CSSProperties}
              >
                <i>{index + 1}</i>
                <span>
                  <b>{item.label}</b>
                  {item.detail}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="academyPrinciples">
        {principles.map((principle) => (
          <article key={principle.title}>
            <h2>{principle.title}</h2>
            <p>{principle.text}</p>
          </article>
        ))}
      </section>

      <section className="screenStudio">
        <div className="studioHeader">
          <p className="academyKicker">Что видит оператор</p>
          <h2>Интерфейс ребёнка должен ощущаться как личная база роста.</h2>
          <div>
            <a href="/operator/dashboard">База</a>
            <a href="/operator/mission/2">Миссия</a>
            <a href="/operator/mentor">Наставник</a>
            <a href="/operator/profile">Профиль</a>
          </div>
        </div>
        <div className="phoneGallery academyPhones">
          <DashboardPhone />
          <MissionPhone />
          <MentorPhone />
          <ProfilePhone />
        </div>
      </section>

      <section className="parentLayer">
        <div>
          <p className="academyKicker">Что контролирует родитель</p>
          <h2>Взрослая часть остаётся строгой: consent, безопасность, отчёты и платежи.</h2>
        </div>
        <div className="parentLayerGrid">
          <span>Родитель создаёт аккаунт</span>
          <span>Ребёнок входит без email</span>
          <span>Наставник не пишет домашку</span>
          <span>Админ видит safety-сигналы</span>
        </div>
      </section>

      <footer className="academyFooter">
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
        <a href="/parent-consent">Parent Consent</a>
        <a href="/child-safety-policy">Child Safety Policy</a>
      </footer>
    </main>
  );
}
