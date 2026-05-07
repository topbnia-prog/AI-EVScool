import type { Metadata } from "next";
import { SmartLoginForm } from "../_components/SmartLoginForm";

export const metadata: Metadata = {
  title: "Вход | MindPilot",
  description: "Единый вход MindPilot: система сама распознаёт роль аккаунта."
};

export default function LoginPage() {
  return (
    <main className="academyAuthPage">
      <nav className="academyNav">
        <a href="/" className="academyBrand">
          <span>MindPilot</span>
          <b>AI Mission Academy</b>
        </a>
        <div>
          <a href="/register">Регистрация</a>
          <a href="/courses">Курсы</a>
          <a href="/terms">Terms</a>
        </div>
      </nav>

      <section className="academyAuthShell unifiedLoginShell">
        <div className="academyAuthIntro">
          <p className="academyKicker">Единый вход</p>
          <h1>Логин и пароль. Роль определяет система.</h1>
          <p>
            Родитель, ребёнок и админ не выбирают роль вручную. После входа MindPilot проверяет
            аккаунт и открывает правильную зону: родительский dashboard, базу оператора или
            админский контроль.
          </p>
          <div className="academySteps">
            <span>меньше ошибок входа</span>
            <span>нет email ребёнка</span>
            <span>админ отделён правами</span>
          </div>
        </div>

        <SmartLoginForm />
      </section>
    </main>
  );
}
