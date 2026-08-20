import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  // Honeypot: real users never fill this hidden field, bots often do.
  company?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = { name: 120, subject: 200, message: 5000 };

function badRequest(message: string) {
  return NextResponse.json({ ok: false, error: message }, { status: 400 });
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return badRequest("Geçersiz istek gövdesi.");
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const subject = (body.subject ?? "").trim();
  const message = (body.message ?? "").trim();

  // Honeypot dolu geldiyse bot varsayılır; kullanıcıya normal başarı
  // mesajı gösterilir ama mail gönderilmez.
  if (body.company && body.company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !subject || !message) {
    return badRequest("Ad, e-posta, konu ve mesaj alanları zorunludur.");
  }
  if (!EMAIL_RE.test(email)) {
    return badRequest("Geçerli bir e-posta adresi girin.");
  }
  if (
    name.length > MAX_LEN.name ||
    subject.length > MAX_LEN.subject ||
    message.length > MAX_LEN.message
  ) {
    return badRequest("Girilen metinlerden biri çok uzun.");
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail = process.env.CONTACT_TO_EMAIL || smtpUser;

  if (!smtpUser || !smtpPass || !toEmail) {
    console.error(
      "Contact form: SMTP_USER / SMTP_PASS / CONTACT_TO_EMAIL ortam değişkenleri eksik."
    );
    return NextResponse.json(
      { ok: false, error: "Mesaj şu anda gönderilemiyor. Lütfen daha sonra tekrar deneyin." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // STARTTLS 587 portunda kullanılır
    requireTLS: true,
    auth: { user: smtpUser, pass: smtpPass },
  });

  try {
    await transporter.sendMail({
      from: `"Siyaset ve Bürokrasi Topluluğu — İletişim Formu" <${smtpUser}>`,
      to: toEmail,
      replyTo: `"${name}" <${email}>`,
      subject: `[İletişim Formu] ${subject}`,
      text: `Ad Soyad: ${name}\nE-posta: ${email}\nKonu: ${subject}\n\nMesaj:\n${message}`,
      html: `<p><strong>Ad Soyad:</strong> ${escapeHtml(name)}</p>
<p><strong>E-posta:</strong> ${escapeHtml(email)}</p>
<p><strong>Konu:</strong> ${escapeHtml(subject)}</p>
<p><strong>Mesaj:</strong></p>
<p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`,
    });
  } catch (error) {
    console.error("Contact form: e-posta gönderilemedi.", error);
    return NextResponse.json(
      { ok: false, error: "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
