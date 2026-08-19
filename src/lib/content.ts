// Single source of truth for site copy, shared across all design variations.
// Edit here once; every variation (a/b/c/d) pulls from this file.

// Whitelabel placeholders until the real name goes live — change here.
const placeholderFirstName = "Steve";
const placeholderFullName = "Steve Palmer";

export const site = {
  name: placeholderFullName,
  role: "Fractional CTO & Technical Leadership",
  location: "Novi Sad, Serbia",
  email: "milos@davidovic.net",
  linkedin: "https://www.linkedin.com/in/milosdavidovic",
};

const heroHeadlineGreeting = "Hi,";
const heroHeadlineName = placeholderFirstName;
const heroHeadlineWords = ["technical leader", "fractional CTO", "consultant"];
const heroHeadlineSuffix = "for product teams.";

export const hero = {
  eyebrow: "Fractional CTO & Technical Leadership",
  headline: `${heroHeadlineGreeting} I'm ${heroHeadlineName}, ${heroHeadlineWords[0]} ${heroHeadlineSuffix}`,
  headlineGreeting: heroHeadlineGreeting,
  headlineName: heroHeadlineName,
  headlineWords: heroHeadlineWords,
  headlineSuffix: heroHeadlineSuffix,
  subhead:
    "I've worked as an engineer, tech lead, co-CTO and founder over the past 15 years. Now my focus is on helping early-stage teams with architecture, hiring and technical direction.",
  primaryCta: { label: "Get in touch", href: `mailto:${site.email}` },
  secondaryCta: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/milosdavidovic",
  },
};

export const audiences = [
  {
    title: "Early-stage founders",
    body: "The product vision is set, but there's no CTO yet. I bring the technical foundation, first hires and system design to help avoid costly early mistakes.",
    tags: ["Architecture", "Early hires"],
  },
  {
    title: "Growing product teams",
    body: "The product works, but velocity is slowing and stability is starting to slip. I bring process, mentorship and architectural clarity without a full-time VP Eng hire.",
    tags: ["Process & CI/CD", "Mentorship"],
  },
  {
    title: "Industrial & IoT",
    body: "The product is physical and needs a digital layer — IoT, cloud, or a SaaS layer around the hardware. I have a mechatronics background, so the industry's challenges are already familiar.",
    tags: ["IoT", "Embedded + cloud"],
  },
] as const;

export const services = [
  {
    title: "Fractional CTO / Technical Leadership",
    body: "Ongoing, part-time. Architecture decisions, technical strategy, and hiring support — for teams that need senior technical leadership without a full-time CTO.",
  },
  {
    title: "Architecture & Technical Assessment",
    body: "A scoped, time-boxed engagement: audit of the codebase and engineering practices. Written report — findings and improvements, prioritized, ready for your team to act on.",
  },
  {
    title: "Hands-on Senior Engineering",
    body: "When you're behind schedule and need hands-on help, not just advice: code review, pairing, shipping features, and CI/CD.",
  },
] as const;

// One shared list of background items, used everywhere. `label` + `meta` is the
// condensed form (D's label/meta list). `long`, where present, is the fuller
// prose version A/B/C render as a sentence; variations without a `long` fall
// back to "label — meta".
//
// Framed as a career arc (role → range), not a project list — project-level
// detail lives on LinkedIn, linked from the contact section.
export const background = {
  intro:
    "I've worked across small teams and large ones, early-stage startups and mature companies — including environments where software has to work in step with physical machines. That range is what I bring to fractional CTO work: enough breadth to know which problems actually matter at your stage, and enough depth to build the thing myself when that's what's needed.",
  items: [
    {
      label: "Technical consultant",
      meta: "Architecture, assessments, hiring, process",
      long: "Independent technical consultant — architecture reviews, technical assessments, system design, hiring and process guidance for teams without an in-house CTO",
    },
    {
      label: "Co-CTO",
      meta: "Business strategy, hiring, technical oversight — outsourcing company",
      long: "Co-CTO at an outsourcing company — business strategy, hiring and technical oversight across client engineering teams",
    },
    {
      label: "Founder, Guzva",
      meta: "guzva.rs — consumer AI-driven social-events platform",
      long: "Founder of guzva.rs, an AI-driven event discovery platform — architecture, build and the team, from concept to live product",
    },
    {
      label: "Tech lead",
      meta: "Teams of 3–12, from system design to delivery",
      long: "Tech lead for teams of 3 to 12 engineers — system design, mentoring, technical decision-making, and the bridge between product and engineering",
    },
    {
      label: "Software engineer",
      meta: "Across fintech, medtech, manufacturing and cloud",
      long: "12+ years as a software engineer across fintech, medtech, manufacturing and cloud platforms — different domains, project types and stages of a product's life",
    },
    {
      label: "Mechatronics background",
      meta: "Software that runs alongside physical machines",
      long: "MSc Mechatronics — I understand how software and hardware work together",
    },
  ],
};

export const howIWork = [
  {
    title: "Straightforward contracting",
    body: "Outcome-based retainers, not hourly billing or time-tracking. Clear scope, clear deliverables, and a contract that spells out what you're getting.",
  },
  {
    title: "Async-first",
    body: "Your team gets unblocked in hours, not at the next weekly meeting — code review, architecture guidance and decisions in Slack, GitHub and Jira, with a short call to stay aligned.",
  },
  {
    title: "Flexible by design",
    body: "Based in Novi Sad, working comfortably across EU and US time zones. Engagements scale up or down as your needs change — no long lock-in.",
  },
] as const;

export const contact = {
  heading: "How can I help?",
  body: "The best way to reach me is email or LinkedIn — happy to learn about what you're building.",
};

// Short paired bullets ("how I work" vs. "what I avoid"), used by variation D's
// comparison panel. Mirrors the same three themes as `howIWork` (contracting,
// communication, flexibility) so the narrative matches across variations —
// just told as a how/avoid contrast instead of a plain list.
export const philosophy = {
  how: [
    "Outcome-based retainers, not hourly billing — clear scope and deliverables from the start.",
    "Async-first: code review, architecture guidance and decisions in Slack, GitHub and Jira, with a short call to stay aligned.",
    "Engagements scale up or down as your needs change, working across EU and US time zones.",
  ],
  avoid: [
    "Hourly billing or time-tracking software.",
    "Decisions gated behind scheduled meetings, or filtered through account managers.",
    "Long lock-in contracts that don't flex as your needs change.",
  ],
};

// Short nav labels + section anchors, used by variation D's sticky nav.
export const nav = [
  { label: "Services", href: "#services" },
  { label: "Who I help", href: "#work" },
  { label: "Background", href: "#background" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;
