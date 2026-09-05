import { useState } from "react";

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [targetRole, setTargetRole] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setResumeData(null);
  };

  const uploadResume = async () => {
    if (!file) return;

    setLoading(true);

    const formData = new FormData();

    formData.append("file", file);
    formData.append("target_role", targetRole);

    try {
      const response = await fetch("http://127.0.0.1:8000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResumeData(data);
    } catch (error) {
      console.error(error);

      setResumeData({
        text: "Upload failed. Please try again.",
        skills: [],
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-lg">

        <h2 className="mb-3 text-5xl font-bold">
          Upload Your Resume
        </h2>

        <p className="mb-10 text-gray-500">
          Upload a PDF resume and let Career Pivot analyze your skills.
        </p>

        {/* Upload Area */}

        <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-10 text-center transition hover:border-black hover:bg-gray-100">

          <div className="mb-4 text-6xl">
            📄
          </div>

          <h3 className="text-2xl font-semibold">
            Choose Your Resume
          </h3>

          <p className="mt-2 text-gray-500">
            Supported format: PDF
          </p>

          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="mx-auto mt-8 block"
          />

        </div>

        {/* Selected File */}

        {file && (
          <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  Selected Resume
                </p>

                <p className="mt-1 font-semibold">
                  📄 {file.name}
                </p>

              </div>

              <span className="rounded-full bg-green-200 px-4 py-2 text-sm font-semibold text-green-800">
                Ready
              </span>

            </div>

          </div>
        )}

        {/* Analyze Button */}

        {file && (
          <button
            type="button"
            onClick={uploadResume}
            disabled={loading}
            className={`mt-8 w-full rounded-2xl py-4 text-lg font-semibold text-white transition-all duration-300 ${
              loading
                ? "cursor-not-allowed bg-gray-500"
                : "bg-black hover:-translate-y-1 hover:bg-gray-900 hover:shadow-xl"
            }`}
          >
            {loading ? "🚀 Analyzing Resume..." : "✨ Analyze Resume"}
          </button>
        )}

        {/* Loading */}

        {loading && (
          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">

            <h3 className="mb-4 text-xl font-bold">
              🚀 Analyzing Resume
            </h3>

            <div className="space-y-2 text-gray-700">

              <p>📄 Parsing PDF...</p>
              <p>📝 Extracting Resume Text...</p>
              <p>🧠 Detecting Skills...</p>

            </div>

          </div>
        )}

        {/* Dashboard */}

        {!loading && resumeData && (
          <div className="mt-10 space-y-6">

            {/* Statistics */}

            <div className="rounded-2xl bg-purple-50 p-6 shadow-sm">

              <h3 className="mb-5 text-2xl font-bold">
                📊 Resume Statistics
              </h3>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                <div className="rounded-xl bg-white p-4 shadow">
                  <p className="text-gray-500">Pages</p>
                  <p className="text-3xl font-bold">
                    {resumeData.pages ?? "-"}
                  </p>
                </div>

                <div className="rounded-xl bg-white p-4 shadow">
                  <p className="text-gray-500">Words</p>
                  <p className="text-3xl font-bold">
                    {resumeData.words ?? "-"}
                  </p>
                </div>

                <div className="rounded-xl bg-white p-4 shadow">
                  <p className="text-gray-500">Characters</p>
                  <p className="text-3xl font-bold">
                    {resumeData.characters ?? "-"}
                  </p>
                </div>

              </div>

            </div>

            {/* Skills */}

            <div className="rounded-2xl bg-green-50 p-6 shadow-sm">

              <h3 className="mb-5 text-2xl font-bold">
                🟢 Detected Skills
              </h3>

              <div className="flex flex-wrap gap-3">

                {resumeData.skills?.length > 0 ? (
                  resumeData.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-green-200 px-5 py-2 font-medium transition hover:scale-105"
                    >
                      ✅ {skill}
                    </span>
                  ))
                ) : (
                  <p className="text-gray-500">
                    No skills detected.
                  </p>
                )}

              </div>

            </div>

            {/* Target Role */}

<div className="rounded-2xl bg-blue-50 p-6 shadow-sm">

  <h3 className="mb-4 text-2xl font-bold">
    🎯 Target Role
  </h3>

  <p className="mb-4 text-gray-600">
    Choose the career you're aiming for.
  </p>

  <select
    value={targetRole}
    onChange={(e) => setTargetRole(e.target.value)}
    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-lg outline-none transition focus:border-black"
  >
    <option value="">Select a Target Role</option>

    <option>Frontend Developer</option>

    <option>Backend Developer</option>

    <option>Full Stack Developer</option>

    <option>AI Engineer</option>

    <option>Machine Learning Engineer</option>

    <option>Data Scientist</option>

    <option>Android Developer</option>

    <option>DevOps Engineer</option>

    <option>Cloud Engineer</option>

  </select>
  {targetRole && (
    <div className="mt-4 rounded-xl bg-white p-4">
      <p className="text-sm text-gray-500">
        Selected Career Goal
      </p>

      <h4 className="mt-1 text-xl font-bold">
        🚀 {targetRole}
      </h4>
    </div>
  )}

</div>

            {/* Extracted Text */}

            <div className="rounded-2xl bg-gray-100 p-6 shadow-sm">

              <h3 className="mb-5 text-2xl font-bold">
                📄 Extracted Text
              </h3>

              <div className="max-h-96 overflow-y-auto rounded-xl bg-white p-5">

                <p className="whitespace-pre-wrap leading-7 text-gray-700">
                  {resumeData.text}
                </p>

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}

export default ResumeUpload;