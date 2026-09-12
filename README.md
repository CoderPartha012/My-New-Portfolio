# Interactive Portfolio Website

A single-page portfolio built with React, TypeScript, and Vite. The interface combines a cinematic video intro, responsive content sections, animated navigation, searchable projects, and an optional email contact form. This README documents the software and setup only; it intentionally excludes personal profiles, contact details, and private document links.

## Features

- **Video intro:** full-screen muted portal video with Skip intro and Escape controls. It fades out after approximately 2.6 seconds of playback, with a six-second timeout before the exit fade. Reduced-motion preferences bypass playback. Background interaction and scrolling are restored on exit.
- **Navigation:** fixed header with a sliding active pill, hover and keyboard-focus feedback, scroll-based section tracking, and a collapsible mobile menu. The outer navigation outline is removed.
- **Hero:** video scrubbing on supported pointer devices, a typewriter introduction, action links, and an expandable approach panel.
- **Content sections:** biography, filterable skill groups, education, experience, projects, certifications, and contact.
- **Project gallery:** CSS 3D carousel with previous/next buttons, pagination, pause/resume, and keyboard controls. Rotation pauses while hovered, focused, or off-screen. Phones and reduced-motion users get a flat layout. Desktop height follows the tallest card; single results use a content-sized layout.
- **Project search:** 200 ms debounced suggestions, category-aware results, Ctrl/Cmd+K, arrow-key selection, Enter, Escape, and a clear control. The gallery filters immediately by project title, description, or technology.
- **Contact form:** required fields, validation, submission feedback, and optional EmailJS delivery.
- **Footer:** video identity panel, section and contact links, a floating monogram, a fitted SVG watermark, and compact bottom spacing. A standalone HTML version is included.
- **Accessibility:** semantic navigation, labeled controls, visible focus indicators, a skip link, inactive-slide isolation, live status messages, and reduced-motion handling.

## Tools and technologies

| Area | Technology |
| --- | --- |
| Application | React 18, React DOM, TypeScript 5 |
| Development and production build | Vite 5, Vite React plugin |
| Styling | Tailwind CSS 3, custom CSS, PostCSS, Autoprefixer |
| Motion | Framer Motion, CSS transitions/keyframes, requestAnimationFrame |
| Icons | Lucide React |
| Contact integration | EmailJS browser SDK |
| Layout and media | CSS Grid/Flexbox, CSS 3D transforms, HTML video, SVG |
| Browser APIs | ResizeObserver, IntersectionObserver, matchMedia, Font Loading API, inert |
| Code quality | ESLint 9, TypeScript ESLint, React Hooks and React Refresh plugins |
| Package management | npm with package-lock.json; an existing yarn.lock is also retained |
| Hosting configuration | Netlify static build |

Three.js, React Three Fiber, and the `motion` package are also declared in the dependency manifest. Legacy 3D components are retained in the source tree but are not mounted by the current application. The project carousel uses CSS 3D transforms rather than a WebGL canvas.

Typography is loaded from Google Fonts and an external font provider, with system fallbacks. Active styles include Manrope for the intro, DM Sans and Caveat for contact/footer, and the existing display/body families elsewhere. Videos are served from an external CDN; project images are available under `public/images/`.

## Local setup

Use Node.js 20.19+ or Node.js 22.12+ with npm. From the repository directory:

```bash
npm ci
npm run dev
```

Open the URL printed by Vite, normally `http://localhost:5173`. Dependencies and build output should not be committed. Use npm consistently when changing dependencies so `package.json` and `package-lock.json` stay aligned.

On Windows PowerShell, use `npm.cmd` and `npx.cmd` if execution policy prevents the `.ps1` wrappers from running.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create the production site in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run repository ESLint checks |
| `npx tsc --noEmit -p tsconfig.app.json` | Check application types |

The Vite build does not replace the separate TypeScript check. No automated browser-test runner is currently configured.

## Source structure

