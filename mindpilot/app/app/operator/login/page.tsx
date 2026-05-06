import type { Metadata } from "next";
import { operatorProfile } from "../../lib/mockData";

export const metadata: Metadata = {
  title: "Вход оператора | MindPilot",
  description: "Вход ребёнка-оператора в MindPilot."
};

export default function OperatorLoginPage() {
  return (
    <main className="authPage">
      <nav className="systemNav">
        <a href="/" className="brand">
          MindPilot
        </a>
        <div>
          <a href="/login">Все входы</a>
          <a href="/register">Регистрация</a>
          <a href="/parent/dashboard">Parent</a>
        </div>
      </nav>

      <section className="authShell">
        <div className="authCopy">
          <p className="eyebrow">Operator access</p>
          <h1>Вход оператора</h1>
          <p>
            Ребёнок входит по операторскому коду и PIN. Email ребёнка не нужен:
            так мы уменьшаем сбор личных данных.
          </p>
          <div className="softNotice">
            После входа оператор проходит MindScan, открывает базу, миссии,
            наставника и профиль роста.
          </div>
        </div>

        <form className="authForm">
          <label>
            Код оператора
            <input defaultValue={operatorProfile.displayName} />
          </label>
          <label>
            PIN
            <input placeholder="4 цифры" type="password" />
          </label>
          <a className="wideButton" href="/operator/mindscan">
            Войти
          </a>
        </form>
      </section>
    </main>
  );
}
