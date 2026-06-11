function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload Resume",
      description: "Upload your current resume in seconds.",
    },
    {
      number: "02",
      title: "Choose Target Role",
      description: "Select the role you're aiming for.",
    },
    {
      number: "03",
      title: "Get Skill Analysis",
      description: "See what's helping and what's missing.",
    },
    {
      number: "04",
      title: "Follow Roadmap",
      description: "Get personalized recommendations and next steps.",
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-8">
        <h2 className="mb-16 text-center text-4xl font-bold">
          How It Works
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-gray-200 bg-white p-8"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                {step.number}
              </div>

              <h3 className="mb-3 text-lg font-semibold">{step.title}</h3>

              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;