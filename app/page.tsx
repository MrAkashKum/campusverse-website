const resourceCards = [
  {
    icon: '📚',
    title: 'Notes, PYQs & professor materials',
    text: 'Organise notes, last-year papers, assignments, lab manuals, professor slides and topic-wise resources by university, course, semester and subject.',
    chips: ['NUS', 'Polytechnic', 'Engineering', 'MBA', 'School'],
  },
  {
    icon: '⚡',
    title: 'Cheat sheets for last-minute revision',
    text: 'One-page formulas, important questions, diagrams, code snippets, MBA frameworks and exam summaries rated by students and verified by seniors.',
    chips: ['Formula sheets', 'Topic summary', 'Exam tips', 'Download PDF'],
  },
  {
    icon: '🎥',
    title: 'Trusted YouTube & Udemy reviews',
    text: 'Students can recommend creators, Udemy courses, GitHub repos, blogs and research papers with pros, cons, difficulty and usefulness.',
    chips: ['YouTube', 'Udemy', 'GitHub', 'Research papers'],
  },
  {
    icon: '🕸️',
    title: 'Friend-powered trust graph',
    text: 'See what your friends, seniors, toppers, professors and alumni recommend before you spend time learning from any resource.',
    chips: ['Friends', 'Seniors', 'Professors', 'Alumni'],
  },
  {
    icon: '💬',
    title: 'Feedback and comments',
    text: 'Every note, course, creator and professor page has comments, ratings, practical feedback and helpfulness votes.',
    chips: ['Comments', 'Ratings', 'Pros / Cons', 'Helpful votes'],
  },
  {
    icon: '🚀',
    title: 'Events and open source projects',
    text: 'Scale later into college events, hackathons, project teams, good-first-issues, club pages and campus communities.',
    chips: ['Hackathons', 'Clubs', 'Projects', 'Contributors'],
  },
];

const reviews = [
  {
    title: 'Neso Academy for Computer Networks',
    score: '4.9',
    meta: 'Recommended by 324 students',
    quote: 'Very clear for basics. Best before mid-semester revision and useful for repeated PYQ topics.',
  },
  {
    title: 'Udemy Data Analytics Bootcamp',
    score: '4.6',
    meta: 'Reviewed by MBA + Engineering learners',
    quote: 'Practical dashboard examples, beginner friendly, but students say some sections need updated content.',
  },
  {
    title: 'Senior Cheat Sheet: Operating Systems',
    score: '4.8',
    meta: 'Verified by 12 seniors',
    quote: 'One-page summary with scheduling, deadlock, memory management and exam-focused diagrams.',
  },
];

const launchSteps = [
  {
    title: 'Start with one campus and one department',
    text: 'For example: NUS School of Computing or one polytechnic engineering department. Do not launch everywhere first.',
  },
  {
    title: 'Collect high-value resources manually',
    text: 'Add 30–50 subjects with notes, PYQs, cheat sheets and trusted creator/course recommendations.',
  },
  {
    title: 'Invite ambassadors and seniors',
    text: 'Give verified badges, contributor points and public profiles to students who upload useful materials.',
  },
  {
    title: 'Add community reviews and events',
    text: 'Once resources are active, add comments, feedback, hackathons, open-source ideas and club pages.',
  },
];

