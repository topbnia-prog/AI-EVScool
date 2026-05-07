import type { CSSProperties } from "react";
import {
  GrowthRadar3D,
  MentorCore3D,
  OperatorBase3D,
  SafetyCube3D
} from "./_components/MindPilot3D";

const missionPath = [
  { label: "Старт", detail: "Понять, что AI не магия", status: "done" },
  { label: "Ошибка AI", detail: "Поймать уверенную ложь", status: "active" },
  { label: "Промпт", detail: "Собрать сильный запрос", status: "next" },
  { label: "Проверка", detail: "Доказать факт", status: "locked" }
];

const growthMetrics = [
  { label: "Проверка", value: "3/5", tone: "mint" },
  { label: "Критичность", value: "3/5", tone: "blue" },
  { label: "Промпты", value: "3/5", tone: "peach" },
  { label: "Автономность", value: "2/5", tone: "violet" }
];

const baseZones = [
  { label: "Карта миссий", value: "30 дней", icon: "✦" },
  { label: "Наставник", value: "только вопросы", icon: "?" },
  { label: "Радар навыков", value: "6 метрик", icon: "◎" },
  { label: "Safety", value: "админ-контроль", icon: "✓" }
];

const orbitNodes = ["AI", "FACT", "PROMPT", "WHY", "SOURCE"];

const principles = [
  {
    title: "Миссии вместо уроков",
    text: "Короткий зацеп, испытание, симуляция и рефлексия. Без оценок и школьного давления."
  },
  {
    title: "Наставник задаёт вопросы",
    text: "AI не пишет за ребёнка. Он помогает проверить мысль и найти следующий шаг."
  },
  {
    title: "Растёт личный профиль",
    text: "Ребёнок видит прогресс навыков, серию дней, достижения и текущий ранг."
  }
];

