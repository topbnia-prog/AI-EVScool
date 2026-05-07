import type { AuthAccount, UserRole } from "./types";

export const sessionCookieName = "mindpilot_session";
export const sessionStorageKey = "mindpilot.session";
export const sessionMaxAgeSeconds = 60 * 60 * 24 * 30;

export type ClientSession = Pick<AuthAccount, "id" | "role" | "identifier" | "displayName" | "redirectTo"> & {
  createdAt: string;
};

export function createClientSession(account: AuthAccount): ClientSession {
  return {
    id: account.id,
    role: account.role,
    identifier: account.identifier,
    displayName: account.displayName,
    redirectTo: account.redirectTo,
    createdAt: new Date().toISOString()
  };
}

export function getRoleHome(role: UserRole) {
  if (role === "admin") return "/admin";
  if (role === "parent") return "/parent/dashboard";
  return "/operator/dashboard";
}
