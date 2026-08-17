---
name: Pragmatic Architecture
colors:
  surface: '#131312'
  surface-dim: '#131312'
  surface-bright: '#3a3937'
  surface-container-lowest: '#0e0e0c'
  surface-container-low: '#1c1c1a'
  surface-container: '#20201e'
  surface-container-high: '#2a2a28'
  surface-container-highest: '#353532'
  on-surface: '#e5e2de'
  on-surface-variant: '#cbc3d3'
  inverse-surface: '#e5e2de'
  inverse-on-surface: '#31302e'
  outline: '#958e9c'
  outline-variant: '#4a4551'
  surface-tint: '#d2bbff'
  primary: '#d3bdff'
  on-primary: '#3c1878'
  primary-container: '#bc9bff'
  on-primary-container: '#4c2c89'
  inverse-primary: '#6c4caa'
  secondary: '#a7c8ff'
  on-secondary: '#003060'
  secondary-container: '#1e477b'
  on-secondary-container: '#92b7f1'
  tertiary: '#d3cc48'
  on-tertiary: '#343200'
  tertiary-container: '#b7b02e'
  on-tertiary-container: '#454200'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#eaddff'
  primary-fixed-dim: '#d2bbff'
  on-primary-fixed: '#25005a'
  on-primary-fixed-variant: '#533390'
  secondary-fixed: '#d5e3ff'
  secondary-fixed-dim: '#a7c8ff'
  on-secondary-fixed: '#001c3b'
  on-secondary-fixed-variant: '#1e477b'
  tertiary-fixed: '#efe760'
  tertiary-fixed-dim: '#d2cb47'
  on-tertiary-fixed: '#1e1c00'
  on-tertiary-fixed-variant: '#4c4800'
  background: '#131312'
  on-background: '#e5e2de'
  surface-variant: '#353532'
  slate-teal: '#2D4A4F'
  muted-cobalt: '#3B5998'
  off-white: '#EDECEA'
  deep-charcoal: '#000000'
  surface-gray: '#2B2B2B'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style

The design system is built on the philosophy of "Sophisticated Pragmatism"—a high-end technical leadership aesthetic that prioritizes clarity, structural integrity, and intellectual rigor. It is designed for senior engineers, architects, and technical leaders who value precision over decoration.

The style is **Strict Minimalism** with a **Technical Core**. It draws inspiration from modern IDEs and architectural blueprints, utilizing generous whitespace to separate concerns and subtle borders to define hierarchy. The visual narrative avoids gradients and shadows in favor of tonal layering and crisp, high-contrast typography, evoking a sense of deliberate, expert craftsmanship.

## Colors

The palette is optimized for a dual-theme experience, emphasizing "Pragmatic Dark" as the primary mode for technical focus.

- **Dark Mode:** Utilizes `#000000` for deep backgrounds with `#1E1E1C` and `#2B2B2B` for surface elevations. This creates a low-strain, high-focus environment.
- **Light Mode:** Shifts to an `#EDECEA` off-white base to reduce glare, using `#FFFFFF` for elevated cards and `#1E1E1C` for primary text.
- **Accents:** The muted cobalt and slate teal are used sparingly for data visualization, active states, and subtle semantic indicators. The `#BC9BFF` (extracted from the reference) serves as a high-end "Technical Spark" for primary actions and brand moments.

## Typography

The typographic system uses a functional pairing to balance authority with technical utility.

- **Headlines:** Hanken Grotesk provides a sharp, geometric authority. It should be typeset with tight tracking and significant weight to anchor pages.
- **Body:** Geist is used for its exceptional legibility in technical contexts. It maintains a clean, neutral tone that stays out of the user's way.
- **Mono:** JetBrains Mono is reserved for metadata, labels, code snippets, and "technical footnotes." It is always uppercase when used as a label to enhance the "blueprint" feel of the UI.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. Content is contained within a 1280px max-width container on desktop to maintain optimal line lengths for technical reading, while utilizing a fluid 12-column grid for internal components.

- **Rhythm:** A 4px baseline grid governs all spacing. Vertical rhythm is strictly enforced—margins between sections should be 64px or 96px to provide "breathing room" for complex information.
- **Reflow:** On mobile, the grid collapses to 4 columns. Gaps (gutters) remain consistent at 24px to ensure tap targets are isolated and the UI never feels cluttered.

## Elevation & Depth

This design system rejects traditional shadows in favor of **Tonal Layering** and **Subtle Outlines**.

- **Surface Levels:** Depth is indicated by shifts in background color. On Dark Mode, the base is `#000000`, cards are `#1E1E1C`, and hovering states are `#2B2B2B`.
- **Borders:** Hierarchy is defined by 1px solid borders. Use `#2B2B2B` (Dark) or `#D1D1D1` (Light) for container borders.
- **Interactivity:** Elements do not "lift" off the page; instead, they change border color (to the primary accent) or increase in tonal brightness.

## Shapes

The shape language is **Soft-Technical**. We use subtle rounding (4px/0.25rem) to prevent the UI from feeling aggressive or "brutalist," while maintaining a professional, structured appearance. 

- **Primary Radius:** 4px for buttons, input fields, and small cards.
- **Large Radius:** 8px (rounded-lg) for main content containers.
- **Interactive States:** No change in radius on hover; the transition is handled through color and border intensity.

## Components

- **Buttons:** Primary buttons are solid `#BC9BFF` with black text. Secondary buttons use a 1px border of `#2B2B2B` with no fill.
- **Input Fields:** Flat backgrounds with 1px bottom-borders only, mimicking technical forms. Active states highlight the border in the primary accent.
- **Chips:** Small, JetBrains Mono labels wrapped in a light-gray or dark-gray stroke. No background fill unless active.
- **Cards:** No shadows. Defined by a 1px border and a subtle background shift (e.g., `#1E1E1C` against `#000000`).
- **Lists:** Data-heavy lists should use alternating row tints (zebra striping) at very low opacity (2%) rather than dividers to reduce visual noise.
- **Status Indicators:** Use the Slate Teal for "Stable/Success" and the Cobalt for "Information," avoiding "danger red" unless a critical system failure is occurring.