export type Language = "ru" | "he" | "en";

export const supportedLanguages: Language[] = ["ru", "he", "en"];
export const languageStorageKey = "mindpilot_language";
export const languageCookieName = "mindpilot_language";
export const languageMaxAgeSeconds = 60 * 60 * 24 * 365;

export function normalizeLanguage(value: string | undefined | null): Language | undefined {
  if (!value) return undefined;
  const normalized = value.toLowerCase().split("-")[0] as Language;
  return supportedLanguages.includes(normalized) ? normalized : undefined;
}

export function fallbackLanguage(value: string | undefined | null, fallback: Language = "en"): Language {
  return normalizeLanguage(value) ?? fallback;
}
