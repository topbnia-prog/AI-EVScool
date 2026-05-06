type LegalSection = {
  title: string;
  body?: string[];
  bullets?: string[];
};

type LegalDocumentProps = {
  title: string;
  label: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalDocument({
  title,
  label,
  updated,
  intro,
  sections
}: LegalDocumentProps) {
  return (
    <main className="legalPage">
      <nav className="legalNav">
        <a href="/" className="brand">
          MindPilot
        </a>
        <div className="legalNavLinks">
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
          <a href="/parent-consent">Parent Consent</a>
          <a href="/child-safety-policy">Child Safety</a>
        </div>
      </nav>

      <article className="legalDocument">
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
        <p className="legalUpdated">Обновлено: {updated}</p>
        <p className="legalIntro">{intro}</p>

        <div className="legalNotice">
          Это рабочий черновик для MVP. Перед платным запуском в Израиле текст
          должен быть проверен израильским адвокатом.
        </div>

        {sections.map((section) => (
          <section className="legalSection" key={section.title}>
            <h2>{section.title}</h2>
            {section.body?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets ? (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </article>
    </main>
  );
}
