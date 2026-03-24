export default function Programs({ programs, highlights }) {
  return (
    <section id="programs" className="px-6 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Academic Schools
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Explore high-impact programs designed with industry partners, research
            mentors, and international pathways.
          </p>
          <div className="mt-8 grid gap-5">
            {programs.map((program) => (
              <article
                key={program.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition hover:border-slate-400 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  {program.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  {program.description}
                </p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">
                  Learn More
                </p>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-gradient-to-b from-cyan-100/70 to-orange-100/60 p-7 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900">Why Choose KSV</h3>
          <ul className="mt-5 space-y-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
