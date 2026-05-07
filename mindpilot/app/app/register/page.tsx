import type { Metadata } from "next";
import { operatorProfile } from "../lib/mockData";

export const metadata: Metadata = {
  title: "Регистрация | MindPilot",
  description: "Регистрация родителя и первичный взгляд на ребёнка в MindPilot."
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

      <section className="academyAuthShell parentSurveyShell">
        <div className="academyAuthIntro">
          <p className="academyKicker">Регистрация родителя</p>
          <h1>Перед первым уроком нам нужно понять ребёнка.</h1>
          <p>
            Родитель видит ребёнка со стороны: что его мотивирует, где он быстро сдаётся, как он
            реагирует на ошибки. Эти ответы не являются диагнозом. Они помогают наставнику начать
            мягче и точнее.
          </p>
          <div className="academySteps">
            <span>1. Аккаунт родителя</span>
            <span>2. Взгляд родителя</span>
            <span>3. MindScan ребёнка</span>
            <span>4. Карта подхода в админке</span>
          </div>
        </div>

        <form className="academyForm parentSurveyForm">
          <label>
            Email родителя
            <input placeholder="parent@example.com" type="email" />
          </label>
          <label>
            Псевдоним оператора
            <input defaultValue={operatorProfile.displayName} />
          </label>
          <label>
            Возраст ребёнка
            <select defaultValue={operatorProfile.age}>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
            </select>
          </label>
          <label>
            Как ребёнок лучше всего включается в новое?
            <select defaultValue="practice">
              <option value="practice">Через практику и примеры</option>
              <option value="story">Через историю и объяснение</option>
              <option value="competition">Через вызов и соревнование с собой</option>
              <option value="calm">Через спокойный пошаговый разбор</option>
            </select>
          </label>
          <label>
            Что обычно мешает ему учиться?
            <select defaultValue="school_pressure">
              <option value="school_pressure">Ощущение, что его проверяют как в школе</option>
              <option value="too_long">Слишком длинные объяснения</option>
              <option value="too_easy">Слишком лёгкие задания</option>
              <option value="fear_error">Страх ошибиться</option>
            </select>
          </label>
          <label>
            Что вы хотите, чтобы MindPilot развил в первую очередь?
            <textarea defaultValue={operatorProfile.parentInsight.parentGoal} rows={3} />
          </label>
          <label className="academyCheck">
            <input type="checkbox" />
            <span>Я родитель или законный опекун и принимаю Parent Consent.</span>
          </label>
          <a className="academySubmit" href="/operator/mindscan">
            Создать профиль и перейти к MindScan
          </a>
        </form>
      </section>
    </main>
  );
}
