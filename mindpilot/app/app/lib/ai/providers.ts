export type AiProviderId = "mock" | "openai" | "anthropic" | "gemini" | "custom";

export type AiProviderConfig = {
  id: AiProviderId;
  label: string;
  apiKeyEnv: string | null;
  defaultModel: string;
  supportsStructuredOutput: boolean;
  supportsSafetyLayer: boolean;
  notes: string;
};

export const aiProviders: Record<AiProviderId, AiProviderConfig> = {
  mock: {
    id: "mock",
    label: "Local mock mentor",
    apiKeyEnv: null,
    defaultModel: "mindpilot-mock",
    supportsStructuredOutput: true,
    supportsSafetyLayer: true,
    notes: "Used for local development, demos, and tests without sending child data to an AI API."
  },
  openai: {
    id: "openai",
    label: "OpenAI",
    apiKeyEnv: "OPENAI_API_KEY",
    defaultModel: "gpt-5-mini",
    supportsStructuredOutput: true,
    supportsSafetyLayer: true,
    notes: "Good default candidate for moderation, structured outputs, and production guardrails."
  },
  anthropic: {
    id: "anthropic",
    label: "Anthropic Claude",
    apiKeyEnv: "ANTHROPIC_API_KEY",
    defaultModel: "claude-sonnet-4-6",
    supportsStructuredOutput: true,
    supportsSafetyLayer: false,
    notes: "Optional mentor provider. Useful to compare Socratic behavior against other models."
  },
  gemini: {
    id: "gemini",
    label: "Google Gemini",
    apiKeyEnv: "GEMINI_API_KEY",
    defaultModel: "gemini-2.5-flash",
    supportsStructuredOutput: true,
    supportsSafetyLayer: false,
    notes: "Optional provider for price, speed, and multilingual behavior tests."
  },
  custom: {
    id: "custom",
    label: "Custom provider",
    apiKeyEnv: "AI_CUSTOM_API_KEY",
    defaultModel: "custom-mentor-model",
    supportsStructuredOutput: false,
    supportsSafetyLayer: false,
    notes: "Adapter slot for another API, local model, or future hosted mentor service."
  }
};

export function getConfiguredAiProvider(): AiProviderConfig {
  const providerId = (process.env.AI_PROVIDER ?? "mock").toLowerCase() as AiProviderId;

  return aiProviders[providerId] ?? aiProviders.mock;
}

export function getConfiguredAiModel(): string {
  const provider = getConfiguredAiProvider();

  return process.env.AI_MODEL || provider.defaultModel;
}
