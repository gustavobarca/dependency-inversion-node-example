import { IMailingService } from "./dependencies/IMailingService";
import { IUserRepository } from "./dependencies/IUserRepository";

class AuthenticationService {
  private readonly mailingService: IMailingService;
  private readonly userRepository: IUserRepository;

  constructor(mailingService: IMailingService, userRepository: IUserRepository) {
    this.mailingService = mailingService;
    this.userRepository = userRepository;
  }

  public authenticate(email: string, password: string) {
    const user = this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('User not exists');
    }

    if (user.password !== password) {
      throw new Error('Password or email is invalid');
    }

    this.mailingService.sendMail(email, 'email@email.com', 'Logged in device X');
  }
}

export default AuthenticationService;