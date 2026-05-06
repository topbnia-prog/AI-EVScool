const missions = [
  {
    id: "01",
    title: "Demystification",
    status: "Ready",
    copy: "AI is a tool that predicts, not a mind that knows."
  },
  {
    id: "02",
    title: "Anatomy of an Error",
    status: "Ready",
    copy: "Confidence is not proof. Operators verify."
  },
  {
    id: "03",
    title: "Prompt Structure",
    status: "Next",
    copy: "Context, goal, constraints, and format."
  }
];

const metrics = [
  "AI Understanding",
  "Critical Thinking",
  "Prompt Quality",
  "Verification",
  "Error Detection",
  "Autonomy"
];

export default function Home() {
  return (
    <main className="shell">
      <section className="hero">
        <div className="eyebrow">MindPilot MVP cockpit</div>
        <h1>Think clearly. Command AI.</h1>
        <p>
          A mission-based AI literacy platform for young operators. The first
          build is ready for Vercel deployment and will grow into the child,
          parent, and admin dashboards.
        </p>
        <div className="heroActions">
          <a href="#missions">View missions</a>
          <a href="#system" className="secondary">
            System status
          </a>
        </div>
      </section>

      <section className="grid" id="system">
        <article className="panel statusPanel">
          <div className="panelLabel">Deployment</div>
          <h2>Project shell is online-ready</h2>
          <p>
            Next.js App Router, TypeScript, and MindPilot design tokens are in
            place. Supabase, Claude, and PayPal connect after the documentation
            gate.
          </p>
          <div className="statusList">
            <span>Clean public repo</span>
            <span>Vercel root: mindpilot/app</span>
            <span>No private child data</span>
          </div>
        </article>

        <article className="panel">
          <div className="panelLabel">Operator metrics</div>
          <div className="metrics">
            {metrics.map((metric, index) => (
              <div className="metric" key={metric}>
                <span>{metric}</span>
                <div className="bar">
                  <i style={{ width: `${38 + index * 7}%` }} />
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="missions" id="missions">
        <div className="sectionHeader">
          <div className="eyebrow">First trajectory</div>
          <h2>Free tier missions</h2>
        </div>
        <div className="missionGrid">
          {missions.map((mission) => (
            <article className="missionCard" key={mission.id}>
              <div className="missionTop">
                <span>Mission {mission.id}</span>
                <strong>{mission.status}</strong>
              </div>
              <h3>{mission.title}</h3>
              <p>{mission.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
