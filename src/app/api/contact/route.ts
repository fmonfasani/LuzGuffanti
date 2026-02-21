import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Luz Guffanti Web <onboarding@resend.dev>",
      to: ["luzguffanti13@gmail.com"],
      replyTo: email,
      subject: `Nuevo mensaje de ${name} - Sitio Web`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="border-bottom: 3px solid #94634F; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="color: #94634F; font-size: 24px; margin: 0;">Nuevo mensaje desde tu sitio web</h1>
          </div>
          
          <div style="background: #f9f5f3; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <p style="margin: 0 0 12px 0; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Nombre</p>
            <p style="margin: 0 0 20px 0; color: #333; font-size: 16px; font-weight: 600;">${name}</p>
            
            <p style="margin: 0 0 12px 0; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
            <p style="margin: 0 0 20px 0; color: #333; font-size: 16px;"><a href="mailto:${email}" style="color: #94634F;">${email}</a></p>
            
            <p style="margin: 0 0 12px 0; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Mensaje</p>
            <p style="margin: 0; color: #333; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #999; font-size: 12px; text-align: center; margin-top: 30px;">
            Este mensaje fue enviado desde el formulario de contacto de luzguffanti.com
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Error al enviar el mensaje" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 },
    );
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 },
    );
  }
}
