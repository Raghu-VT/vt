import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    // Save inquiry to database
    const dbRes = await fetch(`${supabaseUrl}/rest/v1/contact_inquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: serviceRoleKey!,
        Authorization: `Bearer ${serviceRoleKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ name, email, phone, subject, message }),
    });

    if (!dbRes.ok) {
      const errText = await dbRes.text();
      console.error("DB insert failed:", errText);
    }

    // Send email notification to info@venkitravel.com via mailchannels
    // This uses the MailChannels API available on Supabase edge functions
    const emailPayload = {
      personalizations: [
        {
          to: [{ email: "info@venkitravel.com", name: "Venki Travel" }],
        },
      ],
      from: { email: "noreply@venkitravel.com", name: "Venki Travel Website" },
      subject: `New Contact Inquiry: ${subject}`,
      content: [
        {
          type: "text/html",
          value: `
            <h2>New Contact Inquiry from Venkitravel.com</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <hr/>
            <p style="color:#999;font-size:12px;">This inquiry was submitted via the Venkitravel.com contact form.</p>
          `,
        },
      ],
    };

    try {
      const emailRes = await fetch("https://api.mailchannels.net/tx/v1/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailPayload),
      });
      if (!emailRes.ok) {
        const emailErr = await emailRes.text();
        console.error("Email send failed:", emailErr);
      }
    } catch (emailError) {
      console.error("Email service error:", emailError);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Inquiry submitted successfully" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error processing contact form:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
