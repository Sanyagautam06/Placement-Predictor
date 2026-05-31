# 🎓 Placement Intelligence Platform

> An AI-powered career readiness evaluator for engineering students — combining a Random Forest ML model, Google Gemini AI recommendations, resume PDF parsing, and downloadable career dossiers in a single Flask web app.

**🔗 Live Demo: [placement-predictor-seven.vercel.app](https://placement-predictor-seven.vercel.app)**

---

## What It Does

Students fill out a 9-step form covering academics, skills, coding profiles, and soft skills. The app runs their profile through a trained **Random Forest classifier**, computes a weighted **Placement Readiness Score**, and surfaces a full breakdown — including skill gap analysis, resume completeness, a leaderboard, peer comparisons, and a downloadable PDF career dossier.

If a Gemini API key is configured, the AI recommendations endpoint generates a personalized roadmap, interview prep plan, and suggested roles. Without a key, a rule-based fallback kicks in automatically — the app is always fully functional.

---

## Features

- **9-step evaluation form** — demographics, academics, experience, projects, technical skills, coding profiles (LeetCode / CodeChef / Codeforces), achievements, soft skills, and resume upload
- **ML prediction** — Random Forest Classifier trained on 300 synthetic profiles; blends ML probability with a heuristic readiness score across 6 weighted dimensions
- **Resume PDF parser** — extracts skills, project count, and certifications from an uploaded PDF using pypdf
- **Gemini AI recommendations** — career roadmap, interview plan, improvement actions, role suggestions, and certifications (falls back to rule-based logic if no API key)
- **Prediction history** — full archive of all evaluations with timestamps
- **Leaderboard** — top 20 students ranked by readiness score
- **Peer comparison** — side-by-side breakdown of any two saved predictions
- **PDF report download** — ReportLab-generated career intelligence dossier per student, streamed in-memory
- **5 demo presets** — pre-built profiles (Product Engineer, Competitive Programmer, Full Stack Dev, Data Scientist, Career Switcher)
- **Dual database mode** — SQLite locally, PostgreSQL (Supabase) on Vercel — zero config switching

---

## Project Structure

```
placement-predictor/
│
├── api/
│   └── index.py                  # Vercel serverless entrypoint
│
├── static/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   └── js/
│       └── main.js
│
├── templates/
│   ├── index.html                # Main SPA (form, results, history, leaderboard)
│   └── history.html
│
├── database/                     # Placeholder for local DB artifacts
├── model/                        # Placeholder for model artifacts
├── uploads/                      # Temporary resume upload staging
├── utils/                        # Utility modules (reserved)
│
├── app.py                        # Flask app — all routes, ML model, PDF generation
├── placement_forest.joblib       # Pre-trained Random Forest model (committed to repo)
├── predictions.db                # Auto-created locally (SQLite, gitignored)
├── requirements.txt
├── vercel.json                   # Vercel deployment config
├── metadata.json
├── package.json
├── .env.example
└── .gitignore
```

---

## Quickstart

### 1. Clone and install

```bash
git clone https://github.com/Sanyagautam06/Placement-Predictor.git
cd Placement-Predictor
pip install -r requirements.txt
```

### 2. Configure environment

```bash
cp .env.example .env
# Add your Gemini API key — leave blank to use rule-based fallback
```

```env
GEMINI_API_KEY="your_key_here"
```

### 3. Run

```bash
python app.py
```

Open `http://localhost:3000`. SQLite is created automatically — no setup needed.

---

## API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Serves the frontend |
| `POST` | `/api/predict` | Run placement prediction for a student profile |
| `GET` | `/api/prediction/<id>` | Fetch a single saved prediction by ID |
| `POST` | `/api/ai-recommendations` | Get Gemini (or fallback) career recommendations |
| `POST` | `/api/upload-resume` | Parse a PDF resume and extract skills/projects |
| `GET` | `/api/history` | List all saved predictions |
| `GET` | `/api/leaderboard` | Top 20 students by readiness score |
| `GET` | `/api/compare?id1=X&id2=Y` | Compare two predictions side by side |
| `GET` | `/api/download-report/<id>` | Download a PDF career dossier |

---

## ML Model

The Random Forest Classifier uses 8 features and blends its output (40%) with a heuristic readiness score (60%):

| Dimension | Weight |
|-----------|--------|
| Academic CGPA | 25% |
| Technical skills count | 20% |
| Coding rating (LeetCode) | 15% |
| Internships + projects | 15% |
| Soft skills average | 15% |
| Achievements (hackathons, OSS, GitHub) | 10% |

Final probability is clamped to 15–99. Levels: **Excellent** (≥85), **Strong** (≥70), **Average** (≥50), **Needs Improvement** (<50).

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Python 3, Flask |
| ML | scikit-learn (RandomForestClassifier), joblib |
| Database | SQLite (local) / PostgreSQL via psycopg2 (Supabase on Vercel) |
| PDF generation | ReportLab (in-memory BytesIO streaming) |
| Resume parsing | pypdf |
| AI recommendations | Google Gemini `gemini-2.5-flash` via `google-genai` |
| Frontend | Vanilla JS, Tailwind CSS (CDN), Lucide Icons |
| Hosting | Vercel (serverless Python) |

---

## Deployment

The app is deployed on Vercel at **[placement-predictor-seven.vercel.app](https://placement-predictor-seven.vercel.app)**.

### Environment Variables (set in Vercel dashboard)

| Variable | Description |
|----------|-------------|
| `GEMINI_API_KEY` | Gemini API key for AI recommendations. Falls back to rule-based logic if not set. |
| `DATABASE_URL` | Supabase PostgreSQL connection string — must include `?sslmode=require` |

### Deploy your own

1. Fork the repo
2. Create a free Postgres database at [supabase.com](https://supabase.com)
3. Commit `placement_forest.joblib` to the repo
4. Import the repo on [vercel.com](https://vercel.com)
5. Add `GEMINI_API_KEY` and `DATABASE_URL` (with `?sslmode=require`) in Vercel environment variables
6. Deploy

The app auto-detects `DATABASE_URL` and switches from SQLite to PostgreSQL — no code changes needed.

---

## Known Limitations

- **SQLite is local-only** — predictions made locally aren't visible on the deployed version
- **Synthetic training data** — accuracy improves significantly when retrained on real placement outcome data
- **Resume parsing is keyword-based** — unusual formatting or scanned PDFs may produce incomplete results
- **Vercel Hobby tier** — 60s function timeout; first request after inactivity may be slow due to sklearn cold start

---

## Roadmap

- [ ] Upload a custom CSV to retrain the model in-app
- [ ] User authentication and per-user prediction history
- [ ] Admin analytics dashboard (department trends, score distributions)
- [ ] LLM-based resume parsing for better extraction accuracy
- [ ] Email delivery of PDF reports

---

## License

MIT