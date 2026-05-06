import type { Metadata } from "next";
import { operatorProfile } from "../../lib/mockData";

export const metadata: Metadata = {
  title: "Вход оператора | MindPilot",
  description: "Вход ребёнка-оператора в MindPilot."
};

export default function OperatorLoginPage() {
  return (
    <main className="gameAuthPage operatorGate">
      <nav className="gameNav">
        <a href="/" className="gameBrand">
          <span>MP</span>
          MindPilot
        </a>
        <div>
          <a href="/login">Все входы</a>
          <a href="/register">Регистрация</a>
          <a href="/parent/dashboard">Parent</a>
        </div>
      </nav>

      <section className="gameAuthShell">
        <div className="operatorGateCard">
          <div className="gateAvatar">OP</div>
          <p className="gameEyebrow">Operator access</p>
          <h1>Вход в базу</h1>
          <p>
            Введи код оператора и PIN. Email ребёнка не нужен: так мы уменьшаем сбор личных данных.
          </p>
          <div className="gateBadges">
            <span>MindScan после входа</span>
            <span>2 миссии максимум в день</span>
            <span>Наставник задаёт вопросы</span>
          </div>
        </div>

        <form className="gameForm gateForm">
          <label>
            Код оператора
            <input defaultValue={operatorProfile.displayName} />
          </label>
          <label>
            PIN
            <input placeholder="4 цифры" type="password" />
          </label>
          <a className="wideButton gameWideButton" href="/operator/mindscan">
            Войти
          </a>
        </form>
      </section>
    </main>
  );
}
