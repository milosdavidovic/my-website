// Single source of truth for site copy, shared across all design variations.
// Edit here once; every variation (a/b/c/d) pulls from this file.

export const site = {
  name: "Milos Davidovic",
  role: "Fractional CTO & Technical Leadership",
  location: "Novi Sad, Serbia",
  email: "milosgrozni@gmail.com",
  linkedin: "https://www.linkedin.com/in/milos-davidovic", // TODO: confirm exact LinkedIn URL
};

export const hero = {
  eyebrow: "Fractional CTO & Technical Leadership",
  headline: "Technology decisions that hold up as you grow.",
  subhead:
    "14+ years leading engineering across IoT, fintech, medtech and manufacturing — architecture, hiring, and hands-on delivery for teams from first product to Series A.",
  primaryCta: { label: "Get in touch", href: "mailto:milosgrozni@gmail.com" },
  secondaryCta: { label: "LinkedIn", href: "https://www.linkedin.com/in/milos-davidovic" },
};

export const audiences = [
  {
    title: "Early-stage founders",
    body: "You have the product vision and no CTO yet. I help set the technical foundation — architecture, first hires, and a roadmap that won't need to be rebuilt in a year.",
    tags: ["Architecture", "Early hires"],
  },
  {
    title: "Growing product teams",
    body: "The product works, but velocity is slowing and the codebase is harder to move in. I bring process, mentorship and architectural clarity without a full-time VP Eng hire.",
    tags: ["Process & CI/CD", "Mentorship"],
  },
  {
    title: "Industrial & manufacturing",
    body: "You build physical products and need a digital layer — IoT, cloud, or a SaaS product around your hardware. My background is in mechatronics as much as software.",
    tags: ["IoT", "Embedded + cloud"],
  },
] as const;

export const services = [
  {
    title: "Fractional CTO / Technical Leadership",
    body: "Ongoing, part-time — 1 to 3 days a week. Architecture decisions, technical strategy, and hiring for a team that doesn't need a full-time hire yet.",
  },
  {
    title: "Architecture & Technical Assessment",
    body: "A scoped, time-boxed engagement: audit of the codebase and team, then a written roadmap. No ongoing commitment required.",
  },
  {
    title: "Hands-on Senior Engineering",
    body: "Embedded delivery for a team that needs execution, not just strategy — code review, pairing, unblocking, and process like CI/CD and testing.",
  },
] as const;

export const background = {
  intro:
    "Product-focused technical leader working at the intersection of technology, product and people — pragmatic and outcome-driven rather than purely technical.",
  facts: [
    "14+ years across IoT, fintech, medtech, manufacturing and cloud computing",
    "MSc Mechatronics, University of Novi Sad (2012)",
    "Founder of Guzva — architected, built and led the team for a consumer social-events platform, concept to live product",
    "Tech Lead on two AI inference platforms for a major cloud provider, leading teams of 7–8 engineers",
    "Tech Lead on Spindle, an industrial IoT platform for manufacturing",
    "2020 MVP Award for technical leadership and knowledge sharing",
  ],
};

export const howIWork = [
  {
    title: "Straightforward contracting",
    body: "B2B, through my own company. Outcome-based retainers, not hourly billing or time-tracking.",
  },
  {
    title: "Async-first",
    body: "Code review, architecture guidance and unblocking happen in Slack, GitHub and Jira. A short weekly call keeps everyone aligned.",
  },
  {
    title: "Flexible by design",
    body: "Based in Novi Sad, working comfortably across EU and US time zones. Also open, on occasion, to a part-time role with a funded, growing team.",
  },
] as const;

export const contact = {
  heading: "Let's talk",
  body: "The best way to reach me is email or LinkedIn — happy to have a first, no-pressure conversation about what you need.",
};

// Condensed background, used by variation D's label/meta list.
export const milestones = [
  { label: "MSc Mechatronics", meta: "University of Novi Sad, 2012" },
  { label: "Founder, Guzva", meta: "Consumer social-events platform" },
  { label: "Tech Lead, AI inference platforms", meta: "Major cloud provider" },
  { label: "Tech Lead, Spindle", meta: "Industrial IoT for manufacturing" },
  { label: "MVP Award", meta: "Technical leadership, 2020" },
] as const;

// Short paired bullets ("how I work" vs. "what I avoid"), used by variation D's comparison panel.
export const philosophy = {
  how: [
    "Direct communication with founders and stakeholders, not filtered through account managers.",
    "Outcome-based retainers, not hourly billing or time-tracking.",
    "Async-first: code review, architecture guidance and unblocking in Slack, GitHub and Jira.",
  ],
  avoid: [
    "Meetings without an agenda or a decision to make.",
    "Chasing trend technology for critical-path infrastructure.",
    "Micromanagement — I work best with real autonomy.",
  ],
};

// Short nav labels + section anchors, used by variation D's sticky nav.
export const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Background", href: "#background" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;
