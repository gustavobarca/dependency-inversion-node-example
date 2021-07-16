export interface IMailingService {
  sendMail(recipient: string, sender: string, message: string): void
}