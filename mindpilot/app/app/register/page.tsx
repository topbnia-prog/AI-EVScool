import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Регистрация | MindPilot",
  description: "Регистрация родителя в MindPilot."
};

export default function RegisterPage() {
  return (
    <main className="gameAuthPage">
      <nav className="gameNav">
        <a href="/" className="gameBrand">
          <span>MP</span>
          MindPilot
        </a>
        <div>
          <a href="/login">Вход</a>
          <a href="/parent-consent">Parent Consent</a>
        </div>
      </nav>

      <section className="gameAuthShell signupMission">
        <div className="gameAuthIntro">
          <p className="gameEyebrow">Стартовая миссия родителя</p>
          <h1>Сначала родитель. Потом оператор.</h1>
          <p>
            Ребёнок не создаёт основной аккаунт сам. Родитель подтверждает согласие, задаёт
            безопасный профиль оператора и открывает первые миссии.
          </p>
          <div className="signupSteps">
            <span>1. Аккаунт родителя</span>
            <span>2. Parent Consent</span>
            <span>3. Код оператора</span>
            <span>4. Первая миссия</span>
          </div>
        </div>

        <form className="gameForm">
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
          <label className="checkLine">
            <input type="checkbox" />
            <span>Я родитель или законный опекун и принимаю Parent Consent.</span>
          </label>
          <a className="wideButton gameWideButton" href="/parent/dashboard">
            Создать аккаунт
          </a>
        </form>
      </section>
    </main>
  );
}
