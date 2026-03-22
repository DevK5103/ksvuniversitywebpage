export default function Stats({ stats }) {
  return (
    <section className="px-6 pb-6 sm:px-10 lg:px-14">
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <article
            key={item.label}
            className="rounded-2xl border border-white/60 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-3xl font-bold text-slate-900 sm:text-4xl">
              {item.value}
            </p>
            <p className="mt-2 text-sm font-medium text-slate-600">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
