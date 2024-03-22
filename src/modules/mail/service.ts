import * as jwt from 'jsonwebtoken';
import nodeMailer, { Transporter } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

import { redis } from '../../db/redis';
import {
  APP_URI,
  JWT_MAIL_VERIFICATION_EXPIRES_IN,
  JWT_SECRET_MAIL_VERIFICATION,
  MAIL_ADDRESS,
  MAIL_FROM,
  MAIL_HOST,
  MAIL_PASSWORD,
  MAIL_PORT,
  REDIS_MAIL_VERIFICATION_PREFIX,
  TEMPLATES_FOLDER,
} from '../../utils/constants';
import { getHtmlToSend } from '../../utils/template';

export class MailService {
  protected transporter: Transporter;

  constructor() {
    this.transporter = nodeMailer.createTransport({
      host: MAIL_HOST,
      port: parseInt(MAIL_PORT),
      secure: false, // TRUE for port 465 (smtps)
      auth: {
        user: MAIL_ADDRESS,
        pass: MAIL_PASSWORD,
      },
      tls: {
        ciphers: 'SSLv3',
      },
    });
  }

  async sendMail(data: {
    toAddress: string;
    subject: string;
    content: string;
  }) {
    const options: Mail.Options = {
      from: MAIL_FROM,
      to: data.toAddress,
      subject: data.subject,
      html: data.content,
    };
    await this.transporter.sendMail(options);
  }

  async sendVerificationMail(email: string) {
    const token: string = await this.createAndStoreVerificationToken(email);
    const link = `${APP_URI}/auth/verify-email?email=${email}&token=${token}`;
    const html = await getHtmlToSend(
      `${TEMPLATES_FOLDER}/VerificationEmail.html`,
      {
        link,
      },
    );
    const options: Mail.Options = {
      from: MAIL_FROM,
      to: email,
      subject: '[CINVEST] VERIFICATION EMAIL',
      html,
    };
    await this.transporter.sendMail(options);
  }

  async createAndStoreVerificationToken(email: string): Promise<string> {
    const token = jwt.sign({ sub: email }, JWT_SECRET_MAIL_VERIFICATION, {
      expiresIn: JWT_MAIL_VERIFICATION_EXPIRES_IN,
    });
    await redis.setex(
      `${REDIS_MAIL_VERIFICATION_PREFIX}${email}`,
      JWT_MAIL_VERIFICATION_EXPIRES_IN,
      token,
    );

    return token;
  }
}
