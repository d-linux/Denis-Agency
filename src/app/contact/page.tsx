"use client";

import { useState } from "react";

type FormState = "idle" | "success" | "error";

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    budget: "",
    message: "",
  });

  function updateField<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setState("idle");

    // Frontend-only simulation so you can build UI first.
    // Later we will replace this with a real POST request to a Next.js API route.
    await new Promise((r) => setTimeout(r, 700));

    const looksValid =
      form.name.trim().length >= 2 &&
      form.email.includes("@") &&
      form.message.trim().length >= 10;

    setLoading(false);
    setState(looksValid ? "success" : "error");

    if (looksValid) {
      setForm({ name: "", email: "", business: "", budget: "", message: "" });
    }
  }

  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
        <p className="max-w-2xl text-neutral-700">
          Tell me what you need and we’ll reply with next steps. This form is
          frontend-only for now; we’ll connect it to Supabase after the UI is
          final.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* FORM */}
        <div className="lg:col-span-2">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-neutral-200 p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <input
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-500"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-500"
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Business</label>
                <input
                  value={form.business}
                  onChange={(e) => updateField("business", e.target.value)}
                  className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-500"
                  placeholder="Business name (optional)"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Budget</label>
                <select
                  value={form.budget}
                  onChange={(e) => updateField("budget", e.target.value)}
                  className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-500"
                >
                  <option value="">Select (optional)</option>
                  <option value="Under £300">Under £300</option>
                  <option value="£300–£600">£300–£600</option>
                  <option value="£600–£1200">£600–£1200</option>
                  <option value="£1200+">£1200+</option>
                </select>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                className="min-h-36 w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-500"
                placeholder="What do you want the website to do? (calls, bookings, leads, etc.)"
              />
              <p className="text-xs text-neutral-500">
                Tip: include your business type and 1–2 example websites you
                like.
              </p>
            </div>

            {/* STATUS */}
            <div className="mt-4">
              {state === "success" && (
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-800">
                  Message ready. When we connect Supabase, this will submit for
                  real.
                </div>
              )}
              {state === "error" && (
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-800">
                  Please add a name, a valid email, and a message (10+ chars).
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send message"}
              </button>
              <p className="text-xs text-neutral-500">
                Response time: typically 24–48 hours
              </p>
            </div>
          </form>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="font-semibold">What happens next</h2>
            <ol className="mt-3 space-y-2 text-sm text-neutral-700">
              <li>1) I review your message</li>
              <li>2) I ask any missing questions</li>
              <li>3) You get a quote + timeline</li>
            </ol>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="font-semibold">Email</h2>
            <p className="mt-2 text-sm text-neutral-700">
              Prefer email? Use:
            </p>
            <p className="mt-2 text-sm font-medium">denis@example.com</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
