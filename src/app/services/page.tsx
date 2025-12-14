export default function ServicesPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">Services</h1>
      <p className="text-neutral-700">
        Clear, simple offerings with predictable delivery.
      </p>

      <div className="grid gap-4 pt-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-neutral-200 p-5">
          <h3 className="font-semibold">Landing Page</h3>
          <p className="mt-2 text-sm text-neutral-700">
            One-page site focused on conversions and speed.
          </p>
        </div>
        <div className="rounded-2xl border border-neutral-200 p-5">
          <h3 className="font-semibold">Business Website</h3>
          <p className="mt-2 text-sm text-neutral-700">
            Multi-page website with SEO structure and contact form.
          </p>
        </div>
        <div className="rounded-2xl border border-neutral-200 p-5">
          <h3 className="font-semibold">Web App</h3>
          <p className="mt-2 text-sm text-neutral-700">
            Full-stack app using Next.js API and Supabase.
          </p>
        </div>
      </div>
    </section>
  );
}
