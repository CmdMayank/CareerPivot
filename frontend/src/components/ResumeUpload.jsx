import { useState } from "react";

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [resumeData, setResumeData] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setResumeData(null);
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

    setResumeData(data);
  } catch (error) {
    console.error(error);
    setResumeData({ text: "Upload failed" });
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
      />

      {file && (
        <div className="mt-6">
          <p className="mb-4 text-lg">
            Selected File: {file.name}
          </p>

          <button
            type="button"
            onClick={uploadResume}
            className="rounded-xl bg-black px-6 py-3 text-white"
          >
            Upload Resume
          </button>

          {resumeData && (
          <div className="mt-6">

          <div className="mb-6 rounded-xl bg-purple-50 p-4">
          <h3 className="mb-3 text-lg font-bold">
          Resume Statistics
         </h3>

        <p>📄 Pages: {resumeData.pages}</p>
        <p>📝 Words: {resumeData.words}</p>
        <p>🔤 Characters: {resumeData.characters}</p>
      </div>

      <div className="mb-6 rounded-xl bg-green-50 p-4">
  <h3 className="mb-3 text-lg font-bold">
    Detected Skills
  </h3>

     <div className="flex flex-wrap gap-2">
      {resumeData.skills.map((skill) => (
        <span
         key={skill}
         className="rounded-full bg-green-100 px-3 py-1 text-sm"
       >
         ✅ {skill}
        </span>
       ))}
       </div>
      </div>

       <div className="rounded-xl bg-gray-100 p-4">
       <h3 className="mb-2 font-semibold">
        Extracted Text
       </h3>

       <p className="whitespace-pre-wrap text-sm text-gray-700">
        {resumeData.text}
      </p>
    </div>

  </div>
)}
        </div>
      )}

    </div>
  </section>
);
}

export default ResumeUpload;