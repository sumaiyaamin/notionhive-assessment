export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, message } = body;

    if (!firstName || !lastName || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    // You can integrate email service like SendGrid or save to DB here

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error in contact API:", error);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
