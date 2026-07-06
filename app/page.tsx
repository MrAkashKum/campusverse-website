import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  FileText,
  Github,
  GraduationCap,
  MessageSquareText,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
  Video,
} from 'lucide-react';

const resources = [
  { icon: FileText, title: 'Notes & Papers', text: 'Semester notes, professor slides, lab manuals, PYQs and solved papers organised topic-wise.' },
  { icon: Video, title: 'Trusted Creators', text: 'Students review YouTube channels, Udemy courses, GitHub repos and blogs by subject.' },
  { icon: MessageSquareText, title: 'Real Feedback', text: 'Comments, pros, cons, difficulty, exam usefulness and friend recommendations.' },
  { icon: Github, title: 'Open Source', text: 'Campus project ideas, good-first-issues, hackathon teams and student contributors.' },
];

const steps = [
  'Choose university, course, semester and subject',
  'Discover notes, videos, courses, papers and project links',
  'See trust score from friends, seniors, professors and toppers',
  'Contribute resources, join events and build reputation',
];

const reviews = [
  { name: 'NUS CS Student', badge: 'Friend recommended', item: 'Operating Systems Playlist', score: '4.9', quote: 'Best before finals. Clear examples and enough depth for revision.' },
  { name: 'Polytechnic Senior', badge: 'Verified contributor', item: 'Networking PYQ Pack', score: '4.8', quote: 'Solved papers matched the exam pattern and saved hours of searching.' },
  { name: 'MBA Learner', badge: 'Course reviewer', item: 'Udemy Analytics Course', score: '4.6', quote: 'Good for beginners, practical dashboards, but some lectures need updates.' },
];

const roadmap = [
  { phase: 'Phase 1', title: 'Resource Vault', text: 'Upload, search, bookmark and organise notes, papers and topic-wise materials.' },
  { phase: 'Phase 2', title: 'Trust Reviews', text: 'Ratings, pros/cons, comments, creator/course feedback and friend recommendations.' },
  { phase: 'Phase 3', title: 'Campus Community', text: 'College groups, professor pages, events, hackathons and open-source collaboration.' },
  { phase: 'Phase 4', title: 'AI Study Layer', text: 'AI summaries, question generator, flashcards, roadmap and trusted resource ranking.' },
];

