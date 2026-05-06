import type { Metadata } from "next";
import { operatorProfile } from "../../lib/mockData";

export const metadata: Metadata = {
  title: "Operator Login | MindPilot",
  description: "Вход оператора в MindPilot."
};

export default function OperatorLoginPage() {
  return (
    <main className="appPage">
      <nav className="appNav">
        <a href="/" className="brand">
          MindPilot
        </a>
        <div>
          <a href="/parent/signup">Parent</a>
          <a href="/operator/mindscan">MindScan</a>
        </div>
      </nav>

      <section className="flowHero compactHero">
        <p className="eyebrow">Operator access</p>
        <h1>Вход оператора</h1>
        <p>
          В MVP ребёнок входит по коду оператора и PIN, без собственного email.
        </p>
      </section>

      <section className="flowGrid">
        <form className="flowPanel">
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

        <aside className="flowPanel">
          <h2>Почему без email ребёнка?</h2>
          <p className="summaryText">
            Так мы уменьшаем сбор данных. Родитель владеет аккаунтом, а ребёнок
            получает отдельный операторский вход.
          </p>
        </aside>
      </section>
    </main>
  );
}
