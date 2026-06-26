# Partha Rakshit — Portfolio

Personal portfolio of **Partha Rakshit**, QA Engineer and Software Tester. Features a dark liquid-glass design, looping video backgrounds per section, scroll-triggered animations, a filterable project showcase, and a floating AI assistant powered by Google Gemini.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS v3.4.1 |
| Animation | Motion v12 (`motion/react`) |
| 3D | Three.js + @react-three/fiber |
| AI Chatbot | Google Gemini 2.0 Flash API |
| Contact Form | EmailJS (`@emailjs/browser`) |
| Icons | Lucide React |

---

## Project Structure

```text
src/
├── components/
│   ├── Header.tsx           # Fixed navbar — desktop pill + mobile hamburger overlay
│   ├── Hero.tsx             # Full-viewport landing section
│   ├── Capabilities.tsx     # Core QA competency cards
│   ├── About.tsx            # Personal bio
│   ├── Skills.tsx           # Sidebar + animated progress bar skill panel
│   ├── Education.tsx        # Zigzag timeline with SVG score rings
│   ├── Experience.tsx       # Work history with expandable detail cards
│   ├── Projects.tsx         # Filterable project showcase
│   ├── Certifications.tsx   # Verified credential card grid
│   ├── Contact.tsx          # EmailJS contact form + social links
│   ├── Footer.tsx
│   ├── ChatBot.tsx          # Gemini-powered floating AI assistant
│   ├── FadingVideo.tsx      # IntersectionObserver lazy-play video wrapper
│   ├── BlurText.tsx         # Character-level blur-in text animation
│   ├── Background3D.tsx     # Three.js 3D canvas background
│   ├── ScrollNavigation.tsx # Scroll progress indicator
│   └── VisitorCounter.tsx   # Live visitor count display
├── App.tsx                  # Root layout and section order
├── index.css                # Liquid-glass design system + global animations
└── main.tsx                 # React entry point
```

---

## Sections

### Header

Fixed navigation that adapts between viewport sizes.

- **Desktop** — three-column pill layout: `pr` monogram on the left, nav links centred in a glass pill, "Download Resume" CTA on the right.
- **Mobile** — monogram + hamburger toggle. Opens a full-screen dark overlay with staggered serif nav links and a resume download button pinned to the bottom.
- All nav links smooth-scroll to their target section and close the mobile menu.

---

### Hero

Full-viewport landing with a looping video background.

- Animated badge, full name, and a cycling role title with a blinking cursor:
  - Quality Analyst Executive
  - Software Tester
  - Test Automation Engineer
- BlurText tagline with character-level blur-in animation.
- Two CTAs: **View Projects** (anchor scroll) and **Download Resume** (Google Drive link).
- Three stat cards — Years of Experience, Projects Delivered, Bugs Resolved — with hover glow effects.
- Bottom glass status bar showing availability, location, and response time.

---

### Capabilities

Three core QA disciplines, each in a glass card with scroll-triggered fade-up animation.

| Discipline | Tools |
|---|---|
| Test Automation | Selenium WebDriver, TestNG, Java, Page Object Model |
| API Testing | Postman, REST Assured, JSON, OAuth2 |
| Performance Testing | JMeter, Load Testing, Bottleneck Analysis |

---

### About

Personal introduction covering background, professional focus, and motivation.

---

### Skills

31 skills across 5 categories in a sidebar + panel layout.

- **Desktop** — persistent left sidebar with category icons, skill counts, and a gradient active indicator. Selecting a category cross-fades the panel using `AnimatePresence`.
- **Mobile** — horizontal scrollable pill tabs.
- Each skill card shows a colour-coded proficiency label and a gradient progress bar that animates in on scroll.

**Proficiency colour tiers:**

| Level | Colour | Threshold |
|---|---|---|
| Expert | Cyan `#00d4ff` | ≥ 90% |
| Advanced | Emerald `#10b981` | ≥ 80% |
| Intermediate | Amber `#f59e0b` | ≥ 70% |
| Familiar | Violet `#a78bfa` | < 70% |

---

### Education

Academic history as a zigzag timeline (desktop) / single column (mobile).

| Institution | Qualification | Score | Year |
|---|---|---|---|
| Lovely Professional University | B.Tech — Computer Science & Engineering | 80.80% | 2020–2024 |
| Jhantipahari High School | Class 12 — Higher Secondary | 78.2% | 2019 |
| Jhantipahari High School | Class 10 — Secondary | 77.42% | 2017 |

Each card includes:

- Animated SVG score ring (strokeDashoffset animation, gradient arc unique per card).
- Type badge with accent colour — cyan for University, emerald for School.
- Animated gradient progress bar for the score.
- Location and year metadata.
- A gradient spine running down the centre of the timeline on desktop.

---

### Experience

Two professional roles, each in an expandable glass card.

**Quality Analyst Executive — Legistify Services PVT Ltd** *(Sept 2024 – May 2026 · Current)*

- Developed and executed comprehensive test plans and scripts.
- Smoke testing for critical functionalities; end-to-end bug tracking.
- New Relic for transaction traces, error analytics, and custom dashboards.
- MongoDB Atlas and AWS monitoring for database performance and CPU metrics.
- Agile project management via Taiga.

