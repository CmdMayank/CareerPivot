const careers = [
  {
    icon: "💻",
    title: "Frontend Developer",
    desc: "Build beautiful web interfaces."
  },
  {
    icon: "⚙️",
    title: "Backend Developer",
    desc: "Design scalable APIs and servers."
  },
  {
    icon: "🌐",
    title: "Full Stack Developer",
    desc: "Master frontend and backend."
  },
  {
    icon: "🤖",
    title: "AI Engineer",
    desc: "Create intelligent AI systems."
  },
  {
    icon: "📊",
    title: "Data Scientist",
    desc: "Extract insights from data."
  },
  {
    icon: "📱",
    title: "Android Developer",
    desc: "Develop mobile applications."
  },
  {
    icon: "☁️",
    title: "Cloud Engineer",
    desc: "Build cloud infrastructure."
  },
  {
    icon: "🔒",
    title: "Cybersecurity",
    desc: "Protect digital systems."
  }
];

function CareerPaths() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-bold">
            Explore Career Paths
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Career Pivot helps you understand what skills are required
            for today's most in-demand technology roles.
          </p>

        </div>



        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {careers.map((career) => (

            <div
              key={career.title}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="mb-6 text-5xl transition group-hover:scale-110">
                {career.icon}
              </div>

              <h3 className="text-xl font-bold">
                {career.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {career.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default CareerPaths;