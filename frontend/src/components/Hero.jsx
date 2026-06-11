function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20">
      <div className="grid items-center gap-20 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-purple-600">
            Career Intelligence for Students
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
            Know exactly what's standing between you and your dream role.
          </h1>

          <p className="mb-8 text-lg text-gray-600">
            Upload your resume, choose a target role, and receive a personalized
            roadmap showing the skills, projects, and experience you need.
          </p>

          <div className="flex gap-4">
            <button className="rounded-xl bg-black px-6 py-3 text-white">
              Analyze My Resume
            </button>

            <button className="rounded-xl border px-6 py-3">
              View Example Report
            </button>
          </div>
        </div>

        <div className="rounded-3xl border bg-purple-50 p-8 shadow-sm">
          <h3 className="mb-4 text-xl font-semibold">
            Frontend Developer Match
          </h3>

          <div className="mb-6 text-5xl font-bold text-purple-600">
            72%
          </div>

          <div>
            <h4 className="mb-2 font-medium">Missing Skills</h4>

            <ul className="space-y-2 text-gray-600">
              <li>TypeScript</li>
              <li>REST APIs</li>
              <li>Testing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;