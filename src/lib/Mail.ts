import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { MailOptions } from 'nodemailer/lib/json-transport';
import Mailer from 'nodemailer/lib/mailer';

class Mail {
  private transporter!: Mailer;

  constructor() {
    const transport: SMTPTransport.Options = {
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    };
    this.transporter = nodemailer.createTransport(transport);
  }

  public async sendMail(name: string, email: string) {
    const mailOptions: MailOptions = {
      from: 'John Doe <johndoe@private.me>',
      to: email,
      subject: 'Background Jobs',
      text: `Hello ${name}.`,
    };
    await this.transporter.sendMail(mailOptions);
  }
}

export default new Mail();
