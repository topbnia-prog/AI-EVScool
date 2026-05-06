import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вход | MindPilot",
  description: "Выбор входа в MindPilot для родителя, оператора или админа."
};

export default function LoginPage() {
  return (
    <main className="authPage">
      <nav className="systemNav">
        <a href="/" className="brand">
          MindPilot
        </a>
        <div>
          <a href="/register">Регистрация</a>
          <a href="/terms">Terms</a>
        </div>
      </nav>

      <section className="authShell">
        <div className="authCopy">
          <p className="eyebrow">Вход</p>
          <h1>Кто входит в систему?</h1>
          <p>
            У MindPilot разные входы для родителя, ребёнка-оператора и админа.
            Это нужно для безопасности данных и правильных прав доступа.
          </p>
        </div>
        <div className="authCards">
          <a href="/parent/dashboard">
            <span>Parent</span>
            <strong>Родитель</strong>
            <p>Прогресс, consent, summaries, оплата и safety-сигналы.</p>
          </a>
          <a href="/operator/login">
            <span>Operator</span>
            <strong>Оператор</strong>
            <p>Вход по коду и PIN без email ребёнка.</p>
          </a>
          <a href="/admin/safety">
            <span>Admin</span>
            <strong>Админ</strong>
            <p>Safety queue, задачи, операторы и QA-контроль.</p>
          </a>
        </div>
      </section>
    </main>
  );
}
