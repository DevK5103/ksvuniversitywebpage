export default function HomePage() {
  return (
    <>
      <nav className="relative z-[60] hidden items-center justify-between bg-primary px-8 py-2 text-xs font-label text-white md:flex">
        <div className="flex items-center gap-6">
          <a className="flex items-center gap-1 transition-colors hover:text-secondary-fixed" href="#">
            <span className="material-symbols-outlined text-[14px]">eco</span> SDG
          </a>
          <a className="flex items-center gap-1 transition-colors hover:text-secondary-fixed" href="#">
            <span className="material-symbols-outlined text-[14px]">grade</span> Examination
          </a>
          <a className="flex items-center gap-1 transition-colors hover:text-secondary-fixed" href="#">
            <span className="material-symbols-outlined text-[14px]">school</span> NEP
          </a>
          <a className="flex items-center gap-1 transition-colors hover:text-secondary-fixed" href="#">
            <span className="material-symbols-outlined text-[14px]">menu_book</span> Journals
          </a>
          <a className="flex items-center gap-1 transition-colors hover:text-secondary-fixed" href="#">
            <span className="material-symbols-outlined text-[14px]">groups</span> Conferences
          </a>
          <a className="flex items-center gap-1 transition-colors hover:text-secondary-fixed" href="#">
            <span className="material-symbols-outlined text-[14px]">work</span> Recruitment
          </a>
        </div>
        <div className="flex gap-4">
          <a className="rounded-sm bg-secondary px-3 py-1 font-semibold transition-colors hover:bg-secondary-container" href="#">Campus Tour</a>
          <a className="rounded-sm border border-white/30 px-3 py-1 transition-colors hover:bg-white/10" href="#">Webmail</a>
        </div>
      </nav>

      <header className="fixed top-0 z-50 mx-auto flex w-full max-w-full items-center justify-between bg-white/80 px-8 py-4 shadow-sm backdrop-blur-md md:top-[32px] dark:bg-slate-900/80">
        <div className="font-headline text-2xl font-bold tracking-tight text-blue-900 dark:text-white">
          Kadi Sarva Vishwavidyalaya
        </div>
        <div className="hidden items-center gap-8 font-headline font-semibold tracking-tight lg:flex">
          <div className="group relative py-2">
            <button className="flex items-center gap-1 border-b-2 border-amber-500 pb-1 text-blue-900">About Us</button>
            <div className="pointer-events-none absolute top-full left-0 flex w-64 translate-y-2 flex-col gap-3 rounded-xl bg-white p-4 opacity-0 shadow-xl transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              <a className="text-slate-600 transition-colors hover:text-blue-900" href="#">SVKM - Trust</a>
              <a className="text-slate-600 transition-colors hover:text-blue-900" href="#">University Act - 2012</a>
              <a className="text-slate-600 transition-colors hover:text-blue-900" href="#">President&apos;s Desk</a>
            </div>
          </div>
          <div className="group relative py-2">
            <button className="text-slate-600 transition-colors duration-300 hover:text-blue-900 dark:text-slate-400 dark:hover:text-blue-300">Academics</button>
          </div>
          <div className="group relative py-2">
            <button className="text-slate-600 transition-colors duration-300 hover:text-blue-900 dark:text-slate-400 dark:hover:text-blue-300">Campuses</button>
          </div>
          <div className="group relative py-2">
            <button className="text-slate-600 transition-colors duration-300 hover:text-blue-900 dark:text-slate-400 dark:hover:text-blue-300">Sister Concerns</button>
          </div>
          <div className="group relative py-2">
            <button className="text-slate-600 transition-colors duration-300 hover:text-blue-900 dark:text-slate-400 dark:hover:text-blue-300">Cells & Centers</button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined cursor-pointer rounded-full p-2 text-blue-900 hover:bg-slate-100">search</span>
          <button className="material-symbols-outlined text-blue-900 lg:hidden">menu</button>
        </div>
      </header>

      <main className="pt-24">
        <section className="relative h-[870px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              alt="University Campus"
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0nENheiH0FcD6ho0oqrgL6SrhUp4mC3IQve6jEsKgXfpu01VBUfDlfZLhGoxGqja58GUk2_P-sLRYdGxjyiAUENen9UxHwdJLMoEuW63P4csIeJtnZarkH8LhEYFKX4bdDOyltVpf9CLs4WpyApfZPMwxff5MuHEtc6hMo3uPCQbSWvGYGWlS16HoKr8a7QJTRLJRHPGwxIx28BgSXKVJZcaxp-MjduagmKq1Xso6Li8ZSrFb-7o5llyLOw51-Yop2LdDklENRzs"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent"></div>
          </div>
          <div className="container relative mx-auto flex h-full flex-col justify-center px-8 text-white">
            <div className="max-w-3xl space-y-6">
              <span className="inline-block rounded-sm bg-secondary px-4 py-1.5 text-xs font-label uppercase tracking-widest text-on-secondary">
                Est. 2007 - Gandhinagar, Gujarat
              </span>
              <h1 className="font-headline text-5xl font-extrabold leading-tight tracking-tighter md:text-7xl">
                Empowering Minds,
                <br />
                <span className="text-secondary-fixed">Enlightening Futures.</span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed font-body text-slate-200 md:text-xl">
                Join a legacy of academic excellence and holistic development at Kadi Sarva Vishwavidyalaya, where tradition meets innovation.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="rounded-xl bg-primary-container px-8 py-4 font-semibold text-white shadow-xl transition-transform hover:scale-105">
                  Explore Programs
                </button>
                <button className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all hover:bg-white hover:text-primary">
                  Virtual Tour
                </button>
              </div>
            </div>
          </div>
          <div className="absolute right-12 bottom-12 hidden w-80 rounded-xl bg-surface-container-lowest p-8 shadow-2xl xl:block">
            <div className="mb-4 w-12 border-t-2 border-secondary"></div>
            <h3 className="mb-2 font-headline text-xl font-bold text-primary">Admissions 2025-26</h3>
            <p className="mb-4 text-sm text-on-surface-variant">Applications are now open for all undergraduate and post-graduate engineering programs.</p>
            <a className="group flex items-center gap-2 text-sm font-semibold text-secondary" href="#">
              Apply Now <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
            </a>
          </div>
        </section>

        <section className="bg-surface py-20">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              <div className="rounded-xl border-t-2 border-transparent bg-surface-container-lowest p-8 text-center transition-shadow hover:border-secondary hover:shadow-lg">
                <div className="mb-2 font-headline text-4xl font-black text-primary md:text-5xl">100+</div>
                <div className="text-xs font-label uppercase tracking-widest text-secondary">Acre Campus</div>
              </div>
              <div className="rounded-xl border-t-2 border-transparent bg-surface-container-lowest p-8 text-center transition-shadow hover:border-secondary hover:shadow-lg">
                <div className="mb-2 font-headline text-4xl font-black text-primary md:text-5xl">30+</div>
                <div className="text-xs font-label uppercase tracking-widest text-secondary">Institutes</div>
              </div>
              <div className="rounded-xl border-t-2 border-transparent bg-surface-container-lowest p-8 text-center transition-shadow hover:border-secondary hover:shadow-lg">
                <div className="mb-2 font-headline text-4xl font-black text-primary md:text-5xl">5,000+</div>
                <div className="text-xs font-label uppercase tracking-widest text-secondary">Teachers</div>
              </div>
              <div className="rounded-xl border-t-2 border-transparent bg-surface-container-lowest p-8 text-center transition-shadow hover:border-secondary hover:shadow-lg">
                <div className="mb-2 font-headline text-4xl font-black text-primary md:text-5xl">50,000+</div>
                <div className="text-xs font-label uppercase tracking-widest text-secondary">Students</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-24">
          <div className="container mx-auto px-8">
            <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
              <div>
                <span className="text-xs font-label uppercase tracking-widest text-secondary">Portals</span>
                <h2 className="mt-2 font-headline text-4xl font-bold text-primary">Academic Hub</h2>
              </div>
              <button className="flex items-center gap-2 rounded-lg border border-primary px-6 py-2 font-semibold text-primary transition-all hover:bg-primary hover:text-white">
                View All News <span className="material-symbols-outlined">north_east</span>
              </button>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="group relative overflow-hidden rounded-2xl bg-primary-container p-12 md:col-span-2">
                <div className="relative z-10 flex h-full flex-col text-white">
                  <span className="material-symbols-outlined mb-6 text-4xl text-secondary-fixed">science</span>
                  <h3 className="mb-4 font-headline text-3xl font-bold">Research & PhD Updates</h3>
                  <p className="mb-8 max-w-md text-on-primary-container">Access the latest funded projects, doctoral research progress, and institutional publications.</p>
                  <div className="mt-auto">
                    <a className="inline-flex items-center gap-2 font-semibold text-white transition-all group-hover:gap-4" href="#">Explore Research Portal <span className="material-symbols-outlined">arrow_forward</span></a>
                  </div>
                </div>
                <div className="absolute -right-20 -bottom-20 opacity-10 transition-transform duration-700 group-hover:scale-110">
                  <span className="material-symbols-outlined text-[300px]" style={{ fontVariationSettings: "'FILL' 1" }}>science</span>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-surface-container-lowest p-8 transition-shadow hover:shadow-xl">
                <div>
                  <span className="material-symbols-outlined mb-4 text-3xl text-primary">grade</span>
                  <h3 className="mb-2 font-headline text-xl font-bold text-primary">Examination Results</h3>
                  <p className="text-sm text-on-surface-variant">Download your semester marksheet and view institutional rank lists here.</p>
                </div>
                <a className="mt-8 flex items-center gap-2 font-bold text-secondary" href="#">Portal Access <span className="material-symbols-outlined">login</span></a>
              </div>
              <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-surface-container-lowest p-8 transition-shadow hover:shadow-xl">
                <div>
                  <span className="material-symbols-outlined mb-4 text-3xl text-primary">eco</span>
                  <h3 className="mb-2 font-headline text-xl font-bold text-primary">SDG Initiatives</h3>
                  <p className="text-sm text-on-surface-variant">Our commitment to sustainable development goals through academic excellence.</p>
                </div>
                <a className="mt-8 flex items-center gap-2 font-bold text-secondary" href="#">Impact Report <span className="material-symbols-outlined">menu_book</span></a>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-secondary p-12 text-on-secondary md:col-span-2">
                <div className="relative z-10">
                  <h3 className="mb-4 font-headline text-3xl font-bold">Gandhinagar Campus</h3>
                  <p className="mb-6 font-medium opacity-90">Home to 14 specialized colleges offering premium technical and medical education in the capital heart of Gujarat.</p>
                  <div className="flex gap-4">
                    <button className="rounded-lg bg-primary px-6 py-2 font-bold text-white">List Colleges</button>
                    <button className="rounded-lg border-2 border-primary px-6 py-2 font-bold text-primary">Campus Map</button>
                  </div>
                </div>
                <div className="absolute -top-24 -right-24 opacity-10 transition-transform duration-700 group-hover:rotate-12">
                  <span className="material-symbols-outlined text-[350px]">location_city</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-surface py-24">
          <div className="container mx-auto px-8">
            <div className="mb-16 flex flex-col items-center text-center">
              <span className="text-xs font-label uppercase tracking-widest text-secondary">Inspiration</span>
              <h2 className="mt-2 font-headline text-4xl font-bold text-primary">Visionaries Speak</h2>
            </div>
            <div className="flex flex-col items-center gap-12 lg:flex-row">
              <div className="relative w-full lg:w-1/2">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-200">
                  <img
                    alt="Visionary Inspiration"
                    className="h-full w-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-KG8veMgjyMGnkt-xheiL_9rY7lj1g8OqITRB0z1Zs1ard5ZYmlPqVBL7wbUpEtHmJksIjmSWJTRWyKbMkDJ9DCLO07jpocFgq9rEJhxWVluwqIGNwuaGmCc2SCAxBjmOyncI73_6xcXGmEkym3VTFEHtnDMboIbUN6gAfLkF3W8r7ZMwTidzFdn2TuCgWNKITVR4ej8XjqtjBG16r-19H4tC6s5JV_kiEPBSa024_5vt96WlWiJvKEUQ5alg8qaad9ykPJyot1Y"
                  />
                  <div className="absolute inset-0 bg-primary/20"></div>
                </div>
                <div className="absolute -right-6 -bottom-6 hidden rounded-xl bg-secondary p-8 shadow-xl md:block">
                  <span className="material-symbols-outlined text-4xl text-on-secondary">format_quote</span>
                </div>
              </div>
              <div className="w-full space-y-8 lg:w-1/2">
                <div className="space-y-4">
                  <p className="font-headline text-2xl font-medium leading-relaxed italic text-primary">
                    &quot;The education which does not help the common mass of people to equip themselves for the struggle for life, which does not bring out strength of character, a spirit of philanthropy, and the courage of a lion-is it worth the name?&quot;
                  </p>
                  <div className="border-t-2 border-slate-100 pt-4">
                    <h4 className="font-headline text-lg font-bold text-primary">Mahatma Gandhi</h4>
                    <p className="text-sm font-label uppercase text-secondary">Father of the Nation</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="rounded-full border border-slate-200 p-3 transition-all hover:bg-primary hover:text-white">
                    <span className="material-symbols-outlined">west</span>
                  </button>
                  <button className="rounded-full border border-slate-200 p-3 transition-all hover:bg-primary hover:text-white">
                    <span className="material-symbols-outlined">east</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-24">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div>
                <h2 className="mb-8 inline-block border-b-4 border-secondary pb-2 font-headline text-3xl font-bold text-primary">Gandhinagar Campus</h2>
                <ul className="space-y-4 font-body text-on-surface-variant">
                  <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-secondary"></span> LDRP Institute of Technology & Research</li>
                  <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-secondary"></span> SK Patel College of Pharm. Edu. & Res.</li>
                  <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-secondary"></span> BP College of Business Administration</li>
                  <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-secondary"></span> BP College of Computer Studies</li>
                  <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-secondary"></span> CM Patel College of Physiotherapy</li>
                  <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-secondary"></span> ... and 9 other leading institutes</li>
                </ul>
              </div>
              <div>
                <h2 className="mb-8 inline-block border-b-4 border-secondary pb-2 font-headline text-3xl font-bold text-primary">Kadi Campus</h2>
                <ul className="space-y-4 font-body text-on-surface-variant">
                  <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-secondary"></span> HVHP Institute of Post Graduate Studies</li>
                  <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-secondary"></span> SV Institute of Management</li>
                  <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-secondary"></span> SV Institute of Computer Studies</li>
                  <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-secondary"></span> Pharmacy College, Kadi</li>
                  <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-secondary"></span> ... and 6 other rural excellence centers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-white/10 bg-blue-950 pt-16 pb-8 font-body leading-relaxed text-slate-300 dark:bg-black">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-12 md:grid-cols-3">
          <div className="space-y-6">
            <div className="mb-4 text-xl font-bold text-white">Kadi Sarva Vishwavidyalaya</div>
            <p className="max-w-xs text-sm opacity-80">
              Established in 2007 under the Gujarat University Act, KSV is dedicated to the social and educational upliftment of youth through high-quality professional training.
            </p>
            <div className="flex gap-4">
              <a className="rounded-lg bg-white/5 p-2 transition-colors hover:bg-secondary" href="#"><span className="material-symbols-outlined text-sm">share</span></a>
              <a className="rounded-lg bg-white/5 p-2 transition-colors hover:bg-secondary" href="#"><span className="material-symbols-outlined text-sm">public</span></a>
              <a className="rounded-lg bg-white/5 p-2 transition-colors hover:bg-secondary" href="#"><span className="material-symbols-outlined text-sm">mail</span></a>
            </div>
          </div>
          <div>
            <h4 className="mb-6 font-headline font-bold text-white">Resources</h4>
            <div className="grid grid-cols-2 gap-4">
              <a className="text-slate-400 transition-transform duration-200 hover:translate-x-1 hover:text-white" href="#">Research Projects</a>
              <a className="text-slate-400 transition-transform duration-200 hover:translate-x-1 hover:text-white" href="#">Results</a>
              <a className="text-slate-400 transition-transform duration-200 hover:translate-x-1 hover:text-white" href="#">Ph.D Updates</a>
              <a className="text-slate-400 transition-transform duration-200 hover:translate-x-1 hover:text-white" href="#">Global Offices</a>
              <a className="text-slate-400 transition-transform duration-200 hover:translate-x-1 hover:text-white" href="#">Privacy Policy</a>
              <a className="text-slate-400 transition-transform duration-200 hover:translate-x-1 hover:text-white" href="#">Funded Projects</a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="mb-6 font-headline font-bold text-white">Contact Us</h4>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-amber-500">location_on</span>
              <p className="text-sm">Sector - 15, Near KH-5 Circle,<br />Gandhinagar - 382015, Gujarat, India.</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-amber-500">call</span>
              <p className="text-sm">+91-79-23241492</p>
            </div>
            <div className="flex items-start gap-4 border-t border-white/10 pt-4">
              <span className="material-symbols-outlined text-amber-500">public</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">Global Office</p>
                <p className="text-sm italic">Maryland, USA Center</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl border-t border-white/5 px-12 pt-8 text-center text-xs uppercase tracking-widest opacity-50">
          © 2024 Kadi Sarva Vishwavidyalaya. All Rights Reserved.
        </div>
      </footer>
    </>
  )
}
