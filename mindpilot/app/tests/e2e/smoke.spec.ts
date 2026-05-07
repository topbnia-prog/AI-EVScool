import { expect, test } from "@playwright/test";

const publicRoutes = [
  { path: "/", text: "MindPilot" },
  { path: "/login", text: "Вход" },
  { path: "/register", text: "родителя" },
  { path: "/operator/mindscan", text: "MindScan" },
  { path: "/operator/dashboard", text: "Серия дней" },
  { path: "/operator/mission/2", text: "Анатомия ошибки" },
  { path: "/operator/mentor", text: "Напиши наставнику" },
  { path: "/operator/profile", text: "Метрики оператора" },
  { path: "/parent/dashboard", text: "Parent dashboard" },
  { path: "/admin/operators", text: "Операторы" },
  { path: "/admin/operators/operator_alpha", text: "Карта подхода" },
  { path: "/admin/safety", text: "Safety" },
  { path: "/admin/tasks", text: "Задачи" },
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
