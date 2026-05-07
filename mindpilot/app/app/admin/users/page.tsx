import type { Metadata } from "next";
import { AdminShell } from "../../_components/AdminShell";
import { AdminUserManager } from "../../_components/AdminUserManager";
import { accessInvites, managedUsers } from "../../lib/mockData";
import { getAdminUsersFromSupabase } from "../../lib/supabase/adminUsers";

export const metadata: Metadata = {
  title: "Admin Users | MindPilot",
  description: "Управление пользователями, тестерами и доступами MindPilot."
};

export default async function AdminUsersPage() {
  const supabaseDataset = await getAdminUsersFromSupabase();
  const users = supabaseDataset?.users ?? managedUsers;
  const invites = supabaseDataset?.invites ?? accessInvites;
  const dataSource = supabaseDataset?.source ?? "mock";
  const activeFreeTesters = users.filter(
    (user) => user.plan === "free_tester" && user.status !== "blocked"
  );
  const invitedUsers = users.filter((user) => user.status === "invited");

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
          <strong>{invites.length}</strong>
          <p>Коды доступа для первых семей и операторов.</p>
        </article>
        <article className="adminKpiCard risk">
          <span>Data source</span>
          <strong>{dataSource === "supabase" ? "Supabase" : "Mock"}</strong>
          <p>
            {dataSource === "supabase"
              ? "Админка читает users, invites и access grants из базы."
              : "Добавьте Supabase env keys, чтобы админка читала реальные данные."}
          </p>
        </article>
      </section>

      <AdminUserManager initialUsers={users} invites={invites} />
    </AdminShell>
  );
}
