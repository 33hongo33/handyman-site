export const runtime = "nodejs";

import { Resend } from "resend";

export async function POST() {
  const key = process.env.RESEND_API_KEY;

  return new Response(
    JSON.stringify({
      DEBUG: "THIS IS THE ACTIVE ROUTE FILE",
      hasKey: Boolean(key),
      keyPrefix: key ? key.slice(0, 3) : null,
      keyLength: key ? key.length : 0,
      timestamp: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
