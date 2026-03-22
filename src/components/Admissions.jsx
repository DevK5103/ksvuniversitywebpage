export default function Admissions() {
  return (
    <section id="admissions" className="px-6 pb-20 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Admissions
        </p>
        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
          Ready to Begin Your Journey?
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          Applications are now open. Talk to our counselors, review scholarship
          options, and secure your seat.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            type="button"
            className="rounded-xl bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-200"
          >
            Apply Now
          </button>
          <button
            type="button"
            className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300"
          >
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  )
}
