import { useState } from "react";
import { User } from "../models/User";
import { LoginData } from "../models/Login";
import axios from "axios";
import { useAuth } from "./useAuth";

export type UseLogin = () => {
  loading: boolean;
  error?: string;
  login: (credentials: LoginData) => Promise<boolean>;
};

type LoginResponse = {
  result: Partial<User> & {
    error?: string;
  };
}

const useLogin: UseLogin = () => {

  const {setUser} = useAuth();
  
  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<string | undefined>();


  const login = async (data: LoginData): Promise<boolean> => {
    try {
      setLoading(true);

      const response = await axios.post<LoginResponse>('https://us-central1-ria-server-b1103.cloudfunctions.net/authenticate', {data});
  
      const responseData = response.data;

      if (responseData.result.error) {
        setLoading(false);
        setError(responseData.result.error);
        return false;
      }
  
      setUser(responseData.result as User);

      return true;
    } catch (error: unknown) {
      setLoading(false);
      return false;
    }
  };

  return {
    loading,
    error,
    login,
  }
};

export default useLogin;
