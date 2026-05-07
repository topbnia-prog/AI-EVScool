import type { Metadata } from "next";
import { operatorProfile } from "../../lib/mockData";

export const metadata: Metadata = {
  title: "MindScan | MindPilot",
  description: "Короткий первый опрос ребёнка перед первой миссией MindPilot."
};

const topicOptions = ["Игры", "Видео", "Технологии", "Новости", "Наука", "Дизайн"];

export default function MindScanPage() {
  return (
    <main className="appPage academyLitePage">
      <nav className="appNav lightNav">
        <a href="/operator/dashboard" className="brand">
          MindPilot
        </a>
        <div>
          <a href="/operator/dashboard">База</a>
          <a href="/parent/dashboard">Parent</a>
        </div>
      </nav>

      <section className="adminHeader lightHeader">
        <p className="academyKicker">MindScan перед первой миссией</p>
        <h1>Настроим маршрут под тебя.</h1>
        <p>
          Это не тест и не оценка. Нам нужно понять, как тебе удобнее учиться: быстро через
          испытания, спокойно по шагам, через примеры из игр или через реальные задачи.
        </p>
      </section>

      <section className="flowGrid mindScanGrid">
        <form className="flowPanel lightPanel mindScanForm">
          <label>
            Насколько ты уже знаком с AI?
            <select defaultValue="sometimes">
              <option value="new">Почти не использовал</option>
              <option value="sometimes">Иногда использую</option>
              <option value="often">Использую часто</option>
              <option value="too_much">Иногда слишком полагаюсь на него</option>
            </select>
          </label>
          <label>
            Какой темп тебе комфортнее?
            <select defaultValue="short">
              <option value="short">Короткие шаги по 10-15 минут</option>
              <option value="normal">Обычный темп с объяснением</option>
              <option value="deep">Можно глубже, если тема интересная</option>
            </select>
          </label>
          <label>
            Какой формат задания звучит интереснее?
            <select defaultValue="challenge">
              <option value="challenge">Испытание: поймать ошибку</option>
              <option value="simulation">Симуляция диалога с AI</option>
              <option value="build">Собрать рабочий промпт</option>
              <option value="detective">Проверить факт как детектив</option>
            </select>
          </label>
          <label>
            Что наставнику лучше делать, если ты застрял?
            <select defaultValue="questions">
              <option value="questions">Задать короткий вопрос</option>
              <option value="example">Показать маленький пример</option>
              <option value="step">Разбить задание на шаги</option>
              <option value="pause">Дать паузу и не давить</option>
            </select>
          </label>
          <div className="choiceGrid softChoiceGrid">
            {topicOptions.map((interest) => (
              <label className="choicePill softChoice" key={interest}>
                <input
                  defaultChecked={operatorProfile.mindScan.curiosityTopics.some((topic) =>
                    interest.toLowerCase().includes(topic.toLowerCase())
                  )}
                  type="checkbox"
                />
                <span>{interest}</span>
              </label>
            ))}
          </div>
          <label>
            Одной фразой: чему ты хочешь научиться с AI?
            <input defaultValue={operatorProfile.learningGoal} />
          </label>
          <a className="academySubmit" href="/operator/dashboard">
            Сохранить MindScan и открыть базу
          </a>
        </form>

        <aside className="flowPanel lightPanel mindScanAside">
          <h2>Что изменится после MindScan</h2>
          <div className="adminProfileList">
            <div>
              <span>Тон наставника</span>
              <p>{operatorProfile.adminProfile.mentorTone}</p>
            </div>
            <div>
              <span>Примеры в миссиях</span>
              <p>{operatorProfile.mindScan.curiosityTopics.join(", ")}</p>
            </div>
            <div>
              <span>Первый урок</span>
              <p>{operatorProfile.mindScan.firstLessonApproach}</p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
