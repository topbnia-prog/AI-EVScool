import { DashboardPhone, MentorPhone, MissionPhone, ProfilePhone } from "./_components/OperatorPhone";

const productChecks = [
  "Родитель создаёт аккаунт и даёт consent",
  "Оператор входит без email ребёнка",
  "MindScan настраивает язык и интересы",
  "Наставник задаёт вопросы, не даёт готовые ответы",
  "Админ видит safety-события и задачи"
];

export default function Home() {
  return (
    <main className="homeSystem">
      <nav className="systemNav">
        <a href="/" className="brand">
          MindPilot
        </a>
        <div>
          <a href="/login">Вход</a>
          <a href="/register">Регистрация</a>
          <a href="/admin/safety">Admin</a>
        </div>
      </nav>

      <section className="systemHero">
        <div className="systemCopy">
          <p className="eyebrow">AI-грамотность для юных операторов</p>
          <h1>Ребёнок не пользователь AI. Он оператор.</h1>
          <p>
            MindPilot учит детей 10-16 лет управлять AI, ловить уверенные ошибки,
            проверять факты и сохранять самостоятельное мышление.
          </p>
          <div className="heroActions">
            <a href="/register">Создать аккаунт родителя</a>
            <a href="/operator/login" className="secondary">
              Войти как оператор
            </a>
          </div>
          <div className="systemChecks">
            {productChecks.map((check) => (
              <span key={check}>{check}</span>
            ))}
          </div>
        </div>

        <div className="heroPhoneFocus">
          <ProfilePhone />
        </div>
      </section>

      <section className="screenPicker">
        <p className="eyebrow">Выберите экран</p>
        <div className="screenButtons">
          <a href="/operator/dashboard">Dashboard</a>
          <a href="/operator/mission/2">Миссия</a>
          <a href="/operator/mentor">Наставник</a>
          <a href="/operator/profile">Профиль</a>
        </div>
      </section>

      <section className="phoneGallery">
        <DashboardPhone />
        <MissionPhone />
        <MentorPhone />
        <ProfilePhone />
      </section>

      <section className="systemBand">
        <div>
          <p className="eyebrow">Следующий слой</p>
          <h2>Теперь интерфейс готов к данным, Supabase и AI guardrails.</h2>
        </div>
        <p>
          Главная показывает реальный product direction: детский cockpit,
          миссии, наставника, профиль, parent flow и admin safety-контроль.
          Деплой остаётся ручным только по твоей команде.
        </p>
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
