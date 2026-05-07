type OperatorBase3DLabels = {
  aria?: string;
  main?: string;
  side?: string;
  mission?: string;
};

type MentorCore3DLabels = {
  aria?: string;
  questionOne?: string;
  questionTwo?: string;
};

type GrowthRadar3DLabels = {
  aria?: string;
  top?: string;
  right?: string;
  bottom?: string;
};

type SafetyCube3DLabels = {
  aria?: string;
  front?: string;
};

type MissionLab3DLabels = {
  aria?: string;
  mission?: string;
  source?: string;
  check?: string;
};

export function OperatorBase3D({
  aria = "Operator base visual",
  main = "Base",
  side = "XP",
  mission = "Mission 2"
}: OperatorBase3DLabels = {}) {
  return (
    <div className="mp3dScene mp3dBaseScene" aria-label={aria}>
      <div className="mp3dGlow" />
      <div className="mp3dPlatform">
        <div className="mp3dTower main">
          <span />
          <strong>{main}</strong>
        </div>
        <div className="mp3dTower side">
          <span />
          <strong>{side}</strong>
        </div>
        <div className="mp3dPanel">
          <b>{mission}</b>
          <i />
          <i />
          <i />
        </div>
        <div className="mp3dPath">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export function MentorCore3D({
  aria = "AI mentor visual",
  questionOne = "Why?",
  questionTwo = "What did you verify?"
}: MentorCore3DLabels = {}) {
  return (
    <div className="mp3dScene mp3dMentorScene" aria-label={aria}>
      <div className="mp3dHalo" />
      <div className="mp3dMentorCore">
        <span />
        <span />
        <i />
      </div>
      <div className="mp3dQuestionCard one">{questionOne}</div>
      <div className="mp3dQuestionCard two">{questionTwo}</div>
    </div>
  );
}

export function GrowthRadar3D({
  aria = "Skill radar visual",
  top = "Verify",
  right = "Prompts",
  bottom = "Autonomy"
}: GrowthRadar3DLabels = {}) {
  return (
    <div className="mp3dScene mp3dRadarScene" aria-label={aria}>
      <div className="mp3dRadar">
        <span />
        <span />
        <span />
        <span />
        <b />
      </div>
      <div className="mp3dMetricChip top">{top}</div>
      <div className="mp3dMetricChip right">{right}</div>
      <div className="mp3dMetricChip bottom">{bottom}</div>
    </div>
  );
}

export function SafetyCube3D({ aria = "Safety control visual", front = "Safety" }: SafetyCube3DLabels = {}) {
  return (
    <div className="mp3dScene mp3dSafetyScene" aria-label={aria}>
      <div className="mp3dCube">
        <span className="front">{front}</span>
        <span className="side" />
        <span className="top" />
      </div>
      <div className="mp3dShieldRing" />
    </div>
  );
}

export function MissionLab3D({
  aria = "Mission progress visual",
  mission = "Anatomy of Error",
  source = "source?",
  check = "verify"
}: MissionLab3DLabels = {}) {
  return (
    <div className="mp3dScene mp3dMissionScene" aria-label={aria}>
      <div className="mp3dMissionBoard">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
      </div>
      <div className="mp3dMissionCard">
        <b>{mission}</b>
        <i />
        <i />
        <i />
      </div>
      <div className="mp3dSourceChip">{source}</div>
      <div className="mp3dCheckChip">{check}</div>
    </div>
  );
}
