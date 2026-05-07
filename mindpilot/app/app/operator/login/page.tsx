import type { Metadata } from "next";
import { operatorProfile } from "../../lib/mockData";

export const metadata: Metadata = {
  title: "Вход оператора | MindPilot",
  description: "Вход ребёнка-оператора в MindPilot."
};

export default function OperatorLoginPage() {
  return (
    <main className="academyAuthPage operatorAccessPage">
      <nav className="academyNav">
        <a href="/" className="academyBrand">
          <span>MindPilot</span>
          <b>AI Mission Academy</b>
        </a>
        <div>
          <a href="/login">Все входы</a>
          <a href="/register">Регистрация</a>
          <a href="/parent/dashboard">Parent</a>
        </div>
      </nav>

      <section className="academyAuthShell">
        <div className="operatorAccessPanel">
          <div className="operatorAccessAvatar">OP</div>
          <p className="academyKicker">Operator access</p>
          <h1>Вход в базу миссий</h1>
          <p>
            Введи код оператора и PIN. Email ребёнка не нужен: так мы уменьшаем сбор личных данных.
          </p>
          <div className="academySteps">
            <span>MindScan после входа</span>
            <span>2 миссии максимум в день</span>
            <span>Наставник задаёт вопросы</span>
          </div>
        </div>

        <form className="academyForm">
          <label>
            Код оператора
            <input defaultValue={operatorProfile.displayName} />
          </label>
          <label>
            PIN
            <input placeholder="4 цифры" type="password" />
          </label>
          <a className="academySubmit" href="/operator/mindscan">
            Войти
          </a>
        </form>
      </section>
    </main>
  );
}
