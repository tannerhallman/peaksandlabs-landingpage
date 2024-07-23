import type { NextApiResponse } from "next";

import { Resend } from "resend";

import { EmailTemplate } from "../../components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

interface Body {
  name?: string | null;
  email?: string | null;
  message?: string | null;
  template?: string | null;
}
export async function POST(req: Request, res: NextApiResponse) {
  try {
    // get the values form the req
    const body = await req.json();
    const { name, message, email, template } = body as Body;

    if (!email || !template) {
      return Response.json(
        { error: "email and template are required fields." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Peaks and Labs Campervan Co <adventure@peaksandlabscampervans.com>",
      to: [email],
      reply_to:
        "Peaks and Labs Campervan Co <peaksandlabscampervanco@gmail.com>",
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
