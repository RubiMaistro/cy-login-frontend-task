import React, { createContext, useEffect, useState } from "react";
import { User } from "../models/User"
import Cookies from "universal-cookie";
import { readJsonConfigFile } from "typescript";

type AuthContextType = {
  user?: User;
  setUser: (user: User) => void;
  clearUser: VoidFunction;
}

const initialContext: AuthContextType = {
  user: undefined,
  setUser: (user: User) => {},
  clearUser: () => {},
}

export const AuthContext = createContext<AuthContextType>(initialContext);

interface props {
  children?: React.ReactNode;
}

export const AuthContextProvider: React.FC<props> = ({children}) => {
  const [user, setUser] = useState<User | undefined>();

  const cookies = new Cookies();

  const setUserHandler = (user: User) => {
    cookies.set('user', JSON.stringify(user), {path: '/'});
    setUser(user);
  };

  const clearUserHandler = () => {
    cookies.remove('user');
    setUser(undefined);
  };

  useEffect(() => {
    const user = cookies.get('user');
    if (!user) return;
    setUser(user as User);
  }, []);
  return (
    <AuthContext.Provider value={{user, setUser: setUserHandler, clearUser: clearUserHandler}}>
      {children}
    </AuthContext.Provider>
  );
}