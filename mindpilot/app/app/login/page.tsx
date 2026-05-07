import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вход | MindPilot",
  description: "Выбор входа в MindPilot для родителя, оператора или админа."
};

const cards = [
  {
    href: "/parent/dashboard",
    badge: "Родитель",
    title: "Контроль и отчёты",
    text: "Consent, прогресс, недельные summaries, оплата и safety-уведомления."
  },
  {
    href: "/operator/login",
    badge: "Оператор",
    title: "Миссии ребёнка",
    text: "Вход по коду и PIN без email ребёнка. Дальше MindScan, база и миссии."
  },
  {
    href: "/admin/safety",
    badge: "Админ",
    title: "Безопасность",
    text: "Очередь safety-сигналов, задачи проекта, операторы и контроль качества."
  }
];

export default function LoginPage() {
  return (
    <main className="academyAuthPage">
      <nav className="academyNav">
        <a href="/" className="academyBrand">
          <span>MindPilot</span>
          <b>AI Mission Academy</b>
        </a>
        <div>
          <a href="/register">Регистрация</a>
          <a href="/terms">Terms</a>
        </div>
      </nav>

      <section className="academyAuthShell">
        <div className="academyAuthIntro">
          <p className="academyKicker">Выбор роли</p>
          <h1>У каждого входа своя зона ответственности.</h1>
          <p>
            Родитель управляет аккаунтом и согласием, ребёнок проходит миссии, админ следит за
            безопасностью и качеством системы.
          </p>
        </div>
        <div className="academyRoleCards">
          {cards.map((card) => (
            <a href={card.href} key={card.href}>
              <span>{card.badge}</span>
              <strong>{card.title}</strong>
              <p>{card.text}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
