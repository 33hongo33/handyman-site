export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { Resend } from "resend";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    // Debug mode: POST /api/contact?debug=1
    // Returns env visibility so we can confirm Vercel has the key.
    const url = new URL(req.url);
    const debug = url.searchParams.get("debug") === "1";
    if (debug) {
      return new Response(
        JSON.stringify({
          ok: true,
          debug: true,
          hasKey: Boolean(apiKey),
          keyLen: apiKey?.length ?? 0,
          nodeEnv: process.env.NODE_ENV ?? null,
          vercelEnv: process.env.VERCEL_ENV ?? null,
        }),
        { status: 200, headers: { "content-type": "application/json" } }
      );
    }

    console.log("RESEND KEY PRESENT?", Boolean(apiKey), "LEN", apiKey?.length ?? 0);

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Missing RESEND_API_KEY" }), {
        status: 500,
        headers: { "content-type": "application/json" },
      });
    }

    const resend = new Resend(apiKey);

    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const location = String(body?.location ?? "").trim();
    const details = String(body?.details ?? "").trim();

    if (!name || !phone || !details) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email || "(not provided)")}</p>
        <p><strong>Location:</strong> ${escapeHtml(location || "(not provided)")}</p>
        <p><strong>Details:</strong></p>
        <pre style="white-space: pre-wrap; background:#f7f7f7; padding:12px; border-radius:8px;">${escapeHtml(
          details
        )}</pre>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "Kane Lopinski Handyman <onboarding@resend.dev>",
      to: ["kanelopinskihandyman@gmail.com"],
      subject: `New quote request: ${name}${location ? ` (${location})` : ""}`,
      ...(email ? { reply_to: email } : {}),
      html,
    });

    if (error) {
      console.error("RESEND ERROR:", error);
      return new Response(
        JSON.stringify({
          error: error.message ?? "Resend send failed",
          details: error,
        }),
        { status: 502, headers: { "content-type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ ok: true, id: data?.id ?? null }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (err: any) {
    console.error("API ROUTE ERROR:", err);
    return new Response(
      JSON.stringify({ error: err?.message || "Failed to send" }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }
}