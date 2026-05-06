import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вход | MindPilot",
  description: "Выбор входа в MindPilot для родителя, оператора или админа."
};

const cards = [
  {
    href: "/parent/dashboard",
    badge: "Род",
    title: "Родитель",
    text: "Прогресс, согласие, оплата, недельные отчёты и безопасность."
  },
  {
    href: "/operator/login",
    badge: "Игрок",
    title: "Оператор",
    text: "Вход по коду и PIN без email ребёнка. Дальше - MindScan и миссии."
  },
  {
    href: "/admin/safety",
    badge: "Контроль",
    title: "Админ",
    text: "Safety-сигналы, задачи проекта, операторы и контроль качества."
  }
];

export default function LoginPage() {
  return (
    <main className="gameAuthPage">
      <nav className="gameNav">
        <a href="/" className="gameBrand">
          <span>MP</span>
          MindPilot
        </a>
        <div>
          <a href="/register">Регистрация</a>
          <a href="/terms">Terms</a>
        </div>
      </nav>

      <section className="gameAuthShell">
        <div className="gameAuthIntro">
          <p className="gameEyebrow">Выбор роли</p>
          <h1>Кто входит в систему?</h1>
          <p>
            У MindPilot разные входы: взрослый управляет аккаунтом и согласием, ребёнок проходит
            миссии, админ смотрит безопасность и задачи.
          </p>
        </div>
        <div className="roleCards">
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
