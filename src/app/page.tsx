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
      <section className="relative overflow-hidden rounded-3xl border border-blue-200 px-6 py-14 text-white sm:px-10 sm:py-20" style={{ backgroundImage: "url('/hero-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>

  <div className="relative space-y-8">
    <div className="space-y-3">
      <p className="text-sm font-medium text-white/70">
        Techno Skills • Websites that convert
      </p>

      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Modern websites for small businesses that want more leads.
      </h1>

      <p className="max-w-2xl text-white/80">
        We design and build fast, responsive websites using Next.js and Tailwind.
        Clean design, clear messaging, and a smooth experience on mobile.
      </p>
    </div>

    <div className="flex flex-wrap gap-3">
      <Link
        href="/contact"
        className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
      >
        Get a free quote
      </Link>

      <Link
        href="/projects"
        className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
      >
        View projects
      </Link>
    </div>

  </div>
</section>

      {/* SOCIAL PROOF */}
      <section className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold">Trusted build process</h2>
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
        <div className="mt-6">
          <p className="text-sm text-neutral-700 mb-4">
            What our clients say
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-neutral-200 p-4">
              <div className="flex items-center gap-1 mb-2 text-yellow-500">
                ★★★★★
              </div>
              <p className="text-sm text-neutral-700 mb-2">"Excellent work, delivered on time and exceeded expectations."</p>
              <div className="text-xs text-neutral-600">
                <span>Sarah Johnson</span> • <span>Dec 2025</span>
              </div>
            </div>
            <div className="rounded-lg border border-neutral-200 p-4">
              <div className="flex items-center gap-1 mb-2 text-yellow-500">
                ★★★★☆
              </div>
              <p className="text-sm text-neutral-700 mb-2">"Great communication and clean code. Highly recommend."</p>
              <div className="text-xs text-neutral-600">
                <span>Mike Chen</span> • <span>Nov 2025</span>
              </div>
            </div>
            <div className="rounded-lg border border-neutral-200 p-4">
              <div className="flex items-center gap-1 mb-2 text-yellow-500">
                ★★★★★
              </div>
              <p className="text-sm text-neutral-700 mb-2">"Fast, reliable, and professional. Will work with again."</p>
              <div className="text-xs text-neutral-600">
                <span>Emily Davis</span> • <span>Oct 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="space-y-6 bg-neutral-50 p-6 rounded-2xl">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Services</h2>
          <p className="text-neutral-700">
            Pick what you need. We can start simple and expand later.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 p-5">
            <img src="https://via.placeholder.com/64x64?text=LP" alt="Landing Page" className="w-16 h-16 mb-4 rounded" />
            <h3 className="font-semibold">Landing Page</h3>
            <p className="mt-2 text-sm text-neutral-700">
              A high-converting page for ads, campaigns, or a new offer.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-5">
            <img src="https://via.placeholder.com/64x64?text=BW" alt="Business Website" className="w-16 h-16 mb-4 rounded" />
            <h3 className="font-semibold">Business Website</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Multi-page website that builds trust and drives calls/messages.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-5">
            <img src="https://via.placeholder.com/64x64?text=WA" alt="Web App" className="w-16 h-16 mb-4 rounded" />
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
      <section className="space-y-6 bg-neutral-50 p-6 rounded-2xl">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Process</h2>
          <p className="text-neutral-700">
            A simple workflow that keeps projects moving.
          </p>
        </div>

        <ol className="grid gap-4 sm:grid-cols-3">
          <li className="rounded-2xl border border-blue-200 p-5">
            <p className="text-sm font-medium text-blue-600">Step 1</p>
            <h3 className="mt-1 font-semibold">Discovery</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Goals, audience, pages, and content plan.
            </p>
          </li>
          <li className="rounded-2xl border border-blue-200 p-5">
            <p className="text-sm font-medium text-blue-600">Step 2</p>
            <h3 className="mt-1 font-semibold">Design + Build</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Clean layout, mobile-first styling, and implementation.
            </p>
          </li>
          <li className="rounded-2xl border border-blue-200 p-5">
            <p className="text-sm font-medium text-blue-600">Step 3</p>
            <h3 className="mt-1 font-semibold">Launch</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Final review, deployment, and handover.
            </p>
          </li>
        </ol>
      </section>

      {/* FINAL CTA */}
      <section className="rounded-2xl border border-neutral-200 bg-neutral-950 p-6 text-white">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold">
              Ready to build your website?
            </h2>
            <p className="text-sm text-white/80">
              Send a short message and we’ll reply with next steps.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
          >
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
