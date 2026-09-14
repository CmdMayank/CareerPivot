function ReportPreview() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold">
          See What Career Pivot Reveals
        </h2>

        <p className="text-lg text-gray-600">
          Get a personalized analysis of your resume and discover exactly what
          you need to improve.
        </p>
      </div>

      <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">
        <div className="grid gap-8 lg:grid-cols-2">
          
          <div>
            <h3 className="mb-6 text-2xl font-semibold">
              Frontend Developer Match
            </h3>

            <div className="mb-8 text-6xl font-bold text-purple-600">
              72%
            </div>

            <div className="space-y-3">
              <p>✅ React</p>
              <p>✅ JavaScript</p>
              <p>✅ Git</p>

              <p className="text-red-500">❌ TypeScript</p>
              <p className="text-red-500">❌ REST APIs</p>
              <p className="text-red-500">❌ Testing</p>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <h4 className="mb-3 text-lg font-semibold">
                Recommended Project
              </h4>

              <div className="rounded-2xl bg-purple-50 p-4">
                Full-Stack Task Manager
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-lg font-semibold">
                Next Steps
              </h4>

              <ul className="space-y-3 text-gray-600">
                <li>Learn TypeScript fundamentals</li>
                <li>Build one REST API project</li>
                <li>Improve resume project descriptions</li>
                <li>Apply for frontend internships</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ReportPreview;