const audienceBlocks = [
  {
    title: "Для родителя",
    text:
      "MindPilot не обещает магию и не заменяет школу. Он учит ребёнка безопасно пользоваться AI: проверять факты, замечать ошибки, не отдавать мышление инструменту и не просить готовую домашку.",
    points: ["родитель даёт согласие", "ребёнок входит без email", "видны summaries и safety-сигналы"]
  },
  {
    title: "Для ребёнка",
    text:
      "Это не урок с оценками. Это личная база: сегодня есть миссия, наставник задаёт вопросы, профиль показывает рост, а достижения открываются за реальные навыки.",
    points: ["миссии короткие", "нет публичных рейтингов", "AI-наставник не ругает и не давит"]
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

      <section className="academyHero compactHero">
        <div className="academyHeroCopy">
          <p className="academyKicker">30 дней · дети 10-16 · родительский контроль</p>
          <h1>Личная база роста для ребёнка, который учится управлять AI.</h1>
          <p>
            MindPilot делает AI-грамотность похожей на прохождение: миссии, наставник, метрики,
            серия дней и профиль навыков. Без готовых ответов и без гонки с другими детьми.
          </p>
          <div className="academyActions">
            <a href="/register">Создать аккаунт родителя</a>
            <a href="/operator/login">Войти как оператор</a>
          </div>
        </div>

        <div className="pilotBaseVisual" aria-label="Визуальная база оператора MindPilot">
          <div className="baseOrbit" aria-hidden="true">
            {orbitNodes.map((node, index) => (
              <span
                key={node}
                style={
                  {
                    "--node-index": index,
                    "--node-count": orbitNodes.length
                  } as CSSProperties
                }
              >
                {node}
              </span>
            ))}
          </div>

          <div className="pilotCoreCard">
            <span className="coreSignal">личная база</span>
            <strong>Operator Base</strong>
            <p>Миссия дня, наставник и карта роста собраны в одном игровом интерфейсе.</p>
            <div className="coreRings" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
          </div>

          <div className="baseZoneGrid">
            {baseZones.map((zone) => (
              <div key={zone.label}>
                <span>{zone.icon}</span>
                <strong>{zone.label}</strong>
                <p>{zone.value}</p>
              </div>
            ))}
          </div>

          <div className="missionRail">
            {missionPath.map((item, index) => (
              <a
                className={`missionNode ${item.status}`}
                href={item.status === "locked" ? "/operator/dashboard" : "/operator/mission/2"}
                key={item.label}
                style={{ "--delay": `${index * 0.12}s` } as CSSProperties}
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

      <section className="growthBaseSection">
        <div className="growthBaseIntro">
          <p className="academyKicker">Что видит ребёнок</p>
          <h2>Интерфейс должен ощущаться как личная база роста.</h2>
          <p>
            Не огромный промо-сайт и не школьный журнал. Это спокойная рабочая зона оператора:
            куда зайти, что пройти, какой навык вырос и что спросить у наставника.
          </p>
        </div>

        <div className="growthBaseBoard">
          <div className="baseTopbar">
            <div>
              <span>Сегодня</span>
              <strong>Миссия 2 · Анатомия ошибки</strong>
            </div>
            <a href="/operator/dashboard">Открыть базу</a>
          </div>

          <div className="baseMainCard">
            <span className="baseBadge">В процессе</span>
            <h3>Поймать уверенную ошибку AI</h3>
            <p>Оператор проверяет ответ, ищет источник и пишет вывод своими словами.</p>
            <div className="baseProgress">
              <i>
                <b />
              </i>
              <span>3 из 6 шагов</span>
            </div>
          </div>

          <div className="baseMetricGrid">
            {growthMetrics.map((metric) => (
              <div className={`baseMetric ${metric.tone}`} key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>

          <div className="baseMentorNote">
            <span>Наставник</span>
            <p>Что именно в ответе AI требует проверки?</p>
          </div>
        </div>

        <div className="growth3DGallery" aria-label="3D визуалы MindPilot">
          <article className="growth3DCard primary">
            <OperatorBase3D />
            <div>
              <span>Личная база</span>
              <strong>Не экран школы, а место где ребёнок растёт.</strong>
            </div>
          </article>
          <article className="growth3DCard">
            <MentorCore3D />
            <div>
              <span>Наставник</span>
              <strong>AI ведёт вопросами и не делает работу за ребёнка.</strong>
            </div>
          </article>
          <article className="growth3DCard">
            <GrowthRadar3D />
            <div>
              <span>Радар навыков</span>
              <strong>Ребёнок видит рост, а не оценки и давление.</strong>
            </div>
          </article>
          <article className="growth3DCard">
            <SafetyCube3D />
            <div>
              <span>Safety</span>
              <strong>Админ видит сигналы риска до того, как это станет проблемой.</strong>
            </div>
          </article>
        </div>
      </section>

      <section className="preLessonSection">
        <div>
          <p className="academyKicker">Перед первым уроком</p>
          <h2>Сначала мы понимаем ребёнка, потом начинаем миссию.</h2>
          <p>
            У каждого ребёнка разный вход: одному нужен вызов, другому спокойный шаг за шагом,
            третьему примеры из игр. Поэтому перед первой миссией есть два коротких слоя:
            родительский взгляд и MindScan самого ребёнка.
          </p>
        </div>
        <div className="preLessonCards">
          <article>
            <span>1</span>
            <h3>Взгляд родителя</h3>
            <p>Что мотивирует, где ребёнок быстро устаёт, чего родитель хочет от курса.</p>
          </article>
          <article>
            <span>2</span>
            <h3>MindScan ребёнка</h3>
            <p>Темп, интересы, опыт с AI, любимый формат задания и стиль подсказок.</p>
          </article>
          <article>
            <span>3</span>
            <h3>Карта подхода</h3>
            <p>Админ видит краткий профиль: тон наставника, риски, мотиваторы и план первой встречи.</p>
          </article>
        </div>
      </section>

      <section className="audienceSection">
        {audienceBlocks.map((block) => (
          <article key={block.title}>
            <h2>{block.title}</h2>
            <p>{block.text}</p>
            <div>
              {block.points.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="academyPrinciples compactPrinciples">
        {principles.map((principle) => (
          <article key={principle.title}>
            <h2>{principle.title}</h2>
            <p>{principle.text}</p>
          </article>
        ))}
      </section>

      <section className="parentLayer compactParentLayer">
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
