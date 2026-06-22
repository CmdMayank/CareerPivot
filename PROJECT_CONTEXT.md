# Career Pivot 🚀

> **Stop guessing your career path. Start building it.**

Career Pivot helps students understand **how close they are to their dream role** and provides a personalized roadmap to bridge the gap.

Instead of learning random skills, building projects blindly, or endlessly consuming tutorials, students can upload their resume, choose a target role, and receive actionable insights on what to improve next.

---

## ✨ Why Career Pivot?

Students often struggle to answer a simple question:

**"What should I learn next to achieve my dream role?"**

Career Pivot transforms career uncertainty into a structured, data-driven action plan.

### Common Challenges

* ❓ Unsure which skills actually matter for their target role
* 📚 Learning without a clear direction
* 📄 Resumes that fail to communicate job readiness
* 🛠️ Building projects that don't align with industry expectations
* 🎯 No visibility into current career readiness

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

## 🎯 MVP Roadmap

### Phase 1 — Foundation (In Progress)

* [x] Landing Page
* [x] Resume Upload UI
* [x] FastAPI Backend Setup
* [x] Frontend ↔ Backend Communication
* [x] CORS Configuration
* [ ] PDF Resume Parsing
* [ ] Resume Text Extraction
* [ ] Basic Dashboard

### Phase 2 — Career Intelligence

* [ ] Target Role Selection
* [ ] Match Score Generation
* [ ] Skill Gap Analysis
* [ ] Resume Improvement Suggestions
* [ ] Personalized Career Roadmap

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

* Groq API *(planned)*

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
│   │   ├── main.jsx
│   │   └── index.css
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

## ✅ Current Progress

* [x] GitHub Repository Created
* [x] React + Vite Setup
* [x] Tailwind CSS v4 Setup
* [x] Component Architecture
* [x] Landing Page (V1)
* [x] Resume Upload UI
* [x] PDF File Picker
* [x] FastAPI Setup
* [x] Frontend ↔ Backend Connection
* [x] CORS Configuration


---

## 🚧 Current Milestone

Building the first end-to-end workflow:

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

**Current focus:** Build a reliable product pipeline before introducing AI features.

---

## 🧠 Development Philosophy

* Build real features before polishing the UI endlessly
* Learn by building products, not tutorials
* Keep commits small and meaningful
* Ship working versions quickly
* Prioritize functionality over visual perfection

---

## 🗺️ Product Roadmap

* [ ] Resume Parsing Engine
* [ ] Target Role Recommendation System
* [ ] Skill Gap Analysis
* [ ] AI-Generated Career Roadmap
* [ ] Exportable Reports
* [ ] Authentication
* [ ] User Dashboard
* [ ] Deployment

---

## ⚙️ Local Setup

### Clone the Repository

```bash
git clone https://github.com/CmdMayank/CareerPivot.git
cd CareerPivot
```

### Frontend Setup

```bash
cd frontend

npm install
npm run dev
```

### Backend Setup

```bash
cd backend

python3 -m venv venv
source venv/bin/activate

pip install fastapi uvicorn python-multipart

uvicorn main:app --reload
```

---

## 🤝 Contributing

Suggestions, feedback, and ideas are always welcome.

To contribute:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

---

## ⭐ Support

If you find this project interesting, consider giving it a star.

Your support motivates future development and helps others discover Career Pivot.

---

Built with ❤️ by **Mayank Sharma**
