import type { AccessInvite, ManagedUser } from "../types";
import { isSupabaseAdminConfigured } from "./env";
import { createSupabaseAdminClient } from "./admin";

export type AdminUsersDataset = {
  users: ManagedUser[];
  invites: AccessInvite[];
  source: "mock" | "supabase";
};

export async function getAdminUsersFromSupabase(): Promise<AdminUsersDataset | null> {
  if (!isSupabaseAdminConfigured()) {
    return null;
  }

  const supabase = createSupabaseAdminClient();

  const [{ data: profiles, error: profilesError }, { data: grants, error: grantsError }, { data: invites, error: invitesError }] =
    await Promise.all([
      supabase.from("profiles").select("id, role, display_name, status, created_at, updated_at"),
      supabase.from("access_grants").select("user_id, plan, status, access_until, notes, created_at"),
      supabase.from("access_invites").select("id, code, role, plan, seats, used, expires_at, status, note")
    ]);

  if (profilesError || grantsError || invitesError || !profiles || !grants || !invites) {
    return null;
  }

  const grantByUser = new Map(grants.map((grant) => [grant.user_id, grant]));

  return {
    source: "supabase",
    users: profiles.map((profile) => {
      const grant = grantByUser.get(profile.id);

      return {
        id: profile.id,
        role: profile.role,
        displayName: profile.display_name,
        login: profile.id,
        status: profile.status,
        plan: grant?.plan ?? (profile.role === "admin" ? "internal" : "trial"),
        accessUntil: grant?.access_until ?? "not set",
        createdAt: profile.created_at,
        lastSeen: profile.updated_at,
        notes: grant?.notes ?? "Supabase profile"
      };
    }),
    invites: invites.map((invite) => ({
      id: invite.id,
      code: invite.code,
      role: invite.role,
      plan: invite.plan,
      seats: invite.seats,
      used: invite.used,
      expiresAt: invite.expires_at ?? "no expiry",
      status: invite.status,
      note: invite.note ?? ""
    }))
  };
}
