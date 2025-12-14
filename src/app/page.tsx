export default function Home() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          I build modern websites for small businesses.
        </h1>
        <p className="max-w-2xl text-neutral-700">
          Fast, responsive, and professional websites built with Next.js. Clear
          process, clean design, and reliable delivery.
        </p>
      </div>

      <div className="flex gap-3">
        <a
          href="/contact"
          className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
        >
          Contact me
        </a>
        <a
          href="/projects"
          className="rounded-xl border border-neutral-300 px-5 py-3 text-sm font-medium hover:border-neutral-400"
        >
          View projects
        </a>
      </div>

      <div className="grid gap-4 pt-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-neutral-200 p-5">
          <h3 className="font-semibold">Fast delivery</h3>
          <p className="mt-2 text-sm text-neutral-700">
            Simple timelines and clear milestones.
          </p>
        </div>
        <div className="rounded-2xl border border-neutral-200 p-5">
          <h3 className="font-semibold">Mobile first</h3>
          <p className="mt-2 text-sm text-neutral-700">
            Looks good on phones, tablets, and desktop.
          </p>
        </div>
        <div className="rounded-2xl border border-neutral-200 p-5">
          <h3 className="font-semibold">SEO ready</h3>
          <p className="mt-2 text-sm text-neutral-700">
            Clean structure and best practices by default.
          </p>
        </div>
      </div>
    </section>
  );
}
