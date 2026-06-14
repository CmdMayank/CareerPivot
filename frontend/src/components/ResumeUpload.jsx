import { useState } from "react";

function ResumeUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
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
    />

    {file && (
      <div className="mt-6">
        <p className="mb-4">
          Selected File: {file.name}
        </p>

        <button className="rounded-xl bg-black px-6 py-3 text-white">
          Upload Resume
        </button>
      </div>
    )}

  </div>
</section>
  );
}

export default ResumeUpload;