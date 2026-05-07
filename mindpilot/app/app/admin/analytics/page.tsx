import type { Metadata } from "next";
import { AdminShell } from "../../_components/AdminShell";
import { analyticsFunnel, operatorProfile, safetyAlerts } from "../../lib/mockData";

export const metadata: Metadata = {
  title: "Admin Analytics | MindPilot",
  description: "Аналитика MindPilot."
};

export default function AdminAnalyticsPage() {
  const averageMetric =
    operatorProfile.metrics.reduce((sum, metric) => sum + metric.value, 0) /
    operatorProfile.metrics.length;

  return (
    <AdminShell
      eyebrow="Analytics"
      title="Метрики нужны, чтобы видеть где система ломается"
      description="На старте аналитика должна показывать не vanity-цифры, а путь ребёнка: регистрация, consent, MindScan, миссии, удержание, safety и оплата."
    >
      <section className="adminCommandGrid">
        <article className="adminPanel adminWidePanel">
          <div className="adminPanelHeader">
            <div>
              <span>Funnel</span>
              <strong>Путь от регистрации к оплате</strong>
            </div>
          </div>
          <div className="analyticsFunnel">
            {analyticsFunnel.map((step) => (
              <div key={step.label}>
                <span>{step.label}</span>
                <strong>{step.count}</strong>
                <p>{step.conversion}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="adminPanel">
          <div className="adminPanelHeader">
            <div>
              <span>Skill growth</span>
              <strong>Средняя метрика</strong>
            </div>
          </div>
          <div className="adminBigNumber">
            <strong>{averageMetric.toFixed(1)}/5</strong>
            <p>Если после 2-3 миссий метрики не растут, проблема в контенте или наставнике.</p>
          </div>
        </article>

        <article className="adminPanel">
          <div className="adminPanelHeader">
            <div>
              <span>Safety rate</span>
              <strong>События</strong>
            </div>
          </div>
          <div className="adminBigNumber">
            <strong>{safetyAlerts.length}</strong>
            <p>На старте важнее качество обработки, чем попытка скрыть количество событий.</p>
          </div>
        </article>
      </section>
    </AdminShell>
  );
}
