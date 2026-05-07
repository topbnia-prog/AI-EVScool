export type AgeBranch = "junior" | "senior";

export type MissionStatus = "completed" | "active" | "locked";

export type UserRole = "parent" | "operator" | "admin";

export type CourseStatus = "active" | "locked" | "draft";

export type CourseAudience = "operator" | "parent" | "admin";

export type MentorIntent =
  | "mission_guidance"
  | "reflection_guidance"
  | "homework_boundary"
  | "out_of_context_redirect"
  | "safety_fallback";

export type SafetySeverity = "info" | "low" | "medium" | "high";

export type AdminAttentionArea =
  | "Safety"
  | "Operators"
  | "Courses"
  | "Mentor"
  | "Parents"
  | "Legal"
  | "Billing"
  | "System";

export type OperatorMetric = {
  id: string;
  label: string;
  value: number;
  previous: number;
};

export type ParentInsight = {
  learningStyle: string;
  motivation: string;
  frustrationSignal: string;
  parentGoal: string;
  supportNote: string;
};

export type MindScanProfile = {
  confidenceWithAi: string;
  preferredPace: string;
  challengeStyle: string;
  communicationStyle: string;
  curiosityTopics: string[];
  firstLessonApproach: string;
};

export type AdminChildProfile = {
  headline: string;
  approach: string;
  motivators: string[];
  risks: string[];
  mentorTone: string;
  firstSessionPlan: string[];
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
  parentInsight: ParentInsight;
  mindScan: MindScanProfile;
  adminProfile: AdminChildProfile;
  activeCourseId: string;
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

export type CourseLesson = {
  id: string;
  number: number;
  title: string;
  concept: string;
  metricFocus: string;
  status: MissionStatus;
  estimatedMinutes: string;
};

export type Course = {
  id: string;
  order: number;
  slug: string;
  title: string;
  subtitle: string;
  audience: CourseAudience[];
  status: CourseStatus;
  durationDays: number;
  requiredCourseId?: string;
  promise: string;
  childPitch: string;
  parentPitch: string;
  sourceFolder: string;
  metrics: string[];
  lessons: CourseLesson[];
};

export type CourseEnrollment = {
  operatorId: string;
  courseId: string;
  status: "not_started" | "active" | "completed" | "locked";
  completedLessons: number;
  activeLessonNumber: number;
  streakDays: number;
};

export type AuthAccount = {
  id: string;
  role: UserRole;
  identifier: string;
  displayName: string;
  passwordHint: string;
  redirectTo: string;
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

export type AdminKpi = {
  label: string;
  value: string;
  trend: string;
  tone: "good" | "watch" | "risk" | "neutral";
};

export type AdminAttentionItem = {
  id: string;
  priority: "Critical" | "High" | "Medium" | "Low";
  area: AdminAttentionArea;
  title: string;
  detail: string;
  owner: string;
  href: string;
};

export type AdminAuditLog = {
  id: string;
  actor: string;
  action: string;
  target: string;
  time: string;
  severity: SafetySeverity;
};

export type MentorBehaviorTest = {
  id: string;
  category: "Homework" | "Reflection" | "Safety" | "Out of context" | "Personal data";
  prompt: string;
  expectedBehavior: string;
  status: "passing" | "needs_review" | "missing";
  lastRun: string;
};

export type AdminParentRecord = {
  id: string;
  displayName: string;
  email: string;
  operators: string[];
  consentStatus: ParentAccount["consentStatus"];
  billingStatus: ParentAccount["billingStatus"];
  weeklySummaryStatus: "ready" | "draft" | "blocked";
  nextAction: string;
};

export type AnalyticsFunnelStep = {
  label: string;
  count: number;
  conversion: string;
};

export type PlatformSetting = {
  key: string;
  value: string;
  status: "ok" | "review" | "blocked";
  note: string;
};

export type SafetyAlert = {
  id: string;
  operatorId: string;
  severity: SafetySeverity;
  category: string;
  summary: string;
  status: "open" | "reviewing" | "resolved";
};
