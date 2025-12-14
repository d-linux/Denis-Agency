export default function ProjectsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
      <p className="text-neutral-700">
        A selection of recent work. (We will add real case studies here.)
      </p>

      <div className="grid gap-4 pt-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 p-5">
          <h3 className="font-semibold">Project 1</h3>
          <p className="mt-2 text-sm text-neutral-700">
            Short description. Tech stack, result, and link.
          </p>
        </div>
        <div className="rounded-2xl border border-neutral-200 p-5">
          <h3 className="font-semibold">Project 2</h3>
          <p className="mt-2 text-sm text-neutral-700">
            Short description. Tech stack, result, and link.
          </p>
        </div>
      </div>
    </section>
  );
}
