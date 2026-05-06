import { missions, operatorProfile } from "./lib/mockData";

const parentSignals = [
  "AI-грамотность для 10-16 лет",
  "Аккаунт создаёт родитель",
  "Первый курс на 30 дней",
  "Не делает домашние задания"
];

const safetyRules = [
  "Направляющие вопросы вместо готовых ответов",
  "Запрет на выполнение школьных заданий за ребёнка",
  "Без публичных рейтингов и давления",
  "Доступ ребёнка только после согласия родителя"
];

export default function Home() {
  const visibleMissions = missions.slice(0, 3);

  return (
    <main>
      <section className="hero" id="top">
        <div className="heroScene" aria-hidden="true">
          <div className="scanline" />
          <div className="orbit orbitOne" />
          <div className="orbit orbitTwo" />
          <div className="node nodeA" />
          <div className="node nodeB" />
          <div className="node nodeC" />
          <div className="cockpitPanel">
            <div className="panelTop">
              <span>{operatorProfile.displayName}</span>
              <strong>МИССИЯ АКТИВНА</strong>
            </div>
            <div className="promptLine">Спроси - проверь - улучши - реши</div>
            <div className="signalRows">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>

        <nav className="nav">
          <a href="/" className="brand">
            MindPilot
          </a>
          <div className="navLinks">
            <a href="#course">Курс</a>
            <a href="#safety">Безопасность</a>
            <a href="/parent/signup">Старт</a>
          </div>
        </nav>

        <div className="heroContent">
          <p className="eyebrow">AI-грамотность для юных операторов</p>
          <h1>MindPilot</h1>
          <p className="lead">
            Платформа миссий, которая учит детей управлять AI, проверять его
            ответы и сохранять собственное мышление под контролем.
          </p>
          <div className="heroActions" aria-label="Primary actions">
            <a href="/parent/signup">Начать путь родителя</a>
            <a href="/operator/login" className="secondary">
              Войти как оператор
            </a>
          </div>
          <div className="signalList">
            {parentSignals.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section introBand">
        <div>
          <p className="eyebrow">Боль родителя</p>
          <h2>Дети уже используют AI. Почти никто не учит их думать вместе с ним.</h2>
        </div>
        <p>
          MindPilot превращает использование AI в управляемую практику: ребёнок
          учится сомневаться в уверенных ответах, просить доказательства,
          строить сильные промпты и понимать, что нельзя отдавать машине.
        </p>
      </section>

      <section className="section courseSection" id="course">
        <div className="sectionHeader">
          <p className="eyebrow">Первый курс</p>
          <h2>30 дней. Каждый день - один навык оператора.</h2>
        </div>
        <div className="missionGrid">
          {visibleMissions.map((mission) => (
            <article className="missionCard" key={mission.id}>
              <span>Миссия {String(mission.number).padStart(2, "0")}</span>
              <h3>{mission.title}</h3>
              <p>{mission.concept}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section cockpitSection">
        <div className="operatorSurface">
          <div className="surfaceHeader">
            <div>
              <span className="eyebrow">Профиль пилота</span>
              <h2>Прогресс без оценок.</h2>
            </div>
            <strong>Ранг: {operatorProfile.rank}</strong>
          </div>
          <div className="metricsGrid">
            {operatorProfile.metrics.map((metric) => (
              <div className="metric" key={metric.id}>
                <span>{metric.label}</span>
                <div className="bar">
                  <i style={{ width: `${metric.value * 20}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section safetySection" id="safety">
        <div>
          <p className="eyebrow">Границы</p>
          <h2>Система строит самостоятельность, а не зависимость.</h2>
        </div>
        <div className="ruleList">
          {safetyRules.map((rule) => (
            <div className="rule" key={rule}>
              {rule}
            </div>
          ))}
        </div>
      </section>

      <section className="section pilotSection" id="pilot">
        <div>
          <p className="eyebrow">Теперь это путь продукта</p>
          <h2>Главная ведёт в регистрацию, MindScan, миссию и safety-панель.</h2>
          <p>
            На этом этапе экраны работают как локальный frontend-прототип. Дальше
            мы подключим Supabase, реальный AI-наставник, прогресс миссий,
            родительские summaries и админские safety-события.
          </p>
        </div>
        <a href="/admin/safety" className="finalCta">
          Открыть safety-панель
        </a>
      </section>

      <footer className="siteFooter">
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
        <a href="/parent-consent">Parent Consent</a>
        <a href="/child-safety-policy">Child Safety Policy</a>
      </footer>
    </main>
  );
}
