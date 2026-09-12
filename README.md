# Partha Rakshit - QA Engineer Portfolio

Personal portfolio showcasing Partha Rakshit's software testing experience, education, technical skills, automation frameworks, and web projects. Built with React, TypeScript, and Vite, with a responsive dark interface and CSS animations.

## Features

- Fixed desktop navigation and a collapsible mobile menu.
- Smooth section scrolling, active-section highlighting, and reduced-motion support.
- Education milestones and a chronological work history with tools and responsibilities.
- Project search by title, description, or technology, plus category filters for test automation and web applications.
- Certification cards with credential links.
- Contact form with validation, inline feedback, and automatic field reset after success.
- Keyboard-accessible controls and a skip link that appears only when focused, without a startup text flash.

Clicking a section link adds its hash to the URL. Refreshing clears the hash without adding a history entry; direct section links and browser back/forward navigation remain supported.

## Tech stack

| Area | Implementation |
| --- | --- |
| UI | React 18, TypeScript |
| Development and builds | Vite 5 |
| Styling | Tailwind CSS 3 and custom CSS |
| Motion | CSS keyframes, transitions, IntersectionObserver |
| Icons | Lucide React |
| Email delivery | EmailJS browser SDK |

## Run locally

Install Node.js and npm, then run from the repository root:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

Useful commands:

```bash
# Check application types
npx tsc --noEmit -p tsconfig.app.json

# Run repository lint checks
npm run lint

# Build the production site into dist/
npm run build

# Preview the production build
npm run preview
```

On Windows, if PowerShell blocks npm scripts, use `npm.cmd` and `npx.cmd` in place of `npm` and `npx`.

## Contact form

The form requires a name, a valid email address, and a message. Names and messages containing only whitespace are rejected.

### Current demo behavior

If any required EmailJS setting is missing, submitting valid details displays a success-style confirmation explaining that the form is in demo mode and **no email has been sent**. The fields reset, and the confirmation remains visible.

The email address link uses `mailto:` and opens the visitor's configured email application.

### Enable email delivery

Create `.env.local` in the repository root and supply the values from your EmailJS service and template:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

The form supplies these template parameters:

| Parameter | Value |
| --- | --- |
| `from_name` | Visitor's name |
| `from_email` | Visitor's email address |
| `message` | Visitor's message |
| `to_name` | Partha Rakshit |

Configure the recipient address in the EmailJS template and use `from_email` for replies. Restart Vite after changing environment variables. For deployed builds, configure the same variables in the hosting environment and rebuild.

When all three settings are present, the form attempts EmailJS delivery. A successful response clears the fields and shows a sent confirmation. A failed request retains the entered details and displays an error.

## Main files

```text
src/
  components/
    Header.tsx          Navigation and active-section tracking
    Hero.tsx            Introduction and resume link
    About.tsx           Background and professional focus
    Skills.tsx          Skill categories and tool lists
    Education.tsx       Educational journey
    Experience.tsx      Work history and technologies
    Projects.tsx        Project data, search, and filters
    Certifications.tsx  Credential cards
    Contact.tsx         Contact details and form behavior
    Footer.tsx          Footer navigation and social links
    QAReveal.tsx        One-time section reveal observer
    QAMotion.tsx        Scroll progress and in-view motion tracking
  App.tsx               Page composition
  main.tsx              React entry and refresh hash cleanup
  index.css             Base styles and responsive layouts
  qa-premium.css        Decorative effects and motion styles
```

Older components such as `Loader.tsx`, `Background3D.tsx`, and `ScrollNavigation.tsx` remain in the repository but are not mounted by the current `App.tsx`.

## Customize content

- Update introduction text and `RESUME_URL` in `src/components/Hero.tsx`.
- Edit education, work history, projects, and certifications in their respective components.
- Update contact and social links in `Contact.tsx` and `Footer.tsx`.
- Update page metadata and structured data in `index.html`.
- Adjust layout and visual effects in `index.css` and `qa-premium.css`.

The **View Resume** button opens this document in a new tab:

[View Partha's resume](https://drive.google.com/file/d/1K-J8HZ9LW4Y8AGUIs48KwsGbtfuJaHvZ/view?usp=sharing)

## Deployment

The repository includes `netlify.toml` with:

- Build command: `npm run build`
- Published directory: `dist`

Set any required integration variables in the hosting environment before building. The generated `dist/` directory contains the static portfolio.

## Contact

- Email: [partharakshit5653@gmail.com](mailto:partharakshit5653@gmail.com)
- LinkedIn: [Partha Rakshit](https://www.linkedin.com/in/partharakshit)
- GitHub: [CoderPartha012](https://github.com/CoderPartha012)
