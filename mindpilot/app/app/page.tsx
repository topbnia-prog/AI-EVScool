const parentSignals = [
  "AI literacy for ages 10-16",
  "Parent-owned account",
  "Hebrew MVP course",
  "No homework automation"
];

const missionPath = [
  {
    day: "01",
    title: "AI is not magic",
    focus: "The operator learns that AI predicts patterns and can be wrong."
  },
  {
    day: "02",
    title: "Catch the confident error",
    focus: "Confidence becomes a signal to verify, not a reason to trust."
  },
  {
    day: "03",
    title: "Build the command",
    focus: "Context, goal, constraints, and format turn a question into control."
  }
];

const metrics = [
  { label: "AI understanding", value: 72 },
  { label: "Critical thinking", value: 64 },
  { label: "Prompt quality", value: 58 },
  { label: "Verification", value: 69 },
  { label: "Error detection", value: 61 },
  { label: "Autonomy", value: 76 }
];

const safetyRules = [
  "Guiding questions instead of ready answers",
  "No schoolwork completion",
  "No public leaderboards",
  "Parent consent before child access"
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="heroScene" aria-hidden="true">
          <div className="scanline" />
          <div className="orbit orbitOne" />
          <div className="orbit orbitTwo" />
          <div className="node nodeA" />
          <div className="node nodeB" />
          <div className="node nodeC" />
          <div className="cockpitPanel">
            <div className="panelTop">
              <span>OPERATOR 01</span>
              <strong>MISSION ACTIVE</strong>
            </div>
            <div className="promptLine">Ask - verify - improve - decide</div>
            <div className="signalRows">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>

        <nav className="nav">
          <a href="#" className="brand">
            MindPilot
          </a>
          <div className="navLinks">
            <a href="#course">Course</a>
            <a href="#safety">Safety</a>
            <a href="#pilot">Pilot</a>
          </div>
        </nav>

        <div className="heroContent">
          <p className="eyebrow">AI literacy for young operators</p>
          <h1>MindPilot</h1>
          <p className="lead">
            A mission-based platform that teaches children to command AI, check
            its answers, and keep their own thinking in control.
          </p>
          <div className="heroActions" aria-label="Primary actions">
            <a href="#pilot">Start pilot review</a>
            <a href="#course" className="secondary">
              View 30-day path
            </a>
          </div>
          <div className="signalList">
            {parentSignals.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section introBand">
        <div>
          <p className="eyebrow">The parent problem</p>
          <h2>Children already use AI. Most were never taught how to think with it.</h2>
        </div>
        <p>
          MindPilot turns AI use into a guided practice: the child learns to
          question confident answers, ask for evidence, build better prompts,
          and decide what should stay human.
        </p>
      </section>

      <section className="section courseSection" id="course">
        <div className="sectionHeader">
          <p className="eyebrow">First course</p>
          <h2>30 days, one operator habit at a time.</h2>
        </div>
        <div className="missionGrid">
          {missionPath.map((mission) => (
            <article className="missionCard" key={mission.day}>
              <span>Mission {mission.day}</span>
              <h3>{mission.title}</h3>
              <p>{mission.focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section cockpitSection">
        <div className="operatorSurface">
          <div className="surfaceHeader">
            <div>
              <span className="eyebrow">Pilot profile</span>
              <h2>Progress without grades.</h2>
            </div>
            <strong>Rank: Navigator</strong>
          </div>
          <div className="metricsGrid">
            {metrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <span>{metric.label}</span>
                <div className="bar">
                  <i style={{ width: `${metric.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section safetySection" id="safety">
        <div>
          <p className="eyebrow">Guardrails</p>
          <h2>Designed to build independence, not dependency.</h2>
        </div>
        <div className="ruleList">
          {safetyRules.map((rule) => (
            <div className="rule" key={rule}>
              {rule}
            </div>
          ))}
        </div>
      </section>

      <section className="section pilotSection" id="pilot">
        <div>
          <p className="eyebrow">MVP direction</p>
          <h2>The first build stays local-first until the product is ready.</h2>
          <p>
            Next step: turn this landing page into a real flow with parent
            signup, operator dashboard, mission runner, mentor chat, and admin
            safety controls.
          </p>
        </div>
        <a href="#top" className="finalCta">
          Back to cockpit
        </a>
      </section>
    </main>
  );
}
