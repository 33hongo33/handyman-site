
export const runtime = "nodejs";


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

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Missing RESEND_API_KEY  (contact route v2" }),
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const location = String(body?.location ?? "").trim();
    const details = String(body?.details ?? "").trim();

    if (!name || !phone || !details) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email || "(not provided)")}</p>
        <p><strong>Location:</strong> ${escapeHtml(location || "(not provided)")}</p>
        <p><strong>Details:</strong></p>
        <pre style="white-space: pre-wrap; background:#f7f7f7; padding:12px; border-radius:8px; border:1px solid #e5e5e5;">
${escapeHtml(details)}
        </pre>
      </div>
    `;

    const result = await resend.emails.send({
      from: "Kane Lopinski Handyman <onboarding@resend.dev>",
      to: "kanelopinskihandyman@gmail.com",
      subject: `New quote request: ${name}${location ? ` (${location})` : ""}`,
      replyTo: email || undefined,
      html,
    });

    if ((result as any)?.error) {
      return new Response(
        JSON.stringify({ error: "Resend failed" }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });

  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err?.message || "Failed to send" }),
      { status: 500 }
    );
  }
}
