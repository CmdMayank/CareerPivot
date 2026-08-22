from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from PyPDF2 import PdfReader
from roles import role_requirements

app = FastAPI()

# CORS Configuration
origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Career Pivot Backend Running"}


@app.get("/test")
def test():
    return {"status": "Backend Connected Successfully"}


from fastapi import Form

@app.post("/upload")
async def upload_resume(
    file: UploadFile = File(...),
    target_role: str = Form(...)
):
    reader = PdfReader(file.file)

    extracted_text = ""

    for page in reader.pages:
        text = page.extract_text()

        if text:
            extracted_text += text

    skills_db = [
        "Java",
        "Python",
        "React",
        "JavaScript",
        "Git",
        "SQL",
        "HTML",
        "CSS",
        "FastAPI",
        "Machine Learning"
    ]


    detected_skills = []

    for skill in skills_db:
        if skill.lower() in extracted_text.lower():
            detected_skills.append(skill)

    return {
        "filename": file.filename,
        "pages": len(reader.pages),
        "words": len(extracted_text.split()),
        "characters": len(extracted_text),
        "skills": detected_skills,
        "target_role": target_role,
        "text": extracted_text[:1000]
    } 