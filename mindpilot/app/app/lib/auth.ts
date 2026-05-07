import type { AuthAccount, UserRole } from "./types";

export const authAccounts: AuthAccount[] = [
  {
    id: "parent_alpha",
    role: "parent",
    identifier: "parent@example.com",
    displayName: "Родитель Alpha",
    passwordHint: "demo",
    redirectTo: "/parent/dashboard"
  },
  {
    id: "operator_alpha",
    role: "operator",
    identifier: "operator-alpha",
    displayName: "Operator Alpha",
    passwordHint: "1234",
    redirectTo: "/operator/dashboard"
  },
  {
    id: "admin_alpha",
    role: "admin",
    identifier: "admin@mindpilot.local",
    displayName: "MindPilot Admin",
    passwordHint: "admin",
    redirectTo: "/admin"
  },
  {
    id: "tester_parent_beta",
    role: "parent",
    identifier: "tester-parent@example.com",
    displayName: "Тестер Parent Beta",
    passwordHint: "free14",
    redirectTo: "/parent/dashboard"
  },
  {
    id: "tester_operator_beta",
    role: "operator",
    identifier: "tester-operator-beta",
    displayName: "Tester Operator Beta",
    passwordHint: "free14",
    redirectTo: "/operator/dashboard"
  }
];

export const roleLabels: Record<UserRole, string> = {
  parent: "Родитель",
  operator: "Оператор",
  admin: "Админ"
};

export function resolveAccount(identifier: string) {
  const normalized = identifier.trim().toLowerCase();

  return authAccounts.find((account) => account.identifier.toLowerCase() === normalized);
}
