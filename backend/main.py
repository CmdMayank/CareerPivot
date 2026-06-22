from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from PyPDF2 import PdfReader

app = FastAPI()

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

@app.post("/upload")
async def upload_resume(file: UploadFile = File(...)):
    reader = PdfReader(file.file)

    extracted_text = ""

    for page in reader.pages:
        text = page.extract_text()

        if text:
            extracted_text += text

    return {
        "filename": file.filename,
        "text": extracted_text[:1000]
    }