import { IMailingService } from "../../application/dependencies/IMailingService";

class MailChimpService implements IMailingService {
  private key: string;
  private sender: string;

  constructor(key: string, sender: string) {
    this.key = key;
    this.sender = sender;
  }

  public sendMail(recipient: string, sender: string, message: string) {
    console.log(`📪 [MailChimp] ${sender} sending "${message}" to ${recipient} with key ${this.key}`);
  }
}

export default MailChimpService;