import type { ReactNode } from "react";

const adminNavItems = [
  { href: "/admin", label: "Command" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/operators", label: "Operators" },
  { href: "/admin/courses", label: "Courses" },
  { href: "/admin/mentor", label: "Mentor" },
  { href: "/admin/safety", label: "Safety" },
  { href: "/admin/parents", label: "Parents" },
  { href: "/admin/analytics", label: "Analytics" },
  { href: "/admin/tasks", label: "Tasks" },
  { href: "/admin/settings", label: "Settings" }
];

type AdminShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function AdminShell({ eyebrow, title, description, children }: AdminShellProps) {
  return (
    <main className="adminShellPage">
      <aside className="adminSidebar">
        <a className="adminBrand" href="/admin">
          <span>MindPilot</span>
          <strong>Admin OS</strong>
        </a>
        <nav>
          {adminNavItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="adminDeployLock">
          <span>Deploy lock</span>
          <strong>Только по запросу владельца</strong>
        </div>
      </aside>

      <section className="adminWorkspace">
        <header className="adminWorkspaceHeader">
          <div>
            <p className="academyKicker">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div className="adminHeaderActions">
            <a href="/login">Login</a>
            <a href="/">Site</a>
          </div>
        </header>
        {children}
      </section>
    </main>
  );
}
