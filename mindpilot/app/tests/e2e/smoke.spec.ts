import { expect, test } from "@playwright/test";

const publicRoutes = [
  { path: "/", text: "MindPilot" },
  { path: "/login", text: "MindPilot" },
  { path: "/courses", text: "Курсы встроены" },
  { path: "/register", text: "MindPilot" },
  { path: "/operator/courses", text: "Траектория оператора", session: "operator_alpha" },
  { path: "/operator/mindscan", text: "MindScan", session: "operator_alpha" },
  { path: "/operator/dashboard", text: "Серия дней", session: "operator_alpha" },
  { path: "/operator/mission/2", text: "Анатомия ошибки", session: "operator_alpha" },
  { path: "/operator/mentor", text: "Напиши наставнику", session: "operator_alpha" },
  { path: "/operator/profile", text: "Метрики оператора", session: "operator_alpha" },
  { path: "/parent/dashboard", text: "Parent dashboard", session: "parent_alpha" },
  { path: "/admin", text: "Что требует внимания сейчас", session: "admin_alpha" },
  { path: "/admin/users", text: "бесплатными тестерами", session: "admin_alpha" },
  { path: "/admin/operators", text: "Операторы", session: "admin_alpha" },
  { path: "/admin/operators/operator_alpha", text: "Карта подхода", session: "admin_alpha" },
  { path: "/admin/courses", text: "Курсы должны", session: "admin_alpha" },
  { path: "/admin/mentor", text: "Наставник должен проходить тесты", session: "admin_alpha" },
  { path: "/admin/safety", text: "Очередь безопасности", session: "admin_alpha" },
  { path: "/admin/parents", text: "Родительский аккаунт", session: "admin_alpha" },
  { path: "/admin/analytics", text: "Метрики нужны", session: "admin_alpha" },
  { path: "/admin/tasks", text: "Задачи", session: "admin_alpha" },
  { path: "/admin/settings", text: "Настройки", session: "admin_alpha" },
  { path: "/terms", text: "Terms" },
  { path: "/privacy", text: "Privacy" },
  { path: "/parent-consent", text: "Parent Consent" },
  { path: "/child-safety-policy", text: "Child Safety" }
];

test.describe("MindPilot route smoke", () => {
  for (const route of publicRoutes) {
    test(`${route.path} renders`, async ({ page }) => {
      if (route.session) {
        await page.context().addCookies([
          {
            name: "mindpilot_session",
            value: route.session,
            domain: "127.0.0.1",
            path: "/"
          }
        ]);
      }

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

  await page.getByLabel(/Логин|Login|כניסה/).fill("operator-alpha");
  await page.getByLabel(/Пароль|Password|סיסמה/).fill("1234");
  await page.getByRole("button", { name: /Войти|Log in|כניסה/ }).click();

  await expect(page).toHaveURL(/\/operator\/dashboard$/);
});

test("unified login routes admin account to command center", async ({ page }) => {
  await page.goto("/login");

  await page.getByLabel(/Логин|Login|כניסה/).fill("admin@mindpilot.local");
  await page.getByLabel(/Пароль|Password|סיסמה/).fill("admin");
  await page.getByRole("button", { name: /Войти|Log in|כניסה/ }).click();

  await expect(page).toHaveURL(/\/admin$/);
});
