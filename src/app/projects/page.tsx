import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Techno Skills - Web Developer",
  description: "Explore Techno Skills' portfolio of web development projects, including modern websites built with Next.js and Tailwind CSS.",
};

type Project = {
  title: string;
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  tech: string[];
  href?: string;
};

const projects: Project[] = [
  {
    title: "Local Business Website",
    description: "Clean multi-page website with strong calls-to-action.",
    problem: "Outdated design and unclear messaging reduced inquiries.",
    solution: "Rebuilt the site with a modern layout, clear service sections, and a focused contact flow.",
    outcome: "Improved clarity and increased trust signals for visitors.",
    tech: ["Next.js", "Tailwind CSS"],
    href: undefined,
  },
  {
    title: "Landing Page for an Offer",
    description: "Single-page conversion-focused landing page.",
    problem: "Traffic arrived from social media but did not convert.",
    solution: "Created a landing page with benefits-first copy, proof section, and clear CTA placement.",
    outcome: "Higher quality leads through a simplified funnel.",
    tech: ["Next.js", "Tailwind CSS"],
    href: undefined,
  },
  {
    title: "Simple Booking/Request Flow (UI)",
    description: "UI concept for collecting booking requests.",
    problem: "Clients contacted through DMs with incomplete information.",
    solution: "Designed a form-based request flow with the right fields and validation-ready layout.",
    outcome: "Better lead quality and smoother intake process.",
    tech: ["Next.js", "Tailwind CSS"],
    href: undefined,
  },
];

function TechPills({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 pt-3">
      {tech.map((t) => (
        <span
          key={t}
          className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-700"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="max-w-2xl text-neutral-700">
          Here are a few case-study style examples. As I complete client work,
          I’ll replace these with real outcomes and links.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-neutral-200 p-6"
          >
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">{p.title}</h2>
              <p className="text-sm text-neutral-700">{p.description}</p>
            </div>

            <div className="mt-4 space-y-3 text-sm">
              <div>
                <p className="font-medium">Problem</p>
                <p className="text-neutral-700">{p.problem}</p>
              </div>
              <div>
                <p className="font-medium">Solution</p>
                <p className="text-neutral-700">{p.solution}</p>
              </div>
              <div>
                <p className="font-medium">Outcome</p>
                <p className="text-neutral-700">{p.outcome}</p>
              </div>
            </div>

            <TechPills tech={p.tech} />

            <div className="pt-5">
              {p.href ? (
                <Link
                  href={p.href}
                  className="text-sm font-medium text-neutral-900 underline underline-offset-4"
                >
                  View project
                </Link>
              ) : (
                <p className="text-xs text-neutral-500">
                  Link will be added when the project is public.
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="rounded-2xl border border-neutral-200 p-6">
        <h2 className="font-semibold">Want something similar?</h2>
        <p className="mt-2 text-sm text-neutral-700">
          Tell me what business you run and what you want the website to do
          (calls, bookings, leads). We’ll reply with a simple plan.
        </p>
        <div className="mt-4">
          <Link
            href="/contact"
            className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
}
