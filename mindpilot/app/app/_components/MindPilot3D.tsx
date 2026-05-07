export function OperatorBase3D() {
  return (
    <div className="mp3dScene mp3dBaseScene" aria-label="3D визуал личной базы оператора">
      <div className="mp3dGlow" />
      <div className="mp3dPlatform">
        <div className="mp3dTower main">
          <span />
          <strong>Base</strong>
        </div>
        <div className="mp3dTower side">
          <span />
          <strong>XP</strong>
        </div>
        <div className="mp3dPanel">
          <b>Миссия 2</b>
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

export function MentorCore3D() {
  return (
    <div className="mp3dScene mp3dMentorScene" aria-label="3D визуал AI-наставника">
      <div className="mp3dHalo" />
      <div className="mp3dMentorCore">
        <span />
        <span />
        <i />
      </div>
      <div className="mp3dQuestionCard one">Почему?</div>
      <div className="mp3dQuestionCard two">Что проверил?</div>
    </div>
  );
}

export function GrowthRadar3D() {
  return (
    <div className="mp3dScene mp3dRadarScene" aria-label="3D визуал радара навыков">
      <div className="mp3dRadar">
        <span />
        <span />
        <span />
        <span />
        <b />
      </div>
      <div className="mp3dMetricChip top">Проверка</div>
      <div className="mp3dMetricChip right">Промпты</div>
      <div className="mp3dMetricChip bottom">Автономность</div>
    </div>
  );
}

export function SafetyCube3D() {
  return (
    <div className="mp3dScene mp3dSafetyScene" aria-label="3D визуал safety контроля">
      <div className="mp3dCube">
        <span className="front">Safety</span>
        <span className="side" />
        <span className="top" />
      </div>
      <div className="mp3dShieldRing" />
    </div>
  );
}

export function MissionLab3D() {
  return (
    <div className="mp3dScene mp3dMissionScene" aria-label="3D визуал прохождения миссии">
      <div className="mp3dMissionBoard">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
      </div>
      <div className="mp3dMissionCard">
        <b>Анатомия ошибки</b>
        <i />
        <i />
        <i />
      </div>
      <div className="mp3dSourceChip">source?</div>
      <div className="mp3dCheckChip">проверка</div>
    </div>
  );
}
