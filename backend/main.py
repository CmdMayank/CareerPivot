from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "Career Pivot Backend Running"
    }

@app.get("/test")
def test():
    return {
        "status": "Backend Connected Successfully"
    }