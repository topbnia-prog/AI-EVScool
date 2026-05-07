import type { Metadata } from "next";
import { AdminShell } from "../../_components/AdminShell";
import { mentorBehaviorTests, mentorScenarios } from "../../lib/mockData";
import { getConfiguredAiModel, getConfiguredAiProvider } from "../../lib/ai/providers";

export const metadata: Metadata = {
  title: "Admin Mentor Control | MindPilot",
  description: "Контроль AI-наставника MindPilot."
};

export default function AdminMentorPage() {
  const provider = getConfiguredAiProvider();
  const model = getConfiguredAiModel();

  return (
    <AdminShell
      eyebrow="AI mentor control"
      title="Наставник должен проходить тесты до детей"
      description="Здесь админ контролирует system prompt, провайдера AI, запрещённые поведения и сценарии, где наставник обязан задавать вопросы вместо готовых ответов."
    >
      <section className="adminCommandGrid">
        <article className="adminPanel">
          <div className="adminPanelHeader">
            <div>
              <span>Provider</span>
              <strong>{provider.label}</strong>
            </div>
            <a href="/admin/settings">Settings</a>
          </div>
          <div className="adminSettingRows">
            <div>
              <span>Model</span>
              <strong>{model}</strong>
              <p>AI provider остаётся заменяемым, не жёстко привязанным к одному сервису.</p>
            </div>
            <div>
              <span>Prompt version</span>
              <strong>mentor-system-v0.1</strong>
              <p>Следующий шаг: хранить версии prompt и результаты QA в базе.</p>
            </div>
          </div>
        </article>

        <article className="adminPanel adminWidePanel">
          <div className="adminPanelHeader">
            <div>
              <span>Behavior tests</span>
              <strong>Обязательные сценарии</strong>
            </div>
            <a href="/admin/safety">Safety</a>
          </div>
          <div className="mentorTestRows">
            {mentorBehaviorTests.map((test) => (
              <div className={test.status} key={test.id}>
                <span>
                  {test.id} · {test.category} · {test.status}
                </span>
                <strong>{test.prompt}</strong>
                <p>{test.expectedBehavior}</p>
                <em>{test.lastRun}</em>
              </div>
            ))}
          </div>
        </article>

        <article className="adminPanel adminWidePanel">
          <div className="adminPanelHeader">
            <div>
              <span>Live scenario rules</span>
              <strong>Как наставник обязан отвечать</strong>
            </div>
          </div>
          <div className="adminMiniRows twoColumn">
            {mentorScenarios.map((scenario) => (
              <div key={scenario.intent}>
                <span>{scenario.label}</span>
                <strong>{scenario.trigger}</strong>
                <p>{scenario.response}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </AdminShell>
  );
}
