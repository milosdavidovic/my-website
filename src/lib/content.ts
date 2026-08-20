// Single source of truth for site copy.

const firstName = "Milos";
const fullName = "Milos Davidovic";

export const site = {
  name: fullName,
  role: "Fractional CTO & Technical Leadership",
  location: "Novi Sad, Serbia",
  email: "milos@davidovic.net",
  linkedin: "https://www.linkedin.com/in/milosdavidovic",
};

const heroHeadlineGreeting = "Hi,";
const heroHeadlineName = firstName;
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
  },
  {
    title: "Growing product teams",
    body: "The product works, but velocity is slowing and stability is starting to slip. I bring process, mentorship and architectural clarity without a full-time VP Eng hire.",
  },
  {
    title: "Industrial & IoT",
    body: "The product is physical and needs a digital layer — IoT, cloud, or a SaaS layer around the hardware. I have a mechatronics background, so the industry's challenges are already familiar.",
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

// Framed as a career arc (role → range), not a project list — project-level
// detail lives on LinkedIn, linked from the contact section.
export const background = {
  intro:
    "I've worked across small teams and large ones, early-stage startups and mature companies — including environments where software has to work in step with physical machines. That range is what I bring to fractional CTO work: enough breadth to know which problems actually matter at your stage, and enough depth to build the thing myself when that's what's needed.",
  items: [
    {
      label: "Technical consultant",
      long: "Independent technical consultant — architecture reviews, technical assessments, system design, hiring and process guidance for teams without an in-house CTO",
    },
    {
      label: "Co-CTO",
      long: "Co-CTO at an outsourcing company — business strategy, hiring and technical oversight across client engineering teams",
    },
    {
      label: "Founder, Guzva",
      long: "Founder of guzva.rs, an AI-driven event discovery platform — architecture, build and the team, from concept to live product",
    },
    {
      label: "Tech lead",
      long: "Tech lead for teams of 3 to 12 engineers — system design, mentoring, technical decision-making, and the bridge between product and engineering",
    },
    {
      label: "Software engineer",
      long: "12+ years as a software engineer across fintech, medtech, manufacturing and cloud platforms — different domains, project types and stages of a product's life",
    },
    {
      label: "Mechatronics background",
      long: "MSc Mechatronics — I understand how software and hardware work together",
    },
  ],
};

export const howIWork = [
  {
    title: "Straightforward contracting",
    body: "A fixed monthly fee, agreed in advance, with the scope written down. Invoiced monthly — cancel anytime, no notice required.",
  },
  {
    title: "How we'd work together",
    body: "We agree hours each week when I'm reachable for calls or live discussion. The rest happens async — code review, architecture questions and decisions in Slack, GitHub and Jira, or whatever your team already uses.",
  },
  {
    title: "Where and when",
    body: "Remote, working across EU and US time zones. Engagements are typically one to three days a week and change as the work does.",
  },
] as const;

export const contact = {
  heading: "How can I help?",
  body: "The best way to reach me is email or LinkedIn — happy to learn about what you're building.",
};

// Short nav labels + section anchors for the sticky header.
export const nav = [
  { label: "Who I help", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Background", href: "#background" },
  { label: "How I work", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;
