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
    <main className="academyAuthPage">
      <nav className="academyNav">
        <a href="/" className="academyBrand">
          <span>MindPilot</span>
          <b>AI Mission Academy</b>
        </a>
        <div>
          <a href="/login">Вход</a>
          <a href="/courses">Курсы</a>
        </div>
      </nav>

      <section className="academyAuthShell">
        <div className="academyAuthIntro">
          <p className="academyKicker">Шаг 1</p>
          <h1>Регистрация родителя</h1>
          <p>
            Родитель владеет аккаунтом, подтверждает consent и создаёт детский профиль без лишнего
            сбора данных.
          </p>
          <div className="academySteps">
            {steps.map((step, index) => (
              <span key={step}>
                {index + 1}. {step}
              </span>
            ))}
          </div>
        </div>

        <form className="academyForm">
          <label>
            Email родителя
            <input placeholder="parent@example.com" type="email" />
          </label>
          <label>
            Псевдоним оператора
            <input placeholder="Operator Alpha" />
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
          <label className="academyCheck">
            <input type="checkbox" />
            <span>Я родитель или законный опекун и принимаю Parent Consent.</span>
          </label>
          <a className="academySubmit" href="/parent/dashboard">
            Создать operator profile
          </a>
        </form>
      </section>
    </main>
  );
}
