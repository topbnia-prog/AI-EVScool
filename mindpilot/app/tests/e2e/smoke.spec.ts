import { expect, test } from "@playwright/test";

const publicRoutes = [
  { path: "/", text: "MindPilot" },
  { path: "/login", text: "Вход" },
  { path: "/courses", text: "Курсы встроены" },
  { path: "/register", text: "родителя" },
  { path: "/operator/courses", text: "Траектория оператора" },
  { path: "/operator/mindscan", text: "MindScan" },
  { path: "/operator/dashboard", text: "Серия дней" },
  { path: "/operator/mission/2", text: "Анатомия ошибки" },
  { path: "/operator/mentor", text: "Напиши наставнику" },
  { path: "/operator/profile", text: "Метрики оператора" },
  { path: "/parent/dashboard", text: "Parent dashboard" },
  { path: "/admin", text: "Что требует внимания сейчас" },
  { path: "/admin/operators", text: "Операторы" },
  { path: "/admin/operators/operator_alpha", text: "Карта подхода" },
  { path: "/admin/courses", text: "Курсы должны" },
  { path: "/admin/mentor", text: "Наставник должен проходить тесты" },
  { path: "/admin/safety", text: "Очередь безопасности" },
  { path: "/admin/parents", text: "Родительский аккаунт" },
  { path: "/admin/analytics", text: "Метрики нужны" },
  { path: "/admin/tasks", text: "Задачи" },
  { path: "/admin/settings", text: "Настройки" },
  { path: "/terms", text: "Terms" },
  { path: "/privacy", text: "Privacy" },
  { path: "/parent-consent", text: "Parent Consent" },
  { path: "/child-safety-policy", text: "Child Safety" }
];

test.describe("MindPilot route smoke", () => {
  for (const route of publicRoutes) {
    test(`${route.path} renders`, async ({ page }) => {
      const response = await page.goto(route.path);

      expect(response?.ok()).toBeTruthy();
      await expect(page.getByText(route.text).first()).toBeVisible();
    });
  }
});

test("parent registration leads to child MindScan", async ({ page }) => {
  await page.goto("/register");

  await expect(page.getByRole("link", { name: /MindScan/i })).toHaveAttribute(
    "href",
    "/operator/mindscan"
  );
});

test("unified login routes operator account to operator dashboard", async ({ page }) => {
  await page.goto("/login");

  await page.getByLabel("Логин").fill("operator-alpha");
  await page.getByLabel("Пароль").fill("1234");
  await page.getByRole("button", { name: "Войти" }).click();

  await expect(page).toHaveURL(/\/operator\/dashboard$/);
});

test("unified login routes admin account to command center", async ({ page }) => {
  await page.goto("/login");

  await page.getByLabel("Логин").fill("admin@mindpilot.local");
  await page.getByLabel("Пароль").fill("admin");
  await page.getByRole("button", { name: "Войти" }).click();

  await expect(page).toHaveURL(/\/admin$/);
});
