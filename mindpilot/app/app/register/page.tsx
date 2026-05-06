import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Регистрация | MindPilot",
  description: "Регистрация родителя в MindPilot."
};

export default function RegisterPage() {
  return (
    <main className="authPage">
      <nav className="systemNav">
        <a href="/" className="brand">
          MindPilot
        </a>
        <div>
          <a href="/login">Вход</a>
          <a href="/parent-consent">Parent Consent</a>
        </div>
      </nav>

      <section className="authShell">
        <div className="authCopy">
          <p className="eyebrow">Регистрация родителя</p>
          <h1>Сначала родитель. Потом оператор.</h1>
          <p>
            По нашей модели ребёнок не регистрируется сам. Родитель создаёт
            аккаунт, принимает consent и открывает операторский профиль.
          </p>
        </div>

        <form className="authForm">
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
          <a className="wideButton" href="/parent/dashboard">
            Создать аккаунт
          </a>
        </form>
      </section>
    </main>
  );
}
