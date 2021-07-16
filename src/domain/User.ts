class User {
  public name: string;
  public email: string;
  public password: string;

  constructor(name: string, email: string, password: string) {
    if (!name) throw new Error("Name is required");
    if (!email) throw new Error("Email is required");
    if (!password) throw new Error("Password is required");

    this.name = name;
    this.email = email;
    this.password = password;
  }
}

export default User;