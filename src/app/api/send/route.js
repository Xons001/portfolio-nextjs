import nodemailer from 'nodemailer';

export async function POST(req) {
  const { email, subject, message } = await req.json();

  // Configuración del transporte de nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Usuario desde el archivo .env.local
      pass: process.env.EMAIL_PASS, // Contraseña de aplicación desde el archivo .env.local
    },
  });

  // Detalles del correo electrónico
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: subject,
    text: message,
  };

  // Enviar correo electrónico
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
