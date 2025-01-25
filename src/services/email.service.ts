import nodemailer from "nodemailer";
import { config } from "@/config/environment";

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export class EmailService {
  private static transporter = nodemailer.createTransport({
    host: config.SMTP_HOST,
    port: config.SMTP_PORT,
    secure: config.NODE_ENV === "production",
    auth: {
      user: config.SMTP_USER,
      pass: config.SMTP_PASS,
    },
  });

  static async sendEmail({ to, subject, html }: EmailOptions): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: `"${config.APP_NAME}" <${config.SMTP_USER}>`,
        to,
        subject,
        html,
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      throw new Error("Failed to send email");
    }
  }

  static async sendWelcomeEmail(email: string, name?: string): Promise<void> {
    const html = `
      <h1>Welcome to ${config.APP_NAME}!</h1>
      <p>Hello ${name || "there"},</p>
      <p>Thank you for joining us. We're excited to have you on board!</p>
    `;

    await this.sendEmail({
      to: email,
      subject: `Welcome to ${config.APP_NAME}`,
      html,
    });
  }

  static async sendPasswordResetEmail(
    email: string,
    resetToken: string,
  ): Promise<void> {
    const resetUrl = `${config.CLIENT_URL}/reset-password?token=${resetToken}`;
    const html = `
      <h1>Password Reset Request</h1>
      <p>Click the button below to reset your password:</p>
      <a href="${resetUrl}" style="padding: 10px 20px; background: #007bff; color: white; text-decoration: none; border-radius: 5px;">
        Reset Password
      </a>
      <p>If you didn't request this, please ignore this email.</p>
    `;

    await this.sendEmail({
      to: email,
      subject: "Password Reset Request",
      html,
    });
  }
}