const techStack = [
  ['Frontend', 'Next.js + React + CSS'],
  ['Database', 'PostgreSQL using Supabase or Neon'],
  ['Storage', 'Supabase Storage or Cloudflare R2'],
  ['Auth', 'Supabase Auth or Auth.js'],
  ['Search', 'Postgres full-text first, Meilisearch later'],
  ['Backend', 'Next.js API routes first, NestJS/FastAPI later'],
  ['Deployment', 'Vercel for frontend, Supabase/Neon for DB'],
  ['Analytics', 'PostHog or Vercel Analytics'],
];

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="nav">
        <a className="logo" href="#top" aria-label="CampusVerse home">
          <span className="logo-mark">CV</span>
          <span>CampusVerse</span>
        </a>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#trust">Trust Graph</a>
          <a href="#launch">Launch Plan</a>
          <a href="#tech">Tech Stack</a>
        </div>
        <a className="nav-cta" href="#waitlist">Join Waitlist</a>
      </nav>

      <section id="top" className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge">✨ Student knowledge network, not only notes storage</span>
            <h1>
              Discover what actually helps students <span className="gradient-text">study, pass and grow.</span>
            </h1>
            <p className="lead">
              CampusVerse is a trusted campus community for notes, question papers, cheat sheets, YouTube and Udemy reviews, professor resources, research papers, events and open-source collaboration.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#features">Explore Features →</a>
              <a className="btn btn-secondary" href="#launch">See Launch Plan</a>
            </div>
            <div className="stats-row" aria-label="Platform highlights">
              <div className="stat"><strong>10x</strong><span>Faster resource discovery before exams</span></div>
              <div className="stat"><strong>360°</strong><span>Notes, creators, courses, events and projects</span></div>
              <div className="stat"><strong>0→1</strong><span>Start with one college, scale globally</span></div>
            </div>
          </div>

          <div className="panel dashboard" aria-label="Product preview dashboard">
            <div className="search-card">
              <div className="search-bar">🔎 Search: “Operating Systems cheat sheet NUS CS”</div>
              <div className="subject-card">
                <div className="subject-header">
                  <div>
                    <strong>CS2106 Operating Systems</strong>
                    <p className="section-copy" style={{ fontSize: 14, margin: '7px 0 0' }}>Trusted resources ranked by friends, seniors and verified contributors.</p>
                  </div>
                  <span className="score">98 Trust</span>
                </div>
                <div className="resource-list">
                  <div className="resource-item"><b>⚡ Exam Cheat Sheet</b><span>4.8 ★</span></div>
                  <div className="resource-item"><b>📄 Last Year Papers</b><span>32 files</span></div>
                  <div className="resource-item"><b>🎥 Best YouTube Playlist</b><span>324 votes</span></div>
                  <div className="resource-item"><b>💬 Student Comments</b><span>86 tips</span></div>
                </div>
              </div>
            </div>
            <div id="trust" className="panel graph-card" aria-label="Trust graph visualization">
              <span className="line line-1" />
              <span className="line line-2" />
              <span className="line line-3" />
              <span className="line line-4" />
              <span className="node node-main">Trust<br />Graph</span>
              <span className="node node-a">Friends</span>
              <span className="node node-b">Seniors</span>
              <span className="node node-c">Prof</span>
              <span className="node node-d">Alumni</span>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="container">
          <span className="section-kicker">Core product</span>
          <h2>Built around trust, contribution and exam-time usefulness.</h2>
          <p className="section-copy">
            The platform should feel like GitHub + Notion + Reddit + Google Drive for students, but with a trust layer that shows which resource is actually worth using.
          </p>
          <div className="cards">
            {resourceCards.map((card, index) => (
              <article className={`feature-card ${index === 1 ? 'large' : ''}`} key={card.title}>
                <div className="icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <div className="chip-row">
                  {card.chips.map((chip) => <span className="chip" key={chip}>{chip}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="section-kicker">Community proof</span>
            <h2>Review YouTubers, Udemy courses, notes and cheat sheets.</h2>
            <p className="section-copy">
              Students do not only need files. They need confidence. A trusted recommendation from a friend or senior is more powerful than a random star rating.
            </p>
          </div>
          <div className="review-grid" style={{ gridTemplateColumns: '1fr' }}>
            {reviews.map((review) => (
              <article className="review" key={review.title}>
                <div className="review-top">
                  <small>{review.meta}</small>
                  <span className="stars">★ {review.score}</span>
                </div>
                <h3>{review.title}</h3>
                <p>“{review.quote}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="launch" className="section">
        <div className="container split">
          <div>
            <span className="section-kicker">Launch strategy</span>
            <h2>Start small, become the operating system for campus life.</h2>
            <p className="section-copy">
              The best launch path is not “all universities at once.” Win one campus community, build density, then copy the model to other colleges.
            </p>
          </div>
          <div className="timeline">
            {launchSteps.map((step, index) => (
              <div className="step" key={step.title}>
                <span className="step-number">{index + 1}</span>
                <div><b>{step.title}</b><span>{step.text}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="section">
        <div className="container">
          <span className="section-kicker">Technology plan</span>
          <h2>Free-tier friendly stack for MVP, scalable later.</h2>
          <p className="section-copy">
            This code uses clean Next.js + React + CSS only for the landing page. For the real product, start with managed free tiers and avoid over-engineering.
          </p>
          <div className="tech-grid">
            {techStack.map(([title, text]) => (
              <div className="tech" key={title}><b>{title}</b><span>{text}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="section">
        <div className="container">
          <div className="cta">
            <span className="section-kicker">Suggested name</span>
            <h2>CampusVerse</h2>
            <p className="section-copy" style={{ margin: '0 auto 26px' }}>
              A scalable community name because it can grow from notes into creators, courses, projects, events, internships, research and alumni networking.
            </p>
            <a className="btn btn-primary" href="mailto:hello@campusverse.example">Start Building →</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="logo"><span className="logo-mark">CV</span><span>CampusVerse</span></div>
          <span>Trusted learning network built by students, for students.</span>
        </div>
      </footer>
    </main>
  );
}