```text
public/
  images/                       Local project images
  portfolio-footer.html         Standalone footer with inline CSS and JavaScript
src/
  components/
    Loader.tsx / loader.css      Video intro and lifecycle cleanup
    Header.tsx                  Navigation and section tracking
    Hero.tsx                    Hero video, typewriter, and action links
    About.tsx / about.css        Biography layout
    Skills.tsx                  Skill categories and filtering
    Education.tsx               Education cards
    Experience.tsx              Career timeline
    Projects.tsx                Project data, category filters, and search
    Certifications.tsx          Credential list
    Contact.tsx                 Form validation and EmailJS integration
    Footer.tsx                  Footer video, navigation, and SVG watermark
    QAReveal.tsx                One-time section reveal behavior
    QAMotion.tsx                Scroll progress and visibility tracking
    ui/
      input.tsx                 Reusable forwarded-ref input
      action-search-bar.tsx     Search combobox and suggestions
      slide-tabs.tsx            Sliding navigation highlight
      circular-gallery.tsx      Responsive project carousel
      *.css                     Component-scoped styling
  App.tsx                       Section composition and intro state
  main.tsx                      Entry point and global stylesheet imports
  index.css                     Base styles and earlier layout rules
  qa-premium.css                Decorative effects and motion
  sections-light.css            Shared section palette and layout
  contact-footer.css            Contact/footer design and spacing
  layout-responsive.css         Final responsive and spacing adjustments
index.html                      Document metadata and font links
netlify.toml                    Build command and publish directory
```

Reusable UI components live in `src/components/ui`, following the local component ownership approach used by shadcn. The input is adapted to this project's Tailwind styles; no shadcn CLI initialization or `@/` alias is required for the current relative imports. Keep associated styles beside the component. Global layout adjustments belong in the final stylesheet, `layout-responsive.css`.

## Responsive layout

- Shared section padding scales from 36 to 64 px, with smaller heading gaps and consistent page gutters.
- Desktop navigation switches to a collapsible menu below 1100 px.
- Skill cards move from three columns to two and then one; education and experience stack at narrower widths.
- The gallery uses a flat presentation at 700 px and below, or when reduced motion is requested.
- Contact and footer cards stack at narrow widths. Long labels, tools, and addresses wrap within their containers.
- Footer bottom padding is 12 px on desktop and 8 px on phones.
- The intro fills the dynamic viewport and provides safe-area-aware controls.

Before release, visually review 320, 375, 768, 1024, and 1440 px widths, short landscape viewports, keyboard-only navigation, reduced motion, and enlarged text. Confirm no horizontal overflow, clipped content, or overlapping controls. These are recommended manual checks, not a claim of automated viewport coverage.

## EmailJS configuration

Create an ignored `.env.local` in the repository root:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

The form passes `from_name`, `from_email`, `message`, and `to_name` to the configured template. Set the recipient in EmailJS and configure the reply-to field using `from_email`. Restart Vite after local environment changes; rebuild when hosting variables change.

If any setting is missing, the form displays an explicit demo-mode message: no email was sent. Valid demo submissions reset the fields. A successful delivery also resets the fields; delivery errors retain the entered values for retry. A direct email link remains available.

All `VITE_` variables are included in the browser bundle. Supply only the intended EmailJS public configuration here, never private API keys or server credentials. Configure allowed origins and abuse limits in the email service.

## Customization and media

- Edit section content in the corresponding React components.
- Update project titles, descriptions, tags, images, and destinations in `Projects.tsx`.
- Update navigation labels and targets in `Header.tsx`; keep section IDs aligned.
- Change the intro video and timing in `Loader.tsx`; its layout is scoped in `loader.css`.
- Change hero and footer media URLs in their respective components.
- Keep `public/portfolio-footer.html` synchronized when changing the React footer's markup or shared styles. Its section links point to the application's root page.
- Update document metadata and structured data in `index.html` separately from component content.

External fonts and videos require network access. The intro has playback-error and timeout exits, and footer video has a solid-color fallback. Core content does not depend on successful video playback.

## Deployment

The included Netlify configuration uses:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

Set optional EmailJS variables in the hosting environment before building. Other static hosts can serve `dist/` at the domain root. If deploying beneath a subdirectory, review the Vite base setting and root-relative media/section links first.

There is no active chatbot or serverless chat endpoint in the current application. No server-side AI key is required.

## Repository hygiene

The existing `.gitignore` excludes environment files, credentials, private key files, `node_modules/`, `dist/`, logs, editor caches, and local agent/tool directories. Keep generated artifacts and local configuration out of commits. Review staged files for secrets before publishing.

This README deliberately contains no personal names, email addresses, social profile URLs, employment details, or private resume links.