**Quality Analyst Intern (Automation Testing) — Wesoftek Solutions** *(Dec 2023 – May 2024)*

- Functional, UI, UAT, compatibility, and exploratory testing on a Laravel platform.
- Web API testing with Postman; Selenium WebDriver + TestNG automation scripts.
- Security testing with Firebug and Temper Data; load/stress testing via JMeter.
- Regression, Alpha, and Beta testing for web and mobile (Android + iOS).
- Full bug lifecycle in Mantis Bug Tracker; SQL for backend data validation.

---

### Projects

Six projects with live demo and GitHub links, filterable by category.

| Project | Stack | Description |
|---|---|---|
| **TaskMate** | React, Tailwind, Zustand, SheetJS | Feature-rich task management with team collaboration |
| **Business Management System** | Next.js, Tailwind, shadcn/ui, Recharts | Workforce, payroll, and finance management dashboard |
| **Bugdesk** | React, Tailwind, Recharts, localStorage | Bug tracker with a 7-stage lifecycle and dark mode |
| **Maharaja Restaurant** | React, Tailwind, Vite, Framer Motion | Restaurant site with menu, reservations, and gallery |
| **Expenso** | React, Tailwind, Framer Motion, jsPDF | Expense tracker with budgets, charts, and PDF export |

Each card shows a screenshot thumbnail, tech tags, and hover animation. Featured projects are highlighted at the top.

---

### Certifications

Five verified credentials in a responsive three-column card grid.

| Certificate | Issuer | Date |
|---|---|---|
| Software Testing | SkillStone | Jan 2023 |
| Master Java Programming — Beginner to Advanced | GeeksforGeeks | May 2023 |
| Web and Mobile Testing with Selenium | Coursera | Mar 2023 |
| API Testing using Postman | Postman | Aug 2024 |
| Introduction to Programming Using Python | HackerRank | Sep 2022 |

Each card has a gradient top accent bar, issuer badge with gradient ring border, a "Verified" label, date pill, and a direct link to the certificate. A footer CTA banner links to the contact section.

---

### Contact

Contact form powered by EmailJS — no backend required.

- Fields: Name, Email, Message with floating-label inputs.
- Animated focus borders.
- Success and error feedback displayed inline after submission.
- Social links: Gmail · LinkedIn · GitHub.

---

### ChatBot

Floating AI assistant in the bottom-right corner, powered by **Google Gemini 2.0 Flash**.

- Tap the chat icon to open the panel.
- Pre-loaded with a system prompt containing Partha's full background — education, skills, experience, and contact details.
- Four quick-reply suggestion chips shown on first open.
- Typing indicator while the API processes a response.
- Answers questions about role, skills, certifications, and how to get in touch.

---

## Design System

### Liquid-Glass

Two CSS utility classes used across cards, navigation, chips, and overlays.

- `.liquid-glass` — subtle: `rgba(255,255,255,0.01)` background, 4 px blur, gradient border mask via `::before` pseudo-element.
- `.liquid-glass-strong` — heavier: `rgba(255,255,255,0.02)` background, 50 px blur. Used for primary CTAs and the mobile menu.

### Colour Tokens

| Token | Hex |
|---|---|
| Cyan (primary accent) | `#00d4ff` |
| Emerald (secondary accent) | `#10b981` |
| Amber | `#f59e0b` |
| Violet | `#a78bfa` |

### FadingVideo

`FadingVideo.tsx` wraps `<video>` with an `IntersectionObserver`. The element starts at `opacity: 0` and fades to `1` only when it enters the viewport and playback begins. Each section has its own looping background video loaded this way.

### Animations

All scroll-triggered animations use `whileInView` from Motion v12 with `viewport: { once: true }`. Progress bars animate from `width: 0` to their target. SVG score rings animate via `strokeDashoffset` from full circumference to the score-derived offset.

---

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_GEMINI_API_KEY=your_google_gemini_api_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

**Gemini API key** — create one at [Google AI Studio](https://aistudio.google.com/).

**EmailJS keys** — sign up at [emailjs.com](https://www.emailjs.com/), connect a Gmail service, create a template, and copy the Service ID, Template ID, and Public Key from your account dashboard.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Type check
npx tsc --noEmit

# Production build → dist/
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment

### Netlify

1. Connect the GitHub repo in the Netlify dashboard.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add all `VITE_*` variables under **Site Settings → Environment Variables**.

### Vercel

1. Import the repo in Vercel.
2. Framework preset: **Vite**
3. Add all `VITE_*` variables under **Project Settings → Environment Variables**.

---

## Contact

**Partha Rakshit**

- Email: [partharakshit5653@gmail.com](mailto:partharakshit5653@gmail.com)
- LinkedIn: [linkedin.com/in/partharakshit](https://www.linkedin.com/in/partharakshit)
- GitHub: [github.com/CoderPartha012](https://github.com/CoderPartha012)
- GeeksforGeeks: [geeksforgeeks.org/user/partharakshit5653](https://www.geeksforgeeks.org/user/partharakshit5653)
