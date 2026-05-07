"use client";

import { FormEvent, useState } from "react";
import { authAccounts, resolveAccount, roleLabels } from "../lib/auth";

export function SmartLoginForm() {
  const [identifier, setIdentifier] = useState("operator-alpha");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("Введите логин и пароль. Роль система определит сама.");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const account = resolveAccount(identifier);

    if (!account) {
      setMessage("Аккаунт не найден. Проверьте логин родителя, код оператора или admin email.");
      return;
    }

    if (!password.trim()) {
      setMessage("Введите пароль. Для демо можно использовать подсказку рядом с аккаунтом.");
      return;
    }

    setMessage(`Роль распознана: ${roleLabels[account.role]}. Открываю нужную зону.`);
    window.location.assign(account.redirectTo);
  }

  return (
    <form className="academyForm smartLoginForm" onSubmit={handleSubmit}>
      <label>
        Логин
        <input
          autoComplete="username"
          onChange={(event) => setIdentifier(event.target.value)}
          placeholder="email родителя или код оператора"
          value={identifier}
        />
      </label>
      <label>
        Пароль
        <input
          autoComplete="current-password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="пароль"
          type="password"
          value={password}
        />
      </label>
      <button className="academySubmit" type="submit">
        Войти
      </button>
      <p className="loginSystemMessage">{message}</p>
      <div className="loginDemoAccounts" aria-label="Демо-аккаунты">
        {authAccounts.map((account) => (
          <button
            key={account.id}
            onClick={() => {
              setIdentifier(account.identifier);
              setPassword(account.passwordHint);
              setMessage(`Выбран демо-аккаунт. Система распознает: ${roleLabels[account.role]}.`);
            }}
            type="button"
          >
            <span>{roleLabels[account.role]}</span>
            <strong>{account.identifier}</strong>
            <small>пароль: {account.passwordHint}</small>
          </button>
        ))}
      </div>
    </form>
  );
}
