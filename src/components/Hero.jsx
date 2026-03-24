export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-16 sm:px-10 lg:px-14">
      <div className="pointer-events-none absolute -top-32 -right-20 h-80 w-80 rounded-full bg-cyan-300/25 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-6xl">
        <p className="badge-reveal inline-flex items-center gap-2 rounded-full border border-cyan-200/50 bg-cyan-100/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700">
          Admissions Open 2026
        </p>
        <h1 className="headline-reveal mt-6 max-w-4xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-7xl">
          Build Futures at KSV University
        </h1>
        <p className="copy-reveal mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
          A bold campus where academic depth meets real-world innovation,
          mentorship, and global opportunities.
        </p>

        <div className="copy-reveal mt-10 flex flex-wrap gap-4">
          <a
            href="#programs"
            className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Explore Programs
          </a>
          <a
            href="#admissions"
            className="rounded-2xl border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
          >
            Start Application
          </a>
        </div>
      </div>
    </section>
  )
}
