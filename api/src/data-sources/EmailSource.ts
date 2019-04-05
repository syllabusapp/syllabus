import { EmailSendError } from '../errors';
import { Context } from './Context';
const mailjet = require('node-mailjet').connect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE,
);

export class EmailSource {
  // eslint-disable-next-line @typescript-eslint/no-parameter-properties
  public constructor(protected ctx: Context) {}

  protected confirmAccountUrl = `https://syllabusapp.com/confirm-account`;
  protected facebookUsername = `syllabusapp`;
  // @TODO update
  protected fromEmail = `devan@devanthe.dev`;
  protected fromName = `Syllabus App Support`;
  // @TODO update
  protected productAddress = `14700 Driftwater Drive Winter Garden, FL 34787`;
  protected productName = `Syllabus App`;
  protected resetPasswordUrl = `https://syllabusapp.com/reset-password`;
  protected twitterUsername = `syllabusapp`;
  protected welcomeUrl = `https://syllabusapp.com/`;

  protected knownVariables = {
    productAddress: this.productAddress,
    productName: this.productName,
    facebookUsername: this.facebookUsername,
    twitterUsername: this.twitterUsername,
  };

  protected standardOptions = {
    From: {
      Email: this.fromEmail,
      Name: this.fromName,
    },
    TemplateLanguage: true,
  };

  public async sendAccountConfirmationEmail(
    toEmail: string,
    toName: string,
    emailConfirmToken: string,
  ): Promise<boolean> {
    try {
      const request = await mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            ...this.standardOptions,
            To: [
              {
                Email: toEmail,
                Name: toName,
              },
            ],
            TemplateID: 731994,
            Subject: `[${this.productName}] Confirm your account`,
            Variables: {
              confirmAccountUrl: `${
                this.confirmAccountUrl
              }?email=${toEmail}&token=${emailConfirmToken}`,
              firstName: toName,
              subTitle: `Confirm your account to start using ${
                this.productName
              }.`,
              title: "Let's Confirm Your Account",
              ...this.knownVariables,
            },
          },
        ],
      });
      if (request.body.Messages[0].Status === 'success') {
        return true;
      } else {
        throw new EmailSendError();
      }
    } catch (err) {
      // @TODO: Log error to Sentry
      throw new EmailSendError();
    }
  }

  public async sendPasswordResetEmail(
    toEmail: string,
    toName: string,
    resetToken: string,
  ): Promise<boolean> {
    try {
      const request = await mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            ...this.standardOptions,
            To: [
              {
                Email: toEmail,
                Name: toName,
              },
            ],
            TemplateID: 731995,
            Subject: `[${this.productName}] Reset your password`,
            Variables: {
              emailAddress: toEmail,
              firstName: toName,
              resetUrl: `${
                this.resetPasswordUrl
              }?token=${resetToken}&email=${toEmail}`,
              subTitle:
                'A password reset was requested for this email address.',
              title: "Let's Reset Your Password",
              ...this.knownVariables,
            },
          },
        ],
      });
      if (request.body.Messages[0].Status === 'success') {
        return true;
      } else {
        throw new EmailSendError();
      }
    } catch (err) {
      // @TODO: Log error to Sentry
      throw new EmailSendError();
    }
  }

  public async sendPasswordChangedEmail(
    toEmail: string,
    toName: string,
  ): Promise<boolean> {
    try {
      const request = await mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            ...this.standardOptions,
            To: [
              {
                Email: toEmail,
                Name: toName,
              },
            ],
            TemplateID: 732147,
            Subject: `[${this.productName}] Password change completed`,
            Variables: {
              email: toEmail,
              firstName: toName,
              subTitle:
                'A password change was completed for this email address.',
              title: 'Your Password Was Changed',
              ...this.knownVariables,
            },
          },
        ],
      });
      if (request.body.Messages[0].Status === 'success') {
        return true;
      } else {
        throw new EmailSendError();
      }
    } catch (err) {
      // @TODO: Log error to Sentry
      throw new EmailSendError();
    }
  }

  public async sendWelcomeEmail(
    toEmail: string,
    toName: string,
  ): Promise<boolean> {
    try {
      const request = await mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            ...this.standardOptions,
            To: [
              {
                Email: toEmail,
                Name: toName,
              },
            ],
            TemplateID: 731887,
            Subject: `[${this.productName}] Welcome, ${toName}!`,
            Variables: {
              firstName: toName,
              subTitle: '',
              title: '',
              welcomeUrl: this.welcomeUrl,
              ...this.knownVariables,
            },
          },
        ],
      });
      if (request.body.Messages[0].Status === 'success') {
        return true;
      } else {
        throw new EmailSendError();
      }
    } catch (err) {
      // @TODO: Log error to Sentry
      throw new EmailSendError();
    }
  }
}
