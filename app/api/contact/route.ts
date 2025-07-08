import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, phone, service, budget, timeline, message } =
      body;

    // Process data (e.g., save to database, send email via Nodemailer or SendGrid)
    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process form submission" },
      { status: 500 }
    );
  }
}
