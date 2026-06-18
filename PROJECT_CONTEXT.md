# Career Pivot 🚀

> Stop guessing your career path. Start building it.

Career Pivot helps students understand **how close they are to their dream role** and provides a personalized roadmap to bridge the gap.

Instead of learning random skills, building projects blindly, or endlessly watching tutorials, students can upload their resume, select a target role, and receive actionable insights on what to improve.

---

## ✨ The Problem

Most students face the same challenges:

* ❓ Unsure which skills actually matter for their target role
* 📚 Learning without a clear direction
* 📄 Resumes that don't effectively showcase their abilities
* 🛠️ Projects that don't align with industry expectations
* 🎯 No visibility into their current career readiness

Career Pivot transforms uncertainty into a clear action plan.

---

## 💡 How It Works

```text
Upload Resume
      ↓
Choose Target Role
      ↓
Analyze Skills & Experience
      ↓
Identify Gaps
      ↓
Generate Personalized Roadmap
```

---

## 🎯 MVP Features

### Phase 1 — Foundation

* [x] Landing Page
* [x] Resume Upload UI
* [x] FastAPI Backend Setup
* [x] Frontend ↔ Backend Communication
* [ ] PDF Resume Parsing
* [ ] Resume Text Extraction
* [ ] Dashboard

### Phase 2 — Career Intelligence

* [ ] Target Role Selection
* [ ] Match Score Generation
* [ ] Skill Gap Analysis
* [ ] Resume Suggestions
* [ ] Personalized Roadmap

### Phase 3 — AI Enhancement

* [ ] AI-Powered Insights
* [ ] Project Recommendations
* [ ] Learning Resource Recommendations
* [ ] Exportable Career Reports

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS v4

### Backend

* FastAPI
* Python

### AI

* Groq API

### Deployment

* Vercel (Frontend)
* Render / Railway (Backend)

---

## 📂 Project Structure

```bash
CareerPivot/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── ProblemCards.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── ReportPreview.jsx
│   │   │   ├── RoadmapSection.jsx
│   │   │   ├── ResumeUpload.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── venv/
│   └── main.py
│
└── README.md
```

---

## 🚧 Current Milestone

Building the first complete workflow:

```text
Select Resume
      ↓
Upload PDF
      ↓
Send to FastAPI
      ↓
Extract Resume Text
      ↓
Display Results
```

No AI yet.

The current focus is building a reliable product pipeline before introducing AI features.

---

## 🧠 Development Philosophy

* Build real features before polishing UI endlessly
* Learn by building products, not tutorials
* Keep commits small and meaningful
* Ship working versions quickly
* Prioritize functionality over visual perfection

---

## 🗺️ Roadmap

* [ ] Resume parsing engine
* [ ] Role recommendation system
* [ ] Skill gap analysis
* [ ] AI-generated career roadmap
* [ ] Exportable reports
* [ ] Authentication
* [ ] User dashboard
* [ ] Deployment

---

## ⚙️ Local Setup

### Clone the repository

```bash
git clone https://github.com/CmdMayank/CareerPivot.git
cd CareerPivot
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend

python3 -m venv venv
source venv/bin/activate

pip install fastapi uvicorn

uvicorn main:app --reload
```

---

## 🤝 Contributing

Suggestions, feedback, and ideas are always welcome.

If you'd like to contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## ⭐ Support

If you found this project interesting, consider starring the repository.

It helps motivate future development and lets others discover Career Pivot.

---

Built with ❤️ by Mayank Sharma.
