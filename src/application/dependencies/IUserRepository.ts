import User from "../../domain/User";

export interface IUserRepository {
  store(entity: User): void
  findById(id: string): User | undefined
  remove(id: string): void
  count(): number
  findByEmail(email: string): User | undefined
}