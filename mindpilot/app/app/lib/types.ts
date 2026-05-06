export type AgeBranch = "junior" | "senior";

export type MissionStatus = "completed" | "active" | "locked";

export type MentorIntent =
  | "mission_guidance"
  | "reflection_guidance"
  | "homework_boundary"
  | "out_of_context_redirect"
  | "safety_fallback";

export type SafetySeverity = "info" | "low" | "medium" | "high";

export type OperatorMetric = {
  id: string;
  label: string;
  value: number;
  previous: number;
};

export type ParentAccount = {
  id: string;
  email: string;
  displayName: string;
  consentStatus: "accepted" | "missing" | "expired";
  billingStatus: "free" | "trial" | "paid" | "past_due";
};

export type OperatorProfile = {
  id: string;
  parentId: string;
  displayName: string;
  age: number;
  ageBranch: AgeBranch;
  language: "ru" | "he" | "en";
  rank: string;
  streakCurrent: number;
  streakBest: number;
  missionsCompletedToday: number;
  dailyMissionLimit: number;
  interests: string[];
  learningGoal: string;
  metrics: OperatorMetric[];
};

export type MissionStep = {
  id: string;
  label: string;
  title: string;
  body: string;
};

export type Mission = {
  id: string;
  number: number;
  title: string;
  concept: string;
  metricFocus: string;
  status: MissionStatus;
  estimatedMinutes: string;
  steps: MissionStep[];
};

export type MentorMessage = {
  role: "mentor" | "operator";
  text: string;
  intent?: MentorIntent;
};

export type MentorScenario = {
  intent: MentorIntent;
  label: string;
  trigger: string;
  response: string;
};

export type AdminTask = {
  id: string;
  priority: "High" | "Medium" | "Low";
  area: string;
  status: "Todo" | "Doing" | "Done";
  task: string;
};

export type SafetyAlert = {
  id: string;
  operatorId: string;
  severity: SafetySeverity;
  category: string;
  summary: string;
  status: "open" | "reviewing" | "resolved";
};
