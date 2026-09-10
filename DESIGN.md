# Design
## Source of truth
Active · 2026-09-10. Korean résumé. Evidence: user-supplied Groupby PDF dated 2026-08-05, reference HTML/CSS at https://staging.d1tr74201ikyjj.amplifyapp.com/, existing React/Vite source. Email confirmed in the existing lim12749/lim12749 GitHub profile README: lim12749@gmail.com. Portrait supplied by the user on 2026-09-10.
## Brand
Calm and precise. Trust comes from project responsibilities. Avoid stock portraits, fabricated metrics and decorative gradients.
## Product goals
Help recruiters scan capability and engineers assess implementation experience. Working service links and printable résumé. No backend or sales flow.
## Personas and jobs
Hiring managers and engineers reading projects and career history on desktop and mobile.
## Information architecture
Introduction → self-introduction (five source-grounded paragraphs) → projects → career → skills → education. One route, sticky anchor navigation, native print action. All content visible and searchable.
## Design principles
Evidence before decoration. Distinguish personal work, collaboration and demos. Dates reflect the supplied document.
## Visual language
Warm white, near-black text, gray metadata, deep green accent. System Korean sans-serif, serif wordmark, thin rules and generous space. Use the supplied original portrait at its natural aspect ratio; no face retouching.
## Components
App owns sections and navigation. src/data/resume.ts owns content. src/index.css owns tokens, responsive rules and print variants.
## Accessibility
Target WCAG AA: semantic landmarks, heading order, visible focus, skip link, labelled external links, 44px action targets. Respect reduced motion.
## Responsive behavior
Centered document with two-column section layout above 720px; stacked mobile layout. Check 320px, 390px, 768px and desktop. No horizontal overflow.
## Interaction states
Static content has no remote loading dependency. External links open labelled new tabs. Print uses native browser dialog, with navigation hidden and all résumé content retained.
## Content voice
Korean, specific, concise. Correct typos without changing claims. No invented availability status, contacts or awards.
## Implementation constraints
React 18, TypeScript, Vite; no new dependencies. Build output dist for Vercel. Validate build, browser rendering, anchors, print action and print layout.
## Open questions
- [x] User-supplied portrait added to the header, responsive and printable.
- [ ] User: changes after the dated résumé, only needed for a later content refresh.

## Content correction · 2026-09-10
User clarification supersedes the original PDF for GausLab: metaverse content, equipment assembly simulation and primary MYVR development. Remove game combat/animation and Photon claims. MYVR connects daily task downloads, real-time XR synchronization, visual maintenance guidance and report delivery to administrators. User-provided video: https://www.youtube.com/watch?v=MaduDOwtgIw. Responsive YouTube embed with direct-link fallback; print shows video URL instead of iframe.

## Featured service
User renamed 운명서재 to 사주톡 and identified it as the primary service. Place it first in projects, highlight it in the introduction and link to its project from the header. Retain the supplied domain until a new URL is provided.
