import type { NextApiResponse } from "next";

import { Resend } from "resend";

import { EmailTemplate } from "../../components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

interface Body {
  name: string;
  email: string;
  message: string;
}
export async function POST(req: Request, res: NextApiResponse) {
  try {
    // get the values form the req
    const body = await req.json();
    const { name, message, email } = body as Body;

    if (!email || !message || !email) {
      return Response.json(
        { error: "email, name, and message are required fields." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Peaks and Labs Campervan Co <adventure@peaksandlabscampervans.com>",
      to: ["peaksandlabscampervanco@gmail.com"],
      reply_to: email,
      subject: "Hello world",
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
