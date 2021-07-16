import User from "../domain/User";
import { IMailingService } from "./dependencies/IMailingService";
import { IUserRepository } from "./dependencies/IUserRepository";

class RegistrationService {
  private readonly mailingService: IMailingService;
  private readonly userRepository: IUserRepository;

  constructor(mailingService: IMailingService, userRepository: IUserRepository) {
    this.mailingService = mailingService;
    this.userRepository = userRepository;
  }

  public register(name: string, email: string, password: string) {
    const user = new User(name, email, password);

    this.userRepository.store(user);
    this.mailingService.sendMail(user.email, 'email@email.com', 'Welcome!');
  }
}

export default RegistrationService;