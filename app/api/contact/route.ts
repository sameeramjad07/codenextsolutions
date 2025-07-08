import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const {
        name,
        email,
        company,
        phone,
        service,
        budget,
        timeline,
        message,
      } = req.body;
      // Process data (e.g., save to database, send email via Nodemailer or SendGrid)
      res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to process form submission" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
