export default class LoginCredentials {
  private static keys: string[] = ['email', 'password'];
  private email: string;
  private password: string;

  constructor(email: string, pass: string) {
    this.email = email;
    this.password = pass;
  }

  toJSON () : string {
    const data: any = {};
    data.email = this.email;
    data.password = this.password;
    return JSON.stringify(data);
  }
};
