import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { nombre, telefono, email, mensaje } = await req.json();

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL!,
      subject: `Nuevo contacto de ${nombre}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error }, { status: 500 });
  }
}