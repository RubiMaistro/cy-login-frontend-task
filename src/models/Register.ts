import { User } from "./User";

export type RegisterData = {
  email: string,
  password: string
}

export type RegisterResponse = {
  result: Partial<User> & {
    error?: string;
  };
}
