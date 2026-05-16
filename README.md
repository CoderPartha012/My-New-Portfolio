# Partha Rakshit — Portfolio

A modern, fully responsive portfolio website built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Vite**. Designed for a QA Engineer / Software Tester, featuring a cyberpunk-inspired dark aesthetic with animated sections, an AI chatbot powered by Google Gemini, and a working contact form via EmailJS.

---

## Live Demo

> Deploy to Netlify / Vercel and paste the URL here.

---

## Features

- **Animated Hero** — gradient headline, role pills, and scroll indicator
- **About** — personal intro with stats and highlights
- **Skills** — categorised skill cards with proficiency indicators
- **Educational Journey** — zigzag alternating timeline with SVG circular progress rings
- **Experience** — professional timeline with company details
- **Projects** — filterable project showcase with live/repo links
- **Certifications** — bento-grid cards with real credential links (SkillStone, GeeksforGeeks, Coursera, Postman, HackerRank)
- **Contact Form** — EmailJS integration; sends messages directly to Gmail
- **AI Chatbot** — floating assistant powered by Google Gemini 2.0 Flash, knows Partha's full profile
- **Floating Navbar** — pill-style desktop nav + full-screen mobile overlay with Resume CTA
- **3D Background** — Three.js particle canvas
- **Fully Responsive** — mobile, tablet, and desktop layouts

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Styling | Tailwind CSS |
| Build | Vite |
| Icons | Lucide React |
| 3D / Canvas | Three.js + @react-three/fiber |
| Email | EmailJS (`@emailjs/browser`) |
| AI Chatbot | Google Gemini API (REST) |
| Animation | CSS custom animations + Motion |
| Linting | ESLint + TypeScript-ESLint |

---

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm or yarn

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/CoderPartha012/portfolio.git
cd portfolio
```

```bash
# 2. Install dependencies
npm install
```

```bash
# 3. Set up environment variables
cp .env.example .env
# Fill in your keys — see Environment Variables section below
```

```bash
# 4. Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Environment Variables

All secrets live in a `.env` file that is **never committed** (listed in `.gitignore`).
Copy `.env.example` to `.env` and fill in your values:

```env
VITE_GEMINI_API_KEY=your_google_gemini_api_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### How to get each key

**Gemini API Key**

1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Create a new API key
3. Paste it as `VITE_GEMINI_API_KEY`

**EmailJS Keys**

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Add an Email Service (connect your Gmail) → copy **Service ID**
3. Create an Email Template → copy **Template ID**
4. Go to Account → copy **Public Key**

---

## Project Structure

```text
project/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Floating pill navbar + mobile overlay
│   │   ├── Hero.tsx            # Landing section with CTA buttons
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx       # Zigzag timeline with SVG progress rings
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Certifications.tsx  # Bento grid with live credential links
│   │   ├── Contact.tsx         # EmailJS contact form
│   │   ├── ChatBot.tsx         # Gemini-powered AI assistant
│   │   ├── Background3D.tsx    # Three.js particle canvas
│   │   ├── Footer.tsx
│   │   ├── Loader.tsx
│   │   └── ScrollNavigation.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env                        # Secret keys — NOT committed
├── .env.example                # Template for required env vars
├── .gitignore
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Scripts

```bash
npm run dev       # Start development server
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

---

## Deployment

### Netlify

1. Connect the GitHub repo in the Netlify dashboard
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add all `VITE_*` environment variables in **Site Settings → Environment Variables**

### Vercel

1. Import the GitHub repo in Vercel
2. Framework preset: **Vite**
3. Add all `VITE_*` environment variables in **Project Settings → Environment Variables**

> Never paste real keys into `netlify.toml` or `vercel.json` — use the dashboard env var UI instead.

---

## Certifications Showcased

| # | Certification | Issuer | Year |
|---|---|---|---|
| 1 | Software Testing | SkillStone | 2023 |
| 2 | Master Java Programming | GeeksforGeeks | 2023 |
| 3 | Web and Mobile Testing with Selenium | Coursera | 2023 |
| 4 | API Testing using Postman | Postman | 2024 |
| 5 | Introduction to Programming Using Python | HackerRank | 2022 |

---

## Contact

**Partha Rakshit**

- Email: [partharakshit5653@gmail.com](mailto:partharakshit5653@gmail.com)
- LinkedIn: [linkedin.com/in/partharakshit](https://www.linkedin.com/in/partharakshit)
- GitHub: [github.com/CoderPartha012](https://github.com/CoderPartha012)
- GeeksforGeeks: [geeksforgeeks.org/user/partharakshit5653](https://www.geeksforgeeks.org/user/partharakshit5653)

---

## License

MIT License — feel free to use this as a template for your own portfolio.
