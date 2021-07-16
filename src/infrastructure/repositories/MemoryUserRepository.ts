import { IUserRepository } from "../../application/dependencies/IUserRepository";
import User from "../../domain/User";

class MemoryUserRepository implements IUserRepository {
  private users: User[] = [];

  public store(entity: User): void {
    this.users.push(entity)
  }

  public findById(id: string): User | undefined {
    throw new Error('not implemented');
  }

  public remove(id: string): void {
    throw new Error("Method not implemented.");
  }

  public count(): number {
    return this.users.length;
  }

  public findByEmail(email: string): User | undefined {
    return this.users.find(user => user.email === email);
  }
}

export default MemoryUserRepository;