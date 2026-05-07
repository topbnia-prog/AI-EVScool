"use client";

import { FormEvent, useState } from "react";
import { authAccounts, resolveAccount } from "../lib/auth";
import { type Language } from "../lib/language";
import { createClientSession, sessionCookieName, sessionMaxAgeSeconds, sessionStorageKey } from "../lib/session";

type SmartLoginFormProps = {
  language: Language;
};

const loginFormCopy = {
  ru: {
    labels: {
      identifier: "Логин",
      password: "Пароль",
      submit: "Войти",
      demoAccounts: "Демо-аккаунты"
    },
    placeholders: {
      identifier: "email родителя или код оператора",
      password: "пароль"
    },
    messages: {
      initial: "Введите логин и пароль. Роль система определит сама.",
      missingAccount: "Аккаунт не найден. Проверьте логин родителя, код оператора или admin email.",
      missingPassword: "Введите пароль. Для демо можно использовать подсказку рядом с аккаунтом.",
      wrongPassword: "Пароль не подходит к этому демо-аккаунту.",
      recognized: "Роль распознана. Открываю нужную зону.",
      selected: "Демо-аккаунт выбран."
    },
    roles: {
      parent: "Родитель",
      operator: "Оператор",
      admin: "Админ"
    },
    passwordHint: "пароль"
  },
  he: {
    labels: {
      identifier: "כניסה",
      password: "סיסמה",
      submit: "כניסה",
      demoAccounts: "חשבונות דמו"
    },
    placeholders: {
      identifier: "email של הורה או קוד מפעיל",
      password: "סיסמה"
    },
    messages: {
      initial: "הכניסו שם משתמש וסיסמה. המערכת תזהה את התפקיד לבד.",
      missingAccount: "החשבון לא נמצא. בדקו email של הורה, קוד מפעיל או admin email.",
      missingPassword: "הכניסו סיסמה. בדמו אפשר להשתמש ברמז שמופיע ליד החשבון.",
      wrongPassword: "הסיסמה לא מתאימה לחשבון הדמו הזה.",
      recognized: "התפקיד זוהה. פותח את האזור המתאים.",
      selected: "חשבון דמו נבחר."
    },
    roles: {
      parent: "הורה",
      operator: "מפעיל",
      admin: "אדמין"
    },
    passwordHint: "סיסמה"
  },
  en: {
    labels: {
      identifier: "Login",
      password: "Password",
      submit: "Log in",
      demoAccounts: "Demo accounts"
    },
    placeholders: {
      identifier: "parent email or operator code",
      password: "password"
    },
    messages: {
      initial: "Enter login and password. MindPilot will detect the role automatically.",
      missingAccount: "Account not found. Check parent login, operator code, or admin email.",
      missingPassword: "Enter a password. For demo, use the hint shown next to the account.",
      wrongPassword: "Password does not match this demo account.",
      recognized: "Role detected. Opening the correct zone.",
      selected: "Demo account selected."
    },
    roles: {
      parent: "Parent",
      operator: "Operator",
      admin: "Admin"
    },
    passwordHint: "password"
  }
} satisfies Record<Language, { [key: string]: any }>;

function persistSession(account: NonNullable<ReturnType<typeof resolveAccount>>) {
  const session = createClientSession(account);

  window.localStorage.setItem(sessionStorageKey, JSON.stringify(session));
  document.cookie = `${sessionCookieName}=${account.id}; path=/; max-age=${sessionMaxAgeSeconds}; samesite=lax`;
}

export function SmartLoginForm({ language }: SmartLoginFormProps) {
  const t = loginFormCopy[language];
  const [identifier, setIdentifier] = useState("operator-alpha");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(t.messages.initial);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const account = resolveAccount(identifier);

    if (!account) {
      setMessage(t.messages.missingAccount);
      return;
    }

    if (!password.trim()) {
      setMessage(t.messages.missingPassword);
      return;
    }

    if (password.trim() !== account.passwordHint) {
      setMessage(t.messages.wrongPassword);
      return;
    }

    setMessage(`${t.messages.recognized}: ${t.roles[account.role]}.`);
    persistSession(account);

    const nextPath = new URLSearchParams(window.location.search).get("next");
    window.location.assign(nextPath?.startsWith("/") ? nextPath : account.redirectTo);
  }

  return (
    <form className="academyForm smartLoginForm" onSubmit={handleSubmit}>
      <label>
        {t.labels.identifier}
        <input
          autoComplete="username"
          onChange={(event) => setIdentifier(event.target.value)}
          placeholder={t.placeholders.identifier}
          value={identifier}
        />
      </label>
      <label>
        {t.labels.password}
        <input
          autoComplete="current-password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder={t.placeholders.password}
          type="password"
          value={password}
        />
      </label>
      <button className="academySubmit" type="submit">
        {t.labels.submit}
      </button>
      <p className="loginSystemMessage">{message}</p>
      <div className="loginDemoAccounts" aria-label={t.labels.demoAccounts}>
        {authAccounts.map((account) => (
          <button
            key={account.id}
            onClick={() => {
              setIdentifier(account.identifier);
              setPassword(account.passwordHint);
              setMessage(`${t.messages.selected} ${t.roles[account.role]}.`);
            }}
            type="button"
          >
            <span>{t.roles[account.role]}</span>
            <strong>{account.identifier}</strong>
            <small>
              {t.passwordHint}: {account.passwordHint}
            </small>
          </button>
        ))}
      </div>
    </form>
  );
}
