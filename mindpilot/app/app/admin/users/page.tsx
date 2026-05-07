import type { Metadata } from "next";
import { AdminShell } from "../../_components/AdminShell";
import { AdminUserManager } from "../../_components/AdminUserManager";
import { accessInvites, managedUsers } from "../../lib/mockData";

export const metadata: Metadata = {
  title: "Admin Users | MindPilot",
  description: "Управление пользователями, тестерами и доступами MindPilot."
};

export default function AdminUsersPage() {
  const activeFreeTesters = managedUsers.filter(
    (user) => user.plan === "free_tester" && user.status !== "blocked"
  );
  const invitedUsers = managedUsers.filter((user) => user.status === "invited");

  return (
    <AdminShell
      eyebrow="User and access control"
      title="Здесь админ управляет пользователями и бесплатными тестерами"
      description="Этот раздел нужен для запуска beta: выдать семье бесплатный доступ, создать operator code ребёнку, поставить доступ на паузу, перевести trial в paid и видеть invite-коды."
    >
      <section className="adminKpiGrid">
        <article className="adminKpiCard good">
          <span>Free testers</span>
          <strong>{activeFreeTesters.length}</strong>
          <p>Пользователи, которым можно бесплатно проверять систему.</p>
        </article>
        <article className="adminKpiCard watch">
          <span>Invited</span>
          <strong>{invitedUsers.length}</strong>
          <p>Созданы, но ещё не вошли в систему.</p>
        </article>
        <article className="adminKpiCard neutral">
          <span>Invite codes</span>
          <strong>{accessInvites.length}</strong>
          <p>Коды доступа для первых семей и операторов.</p>
        </article>
        <article className="adminKpiCard risk">
          <span>Needs backend</span>
          <strong>Supabase</strong>
          <p>Следующий шаг: сохранять users, invites и audit в базе.</p>
        </article>
      </section>

      <AdminUserManager initialUsers={managedUsers} invites={accessInvites} />
    </AdminShell>
  );
}
