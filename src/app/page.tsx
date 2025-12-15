import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Techno Skills - Web Developer",
  description: "Modern websites for small businesses that want more leads. Next.js Developer specializing in fast, responsive websites using Next.js and Tailwind.",
  openGraph: {
    title: "Home | Techno Skills - Web Developer",
    description: "Modern websites for small businesses that want more leads. Next.js Developer specializing in fast, responsive websites.",
  },
};

export default function Home() {
  return (
    <div className="space-y-20">
      {/* HERO */}
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm font-medium text-neutral-600">
            Techno Skills • Websites that convert
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Modern websites for small businesses that want more leads.
          </h1>
          <p className="max-w-2xl text-neutral-700">
            We design and build fast, responsive websites using Next.js and
            Tailwind. Clean design, clear messaging, and a smooth experience on
            mobile.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Get a free quote
          </Link>
          <Link
            href="/projects"
            className="rounded-xl border border-neutral-300 px-5 py-3 text-sm font-medium hover:border-neutral-400"
          >
            View projects
          </Link>
        </div>

        <div className="grid gap-3 pt-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 p-4 text-sm text-neutral-700">
            Fast delivery (7–14 days typical)
          </div>
          <div className="rounded-2xl border border-neutral-200 p-4 text-sm text-neutral-700">
            Mobile-first design
          </div>
          <div className="rounded-2xl border border-neutral-200 p-4 text-sm text-neutral-700">
            SEO-ready structure
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="rounded-2xl border border-neutral-200 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold">Trusted build process</h2>
            <p className="text-sm text-neutral-700">
              Clear milestones, quick communication, and high-quality delivery.
            </p>
          </div>
          <div className="flex gap-3 text-xs text-neutral-600">
            <span className="rounded-full border border-neutral-200 px-3 py-1">
              Fast
            </span>
            <span className="rounded-full border border-neutral-200 px-3 py-1">
              Reliable
            </span>
            <span className="rounded-full border border-neutral-200 px-3 py-1">
              Clean code
            </span>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Services</h2>
          <p className="text-neutral-700">
            Pick what you need. We can start simple and expand later.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 p-5">
            <h3 className="font-semibold">Landing Page</h3>
            <p className="mt-2 text-sm text-neutral-700">
              A high-converting page for ads, campaigns, or a new offer.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-5">
            <h3 className="font-semibold">Business Website</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Multi-page website that builds trust and drives calls/messages.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-5">
            <h3 className="font-semibold">Web App</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Custom functionality when you need more than a brochure site.
            </p>
          </div>
        </div>

        <Link
          href="/services"
          className="inline-flex text-sm font-medium text-neutral-900 underline underline-offset-4"
        >
          See all services
        </Link>
      </section>

      {/* PROCESS */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Process</h2>
          <p className="text-neutral-700">
            A simple workflow that keeps projects moving.
          </p>
        </div>

        <ol className="grid gap-4 sm:grid-cols-3">
          <li className="rounded-2xl border border-neutral-200 p-5">
            <p className="text-sm font-medium text-neutral-600">Step 1</p>
            <h3 className="mt-1 font-semibold">Discovery</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Goals, audience, pages, and content plan.
            </p>
          </li>
          <li className="rounded-2xl border border-neutral-200 p-5">
            <p className="text-sm font-medium text-neutral-600">Step 2</p>
            <h3 className="mt-1 font-semibold">Design + Build</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Clean layout, mobile-first styling, and implementation.
            </p>
          </li>
          <li className="rounded-2xl border border-neutral-200 p-5">
            <p className="text-sm font-medium text-neutral-600">Step 3</p>
            <h3 className="mt-1 font-semibold">Launch</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Final review, deployment, and handover.
            </p>
          </li>
        </ol>
      </section>

      {/* FINAL CTA */}
      <section className="rounded-2xl border border-neutral-200 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold">
              Ready to build your website?
            </h2>
            <p className="text-sm text-neutral-700">
              Send a short message and we’ll reply with next steps.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
