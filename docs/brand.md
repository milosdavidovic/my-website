# Brand decisions

Design and copy decisions written down somewhere other than scattered chat messages —
easy to reread, comment on, and change later. Nothing here is precious; if a decision
stops making sense, change it and update this file.

## Voice & tone

- Factual and specific over promotional. State what was built or led; let the reader
  draw the conclusion about skill.
- No superlatives ("best," "world-class," "passionate"), no exclamation points, no
  sales language.
- Short sentences. Plain words. A non-technical founder should understand every line
  on first read.
- Lead with outcomes and who it's for, not with job titles or tech-stack lists.
- Speak about companies/situations in the third person ("the product works, but...")
  rather than addressing the reader directly as "you," except in direct CTAs.
- All copy lives in `src/lib/content.ts` — edit once, it updates everywhere on the site.

## Brand palette

One palette, same values in light and dark mode.

| Token   | Light     | Dark      |
| ------- | --------- | --------- |
| bg      | `#faf9fc` | `#0a0a0c` |
| surface | `#ffffff` | `#131317` |
| fg      | `#16151a` | `#f2f1f5` |
| muted   | `#5f5c6b` | `#9a97a6` |
| accent  | `#7c5cf0` | `#a78bfa` |
| border  | `#e6e4ec` | `#26242c` |

Accent is violet. Defined in `src/styles/theme.css` as CSS custom properties, mapped
into Tailwind `@theme` tokens in the same file.

## Type

- **Hanken Grotesk Variable** — headings and display text.
- **Geist Variable** — body copy.
- **JetBrains Mono Variable** — small labels, section index numbers, eyebrow text.

## Shape & structure

- Sticky glass-effect nav (`backdrop-filter: blur` + translucent surface) with anchor
  links to each section.
- Hero: two-column layout (text + photo), subtle grid texture masked behind the hero
  only, fading toward the edges.
- Buttons: `rounded-md`. Photo: `rounded-[2rem]`. Cards: `rounded-lg`, 1px borders,
  no shadows.
- Numbered sections (01–05: What I offer, Who I usually work with, Background, How I
  work, Contact), each with an index number + title row and a hairline divider below
  it — no other dividers inside a section.
- Card grids for "What I offer," "Who I usually work with," and "How I work."
- Background is a vertical timeline (connecting rule + small ring nodes) rather than
  a numbered list, reinforcing the "career arc" framing of the copy.

## Photo treatment

Head-and-shoulders portrait, desaturated to grayscale by default so it reads as
designed rather than like a raw headshot, clipped to a soft-square (`rounded-[2rem]`)
frame. Fades from grayscale to full color and scales up slightly on hover — a small,
quiet detail rather than a stated claim. Swap `src/assets/hero-photo.png` for a
different photo any time (PNG, background removed); the same roughly-square,
face-framed crop will carry over cleanly.

## Theme switching

Defaults to the visitor's system preference (`prefers-color-scheme`) on first visit.
Once a visitor toggles light/dark manually, the choice is remembered in the browser
(`localStorage`) and takes priority over the system preference on future visits.

## Motion

- Section content (cards, timeline items, the contact block) fades up and in as it
  scrolls into view, staggered ~90ms per item within a section. Section titles stay
  static — only the content animates. Respects `prefers-reduced-motion`.
- Photo hover: grayscale → color and a slight scale-up, both on a 500ms ease-in-out
  transition.

## Open items

- Name and photo are both set (`src/lib/content.ts`, `src/assets/hero-photo.png`).
- Remaining before public launch: flip `noindex` off in `src/pages/index.astro`
  (currently intentional, see head block).
- Domain: davidovic.net (DNS on Cloudflare). Deploy target: Railway (see `railway.json`;
  static build served via `serve`, configured in `package.json`'s `start` script).
