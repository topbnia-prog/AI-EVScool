export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      access_grants: {
        Row: {
          access_until: string | null;
          created_at: string;
          id: string;
          notes: string | null;
          plan: "free_tester" | "trial" | "paid" | "internal";
          status: "active" | "paused" | "blocked";
          user_id: string;
        };
        Insert: {
          access_until?: string | null;
          created_at?: string;
          id?: string;
          notes?: string | null;
          plan?: "free_tester" | "trial" | "paid" | "internal";
          status?: "active" | "paused" | "blocked";
          user_id: string;
        };
        Update: Partial<Database["public"]["Tables"]["access_grants"]["Insert"]>;
        Relationships: [];
      };
      access_invites: {
        Row: {
          code: string;
          created_at: string;
          expires_at: string | null;
          id: string;
          note: string | null;
          plan: "free_tester" | "trial" | "paid" | "internal";
          role: "parent" | "operator" | "admin";
          seats: number;
          status: "active" | "expired" | "disabled";
          used: number;
        };
        Insert: {
          code: string;
          created_at?: string;
          expires_at?: string | null;
          id?: string;
          note?: string | null;
          plan?: "free_tester" | "trial" | "paid" | "internal";
          role: "parent" | "operator" | "admin";
          seats?: number;
          status?: "active" | "expired" | "disabled";
          used?: number;
        };
        Update: Partial<Database["public"]["Tables"]["access_invites"]["Insert"]>;
        Relationships: [];
      };
      admin_audit_logs: {
        Row: {
          actor_user_id: string | null;
          action: string;
          created_at: string;
          details: Json;
          id: string;
          target_id: string | null;
          target_table: string | null;
        };
        Insert: {
          actor_user_id?: string | null;
          action: string;
          created_at?: string;
          details?: Json;
          id?: string;
          target_id?: string | null;
          target_table?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["admin_audit_logs"]["Insert"]>;
        Relationships: [];
      };
      operator_profiles: {
        Row: {
          active_course_id: string | null;
          admin_profile: Json;
          age: number | null;
          age_branch: "junior" | "senior";
          auth_user_id: string | null;
          created_at: string;
          daily_mission_limit: number;
          display_name: string;
          id: string;
          interests: string[];
          language: "ru" | "he" | "en";
          learning_goal: string | null;
          mindscan: Json;
          parent_id: string;
          rank: string;
          streak_best: number;
          streak_current: number;
          updated_at: string;
        };
        Insert: {
          active_course_id?: string | null;
          admin_profile?: Json;
          age?: number | null;
          age_branch?: "junior" | "senior";
          auth_user_id?: string | null;
          created_at?: string;
          daily_mission_limit?: number;
          display_name: string;
          id?: string;
          interests?: string[];
          language?: "ru" | "he" | "en";
          learning_goal?: string | null;
          mindscan?: Json;
          parent_id: string;
          rank?: string;
          streak_best?: number;
          streak_current?: number;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["operator_profiles"]["Insert"]>;
        Relationships: [];
      };
      parent_accounts: {
        Row: {
          billing_status: "free" | "trial" | "paid" | "past_due";
          consent_status: "accepted" | "missing" | "expired";
          created_at: string;
          display_name: string;
          email: string;
          id: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          billing_status?: "free" | "trial" | "paid" | "past_due";
          consent_status?: "accepted" | "missing" | "expired";
          created_at?: string;
          display_name: string;
          email: string;
          id?: string;
          updated_at?: string;
          user_id: string;
        };
        Update: Partial<Database["public"]["Tables"]["parent_accounts"]["Insert"]>;
        Relationships: [];
      };
      profiles: {
        Row: {
          created_at: string;
          display_name: string;
          id: string;
          role: "parent" | "operator" | "admin";
          status: "active" | "invited" | "paused" | "blocked";
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          display_name: string;
          id: string;
          role?: "parent" | "operator" | "admin";
          status?: "active" | "invited" | "paused" | "blocked";
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Insert"]>;
        Relationships: [];
      };
      safety_events: {
        Row: {
          category: string;
          created_at: string;
          id: string;
          mentor_response: string | null;
          operator_id: string | null;
          parent_notified: boolean;
          resolved_at: string | null;
          severity: "info" | "low" | "medium" | "high";
          status: "open" | "reviewing" | "resolved";
          trigger_text: string | null;
        };
        Insert: {
          category: string;
          created_at?: string;
          id?: string;
          mentor_response?: string | null;
          operator_id?: string | null;
          parent_notified?: boolean;
          resolved_at?: string | null;
          severity?: "info" | "low" | "medium" | "high";
          status?: "open" | "reviewing" | "resolved";
          trigger_text?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["safety_events"]["Insert"]>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: {
      is_admin: {
        Args: { uid?: string };
        Returns: boolean;
      };
      touch_updated_at: {
        Args: Record<string, never>;
        Returns: unknown;
      };
    };
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
