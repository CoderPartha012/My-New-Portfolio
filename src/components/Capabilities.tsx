/**
 * Capabilities — full-height section with looping background video.
 *
 * Layout (per spec):
 *   relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10
 *   flex flex-col min-h-screen
 *     header (mb-auto) — kicker + large heading
 *     3-col card grid (mt-16)
 */
import { motion } from 'motion/react';
import FadingVideo from './FadingVideo';

const CAPABILITIES_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4';

/* ── Card definitions ────────────────────────────────────────────────── */
const CARDS = [
  {
    id: 'automation',
    /* Material Icons "bug_report" path */
    iconPath:
      'M20 8h-2.81c-.45-.78-1.07-1.45-1.78-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5s-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.62C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z',
    tags: ['Selenium', 'TestNG', 'Java', 'Page Object Model'],
    title: 'Test Automation',
    body: 'End-to-end browser automation with Selenium WebDriver and TestNG — catching regressions before every release.',
  },
  {
    id: 'api',
    /* Material Icons "api" / lightbulb variant */
    iconPath:
      'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1Zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7Z',
    tags: ['Postman', 'REST Assured', 'JSON', 'OAuth2'],
    title: 'API Testing',
    body: 'Schema validation, contract testing, and chained API flows using Postman and REST Assured — every endpoint, verified.',
  },
  {
    id: 'performance',
    /* Material Icons "timer" / speed variant */
    iconPath:
      'M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z',
    tags: ['JMeter', 'Load Testing', 'Bottleneck Analysis', 'Reports'],
    title: 'Performance Testing',
    body: 'JMeter-driven load and stress tests that reveal where systems crack, long before your users find out.',
  },
] as const;

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* ── Background video — full-bleed, no 120% scale ─────────────── */}
      <FadingVideo
        src={CAPABILITIES_VIDEO}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* ── Content layer ─────────────────────────────────────────────── */}
      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">

        {/* Section header — pushes cards to bottom via mb-auto */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-auto"
        >
          <p className="text-sm font-body text-white/80 mb-6 tracking-wide">
            // Core Expertise
          </p>
          <h2
            className="font-heading italic text-white leading-[0.9] tracking-[-3px]"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}
          >
            Quality<br />assured
          </h2>
        </motion.div>

        {/* ── Three capability cards ─────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
              className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col"
            >
              {/* ── Top row: icon + tags ──────────────────────────────── */}
              <div className="flex items-start justify-between gap-4">

                {/* Nested glass icon square — 44×44 */}
                <div
                  className="liquid-glass rounded-[0.75rem] flex items-center justify-center flex-shrink-0"
                  style={{ width: 44, height: 44 }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={card.iconPath} />
                  </svg>
                </div>

                {/* Tag pills */}
                <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="liquid-glass rounded-full px-3 py-1 text-[11px]
                                 text-white/90 font-body whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* ── Bottom: title + body ──────────────────────────────── */}
              <div className="mt-6">
                <h3
                  className="font-heading italic text-white tracking-[-1px] leading-none"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}
                >
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                  {card.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
