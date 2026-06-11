function RoadmapSection() {
  return (
    <section className="bg-purple-50 py-24">
      <div className="mx-auto max-w-7xl px-8">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Your Career Roadmap
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-6">
            <h3 className="mb-3 font-semibold">Month 1</h3>
            <p>Learn TypeScript</p>
          </div>

          <div className="rounded-3xl bg-white p-6">
            <h3 className="mb-3 font-semibold">Month 2</h3>
            <p>Build API Project</p>
          </div>

          <div className="rounded-3xl bg-white p-6">
            <h3 className="mb-3 font-semibold">Month 3</h3>
            <p>Improve Resume</p>
          </div>

          <div className="rounded-3xl bg-white p-6">
            <h3 className="mb-3 font-semibold">Month 4</h3>
            <p>Apply for Internships</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadmapSection;