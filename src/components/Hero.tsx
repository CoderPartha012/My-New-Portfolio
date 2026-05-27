/**
 * Hero — full-viewport section.
 *
 * Layout:
 *  ┌─────────────────────────────────────────┐
 *  │  FadingVideo bg (120% w/h, top-aligned) │
 *  │  z-10 content layer                     │
 *  │    badge → name → typing role →         │
 *  │    BlurText tagline → description →     │
 *  │    CTAs → stat cards                    │
 *  │    partners strip                       │
 *  │    bottom glass status bar              │
 *  └─────────────────────────────────────────┘
 */
import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import FadingVideo from './FadingVideo';
import BlurText from './BlurText';

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4';

const RESUME_URL =
  'https://drive.google.com/file/d/1pSxUujwep6NO93flyU4FHG_vVke0efKl/view?usp=sharing';

const ROLES = [
  'Quality Analyst Executive',
  'Software Tester',
  'Test Automation Engineer',
];

/* ── Shared entrance preset ───────────────────────────────────────────── */
const fadeUp = (delay: number) => ({
  initial:    { filter: 'blur(10px)', opacity: 0, y: 20 },
  animate:    { filter: 'blur(0px)',  opacity: 1, y: 0  },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

/* ── Inline SVGs ──────────────────────────────────────────────────────── */
function ArrowUpRight({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function PlayIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <polygon points="6 4 20 12 6 20 6 4" fill="currentColor" />
    </svg>
  );
}

/* ── Stat card icons ──────────────────────────────────────────────────── */
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5}
      strokeLinecap="round" strokeLinejoin="round" width={28} height={28} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5}
      strokeLinecap="round" strokeLinejoin="round" width={28} height={28} aria-hidden="true">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function CheckSquareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5}
      strokeLinecap="round" strokeLinejoin="round" width={28} height={28} aria-hidden="true">
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5}
      strokeLinecap="round" strokeLinejoin="round" width={28} height={28} aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

/* ── Typing animation hook ────────────────────────────────────────────── */
function useTypingAnimation(roles: string[]) {
  const [displayed, setDisplayed] = useState('');
  const [roleIdx, setRoleIdx]     = useState(0);
  const [phase, setPhase]         = useState<'typing' | 'pause' | 'erasing'>('typing');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = roles[roleIdx];

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 60);
      } else {
        timeoutRef.current = setTimeout(() => setPhase('pause'), 1800);
      }
    } else if (phase === 'pause') {
      timeoutRef.current = setTimeout(() => setPhase('erasing'), 400);
    } else if (phase === 'erasing') {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 35);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setPhase('typing');
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, phase, roleIdx, roles]);

  return displayed;
}

/* ── Stat card ────────────────────────────────────────────────────────── */
interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}
function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div
      className="liquid-glass rounded-[1.25rem] p-5 flex flex-col justify-between
                 transition-all duration-300 hover:scale-[1.03]"
      style={{
        width: 160,
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          '0 0 24px 4px rgba(255,255,255,0.18), 0 0 6px 1px rgba(255,255,255,0.10)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '';
      }}
    >
      {icon}
      <div className="mt-4">
        <p className="font-heading italic text-white text-3xl tracking-[-1px] leading-none">
          {value}
        </p>
        <p className="mt-2 text-[11px] font-light leading-tight text-white/70 font-body">
          {label}
        </p>
      </div>
    </div>
  );
}

/* ── Component ────────────────────────────────────────────────────────── */
export default function Hero() {
  const typedRole = useTypingAnimation(ROLES);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section
      id="hero"
      className="relative flex flex-col min-h-screen overflow-hidden bg-black"
    >
      {/* ── Background video ── */}
      <FadingVideo
        src={HERO_VIDEO}
        className="absolute top-0 z-0 object-cover object-top -translate-x-1/2 left-1/2"
        style={{ width: '120%', height: '120%' }}
      />

      {/* ── z-10 content layer ── */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* ── Main hero content ── */}
        <div className="flex flex-col items-center justify-center flex-1 px-4 pt-24 pb-4">

          {/* Badge */}
          <motion.div
            {...fadeUp(0.3)}
            className="flex items-center gap-2 mb-6 rounded-full liquid-glass"
            style={{ padding: '6px 12px 6px 6px' }}
          >
            <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-semibold font-body
                             flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block flex-shrink-0" />
              Available
            </span>
            <span className="pr-1 text-sm text-white/90 font-body">
              Open to Java Backend, QA &amp; SDET Roles — Gurgaon &amp; Remote
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.5)}
            className="font-heading italic text-white text-center leading-none tracking-[-2px] mb-3"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 4.5rem)' }}
          >
            Hi, I'm Partha Rakshit
          </motion.h1>

          {/* Typing role */}
          <motion.div
            {...fadeUp(0.65)}
            className="flex items-center justify-center gap-2 mb-5 h-8"
            aria-live="polite"
          >
            <span className="text-lg md:text-xl font-body font-light text-white/70">
              {typedRole}
            </span>
            {/* blinking cursor */}
            <span
              className="inline-block w-0.5 h-5 bg-white/70 rounded-full"
              style={{ animation: 'blink 1s step-end infinite' }}
            />
          </motion.div>

          {/* Tagline — word-by-word blur animation */}
          <BlurText
            text="Breaking Bugs Before They Break You"
            className="text-4xl md:text-6xl lg:text-[5rem] font-heading italic text-white
                       leading-[0.85] max-w-2xl tracking-[-3px]"
          />

          {/* Description */}
          <motion.p
            {...fadeUp(0.9)}
            className="max-w-xl mt-4 text-sm font-light leading-relaxed text-center text-white/70 font-body"
          >
            Passionate about ensuring software quality and reliability through innovative
            testing methodologies and automation frameworks.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(1.1)}
            className="flex items-center gap-6 mt-6"
          >
            <button
              onClick={() => scrollTo('projects')}
              aria-label="View my projects"
              className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium
                         text-white font-body flex items-center gap-2 cursor-pointer
                         hover:bg-white/10 transition-colors duration-150"
            >
              View My Work
              <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
            </button>

            <button
              onClick={() => scrollTo('certifications')}
              aria-label="See my certifications"
              className="flex items-center gap-2 text-sm font-medium transition-colors duration-150 cursor-pointer text-white/80 font-body hover:text-white"
            >
              See Certifications
              <PlayIcon className="w-4 h-4" aria-hidden="true" />
            </button>
          </motion.div>

          {/* Stat cards — 4 cards */}
          <motion.div
            {...fadeUp(1.25)}
            className="flex flex-wrap items-stretch justify-center gap-3 mt-8"
          >
            <StatCard icon={<ClockIcon />}      value="2+"    label="Years Experience" />
            <StatCard icon={<FolderIcon />}     value="7+"    label="Projects Delivered" />
            <StatCard icon={<CheckSquareIcon />} value="1000+" label="Test Cases Written" />
            <StatCard icon={<CodeIcon />}       value="3+"    label="Automation Frameworks" />
          </motion.div>
        </div>

        {/* ── Partners / tools strip ── */}
        <motion.div
          {...fadeUp(1.4)}
          className="flex flex-col items-center gap-4 pb-4"
        >
          <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
            Tools &amp; technologies I work with daily
          </span>

          <div className="flex flex-wrap items-center justify-center gap-10 px-4 md:gap-14">
            {['Selenium', 'Postman', 'Java', 'Python', 'Jira'].map((tool) => (
              <span
                key={tool}
                className="text-xl italic tracking-tight text-white/80 font-heading md:text-2xl"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Blink keyframe */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
