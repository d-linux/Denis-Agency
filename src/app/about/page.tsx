import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">About</h1>
        <p className="max-w-2xl text-neutral-700">
          I’m Denis, a web developer focused on building fast, clean websites
          for small businesses. My goal is simple: help you look professional
          online and turn visitors into leads.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 p-6">
          <h2 className="font-semibold">What I do</h2>
          <p className="mt-2 text-sm text-neutral-700">
            I design and build modern websites using Next.js and Tailwind.
            I focus on clarity, speed, and a smooth mobile experience.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 p-6">
          <h2 className="font-semibold">How I work</h2>
          <p className="mt-2 text-sm text-neutral-700">
            Clear milestones, quick feedback loops, and simple decisions.
            You’ll always know what’s happening and what comes next.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-neutral-200 p-6">
        <h2 className="font-semibold">My process</h2>
        <ol className="mt-4 grid gap-4 sm:grid-cols-3">
          <li className="rounded-2xl border border-neutral-200 p-5">
            <p className="text-sm font-medium text-neutral-600">Step 1</p>
            <h3 className="mt-1 font-semibold">Plan</h3>
            <p className="mt-2 text-sm text-neutral-700">
              We clarify goals, pages, and the message you want to deliver.
            </p>
          </li>
          <li className="rounded-2xl border border-neutral-200 p-5">
            <p className="text-sm font-medium text-neutral-600">Step 2</p>
            <h3 className="mt-1 font-semibold">Build</h3>
            <p className="mt-2 text-sm text-neutral-700">
              I build the site with clean structure, responsive design, and
              performance in mind.
            </p>
          </li>
          <li className="rounded-2xl border border-neutral-200 p-5">
            <p className="text-sm font-medium text-neutral-600">Step 3</p>
            <h3 className="mt-1 font-semibold">Launch</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Final review, deploy to Vercel, and hand over so you can run it.
            </p>
          </li>
        </ol>
      </div>

      <div className="rounded-2xl border border-neutral-200 p-6">
        <h2 className="font-semibold">Let’s build something</h2>
        <p className="mt-2 text-sm text-neutral-700">
          If you tell me what business you run and what you want the website to
          achieve, I’ll respond with a simple plan and timeline.
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
