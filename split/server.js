// server.js
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-code", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.json({ success: false, error: "Email required" });

  // Генеруємо 6-значний код
  const code = Math.floor(100000 + Math.random() * 900000);

  try {
    // ⚠️ ВАЖЛИВО:
    // Використай пароль додатку Gmail (не звичайний пароль)
    // Докладніше нижче 👇
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "alezhaobyxovtt@gmail.com", // заміни своїм Gmail
        pass: "ormk yath okqr liqk",   // пароль додатку (див. інструкцію)
      },
    });

    await transporter.sendMail({
      from: '"Split Verification" <yourgmail@gmail.com>',
      to: email,
      subject: "Your Split verification code",
      text: `Your verification code is: ${code}`,
      html: `
       <div style="
    background: linear-gradient(135deg, #111, #222);
    color: #fff;
    font-family: 'Segoe UI', Roboto, Arial, sans-serif;
    padding: 40px;
    border-radius: 12px;
    max-width: 500px;
    margin: auto;
    box-shadow: 0 0 20px rgba(0,0,0,0.4);
  ">
    <h2 style="text-align:center; color:#fff;">Confirmation of registration</h2>
    <p style="font-size:16px; color:#ccc; text-align:center;">
      Thank you for registering at <strong>Split</strong>! 
      To complete the process, enter this verification code:
    </p>

    <div style="
      background:#fff;
      color:#000;
      font-size:28px;
      font-weight:bold;
      text-align:center;
      padding:15px 0;
      border-radius:10px;
      letter-spacing:3px;
      margin: 25px 0;
    ">
      ${code}
    </div>

    <p style="text-align:center; color:#aaa; font-size:14px;">
      If you did not send this request, simply ignore this message.
    </p>
    
    <hr style="border: none; border-top: 1px solid #333; margin: 30px 0;">
    <p style="text-align:center; color:#666; font-size:12px;">
      © ${new Date().getFullYear()} Split. All rights reserved.
    </p>
  </div>
  `
    });

    console.log(`✅ Code ${code} sent to ${email}`);
    res.json({ success: true, code });
  } catch (err) {
    console.error("❌ Email error:", err);
    res.json({ success: false, error: "Failed to send email" });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Local backend running on http://localhost:${PORT}`));