function RatingDots() {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-300 text-yellow-300" />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070816] text-white">
      <section className="relative gradient-grid px-6 pb-24 pt-8 md:px-12 lg:px-20">
        <div className="blob absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-indigo-600" />
        <div className="blob absolute right-[-90px] top-48 h-80 w-80 rounded-full bg-cyan-500" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-500 shadow-glow">
              <GraduationCap className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">CampusVerse</span>
          </div>
          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#features">Features</a>
            <a href="#trust">Trust Graph</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#tech">Tech Stack</a>
          </div>
          <button className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-indigo-100">
            Join Waitlist
          </button>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 pt-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-300/30 bg-indigo-400/10 px-4 py-2 text-sm text-indigo-100">
              <Sparkles className="h-4 w-4" /> Trusted learning network built by students
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.03] tracking-tight md:text-7xl">
              Discover what actually helps students succeed.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              One campus platform for notes, last-year papers, trusted YouTubers, Udemy reviews, professor resources, open-source projects, events and friend-based recommendations.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button className="group rounded-full bg-indigo-500 px-7 py-4 font-bold shadow-glow transition hover:bg-indigo-400">
                Start your campus community <ArrowRight className="ml-2 inline h-5 w-5 transition group-hover:translate-x-1" />
              </button>
              <button className="rounded-full border border-white/15 bg-white/5 px-7 py-4 font-bold text-slate-100 backdrop-blur-xl transition hover:bg-white/10">
                View product idea
              </button>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              {[
                ['10K+', 'resources'],
                ['4.9', 'trust score'],
                ['50+', 'campus clubs'],
              ].map(([num, label]) => (
                <div key={label} className="card-glass rounded-3xl p-5">
                  <div className="text-3xl font-black">{num}</div>
                  <div className="mt-1 text-sm text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-glass relative rounded-[2rem] p-5 shadow-2xl shadow-indigo-950/40">
            <div className="rounded-[1.5rem] bg-slate-950/80 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Subject page</p>
                  <h3 className="text-2xl font-black">Machine Learning</h3>
                </div>
                <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-bold text-emerald-300">Trusted</div>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-indigo-500/25 to-cyan-400/10 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-slate-950"><Video /></div>
                    <div>
                      <h4 className="font-bold">Best YouTube Roadmap</h4>
                      <p className="text-sm text-slate-300">Recommended by 248 students</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black">4.9</div>
                    <RatingDots />
                  </div>
                </div>
                <p className="rounded-2xl bg-black/20 p-4 text-sm leading-6 text-slate-200">
                  “Beginner friendly, exam useful, and seniors say this is enough before starting research papers.”
                </p>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {['Professor Notes', 'Last Year Papers', 'Udemy Course', 'GitHub Project'].map((item, index) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-bold">{item}</span>
                      <span className="rounded-full bg-white/10 px-2 py-1 text-xs">#{index + 1}</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/10">
                      <div className="h-2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300" style={{ width: `${92 - index * 8}%` }} />
                    </div>
                    <p className="mt-2 text-xs text-slate-400">High trust from your campus</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 font-bold text-cyan-300">Not just notes</p>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">A complete student decision layer.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">Students do not only need files. They need to know which file, video, course, senior, professor, project or event is actually useful.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {resources.map((item) => (
              <div key={item.title} className="card-glass rounded-[2rem] p-7 transition hover:-translate-y-1 hover:bg-white/[0.08]">
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-indigo-500/20 text-indigo-200">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="trust" className="bg-white/[0.03] px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-5 inline-flex rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-300"><ShieldCheck className="mr-2 h-4 w-4" /> Trust Graph</div>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">See who recommends what, and why.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">Every resource gets a trust score based on friend recommendations, verified seniors, professor endorsements, usefulness, comments and recent feedback.</p>
            <div className="mt-8 space-y-4">
              {steps.map((step) => (
                <div key={step} className="flex gap-4 rounded-2xl bg-white/[0.04] p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
                  <span className="text-slate-200">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-glass relative min-h-[430px] rounded-[2rem] p-7">
            <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-indigo-500 text-center font-black shadow-glow">
              Trust<br />Score
            </div>
            {[
              ['Friends', 'top-8 left-8', Users],
              ['Seniors', 'top-16 right-10', Trophy],
              ['Professors', 'bottom-14 left-12', GraduationCap],
              ['Creators', 'bottom-10 right-16', Video],
              ['Projects', 'left-1/2 top-5 -translate-x-1/2', Github],
            ].map(([label, pos, Icon]: any) => (
              <div key={label} className={`absolute ${pos} rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-center shadow-2xl`}>
                <Icon className="mx-auto mb-2 h-6 w-6 text-cyan-300" />
                <div className="font-bold">{label}</div>
                <div className="text-xs text-slate-400">verified signal</div>
              </div>
            ))}
            <Network className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 text-white/5" />
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 font-bold text-indigo-300">Community proof</p>
              <h2 className="text-4xl font-black md:text-5xl">Reviews that feel human.</h2>
            </div>
            <button className="w-fit rounded-full border border-white/15 px-6 py-3 font-bold text-slate-200">Explore reviews</button>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.item} className="card-glass rounded-[2rem] p-7">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-200">{review.badge}</span>
                  <div className="flex items-center gap-1 font-black"><Star className="h-4 w-4 fill-yellow-300 text-yellow-300" /> {review.score}</div>
                </div>
                <h3 className="text-xl font-black">{review.item}</h3>
                <p className="mt-4 leading-7 text-slate-300">“{review.quote}”</p>
                <p className="mt-6 text-sm font-bold text-slate-400">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="bg-gradient-to-b from-white/[0.03] to-transparent px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl text-4xl font-black md:text-5xl">Launch small, then scale into a campus operating system.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {roadmap.map((item) => (
              <div key={item.phase} className="relative rounded-[2rem] border border-white/10 bg-slate-950/60 p-6">
                <div className="mb-6 inline-flex rounded-full bg-indigo-500/20 px-3 py-1 text-sm font-bold text-indigo-200">{item.phase}</div>
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="card-glass rounded-[2rem] p-8">
            <Search className="mb-5 h-10 w-10 text-cyan-300" />
            <h2 className="text-3xl font-black">Free-tier friendly tech stack</h2>
            <p className="mt-4 leading-8 text-slate-300">Next.js, React, Tailwind, PostgreSQL on Neon/Supabase, Prisma, Auth.js, Cloudflare R2 for file storage, Meilisearch for search, Vercel for frontend and Render/Railway for backend.</p>
          </div>
          <div className="card-glass rounded-[2rem] p-8">
            <CalendarDays className="mb-5 h-10 w-10 text-indigo-300" />
            <h2 className="text-3xl font-black">Go-to-market</h2>
            <p className="mt-4 leading-8 text-slate-300">Start with one university and one department. Recruit student ambassadors, upload 20 high-value subjects, reward top contributors and expand through clubs, events and open-source communities.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="text-2xl font-black">CampusVerse</div>
            <p className="mt-2 text-slate-400">The trusted knowledge network for every campus.</p>
          </div>
          <button className="rounded-full bg-white px-6 py-3 font-black text-slate-950">Build the MVP</button>
        </div>
      </footer>
    </main>
  );
}
