import type { Metadata } from "next";
import { AdminShell } from "../../_components/AdminShell";
import { platformSettings } from "../../lib/mockData";

export const metadata: Metadata = {
  title: "Admin Settings | MindPilot",
  description: "Настройки платформы MindPilot."
};

export default function AdminSettingsPage() {
  return (
    <AdminShell
      eyebrow="Platform settings"
      title="Настройки, которые нельзя держать в голове"
      description="Здесь фиксируются AI provider, лимиты, retention, платежи и правило деплоя. В будущем эти значения должны приходить из базы и иметь audit log."
    >
      <section className="adminPanel">
        <div className="adminPanelHeader">
          <div>
            <span>Settings registry</span>
            <strong>Операционные правила</strong>
          </div>
        </div>
        <div className="adminSettingRows">
          {platformSettings.map((setting) => (
            <div className={setting.status} key={setting.key}>
              <span>{setting.status}</span>
              <strong>{setting.key}</strong>
              <p>{setting.value}</p>
              <em>{setting.note}</em>
            </div>
          ))}
        </div>
      </section>
    </AdminShell>
  );
}
