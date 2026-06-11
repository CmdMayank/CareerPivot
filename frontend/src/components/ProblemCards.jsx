function ProblemCards() {
  const problems = [
    {
      title: "Not Sure What Skills Matter",
      description:
        "You know your target role, but not which skills recruiters actually expect.",
    },
    {
      title: "Resume Doesn't Stand Out",
      description:
        "Your resume lists projects and coursework but doesn't clearly demonstrate job readiness.",
    },
    {
      title: "No Clear Learning Path",
      description:
        "You're learning random topics without knowing which ones will move you closer to your goal.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-24">
      <div className="grid gap-6 md:grid-cols-3">
        {problems.map((problem, index) => (
          <div
            key={index}
            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md"
          >
            <h3 className="mb-4 text-xl font-semibold">{problem.title}</h3>

            <p className="text-gray-600">{problem.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProblemCards;