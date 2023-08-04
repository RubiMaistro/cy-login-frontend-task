import { useContext } from "react";
import { User } from "../models/User"
import { AuthContext } from "../context/AuthContext";

type UseAuth = () => {
  user?: User;
  setUser: (user: User) => void;
  clearUser: VoidFunction;
}

export const useAuth: UseAuth = () => {
  const {user, setUser, clearUser} = useContext(AuthContext);
  
  return {user, setUser, clearUser};
};