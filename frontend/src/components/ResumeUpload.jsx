import { useState } from "react";

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setMessage("");
  };

  const uploadResume = async () => {
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("http://127.0.0.1:8000/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    setMessage(`Uploaded: ${data.filename}`);
  } catch (error) {
    console.error(error);
    setMessage("Upload failed");
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
             onClick={uploadResume}
             className="rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-800"
            >
           Upload Resume
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