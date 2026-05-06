import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Регистрация родителя | MindPilot",
  description: "Первый экран родительской регистрации MindPilot."
};

const steps = [
  "Родитель создаёт аккаунт",
  "Подтверждает согласие",
  "Создаёт оператора",
  "Открывает первые 2 миссии"
];

export default function ParentSignupPage() {
  return (
    <main className="appPage">
      <nav className="appNav">
        <a href="/" className="brand">
          MindPilot
        </a>
        <div>
          <a href="/parent/dashboard">Parent Dashboard</a>
          <a href="/operator/login">Operator Login</a>
          <a href="/admin/safety">Admin</a>
        </div>
      </nav>

      <section className="flowHero">
        <p className="eyebrow">Шаг 1</p>
        <h1>Регистрация родителя</h1>
        <p>
          В MVP ребёнок не создаёт аккаунт сам. Родитель владеет аккаунтом,
          подтверждает согласие и создаёт профиль оператора.
        </p>
      </section>

      <section className="flowGrid">
        <form className="flowPanel">
          <label>
            Email родителя
            <input placeholder="parent@example.com" type="email" />
          </label>
          <label>
            Имя или псевдоним оператора
            <input placeholder="Например: Operator Alpha" />
          </label>
          <label>
            Возраст ребёнка
            <select defaultValue="12">
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
            </select>
          </label>
          <label className="checkLine">
            <input type="checkbox" />
            <span>
              Я родитель или законный опекун и принимаю Parent Consent.
            </span>
          </label>
          <a className="wideButton" href="/parent/dashboard">
            Создать operator profile
          </a>
        </form>

        <aside className="flowPanel">
          <h2>Что произойдёт дальше</h2>
          <div className="stepList">
            {steps.map((step, index) => (
              <div key={step}>
                <span>{index + 1}</span>
                {step}
              </div>
            ))}
          </div>
          <div className="softNotice">
            Это пока локальный frontend-прототип. Реальная регистрация будет
            подключена через Supabase Auth и RLS.
          </div>
        </aside>
      </section>
    </main>
  );
}
