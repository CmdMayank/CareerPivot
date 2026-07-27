# Career Pivot 🚀

> **Stop guessing your career path. Start building it.**

Career Pivot is an AI-powered career intelligence platform that helps students understand how close they are to their dream role.

Instead of learning random skills or following generic roadmaps, Career Pivot analyzes a student's resume, compares it against industry requirements, identifies skill gaps, and generates a personalized learning roadmap.

---

# ✨ Why Career Pivot?

Most students ask questions like:

* What should I learn next?
* Am I ready for internships?
* Which skills am I missing?
* Is my resume good enough for my dream role?

Career Pivot answers those questions using resume analysis and role-based skill matching.

---

# 💡 Current Workflow

```text
Upload Resume
      ↓
Extract Resume Text
      ↓
Detect Existing Skills
      ↓
Choose Target Role
      ↓
(Upcoming)
Compare Against Industry Skills
      ↓
Generate Match Score
      ↓
Identify Missing Skills
      ↓
Generate Learning Roadmap
```

---

# 🚀 Current Features

## Landing Page

* Modern responsive UI
* Product overview
* Career roadmap preview
* Resume upload section

## Resume Analysis

* PDF Resume Upload
* PDF Text Extraction
* Resume Statistics

  * Total Pages
  * Total Words
  * Total Characters
* Skill Detection Engine
* Resume Preview

## Career Planning

* Target Role Selection
* Career Goal Dashboard

---

# 🎯 Upcoming Features

## Career Intelligence Engine

* Match Score
* Missing Skills Detection
* Existing Skills Analysis
* Resume Improvement Suggestions

## AI Features

* AI Career Advisor (Groq)
* Personalized Learning Roadmap
* Project Recommendations
* Course Recommendations

## Platform

* Authentication
* Saved Reports
* User Dashboard
* Resume History
* Export Career Report

---

# 🛠 Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS v4

## Backend

* FastAPI
* Python
* PyPDF2

## AI

* Groq API *(planned)*

## Deployment

* Vercel
* Render

---


# 📂 Project Structure

```text
CareerPivot/

frontend/
│
├── src/
│   ├── components/
│   │
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ResumeUpload.jsx
│   ├── ProblemCards.jsx
│   ├── HowItWorks.jsx
│   ├── ReportPreview.jsx
│   ├── RoadmapSection.jsx
│   └── Footer.jsx
│
├── App.jsx
├── main.jsx
└── index.css


backend/
│
├── main.py
├── roles.py
└── venv/


README.md

```

---

# ✅ Current Progress


### Product Foundation

* [x] React + Vite Setup
* [x] Tailwind CSS v4
* [x] Responsive Landing Page
* [x] Component Architecture

### Backend

* [x] FastAPI Setup
* [x] CORS Configuration
* [x] Resume Upload API
* [x] PDF Parsing
* [x] Resume Text Extraction

### Resume Dashboard

* [x] Resume Statistics
* [x] Skill Detection
* [x] Resume Preview
* [x] Loading State
* [x] Improved Upload Experience

### Career Intelligence

* [x] Target Role Selection
* [ ] Match Score Engine
* [ ] Missing Skills Detection
* [ ] Career Readiness Score
* [ ] Learning Roadmap


---

# 🎯 Current Milestone

Building Career Pivot's first intelligence engine.

Current pipeline:

```text
Resume
      ↓
Text Extraction
      ↓
Skill Detection
      ↓
Target Role
      ↓
Skill Comparison
      ↓
Career Match Score
```

---

# 🧠 Development Philosophy

* Build products, not tutorial clones.
* Prioritize functionality before AI.
* Ship small, meaningful improvements.
* Keep commits focused and descriptive.
* Learn through real-world engineering.

---

# ⚙ Local Setup

## Clone

```bash
git clone https://github.com/CmdMayank/CareerPivot.git

cd CareerPivot
```

## Frontend

```bash
cd frontend

npm install
npm run dev
```

## Backend

```bash
cd backend

python3 -m venv venv

source venv/bin/activate

pip install fastapi uvicorn python-multipart PyPDF2

uvicorn main:app --reload
```

---

# 🗺 Roadmap

## Version 0.1

* Resume Upload
* Resume Parsing
* Skill Detection
* Target Role Selection

## Version 0.2

* Match Score
* Missing Skills
* Career Readiness Dashboard

## Version 1.0

* AI Career Advisor
* Personalized Roadmap
* Resume Suggestions
* Learning Resources
* Export Career Report

---

# 🤝 Contributing

Contributions, suggestions and feature ideas are always welcome.

---

# ⭐ Support

If you found Career Pivot useful or interesting, consider giving the repository a ⭐.

It helps more students discover the project and motivates future development.

---

Built with ❤️ by **Mayank Sharma**
