import type { Metadata } from "next";
import { AdminShell } from "../../_components/AdminShell";
import { adminParentRecords, weeklySummary } from "../../lib/mockData";

export const metadata: Metadata = {
  title: "Admin Parents | MindPilot",
  description: "Родители, consent и billing в админке MindPilot."
};

export default function AdminParentsPage() {
  return (
    <AdminShell
      eyebrow="Parents, consent and billing"
      title="Родительский аккаунт — юридическая и платежная опора"
      description="Админ контролирует consent, trial, weekly summaries, оплату и связь родителя с оператором без раскрытия лишних данных ребёнка."
    >
      <section className="adminPanel">
        <div className="adminPanelHeader">
          <div>
            <span>Parent records</span>
            <strong>Аккаунты родителей</strong>
          </div>
          <a href="/admin/users">Add tester</a>
          <a href="/parent-consent">Consent text</a>
        </div>
        <div className="parentAdminRows">
          {adminParentRecords.map((record) => (
            <article key={record.id}>
              <span>{record.email}</span>
              <strong>{record.displayName}</strong>
              <div className="courseMetaGrid compact">
                <div>
                  <span>Consent</span>
                  <strong>{record.consentStatus}</strong>
                </div>
                <div>
                  <span>Billing</span>
                  <strong>{record.billingStatus}</strong>
                </div>
                <div>
                  <span>Summary</span>
                  <strong>{record.weeklySummaryStatus}</strong>
                </div>
              </div>
              <p>{record.nextAction}</p>
              <div className="softNotice">{weeklySummary.parentPrompt}</div>
            </article>
          ))}
        </div>
      </section>
    </AdminShell>
  );
}
