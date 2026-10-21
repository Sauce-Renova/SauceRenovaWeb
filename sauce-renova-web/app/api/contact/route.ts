import { Resend } from "resend";
import { NextResponse } from "next/server";
import { emailValido, telefonoValido } from "@/lib/validarContacto";

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

const clean = (value: unknown, max: number) =>
  String(value ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

type Solicitud = {
  nombre: string;
  telefono: string;
  email: string;
  mensaje: string;
  tienePlacas: string;
  tipoPropiedad: string;
  interes: string[];
};

const fila = (etiqueta: string, valor: string) => `
  <tr>
    <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;font-size:13px;color:#4a5568;width:150px;vertical-align:top;">${etiqueta}</td>
    <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;font-size:15px;color:#1e2d45;font-weight:600;vertical-align:top;">${valor}</td>
  </tr>`;

const titulo = (texto: string) => `
  <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#6b8c3a;">${texto}</p>`;

const boton = (href: string, texto: string, fondo: string) => `
  <a href="${href}" style="display:inline-block;margin:0 8px 8px 0;padding:12px 24px;background-color:${fondo};color:#ffffff;font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;text-decoration:none;border-radius:999px;">${texto}</a>`;

const construirHtml = (s: Solicitud, fecha: string) => {
  const telefonoLimpio = s.telefono.replace(/[^\d+]/g, "");

  const botones = [
    s.telefono && telefonoLimpio ? boton(`tel:${escapeHtml(telefonoLimpio)}`, "Llamar", "#6b8c3a") : "",
    s.email ? boton(`mailto:${escapeHtml(s.email)}`, "Responder por correo", "#0354bf") : "",
  ].join("");

  const chips = s.interes.length
    ? s.interes
      .map(
        (i) =>
          `<span style="display:inline-block;margin:0 6px 6px 0;padding:6px 14px;background-color:#e9f2dc;color:#3d5a1c;border-radius:999px;font-size:13px;font-weight:600;">${escapeHtml(i)}</span>`
      )
      .join("")
    : "-";

  const telefonoHtml = s.telefono
    ? `<a href="tel:${escapeHtml(telefonoLimpio)}" style="color:#1e2d45;text-decoration:none;">${escapeHtml(s.telefono)}</a>`
    : "-";

  const emailHtml = s.email
    ? `<a href="mailto:${escapeHtml(s.email)}" style="color:#0354bf;text-decoration:underline;">${escapeHtml(s.email)}</a>`
    : "-";

  const mensajeHtml = s.mensaje
    ? `<div style="background-color:#faf9d4;border-left:4px solid #78a83f;border-radius:8px;padding:16px 18px;font-size:15px;line-height:1.6;color:#1e2d45;">${escapeHtml(s.mensaje).replace(/\n/g, "<br>")}</div>`
    : `<p style="margin:0;font-size:14px;color:#4a5568;font-style:italic;">Sin comentario adicional.</p>`;

  return `<!DOCTYPE html>
<html lang="es">
<body style="margin:0;padding:0;background-color:#f1efe0;font-family:'Segoe UI',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1efe0;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;">
          <tr>
            <td bgcolor="#0354bf" style="background-color:#0354bf;background-image:linear-gradient(135deg,#78a83f,#0354bf);padding:28px 32px;">
              <p style="margin:0 0 4px;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#e6f0d6;">Sauce Renova</p>
              <h1 style="margin:0;font-size:24px;line-height:1.25;color:#ffffff;">Nueva solicitud de contacto</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px 8px;">
              ${titulo("Datos de contacto")}
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${fila("Nombre", escapeHtml(s.nombre))}
                ${fila("Teléfono", telefonoHtml)}
                ${fila("Correo electrónico", emailHtml)}
              </table>
              <div style="padding-top:16px;">${botones}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px 8px;">
              ${titulo("Lo que necesita")}
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${fila("Tiene placas", escapeHtml(s.tienePlacas || "-"))}
                ${fila("Tipo de propiedad", escapeHtml(s.tipoPropiedad || "-"))}
              </table>
              <p style="margin:16px 0 8px;font-size:13px;color:#4a5568;">Interesado/a en</p>
              <div>${chips}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px 28px;">
              ${titulo("Comentario")}
              ${mensajeHtml}
            </td>
          </tr>
          <tr>
            <td style="background-color:#1e2d45;padding:18px 32px;">
              <p style="margin:0;font-size:12px;line-height:1.6;color:#a0aec0;">
                Recibido el ${escapeHtml(fecha)} desde el formulario de contacto de la web.<br>
                El usuario ha aceptado la política de privacidad.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
};

const construirTexto = (s: Solicitud, fecha: string) =>
  [
    "NUEVA SOLICITUD DE CONTACTO",
    "",
    `Nombre: ${s.nombre}`,
    `Teléfono: ${s.telefono || "-"}`,
    `Correo electrónico: ${s.email || "-"}`,
    "",
    `Tiene placas: ${s.tienePlacas || "-"}`,
    `Tipo de propiedad: ${s.tipoPropiedad || "-"}`,
    `Interesado/a en: ${s.interes.join(", ") || "-"}`,
    "",
    "Comentario:",
    s.mensaje || "Sin comentario adicional.",
    "",
    `Recibido el ${fecha} desde el formulario de contacto de la web.`,
    "El usuario ha aceptado la política de privacidad.",
  ].join("\n");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const solicitud: Solicitud = {
    nombre: clean(body.nombre, 100),
    telefono: clean(body.telefono, 30),
    email: clean(body.email, 120),
    mensaje: String(body.mensaje ?? "").trim().slice(0, 2000),
    tienePlacas: clean(body.tienePlacas, 20),
    tipoPropiedad: clean(body.tipoPropiedad, 80),
    interes: Array.isArray(body.interes)
      ? body.interes.slice(0, 10).map((i) => clean(i, 80))
      : [],
  };

  if (body.aceptaPrivacidad !== true) {
    return NextResponse.json({ ok: false, error: "privacy_not_accepted" }, { status: 400 });
  }
  if (!solicitud.nombre || (!solicitud.telefono && !solicitud.email)) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }
  if (solicitud.telefono && !telefonoValido(solicitud.telefono)) {
    return NextResponse.json({ ok: false, error: "invalid_phone" }, { status: 400 });
  }
  if (solicitud.email && !emailValido(solicitud.email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  if (!apiKey || !to) {
    console.error("Contact route: missing RESEND_API_KEY or CONTACT_EMAIL");
    return NextResponse.json({ ok: false, error: "server_config" }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM || "onboarding@resend.dev";

  const fecha = new Date().toLocaleString("es-ES", {
    timeZone: "Europe/Madrid",
    dateStyle: "long",
    timeStyle: "short",
  });

  const base = {
    from,
    to,
    subject: `Nueva solicitud de contacto: ${solicitud.nombre}`,
    html: construirHtml(solicitud, fecha),
    text: construirTexto(solicitud, fecha),
  };

  let { data, error } = await resend.emails.send(
    solicitud.email ? { ...base, replyTo: solicitud.email } : base
  );

  if (error && solicitud.email) {
    console.error("Resend error with replyTo, retrying without it:", error);
    ({ data, error } = await resend.emails.send(base));
  }

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  console.log("Contact email sent:", data?.id);
  return NextResponse.json({ ok: true });
}