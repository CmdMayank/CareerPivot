# Career Pivot

## Vision

Career Pivot helps students understand how close they are to their dream role and provides a clear roadmap to bridge the gap.

Instead of blindly learning random skills, students can upload their resume, choose a target role, and receive actionable insights about what they need to improve.

---

## Problem Statement

Many students:

* Don't know which skills actually matter for their target role
* Build projects without understanding industry expectations
* Have resumes that fail to communicate job readiness
* Follow random learning paths without a clear destination

Career Pivot aims to solve this by providing career clarity through resume analysis and personalized roadmaps.

---

## MVP Features

### Phase 1 (Current Focus)

* Landing Page
* Resume Upload
* PDF Resume Parsing
* Resume Text Extraction
* Basic Dashboard

### Phase 2

* Target Role Selection
* Match Score Generation
* Skill Gap Analysis
* Resume Suggestions
* Personalized Roadmap

### Phase 3

* AI-Powered Insights (Groq)
* Project Recommendations
* Learning Resource Recommendations
* Export Career Report

---

## Tech Stack

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

## Current Folder Structure

frontend/

* src/

  * components/

    * Navbar.jsx
    * Hero.jsx
    * ProblemCards.jsx
    * HowItWorks.jsx
    * ReportPreview.jsx
    * RoadmapSection.jsx
    * Footer.jsx
  * App.jsx
  * main.jsx
  * index.css

---

## Current Progress

### Completed

* [x] GitHub Repository Created
* [x] React + Vite Setup
* [x] Tailwind CSS v4 Setup
* [x] Component Architecture
* [x] Landing Page (V1)
* [x] Navbar
* [x] Hero Section
* [x] Problem Cards Section
* [x] How It Works Section
* [x] Report Preview Section
* [x] Roadmap Section
* [x] Footer Section
* [x] GitHub Push Workflow

### Next

* [ ] Resume Upload Button Functionality
* [ ] PDF File Picker
* [ ] Resume Parsing
* [ ] Extract Resume Text
* [ ] Resume Dashboard
* [ ] Target Role Selection
* [ ] Match Engine
* [ ] Skill Gap Analysis

---

## Current Status

Career Pivot has a completed V1 landing page and is transitioning from UI development into core product development.

The immediate goal is to build the first functional feature:

Resume Upload → PDF Parsing → Text Extraction → Dashboard Display

No AI integration yet.

Focus is on building a working product pipeline before introducing Groq-powered analysis.

---

## GitHub

Repository:

https://github.com/CmdMayank/CareerPivot

---

## Development Philosophy

* Build real features before polishing UI endlessly
* Learn by building products, not tutorials
* Keep commits small and meaningful
* Ship working versions quickly
* Prioritize portfolio-worthy functionality over visual perfection
## Current Milestone

Build the first end-to-end workflow:

User selects a PDF resume → Frontend sends the file to FastAPI → Backend receives the file → Extract text from the PDF → Display extracted content on the frontend.

Success criteria:

* User can upload a PDF
* Backend receives the file successfully
* Extracted text is returned to React
* User sees the parsed resume content
