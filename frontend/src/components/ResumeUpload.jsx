import { useState } from "react";

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setMessage("");
  };

  const testBackend = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/test");

      const data = await response.json();

      setMessage(data.status);
    } catch (error) {
      console.error("Error connecting to backend:", error);
      setMessage("Failed to connect to backend");
    }
  };

  return (
    <section className="mx-auto max-w-3xl px-8 py-20">
      <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">
        <h2 className="mb-8 text-4xl font-bold">
          Upload Your Resume
        </h2>

        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="mb-6"
        />

        {file && (
          <div className="mt-6">
            <p className="mb-4 text-lg">
              Selected File: {file.name}
            </p>

            <button
              type="button"
              onClick={testBackend}
              className="rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-800"
            >
              Test Backend
            </button>

            {message && (
              <p className="mt-4 font-medium text-green-600">
                {message}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default ResumeUpload;