function Hero() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-purple-300/20 blur-3xl" />

      <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-8">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <div>

            <div className="mb-6 inline-flex items-center rounded-full border border-purple-200 bg-purple-100 px-4 py-2">

              <span className="mr-2">🚀</span>

              <span className="text-sm font-semibold uppercase tracking-wider text-purple-700">
                Career Intelligence Platform
              </span>

            </div>

            <h1 className="mb-8 text-6xl font-black leading-tight text-slate-900 lg:text-7xl">

              Know exactly
              <br />

              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                what's standing
              </span>

              <br />

              between you and
              <br />

              your dream role.

            </h1>

            <p className="max-w-xl text-xl leading-9 text-slate-600">

              Upload your resume, choose a target role, and receive a
              personalized roadmap showing the exact skills, projects,
              and experience you need to become job-ready.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

                🚀 Analyze Resume

              </button>

              <button className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold transition-all duration-300 hover:border-purple-500 hover:text-purple-600 hover:shadow-lg">

                📄 View Demo

              </button>

            </div>

            <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-500">

              <div>✅ PDF Resume Parsing</div>

              <div>✅ Skill Detection</div>

              <div>✅ Career Match</div>

            </div>

          </div>

          {/* Right */}

          <div className="relative">

            <div className="rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">

              <div className="mb-8 flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-500">

                    Career Match

                  </p>

                  <h3 className="text-2xl font-bold">

                    Frontend Developer

                  </h3>

                </div>

                <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

                  Excellent

                </div>

              </div>

              <div className="mb-8">

                <p className="text-6xl font-black text-purple-600">

                  72%

                </p>

                <p className="mt-2 text-slate-500">

                  Overall Match Score

                </p>

              </div>

              <div className="mb-8">

                <div className="mb-3 flex justify-between text-sm">

                  <span>Progress</span>

                  <span>72%</span>

                </div>

                <div className="h-3 rounded-full bg-slate-200">

                  <div className="h-3 w-[72%] rounded-full bg-gradient-to-r from-purple-500 to-indigo-600"></div>

                </div>

              </div>

              <div className="mb-8">

                <h4 className="mb-4 font-semibold">

                  Detected Skills

                </h4>

                <div className="flex flex-wrap gap-2">

                  <span className="rounded-full bg-green-100 px-4 py-2 text-sm">
                    React
                  </span>

                  <span className="rounded-full bg-green-100 px-4 py-2 text-sm">
                    JavaScript
                  </span>

                  <span className="rounded-full bg-green-100 px-4 py-2 text-sm">
                    Git
                  </span>

                </div>

              </div>

              <div>

                <h4 className="mb-4 font-semibold">

                  Missing Skills

                </h4>

                <div className="space-y-3">

                  <div className="flex justify-between rounded-xl bg-slate-100 p-3">

                    <span>TypeScript</span>

                    <span>⚡</span>

                  </div>

                  <div className="flex justify-between rounded-xl bg-slate-100 p-3">

                    <span>REST APIs</span>

                    <span>⚡</span>

                  </div>

                  <div className="flex justify-between rounded-xl bg-slate-100 p-3">

                    <span>Testing</span>

                    <span>⚡</span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;