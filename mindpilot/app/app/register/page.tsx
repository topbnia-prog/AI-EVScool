import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Регистрация | MindPilot",
  description: "Регистрация родителя в MindPilot."
};

export default function RegisterPage() {
  return (
    <main className="academyAuthPage">
      <nav className="academyNav">
        <a href="/" className="academyBrand">
          <span>MindPilot</span>
          <b>AI Mission Academy</b>
        </a>
        <div>
          <a href="/login">Вход</a>
          <a href="/parent-consent">Parent Consent</a>
        </div>
      </nav>

      <section className="academyAuthShell">
        <div className="academyAuthIntro">
          <p className="academyKicker">Старт родителя</p>
          <h1>Сначала согласие и профиль. Потом миссии ребёнка.</h1>
          <p>
            Ребёнок не создаёт основной аккаунт сам. Родитель подтверждает согласие, задаёт
            безопасный профиль оператора и открывает первые миссии.
          </p>
          <div className="academySteps">
            <span>1. Аккаунт родителя</span>
            <span>2. Parent Consent</span>
            <span>3. Код оператора</span>
            <span>4. Первая миссия</span>
          </div>
        </div>

        <form className="academyForm">
          <label>
            Email родителя
            <input placeholder="parent@example.com" type="email" />
          </label>
          <label>
            Пароль
            <input placeholder="Минимум 8 символов" type="password" />
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
            Создать аккаунт
          </a>
        </form>
      </section>
    </main>
  );
}
