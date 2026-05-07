"use client";

import { FormEvent, useMemo, useState } from "react";
import type { AccessInvite, AccessPlan, ManagedUser, UserRole } from "../lib/types";

type DraftTester = {
  displayName: string;
  login: string;
  role: UserRole;
  plan: AccessPlan;
  accessDays: string;
  notes: string;
};

const initialDraft: DraftTester = {
  displayName: "",
  login: "",
  role: "parent",
  plan: "free_tester",
  accessDays: "14",
  notes: "Бесплатный тестер для проверки регистрации, MindScan и первых миссий."
};

type AdminUserManagerProps = {
  initialUsers: ManagedUser[];
  invites: AccessInvite[];
};

type PlanFilter = AccessPlan | "all";

export function AdminUserManager({ initialUsers, invites }: AdminUserManagerProps) {
  const [users, setUsers] = useState(initialUsers);
  const [draft, setDraft] = useState<DraftTester>(initialDraft);
  const [selectedPlan, setSelectedPlan] = useState<PlanFilter>("all");
  const [message, setMessage] = useState("Готово к созданию бесплатного тестера.");

  const filteredUsers = useMemo(
    () => users.filter((user) => selectedPlan === "all" || selectedPlan === user.plan),
    [selectedPlan, users]
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!draft.displayName.trim() || !draft.login.trim()) {
      setMessage("Нужно заполнить имя и логин тестера.");
      return;
    }

    const user: ManagedUser = {
      id: `user_${Date.now()}`,
      role: draft.role,
      displayName: draft.displayName.trim(),
      login: draft.login.trim(),
      status: "invited",
      plan: draft.plan,
      accessUntil: `${draft.accessDays || "14"} дней после активации`,
      createdAt: "сейчас",
      lastSeen: "ещё не входил",
      notes: draft.notes.trim()
    };

    setUsers((current) => [user, ...current]);
    setDraft(initialDraft);
    setSelectedPlan(user.plan);
    setMessage(`Создан invite для ${user.displayName}. После Supabase это будет запись в users + access_grants.`);
  }

  function setUserPlan(userId: string, plan: AccessPlan) {
    setUsers((current) =>
      current.map((user) =>
        user.id === userId
          ? {
              ...user,
              plan,
              accessUntil: plan === "paid" ? "оплачен" : plan === "free_tester" ? "14 дней" : user.accessUntil
            }
          : user
      )
    );
    setMessage("Доступ обновлён локально. В базе это станет audit-событием.");
  }

  function pauseUser(userId: string) {
    setUsers((current) =>
      current.map((user) => (user.id === userId ? { ...user, status: "paused" } : user))
    );
    setMessage("Пользователь поставлен на паузу локально.");
  }

  function setUserStatus(userId: string, status: ManagedUser["status"]) {
    setUsers((current) =>
      current.map((user) => (user.id === userId ? { ...user, status } : user))
    );
    setMessage(`Статус пользователя изменён на ${status}. В Supabase это будет audit-событие.`);
  }

  return (
    <section className="adminUsersLayout">
      <article className="adminPanel">
        <div className="adminPanelHeader">
          <div>
            <span>Create access</span>
            <strong>Добавить бесплатного тестера</strong>
          </div>
        </div>
        <form className="adminUserForm" onSubmit={handleSubmit}>
          <label>
            Имя
            <input
              onChange={(event) => setDraft({ ...draft, displayName: event.target.value })}
              placeholder="Например: Tester Parent"
              value={draft.displayName}
            />
          </label>
          <label>
            Логин
            <input
              onChange={(event) => setDraft({ ...draft, login: event.target.value })}
              placeholder="email родителя или код оператора"
              value={draft.login}
            />
          </label>
          <label>
            Роль
            <select
              onChange={(event) => setDraft({ ...draft, role: event.target.value as UserRole })}
              value={draft.role}
            >
              <option value="parent">Parent</option>
              <option value="operator">Operator</option>
              <option value="admin">Admin</option>
            </select>
          </label>
          <label>
            Доступ
            <select
              onChange={(event) => setDraft({ ...draft, plan: event.target.value as AccessPlan })}
              value={draft.plan}
            >
              <option value="free_tester">Free tester</option>
              <option value="trial">Trial</option>
              <option value="paid">Paid</option>
              <option value="internal">Internal</option>
            </select>
          </label>
          <label>
            Дней доступа
            <input
              onChange={(event) => setDraft({ ...draft, accessDays: event.target.value })}
              type="number"
              value={draft.accessDays}
            />
          </label>
          <label>
            Заметка
            <textarea
              onChange={(event) => setDraft({ ...draft, notes: event.target.value })}
              rows={3}
              value={draft.notes}
            />
          </label>
          <button className="academySubmit" type="submit">
            Создать invite
          </button>
          <p className="loginSystemMessage">{message}</p>
        </form>
      </article>

      <article className="adminPanel">
        <div className="adminPanelHeader">
          <div>
            <span>Access grants</span>
            <strong>Invite-коды для теста</strong>
          </div>
        </div>
        <div className="adminInviteRows">
          {invites.map((invite) => (
            <div key={invite.id}>
              <span>
                {invite.id} · {invite.role} · {invite.status}
              </span>
              <strong>{invite.code}</strong>
              <p>{invite.note}</p>
              <em>
                {invite.used}/{invite.seats} used · expires {invite.expiresAt}
              </em>
            </div>
          ))}
        </div>
      </article>

      <article className="adminPanel adminWidePanel">
        <div className="adminPanelHeader">
          <div>
            <span>User registry</span>
            <strong>Пользователи и доступы</strong>
          </div>
          <select
            className="adminFilterSelect"
            onChange={(event) => setSelectedPlan(event.target.value as PlanFilter)}
            value={selectedPlan}
          >
            <option value="all">All users</option>
            <option value="free_tester">Free testers</option>
            <option value="trial">Trial</option>
            <option value="paid">Paid</option>
            <option value="internal">Internal</option>
          </select>
        </div>
        <div className="managedUserRows">
          {filteredUsers.map((user) => (
            <div key={user.id}>
              <span>
                {user.role} · {user.status} · {user.plan}
              </span>
              <strong>{user.displayName}</strong>
              <p>{user.login}</p>
              <em>{user.notes}</em>
              <div className="userActionRow">
                <button onClick={() => setUserPlan(user.id, "free_tester")} type="button">
                  Free
                </button>
                <button onClick={() => setUserPlan(user.id, "trial")} type="button">
                  Trial
                </button>
                <button onClick={() => setUserPlan(user.id, "paid")} type="button">
                  Paid
                </button>
                <button onClick={() => setUserStatus(user.id, "active")} type="button">
                  Activate
                </button>
                <button onClick={() => pauseUser(user.id)} type="button">
                  Pause
                </button>
                <button onClick={() => setUserStatus(user.id, "blocked")} type="button">
                  Block
                </button>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
