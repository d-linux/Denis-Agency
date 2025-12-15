import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Techno Skills - Web Developer",
  description: "Web development services by Techno Skills: Landing pages, business websites, and custom web apps built with Next.js.",
};

type Package = {
  name: string;
  forWho: string;
  includes: string[];
  timeline: string;
};

const packages: Package[] = [
  {
    name: "Starter",
    forWho: "Perfect for a simple, clean online presence.",
    includes: [
      "1-page landing page",
      "Mobile-first responsive design",
      "Basic SEO structure (titles + headings)",
      "Contact section (form UI, submission later)",
      "Deployment on Vercel",
    ],
    timeline: "Typical timeline: 3–7 days",
  },
  {
    name: "Business",
    forWho: "For businesses that need multiple pages and trust signals.",
    includes: [
      "Up to 5 pages (Home, Services, About, Projects, Contact)",
      "Stronger copy structure and CTAs",
      "Reusable components and clean layout",
      "Performance-focused build (Next.js + Tailwind)",
      "Deployment on Vercel",
    ],
    timeline: "Typical timeline: 7–14 days",
  },
  {
    name: "Custom",
    forWho: "When you need extra features beyond a brochure site.",
    includes: [
      "Custom pages and components",
      "Forms, lead capture, basic automations (later)",
      "Supabase integration when needed (later)",
      "Iterative improvements and support",
      "Scalable structure for future features",
    ],
    timeline: "Timeline depends on scope",
  },
];

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex gap-2 text-sm text-neutral-700">
      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-neutral-900" />
      <span>{text}</span>
    </li>
  );
}

export default function ServicesPage() {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Services</h1>
        <p className="max-w-2xl text-neutral-700">
          Clear packages with predictable delivery. If you are not sure which
          one fits, I will recommend the simplest option that works.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {packages.map((p) => (
          <article
            key={p.name}
            className="rounded-2xl border border-neutral-200 p-6"
          >
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">{p.name}</h2>
              <p className="text-sm text-neutral-700">{p.forWho}</p>
            </div>

            <ul className="mt-4 space-y-2">
              {p.includes.map((item) => (
                <CheckItem key={item} text={item} />
              ))}
            </ul>

            <p className="mt-4 text-xs text-neutral-500">{p.timeline}</p>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex w-full justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Ask about {p.name}
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="rounded-2xl border border-neutral-200 p-6">
        <h2 className="font-semibold">How pricing works</h2>
        <p className="mt-2 text-sm text-neutral-700">
          Pricing depends on pages, content readiness, and any special features.
          Tell me what you need and we’ll reply with a simple quote and timeline.
        </p>
      </div>

      <div className="rounded-2xl border border-neutral-200 p-6">
        <h2 className="font-semibold">What I need from you</h2>
        <ul className="mt-3 space-y-2">
          <CheckItem text="Business name + what you offer" />
          <CheckItem text="Example websites you like (2–3 links)" />
          <CheckItem text="Any text/images you already have (optional)" />
          <CheckItem text="Your goal (calls, bookings, leads, etc.)" />
        </ul>
      </div>
    </section>
  );
}
