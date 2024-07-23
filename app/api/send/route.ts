import type { NextApiRequest, NextApiResponse } from "next";

import { Resend } from "resend";

import { EmailTemplate } from "../../components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Peaks and Labs Campervan Co <adventure@peaksandlabscampervans.com>",
      to: ["delivered@resend.dev"],
      reply_to: 'Peaks and Labs Campervan Co <peaksandlabscampervanco@gmail.com>',
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }),
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
