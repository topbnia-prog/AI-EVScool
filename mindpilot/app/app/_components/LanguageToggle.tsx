"use client";

import {
  languageCookieName,
  languageMaxAgeSeconds,
  languageStorageKey,
  type Language,
  supportedLanguages
} from "../lib/language";

type LanguageToggleProps = {
  current: Language;
};

export function LanguageToggle({ current }: LanguageToggleProps) {
  function chooseLanguage(nextLanguage: Language) {
    window.localStorage.setItem(languageStorageKey, nextLanguage);
    document.cookie = `${languageCookieName}=${nextLanguage}; path=/; max-age=${languageMaxAgeSeconds}; samesite=lax`;
    window.location.reload();
  }

  return (
    <div className="languageToggle" aria-label="Language">
      {supportedLanguages.map((language) => (
        <button
          className={language === current ? "active" : ""}
          key={language}
          type="button"
          onClick={() => chooseLanguage(language)}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
