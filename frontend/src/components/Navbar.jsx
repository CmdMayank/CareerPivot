function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-6 py-5">

      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/50 bg-white/75 px-8 py-4 shadow-lg backdrop-blur-xl">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 text-xl shadow-lg">

            🚀

          </div>

          <div>

            <h1 className="text-xl font-bold text-slate-900">
              Career Pivot
            </h1>

            <p className="text-xs text-slate-500">
              Career Intelligence Platform
            </p>

          </div>

        </div>

        {/* Navigation */}

        <div className="hidden items-center gap-10 text-sm font-medium text-slate-600 lg:flex">

          <a
            href="#"
            className="transition hover:text-purple-600"
          >
            Features
          </a>

          <a
            href="#"
            className="transition hover:text-purple-600"
          >
            Career Paths
          </a>

          <a
            href="#"
            className="transition hover:text-purple-600"
          >
            Roadmap
          </a>

          <a
            href="#"
            className="transition hover:text-purple-600"
          >
            GitHub
          </a>

        </div>

        {/* CTA */}

        <button className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

          Analyze Resume

        </button>

      </nav>

    </header>
  );
}

export default Navbar;