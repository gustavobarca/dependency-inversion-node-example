import User from "../../domain/User";
import fs from 'fs';
import { IUserRepository } from "../../application/dependencies/IUserRepository";

class JsonUserRepository implements IUserRepository {
  private getData(): User[] {
    const rawdata = fs.readFileSync(`${__dirname}/users.json`);
    return JSON.parse(rawdata.toString());
  }

  public store(entity: User): void {
    const users = this.getData();

    if (users.find(user => user.email === entity.email)) return;

    users.push(entity);
    fs.writeFileSync(`${__dirname}/users.json`, JSON.stringify(users));
  }

  public findById(id: string): User | undefined {
    throw new Error('Not implemented');
  }

  public remove(id: string): void {
    throw new Error("Not implemented.");
  }

  public count(): number {
    const users = this.getData();
    return users.length;
  }

  public findByEmail(email: string): User | undefined {
    const users = this.getData();
    const user = users.find(user => user.email === email);

    if (!user) return undefined;

    return new User(user.name, user.email, user.password);
  }
}

export default JsonUserRepository;