import AuthenticationService from './application/AuthenticationService';
import RegistrationService from './application/RegistrationService';
import JsonUserRepository from './infrastructure/repositories/JsonUserRepository';
import MemoryUserRepository from './infrastructure/repositories/MemoryUserRepository';
import MailChimpService from './infrastructure/services/MailChimpService';
import MoosendMailService from './infrastructure/services/MoosendMailService';

export default function main() {
  const userRepository = new JsonUserRepository();
  const userMemoryRepository = new MemoryUserRepository();
  const mailchimp = new MailChimpService('test-key', 'email@email.com');
  const moosend = new MoosendMailService('test-key');

  const registrationService = new RegistrationService(moosend, userMemoryRepository);
  const authenticationService = new AuthenticationService(moosend, userMemoryRepository);

  registrationService.register('Gustavo', 'gustavo@email.com', '123');

  console.log('\n✅ User registered successfully!\n');

  authenticationService.authenticate('gustavo@email.com', '123');

  console.log('\n🎉 Authenticated successfully!');
}