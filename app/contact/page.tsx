"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      location: String(formData.get("location") ?? "").trim(),
      details: String(formData.get("details") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        cache: "no-store",
      });

      // ✅ Robust parsing: works even if response isn't JSON
      const text = await res.text();
      let data: any = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        data = {};
      }

      if (!res.ok) {
        const msg =
          typeof data?.error === "string"
            ? data.error
            : text && text.length < 200
              ? text
              : `Request failed (${res.status}). Please text or email me.`;
        setErrorMsg(msg);
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch (err: any) {
      setErrorMsg(err?.message || "Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header / Intro */}
        <div className="wood-panel p-10">
          <div className="inline-flex items-center rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold tracking-wide text-[var(--accent-dark)] uppercase">
            Contact
          </div>

          {/* Paper strip */}
          <div className="mt-6 max-w-3xl rounded-2xl bg-white/85 backdrop-blur-sm px-6 py-5 border border-[rgba(87,63,37,0.18)] shadow-sm">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text)] leading-tight">
              Get a Quote or Schedule Work
            </h1>

            <p className="mt-3 text-[var(--muted)] leading-7">
              Serving Eugene & Springfield. For the fastest estimate, text photos
              and a short description of the project.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:5419818246" className="btn-primary">
              Call 541-981-8246
            </a>
            <a href="sms:5419818246" className="btn-outline">
              Text for a Quote
            </a>

            {/* ✅ Keep the email link */}
            <a
              href="mailto:kanelopinskihandyman@gmail.com"
              className="btn-secondary"
            >
              Email Me
            </a>
          </div>
        </div>

        {/* Content grid */}
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {/* Left: Form */}
          <div className="wood-panel p-8">
            <div className="rounded-2xl bg-white/85 backdrop-blur-sm border border-[rgba(87,63,37,0.18)] p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[var(--text)]">
                Contact Form
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Fill this out and I’ll get back to you as soon as I can.
              </p>

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--text)]">
                    Name <span className="text-[var(--muted)]">(required)</span>
                  </label>
                  <input
                    name="name"
                    required
                    className="mt-2 w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text)]">
                    Phone <span className="text-[var(--muted)]">(required)</span>
                  </label>
                  <input
                    name="phone"
                    required
                    className="mt-2 w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    placeholder="(541) 981-8246"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text)]">
                    Email <span className="text-[var(--muted)]">(optional)</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="mt-2 w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text)]">
                    Location{" "}
                    <span className="text-[var(--muted)]">(optional)</span>
                  </label>
                  <input
                    name="location"
                    className="mt-2 w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    placeholder="Eugene, Springfield, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text)]">
                    What do you need help with?{" "}
                    <span className="text-[var(--muted)]">(required)</span>
                  </label>
                  <textarea
                    name="details"
                    required
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    placeholder="Describe the project, timeline, and anything important. (Include Airbnb check-in/check-out timing if relevant.)"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>

                  {status === "success" && (
                    <span className="text-sm font-medium text-green-700">
                      Sent! I’ll respond soon.
                    </span>
                  )}

                  {status === "error" && (
                    <span className="text-sm font-medium text-red-700">
                      {errorMsg || "Something went wrong. Please text or email me."}
                    </span>
                  )}
                </div>

                <p className="text-xs leading-5 text-[var(--muted)]">
                  Tip: For estimates, include photos and approximate dimensions.
                </p>
              </form>
            </div>
          </div>

          {/* Right: Quick contact + info */}
          <div className="wood-panel p-8">
            <div className="rounded-2xl bg-white/85 backdrop-blur-sm border border-[rgba(87,63,37,0.18)] p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[var(--text)]">
                Quick Contact
              </h2>

              <div className="mt-5 space-y-3 text-sm text-[var(--muted)]">
                <div className="flex items-start justify-between gap-6">
                  <span className="font-medium text-[var(--text)]">Phone</span>
                  <a className="underline underline-offset-4" href="tel:5419818246">
                    541-981-8246
                  </a>
                </div>

                <div className="flex items-start justify-between gap-6">
                  <span className="font-medium text-[var(--text)]">Text</span>
                  <a className="underline underline-offset-4" href="sms:5419818246">
                    Send a text
                  </a>
                </div>

                <div className="flex items-start justify-between gap-6">
                  <span className="font-medium text-[var(--text)]">Email</span>
                  <a
                    className="underline underline-offset-4"
                    href="mailto:kanelopinskihandyman@gmail.com"
                  >
                    kanelopinskihandyman@gmail.com
                  </a>
                </div>

                <div className="pt-4 border-t border-[rgba(87,63,37,0.18)]">
                  <div className="text-xs font-semibold tracking-wide uppercase text-[var(--accent-dark)]">
                    Service Area
                  </div>
                  <div className="mt-2 text-sm text-[var(--muted)]">
                    Eugene • Springfield • Nearby
                  </div>
                </div>

                <div className="pt-4 border-t border-[rgba(87,63,37,0.18)]">
                  <div className="text-xs font-semibold tracking-wide uppercase text-[var(--accent-dark)]">
                    Best for Quotes
                  </div>
                  <div className="mt-2 text-sm text-[var(--muted)]">
                    Text photos + a short description (and timing if it’s an Airbnb).
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="tel:5419818246" className="btn-primary">
                  Call
                </a>
                <a href="sms:5419818246" className="btn-outline">
                  Text
                </a>
                <a
                  href="mailto:kanelopinskihandyman@gmail.com"
                  className="btn-secondary"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-14 wood-panel p-10">
          <div className="rounded-2xl bg-white/85 backdrop-blur-sm border border-[rgba(87,63,37,0.18)] p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[var(--text)]">
              Airbnb Hosts
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              If this is for a turnover repair or punch list, include check-in /
              check-out timing and any “must-fix-before-next-guest” items.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
