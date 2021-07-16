import { IMailingService } from "../../application/dependencies/IMailingService";

class MoosendMailService implements IMailingService {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  sendMail(recipient: string, sender: string, message: string): void {
    console.log(`📪 [MoosendMail] ${sender} sending "${message}" to ${recipient} with key ${this.key}`);
  }
}

export default MoosendMailService;